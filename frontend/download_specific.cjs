const fs = require('fs');
const path = require('path');
const https = require('https');

const assetsDir = path.join(__dirname, 'public', 'assets');

const images = {
  'product3.png': 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800',
  'product4.png': 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800',
  'product6.png': 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=800',
  'home-hero.jpg': 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=1600',
  'women-hero.jpg': 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=1600',
  'men-hero.jpg': 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80&w=1600',
  'kids-hero.jpg': 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&q=80&w=1600'
};

async function download(url, filename) {
  return new Promise((resolve, reject) => {
    const dest = path.join(assetsDir, filename);
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      console.error(`Error downloading ${filename}: ${err.message}`);
      reject(err);
    });
  });
}

async function run() {
  for (const [filename, url] of Object.entries(images)) {
    await download(url, filename);
  }
}

run();
