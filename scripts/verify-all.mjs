import fs from 'node:fs';
import path from 'node:path';

const DIST_DIR = path.resolve('dist');
const SRC_DIR = path.resolve('src');

console.log('🔍 Starting Comprehensive Audit for CountDaysBetween...\n');

let totalErrors = 0;
let totalWarnings = 0;

// 1. Check CSS Golden Rules across all .astro files in src/
console.log('📦 1. Auditing Source Components for CSS Golden Rules...');
function checkAstroFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      checkAstroFiles(fullPath);
    } else if (entry.name.endsWith('.astro')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const bannedRegex = /class="[^"]*\b(max-w-2xl|max-w-3xl|max-w-4xl)\b[^"]*"/g;
      const matches = content.match(bannedRegex);
      if (matches) {
        console.error(`❌ [CSS RULE VIOLATION] Found banned max-w class in: ${path.relative(process.cwd(), fullPath)}: ${matches.join(', ')}`);
        totalErrors++;
      }
    }
  }
}
checkAstroFiles(SRC_DIR);
if (totalErrors === 0) {
  console.log('  ✅ 0 CSS Golden Rule violations in src/ components.\n');
}

// 2. Discover all HTML pages in dist/
function getHtmlFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      getHtmlFiles(fullPath, fileList);
    } else if (entry.name === 'index.html' || entry.name.endsWith('.html')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const htmlFiles = getHtmlFiles(DIST_DIR);
console.log(`📄 2. Found ${htmlFiles.length} HTML pages in dist/. Auditing SEO, Canonicals, Links, and Schema...`);

// Build a Set of all valid generated route paths
const validRoutes = new Set();
for (const file of htmlFiles) {
  let route = path.relative(DIST_DIR, file).replace(/\\/g, '/');
  if (route.endsWith('index.html')) {
    route = '/' + route.slice(0, -'index.html'.length);
  } else {
    route = '/' + route;
  }
  validRoutes.add(route);
}

let internalLinksChecked = 0;
let deadLinks = 0;
let jsonLdPassed = 0;
let jsonLdFailed = 0;
let canonicalPassed = 0;
let canonicalFailed = 0;

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const relPath = path.relative(DIST_DIR, file).replace(/\\/g, '/');

  // Check <title>
  if (!content.includes('<title>') || !content.includes('</title>')) {
    console.error(`❌ [Missing <title>] in ${relPath}`);
    totalErrors++;
  }

  // Check <meta name="description"
  if (!content.includes('<meta name="description"')) {
    console.warn(`⚠️ [Missing description] in ${relPath}`);
    totalWarnings++;
  }

  // Check <link rel="canonical"
  const canonicalMatch = content.match(/<link rel="canonical" href="([^"]+)"/);
  if (canonicalMatch) {
    canonicalPassed++;
    const url = canonicalMatch[1];
    if (!url.startsWith('https://www.countdaysbetween.com')) {
      console.error(`❌ [Invalid Canonical Domain] in ${relPath}: ${url}`);
      totalErrors++;
      canonicalFailed++;
    }
    if (!url.endsWith('/')) {
      console.error(`❌ [Canonical Missing Trailing Slash] in ${relPath}: ${url}`);
      totalErrors++;
      canonicalFailed++;
    }
  } else {
    console.error(`❌ [Missing Canonical] in ${relPath}`);
    totalErrors++;
    canonicalFailed++;
  }

  // Check Schema JSON-LD
  const jsonLdMatches = content.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g);
  for (const match of jsonLdMatches) {
    try {
      JSON.parse(match[1]);
      jsonLdPassed++;
    } catch (err) {
      console.error(`❌ [Invalid JSON-LD Syntax] in ${relPath}: ${err.message}`);
      totalErrors++;
      jsonLdFailed++;
    }
  }

  // Check Internal <a> Navigation Links
  const aHrefMatches = content.matchAll(/<a\s+[^>]*href="(\/[^"#?]*)(?:#[^"]*)?(?:\?[^"]*)?"/g);
  for (const match of aHrefMatches) {
    let target = match[1];
    
    // Ignore static asset links like pdf/xml
    if (target.match(/\.(xml|txt|ico|png|svg|jpg|jpeg|webp|pdf)$/)) {
      const assetPath = path.join(DIST_DIR, target);
      if (!fs.existsSync(assetPath)) {
        console.error(`❌ [Missing Linked Asset] in ${relPath} ➔ ${target}`);
        totalErrors++;
        deadLinks++;
      }
      continue;
    }

    if (!target.endsWith('/')) target += '/';
    internalLinksChecked++;

    if (!validRoutes.has(target)) {
      console.error(`❌ [Dead Internal Link] in ${relPath} ➔ ${target}`);
      totalErrors++;
      deadLinks++;
    }
  }
}

console.log(`\n📊 Audit Summary:`);
console.log(`  - Total Pages Checked: ${htmlFiles.length}`);
console.log(`  - Canonicals Verified: ${canonicalPassed}/${htmlFiles.length} (${canonicalFailed} failed)`);
console.log(`  - JSON-LD Structured Data Blocks: ${jsonLdPassed} passed (${jsonLdFailed} failed)`);
console.log(`  - Internal Links Verified: ${internalLinksChecked} links checked (${deadLinks} dead links)`);
console.log(`  - Total Errors: ${totalErrors}`);
console.log(`  - Total Warnings: ${totalWarnings}`);

if (totalErrors === 0) {
  console.log('\n🎉 ALL SYSTEM CHECKS PASSED WITH 0 ERRORS! SITE IS 100% HEALTHY.');
  process.exit(0);
} else {
  console.error(`\n❌ AUDIT FAILED with ${totalErrors} errors.`);
  process.exit(1);
}
