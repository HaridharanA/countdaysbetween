# Prioritized Action Plan: countdaysbetween.com

## Phase 1: Immediate Critical Fixes (Week 1)

### Task 1.1: 301 Domain Canonical Synchronization
- **Issue:** `https://countdaysbetween.com/` serves canonical link `https://www.countdaysbetween.com/`.
- **Action:** Ensure DNS / Hosting rules enforce 301 redirect from non-www to www domain.
- **Effort:** Low (15 mins) | **Impact:** High

### Task 1.2: Generate High-Resolution Social Preview (`og-image.png`)
- **Issue:** `og:image` and `twitter:image` use `/favicon.svg`.
- **Action:** Create a 1200x630 visual preview banner featuring the calculator UI and title. Place in `public/og-image.png` and update `src/layouts/Layout.astro`.
- **Effort:** Low (30 mins) | **Impact:** High (Boosts social CTR)

---

## Phase 2: Schema & GEO Optimization (Weeks 2–3)

### Task 2.1: Expand WebApplication JSON-LD Schema
- **File:** `src/pages/index.astro`
- **Action:** Add `featureList`, `applicationSubCategory`, and `publisher` properties to `@type: WebApplication`.
- **Effort:** Low (20 mins) | **Impact:** Medium

### Task 2.2: Implement `llms.txt` for AI Overviews
- **File:** `public/llms.txt`
- **Action:** Add plain-text document defining date difference algorithms, business day rules, and available tools for AI search engines.
- **Effort:** Low (20 mins) | **Impact:** Medium

---

## Phase 3: Content & Programmatic Growth (Month 2)

### Task 3.1: Programmatic Date Difference Pages
- **Action:** Build landing pages for high-volume holiday & event pairs (e.g., `/days-between/thanksgiving-and-christmas`).
- **Effort:** Medium | **Impact:** High (Drives long-tail organic search volume)
