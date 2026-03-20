# New Agent Handoff Document

## Summary
- This is a static site rebuild/polish task centered on [index.html](c:/E/CodingProjects/sardahospital_dot_com/index.html), [styles.css](c:/E/CodingProjects/sardahospital_dot_com/css/styles.css), [main.js](c:/E/CodingProjects/sardahospital_dot_com/js/main.js), and [facilities.html](c:/E/CodingProjects/sardahospital_dot_com/facilities.html).
- The user wants phased implementation only: complete one phase, let the user review locally, commit that approved phase, then move to the next phase.
- Deployment is only after all approved phases are complete. This release keeps WhatsApp booking only; Google Sheets and email integrations are deferred.

## Baseline Facts
- Homepage structure already exists and includes hero, services, doctors, facilities, packages, reviews, appointment, blog, map, and populated footer.
- The main remaining work is layout refinement, mobile compaction, package/detail behavior, appointment-form density, and facilities-page integration.
- `facilities.html` currently contains unsupported page-specific classes such as `facility-card`, `contact-float`, `btn--cta-flash`, and `facilities-page__*` that are not defined in the shared stylesheet.
- `js/main.js` has no support for the facilities-page floating contact panel; remove unsupported UI or fully support it in a later approved phase.
- Homepage still has deployment follow-ups: GA snippet is commented with placeholders, the Google Reviews link is a placeholder, and optional booking integrations are disabled.
- The repo is dirty. Do not revert unrelated changes in deployment docs, images, or user artifacts.

## Workflow Rules For The Next Agent
- Work strictly phase by phase.
- Before editing, restate the exact scope of the current phase.
- After each phase, run verification, summarize findings, and stop for user review.
- Commit only after user approval for that phase.
- Do not paste transcript diff fragments or execute helper scripts directly.
- Confirm encoding in the editor/browser before “fixing” mojibake-like text; only normalize real file corruption.

## Public Interfaces And Behavior
- No backend or API work in this release.
- Appointment flow remains WhatsApp-first through the existing form submit logic in [main.js](c:/E/CodingProjects/sardahospital_dot_com/js/main.js).
- New behavior allowed in this release is limited to low-risk UI enhancements such as package expand/collapse and doctor-prefill after layout approval.

## Phase 0 - Baseline Audit
- Validate current homepage and facilities page structure, shared asset references, and duplicate-section risk.
- Confirm which text issues are actual file-encoding problems versus terminal display artifacts.
- Check current desktop and mobile behavior at `1440x900`, `375x667`, `390x844`, `767x664`, and `769x664`.
- Acceptance: stable starting point documented, no accidental edits yet.

## Phase 1 - Desktop Stabilization
- Tighten section spacing, heading rhythm, navbar/logo spacing, and CTA padding without changing site architecture.
- Keep desktop doctor cards and package cards conservative and readable.
- Refine footer spacing/alignment only; footer content already exists and should not be rebuilt.
- Acceptance: desktop looks cleaner at `1440x900`, with no clipping, crowding, or duplicated markup.

## Phase 2 - Mobile Header, Hero, And Services
- Compress the mobile navbar and hero so useful content appears in the first screen and the hero image remains visible.
- Reduce mobile heading/button sizes and vertical gaps carefully to avoid a hard breakpoint cliff at `768px`.
- Make services cards denser and easier to scan on narrow screens.
- Acceptance: `375x667`, `390x844`, and `767x664` show a compact, readable hero and stable header behavior.

## Phase 3 - Mobile Doctors And Packages
- Repack doctor cards for mobile into tighter image-and-content layouts with smaller buttons and reduced line-height.
- Keep desktop doctor cards mostly unchanged.
- Convert mobile packages to compact summary rows with expandable detail and a small WhatsApp action; keep desktop packages readable.
- Acceptance: doctor cards are visibly shorter on mobile, and package details are accessible without clutter.

## Phase 4 - Mobile Appointment Form
- Make Full Name and Phone Number denser, matching the requested inline compact treatment.
- Keep doctor/reason and date/time side by side only when the controls remain usable; otherwise stack cleanly.
- Tighten form padding and align the Call/WhatsApp contact row.
- Acceptance: appointment section fits more content per screen with no overlap, clipping, or broken submit flow.

## Phase 5 - Reviews, Blog, Footer, And Facilities Page
- Reduce excess vertical space in reviews, blog, and footer on mobile.
- Upgrade the first PCOS blog card from placeholder styling to an intentional featured card.
- Bring `facilities.html` into the shared design system, remove unsupported extras unless intentionally implemented, and fix cross-page nav/footer links back to homepage anchors.
- Acceptance: facilities page feels like part of the same site and mobile support sections are compact but usable.

## Phase 6 - Low-Risk JS Polish
- Add doctor-prefill from doctor cards into the appointment form.
- Add minimal package expand/collapse JS if the chosen package UI requires it.
- Keep Google Sheets and email integration disabled in this release.
- Acceptance: added JS is minimal, scoped, and does not change unrelated site behavior.

## Verification After Every Phase
- Run `git diff --check`.
- Search for duplicate blocks or accidental repeated section markup.
- Check HTML structure and browser console for errors.
- Re-test `1440x900`, `375x667`, `390x844`, `767x664`, and `769x664`.
- Confirm hero visibility, doctor-button alignment, package readability, appointment usability, footer usefulness, and facilities-page consistency.

## Final Deployment
- Deploy only after all phases are approved and committed.
- Use the existing manual Netlify flow in [DEPLOYMENT_GUIDE.md](c:/E/CodingProjects/sardahospital_dot_com/DEPLOYMENT_GUIDE.md), but update it to match reality before release.
- Final production checklist: re-enable real GA on homepage, replace the placeholder Google Reviews URL, verify homepage and facilities-page links, confirm WhatsApp booking works, and deploy only the actual site files and asset folders.
- Post-deploy smoke test: homepage, facilities page, hero/nav, slideshow, reviews carousel, map, footer links, and WhatsApp booking.

## Assumptions
- Same release includes homepage and facilities page.
- User review is local after each phase.
- Each approved phase gets its own commit before the next phase begins.
- WhatsApp is the only active booking integration in this release.
- The safest implementation approach is to modify existing blocks and shared styles, not perform a broad rewrite.
