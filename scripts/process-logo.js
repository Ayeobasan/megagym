const fs = require('fs');
const { PNG } = require('pngjs');

const inputPath = 'public/images/real-logo.png';
const outTransparent = 'public/images/logo-transparent.png';
const outDarkMode = 'public/images/logo-dark.png';

fs.createReadStream(inputPath)
  .pipe(new PNG({ filterType: 4 }))
  .on('parsed', function() {
    // Clone for dark mode
    const darkPNG = new PNG({ width: this.width, height: this.height });
    this.data.copy(darkPNG.data);

    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        const idx = (this.width * y + x) << 2;
        const r = this.data[idx];
        const g = this.data[idx + 1];
        const b = this.data[idx + 2];
        const a = this.data[idx + 3];

        // Is it red barbell/circle?
        const isRed = (r > 110 && r > g * 1.3 && r > b * 1.3);
        // Is it near white/light grey background?
        const isWhite = (r > 215 && g > 215 && b > 215);
        // Is it black text / lines?
        const isBlack = (r < 65 && g < 65 && b < 65 && a > 100);

        // Also handle the dark shadow at the top margin (from screenshot/camera)
        const isTopShadow = (y < 25 && r < 140 && g < 140 && b < 140 && !isRed);

        // 1. Transparent version (keeps black text as black, turns white background transparent)
        if (isWhite || isTopShadow) {
          this.data[idx + 3] = 0; // Transparent
        }

        // 2. Dark mode version: white background becomes transparent, black text becomes pure white, red stays vibrant red!
        if (isWhite || isTopShadow) {
          darkPNG.data[idx + 3] = 0;
        } else if (isBlack) {
          darkPNG.data[idx] = 255;
          darkPNG.data[idx + 1] = 255;
          darkPNG.data[idx + 2] = 255;
          darkPNG.data[idx + 3] = 255;
        }
      }
    }

    // Save transparent
    this.pack().pipe(fs.createWriteStream(outTransparent)).on('finish', () => {
      console.log('Saved logo-transparent.png');
    });

    // Save dark mode
    darkPNG.pack().pipe(fs.createWriteStream(outDarkMode)).on('finish', () => {
      console.log('Saved logo-dark.png');
    });
  });

