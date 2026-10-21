# CV-Hans
Mi CV personal, mi Hoja de Vida

## Descarga del PDF

El botón «Descargar PDF» (panel de control y hero) enlaza directamente a
`assets/cv/hans-steven-arango-cv.pdf`, un archivo generado fuera del navegador:
así se descarga sin la fecha, el título ni la URL que el navegador añade al
imprimir, y con el diseño de hoja de vida (3 páginas A4).

### Regenerar el PDF

1. Edita el contenido en `print/cv-print.html` (textos) y el diseño en
   `print/cv-print.css`.
2. Ejecuta:

   ```bash
   python print/build_cv_pdf.py
   ```

El script imprime el HTML con Edge/Chrome headless, añade metadatos y escribe
`assets/cv/hans-steven-arango-cv.pdf` + vistas previas en `print/preview/`.

### Recursos del PDF

- `print/fonts/`: Space Grotesk y DM Sans (woff2 estáticos, autocohospedados).
- `print/assets/foto-cv.jpg`: retrato recortado y con grade de color
  (se regenera con `python print/tools/enhance_photo.py`).
- `print/assets/qr-web.svg`: QR que apunta a https://hans-hojadevida.netlify.app/.
