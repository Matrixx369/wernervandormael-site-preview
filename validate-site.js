const fs = require("fs");
const path = require("path");

const root = __dirname;
const phone = "+32495548415";
const email = "werner.vandormael1@gmail.com";
const whatsapp = "https://wa.me/32495548415?text=Dag%20Werner%2C%20ik%20heb%20een%20vraag%20over%20dakwerken.";
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
const oldTemplateStrings = [
  "Lokale dakwerker uit Wellen",
  "Dakwerken in de ruime regio Limburg",
  "Ook voor kleinere dakwerken en herstellingen",
  "Naam Telefoon of e-mail Bericht Contact opnemen",
];

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
  for (const oldString of oldTemplateStrings) {
    if (html.includes(oldString)) errors.push(`${url}: old template output remains: ${oldString}`);
  }
  if (/href="\//.test(html)) errors.push(`${url}: root-relative link will escape a GitHub Pages project subpath`);
  if (/\/projecten\/|Bekijk projecten|Projectbeelden/.test(html)) errors.push(`${url}: projects page or section reference remains`);
  if (!html.includes('href="https://wa.me/32495548415?text=Dag%20Werner%2C%20ik%20heb%20een%20vraag%20over%20dakwerken."')) errors.push(`${url}: missing WhatsApp contact link`);
  for (const mailLink of html.matchAll(/<a[^>]+href="mailto:[^"]+"[^>]*>([\s\S]*?)<\/a>/g)) {
    if (!mailLink[1].includes(email)) errors.push(`${url}: mailto link does not visibly show the email address`);
  }
  if (!/<div class="menu" id="main-menu"><a href="(?:\.\/|\.\.\/)+">Dakwerken<\/a>/.test(html)) errors.push(`${url}: Dakwerken navigation does not target homepage root`);
  if (servicePages.has(url)) {
    const faqCount = (html.match(/<div class="faq">[\s\S]*?<\/div>/)?.[0].match(/<details>/g) || []).length;
    if (faqCount < 4 || faqCount > 6) errors.push(`${url}: expected 4-6 visible FAQs, found ${faqCount}`);
    if (html.includes("Wanneer kan u contact opnemen?")) errors.push(`${url}: still uses the generic service-list heading`);
    if (!html.includes('<span class="eyebrow">Dakwerker uit Limburg</span>')) errors.push(`${url}: service hero badge is incorrect`);
    if (!html.includes(">Bel Werner</a>") || !html.includes(">WhatsApp Werner</a>")) errors.push(`${url}: service hero CTAs are incomplete`);
    if (html.includes(">Contact opnemen</a>")) errors.push(`${url}: old service hero CTA remains`);
    if (!html.includes("<h2>Gerelateerde dakwerken</h2>")) errors.push(`${url}: related services heading is incorrect`);
    if (!html.includes("Veelgestelde vragen over ")) errors.push(`${url}: service-specific FAQ heading is missing`);
    if (!html.includes('class="premium-service-page"') || !html.includes('class="premium-service-hero"')) errors.push(`${url}: premium service layout is missing`);
    if (!html.includes('class="container premium-trust-grid"') || (html.match(/class="premium-trust-icon"/g) || []).length !== 3) errors.push(`${url}: premium trust strip is incomplete`);
    if (!html.includes('class="btn btn-red" href="../../contact/">Bespreek uw dakwerk <span')) errors.push(`${url}: practical CTA is not a real red button`);
    if ((html.match(/class="premium-attention-icon"/g) || []).length !== 3 || (html.match(/class="premium-attention-meta"/g) || []).length !== 3) errors.push(`${url}: premium attention cards are incomplete`);
    if ((html.match(/<div class="premium-related">[\s\S]*?<\/div>/)?.[0].match(/<a /g) || []).length !== 5) errors.push(`${url}: premium related services are incomplete`);
    if (!html.includes('class="container premium-bottom-cta"')) errors.push(`${url}: premium bottom CTA is missing`);
    if (!html.includes(`class="btn btn-outline-light premium-email-cta" href="mailto:${email}"`) || !html.includes(`<small>${email}</small>`)) errors.push(`${url}: email CTA does not visibly show the address`);
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
if ((homeHtml.match(/<section class="trust">[\s\S]*?<\/section>/) || [""])[0].match(/<article>/g)?.length !== 3) errors.push("/: trust block must contain exactly three items");
for (const oldTrustItem of ["Lokale dakwerker uit Wellen", "Dakwerken in de ruime regio Limburg", "Hellende en platte daken", "Ook voor kleinere dakwerken en herstellingen"]) {
  if (homeHtml.includes(oldTrustItem)) errors.push(`/: old trust item remains: ${oldTrustItem}`);
}
if (homeHtml.includes('class="contact-list"') || homeHtml.includes('class="contact-card" action=')) errors.push("/: old homepage contact details/form block remains");
if (!homeHtml.includes("Wilt u een dakwerk bespreken? Bel Werner of stuur een WhatsApp-bericht.")) errors.push("/: homepage contact CTA copy is missing");
if (!homeHtml.includes('class="dark work-showcase"') || (homeHtml.match(/class="project"/g) || []).length !== 4) errors.push("/: homepage work visual section is missing or incomplete");
if (homeHtml.includes("Bekijk projecten") || homeHtml.includes("/projecten/")) errors.push("/: projects page link or CTA remains");
if (!homeHtml.includes("Afhankelijk van het project zijn ook werken in omliggende gemeenten buiten Limburg mogelijk.")) errors.push("/: updated work area sentence is missing");
if (!homeHtml.includes("<span class=\"kicker\">Recente dakwerken</span><h2>Een selectie van uitgevoerde dakwerken</h2>")) errors.push("/: homepage work visual wording is incorrect");
const homeContactActions = homeHtml.match(/<section class="dark home-contact"[\s\S]*?<div class="cta-actions">([\s\S]*?)<\/div>/)?.[1] || "";
if ((homeContactActions.match(/<a class="btn /g) || []).length !== 3) errors.push("/: homepage contact CTA must contain three separate buttons");

const contactHtml = fs.readFileSync(fileFor("/contact/"), "utf8");
const contactOrder = ["Contact opnemen met Werner", "contact-options", "contact-form", "contact-address"].map(marker => contactHtml.indexOf(marker));
if (contactOrder.some(position => position < 0) || contactOrder.some((position, index) => index && position < contactOrder[index - 1])) {
  errors.push("/contact/: contact sections are missing or out of order");
}
const contactOptionsOrder = ["Bel Werner", "WhatsApp Werner", "Stuur een e-mail"].map(marker => contactHtml.indexOf(marker));
if (contactOptionsOrder.some(position => position < 0) || contactOptionsOrder.some((position, index) => index && position < contactOptionsOrder[index - 1])) {
  errors.push("/contact/: contact options are missing or out of order");
}
if (contactHtml.includes("Dakwerken Limburg</span><h1>Contact opnemen met Werner")) errors.push("/contact/: old top label remains");
if (contactHtml.includes("Foto's doorsturen is mogelijk")) errors.push("/contact/: old photo checklist item remains");
if (!contactHtml.includes("werner-vandormael-dakwerker-limburg")) errors.push("/contact/: missing Werner trust image");
if (!contactHtml.includes('alt="Werner Vandormael aan het werk als dakwerker in Limburg"')) errors.push("/contact/: Werner image alt text is missing");
if (contactHtml.includes("Voorkeur contact")) errors.push("/contact/: preference contact field remains");
if (contactHtml.includes("contact-address-divider") || contactHtml.includes('aria-hidden="true">·')) errors.push("/contact/: stray address separator remains");
const mainJs = fs.readFileSync(path.join(root, "assets", "js", "main.js"), "utf8");
if (!mainJs.includes("messageFromForm") || !mainJs.includes("contact-whatsapp-submit")) errors.push("/contact/: form email/WhatsApp behavior is missing");
if (mainJs.includes("Voorkeur contact")) errors.push("/contact/: JavaScript still expects preference contact");

const aboutHtml = fs.readFileSync(fileFor("/over-vandormael-werner/"), "utf8");
if (aboutHtml.includes("Bekijk de dakwerken")) errors.push("/over-vandormael-werner/: old secondary CTA remains");
if (aboutHtml.includes('class="page-hero"')) errors.push("/over-vandormael-werner/: old empty hero remains");
if (!aboutHtml.includes('class="soft about-page-top"') || !aboutHtml.includes("Rechtstreeks contact met een lokale dakwerker uit Limburg.")) errors.push("/over-vandormael-werner/: mockup-style top section is missing");
const termsHtml = fs.readFileSync(fileFor("/algemene-voorwaarden/"), "utf8");
if (termsHtml.includes('aria-hidden="true">·')) errors.push("/algemene-voorwaarden/: stray contact separator remains");

for (const url of pages) {
  const html = fs.readFileSync(fileFor(url), "utf8");
  const footerAddress = html.match(/<address class="footer-contact">([\s\S]*?)<\/address>/)?.[1] || "";
  const footerLinks = html.match(/<div class="footer-contact-links">([\s\S]*?)<\/div>/)?.[1] || "";
  if (!/^<strong>Vandormael Werner<\/strong><span>Plattestraat 33<\/span><span>3830 Wellen<\/span><span>België<\/span>$/.test(footerAddress)) errors.push(`${url}: footer address is not semantically separated`);
  if ((footerLinks.match(/<a /g) || []).length !== 3 || !footerLinks.includes(`href="tel:${phone}"`) || !footerLinks.includes(`href="mailto:${email}"`) || !footerLinks.includes(whatsapp)) errors.push(`${url}: footer contact links are not semantically separated`);
  if (html.includes("footer-contact-divider") || footerAddress.includes("·")) errors.push(`${url}: stray footer separator remains`);
}

for (const url of pages.filter(url => url.includes("/limburg/"))) {
  const html = fs.readFileSync(fileFor(url), "utf8");
  if (!html.includes('class="container premium-bottom-cta"')) errors.push(`${url}: premium service CTA is missing`);
  if (html.includes('<section class="cta">')) errors.push(`${url}: old heavy red CTA remains`);
  const serviceCtaActions = html.match(/<div class="container premium-bottom-cta">[\s\S]*?<div class="cta-actions">([\s\S]*?)<\/div>/)?.[1] || "";
  if ((serviceCtaActions.match(/<a class="btn /g) || []).length !== 3) errors.push(`${url}: service CTA must contain three separate buttons`);
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
