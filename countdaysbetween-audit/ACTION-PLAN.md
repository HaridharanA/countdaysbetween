# Prioritized Action Plan: countdaysbetween.com

## Executive Overview
`countdaysbetween.com` currently scores **96/100** overall across Technical SEO, Content Quality, On-Page SEO, Schema, Performance, AI Search Readiness, and Social Assets. This action plan outlines the roadmap to reach 100/100 and maximize organic search acquisition.

---

## Phase 1: Immediate Quick Wins & Schema Expansion (Week 1)
- [ ] **Sub-Tool Breadcrumb Schema:** Implement `BreadcrumbList` JSON-LD schema on [`/date-calculator/`](file:///D:/countdaysbetween/src/pages/date-calculator.astro), [`/business-days/`](file:///D:/countdaysbetween/src/pages/business-days.astro), and [`/age-calculator/`](file:///D:/countdaysbetween/src/pages/age-calculator.astro).
- [ ] **Sub-Tool `WebApplication` Schema:** Add dedicated `WebApplication` / `SoftwareApplication` JSON-LD schema blocks to [`/date-calculator/`](file:///D:/countdaysbetween/src/pages/date-calculator.astro) and [`/business-days/`](file:///D:/countdaysbetween/src/pages/business-days.astro).
- [ ] **Author E-E-A-T Box:** Add concise reviewer credentials card on guide sections.

---

## Phase 2: Content Growth & Programmatic Expansion (Weeks 2–3)
- [ ] **Programmatic Date Pair Pages:** Develop dynamic routes under `/days-between/[pair]/` for high-volume holiday queries (e.g. `thanksgiving-and-christmas`, `memorial-day-and-labor-day`).
- [ ] **IndexNow Protocol:** Implement IndexNow API ping script triggered on deployment to instantly inform Bing and Yandex of new pages.

---

## Phase 3: Performance & AI Citation Optimizations (Month 2)
- [ ] **Self-Host Google Fonts:** Download Inter and JetBrains Mono fonts into [`public/fonts/`](file:///D:/countdaysbetween/public/fonts) to remove third-party HTTP requests.
- [ ] **Extended `llms-full.txt`:** Write detailed documentation file [`public/llms-full.txt`](file:///D:/countdaysbetween/public/llms-full.txt) with complete date algorithms and holiday lists for deep LLM retrieval.

---

## Phase 4: Long-Term Monitoring (Ongoing)
- [ ] **GSC Performance Tracking:** Monitor click and impression volume for generic date math queries in Google Search Console.
- [ ] **GEO Citation Audit:** Perform monthly checks on ChatGPT Search, Perplexity, and Google AI Overviews to verify brand citations.
