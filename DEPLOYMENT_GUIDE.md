# Sarda Hospital — Deployment Guide
*Written for non-technical users. Follow each step in order.*

---

## Step 1: Compress Your Images ✅ DONE

Images compressed to WebP format in `Images/WebP/` (~7 MB total, down from ~120 MB). All code references updated.

---

## Step 2: Set Up Google Analytics 4

This lets you see how many people visit, which sections they view, and how long they stay.

1. Go to **[analytics.google.com](https://analytics.google.com)**
2. Sign in with `sardahospital2000@gmail.com`
3. Click **"Start measuring"**
4. Account name: `Sarda Hospital`
5. Property name: `sardahospital.com`
6. Select **India** and **INR**
7. Choose **Healthcare** industry
8. Click **Create** → Accept terms
9. Choose **Web** as platform
10. Enter `sardahospital.com` as website URL
11. Stream name: `Main Website`
12. Click **Create stream**
13. Copy the **Measurement ID** (starts with `G-`)
14. Open `index.html` in a text editor
15. Find this line near the top:
    ```
    <!-- <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
    ```
16. Remove the `<!--` and `-->` around the two script lines
17. Replace `G-XXXXXXXXXX` with your Measurement ID (in both places)
18. Save the file

**The custom analytics code is already built in** — it automatically tracks:
- Which sections visitors look at and for how long
- Scroll depth (25%, 50%, 75%, 100%)
- Every button/link click (with section context)
- Phone and WhatsApp click tracking
- Form field interactions
- Session duration

---

## Step 3: Set Up Google Search Console

This shows which Google searches bring people to your website.

1. Go to **[search.google.com/search-console](https://search.google.com/search-console)**
2. Sign in with `sardahospital2000@gmail.com`
3. Click **"Add property"**
4. Choose **"URL prefix"**
5. Enter `https://sardahospital.com`
6. Verify ownership (the easiest way: use the Google Analytics method — it verifies automatically if GA4 is already set up)

---

## Step 4: Set Up Google Sheets Appointment Logging

This saves every appointment form submission to a Google Sheet.

1. Go to **[sheets.google.com](https://sheets.google.com)** → Create new spreadsheet
2. Name it: `Sarda Hospital Appointments`
3. In Row 1, add headers: `Timestamp | Name | Phone | Doctor | Reason | Date | Time | Message`
4. Go to **Extensions → Apps Script**
5. Delete all existing code and paste this:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([
    data.timestamp,
    data.name,
    data.phone,
    data.doctor,
    data.reason,
    data.date,
    data.time,
    data.message
  ]);
  return ContentService.createTextOutput("OK");
}
```

6. Click **Deploy → New deployment**
7. Type: **Web app**
8. Execute as: **Me**
9. Who has access: **Anyone**
10. Click **Deploy** → **Authorize** → Allow
11. Copy the **Web app URL**
12. Open `js/main.js` and find:
    ```
    const GOOGLE_SHEETS_URL = '';
    ```
13. Paste your URL between the quotes
14. Save

---

## Step 5: Deploy to Netlify

1. Go to **[app.netlify.com](https://app.netlify.com)**
2. Sign up with `sardahospital2000@gmail.com` (use Google sign-in)
3. You'll see a dotted box saying **"Want to deploy a new site without connecting to Git? Drag and drop your site output folder here"**
4. Open your `sardahospital_dot_com` folder in File Explorer
5. Select ALL files and folders (`index.html`, `css/`, `js/`, `Images/`)
6. Drag them into the Netlify box
7. Netlify will deploy in ~30 seconds
8. You'll get a preview URL like `random-name.netlify.app`
9. **Test everything** on this URL before connecting your domain

---

## Step 6: Connect sardahospital.com to Netlify

1. In Netlify dashboard → **Domain settings**
2. Click **"Add custom domain"**
3. Enter `sardahospital.com` → Click **Verify**
4. Netlify will tell you to update your DNS. You have two options:

### Option A: Point Nameservers (Recommended)
1. Log into **Hostinger** (where your domain is registered)
2. Go to **Domain → DNS/Nameservers**
3. Change nameservers to:
   - `dns1.p08.nsone.net`
   - `dns2.p08.nsone.net`
   - `dns3.p08.nsone.net`
   - `dns4.p08.nsone.net`
   *(Netlify will show you the exact ones)*
4. Save → Wait 10-30 minutes for DNS to update

### Option B: A Record (If you want to keep Hostinger DNS)
1. In Hostinger DNS settings, add an A record:
   - Name: `@`
   - Value: `75.2.60.5` *(Netlify's load balancer IP)*
2. Add a CNAME record:
   - Name: `www`
   - Value: `your-site-name.netlify.app`

5. Back in Netlify → Click **"Provision SSL certificate"** (automatic, free)
6. ✅ Your site is now live at `sardahospital.com`!

---

## Step 7: What to Do with JD Omni

After your new site is live and working:
1. Keep the JD Omni site as a backup (it won't affect anything)
2. Make sure the JustDial listing links to `sardahospital.com`
3. Update Dr. Sudeep's email if it's still showing publicly on JustDial
4. Change the JD Omni password (it was shared publicly before)

---

## Step 8: Fix the Google Reviews Link

1. Go to Google Maps
2. Search "Sarda Hospital Solapur"
3. Click on "Reviews"
4. Copy the URL from your browser's address bar
5. In `index.html`, find the line with `ChIJxxxxxxxxxxxxxxx`
6. Replace the entire `href` URL with the one you copied
