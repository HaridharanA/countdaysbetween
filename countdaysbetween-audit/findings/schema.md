# Schema & Structured Data Audit: countdaysbetween.com

## Overview
- **Category Health Score:** 98 / 100 🟢
- **Status:** Expanded & Validated JSON-LD Implementation

---

## 1. Global Schemas (`src/layouts/Layout.astro`)
- **`WebSite` Schema:**
  - `@id`: `https://www.countdaysbetween.com/#website`
  - `url`: `https://www.countdaysbetween.com/`
  - `name`: `CountDays`
  - `potentialAction`: Includes `SearchAction` schema for site search integration in SERPs.
- **`Organization` Schema:**
  - `@id`: `https://www.countdaysbetween.com/#organization`
  - `name`: `CountDays`
  - `logo`: Absolute URL pointing to `https://www.countdaysbetween.com/favicon-96x96.png`

---

## 2. Homepage Schemas (`src/pages/index.astro`)
- **`WebApplication` Schema:**
  - `name`: `CountDays - Days Between Dates Calculator`
  - `applicationCategory`: `UtilityApplication`
  - `applicationSubCategory`: `Calculator`
  - `featureList`: "Days Between Dates, Business Days Calculator, Date Add/Subtract, Age Calculator, Countdown Hub"
  - `offers`: Free (`price: 0`, `priceCurrency: USD`)
- **`HowTo` Schema:**
  - Step-by-step guidance on selecting start date, end date, toggling inclusion, and calculating duration.
- **`FAQPage` Schema:**
  - Structured questions and answers matching on-page accordion FAQs for rich snippet eligibility.

---

## 3. Holiday Countdown Schemas (`src/pages/days-until/[slug].astro`)
- **`Event` Schema:**
  - `name`: Holiday name (e.g. `Labor Day 2026`)
  - `startDate`: Event ISO date
  - `eventAttendanceMode`: `OfflineEventAttendanceMode`
  - `eventStatus`: `EventScheduled`
  - `location`: United States address envelope
- **`BreadcrumbList` Schema:**
  - 3-level position hierarchy: Home → Countdown → Holiday Page
- **`FAQPage` Schema:**
  - Custom schema array generated from unique holiday FAQ data.

---

## 4. Recommendations
1. **Add `WebApplication` / `SoftwareApplication` Schema to Sub-Tools:** Extend dedicated `WebApplication` schemas to `/date-calculator/` and `/business-days/` pages to explicitly declare sub-tool capabilities to search engines.
2. **Add `BreadcrumbList` to Main Navigation Pages:** Implement explicit `BreadcrumbList` JSON-LD on `/date-calculator/`, `/age-calculator/`, and `/business-days/`.
