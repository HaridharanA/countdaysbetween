# CountDays (`countdaysbetween.com`) — Source of Truth

> **Mission:** A lightning-fast, privacy-first, ad-free date duration, business day calculator, life milestone tracker, and live holiday countdown platform built on Astro static architecture.

---

## 📌 Current Stable Baseline: Version `v0.5.2`
- **Git Commit:** In Progress
- **Total Pre-rendered Pages:** **168 Static Routes** (Verified in `dist/sitemap-0.xml`)
- **Hosting Target:** Cloudflare Pages (Static Site Generation, $0/month server cost)
- **Framework:** Astro v6.4.5 + Tailwind CSS v4 + Vercel Design Tokens (`DESIGN.md`)

---

## 🗺️ Live Route Map & Feature Registry

| Route Pattern | Description | Key Features & Schema |
| :--- | :--- | :--- |
| `/` | **Main Date Calculator (EN)** | Start/End date duration math, business days, weeks, % of year, Year Progress bar, Custom shareable timer builder, Life Days counter, Birthday Twins, and 6 popular date-pair shortcuts. Schema: `WebApplication`, `HowTo`, `FAQPage`, `WebSite`, `Organization`. |
| `/business-days/` | **Business Days Tool (EN)** | Calculates Monday–Friday working days between two dates, automatically excluding Saturdays & Sundays with reference tables. |
| `/date-calculator/` | **Add / Subtract Days (EN)** | Offset calculator with quick chips (+30d, +60d, +90d, +180d, +1yr, -30d, -90d). |
| `/age-calculator/` | **Exact Age & Milestone (EN)** | Days, weeks, months, and seconds lived with next big milestone counter (e.g. 10,000th day on Earth). |
| `/countdown/` | **Holiday Hub (EN)** | Central schedule for 80+ federal holidays across 2026, 2027, and 2028 (Leap Year) + custom countdown builder. |
| `/days-until/[slug]/` | **Individual Holiday Timers (EN)** | 80+ static holiday pages with live ticking timer, 5-year comparison table (2024–2028), contextual background, and schema (`Event`, `BreadcrumbList`, `FAQPage`). |
| `/days-between/[pair]/` | **Holiday Date Pairs Hub (EN)** | 39 curated seasonal holiday pairs (e.g. Thanksgiving ➔ Christmas, Memorial Day ➔ Labor Day) with working day breakdowns and 5-year schedules. |
| `/pt/` | **Calculadora de Dias Entre Datas (PT-BR)** | Brazilian Portuguese homepage calculator with *dias corridos*, *dias úteis (CLT)*, Year Progress, Custom Countdown builder, and Life Days counter. Schema: `WebApplication`, `FAQPage`. |
| `/pt/dias-uteis/` | **Dias Úteis no Brasil (PT-BR)** | Business days calculator excluding Brazilian weekends and national holidays with official 2026 holiday reference table and monthly distribution. |
| `/pt/aviso-previo/` | **Calculadora de Aviso Prévio CLT (PT-BR)** | Specialized tool for Brazilian labour law (Lei 12.506/2011) calculating 30 base + 3 days per year worked up to 90 days. |
| `/pt/contagem-regressiva/` | **Contagem para as Férias (PT-BR)** | Target hub for *Férias Escolares de Julho*, *Férias de Verão*, *Carnaval*, and Brazilian holiday countdowns. |
| `/pt/dias-ate/[slug]/` | **Feriados do Brasil (PT-BR)** | Individual countdown pages for Brazilian national holidays (e.g., `carnaval-2026`, `ferias-de-julho-2026`, `tiradentes-2026`). |
| `/es/` | **Calculadora de Días Entre Fechas (ES)** | Spanish homepage calculator with *días naturales*, *días hábiles*, Year Progress, Custom Countdown builder, and Life Days counter. Schema: `WebApplication`, `FAQPage`. |
| `/es/dias-habiles/` | **Días Hábiles (ES)** | Business days calculator excluding weekends and holidays for Spain and Latin America. |
| `/es/calculadora-plazos/` | **Calculadora de Plazos Ley 39/2015 (ES)** | Specialized administrative and judicial deadline calculator (*dies a quo* to *dies ad quem*) for Spain and Latin America. |
| `/es/cuenta-regresiva/` | **Vacaciones y Festivos (ES)** | Holiday & vacation countdown hub for Spain, Mexico & Latin America (*Semana Santa, Vacaciones de Verano, Reyes*). |
| `/es/dias-hasta/[slug]/` | **Festivos en Español (ES)** | Individual countdown pages for Hispanic holidays (*Día de Reyes, Viernes Santo, Vacaciones de Verano, Día de Muertos*). |
| `/timeline-wars/` | **Gamified History Trivia** | Standalone fullscreen game page testing knowledge of historical dates. |
| `/about/`, `/privacy-policy/`, `/terms/`, `/contact/` | **Trust & Company Pages** | Static E-E-A-T trust pages. |

---

## 🔒 Golden Architectural & CSS Rules (Never Break)

1. **Text Width Constraint Rule:** Never use `max-w-2xl`, `max-w-3xl`, `max-w-4xl` as standalone Tailwind classes. Always use inline `style="width:100%; max-width:800px; margin:0 auto;"`.
2. **Text Container Integrity:** Always add `width:100%` to text containers and children in flex-column layouts. Never use `text-center` on a parent containing `<p>` paragraphs.
3. **Game Pages:** Always keep `/timeline-wars/` as standalone HTML without `Layout.astro`.
4. **URL Consistency:** Trailing slash is enforced (`trailingSlash: 'always'`). Canonical URLs must always use `https://www.countdaysbetween.com/.../`.
5. **Static Performance:** Zero heavy client-side JavaScript frameworks. Use lightweight vanilla inline/module scripts to keep INP < 50ms and CLS at 0.00.
6. **Strict Validation & Page Cap Rule:** Cap is held at **168 static pages**. No new programmatic routes or keyword-targeted pages may be created based on assumptions. Every future keyword must be validated with verified Ahrefs + actual Google SERP evidence first. Focus strictly on UX polish, performance, and monitoring real indexing.

---

## 🧰 Installed Skills Suite
- **UI & Anti-Slop:** `anti-ui-slop`, `ui-design`, `frontend-design`, `ui-radar`, `web-design-guidelines`
- **SEO & Multi-language:** `seo-hreflang`, `seo-schema`, `seo-sxo`, `seo-geo`, `seo-technical`, `seo-audit`, `seo-competitor-pages`, `seo-plan`, `seo-backlinks`

---

## 📜 Feature Changelog

- **v0.5.2 (Sep 2, 2026):** 
  - **Site-Wide Meta Description Guardrail:** Scanned all 168 static pages and fixed dynamic meta description formulas across 5 templates (`/es/dias-hasta/[slug]/`, `/days-until/[slug]/`, `/pt/dias-ate/[slug]/`, `/days-between/[pair]/`, and `/`) to strictly conform with Bing/Google 25–160 character standards (120–155 chars typical).
  - **Automated Verification:** Embedded permanent automated meta description length check into `scripts/verify-all.mjs`.
  - **Portuguese On-Page SEO:** Tuned headings, monthly working day reference tables, and rich FAQ schema on `/pt/`, `/pt/dias-uteis/`, and `/pt/aviso-previo/` based on verified Ahrefs search queries.
  - **Competitor Blueprint:** Generated complete head-to-head comparison and alternatives artifacts (`COMPARISON-PAGE.md`, `comparison-schema.json`, `COMPETITOR-KEYWORD-STRATEGY.md`).
- **v0.5.1 (Sep 2, 2026):** Implemented Professional "Formal Breakdown" Copy/Export across EN, PT-BR, and ES calculators (`Calculator.astro`, `CalculatorPt.astro`, `CalculatorEs.astro`) with structured plain-text formatting (calendar days, working days, weekend days, hours, and source credit), accessible buttons with active states, and automated 168-page audit verification.
- **v0.5.0 (Sep 2, 2026):** Implemented Astro `ClientRouter` for smooth SPA cross-fade page transitions, brought 100% full feature parity to Portuguese and Spanish (Year Progress, Custom Countdown Builder, Life Days Counter), launched specialized Brazilian *Aviso Prévio CLT* (`/pt/aviso-previo/`) and Spanish *Plazos Ley 39/2015* (`/es/calculadora-plazos/`), compiling 168 static pages.

- **v0.4.0 (Sep 2, 2026):** Launched full Spanish (`/es/`) engine for Spain and Latin America with *días hábiles* calculator, vacation hub (`/es/cuenta-regresiva/`), 10 dynamic holiday countdown routes (`/es/dias-hasta/[slug]/`), 3-way language switchers, bidirectional `hreflang="es-ES"` tags, and verified clean compilation of 166 static pages.
- **v0.3.0 (Sep 2, 2026):** Launched full Brazilian Portuguese (`/pt/`) engine with native CLT business days calculator, dedicated holiday/vacation hub (`/pt/contagem-regressiva/`), 15 dynamic countdown routes (`/pt/dias-ate/[slug]/`), bidirectional `hreflang="pt-BR"` tags, and verified clean compilation of 153 static pages.
- **v0.2.1 (Sep 2, 2026):** Upgraded `Calculator.astro` with tactile quick date presets (+30d, +90d, End of Month, New Year), structured weekend metrics, approximate hours, and 1-click summary clipboard copying, maintaining strict Vercel design tokens and zero layout shifts.
- **v0.2.0 (Sep 2, 2026):** Generated 39 curated holiday-pair duration routes (`/days-between/[pair]/`), full SEO audit suite artifacts (`countdaysbetween-audit/`), fixed Vite `.srt` watcher ignore rule, updated `public/llms.txt`, and verified clean build of 135 static pages.
- **v0.1.0 (Aug 25, 2026):** Implemented 301 WWW canonical redirects (`_redirects`), HTTP security headers (`_headers`), high-res 1200x630 `og-image.png`, `WebApplication` schema, and dynamic sitemap timestamps.

---

## 🚦 Traffic Light Protocol for New Changes

Before starting any new feature:
- 🟢 **The "What Breaks?" Check:** Explicitly verify existing routes, CSS width rules, and sitemap generation remain intact.
- 🟡 **The "Cloudflare" Check:** Verify that all output compiles to pure static HTML ($0 runtime cost, 0 cold starts).
- 🔴 **The "One Thing at a Time" Check:** Break changes into small, isolated steps with user approval after each step.
