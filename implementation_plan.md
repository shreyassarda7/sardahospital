# Mobile-First Refactor — Sarda Hospital Website (v2)

Refactor from desktop-first CSS into a **mobile-first** architecture optimized for smartphone browsing. Preserve brand colors, core content, and desktop quality.

---

## Current State — Key Problems

| Problem | Impact on Mobile |
|---|---|
| Desktop-first CSS (`max-width` breakpoints) | Mobile properties are overrides; causes bloat |
| Hero `min-height: 100vh`, 2-col grid | Full viewport scroll before any content |
| 8 service cards → 1-col collapse | ~8 screens of scrolling |
| Doctor cards 3-panel row layout | CTA buried, wasted space |
| 6 package cards 3-col collapse | Very long scroll |
| Floating Contact Panel (side tab) | Overlaps WhatsApp FAB; tiny tap target |
| No bottom navigation | Must scroll up to navigate |
| Tap targets < 44px (slideshow arrows, etc.) | Fails tap target guidelines |
| Duplicate CSS rules (`.facilities__grid`, `.facility-card`) | Bloat, unpredictable cascade |

---

## Do NOT Change

Brand colors, core content meaning, desktop experience (≥1024px), GA4, SEO meta tags, deployment setup.

---

## Proposed Changes

### Strategy: Section-by-Section Migration

> [!IMPORTANT]
> Per user feedback, **do NOT mass-rewrite all media queries at once**. Migrate section by section in this order: Hero → Services → Doctors → Facilities → Packages → Reviews → Appointment → Blog → Map → Footer → Global. Each section is a self-contained refactor pass to catch regressions early.

---

### Component 1 — CSS Architecture

#### [MODIFY] [styles.css](file:///c:/E/CodingProjects/sardahospital_dot_com/css/styles.css)

**Base styles = mobile (320–480px)**, then scale up with `min-width` breakpoints:
- `--bp-sm: 480px`, `--bp-md: 768px`, `--bp-lg: 1024px`, `--bp-xl: 1200px`

| Area | Mobile (Base) | Scale Up |
|---|---|---|
| `.section` padding | `var(--sp-6)` (32px) | `var(--sp-9)` at ≥768px |
| `.container` side padding | `var(--sp-4)` (16px) | `var(--sp-5)` at ≥768px |
| **Hero** | Single column: **content first, then image** (CTA visible above fold). `min-height: auto` | 2-col grid at ≥768px |
| **Services** | 1-col, show 4 cards + "Show All" toggle | 2-col at ≥768px |
| **Doctors** | Vertical: image → details → CTA, full-width | 3-panel row at ≥900px |
| **Packages** | Horizontal scroll with CSS `scroll-snap` + peek affordance (next card visible ~20px) + dot indicators | 2-col at ≥768px, 3-col at ≥1024px |
| **Facilities** | 2-col grid | `auto-fill minmax(220px, 1fr)` at ≥768px |
| **Blog** | 1-col stack | 3-col at ≥1024px |
| **Footer** | Single column with `<details>/<summary>` (CSS-only accordions, no JS) | 4-col grid at ≥768px |
| **Appointment** | 1-col (info then form) | 2-col at ≥768px |
| **Font sizes** | `--fs-hero` min → `1.8rem`, `--fs-h1` min → `1.5rem` | Current clamp maxes |
| **Tap targets** | All interactive elements `min-height: 44px`, `min-width: 44px` | — |

**Floating elements on mobile:**
- Contact panel: `display: none` below 768px (replaced by bottom nav)
- WhatsApp FAB: `bottom` adjusted to sit above bottom nav (~80px)

**Duplicate CSS cleanup:**
- Consolidate the two `.facilities__grid` blocks (lines 1116–1211 and 2388–2449) into one unified block
- The second block's `auto-fill minmax(220px, 1fr)` + updated `.facility-card--heading` styles are the ones to keep (used by both `index.html` and `facilities.html`)
- Remove the first block's `repeat(5, 1fr)` definition and its `max-width` breakpoints

**Responsive images:**
- Add `sizes` attributes on `<img>` tags for hero and facility images
- Ensure all images have `max-width: 100%; height: auto;` (already present in reset, verify not overridden)
- Body padding-bottom: `72px` on mobile for bottom nav clearance

---

### Component 2 — HTML Structure

#### [MODIFY] [index.html](file:///c:/E/CodingProjects/sardahospital_dot_com/index.html)

| Change | Detail |
|---|---|
| **Hero mobile order** | Swap to: content first (order: 0), image second (order: 1) on mobile — **CTA visible immediately** without scrolling past image |
| **Services condensation** | Wrap cards 5–8 in `<div class="services__more" id="services-more" hidden>` + add "Show All Services ▼" toggle button. Primary 4: Obstetrics, C-Section, Gynaecology, Laparoscopy |
| **Packages scroll indicators** | Add `<div class="packages__dots">` container for CSS-generated dot indicators |
| **Footer → accordions** | Wrap Quick Links / Services / Contact columns in `<details><summary>` elements for CSS-only mobile accordion |
| **Bottom nav** | Add `<nav class="bottom-nav" id="bottom-nav">` before `</body>` with items: 🏠 Home · 🩺 Services · 📅 Book (primary) · 📞 Call · 💬 WhatsApp |
| **Image `sizes` attrs** | Add `sizes="(max-width: 768px) 100vw, 50vw"` to hero images, `sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 25vw"` to facility images |

---

### Component 3 — JavaScript

#### [MODIFY] [main.js](file:///c:/E/CodingProjects/sardahospital_dot_com/js/main.js)

| Change | Detail |
|---|---|
| **Bottom nav active state** | Extend existing `updateActiveNav()` to also highlight bottom-nav items using same IntersectionObserver logic |
| **Bottom nav hide/show** | Smart scroll: hide on scroll-down, show on scroll-up (like mobile browser address bar) |
| **Services toggle** | Simple `hidden` attribute toggle on `#services-more` + update button text ("Show All ▼" ↔ "Show Less ▲") |
| **Bottom nav Home = scroll-to-top** | Home button smooth-scrolls to `#home` |
| ~~Hero swipe~~ | ~~Already implemented~~ (lines 89–99) — **no change needed** |

---

## UX Improvements Summary

1. **~50% less scrolling** — condensed services, compact hero, tighter padding
2. **CTA always one tap away** — sticky bottom nav with Book/Call/WhatsApp
3. **Above-fold CTA** — hero content (tagline + Book button) shows before image on mobile
4. **Thumb-friendly** — 44px minimum tap targets, bottom-positioned actions
5. **Scannable packages** — horizontal scroll with peek affordance + dots
6. **CSS-only footer accordions** — no JS needed, `<details>/<summary>` pattern
7. **Cleaner CSS** — consolidated duplicate rules, mobile-first cascade

---

## Verification Plan

### Browser Testing
Test at 4 viewports via DevTools: **iPhone SE** (375×667), **iPhone 14** (390×844), **iPad Mini** (768×1024), **Desktop** (1440×900)

Per section checklist:
- Hero: content-first on mobile, 2-col on desktop
- Services: 4 cards + toggle on mobile, full grid on desktop
- Packages: horizontal scroll with peek on mobile, grid on desktop
- Doctors: vertical stack on mobile, row on desktop
- Bottom nav: visible mobile, hidden desktop
- Footer: accordions on mobile, grid on desktop
- All tap targets ≥ 44px
- WhatsApp FAB above bottom nav
- No regression on `facilities.html`

### User Testing
After implementation, user tests on actual smartphone device for real-world feel.

---

## Post-Completion Addendum: Adressing Visual Regressions

The initial CSS conversion from max-width to min-width inadvertently caused several overlapping issues due to unexpected interactions with the existing grid structures and absolute positioning. Specifically:

1. **Header Collapse**: The top navigation bar layout broke down into a single row on some mobile widths, cramming the logo, text, and hamburger menu together.
2. **Hero Vertical Spacing**: The emergency bar + navbar heights resulted in a very large padding-top (108px) that, combined with the dense hero text (3 taglines), pushed the primary CTAs down and made the top third feel cluttered. 

### Addressing the "Two Copies" Request

The user suggested creating two separate copies of the code (one for laptop, one for mobile) and serving them conditionally. 

This approach (often called "m-dot sites" or user-agent sniffing) is strongly discouraged in modern web development because:
*   **Maintenance Nightmare:** Any text change, new image, or bug fix has to be applied twice.
*   **SEO Penalties:** Google prefers responsive web design (one URL, one HTML file) and penalizes duplicate content if not handled perfectly with canonical tags.
*   **Cache Invalidation:** CDNs struggle to cache device-conditional logic correctly.

**The Solution:**
We will stick to a single `index.html` file but **strictly separate the CSS logic**. Instead of trying to write mobile-first CSS that gracefully scales up, which is causing conflicts with the legacy desktop styles, we will use disjoint media queries. 

We will structure `styles.css` into two distinct sections:
1.  **Mobile Styles:** `@media (max-width: 1023px)` -> Everything specific to phones and tablets.
2.  **Desktop Styles:** `@media (min-width: 1024px)` -> Everything specific to laptops and desktops.

This provides the exact isolation the user wants ("two copies") but at the CSS CSS level, avoiding the nightmare of duplicating the HTML.

### Action Plan 
1.  **Fix Hero Density:** Remove the redundant tagline text (`hero__tagline-rotator`) from the HTML to declutter the top of the mobile screen.
2.  **Fix Header Cramping:** Simplify the navbar on mobile by hiding the descriptive text under the logo to ensure the logo and hamburger menu have room to breathe.
