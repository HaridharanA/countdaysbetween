import fs from 'node:fs';
import path from 'node:path';

const DIST_DIR = path.resolve('dist');
const REDIRECTS_FILE = path.resolve('public/_redirects');

function getHtmlFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      getHtmlFiles(fullPath, fileList);
    } else if (entry.name === 'index.html') {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const htmlFiles = getHtmlFiles(DIST_DIR);
const routes = [];

for (const file of htmlFiles) {
  let route = path.relative(DIST_DIR, file).replace(/\\/g, '/');
  if (route === 'index.html') continue;
  route = '/' + route.slice(0, -'index.html'.length);
  routes.push(route);
}

routes.sort();

let content = `# 301 Redirect non-www domain to www domain
https://countdaysbetween.com/* https://www.countdaysbetween.com/:splat 301!
http://countdaysbetween.com/* https://www.countdaysbetween.com/:splat 301!
http://www.countdaysbetween.com/* https://www.countdaysbetween.com/:splat 301!

# 301 Redirect non-trailing-slash URLs to trailing-slash URLs
`;

for (const r of routes) {
  const withoutSlash = r.slice(0, -1);
  content += `${withoutSlash} ${r} 301!\n`;
}

fs.writeFileSync(REDIRECTS_FILE, content, 'utf8');
console.log(`✅ Updated public/_redirects with ${routes.length} trailing-slash rules!`);
