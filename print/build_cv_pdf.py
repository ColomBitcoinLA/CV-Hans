"""Genera el PDF que descarga el botón "Descargar PDF" del sitio.

- Imprime print/cv-print.html con Edge/Chrome headless: así el archivo sale
  limpio, sin la fecha, el título ni la URL que agrega el navegador al imprimir.
- Añade metadatos (título, autor, palabras clave).
- Escribe assets/cv/hans-steven-arango-cv.pdf (el archivo que enlaza index.html).
- Exporta vistas previas PNG en print/preview/.
- Actualiza el ?v=<hash> de index.html con un hash de las fuentes del PDF,
  para que los navegadores no sirvan una versión vieja desde caché.

Funciona en Windows (Edge/Chrome), macOS y Linux (Google Chrome o Chromium),
por eso lo puede ejecutar GitHub Actions.

Uso:  python print/build_cv_pdf.py
"""
import hashlib
import os
import re
import shutil
import subprocess
import sys
import tempfile

from pypdf import PdfReader, PdfWriter

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, ".."))
HTML = os.path.join(HERE, "cv-print.html")
CSS = os.path.join(HERE, "cv-print.css")
FONTS_CSS = os.path.join(HERE, "fonts.css")
FONT_DIR = os.path.join(HERE, "fonts")
PHOTO = os.path.join(HERE, "assets", "foto-cv.jpg")
QR = os.path.join(HERE, "assets", "qr-web.svg")
INDEX = os.path.join(ROOT, "index.html")
FINAL = os.path.join(ROOT, "assets", "cv", "hans-steven-arango-cv.pdf")
PREVIEW_DIR = os.path.join(HERE, "preview")

# Rutas típicas de instalación (Windows) y nombres en PATH (macOS/Linux).
BROWSERS = [
    os.environ.get("CHROME_PATH", ""),
    os.environ.get("BROWSER_PATH", ""),
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "/usr/bin/google-chrome",
    "/usr/bin/google-chrome-stable",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
    "/snap/bin/chromium",
]
BROWSER_NAMES = ("google-chrome", "google-chrome-stable", "chrome", "chromium",
                 "chromium-browser", "msedge")

META = {
    "/Title": "Hans Steven Arango Ortiz — Hoja de Vida 2026",
    "/Author": "Hans Steven Arango Ortiz",
    "/Subject": "Hoja de vida — Estratega Digital y Arquitecto de Soluciones Empresariales",
    "/Keywords": "hoja de vida, curriculum vitae, marketing digital, desarrollo web, "
                 "análisis de datos, inteligencia artificial, Cali, Colombia",
    "/Creator": "Hans Steven Arango Ortiz",
}

EXPECTED_PAGES = 3
REQUIRED_TEXT = ("HansStevenArangoOrtiz", "hans-hojadevida.netlify.app", "ExperienciaProfesional")


def find_browser() -> str:
    candidates = list(BROWSERS) + [shutil.which(name) or "" for name in BROWSER_NAMES]
    for path in candidates:
        if path and os.path.exists(path):
            return path
    sys.exit("No se encontró Edge, Chrome ni Chromium. Define CHROME_PATH con la ruta al ejecutable.")


def print_pdf(draft: str) -> None:
    browser = find_browser()
    uri = "file:///" + HTML.replace("\\", "/").replace(" ", "%20")
    profile = tempfile.mkdtemp(prefix="cv-print-")
    cmd = [
        browser,
        "--headless",
        "--disable-gpu",
        "--no-first-run",
        "--no-default-browser-check",
        f"--user-data-dir={profile}",
        "--no-pdf-header-footer",
        f"--print-to-pdf={draft}",
        "--virtual-time-budget=15000",
        uri,
    ]
    if sys.platform.startswith("linux"):
        # necesario en contenedores (GitHub Actions)
        cmd[1:1] = ["--no-sandbox", "--disable-dev-shm-usage"]
    subprocess.run(cmd, check=True, capture_output=True)
    shutil.rmtree(profile, ignore_errors=True)
    if not os.path.exists(draft):
        sys.exit("La impresión no produjo ningún PDF.")


def add_metadata(draft: str) -> None:
    reader = PdfReader(draft)
    writer = PdfWriter()
    for page in reader.pages:
        writer.add_page(page)
    meta = dict(reader.metadata or {})
    meta.update(META)
    # sin fechas: así el mismo contenido genera exactamente el mismo archivo
    # (evita commits del bot cuando solo cambiaría la fecha de generación)
    meta.pop("/CreationDate", None)
    meta.pop("/ModDate", None)
    writer.add_metadata(meta)
    with open(FINAL, "wb") as f:
        writer.write(f)


def sources_digest() -> str:
    """Hash de las fuentes del PDF: cambia solo si cambia el contenido."""
    digest = hashlib.sha256()
    def feed(path):
        with open(path, "rb") as handle:
            # normaliza CRLF/LF: el hash no debe depender del sistema operativo
            digest.update(handle.read().replace(b"\r\n", b"\n"))

    for path in (HTML, CSS, FONTS_CSS, PHOTO, QR):
        digest.update(os.path.basename(path).encode())
        feed(path)
    for name in sorted(os.listdir(FONT_DIR)):
        path = os.path.join(FONT_DIR, name)
        if os.path.isfile(path):
            digest.update(name.encode())
            feed(path)
    return digest.hexdigest()[:8]


def update_version(version: str) -> bool:
    """Reemplaza ?v=... de los enlaces al PDF en index.html. Devuelve si cambió."""
    with open(INDEX, "r", encoding="utf-8", newline="") as f:
        html = f.read()
    new_html, count = re.subn(
        r"(hans-steven-arango-cv\.pdf)\?v=[A-Za-z0-9._-]+",
        rf"\1?v={version}",
        html,
    )
    if count == 0:
        print("Aviso: no se encontraron enlaces al PDF en index.html")
        return False
    if new_html == html:
        return False
    with open(INDEX, "w", encoding="utf-8", newline="") as f:
        f.write(new_html)
    return True


def verify(pdf_path: str) -> None:
    """Falla si el PDF quedó vacío, con páginas de más o sin el texto clave."""
    reader = PdfReader(pdf_path)
    if len(reader.pages) != EXPECTED_PAGES:
        sys.exit(f"El PDF tiene {len(reader.pages)} páginas y se esperaban {EXPECTED_PAGES}.")
    text = " ".join((page.extract_text() or "") for page in reader.pages)
    flat = re.sub(r"\s+", "", text)
    missing = [needle for needle in REQUIRED_TEXT if needle not in flat]
    if missing:
        sys.exit(f"Falta texto clave en el PDF: {missing}")


def export_previews() -> None:
    import pypdfium2 as pdfium

    os.makedirs(PREVIEW_DIR, exist_ok=True)
    for name in os.listdir(PREVIEW_DIR):
        if name.endswith(".png"):
            os.remove(os.path.join(PREVIEW_DIR, name))
    doc = pdfium.PdfDocument(FINAL)
    for index in range(len(doc)):
        doc[index].render(scale=2.0).to_pil().save(
            os.path.join(PREVIEW_DIR, f"pagina-{index + 1}.png")
        )
    print("Paginas:", len(doc))


if __name__ == "__main__":
    tmp = tempfile.mkdtemp(prefix="cv-draft-")
    draft = os.path.join(tmp, "cv-draft.pdf")
    print_pdf(draft)
    os.makedirs(os.path.dirname(FINAL), exist_ok=True)
    add_metadata(draft)
    verify(FINAL)
    export_previews()
    shutil.rmtree(tmp, ignore_errors=True)

    version = sources_digest()
    changed = update_version(version)
    print("PDF:", FINAL)
    print("Tamano:", round(os.path.getsize(FINAL) / 1024), "KB")
    print("Version (?v=):", version, "| index.html actualizado:", changed)
