// Pre-renderizado post-build: levanta el sitio ya compilado en dist/,
// lo renderiza una vez con un navegador headless y guarda el HTML final
// (con el contenido de React ya montado) de vuelta en dist/index.html.
//
// Por qué: el <head> (title, meta description, JSON-LD Organization/
// FAQPage) ya es HTML estático y lo ve cualquier crawler sin ejecutar
// JS. Pero el contenido visible (incluida la tarjeta "Cobranza
// Inteligente" y la sección de FAQ) se renderiza con React del lado del
// cliente -- muchos crawlers de motores de IA no ejecutan JavaScript, así
// que sin este paso no verían ese contenido. Ver CLAUDE.md de
// lab-discovery (hallazgo GEO de homónimos) para el contexto completo.
//
// *** HISTORIAL (ver PR #1) ***
// v1 usaba el paquete `puppeteer` normal -- el Deploy Preview de Netlify
// falló 2 veces seguidas con ese paso activado (incluso con flags de
// robustez como --disable-dev-shm-usage), probablemente porque el
// entorno de build de Netlify no tiene las librerías de sistema que
// Chrome headless necesita para arrancar. Se sacó del build por un
// tiempo (title/meta/JSON-LD ya cubrían el hallazgo GEO sin depender de
// esto).
//
// v2 (esta versión, 24/9/2026) reemplaza `puppeteer` por
// `puppeteer-core` + `@sparticuz/chromium` -- un binario de Chromium
// empaquetado específicamente para correr en entornos restringidos tipo
// AWS Lambda/Netlify, sin depender de las librerías de sistema que
// probablemente faltan. Si esto también falla en el build de Netlify,
// el plan B es mover el pre-renderizado a GitHub Actions (runner Ubuntu
// completo, con las librerías de Chrome ya presentes).
//
// No se usó react-snap (sin mantenimiento desde ~2020, riesgo de
// incompatibilidad con React 19 / Vite 7).
//
// main.jsx usa ReactDOM.createRoot(...).render(...), no hydrateRoot, así
// que no hay riesgo de mismatch de hidratación: en un navegador real,
// React simplemente vuelve a renderizar sobre el HTML pre-renderizado.

import { preview } from "vite";
import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";
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
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath(),
    headless: chromium.headless,
  });

  try {
    const page = await browser.newPage();
    // Diagnóstico extra: si esto vuelve a fallar en CI y no hay acceso al
    // log del panel de Netlify, al menos queda algo útil en la salida del
    // build (stdout/stderr del comando `npm run build`).
    page.on("console", (msg) => console.log(`[prerender] console:${msg.type()}`, msg.text()));
    page.on("pageerror", (err) => console.error("[prerender] pageerror:", err));

    await page.goto(url, { waitUntil: "networkidle0", timeout: 60000 });
    // Esperar a que React haya montado el contenido real -- #servicios
    // es la sección que incluye la tarjeta "Cobranza Inteligente".
    await page.waitForSelector("#servicios h3", { timeout: 60000 });

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
