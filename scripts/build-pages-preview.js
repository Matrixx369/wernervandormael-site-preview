const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const output = path.join(root, "_site");
const repoName = process.env.PAGES_REPOSITORY_NAME;

if (!repoName) {
  throw new Error("PAGES_REPOSITORY_NAME is required.");
}

const files = [
  "index.html",
  "robots.txt",
  "sitemap.xml",
  "site.webmanifest",
  "assets",
  "contact",
  "dakherstellingen",
  "dakisolatie",
  "dakwerken",
  "hellende-daken",
  "kleinere-dakwerken",
  "over-vandormael-werner",
  "platte-daken",
  "privacybeleid",
  "projecten",
  "schema",
  "zinkwerken-koperwerken-loodwerken",
];

fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });

for (const entry of files) {
  fs.cpSync(path.join(root, entry), path.join(output, entry), { recursive: true });
}

for (const file of walk(output).filter(file => file.endsWith(".html"))) {
  let html = fs.readFileSync(file, "utf8");
  html = html.replace(
    '<meta name="robots" content="index,follow">',
    '<meta name="robots" content="noindex,nofollow">'
  );
  html = html.replaceAll('href="/', `href="/${repoName}/`);
  fs.writeFileSync(file, html);
}

fs.writeFileSync(path.join(output, ".nojekyll"), "");
fs.writeFileSync(
  path.join(output, "robots.txt"),
  "User-agent: *\nDisallow: /\n"
);

console.log(`Built noindex GitHub Pages preview for /${repoName}/.`);

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const full = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}
