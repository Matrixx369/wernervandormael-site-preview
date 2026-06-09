const routes = [
  "/", "/dakwerken/limburg/", "/hellende-daken/limburg/", "/platte-daken/limburg/",
  "/dakisolatie/limburg/", "/dakherstellingen/limburg/",
  "/zinkwerken-koperwerken-loodwerken/limburg/", "/kleinere-dakwerken/limburg/",
  "/over-vandormael-werner/", "/contact/", "/privacybeleid/", "/algemene-voorwaarden/",
];
const oldTemplateStrings = [
  "Lokale dakwerker uit Wellen",
  "Dakwerken in de ruime regio Limburg",
  "Ook voor kleinere dakwerken en herstellingen",
  "Telefoon 0495 54 84 15",
  "België 0495 54 84 15",
  "Naam Telefoon of e-mail Bericht Contact opnemen",
];
const baseUrl = process.argv[2]?.replace(/\/?$/, "/");

if (!baseUrl) throw new Error("Pass the deployed GitHub Pages URL.");

async function fetchText(route) {
  const response = await fetch(new URL(`${route.replace(/^\//, "")}?validation=${Date.now()}`, baseUrl), {
    cache: "no-store",
    headers: { "cache-control": "no-cache" },
  });
  if (!response.ok) throw new Error(`${route}: HTTP ${response.status}`);
  return response.text();
}

function visibleText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

async function validate() {
  const errors = [];
  const pages = new Map();
  for (const route of routes) {
    const html = await fetchText(route);
    pages.set(route, html);
    const text = visibleText(html);
    for (const oldString of oldTemplateStrings) {
      if (html.includes(oldString) || text.includes(oldString)) errors.push(`${route}: old template output remains: ${oldString}`);
    }
  }

  const home = pages.get("/");
  const about = pages.get("/over-vandormael-werner/");
  const contact = pages.get("/contact/");
  if (!home.includes('class="dark work-showcase"') || home.includes("Bekijk projecten") || home.includes("/projecten/")) errors.push("/: homepage work visual section is incorrect");
  if (!home.includes("Afhankelijk van het project zijn ook werken in omliggende gemeenten buiten Limburg mogelijk.")) errors.push("/: work area sentence is incorrect");
  if (about.includes('class="page-hero"') || !about.includes('class="soft about-page-top"')) errors.push("/over-vandormael-werner/: old empty hero remains");
  if (contact.indexOf("contact-form") > contact.indexOf("contact-address")) errors.push("/contact/: form-first lower layout is missing");
  for (const route of routes.filter(route => route.includes("/limburg/"))) {
    const html = pages.get(route);
    for (const wrong of ["Dakwerker uit Wellen", "Vandormael Werner · Wellen", "Meer dakwerken in Limburg", "Praktische antwoorden"]) {
      if (html.includes(wrong)) errors.push(`${route}: old service layout text remains: ${wrong}`);
    }
    if (!html.includes('<span class="eyebrow">Dakwerker uit Limburg</span>')) errors.push(`${route}: service hero badge is incorrect`);
    if (!html.includes("<h2>Gerelateerde dakwerken</h2>") || !html.includes("Veelgestelde vragen over ")) errors.push(`${route}: refined section headings are missing`);
  }

  const projects = await fetch(new URL(`projecten/?validation=${Date.now()}`, baseUrl), { cache: "no-store" });
  if (projects.status !== 404) errors.push(`/projecten/: expected HTTP 404, received ${projects.status}`);
  if (errors.length) throw new Error(errors.join("\n"));
}

async function main() {
  let lastError;
  for (let attempt = 1; attempt <= 6; attempt += 1) {
    try {
      await validate();
      console.log(`Validated live GitHub Pages preview: ${routes.length} clean pages and /projecten/ returns 404.`);
      return;
    } catch (error) {
      lastError = error;
      if (attempt < 6) await new Promise(resolve => setTimeout(resolve, 10000));
    }
  }
  throw lastError;
}

main();
