const fs = require("fs");
const path = require("path");

const root = __dirname;
const domain = "https://wernervandormael.be";
const phoneDisplay = "0495 54 84 15";
const phone = "+32495548415";
const whatsapp = "https://wa.me/32495548415?text=Dag%20Werner%2C%20ik%20heb%20een%20vraag%20over%20dakwerken.";
const email = "werner.vandormael1@gmail.com";
const buildDate = "2026-06-08";

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
    intro: "Voor algemene dakwerken in Limburg kan u terecht bij Vandormael Werner uit Wellen. Het kan gaan om een herstelling, een renovatie, isolatie of dakafwerking. Eerst wordt bekeken wat er precies nodig is, daarna wordt de meest logische aanpak besproken.",
    image: "dakwerker-limburg-bedrijfswagen-dakwerken.jpg",
    alt: "Vandormael Werner bedrijfswagen bij uitgevoerd dakwerk in Limburg",
    listHeading: "Voor welke dakwerken kan u contact opnemen?",
    practical: "Vandormael Werner voert dakwerken uit in de ruime regio Limburg, met Wellen als uitvalsbasis. Zowel voor een afgebakende herstelling als voor verschillende werken die samen horen, kan u de situatie eerst bespreken.",
    examples: ["Werken aan hellende daken", "Werken aan platte daken", "Dakisolatie bij renovatie", "Dakherstellingen", "Zink-, koper- en loodwerken", "Kleinere dakwerken en afwerking"],
    attentionHeading: "Waar wordt op gelet bij algemene dakwerken?",
    attention: "Een dak bestaat uit meer dan alleen de zichtbare bedekking. Werner bekijkt ook de aansluitingen, randen, goten en mogelijke sporen van vocht. Zo wordt duidelijk of een gerichte herstelling volstaat of dat meerdere onderdelen samen aangepakt moeten worden.",
    related: [1, 2, 3, 4],
    faq: [
      ["Welke dakwerken voert Vandormael Werner uit?", "U kan contact opnemen voor werken aan hellende en platte daken, dakisolatie, dakherstellingen en afwerking in zink, koper en lood. Ook kleinere dakwerken kunnen besproken worden."],
      ["Werkt Vandormael Werner in heel Limburg?", "Werner werkt vanuit Wellen en voert dakwerken uit in de ruime regio Limburg. Of een werk praktisch ingepland kan worden, hangt ook af van de locatie en de omvang van het werk."],
      ["Kan ik ook contact opnemen voor kleinere dakwerken?", "Ja. Een kleine herstelling, een probleem aan een goot of een beperkte afwerking kan eerst met Werner besproken worden."],
      ["Kan ik foto's doorsturen voor een eerste inschatting?", "Ja, foto's helpen om een eerste beeld van het dak en het probleem te krijgen. Zorg indien mogelijk voor enkele overzichtsfoto's en duidelijke beelden van de schade."],
      ["Wordt er altijd een plaatsbezoek ingepland?", "Niet altijd meteen. Soms geven foto's en een korte uitleg al voldoende informatie voor een eerste bespreking. Wanneer de situatie ter plaatse bekeken moet worden, wordt een plaatsbezoek afgesproken."],
    ],
  },
  {
    url: "/hellende-daken/limburg/",
    title: "Hellende daken Limburg | Vandormael Werner dakwerken",
    description: "Hellende daken laten plaatsen, vernieuwen of herstellen in Limburg. Vandormael Werner werkt vanuit Wellen en voert dakwerken uit in de ruime regio.",
    h1: "Hellende daken in Limburg",
    intro: "Een hellend dak krijgt veel te verduren door regen, wind en ouderdom. Soms volstaat een gerichte herstelling, soms is een grotere aanpak nodig. Werner bekijkt eerst wat er aan de hand is en bespreekt daarna welke oplossing het meest logisch is.",
    image: "hellend-dak-vandormael-werner-limburg.jpg",
    alt: "Hellend dak uitgevoerd door Vandormael Werner in Limburg",
    listHeading: "Voor welke werken aan hellende daken kan u terecht?",
    practical: "Bij werken aan een hellend dak kan het gaan om losse of beschadigde dakpannen, een probleem aan een nok of aansluiting, of een grotere dakrenovatie. Ook een combinatie met dakisolatie kan bekeken worden wanneer dat past bij de bestaande dakopbouw.",
    examples: ["Beschadigde of verschoven dakpannen", "Herstellingen aan hellende daken", "Vernieuwing of renovatie van dakdelen", "Controle van aansluitingen en afwerking", "Combinatie met dakisolatie", "Problemen na wind of regen"],
    attentionHeading: "Waar wordt op gelet bij een hellend dak?",
    attention: "De waterdichtheid blijft het belangrijkste aandachtspunt. Daarom wordt gekeken naar de staat van de dakbedekking, zichtbare schade en de afwerking rond nokken, randen, goten en andere aansluitingen. Ook vochtplekken binnen kunnen helpen om het probleem beter te vinden.",
    related: [0, 3, 4],
    faq: [
      ["Wanneer moet een hellend dak hersteld worden?", "Losse dakpannen, zichtbare schade, vochtplekken of waterinsijpeling zijn redenen om het dak te laten bekijken. Wacht best niet tot een klein probleem meer schade veroorzaakt."],
      ["Moet een hellend dak altijd volledig vernieuwd worden?", "Nee. Wanneer de schade plaatselijk is en de rest van het dak nog in goede staat is, kan een gerichte herstelling volstaan. Werner bekijkt eerst wat technisch en praktisch logisch is."],
      ["Kan dakisolatie gecombineerd worden met werken aan een hellend dak?", "Ja, bij een renovatie kan bekeken worden of dakisolatie tegelijk uitgevoerd kan worden. Dat hangt af van de bestaande opbouw en de geplande dakwerken."],
      ["Kan ik foto's doorsturen van mijn hellend dak?", "Ja. Stuur zowel overzichtsfoto's als detailbeelden van beschadigde dakpannen, aansluitingen of vochtplekken door. Daarmee kan Werner de situatie eerst beter inschatten."],
      ["In welke regio voert Vandormael Werner werken aan hellende daken uit?", "Werner werkt vanuit Wellen en voert werken aan hellende daken uit in de ruime regio Limburg."],
    ],
  },
  {
    url: "/platte-daken/limburg/",
    title: "Platte daken Limburg | Roofing en EPDM | Vandormael Werner",
    description: "Werken aan platte daken in Limburg. Vandormael Werner helpt bij roofing, EPDM-afwerking, aansluitingen en herstellingen aan platte daken.",
    h1: "Platte daken in Limburg",
    intro: "Bij een plat dak is vooral de waterdichte afwerking belangrijk. Kleine problemen aan randen, naden of aansluitingen kunnen later grotere schade veroorzaken. Daarom wordt best eerst bekeken waar het probleem precies zit.",
    image: "plat-dak-roofing-epdm-vandormael-werner.jpg",
    alt: "Plat dak met roofing of EPDM-afwerking door Vandormael Werner",
    listHeading: "Voor welke werken aan platte daken kan u terecht?",
    practical: "Vandormael Werner voert werken uit aan platte daken in de ruime regio Limburg. Afhankelijk van de bestaande opbouw en het probleem kan het gaan om een herstelling, vernieuwing van dakdelen of afwerking met roofing of EPDM waar dat van toepassing is.",
    examples: ["Herstellingen aan platte daken", "Roofing of EPDM-afwerking waar van toepassing", "Controle van randen en aansluitingen", "Problemen met waterinsijpeling", "Renovatie of vernieuwing van dakdelen", "Afwerking rond dakranden en details"],
    attentionHeading: "Waar wordt op gelet bij een plat dak?",
    attention: "Naast het dakvlak worden ook randen, naden, aansluitingen en de waterafvoer bekeken. Water dat blijft staan of een beschadiging rond een detail kan wijzen op een probleem dat verder onderzocht moet worden.",
    related: [0, 3, 4],
    faq: [
      ["Wanneer moet een plat dak hersteld worden?", "Neem contact op bij waterinsijpeling, loskomende afwerking, scheuren of schade aan randen en aansluitingen. Ook wanneer u twijfelt over een oudere dakbedekking kan een controle nuttig zijn."],
      ["Werkt Vandormael Werner met roofing of EPDM?", "Werner voert werken uit met roofing en, waar van toepassing, EPDM-afwerking. Welke aanpak past, hangt af van het bestaande dak en de geplande werken."],
      ["Hoe weet ik of mijn plat dak lekt?", "Vochtplekken binnen zijn een duidelijk signaal, maar een lek kan ook zichtbaar worden aan beschadigde naden, randen of aansluitingen. De plaats waar water binnenkomt, ligt niet altijd recht boven de vochtplek."],
      ["Kan een plat dak ook geisoleerd worden?", "Ja, bij renovatiewerken aan een plat dak kan isolatie mee bekeken worden. De geschikte opbouw hangt af van de bestaande situatie."],
      ["Kan ik foto's van mijn plat dak doorsturen?", "Ja. Foto's van het volledige dakvlak en duidelijke details van randen, afvoer en zichtbare schade helpen bij een eerste bespreking."],
    ],
  },
  {
    url: "/dakisolatie/limburg/",
    title: "Dakisolatie Limburg | Hellend en plat dak isoleren | Vandormael Werner",
    description: "Dakisolatie voor hellende en platte daken in Limburg. Vandormael Werner voert dakisolatiewerken uit en bezorgt duidelijke factuurinformatie voor mogelijke premieaanvragen.",
    h1: "Dakisolatie in Limburg",
    intro: "Dakisolatie kan een belangrijk onderdeel zijn van een dakrenovatie. Ze helpt om warmteverlies via het dak te beperken en kan het comfort in de woning verbeteren. Werner bekijkt hoe de isolatie past bij het hellende of platte dak en de werken die nodig zijn.",
    image: "dakisolatie-hellend-dak-limburg.jpg",
    alt: "Dakisolatie bij renovatie van een hellend dak in Limburg",
    listHeading: "Voor welke dakisolatiewerken kan u contact opnemen?",
    practical: "Dakisolatie wordt vaak gecombineerd met andere dakwerken. Voor de plaatsing wordt eerst naar de bestaande dakopbouw gekeken, zodat de isolatie en afwerking correct op elkaar aansluiten.",
    examples: ["Dakisolatie bij renovatie van een hellend dak", "Isolatie bij werken aan een plat dak", "Bekijken van de bestaande dakopbouw", "Combinatie met dakwerken of herstellingen", "Correcte afwerking rond aansluitingen", "Documenten voor een mogelijke premieaanvraag waar relevant"],
    attentionHeading: "Waar wordt op gelet bij dakisolatie?",
    attention: "De bestaande dakopbouw, mogelijke vochtproblemen en de aansluitingen rond de isolatie zijn belangrijke aandachtspunten. Ook ventilatie wordt, waar relevant, in de volledige dakopbouw bekeken. Een correcte uitvoering is vooral belangrijk wanneer isolatie samen met een dakrenovatie geplaatst wordt.",
    related: [0, 1, 2],
    faq: [
      ["Kan een hellend dak geïsoleerd worden?", "Ja, dakisolatie kan deel uitmaken van de renovatie van een hellend dak. De aanpak hangt af van de bestaande dakopbouw en de geplande werken."],
      ["Kan een plat dak geïsoleerd worden?", "Ja, ook bij werken aan een plat dak kan isolatie mee bekeken worden. Eerst wordt nagegaan welke opbouw technisch past bij de bestaande situatie."],
      ["Kan dakisolatie gecombineerd worden met dakrenovatie?", "Ja, dat is vaak een logisch moment om de isolatie mee aan te pakken. Zo kunnen dakbedekking, isolatie en aansluitingen samen bekeken worden."],
      ["Krijg ik documenten voor een mogelijke premieaanvraag?", "Bij dakisolatiewerken kan Vandormael Werner de nodige factuurinformatie of uitvoeringsdocumenten bezorgen voor een mogelijke premieaanvraag. Dit is geen garantie op goedkeuring."],
      ["Wie controleert of ik recht heb op een premie?", "De voorwaarden kunnen wijzigen. Controleer daarom altijd de actuele informatie bij de bevoegde overheid of Mijn VerbouwPremie."],
      ["Werkt Vandormael Werner in heel Limburg voor dakisolatie?", "Werner werkt vanuit Wellen en voert dakisolatiewerken uit in de ruime regio Limburg."],
    ],
  },
  {
    url: "/dakherstellingen/limburg/",
    title: "Dakherstelling Limburg | Lekkend dak herstellen | Vandormael Werner",
    description: "Dakherstelling in Limburg nodig? Vandormael Werner helpt bij lekkende daken, schade aan dakpannen, goten, aansluitingen en kleinere dakwerken.",
    h1: "Dakherstellingen in Limburg",
    intro: "Bij dakschade is het vaak beter om niet te lang te wachten. Een klein probleem kan groter worden wanneer er water onder de dakbedekking geraakt. Met enkele foto's kan Werner soms al een eerste beeld krijgen van de situatie.",
    image: "dakherstelling-regio-limburg.jpg",
    alt: "Dakherstelling aan hellend dak in regio Limburg",
    listHeading: "Voor welke dakherstellingen kan u contact opnemen?",
    practical: "Een lekkend dak, verschoven dakpannen of problemen aan goten en aansluitingen kunnen verschillende oorzaken hebben. Werner bekijkt waar de schade zit en of een gerichte herstelling voldoende is.",
    examples: ["Lekkage of vermoeden van een lek", "Verschoven of beschadigde dakpannen", "Schade na wind of regen", "Problemen aan dakgoten of aansluitingen", "Vochtplekken binnen", "Kleinere herstellingen aan het dak"],
    attentionHeading: "Waar wordt op gelet bij een dakherstelling?",
    attention: "De zichtbare schade is niet altijd de volledige oorzaak. Daarom wordt ook gekeken naar de omliggende dakbedekking, aansluitingen, goten en plaatsen waar water onder het dak kan raken. Foto's zijn nuttig voor een eerste beeld, maar soms is een plaatsbezoek nodig.",
    related: [0, 1, 2, 5],
    faq: [
      ["Wat doe ik bij een lekkend dak?", "Probeer indien mogelijk foto's te maken van de vochtplek en van het dak aan de buitenzijde. Neem daarna contact op om de situatie te bespreken en wacht niet tot de schade groter wordt."],
      ["Kan ik foto's doorsturen van de schade?", "Ja. Stuur duidelijke detailfoto's en enkele overzichtsbeelden door. Daarmee kan Werner soms al inschatten welke onderdelen verder bekeken moeten worden."],
      ["Herstelt Vandormael Werner ook kleine dakproblemen?", "Ja, ook kleinere dakherstellingen kunnen besproken worden. Denk aan een beperkt probleem met dakpannen, een aansluiting of een goot."],
      ["Doet Vandormael Werner schade na wind of regen?", "U kan contact opnemen om schade na wind of regen te laten bekijken. De situatie en de praktische planning worden eerst met u besproken."],
      ["Hoe weet ik of een dakherstelling voldoende is?", "Dat hangt af van de oorzaak, de omvang van de schade en de staat van de rest van het dak. Werner bekijkt eerst of een plaatselijke herstelling logisch is."],
      ["In welke regio voert Werner dakherstellingen uit?", "Werner werkt vanuit Wellen en voert dakherstellingen uit in de ruime regio Limburg."],
    ],
  },
  {
    url: "/zinkwerken-koperwerken-loodwerken/limburg/",
    title: "Zinkwerken Limburg | Koper- en loodwerken | Vandormael Werner",
    description: "Zinkwerken, koperwerken en loodwerken in Limburg voor dakgoten, aansluitingen, randen en dakafwerking. Vandormael Werner werkt vanuit Wellen.",
    h1: "Zink-, koper- en loodwerken in Limburg",
    intro: "Zink-, koper- en loodwerken zijn vaak de details die bepalen of een dak netjes en waterdicht afgewerkt is. Vooral bij randen, goten en aansluitingen is een correcte plaatsing belangrijk.",
    image: "zinkwerken-dakgoot-limburg.jpg",
    alt: "Zinkwerk en dakgoot bij dakrenovatie in Limburg",
    listHeading: "Voor welke zink-, koper- en loodwerken kan u terecht?",
    practical: "Deze materialen worden gebruikt voor de afwerking en waterafvoer rond verschillende dakdelen. De nodige ingreep wordt afgestemd op het bestaande dak en kan zowel deel zijn van een renovatie als van een gerichte herstelling.",
    examples: ["Dakgoten", "Afwerking aan dakranden", "Aansluitingen", "Loodslabben of loodafwerking waar van toepassing", "Zinkwerk rond dakdetails", "Herstellingen aan bestaande afwerking"],
    attentionHeading: "Waar wordt op gelet bij dakafwerking en waterafvoer?",
    attention: "Regenwater moet vlot afgevoerd worden en aansluitingen moeten waterdicht blijven. Daarom wordt gelet op de staat van goten, randen, slabben en details rond andere dakelementen. Een nette aansluiting helpt om problemen op moeilijk zichtbare plaatsen te voorkomen.",
    related: [0, 1, 4],
    faq: [
      ["Waarvoor dienen zink-, koper- en loodwerken aan een dak?", "Ze worden gebruikt voor goten, randen, slabben en andere aansluitingen. Deze details helpen regenwater af te voeren en het dak waterdicht af te werken."],
      ["Kan een dakgoot hersteld of vernieuwd worden?", "Ja, afhankelijk van de staat kan een bestaande goot hersteld of vernieuwd worden. Eerst wordt bekeken waar het probleem zit en hoe de goot aansluit op het dak."],
      ["Waarom zijn aansluitingen zo belangrijk?", "Water zoekt vaak zijn weg langs randen en overgangen tussen verschillende materialen. Een correcte aansluiting helpt waterinsijpeling op die plaatsen te voorkomen."],
      ["Doet Vandormael Werner ook kleinere zinkwerken?", "Ja, ook een beperkte herstelling of afwerking in zink kan besproken worden. Foto's helpen om vooraf een eerste beeld te krijgen."],
      ["In welke regio voert Werner zinkwerken uit?", "Werner werkt vanuit Wellen en voert zink-, koper- en loodwerken uit in de ruime regio Limburg."],
    ],
  },
  {
    url: "/kleinere-dakwerken/limburg/",
    title: "Kleinere dakwerken Limburg | Vandormael Werner",
    description: "Ook voor kleinere dakwerken en klussen in en rond de woning kan u contact opnemen met Vandormael Werner uit Wellen, actief in de ruime regio Limburg.",
    h1: "Kleinere dakwerken en klussen in Limburg",
    intro: "Naast grotere dakwerken kan u bij Vandormael Werner ook terecht voor kleinere dakwerken en praktische herstellingen. Deze aanvullende service blijft vooral gericht op beperkte werken aan of rond het dak en kleine ingrepen in en rond de woning.",
    image: "kleinere-dakwerken-klussen-vandormael-werner.jpg",
    alt: "Kleinere dakwerken en afwerking aan woning door Vandormael Werner",
    listHeading: "Voor welke kleinere werken kan u contact opnemen?",
    practical: "Niet elk probleem vraagt een volledige dakrenovatie. Een beperkte beschadiging, een losse afwerking of een klein probleem aan een goot kan best tijdig bekeken worden. Stuur enkele foto's door om te bespreken of Werner u ermee kan helpen.",
    examples: ["Kleine dakherstellingen", "Afwerking rond dak of goot", "Kleine aansluitingen", "Controle van beperkte schade", "Praktische werken in en rond de woning waar relevant", "Kleine ingrepen die best niet blijven liggen"],
    attentionHeading: "Hoe worden kleinere werken bekeken?",
    attention: "Ook bij een klein werk is het belangrijk om eerst de oorzaak en omvang te kennen. Werner bekijkt of het om een afgebakende ingreep gaat en of ze praktisch gecombineerd kan worden met andere dakgerelateerde werken.",
    related: [0, 4, 5],
    faq: [
      ["Kan ik ook contact opnemen voor een klein dakwerk?", "Ja. Kleine dakherstellingen en beperkte afwerkingen kunnen eerst met Werner besproken worden. Stuur bij voorkeur enkele foto's mee."],
      ["Doet Vandormael Werner ook kleine herstellingen?", "Ja, zolang het werk past binnen de praktische planning en het soort werken dat Werner uitvoert. Dakwerken blijven de hoofdactiviteit."],
      ["Is een plaatsbezoek nodig voor kleine werken?", "Niet altijd voor de eerste bespreking. Met duidelijke foto's kan Werner vaak al zien of een plaatsbezoek nodig is."],
      ["Kan ik foto's doorsturen?", "Ja. Maak een overzichtsfoto en enkele duidelijke detailfoto's van het probleem. Vermeld ook kort waar aan de woning de schade zit."],
      ["In welke regio voert Werner kleinere dakwerken uit?", "Werner werkt vanuit Wellen en bespreekt kleinere dakwerken in de ruime regio Limburg."],
    ],
  },
  { url: "/over-vandormael-werner/", title: "Over Vandormael Werner | Dakwerker uit Wellen", description: "Vandormael Werner is een dakwerker uit Wellen die dakwerken uitvoert in de ruime regio Limburg. Voor algemene dakwerken, herstellingen, isolatie en dakafwerking.", h1: "Over Vandormael Werner", type: "about", image: "werner-vandormael-dakwerker-limburg.jpg", alt: "Werner Vandormael aan het werk als dakwerker in Limburg" },
  { url: "/contact/", title: "Contact | Vandormael Werner dakwerken Limburg", description: "Neem contact op met Vandormael Werner voor dakwerken in Limburg. Gevestigd in Wellen en actief in de ruime regio.", h1: "Contact opnemen", type: "contact", image: "dakwerker-limburg-bedrijfswagen-dakwerken.jpg", alt: "Vandormael Werner bedrijfswagen bij uitgevoerd dakwerk in Limburg" },
  { url: "/privacybeleid/", title: "Privacybeleid | Vandormael Werner", description: "Lees hoe Vandormael Werner omgaat met persoonsgegevens die u deelt via e-mail, telefoon of het contactformulier.", h1: "Privacybeleid", type: "privacy", image: "dakwerker-limburg-bedrijfswagen-dakwerken.jpg", alt: "Vandormael Werner bedrijfswagen bij uitgevoerd dakwerk in Limburg" },
  { url: "/algemene-voorwaarden/", title: "Algemene voorwaarden | Vandormael Werner", description: "Lees de algemene voorwaarden van Vandormael Werner voor dakwerken in Limburg, met informatie over offertes, uitvoering, betaling, klachten en aansprakelijkheid.", h1: "Algemene voorwaarden", type: "terms", image: "dakwerker-limburg-bedrijfswagen-dakwerken.jpg", alt: "Vandormael Werner bedrijfswagen bij uitgevoerd dakwerk in Limburg" },
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
  return `<header><nav class="nav container" aria-label="Hoofdnavigatie"><a class="brand" href="/" aria-label="Vandormael Werner home"><img src="/assets/images/vandormael-werner-logo.svg" alt="Vandormael Werner Dakwerken en Klussen" width="390" height="155"></a><button class="menu-toggle" aria-expanded="false" aria-controls="main-menu">Menu</button><div class="menu" id="main-menu"><a href="/">Dakwerken</a><details><summary>Diensten</summary><div class="dropdown">${services.map(s => `<a href="${s[1]}">${s[0]}</a>`).join("")}</div></details><a href="/over-vandormael-werner/">Over</a><a href="/contact/">Contact</a></div><a class="btn btn-red nav-call" href="tel:${phone}">Bel Werner</a></nav></header>`;
}

function footer() {
  return `<footer><div class="footer-grid container"><div><a class="brand brand-footer" href="/"><img src="/assets/images/vandormael-werner-logo.svg" alt="Vandormael Werner Dakwerken en Klussen" width="390" height="155"></a><p>Vandormael Werner voert dakwerken uit in de ruime regio Limburg, met Wellen als uitvalsbasis.</p></div><div><h2>Diensten</h2>${services.map(s => `<a href="${s[1]}">${s[0]} Limburg</a>`).join("")}</div><div><h2>Contact</h2><address>Vandormael Werner<br>Plattestraat 33<br>3830 Wellen<br>België</address><a href="tel:${phone}">${phoneDisplay}</a><a href="mailto:${email}">${email}</a><a href="${whatsapp}" target="_blank" rel="noopener">WhatsApp Werner</a></div><div><h2>Informatie</h2><a href="/over-vandormael-werner/">Over Vandormael Werner</a><a href="/contact/">Contact</a><a href="/privacybeleid/">Privacybeleid</a><a href="/algemene-voorwaarden/">Algemene voorwaarden</a></div></div><div class="copy container">© ${new Date().getFullYear()} Vandormael Werner · Algemene dakwerken</div></footer><a class="mobile-call btn btn-red" href="tel:${phone}">Bel Werner</a>`;
}

function faqBlock(items) {
  return `<div class="faq">${items.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join("")}</div>`;
}

function serviceCards() {
  const copy = [
    ["Dakwerken regio Limburg", "Voor dakrenovatie, onderhoud en praktische dakwerken aan woningen in Wellen en de ruime regio Limburg."],
    ["Pannen · leien · renovatie", "Herstelling en renovatie van hellende daken met aandacht voor dakopbouw, aansluitingen en afwerking."],
    ["Roofing · EPDM · afwerking", "Plaatsing en herstelling van platte daken, met aandacht voor waterdichting, dakranden en afvoer."],
    ["Meer comfort onder uw dak", "Dakisolatie bij renovatie van hellende en platte daken, met de nodige gegevens voor mogelijke premieaanvragen."],
    ["Lekken · stormschade · goten", "Voor kleinere dakherstellingen, lekkende daken, losse dakpannen, schade of problemen aan goten."],
    ["Dakgoten · slabben · aansluitingen", "Afwerking van goten, dakranden, loodslabben en aansluitingen voor een duurzaam en waterdicht dak."],
  ];
  return `<div class="service-grid">${services.slice(0, 6).map((s, i) => `<a class="service-card" href="${s[1]}">${img(s[2], s[3])}<div><span>${copy[i][0]}</span><h3>${s[0]}</h3><p>${copy[i][1]}</p><b>Meer info →</b></div></a>`).join("")}</div>`;
}

function contactCta(servicePage = false) {
  const copy = servicePage
    ? "Wilt u een dakwerk bespreken? Bel Werner of stuur enkele foto's door via e-mail, zodat de situatie eerst bekeken kan worden."
    : "Stuur enkele foto's van uw dak door of neem telefonisch contact op om de situatie te bespreken.";
  return `<section class="cta"><div class="container cta-inner"><div><span class="kicker">Uw dakwerk bespreken</span><h2>Contact opnemen met Vandormael Werner</h2><p>${copy}</p></div><div class="actions"><a class="btn btn-white" href="tel:${phone}">Bel Werner</a><a class="btn btn-outline-light" href="${whatsapp}" target="_blank" rel="noopener">Stuur via WhatsApp</a><a class="btn btn-outline-light" href="mailto:${email}">Stuur een e-mail</a></div></div></section>`;
}

function homeContact() {
  return `<section class="dark home-contact" id="contact"><div class="container contact-grid"><div><span class="kicker">Contact</span><h2>Contact opnemen met Vandormael Werner</h2><p>Heeft u een vraag over uw dak, dakisolatie, dakherstelling of kleinere dakwerken? Neem contact op via telefoon, WhatsApp, e-mail of het formulier.</p><div class="actions"><a class="btn btn-red" href="tel:${phone}">Bel Werner</a><a class="btn btn-outline-light" href="${whatsapp}" target="_blank" rel="noopener">WhatsApp Werner</a><a class="btn btn-outline-light" href="mailto:${email}">Stuur een e-mail</a></div><div class="contact-list"><a href="tel:${phone}"><small>Telefoon</small><strong>${phoneDisplay}</strong></a><a href="${whatsapp}" target="_blank" rel="noopener"><small>WhatsApp</small><strong>${phoneDisplay}</strong></a><a href="mailto:${email}"><small>E-mail</small><strong>${email}</strong></a><div><small>Adres</small><strong>Plattestraat 33<br>3830 Wellen, België</strong></div></div></div><form class="contact-card" action="mailto:${email}" method="post" enctype="text/plain"><h3>Vraag een vrijblijvende inschatting</h3><p>Laat kort weten wat er moet gebeuren. Werner neemt persoonlijk contact op via telefoon of mail.</p><label>Naam<input name="Naam" type="text" required></label><label>Telefoon of e-mail<input name="Contact" type="text" required></label><label>Bericht<textarea name="Bericht" placeholder="Beschrijf kort het dakwerk, de dakisolatie of de herstelling" required></textarea></label><button class="btn btn-red" type="submit">Contact opnemen</button></form></div></section>`;
}

function breadcrumbs(page) {
  if (page.url === "/") return "";
  return `<nav class="breadcrumbs container" aria-label="Broodkruimels"><a href="/">Home</a><span>/</span><span aria-current="page">${page.h1}</span></nav>`;
}

function homeBody(page) {
  const processSteps = [
    ["1", "Contact", "U neemt contact op via telefoon, mail of het formulier.", '<path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.2 1.2.4 2.5.7 3.8.7.7 0 1.2.5 1.2 1.2v3.5c0 .7-.5 1.2-1.2 1.2C10.5 21.6 2.4 13.5 2.4 3.6c0-.7.5-1.2 1.2-1.2h3.5c.7 0 1.2.5 1.2 1.2 0 1.3.2 2.6.7 3.8.1.4 0 .9-.3 1.2z"/>'],
    ["2", "Situatie bekijken", "We bekijken wat er aan de hand is en welke oplossing logisch is.", '<path d="M10 4a6 6 0 1 0 3.7 10.7L20 21l1-1-6.3-6.3A6 6 0 0 0 10 4zm0 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"/>'],
    ["3", "Plaatsbezoek indien nodig", "Als het niet duidelijk is op afstand, plannen we een plaatsbezoek.", '<path d="M3 11 12 3l9 8v10h-6v-6H9v6H3zm2 .9V19h2v-6h10v6h2v-7.1l-7-6.2z"/>'],
    ["4", "Duidelijke uitleg", "U krijgt heldere uitleg over de mogelijke aanpak en uitvoering.", '<path d="M4 4h16v12H8l-4 4zm2 2v9.2L7.2 14H18V6zm2 2h8v2H8zm0 4h6v2H8z"/>'],
    ["5", "Uitvoering", "Na akkoord worden de werken praktisch ingepland en correct uitgevoerd.", '<path d="m14.7 6.3 3-3a5 5 0 0 0-6.4 6.4L3 18v3h3l8.3-8.3a5 5 0 0 0 6.4-6.4l-3 3zM5.2 19H5v-.2l7.1-7.1.2.2 1.8 1.8z"/>'],
  ];
  return `<main><section class="hero"><div class="hero-bg">${img(page.image, page.alt, "", true)}</div><div class="container hero-inner"><span class="eyebrow">Dakwerker uit Limburg</span><h1>${page.h1}</h1><p>Vandormael Werner voert dakwerken uit in de ruime regio Limburg, met Wellen als uitvalsbasis. U kan terecht voor hellende daken, platte daken, dakisolatie, dakherstellingen, zink-, koper- en loodwerken en kleinere dakwerken.</p><div class="actions"><a class="btn btn-red" href="tel:${phone}">Bel Werner</a><a class="btn btn-white" href="#contact">Vraag een vrijblijvende inschatting</a></div></div></section>
  <section class="trust"><div class="container trust-grid">${["Lokale dakwerker uit Wellen", "Dakwerken in de ruime regio Limburg", "Hellende en platte daken", "Ook voor kleinere dakwerken en herstellingen"].map(x => `<strong>${x}</strong>`).join("")}</div></section>
  <section id="diensten"><div class="container"><div class="section-head"><div><span class="kicker">Diensten</span><h2>Welke dakwerken voert Werner uit?</h2></div></div>${serviceCards()}</div></section>
  <section class="soft"><div class="container split about-section"><div class="photo">${img("werner-vandormael-dakwerker-limburg.jpg", "Werner Vandormael aan het werk als dakwerker in Limburg")}</div><div><span class="kicker">Over Vandormael Werner</span><h2>Rechtstreeks contact met een lokale dakwerker uit Limburg.</h2><p>Bij Vandormael Werner spreekt u niet met een grote firma of tussenpersoon. U neemt rechtstreeks contact op met Werner, die de situatie mee bekijkt en duidelijk uitlegt wat mogelijk is.</p><p>De focus ligt op algemene dakwerken, dakisolatie, hellende daken, platte daken, dakherstellingen en afwerking in zink, koper en lood. Kleinere dakwerken of praktische klussen kunnen mee besproken worden.</p><ul class="checks"><li>Lokale dakwerker</li><li>Actief in Limburg en omliggende regio</li><li>Voor hellende en platte daken, dakisolatie, dakherstellingen en kleinere klussen</li><li>Duidelijke communicatie en praktische afspraken</li><li>Bereikbaar via telefoon, e-mail, WhatsApp of contactformulier</li></ul></div></div></section>
  <section><div class="container process-pro"><div class="process-intro"><span class="kicker">Onze werkwijze</span><h2>Zo pakken we uw dakwerk aan</h2><p>Geen ingewikkeld traject. Eerst duidelijk bekijken wat nodig is, daarna praktisch afspreken en correct uitvoeren.</p></div><div class="process-panel"><div class="process-line"></div>${processSteps.map(x=>`<article class="process-step"><div class="process-badge"><span>${x[0]}</span><svg viewBox="0 0 24 24" aria-hidden="true">${x[3]}</svg></div><div><h3>${x[1]}</h3><p>${x[2]}</p></div></article>`).join("")}</div></div></section>
  <section class="soft"><div class="container area"><span class="kicker">Werkgebied</span><h2>Dakwerken regio Limburg</h2><p>Vandormael Werner werkt vanuit Wellen en voert dakwerken uit in de ruime regio Limburg. Afhankelijk van het project zijn ook werken in omliggende gemeenten mogelijk.</p><p>Onder meer in de regio Wellen, Hasselt, Sint-Truiden, Tongeren, Borgloon, Bilzen, Diepenbeek en omliggende gemeenten.</p></div></section>
  <section><div class="container split smaller-works"><div><span class="kicker">Extra dienstpagina</span><h2>Kleinere dakwerken en klussen</h2><h3>Praktische werken aan dak, woning of bijgebouw.</h3><p>Naast grotere dakwerken kunnen ook kleinere dakwerken of praktische klussen besproken worden. Deze service blijft aanvullend op de dakwerken.</p><ul class="checks"><li>Kleine herstellingen</li><li>Praktische werken rond woning of bijgebouw</li><li>Afwerking en kleine aanpassingen</li><li>Te bespreken volgens de situatie</li></ul><a class="btn btn-red" href="/contact/">Vraag een vrijblijvende inschatting</a></div><figure class="photo">${img(services[6][2], services[6][3])}</figure></div></section>
  <section><div class="container narrow"><div class="section-head"><div><span class="kicker">Veelgestelde vragen</span><h2>Praktische antwoorden</h2></div></div>${faqBlock(homeFaq)}</div></section>${homeContact()}</main>`;
}

function serviceBody(page) {
  return `<main>${breadcrumbs(page)}<section class="page-hero"><div class="container"><span class="eyebrow">Vandormael Werner · Wellen</span><h1>${page.h1}</h1><p>${page.intro}</p><div class="actions"><a class="btn btn-red" href="tel:${phone}">Bel Werner</a><a class="btn btn-outline" href="/contact/">Contact opnemen</a></div></div></section>
  <section><div class="container split"><div><span class="kicker">Praktische uitleg</span><h2>${page.listHeading}</h2><p>${page.practical}</p><ul class="checks">${page.examples.map(x => `<li>${x}</li>`).join("")}</ul><a class="text-link" href="/contact/">Bespreek uw dakwerk</a></div><figure class="photo">${img(page.image, page.alt)}</figure></div></section>
  <section class="soft"><div class="container narrow"><div class="section-head"><div><span class="kicker">Aandachtspunten</span><h2>${page.attentionHeading}</h2><p>${page.attention}</p></div></div></div></section>
  <section><div class="container"><div class="section-head"><div><span class="kicker">Gerelateerde diensten</span><h2>Meer dakwerken in Limburg</h2></div></div><div class="related">${page.related.map(i => `<a href="${services[i][1]}">${services[i][0]} in Limburg</a>`).join("")}</div></div></section>
  <section class="soft"><div class="container narrow"><div class="section-head"><div><span class="kicker">Veelgestelde vragen</span><h2>Praktische antwoorden</h2></div></div>${faqBlock(page.faq)}</div></section>${contactCta(true)}</main>`;
}

function aboutBody(page) {
  return `<main>${breadcrumbs(page)}<section class="page-hero"><div class="container"><span class="eyebrow">Dakwerker uit Wellen</span><h1>${page.h1}</h1><p>Vandormael Werner is een dakwerker uit Wellen die dakwerken uitvoert in de ruime regio Limburg.</p></div></section><section><div class="container split"><figure class="photo">${img(page.image, page.alt)}</figure><div><span class="kicker">Algemene dakwerken</span><h2>Praktisch en duidelijk</h2><p>De focus ligt op algemene dakwerken, hellende daken, platte daken, dakisolatie, dakherstellingen, zink-, koper- en loodwerken en kleinere dakwerken in en rond de woning.</p><p>De aanpak is praktisch en duidelijk: eerst bekijken wat nodig is, daarna correct uitvoeren.</p><div class="actions"><a class="btn btn-red" href="/contact/">Contact opnemen</a><a class="btn btn-outline" href="/dakwerken/limburg/">Bekijk de dakwerken</a></div></div></div></section>${contactCta()}</main>`;
}

function contactBody(page) {
  const options = [
    ["Bel Werner", phoneDisplay, `tel:${phone}`],
    ["WhatsApp Werner", "Stuur enkele foto's of een korte uitleg.", whatsapp],
    ["Stuur een e-mail", email, `mailto:${email}`],
  ];
  return `<main>${breadcrumbs(page)}<section class="page-hero contact-hero"><div class="container"><span class="eyebrow">Dakwerken Limburg</span><h1>Contact opnemen met Werner</h1><p>Heeft u een vraag over uw dak, dakisolatie, dakherstelling of kleinere dakwerken? Bel Werner, stuur een e-mail of gebruik WhatsApp om enkele foto's door te sturen.</p><ul class="checks"><li>Rechtstreeks contact met Werner</li><li>Foto's doorsturen is mogelijk</li><li>Actief in de ruime regio Limburg</li><li>Duidelijke uitleg voor de werken starten</li></ul></div></section><section><div class="container contact-page"><div class="contact-options">${options.map(([title, text, href]) => `<a class="contact-option" href="${href}" ${href.startsWith("https://") ? 'target="_blank" rel="noopener"' : ""}><span>${title}</span><strong>${text}</strong></a>`).join("")}</div><div class="contact-address"><span class="kicker">Adres</span><h2>Vandormael Werner</h2><address>Plattestraat 33<br>3830 Wellen<br>België</address></div><form class="contact-card contact-form" action="mailto:${email}" method="post" enctype="text/plain"><h2>Vraag een vrijblijvende inschatting</h2><p>Dit formulier opent uw e-mailprogramma. Voeg daar eventueel foto's toe.</p>${[["Naam","text"],["Telefoon","tel"],["E-mail","email"],["Gemeente","text"],["Type dakwerk","text"]].map(x=>`<label>${x[0]}<input name="${x[0]}" type="${x[1]}" ${x[0]==="Naam"||x[0]==="E-mail"?"required":""}></label>`).join("")}<label>Voorkeur contact<select name="Voorkeur contact"><option>Telefoon</option><option>WhatsApp</option><option>E-mail</option></select></label><label>Bericht<textarea name="Bericht" rows="6" required></textarea></label><div class="actions"><button class="btn btn-red" type="submit">Verstuur via e-mail</button><a class="btn btn-outline" href="${whatsapp}" target="_blank" rel="noopener">Verstuur via WhatsApp</a></div></form></div></section></main>`;
}

function privacyBody(page) {
  return `<main>${breadcrumbs(page)}<section class="page-hero"><div class="container"><span class="eyebrow">Informatie</span><h1>${page.h1}</h1><p>Hier leest u hoe Vandormael Werner omgaat met persoonsgegevens die u zelf doorgeeft.</p></div></section><section><article class="container prose"><h2>Welke gegevens kunnen worden verzameld?</h2><p>Wanneer u telefonisch, per e-mail of via het contactformulier contact opneemt, kunnen uw naam, telefoonnummer, e-mailadres, gemeente, bericht en meegestuurde foto's worden verwerkt.</p><h2>Waarom worden deze gegevens gebruikt?</h2><p>De gegevens worden gebruikt om uw vragen te beantwoorden, afspraken of offertes voor te bereiden en klanten op te volgen in verband met besproken of uitgevoerde werken.</p><h2>Delen en bewaren</h2><p>Persoonsgegevens worden niet verkocht. Ze worden niet langer bewaard dan nodig voor het beantwoorden van uw vraag, de klantenopvolging en eventuele wettelijke administratieve verplichtingen.</p><h2>Contactformulier, cookies en analytics</h2><p>Het contactformulier gebruikt een mailto-koppeling en opent uw eigen e-mailprogramma. De website bewaart deze formuliergegevens niet in een eigen databank. Deze website gebruikt momenteel geen analytics of onnodige trackingcookies.</p><h2>Uw rechten en privacyvragen</h2><p>U kan vragen om uw persoonsgegevens in te kijken, te corrigeren of te verwijderen, voor zover dit verenigbaar is met eventuele wettelijke bewaarplichten. Neem daarvoor contact op via <a href="mailto:${email}">${email}</a> of <a href="tel:${phone}">${phoneDisplay}</a>.</p><p>Laatst bijgewerkt: 8 juni 2026.</p></article></section></main>`;
}

function termsBody(page) {
  const sections = [
    ["Toepassing", "Deze voorwaarden zijn van toepassing op offertes, afspraken, overeenkomsten en uitgevoerde werken door Vandormael Werner, tenzij schriftelijk anders overeengekomen."],
    ["Offertes en afspraken", "Offertes of prijsindicaties worden opgesteld op basis van de informatie die op dat moment beschikbaar is. Wanneer de situatie ter plaatse afwijkt van wat vooraf bekend was, kan de voorgestelde aanpak of prijs worden aangepast na overleg met de klant."],
    ["Uitvoering van de werken", "De uitvoering hangt onder meer af van de weersomstandigheden, beschikbaarheid van materialen, bereikbaarheid van de werkplaats en de praktische planning."],
    ["Bereikbaarheid en toegang", "De klant zorgt voor een veilige en voldoende vrije toegang tot de werkzone en meldt vooraf relevante omstandigheden op of rond de werf."],
    ["Nutsvoorzieningen", "Wanneer dit voor de werken nodig is, kunnen elektriciteit en/of water op de locatie worden gebruikt, voor zover beschikbaar en vooraf besproken."],
    ["Meerwerken", "Werken die niet in de oorspronkelijke afspraak of offerte zijn opgenomen, worden met de klant besproken en kunnen afzonderlijk worden aangerekend."],
    ["Materialen", "Materialen worden gekozen volgens de afgesproken werken en beschikbaarheid. Wanneer een bepaald materiaal niet beschikbaar is, kan een gelijkwaardig alternatief worden voorgesteld."],
    ["Betaling", "Facturen zijn betaalbaar volgens de termijn vermeld op de factuur of offerte. Bij laattijdige betaling kan Vandormael Werner de verdere uitvoering van werken opschorten tot betaling werd ontvangen."],
    ["Klachten of opmerkingen", "Eventuele opmerkingen over uitgevoerde werken worden best zo snel mogelijk schriftelijk gemeld, zodat de situatie correct kan worden bekeken."],
    ["Premies en subsidies", "Vandormael Werner kan, waar van toepassing, de nodige factuurinformatie of uitvoeringsdocumenten bezorgen voor een mogelijke premieaanvraag. De klant blijft zelf verantwoordelijk voor het controleren van de actuele voorwaarden bij de bevoegde overheid."],
    ["Aansprakelijkheid", "Vandormael Werner is verantwoordelijk voor de correcte uitvoering van de overeengekomen werken. De aansprakelijkheid geldt niet voor bestaande gebreken, verborgen problemen, normale slijtage, foutief gebruik, schade door derden of omstandigheden buiten de wil van Vandormael Werner."],
    ["Weersomstandigheden en planning", "Dakwerken kunnen worden uitgesteld of onderbroken bij regen, sterke wind, vorst of andere omstandigheden waardoor veilig en correct werken niet mogelijk is."],
    ["Annulatie of uitstel", "Wanneer een afspraak of gepland werk moet worden uitgesteld of geannuleerd, informeren beide partijen elkaar zo snel mogelijk."],
    ["Toepasselijk recht", "Op deze voorwaarden is het Belgisch recht van toepassing."],
  ];
  return `<main>${breadcrumbs(page)}<section class="page-hero"><div class="container"><span class="eyebrow">Praktische afspraken</span><h1>${page.h1}</h1><p>Deze algemene voorwaarden zijn van toepassing op offertes, afspraken en uitgevoerde werken door Vandormael Werner, tenzij schriftelijk anders overeengekomen.</p></div></section><section><article class="container prose"><p><strong>Deze pagina bevat praktische standaardvoorwaarden en vormt geen formeel juridisch advies.</strong></p>${sections.map(([h, p]) => `<h2>${h}</h2><p>${p}</p>`).join("")}<h2>Contact</h2><address>Vandormael Werner<br>Plattestraat 33<br>3830 Wellen<br>België<br><a href="tel:${phone}">${phoneDisplay}</a><br><a href="mailto:${email}">${email}</a></address><p>Laatst bijgewerkt: 8 juni 2026.</p></article></section></main>`;
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
  const body = page.type === "home" ? homeBody(page) : page.type === "about" ? aboutBody(page) : page.type === "contact" ? contactBody(page) : page.type === "privacy" ? privacyBody(page) : page.type === "terms" ? termsBody(page) : serviceBody(page);
  const depth = page.url === "/" ? 0 : page.url.split("/").filter(Boolean).length;
  const prefix = depth ? "../".repeat(depth) : "";
  return `<!doctype html><html lang="nl-BE"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${page.title}</title><meta name="description" content="${esc(page.description)}"><meta name="robots" content="index,follow"><link rel="canonical" href="${domain}${page.url}"><meta property="og:type" content="website"><meta property="og:title" content="${esc(page.title)}"><meta property="og:description" content="${esc(page.description)}"><meta property="og:url" content="${domain}${page.url}"><meta property="og:image" content="${domain}/assets/images/optimized/${page.image}"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(page.title)}"><meta name="twitter:description" content="${esc(page.description)}"><meta name="twitter:image" content="${domain}/assets/images/optimized/${page.image}"><meta name="theme-color" content="#b01822"><link rel="manifest" href="${prefix}site.webmanifest"><link rel="stylesheet" href="${prefix}assets/css/style.css"><script type="application/ld+json">${schema(page)}</script><script defer src="${prefix}assets/js/main.js"></script></head><body>${header()}${body}${footer()}</body></html>`
    .replaceAll('"/assets/', `"${prefix}assets/`)
    .replace(/href="\/([^"]*)"/g, (_, target) => `href="${target ? prefix + target : prefix || "./"}"`);
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
