/*
 * Simple script to convert public/official-site/icon.png to favicon.ico and copy to src/app
 * Uses the `png-to-ico` package (install as a devDependency).
 */
const fs = require('fs');
const path = require('path');

async function main() {
  // We'll use sharp to normalize the PNG to a square, then generate multiple
  // sizes and pass them to to-ico to create a multi-resolution .ico file.
  const sharp = require('sharp');
  const toIco = require('to-ico');

  const projectRoot = path.resolve(__dirname, '..');
  const pngPath = path.join(projectRoot, 'public', 'official-site/icon.png');
  const icoOut = path.join(projectRoot, 'public', 'favicon.ico');
  const appIcoOut = path.join(projectRoot, 'src', 'app', 'favicon.ico');

  if (!fs.existsSync(pngPath)) {
    console.error('public/official-site/icon.png not found. Make sure the file exists.');
    process.exit(1);
  }

  try {
    // load image and get metadata
    const img = sharp(pngPath);
    const meta = await img.metadata();
    const size = Math.max(meta.width || 0, meta.height || 0);

    // create a square canvas (transparent) and composite the original centered
    const square = await img
      .resize({ width: size, height: size, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();

    // sizes typically included in favicons
    const sizes = [16, 32, 48, 64, 128, 256];
    const buffers = await Promise.all(
      sizes.map((s) => sharp(square).resize(s, s).png().toBuffer())
    );

    const icoBuf = await toIco(buffers);
    fs.writeFileSync(icoOut, icoBuf);
    fs.writeFileSync(appIcoOut, icoBuf);
    console.log('Generated', icoOut, 'and', appIcoOut);
  } catch (err) {
    console.error('Failed to generate favicon.ico:', err);
    process.exit(2);
  }
}

main();
