// Pre-renderizado post-build: levanta el sitio ya compilado en dist/,
// lo renderiza una vez con un navegador headless (Puppeteer) y guarda el
// HTML final (con el contenido de React ya montado) de vuelta en
// dist/index.html.
//
// Por qué: el <head> (title, meta description, JSON-LD Organization/
// FAQPage) ya es HTML estático y lo ve cualquier crawler sin ejecutar
// JS. Pero el contenido visible (incluida la tarjeta "Cobranza
// Inteligente" y la sección de FAQ) se renderiza con React del lado del
// cliente -- muchos crawlers de motores de IA no ejecutan JavaScript, así
// que sin este paso no verían ese contenido. Ver CLAUDE.md de
// lab-discovery (hallazgo GEO de homónimos) para el contexto completo.
//
// No se usó react-snap (sin mantenimiento desde ~2020, riesgo de
// incompatibilidad con React 19 / Vite 7) -- este script es la
// alternativa explícitamente acordada.
//
// main.jsx usa ReactDOM.createRoot(...).render(...), no hydrateRoot, así
// que no hay riesgo de mismatch de hidratación: en un navegador real,
// React simplemente vuelve a renderizar sobre el HTML pre-renderizado.

import { preview } from "vite";
import puppeteer from "puppeteer";
import { writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_INDEX = path.resolve(__dirname, "..", "dist", "index.html");
const PORT = 4173;

async function main() {
  const server = await preview({ preview: { port: PORT, host: "127.0.0.1" } });
  const url = `http://127.0.0.1:${PORT}/`;

  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle0" });
    // Esperar a que React haya montado el contenido real -- #servicios
    // es la sección que incluye la tarjeta "Cobranza Inteligente".
    await page.waitForSelector("#servicios h3");

    const html = await page.content();
    writeFileSync(DIST_INDEX, html);
    console.log(
      `[prerender] dist/index.html actualizado con HTML pre-renderizado (${html.length} bytes).`
    );
  } finally {
    await browser.close();
    await new Promise((resolve) => server.httpServer.close(resolve));
  }
}

main().catch((err) => {
  console.error("[prerender] Error:", err);
  process.exit(1);
});
