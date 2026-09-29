# Sarda Hospital Deployment Guide

## Summary

This repo is a static site with public pages:

- `index.html`
- `facilities.html`
- `review.html`
- `sexology-clinic.html`

There is no build step. The supported deployment flow is manual static hosting on Netlify.

This release is:

- Preview first, production later
- WhatsApp-only for appointment handling
- Search Console verified with the bundled HTML file

Do not upload the whole repo. Only deploy the site artifact listed below.

## Deploy Artifact

Upload only these items:

- `index.html`
- `facilities.html`
- `review.html`
- `sexology-clinic.html`
- `css/`
- `js/`
- `Images/`
- `googlee7a42aba99053eb0.html`

Do not upload planning docs, screenshots, transcripts, helper scripts, or other repo-root files.

## Accounts

Use these accounts unless ownership has changed:

| Service | Sign in with | Notes |
| --- | --- | --- |
| Netlify | `sardahospital2000@gmail.com` | Hosting account |
| Google Analytics 4 | `sardahospital2000@gmail.com` | Measurement ID: `G-552WGVFF51` |
| Google Search Console | `sardahospital2000@gmail.com` | Verification file is included in this repo |
| Google Business Profile | `sudeepsarda@gmail.com` | Existing business profile, leave as-is |
| Domain registrar | your current `sardahospital.com` account | Only needed for DNS |

## Step 1: Pre-Preview Checks

Before creating the Netlify preview:

1. Confirm `index.html` and `facilities.html` both include GA4 with measurement ID `G-552WGVFF51`.
2. Confirm the homepage Google Reviews CTA points to the live Google Maps business listing, not a placeholder.
3. Confirm `facilities.html` uses its own canonical URL:
   `https://sardahospital.com/facilities.html`
4. Confirm `facilities.html` routes users back to homepage anchors for sections such as Services, Packages, and Appointment.
5. Keep Google Sheets and email disabled in `js/main.js`:
   - `const GOOGLE_SHEETS_URL = '';`
   - `const EMAIL_ENDPOINT = '';`

## Step 2: Create The Netlify Preview

1. Open `https://app.netlify.com`
2. Sign in with `sardahospital2000@gmail.com`
3. Create a new site using manual deploy
4. Drag only the deploy artifact into Netlify
5. Wait for the preview URL, for example:
   `random-name-123.netlify.app`

## Step 3: Preview Smoke Test

Open the Netlify preview and verify:

- Homepage loads fully
- Facilities page loads fully
- CSS, JS, and images load correctly
- Hero/nav work correctly
- Slideshow works
- Reviews carousel works
- Map loads
- Footer links work
- WhatsApp CTAs open WhatsApp
- `facilities.html` routes users back to homepage anchors where expected
- `googlee7a42aba99053eb0.html` is reachable at the site root

Do not proceed to production until the preview passes.

## Step 4: Production Cutover

After the remaining approved polish work is complete:

1. Open the Netlify site
2. Go to Domain management
3. Add:
   - `sardahospital.com`
   - `www.sardahospital.com`
4. Verify DNS settings at the registrar
5. Enable HTTPS
6. Turn on Force HTTPS
7. Confirm both production domains resolve correctly

If nameservers or DNS records were changed previously, still verify them manually before assuming production is ready.

## Step 5: Google Search Console

Use the bundled verification file as the repo-backed verification method.

1. Open `https://search.google.com/search-console`
2. Sign in with `sardahospital2000@gmail.com`
3. Add the URL-prefix property:
   `https://sardahospital.com`
4. Choose the HTML file verification option if needed
5. Confirm this file is publicly reachable:
   `https://sardahospital.com/googlee7a42aba99053eb0.html`

GA-based verification can still work as an alternate method, but do not rely on it as the only path.

## Step 6: Deferred For This Release

These are intentionally out of scope for the current launch:

- Google Sheets appointment logging
- Email notifications
- Any backend or webhook integration

Keep the site on the current WhatsApp-only flow for this release.

## Re-Deploying After Changes

Whenever production-safe changes are made:

1. Return to the Netlify site dashboard
2. Open the Deploys tab
3. Upload the deploy artifact only
4. Re-run the preview smoke test
5. Promote or re-publish only after verification

## Production Checklist

- [x] GA4 configured on both public pages
- [x] Homepage reviews CTA no longer uses a placeholder
- [x] Facilities page has its own canonical URL
- [x] Search Console verification file included in deploy artifact
- [ ] Netlify preview created
- [ ] Preview smoke test passed
- [ ] Custom domain connected
- [ ] HTTPS enabled
- [ ] Force HTTPS enabled
- [ ] Production smoke test passed
