const fs = require('fs');
const path = require('path');
const https = require('https');
const { execSync } = require('child_process');

const srcDir = path.join(__dirname, 'src');
const assetsDir = path.join(__dirname, 'public', 'assets');

if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

const urls = new Set();
const files = [];

function walk(dir) {
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walk(fullPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css')) {
      files.push(fullPath);
      const content = fs.readFileSync(fullPath, 'utf8');
      const matches = content.match(/https:\/\/images\.unsplash\.com\/[^\s"']+/g);
      if (matches) {
        matches.forEach(url => urls.add(url));
      }
    }
  });
}

walk(srcDir);

console.log(`Found ${urls.size} unique Unsplash URLs.`);

const urlToLocalMap = {};

async function download(url) {
  return new Promise((resolve, reject) => {
    // Generate a unique filename based on the URL or a hash
    const hash = Buffer.from(url).toString('base64').substring(0, 10).replace(/[^a-z0-9]/gi, '_');
    const filename = `unsplash_${hash}.jpg`;
    const dest = path.join(assetsDir, filename);
    
    if (fs.existsSync(dest)) {
      urlToLocalMap[url] = `/assets/${filename}`;
      return resolve();
    }

    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        urlToLocalMap[url] = `/assets/${filename}`;
        console.log(`Downloaded: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      console.error(`Error downloading ${url}: ${err.message}`);
      reject(err);
    });
  });
}

async function run() {
  const downloadPromises = Array.from(urls).map(url => download(url).catch(e => console.error(e)));
  await Promise.all(downloadPromises);

  console.log('Finished downloading all images.');

  // Now replace in files
  files.forEach(filePath => {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;
    for (const [url, localPath] of Object.entries(urlToLocalMap)) {
      if (content.includes(url)) {
        content = content.split(url).join(localPath);
        changed = true;
      }
    }
    // Also replace /images/ with /assets/
    if (content.includes('/images/')) {
        content = content.split('/images/').join('/assets/');
        changed = true;
    }
    if (changed) {
      fs.writeFileSync(filePath, content);
      console.log(`Updated: ${path.basename(filePath)}`);
    }
  });
}

run();
