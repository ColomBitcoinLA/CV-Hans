"""Prepara la foto del CV: recorte de retrato + grade de color vivo pero natural
+ limpieza del fondo (moldura del techo).

Salida: print/assets/foto-cv.jpg (480x600 px -> 32x40 mm a ~380 dpi)
"""
import os

import numpy as np
from PIL import Image, ImageEnhance, ImageFilter

ROOT = os.path.abspath(
    os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..")
)
SRC = os.path.join(ROOT, "assets", "profile", "hans2.jpg")
OUT_DIR = os.path.join(ROOT, "print", "assets")
OUT = os.path.join(OUT_DIR, "foto-cv.jpg")
os.makedirs(OUT_DIR, exist_ok=True)

# --- 1. Recorte 4:5 (32x40 mm) alrededor de cabeza y hombros ---------------
im = Image.open(SRC).convert("RGB")
W, H = im.size
crop_w, crop_h = 576, 720
x0, y0 = 100, 60
x0 = max(0, min(x0, W - crop_w))
y0 = max(0, min(y0, H - crop_h))
im = im.crop((x0, y0, x0 + crop_w, y0 + crop_h))

# --- 2. Limpieza del fondo: quita restos de la moldura del techo -----------
# Se ajusta una superficie suave al color de la pared (píxeles claros y
# desaturados) y se rellena con ella la franja rojiza de la esquina.
def clean_wall(image: Image.Image) -> Image.Image:
    a = np.asarray(image).astype(np.float32)
    h, w = a.shape[:2]
    yy, xx = np.mgrid[0:h, 0:w].astype(np.float32)
    lum = a @ np.array([0.299, 0.587, 0.114], dtype=np.float32)
    sat = a.max(axis=2) - a.min(axis=2)
    wall = (lum > 185) & (sat < 18) & (xx < 320) & (yy < 220)

    xn, yn = xx / w, yy / h
    basis = np.stack([np.ones_like(xn), xn, yn, xn * xn, xn * yn, yn * yn], axis=-1)
    coef, *_ = np.linalg.lstsq(basis[wall], a[wall], rcond=None)
    pred = basis @ coef

    diff = np.abs(a - pred).max(axis=2)
    target = (yy < 32) & (xx < 350) & (diff > 7)
    mask = np.asarray(
        Image.fromarray((target * 255).astype(np.uint8)).filter(
            ImageFilter.GaussianBlur(3.5)
        )
    ).astype(np.float32)[..., None] / 255.0

    out = a * (1 - mask) + pred * mask
    return Image.fromarray(np.clip(out, 0, 255).astype(np.uint8))


im = clean_wall(im)

im = im.resize((480, 600), Image.LANCZOS)
arr = np.asarray(im).astype(np.float32) / 255.0

# --- 3. Balance de blancos (gray-world suave) ------------------------------
mean = arr.reshape(-1, 3).mean(axis=0)
gain = mean.mean() / mean
arr = np.clip(arr * (1 + (gain - 1) * 0.65), 0, 1)

# --- 4. Curva de contraste suave ------------------------------------------
def s_curve(x, amount):
    return np.clip(x + amount * np.sin((x - 0.5) * np.pi * 2) * 0.5, 0, 1)

arr = s_curve(arr, 0.09)
arr = np.clip(arr * 1.045 + 0.008, 0, 1)  # ligera subida de exposición

# --- 5. Vibrance (más color en tonos apagados, sin saturar la piel) -------
lum = arr @ np.array([0.299, 0.587, 0.114], dtype=np.float32)
sat = arr.max(axis=2) - arr.min(axis=2)
vibrance = 1.0 + 0.26 * (1 - np.clip(sat * 1.6, 0, 1))
vibrance = np.where(lum > 0.82, 1.0, vibrance)  # protege altas luces
arr = np.clip(lum[..., None] + (arr - lum[..., None]) * vibrance[..., None], 0, 1)

# --- 6. Split toning muy sutil: sombras frescas, luces cálidas ------------
lum = arr @ np.array([0.299, 0.587, 0.114], dtype=np.float32)
shadow_w = (np.clip(1 - lum * 1.9, 0, 1)[..., None] ** 1.5) * 0.22
highlight_w = np.clip((lum - 0.62) * 2.4, 0, 1)[..., None] * 0.18
shadow_tint = np.array([0.93, 1.015, 1.045], dtype=np.float32)
light_tint = np.array([1.03, 1.002, 0.975], dtype=np.float32)
arr = arr * (1 - shadow_w) + arr * shadow_tint * shadow_w
arr = arr * (1 - highlight_w) + arr * light_tint * highlight_w

# --- 7. Claridad local suave ----------------------------------------------
blur = np.asarray(
    Image.fromarray((np.clip(arr, 0, 1) * 255).astype(np.uint8)).filter(
        ImageFilter.GaussianBlur(7)
    )
).astype(np.float32) / 255.0
arr = np.clip(arr + (arr - blur) * 0.18, 0, 1)

# --- 8. Viñeta discreta ----------------------------------------------------
h, w = arr.shape[:2]
yy, xx = np.mgrid[0:h, 0:w]
cx, cy = w * 0.5, h * 0.40
dist = np.sqrt(((xx - cx) / (w * 1.05)) ** 2 + ((yy - cy) / (h * 1.05)) ** 2)
arr = arr * np.clip(1.03 - 0.16 * dist**2, 0, 1)[..., None]

out = Image.fromarray((np.clip(arr, 0, 1) * 255).astype(np.uint8))
out = out.filter(ImageFilter.UnsharpMask(radius=1.2, percent=70, threshold=4))
out = ImageEnhance.Color(out).enhance(1.05)
out.save(OUT, "JPEG", quality=93, subsampling=1, optimize=True)
print("OK", OUT, out.size, round(os.path.getsize(OUT) / 1024), "KB")
