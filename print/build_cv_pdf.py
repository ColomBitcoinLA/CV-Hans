"""Genera el PDF que descarga el botón "Descargar PDF" del sitio.

- Imprime print/cv-print.html con Edge/Chrome headless: así el archivo sale
  limpio, sin la fecha, el título ni la URL que agrega el navegador al imprimir.
- Añade metadatos (título, autor, palabras clave).
- Escribe assets/cv/hans-steven-arango-cv.pdf (el archivo que enlaza index.html).
- Exporta vistas previas PNG en print/preview/.

Uso:  python print/build_cv_pdf.py
"""
import os
import shutil
import subprocess
import sys
import tempfile

from pypdf import PdfReader, PdfWriter

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, ".."))
HTML = os.path.join(HERE, "cv-print.html")
FINAL = os.path.join(ROOT, "assets", "cv", "hans-steven-arango-cv.pdf")
PREVIEW_DIR = os.path.join(HERE, "preview")

BROWSERS = [
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
]

META = {
    "/Title": "Hans Steven Arango Ortiz — Hoja de Vida 2026",
    "/Author": "Hans Steven Arango Ortiz",
    "/Subject": "Hoja de vida — Estratega Digital y Arquitecto de Soluciones Empresariales",
    "/Keywords": "hoja de vida, curriculum vitae, marketing digital, desarrollo web, "
                 "análisis de datos, inteligencia artificial, Cali, Colombia",
    "/Creator": "Hans Steven Arango Ortiz",
}


def find_browser() -> str:
    for path in BROWSERS:
        if os.path.exists(path):
            return path
    sys.exit("No se encontró Edge ni Chrome.")


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
    writer.add_metadata(meta)
    with open(FINAL, "wb") as f:
        writer.write(f)


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
    add_metadata(draft)
    export_previews()
    shutil.rmtree(tmp, ignore_errors=True)
    print("PDF:", FINAL)
    print("Tamano:", round(os.path.getsize(FINAL) / 1024), "KB")
