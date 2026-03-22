const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
let css = fs.readFileSync('css/styles.css', 'utf8');

// ========== 1. HTML FIX: FACILITIES WRAPPER ==========
// Change facilities__grid to facilities__wrapper to prevent CSS Grid making it columns
html = html.replace(
    '<div class="facilities__grid reveal-stagger">',
    '<div class="facilities__wrapper reveal-stagger">'
);

// ========== 2. CSS FIX: DOCTORS SIZING ==========
// Replace the current doctor image and card styling
const oldDoctorCss = `.doctor-card {
  display: flex;
  flex-direction: column;
}

.doctor-card__image {
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
}

.doctor-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
}`;

// Make both images exactly same size (contain), ensure text boxes expand equally
const newDoctorCss = `.doctor-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.doctor-card__content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.doctor-card__hours {
  margin-top: auto;
}

.doctor-card__image {
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
  background-color: var(--clr-bg-warm);
}

.doctor-card__image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
}

/* Fix Facilities Wrapper so it is fully width */
.facilities__wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--sp-6);
  margin-top: var(--sp-8);
}`;

css = css.replace(oldDoctorCss, newDoctorCss);

// Fallback in case oldDoctorCss matching fails because of whitespace / line endings
if (!css.includes('.doctor-card__hours {\n  margin-top: auto;\n}')) {
    console.log("Replacing doctor css with Regex fallback");
    css = css.replace(/\.doctor-card\s*\{\s*display:\s*flex;\s*flex-direction:\s*column;\s*\}\s*\.doctor-card__image\s*\{[^\}]+\}\s*\.doctor-card__image\s*img\s*\{[^\}]+\}/, newDoctorCss);
}

fs.writeFileSync('index.html', html);
fs.writeFileSync('css/styles.css', css);
console.log('Fixes applied successfully.');
