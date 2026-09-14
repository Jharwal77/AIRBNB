const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const URL = "https://airbnb-clone-umber-two.vercel.app";

const outputDir = path.join(__dirname, "public", "images");

async function main() {
  fs.mkdirSync(outputDir, { recursive: true });

  const browser = await chromium.launch({
    headless: true
  });

  const page = await browser.newPage({
    viewport: {
      width: 1440,
      height: 1000
    }
  });

  console.log("Opening reference site...");

  await page.goto(URL, {
    waitUntil: "domcontentloaded",
    timeout: 120000
  });

  await page.waitForTimeout(5000);

  console.log("Collecting images...");

  // Scroll through the entire page to trigger lazy-loaded images.
  for (let i = 0; i < 30; i++) {
    await page.mouse.wheel(0, 1000);
    await page.waitForTimeout(500);
  }

  const imageUrls = await page.evaluate(() => {
    return [
      ...new Set(
        [...document.images]
          .map((img) => img.currentSrc || img.src)
          .filter((src) => src && src.startsWith("http"))
      )
    ];
  });

  console.log(`Found ${imageUrls.length} images`);

  for (let i = 0; i < imageUrls.length; i++) {
    const url = imageUrls[i];

    try {
      const response = await page.request.get(url);

      if (!response.ok()) {
        console.log(`Skipped ${i + 1}: ${response.status()}`);
        continue;
      }

      const buffer = await response.body();

      const filePath = path.join(
        outputDir,
        `listing-${i + 1}.jpg`
      );

      fs.writeFileSync(filePath, buffer);

      console.log(`Saved listing-${i + 1}.jpg`);
    } catch (error) {
      console.log(`Failed image ${i + 1}`);
    }
  }

  await browser.close();

  console.log("\nDONE");
  console.log(`Images saved to: ${outputDir}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});