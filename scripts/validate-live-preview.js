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

async function validate() {
  const errors = [];
  const pages = new Map();
  for (const route of routes) {
    const html = await fetchText(route);
    pages.set(route, html);
    if (!html.includes('<meta name="robots" content="noindex,nofollow">')) {
      errors.push(`${route}: preview robots meta must be noindex,nofollow`);
    }
    for (const oldString of oldTemplateStrings) {
      if (html.includes(oldString)) errors.push(`${route}: old template output remains: ${oldString}`);
    }
    const footerAddress = html.match(/<address class="footer-contact">([\s\S]*?)<\/address>/)?.[1] || "";
    const footerLinks = html.match(/<div class="footer-contact-links">([\s\S]*?)<\/div>/)?.[1] || "";
    if (!/^<strong>Vandormael Werner<\/strong><span>Plattestraat 33<\/span><span>3830 Wellen<\/span><span>België<\/span>$/.test(footerAddress)) errors.push(`${route}: footer address structure is incorrect`);
    if ((footerLinks.match(/<a /g) || []).length !== 3) errors.push(`${route}: footer contact links are not separated`);
    if (html.includes("footer-contact-divider") || footerAddress.includes("·")) errors.push(`${route}: stray footer separator remains`);
    for (const mailLink of html.matchAll(/<a[^>]+href="mailto:[^"]+"[^>]*>([\s\S]*?)<\/a>/g)) {
      if (!mailLink[1].includes("werner.vandormael1@gmail.com")) errors.push(`${route}: mailto link does not visibly show the email address`);
    }
  }

  const home = pages.get("/");
  const about = pages.get("/over-vandormael-werner/");
  const contact = pages.get("/contact/");
  if (!home.includes('class="dark work-showcase"') || home.includes("Bekijk projecten") || home.includes("/projecten/")) errors.push("/: homepage work visual section is incorrect");
  if (!home.includes("Recente dakwerken") || !home.includes("Een selectie van uitgevoerde dakwerken")) errors.push("/: homepage work visual wording is incorrect");
  if ((home.match(/<section class="dark home-contact"[\s\S]*?<div class="cta-actions">([\s\S]*?)<\/div>/)?.[1].match(/<a class="btn /g) || []).length !== 3) errors.push("/: homepage contact CTA buttons are not separated");
  if (!home.includes("Afhankelijk van het project zijn ook werken in omliggende gemeenten buiten Limburg mogelijk.")) errors.push("/: work area sentence is incorrect");
  if (about.includes('class="page-hero"') || !about.includes('class="soft about-page-top"')) errors.push("/over-vandormael-werner/: old empty hero remains");
  if (contact.indexOf("contact-form") > contact.indexOf("contact-address")) errors.push("/contact/: form-first lower layout is missing");
  if (contact.includes("contact-address-divider") || contact.includes('aria-hidden="true">·')) errors.push("/contact/: stray address separator remains");
  if (pages.get("/algemene-voorwaarden/").includes('aria-hidden="true">·')) errors.push("/algemene-voorwaarden/: stray contact separator remains");
  for (const route of routes.filter(route => route.includes("/limburg/"))) {
    const html = pages.get(route);
    for (const wrong of ["Dakwerker uit Wellen", "Vandormael Werner · Wellen", "Meer dakwerken in Limburg", "Praktische antwoorden"]) {
      if (html.includes(wrong)) errors.push(`${route}: old service layout text remains: ${wrong}`);
    }
    if (!html.includes('<span class="eyebrow">Dakwerker uit Limburg</span>')) errors.push(`${route}: service hero badge is incorrect`);
    if (!html.includes("<h2>Gerelateerde dakwerken</h2>") || !html.includes("Veelgestelde vragen over ")) errors.push(`${route}: refined section headings are missing`);
    if (!html.includes('class="premium-service-page"') || (html.match(/class="premium-trust-icon"/g) || []).length !== 3 || (html.match(/class="premium-attention-icon"/g) || []).length !== 3) errors.push(`${route}: premium service pattern is incomplete`);
    if (!html.includes(">Bespreek uw dakwerk <span")) errors.push(`${route}: practical CTA is incomplete`);
    const ctaActions = html.match(/<div class="container premium-bottom-cta">[\s\S]*?<div class="cta-actions">([\s\S]*?)<\/div>/)?.[1] || "";
    if ((ctaActions.match(/<a class="btn /g) || []).length !== 3) errors.push(`${route}: service CTA buttons are not separated`);
    if (!ctaActions.includes("werner.vandormael1@gmail.com")) errors.push(`${route}: email CTA does not visibly show the address`);
  }
  const general = pages.get("/dakwerken/limburg/");
  if (!general.includes('class="premium-service-page"') || !general.includes('class="premium-service-hero"')) errors.push("/dakwerken/limburg/: premium test layout is missing");
  if (!general.includes(">Bespreek uw dakwerk <span") || !general.includes('class="container premium-bottom-cta"')) errors.push("/dakwerken/limburg/: premium conversion CTAs are incomplete");

  const projects = await fetch(new URL(`projecten/?validation=${Date.now()}`, baseUrl), { cache: "no-store" });
  if (projects.status !== 404) errors.push(`/projecten/: expected HTTP 404, received ${projects.status}`);
  const robots = await fetchText("robots.txt");
  if (!/^User-agent: \*\r?\nDisallow: \/\r?\n?$/.test(robots)) {
    errors.push("/robots.txt: preview crawling must be blocked with Disallow: /");
  }
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
