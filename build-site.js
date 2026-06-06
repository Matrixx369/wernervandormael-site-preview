const fs = require("fs");
const path = require("path");

const root = __dirname;
const domain = "https://wernervandormael.be";
const phoneDisplay = "0495 54 84 15";
const phone = "+32495548415";
const email = "werner.vandormael1@gmail.com";
const buildDate = "2026-06-06";

const services = [
  ["Algemene dakwerken", "/dakwerken/limburg/", "dakwerker-limburg-bedrijfswagen-dakwerken.jpg", "Dakwerken uitgevoerd door Vandormael Werner in Limburg"],
  ["Hellende daken", "/hellende-daken/limburg/", "hellend-dak-vandormael-werner-limburg.jpg", "Hellend dak uitgevoerd door Vandormael Werner in Limburg"],
  ["Platte daken", "/platte-daken/limburg/", "plat-dak-roofing-epdm-vandormael-werner.jpg", "Plat dak met roofing of EPDM-afwerking door Vandormael Werner"],
  ["Dakisolatie", "/dakisolatie/limburg/", "dakisolatie-hellend-dak-limburg.jpg", "Dakisolatie bij renovatie van een hellend dak in Limburg"],
  ["Dakherstellingen", "/dakherstellingen/limburg/", "dakherstelling-regio-limburg.jpg", "Dakherstelling aan hellend dak in regio Limburg"],
  ["Zink-, koper- en loodwerken", "/zinkwerken-koperwerken-loodwerken/limburg/", "zinkwerken-dakgoot-limburg.jpg", "Zinkwerk en dakgoot bij dakrenovatie in Limburg"],
  ["Kleinere dakwerken", "/kleinere-dakwerken/limburg/", "kleinere-dakwerken-klussen-vandormael-werner.jpg", "Kleinere dakwerken en afwerking aan woning door Vandormael Werner"],
];

const pages = [
  {
    url: "/",
    title: "Dakwerker Limburg | Algemene dakwerken | Vandormael Werner",
    description: "Vandormael Werner voert dakwerken uit in de ruime regio Limburg, met Wellen als uitvalsbasis. Voor hellende daken, platte daken, dakisolatie, dakherstellingen en zinkwerken.",
    h1: "Dakwerken in Limburg, uitgevoerd door Vandormael Werner",
    type: "home",
    image: "dakwerker-limburg-bedrijfswagen-dakwerken.jpg",
    alt: "Vandormael Werner bedrijfswagen bij uitgevoerd dakwerk in Limburg",
  },
  {
    url: "/dakwerken/limburg/",
    title: "Dakwerken Limburg | Algemene dakwerken | Vandormael Werner",
    description: "Algemene dakwerken in Limburg door Vandormael Werner uit Wellen. Voor hellende daken, platte daken, dakisolatie, dakherstellingen en dakafwerking.",
    h1: "Algemene dakwerken in Limburg",
    intro: "Vandormael Werner voert algemene dakwerken uit in de ruime regio Limburg, met Wellen als uitvalsbasis. U kan terecht voor dakwerken aan hellende en platte daken, herstellingen, isolatie en dakafwerking.",
    image: "dakwerker-limburg-bedrijfswagen-dakwerken.jpg",
    alt: "Vandormael Werner bedrijfswagen bij uitgevoerd dakwerk in Limburg",
    practical: "Algemene dakwerken kunnen bestaan uit renovatie, herstelling, isolatie en een correcte afwerking van het dak. Eerst wordt bekeken wat de situatie vraagt en welke werken passend zijn.",
    examples: ["Werken aan hellende en platte daken", "Dakisolatie als onderdeel van een renovatie", "Herstellingen en onderhoud", "Dakafwerking en aansluitingen"],
    related: [1, 2, 3, 4],
  },
  {
    url: "/hellende-daken/limburg/",
    title: "Hellende daken Limburg | Vandormael Werner dakwerken",
    description: "Hellende daken laten plaatsen, vernieuwen of herstellen in Limburg. Vandormael Werner werkt vanuit Wellen en voert dakwerken uit in de ruime regio.",
    h1: "Hellende daken in Limburg",
    intro: "Voor werken aan hellende daken in Limburg kan u terecht bij Vandormael Werner. De focus ligt op een correcte uitvoering, goede aansluiting en duurzame dakafwerking.",
    image: "hellend-dak-vandormael-werner-limburg.jpg",
    alt: "Hellend dak uitgevoerd door Vandormael Werner in Limburg",
    practical: "Bij een hellend dak zijn de staat van de dakpannen, aansluitingen en waterdichtheid belangrijke aandachtspunten. Ook bij een dakrenovatie wordt bekeken welke ingrepen nodig zijn.",
    examples: ["Dakpannen vernieuwen of herstellen", "Dakrenovatie", "Aansluitingen en dakafwerking", "Problemen met de waterdichtheid"],
    related: [0, 3, 4],
  },
  {
    url: "/platte-daken/limburg/",
    title: "Platte daken Limburg | Roofing en EPDM | Vandormael Werner",
    description: "Werken aan platte daken in Limburg. Vandormael Werner helpt bij roofing, EPDM-afwerking, aansluitingen en herstellingen aan platte daken.",
    h1: "Platte daken in Limburg",
    intro: "Vandormael Werner voert werken uit aan platte daken in de ruime regio Limburg. Dit kan gaan om roofing, EPDM-afwerking, aansluitingen, randen en herstellingen.",
    image: "plat-dak-roofing-epdm-vandormael-werner.jpg",
    alt: "Plat dak met roofing of EPDM-afwerking door Vandormael Werner",
    practical: "Een plat dak vraagt bijzondere aandacht voor waterdichtheid, randen en aansluitingen. Afhankelijk van de situatie wordt gewerkt met roofing of EPDM-afwerking waar van toepassing.",
    examples: ["Roofing of EPDM-afwerking waar van toepassing", "Randen en aansluitingen", "Herstellingen aan platte daken", "Dakisolatie bij renovatie"],
    related: [0, 3, 4],
  },
  {
    url: "/dakisolatie/limburg/",
    title: "Dakisolatie Limburg | Hellend en plat dak isoleren | Vandormael Werner",
    description: "Dakisolatie voor hellende en platte daken in Limburg. Vandormael Werner voert dakisolatiewerken uit en bezorgt duidelijke factuurinformatie voor mogelijke premieaanvragen.",
    h1: "Dakisolatie in Limburg",
    intro: "Dakisolatie kan een belangrijk onderdeel zijn van een dakrenovatie. Vandormael Werner voert dakisolatiewerken uit in de ruime regio Limburg, met Wellen als uitvalsbasis.",
    image: "dakisolatie-hellend-dak-limburg.jpg",
    alt: "Dakisolatie bij renovatie van een hellend dak in Limburg",
    practical: "Bij dakisolatiewerken kan Vandormael Werner de nodige factuurinformatie en uitvoeringsdocumenten bezorgen die u nodig hebt voor een mogelijke premieaanvraag. De voorwaarden kunnen wijzigen. Raadpleeg altijd de officiële website van de Vlaamse overheid of Mijn VerbouwPremie.",
    examples: ["Dakisolatie bij een renovatie", "Isolatie van een hellend dak", "Isolatie van een plat dak", "Uitvoeringsdocumenten voor een mogelijke premieaanvraag"],
    related: [0, 1, 2],
    faq: [
      ["Welke soorten dakisolatie bestaan er?", "De geschikte opbouw hangt af van het daktype en de bestaande situatie. Vandormael Werner bekijkt welke aanpak passend is."],
      ["Kan een hellend dak geïsoleerd worden?", "Ja, dakisolatie kan deel uitmaken van de renovatie van een hellend dak."],
      ["Kan een plat dak geïsoleerd worden?", "Ja, ook bij werken aan een plat dak kan isolatie worden bekeken als onderdeel van de dakopbouw."],
      ["Krijg ik documenten voor een mogelijke premieaanvraag?", "Bij uitvoering kunnen de nodige factuurinformatie en uitvoeringsdocumenten worden bezorgd. De premievoorwaarden kunnen wijzigen."],
    ],
  },
  {
    url: "/dakherstellingen/limburg/",
    title: "Dakherstelling Limburg | Lekkend dak herstellen | Vandormael Werner",
    description: "Dakherstelling in Limburg nodig? Vandormael Werner helpt bij lekkende daken, schade aan dakpannen, goten, aansluitingen en kleinere dakwerken.",
    h1: "Dakherstellingen in Limburg",
    intro: "Bij schade, lekkage of twijfel over de staat van uw dak kan u contact opnemen met Vandormael Werner. Er wordt bekeken wat nodig is en welke herstelling mogelijk is.",
    image: "dakherstelling-regio-limburg.jpg",
    alt: "Dakherstelling aan hellend dak in regio Limburg",
    practical: "Een tijdige herstelling kan verdere schade helpen beperken. Stuur enkele foto's door of neem contact op om de situatie te bespreken.",
    examples: ["Een lekkend dak", "Verschoven dakpannen", "Schade na wind of regen", "Problemen aan goten of aansluitingen", "Kleinere herstellingen"],
    related: [0, 1, 2, 5],
  },
  {
    url: "/zinkwerken-koperwerken-loodwerken/limburg/",
    title: "Zinkwerken Limburg | Koper- en loodwerken | Vandormael Werner",
    description: "Zinkwerken, koperwerken en loodwerken in Limburg voor dakgoten, aansluitingen, randen en dakafwerking. Vandormael Werner werkt vanuit Wellen.",
    h1: "Zink-, koper- en loodwerken in Limburg",
    intro: "Voor dakafwerking in zink, koper en lood kan u terecht bij Vandormael Werner. Deze werken zijn belangrijk voor een nette afwerking, correcte afwatering en goede aansluiting van het dak.",
    image: "zinkwerken-dakgoot-limburg.jpg",
    alt: "Zinkwerk en dakgoot bij dakrenovatie in Limburg",
    practical: "Dakgoten, randen en aansluitingen helpen regenwater correct af te voeren en het dak netjes af te werken. De nodige ingreep wordt afgestemd op de bestaande situatie.",
    examples: ["Dakgoten en afvoer", "Aansluitingen en slabben", "Dak- en randafwerking", "Herstellingen aan bestaand zinkwerk"],
    related: [0, 1, 4],
  },
  {
    url: "/kleinere-dakwerken/limburg/",
    title: "Kleinere dakwerken Limburg | Vandormael Werner",
    description: "Ook voor kleinere dakwerken en klussen in en rond de woning kan u contact opnemen met Vandormael Werner uit Wellen, actief in de ruime regio Limburg.",
    h1: "Kleinere dakwerken en klussen in Limburg",
    intro: "Naast grotere dakwerken kan u bij Vandormael Werner ook terecht voor kleinere dakwerken en klussen in en rond de woning. Ideaal wanneer een kleine ingreep tijdig moet worden uitgevoerd.",
    image: "kleinere-dakwerken-klussen-vandormael-werner.jpg",
    alt: "Kleinere dakwerken en afwerking aan woning door Vandormael Werner",
    practical: "Niet elk werk vraagt een volledige dakrenovatie. Neem contact op om een kleinere herstelling of praktische klus te bespreken.",
    examples: ["Kleine herstellingen aan het dak", "Afwerking in en rond de woning", "Problemen aan goten of aansluitingen", "Praktische klussen"],
    related: [0, 4, 5],
  },
  { url: "/projecten/", title: "Projecten dakwerken Limburg | Vandormael Werner", description: "Bekijk enkele voorbeelden van dakwerken, dakisolatie, dakherstellingen, platte daken en zinkwerken uitgevoerd door Vandormael Werner in Limburg.", h1: "Een selectie van dakwerken en uitgevoerde projecten", type: "projects", image: "hellend-dak-vandormael-werner-limburg.jpg", alt: "Hellend dak uitgevoerd door Vandormael Werner in Limburg" },
  { url: "/over-vandormael-werner/", title: "Over Vandormael Werner | Dakwerker uit Wellen", description: "Vandormael Werner is een dakwerker uit Wellen die dakwerken uitvoert in de ruime regio Limburg. Voor algemene dakwerken, herstellingen, isolatie en dakafwerking.", h1: "Over Vandormael Werner", type: "about", image: "werner-vandormael-dakwerker-limburg.jpg", alt: "Werner Vandormael aan het werk als dakwerker in Limburg" },
  { url: "/contact/", title: "Contact | Vandormael Werner dakwerken Limburg", description: "Neem contact op met Vandormael Werner voor dakwerken in Limburg. Gevestigd in Wellen en actief in de ruime regio.", h1: "Contact opnemen", type: "contact", image: "dakwerker-limburg-bedrijfswagen-dakwerken.jpg", alt: "Vandormael Werner bedrijfswagen bij uitgevoerd dakwerk in Limburg" },
  { url: "/privacybeleid/", title: "Privacybeleid | Vandormael Werner", description: "Lees hoe Vandormael Werner omgaat met persoonsgegevens die u deelt via e-mail, telefoon of het contactformulier.", h1: "Privacybeleid", type: "privacy", image: "dakwerker-limburg-bedrijfswagen-dakwerken.jpg", alt: "Vandormael Werner bedrijfswagen bij uitgevoerd dakwerk in Limburg" },
];

const homeFaq = [
  ["Voert Vandormael Werner dakwerken uit in heel Limburg?", "Vandormael Werner werkt vanuit Wellen en voert dakwerken uit in de ruime regio Limburg. Afhankelijk van het project zijn ook werken in omliggende gemeenten mogelijk."],
  ["Voor welke dakwerken kan ik contact opnemen?", "U kan contact opnemen voor algemene dakwerken, hellende daken, platte daken, dakisolatie, dakherstellingen, zink-, koper- en loodwerken en kleinere dakwerken."],
  ["Kan ik foto's van mijn dak doorsturen?", "Ja, u kan foto's doorsturen zodat de situatie eerst bekeken kan worden. Indien nodig wordt daarna een plaatsbezoek ingepland."],
  ["Doet Vandormael Werner ook kleinere dakwerken?", "Ja, naast grotere dakwerken kan u ook contact opnemen voor kleinere dakwerken en klussen in en rond de woning."],
  ["Kan ik terecht voor dakisolatie?", "Ja, Vandormael Werner voert dakisolatiewerken uit als onderdeel van dakwerken of renovatie. Bij uitvoering kunnen de nodige factuurgegevens en documenten worden voorzien voor een mogelijke premieaanvraag."],
];

function esc(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function img(file, alt, cls = "", eager = false) {
  return `<picture><source srcset="/assets/images/webp/${file.replace(/\.jpg$/, ".webp")}" type="image/webp"><img class="${cls}" src="/assets/images/optimized/${file}" alt="${esc(alt)}" width="1200" height="800" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async"></picture>`;
}

function header() {
  return `<div class="topbar"><div class="container"><span>Vandormael Werner · Algemene dakwerken · Wellen</span><a href="tel:${phone}">${phoneDisplay}</a></div></div>
<header><nav class="nav container" aria-label="Hoofdnavigatie"><a class="brand" href="/" aria-label="Vandormael Werner home"><span>VANDORMAEL</span><strong>WERNER</strong><small>DAKWERKEN</small></a><button class="menu-toggle" aria-expanded="false" aria-controls="main-menu">Menu</button><div class="menu" id="main-menu"><a href="/">Home</a><a href="/dakwerken/limburg/">Dakwerken</a><details><summary>Diensten</summary><div class="dropdown">${services.slice(1).map(s => `<a href="${s[1]}">${s[0]}</a>`).join("")}</div></details><a href="/projecten/">Projecten</a><a href="/over-vandormael-werner/">Over</a><a href="/contact/">Contact</a></div><a class="btn btn-red nav-call" href="tel:${phone}">Bel ${phoneDisplay}</a></nav></header>`;
}

function footer() {
  return `<footer><div class="footer-grid container"><div><a class="brand brand-footer" href="/"><span>VANDORMAEL</span><strong>WERNER</strong><small>DAKWERKEN</small></a><p>Vandormael Werner voert dakwerken uit in de ruime regio Limburg, met Wellen als uitvalsbasis.</p></div><div><h2>Diensten</h2>${services.map(s => `<a href="${s[1]}">${s[0]} Limburg</a>`).join("")}</div><div><h2>Contact</h2><address>Plattestraat 33<br>3830 Wellen<br>België</address><a href="tel:${phone}">${phoneDisplay}</a><a href="mailto:${email}">${email}</a></div><div><h2>Informatie</h2><a href="/projecten/">Projecten</a><a href="/over-vandormael-werner/">Over Vandormael Werner</a><a href="/contact/">Contact</a><a href="/privacybeleid/">Privacybeleid</a></div></div><div class="copy container">© ${new Date().getFullYear()} Vandormael Werner · Algemene dakwerken</div></footer><a class="mobile-call btn btn-red" href="tel:${phone}">Bel voor een dakwerker</a>`;
}

function faqBlock(items) {
  return `<div class="faq">${items.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join("")}</div>`;
}

function serviceCards() {
  return `<div class="service-grid">${services.map(s => `<a class="service-card" href="${s[1]}">${img(s[2], s[3])}<div><span>Dakwerken Limburg</span><h3>${s[0]}</h3><p>Bekijk praktische informatie over ${s[0].toLowerCase()} in de ruime regio Limburg.</p><b>Meer over ${s[0].toLowerCase()}</b></div></a>`).join("")}</div>`;
}

function contactCta() {
  return `<section class="cta"><div class="container cta-inner"><div><span class="kicker">Uw dakwerk bespreken</span><h2>Contact opnemen met Vandormael Werner</h2><p>Stuur enkele foto's van uw dak door of neem telefonisch contact op om de situatie te bespreken.</p></div><div class="actions"><a class="btn btn-white" href="tel:${phone}">Bel voor een dakwerker</a><a class="btn btn-outline-light" href="mailto:${email}">Stuur een e-mail</a></div></div></section>`;
}

function breadcrumbs(page) {
  if (page.url === "/") return "";
  return `<nav class="breadcrumbs container" aria-label="Broodkruimels"><a href="/">Home</a><span>/</span><span aria-current="page">${page.h1}</span></nav>`;
}

function homeBody(page) {
  return `<main><section class="hero"><div class="hero-bg">${img(page.image, page.alt, "", true)}</div><div class="container hero-inner"><span class="eyebrow">Dakwerker uit Wellen</span><h1>${page.h1}</h1><p>Vandormael Werner voert dakwerken uit in de ruime regio Limburg, met Wellen als uitvalsbasis. U kan terecht voor hellende daken, platte daken, dakisolatie, dakherstellingen, zink-, koper- en loodwerken en kleinere dakwerken.</p><div class="actions"><a class="btn btn-red" href="tel:${phone}">Bel voor een dakwerker</a><a class="btn btn-white" href="/contact/">Vraag een vrijblijvende inschatting</a></div></div></section>
  <section class="trust"><div class="container trust-grid">${["Lokale dakwerker uit Wellen", "Dakwerken in de ruime regio Limburg", "Hellende en platte daken", "Ook voor kleinere dakwerken en herstellingen"].map(x => `<strong>${x}</strong>`).join("")}</div></section>
  <section><div class="container"><div class="section-head"><div><span class="kicker">Dienstenoverzicht</span><h2>Welke dakwerken voert Werner uit?</h2></div><p>Van renovatie en isolatie tot herstellingen en dakafwerking.</p></div>${serviceCards()}</div></section>
  <section class="soft"><div class="container split"><div class="photo">${img("werner-vandormael-dakwerker-limburg.jpg", "Werner Vandormael aan het werk als dakwerker in Limburg")}</div><div><span class="kicker">Over Vandormael Werner</span><h2>Rechtstreeks contact met een lokale dakwerker uit Limburg</h2><p>Vandormael Werner is een dakwerker uit Wellen die dakwerken uitvoert in de ruime regio Limburg. De focus ligt op algemene dakwerken, herstellingen, isolatie en dakafwerking.</p><p>De aanpak is praktisch en duidelijk: eerst bekijken wat nodig is, daarna correct uitvoeren.</p><a class="text-link" href="/over-vandormael-werner/">Meer over Vandormael Werner</a></div></div></section>
  <section><div class="container"><div class="section-head"><div><span class="kicker">Onze werkwijze</span><h2>Zo pakken we uw dakwerk aan</h2></div></div><div class="steps">${[["1","Contact","Bel, mail of stuur enkele foto's door."],["2","Situatie bekijken","Werner bekijkt wat nodig is."],["3","Plaatsbezoek indien nodig","De situatie wordt ter plaatse beoordeeld."],["4","Duidelijke uitleg","U krijgt uitleg over de mogelijke aanpak."],["5","Uitvoering","De afgesproken dakwerken worden uitgevoerd."]].map(x=>`<article><b>${x[0]}</b><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join("")}</div></div></section>
  <section class="soft"><div class="container area"><span class="kicker">Werkgebied</span><h2>Dakwerken regio Limburg</h2><p>Vandormael Werner werkt vanuit Wellen en voert dakwerken uit in de ruime regio Limburg. Afhankelijk van het project zijn ook werken in omliggende gemeenten mogelijk.</p><p>Onder meer in de regio Wellen, Hasselt, Sint-Truiden, Tongeren, Borgloon, Bilzen, Diepenbeek en omliggende gemeenten.</p></div></section>
  <section class="dark"><div class="container"><div class="section-head"><div><span class="kicker">Projectbeelden</span><h2>Uitgelichte dakwerken</h2></div><a class="btn btn-white" href="/projecten/">Bekijk projecten</a></div>${projectGrid(4)}</div></section>
  <section><div class="container narrow"><div class="section-head"><div><span class="kicker">Veelgestelde vragen</span><h2>Praktische antwoorden</h2></div></div>${faqBlock(homeFaq)}</div></section>${contactCta()}</main>`;
}

function projectGrid(limit = services.length) {
  return `<div class="project-grid">${services.slice(1, limit + 1).map(s => `<a class="project" href="${s[1]}">${img(s[2], s[3])}<span>${s[0]}</span></a>`).join("")}</div>`;
}

function serviceBody(page) {
  const faq = page.faq || [["In welke regio voert Vandormael Werner deze werken uit?", "Vandormael Werner werkt vanuit Wellen en voert dakwerken uit in de ruime regio Limburg."], ["Kan ik foto's doorsturen?", "Ja, u kan foto's doorsturen zodat de situatie eerst bekeken kan worden."]];
  return `<main>${breadcrumbs(page)}<section class="page-hero"><div class="container"><span class="eyebrow">Vandormael Werner · Wellen</span><h1>${page.h1}</h1><p>${page.intro}</p><div class="actions"><a class="btn btn-red" href="tel:${phone}">Bel voor een dakwerker</a><a class="btn btn-outline" href="/contact/">Contact opnemen</a></div></div></section>
  <section><div class="container split"><div><span class="kicker">Praktische uitleg</span><h2>Wanneer kan u contact opnemen?</h2><p>${page.practical}</p><ul class="checks">${page.examples.map(x => `<li>${x}</li>`).join("")}</ul><a class="text-link" href="/contact/">Bespreek uw dakwerk</a></div><figure class="photo">${img(page.image, page.alt)}</figure></div></section>
  <section class="soft"><div class="container"><div class="section-head"><div><span class="kicker">Gerelateerde diensten</span><h2>Meer dakwerken in Limburg</h2></div></div><div class="related">${page.related.map(i => `<a href="${services[i][1]}">${services[i][0]} in Limburg</a>`).join("")}</div></div></section>
  <section><div class="container narrow"><div class="section-head"><div><span class="kicker">Veelgestelde vragen</span><h2>Praktische antwoorden</h2></div></div>${faqBlock(faq)}</div></section>${contactCta()}</main>`;
}

function projectBody(page) {
  return `<main>${breadcrumbs(page)}<section class="page-hero"><div class="container"><span class="eyebrow">Projectbeelden</span><h1>${page.h1}</h1><p>Bekijk enkele voorbeelden van dakwerken uitgevoerd door Vandormael Werner. De bijschriften beschrijven enkel wat op de foto's zichtbaar is.</p></div></section><section><div class="container">${projectGrid(7)}</div></section>${contactCta()}</main>`;
}

function aboutBody(page) {
  return `<main>${breadcrumbs(page)}<section class="page-hero"><div class="container"><span class="eyebrow">Dakwerker uit Wellen</span><h1>${page.h1}</h1><p>Vandormael Werner is een dakwerker uit Wellen die dakwerken uitvoert in de ruime regio Limburg.</p></div></section><section><div class="container split"><figure class="photo">${img(page.image, page.alt)}</figure><div><span class="kicker">Algemene dakwerken</span><h2>Praktisch en duidelijk</h2><p>De focus ligt op algemene dakwerken, hellende daken, platte daken, dakisolatie, dakherstellingen, zink-, koper- en loodwerken en kleinere dakwerken in en rond de woning.</p><p>De aanpak is praktisch en duidelijk: eerst bekijken wat nodig is, daarna correct uitvoeren.</p><div class="actions"><a class="btn btn-red" href="/contact/">Contact opnemen</a><a class="btn btn-outline" href="/dakwerken/limburg/">Bekijk de dakwerken</a></div></div></div></section>${contactCta()}</main>`;
}

function contactBody(page) {
  return `<main>${breadcrumbs(page)}<section class="page-hero"><div class="container"><span class="eyebrow">Dakwerken Limburg</span><h1>${page.h1}</h1><p>Neem contact op om uw dakwerk te bespreken of stuur enkele foto's van de situatie door.</p></div></section><section><div class="container contact-grid"><div class="contact-card"><h2>Vandormael Werner</h2><address>Plattestraat 33<br>3830 Wellen<br>België</address><a href="tel:${phone}">${phoneDisplay}</a><a href="mailto:${email}">${email}</a><div class="actions"><a class="btn btn-red" href="tel:${phone}">Bel voor een dakwerker</a><a class="btn btn-outline" href="mailto:${email}">Stuur een e-mail</a></div></div><form class="contact-card" action="mailto:${email}" method="post" enctype="text/plain"><h2>Vraag een vrijblijvende inschatting</h2><p>Dit formulier opent uw e-mailprogramma. Voeg daar eventueel foto's toe.</p>${[["Naam","text"],["Telefoon","tel"],["E-mail","email"],["Gemeente","text"],["Type dakwerk","text"]].map(x=>`<label>${x[0]}<input name="${x[0]}" type="${x[1]}" ${x[0]==="Naam"||x[0]==="E-mail"?"required":""}></label>`).join("")}<label>Bericht<textarea name="Bericht" rows="6" required></textarea></label><button class="btn btn-red" type="submit">Stuur uw aanvraag</button></form></div></section></main>`;
}

function privacyBody(page) {
  return `<main>${breadcrumbs(page)}<section class="page-hero"><div class="container"><span class="eyebrow">Informatie</span><h1>${page.h1}</h1><p>Hier leest u hoe Vandormael Werner omgaat met gegevens die u zelf doorgeeft.</p></div></section><section><article class="container prose"><h2>Welke gegevens worden verwerkt?</h2><p>Wanneer u telefonisch, per e-mail of via het contactformulier contact opneemt, kunnen uw naam, telefoonnummer, e-mailadres, gemeente, bericht en meegestuurde foto's worden verwerkt om uw vraag te beantwoorden.</p><h2>Contactformulier</h2><p>Het contactformulier gebruikt een mailto-koppeling en opent uw eigen e-mailprogramma. De website bewaart deze formuliergegevens niet in een eigen databank.</p><h2>Tracking en cookies</h2><p>Deze website gebruikt geen onnodige tracking of analytics. Wanneer dit later verandert, wordt dit privacybeleid aangepast.</p><h2>Privacyvragen</h2><p>Voor vragen over uw persoonsgegevens kan u contact opnemen via <a href="mailto:${email}">${email}</a> of <a href="tel:${phone}">${phoneDisplay}</a>.</p><p>Laatst bijgewerkt: 6 juni 2026.</p></article></section></main>`;
}

function schema(page) {
  const local = { "@context": "https://schema.org", "@type": "RoofingContractor", name: "Vandormael Werner", description: "Vandormael Werner voert dakwerken uit in de ruime regio Limburg, met Wellen als uitvalsbasis.", url: `${domain}/`, telephone: phone, email, contactPoint: { "@type": "ContactPoint", telephone: phone, email, contactType: "customer service", areaServed: "BE", availableLanguage: "nl-BE" }, address: { "@type": "PostalAddress", streetAddress: "Plattestraat 33", postalCode: "3830", addressLocality: "Wellen", addressCountry: "BE" }, areaServed: ["Limburg", "Wellen"], serviceType: services.map(s => s[0]) };
  const graph = [local];
  if (!page.type && page.url !== "/") graph.push({ "@type": "Service", name: page.h1, url: domain + page.url, provider: { "@type": "RoofingContractor", name: "Vandormael Werner", url: `${domain}/` }, areaServed: "Limburg" });
  const faqs = page.type === "home" ? homeFaq : page.faq;
  if (faqs) graph.push({ "@type": "FAQPage", mainEntity: faqs.map(([q,a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) });
  if (page.url !== "/") graph.push({ "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${domain}/` }, { "@type": "ListItem", position: 2, name: page.h1, item: domain + page.url }] });
  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c");
}

function render(page) {
  const body = page.type === "home" ? homeBody(page) : page.type === "projects" ? projectBody(page) : page.type === "about" ? aboutBody(page) : page.type === "contact" ? contactBody(page) : page.type === "privacy" ? privacyBody(page) : serviceBody(page);
  const depth = page.url === "/" ? 0 : page.url.split("/").filter(Boolean).length;
  const prefix = depth ? "../".repeat(depth) : "";
  return `<!doctype html><html lang="nl-BE"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${page.title}</title><meta name="description" content="${esc(page.description)}"><meta name="robots" content="index,follow"><link rel="canonical" href="${domain}${page.url}"><meta property="og:type" content="website"><meta property="og:title" content="${esc(page.title)}"><meta property="og:description" content="${esc(page.description)}"><meta property="og:url" content="${domain}${page.url}"><meta property="og:image" content="${domain}/assets/images/optimized/${page.image}"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(page.title)}"><meta name="twitter:description" content="${esc(page.description)}"><meta name="twitter:image" content="${domain}/assets/images/optimized/${page.image}"><meta name="theme-color" content="#b01822"><link rel="manifest" href="${prefix}site.webmanifest"><link rel="stylesheet" href="${prefix}assets/css/style.css"><script type="application/ld+json">${schema(page)}</script><script defer src="${prefix}assets/js/main.js"></script></head><body>${header()}${body}${footer()}</body></html>`.replaceAll('"/assets/', `"${prefix}assets/`);
}

function write(file, content) {
  const full = path.join(root, file);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content);
}

pages.forEach(page => write(page.url === "/" ? "index.html" : path.join(page.url, "index.html"), render(page)));
write("robots.txt", "User-agent: *\nAllow: /\n\nSitemap: https://wernervandormael.be/sitemap.xml\n");
write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map(p => `  <url><loc>${domain}${p.url}</loc><lastmod>${buildDate}</lastmod></url>`).join("\n")}\n</urlset>\n`);
write("schema/localbusiness.json", JSON.stringify({ "@context": "https://schema.org", "@type": "RoofingContractor", name: "Vandormael Werner", description: "Vandormael Werner voert dakwerken uit in de ruime regio Limburg, met Wellen als uitvalsbasis.", url: `${domain}/`, telephone: phone, email, contactPoint: { "@type": "ContactPoint", telephone: phone, email, contactType: "customer service", areaServed: "BE", availableLanguage: "nl-BE" }, address: { "@type": "PostalAddress", streetAddress: "Plattestraat 33", postalCode: "3830", addressLocality: "Wellen", addressCountry: "BE" }, areaServed: ["Limburg", "Wellen"], serviceType: services.map(s => s[0]) }, null, 2));
write("schema/services.json", JSON.stringify(services.map(s => ({ "@context": "https://schema.org", "@type": "Service", name: s[0], url: domain + s[1], provider: { "@type": "RoofingContractor", name: "Vandormael Werner" }, areaServed: "Limburg" })), null, 2));
write("schema/faq.json", JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: homeFaq.map(([q,a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }, null, 2));
write("schema/breadcrumbs.json", JSON.stringify(pages.filter(p => p.url !== "/").map(p => ({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${domain}/` }, { "@type": "ListItem", position: 2, name: p.h1, item: domain + p.url }] })), null, 2));
write("site.webmanifest", JSON.stringify({ name: "Vandormael Werner Dakwerken", short_name: "Vandormael Werner", start_url: "/", display: "standalone", background_color: "#ffffff", theme_color: "#b01822" }, null, 2));
console.log(`Built ${pages.length} pages and supporting files.`);
