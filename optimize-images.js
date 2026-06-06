const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const sourceDir = path.join(__dirname, "assets", "images");
const originalDir = path.join(sourceDir, "original");
const optimizedDir = path.join(sourceDir, "optimized");
const webpDir = path.join(sourceDir, "webp");

for (const dir of [originalDir, optimizedDir, webpDir]) {
  fs.mkdirSync(dir, { recursive: true });
}

async function run() {
  const files = fs.readdirSync(sourceDir).filter(file => file.endsWith(".jpg"));

  for (const file of files) {
    fs.copyFileSync(path.join(sourceDir, file), path.join(originalDir, file));
    const image = sharp(path.join(sourceDir, file)).rotate().resize({
      width: 1600,
      height: 1200,
      fit: "inside",
      withoutEnlargement: true,
    });
    await image.clone().jpeg({ quality: 82, progressive: true }).toFile(path.join(optimizedDir, file));
    await image.clone().webp({ quality: 80 }).toFile(path.join(webpDir, file.replace(/\.jpg$/, ".webp")));
  }

  console.log(`Optimized ${files.length} images.`);
}

run().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
