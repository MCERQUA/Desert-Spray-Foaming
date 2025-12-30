import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputLogo = './public/images/cropped-desert-spray-foam-logo-192x192.webp';
const goldLogo = './public/images/desert-spray-foaming-logo-gold.png';
const outputDir = './public';

async function generateFavicons() {
  console.log('Generating favicons from:', inputLogo);

  // Read the source image
  const sourceBuffer = fs.readFileSync(inputLogo);

  // Generate favicon-16x16.png
  await sharp(sourceBuffer)
    .resize(16, 16)
    .png()
    .toFile(path.join(outputDir, 'favicon-16x16.png'));
  console.log('Created: favicon-16x16.png');

  // Generate favicon-32x32.png
  await sharp(sourceBuffer)
    .resize(32, 32)
    .png()
    .toFile(path.join(outputDir, 'favicon-32x32.png'));
  console.log('Created: favicon-32x32.png');

  // Generate apple-touch-icon.png (180x180)
  await sharp(sourceBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.join(outputDir, 'apple-touch-icon.png'));
  console.log('Created: apple-touch-icon.png');

  // Generate android-chrome-192x192.png
  await sharp(sourceBuffer)
    .resize(192, 192)
    .png()
    .toFile(path.join(outputDir, 'android-chrome-192x192.png'));
  console.log('Created: android-chrome-192x192.png');

  // Generate android-chrome-512x512.png (upscale from 192)
  await sharp(sourceBuffer)
    .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(outputDir, 'android-chrome-512x512.png'));
  console.log('Created: android-chrome-512x512.png');

  // Generate favicon.ico (multi-size ICO alternative - just use 32x32 png renamed)
  await sharp(sourceBuffer)
    .resize(32, 32)
    .png()
    .toFile(path.join(outputDir, 'favicon.png'));
  console.log('Created: favicon.png');

  // Generate OG image (1200x630) with gold logo centered on dark background
  const ogWidth = 1200;
  const ogHeight = 630;

  // Read the gold logo
  const goldLogoBuffer = fs.readFileSync(goldLogo);
  const goldLogoResized = await sharp(goldLogoBuffer)
    .resize(600, null, { fit: 'inside' })
    .png()
    .toBuffer();

  // Get dimensions of resized logo
  const logoMetadata = await sharp(goldLogoResized).metadata();

  await sharp({
    create: {
      width: ogWidth,
      height: ogHeight,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 1 }
    }
  })
    .composite([
      {
        input: goldLogoResized,
        gravity: 'center'
      }
    ])
    .png()
    .toFile(path.join(outputDir, 'og-image.png'));
  console.log('Created: og-image.png');

  // Generate Twitter card image (same as OG)
  await sharp({
    create: {
      width: ogWidth,
      height: ogHeight,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 1 }
    }
  })
    .composite([
      {
        input: goldLogoResized,
        gravity: 'center'
      }
    ])
    .png()
    .toFile(path.join(outputDir, 'twitter-image.png'));
  console.log('Created: twitter-image.png');

  console.log('\nAll favicons generated successfully!');
}

generateFavicons().catch(console.error);
