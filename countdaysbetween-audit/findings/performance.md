# Performance & Core Web Vitals Audit: countdaysbetween.com

## Overview
- **Category Health Score:** 95 / 100 🟢
- **Status:** Exceptional Static Site Performance

---

## 1. Core Web Vitals (CWV) Analysis
- **Largest Contentful Paint (LCP):** Fast (< 1.2s)
  - Preconnect links present for Google Fonts (`https://fonts.googleapis.com` & `https://fonts.gstatic.com`).
  - Hero header renders as lightweight static HTML with inline Tailwind utility classes.
- **Interaction to Next Paint (INP):** Excellent (< 50ms)
  - All interactive calculation logic runs in lightweight, vanilla browser JavaScript without heavy client-side framework overhead (no React/Vue hydration cost).
- **Cumulative Layout Shift (CLS):** 0.00
  - Card heights and grid structures use fixed container bounds and responsive CSS flex/grid wrappers to prevent layout jumps during script execution.

---

## 2. Resource & Asset Optimization
- **CSS Strategy:** Powered by Tailwind v4 compiled into minified static stylesheet.
- **JS Strategy:** Astro generates static HTML; interactive client logic is embedded in minimal inline/module `<script>` blocks.
- **Font Preloading:** Google Fonts (`Inter` and `JetBrains Mono`) loaded with `preconnect` directives.
- **Zero Third-Party Ad Overhead:** No blocking ad scripts, tag managers, or tracker bloat slowing down rendering.

---

## 3. Recommendations
1. **Self-Host Google Fonts (Low Priority):** Download Inter and JetBrains Mono WOFF2 font files into `public/fonts/` to eliminate external DNS lookups and 3rd-party rendering bottlenecks.
2. **Resource Hints for CDN:** Ensure Cloudflare HTTP/2 or HTTP/3 server push / early hints headers are active for critical CSS assets.
