# CountDays (`countdaysbetween.com`) — Source of Truth

> **Mission:** A lightning-fast, privacy-first, ad-free date duration, business day calculator, life milestone tracker, and live holiday countdown platform built on Astro static architecture.

---

## 📌 Current Stable Baseline: Version `v0.2.0`
- **Git Commit:** `80fa876`
- **Total Pre-rendered Pages:** **135 Static Routes** (Verified in `dist/sitemap-0.xml`)
- **Hosting Target:** Cloudflare Pages (Static Site Generation, $0/month server cost)
- **Framework:** Astro v6.4.5 + Tailwind CSS v4 + Vercel Design Tokens (`DESIGN.md`)

---

## 🗺️ Live Route Map & Feature Registry

| Route Pattern | Description | Key Features & Schema |
| :--- | :--- | :--- |
| `/` | **Main Date Calculator** | Start/End date duration math, business days, weeks, % of year, Year Progress bar, Custom shareable timer builder, Life Days counter, Birthday Twins, and 6 popular date-pair shortcuts. Schema: `WebApplication`, `HowTo`, `FAQPage`, `WebSite`, `Organization`. |
| `/business-days/` | **Business Days Tool** | Calculates Monday–Friday working days between two dates, automatically excluding Saturdays & Sundays with reference tables. |
| `/date-calculator/` | **Add / Subtract Days** | Offset calculator with quick chips (+30d, +60d, +90d, +180d, +1yr, -30d, -90d). |
| `/age-calculator/` | **Exact Age & Milestone** | Days, weeks, months, and seconds lived with next big milestone counter (e.g. 10,000th day on Earth). |
| `/countdown/` | **Holiday Hub** | Central schedule for 80+ federal holidays across 2026, 2027, and 2028 (Leap Year) + custom countdown builder. |
| `/days-until/[slug]/` | **Individual Holiday Timers** | 80+ static holiday pages with live ticking timer, 5-year comparison table (2024–2028), contextual background, and schema (`Event`, `BreadcrumbList`, `FAQPage`). |
| `/days-between/[pair]/` | **Holiday Date Pairs Hub** | 39 curated seasonal holiday pairs (e.g. Thanksgiving ➔ Christmas, Memorial Day ➔ Labor Day) with working day breakdowns and 5-year schedules. |
| `/timeline-wars/` | **Gamified History Trivia** | Standalone fullscreen game page testing knowledge of historical dates. |
| `/about/`, `/privacy-policy/`, `/terms/`, `/contact/` | **Trust & Company Pages** | Static E-E-A-T trust pages. |

---

## 🔒 Golden Architectural & CSS Rules (Never Break)

1. **Text Width Constraint Rule:** Never use `max-w-2xl`, `max-w-3xl`, `max-w-4xl` as standalone Tailwind classes. Always use inline `style="width:100%; max-width:800px; margin:0 auto;"`.
2. **Text Container Integrity:** Always add `width:100%` to text containers and children in flex-column layouts. Never use `text-center` on a parent containing `<p>` paragraphs.
3. **Game Pages:** Always keep `/timeline-wars/` as standalone HTML without `Layout.astro`.
4. **URL Consistency:** Trailing slash is enforced (`trailingSlash: 'always'`). Canonical URLs must always use `https://www.countdaysbetween.com/.../`.
5. **Static Performance:** Zero heavy client-side JavaScript frameworks. Use lightweight vanilla inline/module scripts to keep INP < 50ms and CLS at 0.00.

---

- **v0.2.1 (Sep 2, 2026):** Upgraded `Calculator.astro` with tactile quick date presets (+30d, +90d, End of Month, New Year), structured weekend metrics, approximate hours, and 1-click summary clipboard copying, maintaining strict Vercel design tokens and zero layout shifts.
- **v0.2.0 (Sep 2, 2026):** Generated 39 curated holiday-pair duration routes (`/days-between/[pair]/`), full SEO audit suite artifacts (`countdaysbetween-audit/`), fixed Vite `.srt` watcher ignore rule, updated `public/llms.txt`, and verified clean build of 135 static pages.
- **v0.1.0 (Aug 25, 2026):** Implemented 301 WWW canonical redirects (`_redirects`), HTTP security headers (`_headers`), high-res 1200x630 `og-image.png`, `WebApplication` schema, and dynamic sitemap timestamps.

---

## 🚦 Traffic Light Protocol for New Changes

Before starting any new feature:
- 🟢 **The "What Breaks?" Check:** Explicitly verify existing routes, CSS width rules, and sitemap generation remain intact.
- 🟡 **The "Cloudflare" Check:** Verify that all output compiles to pure static HTML ($0 runtime cost, 0 cold starts).
- 🔴 **The "One Thing at a Time" Check:** Break changes into small, isolated steps with user approval after each step.
