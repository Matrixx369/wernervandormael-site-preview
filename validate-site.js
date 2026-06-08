const fs = require("fs");
const path = require("path");

const root = __dirname;
const pages = [
  "/", "/dakwerken/limburg/", "/hellende-daken/limburg/", "/platte-daken/limburg/",
  "/dakisolatie/limburg/", "/dakherstellingen/limburg/",
  "/zinkwerken-koperwerken-loodwerken/limburg/", "/kleinere-dakwerken/limburg/",
  "/over-vandormael-werner/", "/contact/", "/privacybeleid/",
  "/algemene-voorwaarden/",
];
const errors = [];
const titles = new Set();
const descriptions = new Set();
const pageFiles = new Set(pages.map(url => path.resolve(fileFor(url))));
const servicePages = new Set(pages.slice(1, 8));

if (fs.existsSync(fileFor("/projecten/"))) {
  errors.push("Removed page still exists: /projecten/");
}

function fileFor(url) {
  return path.join(root, url === "/" ? "index.html" : url, url === "/" ? "" : "index.html");
}

for (const url of pages) {
  const file = fileFor(url);
  if (!fs.existsSync(file)) {
    errors.push(`Missing page: ${url}`);
    continue;
  }
  const html = fs.readFileSync(file, "utf8");
  if (/href="\//.test(html)) errors.push(`${url}: root-relative link will escape a GitHub Pages project subpath`);
  if (/\/projecten\/|Bekijk projecten|Projectbeelden/.test(html)) errors.push(`${url}: projects page or section reference remains`);
  if (!html.includes('href="https://wa.me/32495548415?text=Dag%20Werner%2C%20ik%20heb%20een%20vraag%20over%20dakwerken."')) errors.push(`${url}: missing WhatsApp contact link`);
  if (!/<div class="menu" id="main-menu"><a href="(?:\.\/|\.\.\/)+">Dakwerken<\/a>/.test(html)) errors.push(`${url}: Dakwerken navigation does not target homepage root`);
  if (servicePages.has(url)) {
    const faqCount = (html.match(/<div class="faq">[\s\S]*?<\/div>/)?.[0].match(/<details>/g) || []).length;
    if (faqCount < 4 || faqCount > 6) errors.push(`${url}: expected 4-6 visible FAQs, found ${faqCount}`);
    if (html.includes("Wanneer kan u contact opnemen?")) errors.push(`${url}: still uses the generic service-list heading`);
  }
  const h1s = html.match(/<h1\b/g) || [];
  if (h1s.length !== 1) errors.push(`${url}: expected 1 H1, found ${h1s.length}`);

  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  const description = html.match(/<meta name="description" content="(.*?)">/)?.[1];
  if (!title || titles.has(title)) errors.push(`${url}: missing or duplicate title`);
  if (!description || descriptions.has(description)) errors.push(`${url}: missing or duplicate description`);
  titles.add(title);
  descriptions.add(description);

  for (const required of ['rel="canonical"', 'name="robots" content="index,follow"', 'property="og:title"', 'name="twitter:card"', 'type="application/ld+json"']) {
    if (!html.includes(required)) errors.push(`${url}: missing ${required}`);
  }

  for (const href of html.matchAll(/href="([^"]+)"/g)) {
    const target = href[1];
    if (/^(?:https?:|mailto:|tel:|#)/.test(target) || target.includes("assets/") || target.endsWith("site.webmanifest")) continue;
    const cleanTarget = target.split(/[?#]/)[0];
    const resolved = path.resolve(path.dirname(file), cleanTarget);
    const targetFile = cleanTarget.endsWith("/") || !path.extname(cleanTarget) ? path.join(resolved, "index.html") : resolved;
    if (!pageFiles.has(targetFile)) errors.push(`${url}: internal link does not target a public page: ${target}`);
  }

  for (const asset of html.matchAll(/(?:href|src|srcset)="((?:\.\.\/)*assets\/[^"]+|(?:\.\.\/)*site\.webmanifest)"/g)) {
    const resolved = path.resolve(path.dirname(file), asset[1]);
    if (!fs.existsSync(resolved)) errors.push(`${url}: missing asset ${asset[1]}`);
  }
}

const homeHtml = fs.readFileSync(fileFor("/"), "utf8");
if (homeHtml.includes('class="extra-service-card"')) errors.push("/: smaller works still uses a service card");
if (!homeHtml.includes('class="container split smaller-works"')) errors.push("/: missing mockup-style smaller works section");
if (!homeHtml.includes("WhatsApp Werner")) errors.push("/: missing homepage WhatsApp CTA");

const contactHtml = fs.readFileSync(fileFor("/contact/"), "utf8");
const contactOrder = ["Contact opnemen met Werner", "contact-options", "contact-address", "contact-form"].map(marker => contactHtml.indexOf(marker));
if (contactOrder.some(position => position < 0) || contactOrder.some((position, index) => index && position < contactOrder[index - 1])) {
  errors.push("/contact/: contact sections are missing or out of order");
}

const allHtml = pages.map(url => fs.readFileSync(fileFor(url), "utf8")).join("\n").toLowerCase();
for (const claim of ["beste dakwerker", "24/7", "30 jaar ervaring", "erkend specialist", "aggregateRating", "openingHours"]) {
  if (allHtml.includes(claim.toLowerCase())) errors.push(`Forbidden or unsupported claim found: ${claim}`);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`Validated ${pages.length} pages: unique metadata, one H1 each, required SEO tags, links, images, and claim checks passed.`);
