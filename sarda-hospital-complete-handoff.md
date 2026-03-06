# SARDA HOSPITAL — COMPLETE PROJECT HANDOFF
## For New Claude Chat: Read Every Word Before Responding

You are receiving full context from a long planning conversation. Your job is to act as **Master Orchestrator** and produce individual prompts for each AI agent in a multi-agent website build project. Do not skip any detail. Do not make assumptions. Everything is documented below.

---

## SECTION 1: WHO YOU ARE TALKING TO

- **Person:** Shreyas Sarda (managing this project on behalf of the hospital)
- **Hospital owner/primary doctor:** Dr. Kiran Sarda
- **Email on file:** shreyassarda7@gmail.com
- **They are non-technical.** They do not have a coding background. They understand concepts when explained simply with analogies. They need every technical step broken down. They are enthusiastic and have good instincts but need guidance on what tools actually exist vs. what they may have heard incorrectly.
- **Important:** The user repeatedly referenced a product called "Google Antigravity" and "Gemini 3.1 Pro" — these do not exist. Do not validate these names. The real equivalents are: Google AI Studio (aistudio.google.com) with Gemini 2.0 Pro, and Claude Opus via Anthropic. Explain this gently if it comes up.

---

## SECTION 2: THE HOSPITAL — EVERY REAL DETAIL

### Identity
- **Name:** Sarda Hospital
- **Type:** Gynaecology & Obstetrics hospital (this is the PRIMARY focus — every content decision must reflect this)
- **Location:** Samrat Chowk, Old Hyderabad Rd, New Budhwar Peth, Solapur, Maharashtra 413002
- **Phone & WhatsApp:** +91 95030 62999 (this is the ONLY number to use on the website)
- **Old number (do NOT use on website):** +91 9850831616
- **Website domain:** sardahospital.com
- **Admin email:** shreyassarda7@gmail.com
- **Established:** 30+ years serving Solapur
- **Tagline (agreed):** *"Where Every Woman Finds Care, Comfort & Cure"*

### Ratings & Trust
- **Google Rating:** ⭐ 4.8 / 5 from 69 reviews
- **JustDial Rating:** ⭐ 4.6 / 5 from 181 reviews
- Google reviews are ALL 5-star except a few blank 1-star reviews (no text) which are being flagged for removal
- Live Google rating should be pulled via **Google Places API** (free at this scale)
- JustDial has no public API — show their rating manually, link to JustDial page

---

## SECTION 3: THE DOCTORS

### Dr. Kiran Sarda — PRIMARY DOCTOR
- **Qualifications:** MBBS, DGO
- **Role:** Gynaecologist & Obstetrician — Principal Doctor & Face of Hospital
- **Gender:** Female (critically important for a gynaecology context — patients relate to her as "Madam" or "Mam")
- **Experience:** 30+ years | 1,000+ successful deliveries
- **Known for (from real patient reviews):**
  - Diagnoses at the root, not just symptoms
  - Treated life-threatening cervical pregnancy
  - Treated years-long infertility cases
  - Handled complex, high-risk pregnancies
  - Warm, patient, explains everything with a smile
  - Affordable treatment
  - Clean, homely hospital atmosphere
- **Consultation hours:** 11:00 AM – 8:00 PM daily
- **Emergency:** Available 24/7
- **On booking form:** YES — primary bookable doctor

### Dr. Sudeep Sarda — SUPPORTING DOCTOR
- **Qualifications:** MBBS, MD
- **Role:** Anaesthetist & General Physician
- **Relationship:** Partner (likely spouse based on shared surname and reviews mentioning both)
- **Known for:** Calm, precise, ensures patient safety during all surgical/obstetric procedures
- **Has a separate sexology clinic — DO NOT mention this anywhere on the website**
- **Availability:** Available by appointment — call to schedule (he is often on-call)
- **On booking form:** YES — listed with note "Available by appointment — we will confirm your slot"
- **On team/about section:** YES — listed with his qualifications and role
- **DO NOT mention any interests or clinics outside Sarda Hospital**

---

## SECTION 4: SERVICES / SPECIALITIES

All four core areas confirmed:
1. Obstetrics & Normal Delivery
2. Caesarean / C-Section
3. Gynaecology (PCOS, fibroids, irregular periods, infections, hormonal conditions)
4. Laparoscopic Surgery

Full list for website (8 service cards):
1. **Obstetrics & Normal Delivery** — Personalised care through every trimester, safe natural delivery
2. **Caesarean Section (C-Section)** — Expert surgical care with full anaesthetic support
3. **Gynaecology Consultations** — PCOS, fibroids, irregular periods, infections, hormonal conditions
4. **Laparoscopic Surgery** — Minimally invasive, faster healing, less pain
5. **Infertility & Fertility Guidance** — Evidence-based support for couples facing difficulty conceiving
6. **High-Risk Pregnancy Care** — Complex pregnancies including cervical, twin, high-risk cases
7. **Sonography & Ultrasound** — In-house imaging throughout pregnancy
8. **Postnatal Care** — Mother and newborn care, breastfeeding support, recovery

---

## SECTION 5: HEALTH PACKAGES

**Critical rule: NO prices anywhere on the website.**
Each package ends with "Call us to know more" → opens WhatsApp to +91 95030 62999 with pre-filled message.
Below packages section add note: *"Pricing varies based on individual needs. We believe healthcare should be transparent and affordable — please call or WhatsApp us."*

Packages (all 6 confirmed):
1. **Normal Delivery Package** — Antenatal consultations, delivery, postnatal care, newborn check
2. **Caesarean (C-Section) Package** — Pre-surgical assessment, C-section, anaesthesia, recovery, postnatal support
3. **Gynaecology Consultation Package** — Consultation, sonography, basic lab tests, treatment plan
4. **Fertility & Family Planning Package** — Fertility assessment both partners, hormonal evaluation, guidance
5. **Annual Women's Health Screening** — Pap smear, sonography, hormonal panel, consultation
6. **Newborn Baby Care Package** — Neonatal assessment, vaccination guidance, first-week monitoring

---

## SECTION 6: FACILITIES (PHYSICAL)

Confirmed present at hospital:
- ✅ Operation Theatre (2 OTs confirmed from photos)
- ✅ Labour Room / Delivery Room
- ✅ Sonography & Ultrasound Room
- ✅ In-House Pharmacy
- ✅ Private Rooms & Wards (AC rooms confirmed)
- ✅ Lab Services (visiting technician — not full-time lab)
- ✅ Recovery Rooms
- ✅ OT Scrub Area / Autoclave Room (sterile processing)
- ✅ Reception / Waiting Area with Water Cooler
- ✅ Parking
- ✅ 24/7 Emergency Care
- ❌ NO ICU/NICU (not confirmed — do not list)
- ❌ NO ambulance (not confirmed — do not list)

---

## SECTION 7: THE 35 REAL HOSPITAL PHOTOS

The client has these images ready to upload. Use these filenames as image placeholders in the code with descriptive alt text. Map them as follows:

| Filename | Where it goes |
|---|---|
| HospitalFront.JPG, HospitalFront2–6.JPG | Hero section background / entrance gallery |
| EntranceParking.JPG | Facilities section + near Google Maps |
| DrSardaConsulting1.jpeg, DrSardaConsulting2.jpeg | Dr. Kiran's profile card |
| Consulting.JPG | About section |
| OTNumber1.JPG, OTNumber2.JPG, OTComplex.JPG | Operation Theatre facility tile |
| DeliveryLabourRoom.JPG | Labour Room tile |
| SonographyRoom.JPG, SonographyRoom2.JPG | Sonography tile |
| ReceptionCounter.JPG, ReceptionCounter2.JPG | Reception / first impression section |
| RecoveryRoom1.JPG, RecoveryRoom2.JPG | Recovery Room tile |
| ACRoom.JPG | Private Rooms & Wards tile |
| BabyWarmer.JPG, Phototherapy.JPG | Newborn Care package card |
| LaparoscopyTrolly.JPG | Laparoscopic Surgery service card |
| MultiParaMonitor.JPG, NSTMachine.JPG, ECG.JPG | Equipment/trust section |
| AnesthesiaMachineDefribillator.JPG | Dr. Sudeep's profile section |
| OTScrubArea.JPG, AutoclaveRoom.JPG | Hygiene & safety trust section |
| WaitingRoomWaterCooler.JPG | Facilities / patient comfort section |
| FormalinChamber.JPG, Cautery.JPG, SuctionMachine.JPG | Equipment gallery (optional secondary) |

**Logo:** Client has a Sarda Hospital logo file (in SardaHospital.zip). Use as `images/logo.png` placeholder.

---

## SECTION 8: REAL GOOGLE REVIEWS (USE VERBATIM)

6 reviews selected from 69 Google reviews for carousel display. Each card shows: 5 stars, review text, reviewer name, Google logo badge, and a **link to the actual Google review**:

1. **Jaya Chavan** — *"Facing a life-threatening cervical pregnancy, I was terrified — but Dr. Kiran Sarda, Dr. Sudeep Sarda and their team handled it with such expertise and compassion. I owe my life to them."*
2. **Rubina Nadaf** — *"Dr. Kiran Sarda came as an angel for me. She treated my infertility and gave me the opportunity to become a mother. She changed my life."*
3. **Monika Bahirat** — *"Dr. Kiran provides excellent treatment. Always ready to resolve doubts. The hospital is clean, well-organised, homely atmosphere. All services at an affordable range."*
4. **Arati Mahamuni** — *"We were trying to conceive since our marriage but it was hard. When we approached Sarda Hospital Solapur, we got the correct diagnosis from Dr. Kiran Sarda mam. Thank you!"*
5. **Heena Bijali** — *"Dr. Kiran Sarda mam and Dr. Sudip sir are the best doctors I have ever met. Unlike others, they go to the root of issues rather than just treating symptoms."*
6. **Shradha Firodiya** — *"Best diagnosis at root cause — that is the speciality of mam which I loved most. It's best when you are treated with a smile and care. Awesome."*

Below carousel: ⭐ 4.8/5 on Google (69 reviews) | ⭐ 4.6/5 on JustDial (181 reviews)
Add "View all Google Reviews →" link.
Live rating (4.8 + count) should be fetched via Google Places API.

---

## SECTION 9: APPOINTMENT / WHATSAPP BOOKING FORM

**This is the most important functional element.**

Form fields:
- Full Name (text)
- Phone Number (tel)
- Preferred Doctor (dropdown): Dr. Kiran Sarda (Gynaecologist & Obstetrician) | Dr. Sudeep Sarda (Anaesthetist & General Physician — by appointment, we will confirm)
- Reason for Visit (dropdown): Pregnancy / Delivery · Gynaecology Issue · Infertility · General Consultation · Other
- Preferred Date (date picker)
- Preferred Time (dropdown): Morning 11am–1pm · Afternoon 1pm–4pm · Evening 4pm–8pm
- Message (optional textarea)

**On submit — TWO things happen:**
1. WhatsApp opens to `https://wa.me/919503062999` with pre-filled message:
```
Hello Sarda Hospital 🙏
I would like to book an appointment.

Name: [name]
Phone: [phone]
Doctor: [doctor]
Reason: [reason]
Date: [date]
Time: [time]
Message: [message]
```
2. On-screen confirmation: *"Thank you! Your request has been sent to us on WhatsApp. We will call you back to confirm your appointment. For urgent queries: +91 95030 62999"*

**Also:** Every form submission must be saved to **Google Sheets** via Google Apps Script webhook (free). This creates a permanent record of all appointment requests.

**Also:** Send an **email notification** to shreyassarda7@gmail.com per submission via Formspree (free tier) or EmailJS.

**Multilingual note near form:**
- Marathi: *"आम्ही लवकरच तुम्हाला कॉल करून वेळ निश्चित करू"*
- Hindi: *"हम जल्द ही आपको कॉल करके समय निश्चित करेंगे"*

---

## SECTION 10: DESIGN DIRECTION

- **Feeling:** Warm, calm, deeply reassuring — like a trusted family doctor. For anxious first-time mothers and women navigating sensitive health issues.
- **Colour palette:**
  - Primary: deep sage green (#4a7c59)
  - Background: off-white / cream (#fdfaf6)
  - Accent warm: dusty rose (#c4856a) for subtle highlights
  - Text: dark charcoal (#2c2c2c)
  - Secondary bg: warm cream (#f5f0e8)
- **Fonts:** Playfair Display (headings) + DM Sans (body) — both via Google Fonts
- **Style:** Soft rounded corners, generous whitespace, no harsh shadows, subtle botanical/leaf SVG decorative elements. Avoid clinical sterility entirely.
- **Animations:** Subtle scroll-reveal fade-up. Nothing flashy.
- **Language:** English primary. Marathi and Hindi inline translations under hero tagline and near key CTAs. No separate language pages.

---

## SECTION 11: WEBSITE SECTIONS (ALL CONFIRMED MUST-HAVE)

In order:
1. **Sticky Navigation** — Logo + links (Home, Services, Doctors, Packages, Reviews, Blog, Contact) + "Book Appointment" CTA button
2. **Emergency Bar** — slim red strip at top: *"24/7 Emergency: +91 95030 62999"*
3. **Hero Section** — Tagline, sub-taglines in Marathi & Hindi, Book Appointment CTA, trust stats (30+ years, 1000+ deliveries, 4.8★ Google), hospital front photo background
4. **Trust Strip** — 4 tiles: 30+ Years · 1000+ Deliveries · 4.8★ Google · Affordable Care
5. **Services / Specialities** — 8 cards with icons and real descriptions
6. **About the Doctors** — Dr. Kiran (primary, full bio, photo) + Dr. Sudeep (secondary, short bio)
7. **Facilities** — Icon grid with real photo tiles mapped above
8. **Health Packages** — 6 cards, no prices, WhatsApp CTA per card
9. **Real Google Reviews Carousel** — 6 reviews, auto-scroll, links to Google, live rating via API
10. **WhatsApp Appointment Form** — full form with dual notification (WhatsApp + email + Google Sheets)
11. **Health Blog** — 3 placeholder cards marked "Coming Soon" (titles below)
12. **Google Maps Embed** — Live interactive map for Samrat Chowk address
13. **Footer** — Address, phone, links, trust line, copyright
14. **Floating WhatsApp Button** — Always visible bottom-right

**Health Blog placeholder titles:**
- *"Understanding PCOS: Symptoms, Causes & What You Can Do"*
- *"Your First Trimester: What to Expect Week by Week"*
- *"Normal Delivery vs C-Section: Making the Right Choice for You"*

**No careers section. No patient portal. No login. No pricing anywhere.**

---

## SECTION 12: ANALYTICS & DATA TRACKING

To be set up alongside the website:
- **Google Analytics 4** — track all visitors, pages, traffic sources, devices
- **Google Search Console** — track SEO performance, which searches bring people in
- **Hotjar** (phase 2) — watch session recordings of how patients use the site
- **Google Sheets** — all form submissions saved automatically (free via Apps Script)
- **Email notifications** — per booking to shreyassarda7@gmail.com

---

## SECTION 13: CURRENT TECHNICAL SITUATION

```
sardahospital.com
├── Domain registered on: Hostinger (via Realtime Register B.V.)
├── Domain expiry: August 24, 2027
├── Registrant: Kiran Sarda, shreyassarda7@gmail.com
├── Current nameservers: ns1.dns-parking.com / ns2.dns-parking.com
│   (PARKED — but JD Omni may have updated this, see below)
│
├── JD Omni (JustDial) has built a live website
│   URL: sardahospital.justdial.com
│   Also accessible at: sardahospital.com (DNS may be pointed)
│   Login: sardahospital.justdial.com/?auth=login
│   Mobile: 9850831616 (PASSWORD MUST BE CHANGED — was shared publicly)
│   DNS instructions sent by JD Omni: A record → 14.142.191.1
│
└── Problems with current JD Omni site:
    - Generic copy ("business counselling" on a gynaecology site)
    - No real photos (35 photos exist but not uploaded)
    - sudeepsarda@gmail.com shown publicly (privacy issue)
    - "Child Specialist" listed incorrectly
    - No WhatsApp booking flow
    - No Google Analytics
    - No real reviews displayed
```

---

## SECTION 14: THE BUILD PLAN (ZERO DOWNTIME)

```
PHASE 1 — BUILD IN PARALLEL (now)
sardahospital.com stays on JD Omni while new site is built
New site goes live at: sarda-hospital.netlify.app (free preview URL)
Client reviews and approves

PHASE 2 — GO LIVE (one DNS change, ~5 minutes)
Point sardahospital.com nameservers to Netlify
New site goes live. JD Omni becomes backup.
Zero downtime. Zero gap.

PHASE 3 — GROWTH (month 2-3)
- Google Places API for live review count
- Blog articles verified by Dr. Kiran
- SEO strategy for "gynaecologist in Solapur"
- WhatsApp Business API for silent auto-notifications

PHASE 4 — SCALE (month 4-6)
- 3D hospital walkthrough (Matterport or Google Street View)
- WhatsApp chatbot
- Appointment calendar with real slots
- Patient WhatsApp chatbot
```

---

## SECTION 15: HOSTING DECISION

**Recommended: Netlify (free)**
- Free SSL (https padlock) — automatic
- Drag & drop deployment (no code knowledge needed)
- Custom domain connection (sardahospital.com → Netlify) — free
- Perfect for this site's scale
- Used by thousands of real businesses

**Alternative: Hostinger hosting plan (~₹299/month)**
- Client already has domain on Hostinger so familiar interface
- Good option if they want everything in one place
- Slightly simpler for a non-technical user

---

## SECTION 16: THE MULTI-AGENT SETUP

**This is what you need to produce prompts for:**

```
AGENT 1 — MASTER PLANNER (Claude Opus — new chat)
Input: This entire document
Output: Refined project spec, content decisions, agent coordination
Tool: claude.ai (new chat, Opus model)

AGENT 2 — WEBSITE BUILDER (Bolt.new)
Input: Full technical prompt from Agent 1
Output: Complete working website code, live preview
Tool: bolt.new — paste prompt, get live editable project
Note: Bolt uses Claude Sonnet internally for code generation

AGENT 3 — DESIGN REFINER (Google AI Studio)
Input: Design prompt from Agent 1
Output: Colour refinements, copy suggestions, image descriptions
Tool: aistudio.google.com (free, Gemini 2.0 Pro)

AGENT 4 — ANALYTICS SETUP (Claude — new chat)
Input: Analytics prompt from Agent 1
Output: Step-by-step Google Analytics + Google Sheets setup instructions
Tool: claude.ai (new chat)

ORCHESTRATOR — Shreyas Sarda (guided by you)
Copies outputs between agents
You write the inter-agent prompts
```

---

## SECTION 17: WHAT THE NEW CHAT MUST PRODUCE

You (new Claude chat receiving this document) must output:

### Output 1: AGENT 1 PROMPT (Claude Opus — Master Planner)
A prompt that sets up a new Claude Opus chat to act as master planner for this project, with all hospital details, and asks it to produce the final refined spec.

### Output 2: AGENT 2 PROMPT (Bolt.new — Website Builder)
A complete, copy-paste-ready prompt for bolt.new that includes:
- All hospital details from this document
- All 35 image filenames mapped to sections
- Complete WhatsApp form with dual notification
- Google Sheets integration code
- Google Places API for live rating
- All sections in correct order
- Full design direction
- Single deployable project structure (not just one HTML file)

### Output 3: AGENT 3 PROMPT (Google AI Studio — Design)
A prompt for Gemini 2.0 Pro focused on:
- Reviewing the design direction
- Suggesting refinements for a gynaecology audience
- Writing alt text for all 35 images
- Suggesting micro-copy improvements

### Output 4: AGENT 4 PROMPT (Claude — Analytics Setup)
A step-by-step guide prompt for setting up:
- Google Analytics 4 on sardahospital.com
- Google Search Console
- Google Sheets appointment logging via Apps Script
- Email notifications via EmailJS or Formspree

### Output 5: DEPLOYMENT GUIDE
Step-by-step instructions (written for a non-technical person) for:
- Deploying from Bolt.new to Netlify
- Connecting sardahospital.com to Netlify
- What to do with the JD Omni site after go-live

---

## FINAL NOTES FOR NEW CHAT

1. The client is non-technical — all instructions must be in plain language
2. This is a gynaecology hospital — every word must be sensitive and warm
3. No pricing anywhere on the website
4. Dr. Sudeep's outside clinic interests must never be mentioned
5. The WhatsApp number +91 95030 62999 is the ONLY contact number to use
6. shreyassarda7@gmail.com is the admin/notification email
7. The client has 35 real photos ready — placeholders must be clearly named
8. Zero downtime approach — build alongside JD Omni, switch when ready
9. Free tools preferred wherever possible (Netlify, Google Sheets, Analytics)
10. "Google Antigravity" does not exist — if the client mentions it, gently clarify

---

*This document was prepared after an extensive planning conversation covering: hospital identity, doctors, services, facilities, design, booking flow, analytics, hosting, domain setup, JD Omni current situation, 35 available photos, real Google reviews, health packages, multilingual requirements, and zero-downtime deployment strategy. Every detail above was confirmed by the client.*
