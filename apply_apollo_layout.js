const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
let css = fs.readFileSync('css/styles.css', 'utf8');

// ========== HTML REPLACEMENT ==========

const oldDoctorsHtml = `<div class="doctors__grid">
          <div class="doctor-card reveal">
            <div class="doctor-card__image">
              <img src="Images/Dr. Kiran Portrait.jpg" alt="Dr. Kiran Sarda — Gynaecologist and Obstetrician at Sarda Hospital, Solapur" loading="lazy" decoding="async">
            </div>
            <div class="doctor-card__content">
              <h3 class="doctor-card__name">Dr. Kiran Sarda</h3>
              <p class="doctor-card__qualification">MBBS, DGO</p>
              <p class="doctor-card__role">Gynaecologist & Obstetrician — Principal Doctor</p>
              <p class="doctor-card__bio">With over 30 years of experience and 5000+ successful deliveries, Dr. Kiran
                Sarda is one of Solapur's most trusted gynaecologists. Known for her root-cause approach to diagnosis,
                she has treated life-threatening cervical pregnancies, years-long infertility cases, and complex
                high-risk pregnancies — always with warmth and a reassuring smile.</p>
              <p class="doctor-card__bio">Beyond the hospital, Dr. Kiran is passionate about women's health education,
                regularly conducting educational lectures for young women in schools and colleges across Solapur.</p>
              <div class="doctor-card__highlights">
                <span class="doctor-card__highlight">30+ Years Experience</span>
                <span class="doctor-card__highlight">5000+ Deliveries</span>
                <span class="doctor-card__highlight">Root-Cause Diagnosis</span>
                <span class="doctor-card__highlight">Health Educator</span>
              </div>
              <p class="doctor-card__hours">🕐 Consultation: 11:00 AM – 8:00 PM daily | Emergency: 24/7</p>
            </div>
          </div>
          <div class="doctor-card reveal">
            <div class="doctor-card__image">
              <img src="Images/Dr. Sudeep Portrait.png" alt="Dr. Sudeep Sarda — Anaesthetist and General Physician at Sarda Hospital, Solapur" loading="lazy" decoding="async">
            </div>
            <div class="doctor-card__content">
              <h3 class="doctor-card__name">Dr. Sudeep Sarda</h3>
              <p class="doctor-card__qualification">MBBS, MD</p>
              <p class="doctor-card__role">Anaesthetist & General Physician</p>
              <p class="doctor-card__bio">With 35+ years of experience as a lead anaesthetist, Dr. Sudeep Sarda has safely managed anaesthesia for over 25,000 surgical procedures. His calm precision and unwavering dedication ensure the highest standards of patient safety during all surgical and obstetric care.</p>
              <div class="doctor-card__highlights">
                <span class="doctor-card__highlight">35+ Years Experience</span>
                <span class="doctor-card__highlight">25,000+ Operatives</span>
                <span class="doctor-card__highlight">Lead Anaesthetist</span>
              </div>
              <p class="doctor-card__hours">🕐 Consultation: 11:00 AM – 8:00 PM daily | Emergency: 24/7</p>
            </div>
          </div>
        </div>`;

const newDoctorsHtml = `<div class="doctors__list">
          <!-- Dr. Kiran -->
          <div class="doc-card reveal">
            <div class="doc-card__left">
              <div class="doc-card__image">
                <img src="Images/Dr. Kiran Portrait.jpg" alt="Dr. Kiran Sarda" loading="lazy" decoding="async">
              </div>
              <a href="tel:+919503062999" class="btn btn--dark doc-card__call">📞 CALL</a>
            </div>
            <div class="doc-card__middle">
              <h3 class="doc-card__name">Dr. Kiran Sarda</h3>
              <p class="doc-card__speciality">Gynaecologist & Obstetrician</p>
              <div class="doc-card__details">
                <p><strong>30+ Years</strong> experience</p>
                <p>M.B.B.S, D.G.O (Principal Doctor)</p>
                <p><strong>Expertise:</strong> Root-cause diagnosis, High-risk pregnancies, Infertility</p>
              </div>
              <div class="doc-card__meta">
                <p><span>🌐</span> English • Marathi • Hindi</p>
                <p><span>🕐</span> 11:00 AM – 8:00 PM • Mon - Sat</p>
                <p><span>📍</span> Sarda Hospital, Solapur</p>
              </div>
            </div>
            <div class="doc-card__right">
              <a href="https://wa.me/919503062999" target="_blank" rel="noopener" class="btn btn--accent doc-card__book">BOOK APPOINTMENT</a>
            </div>
          </div>

          <!-- Dr. Sudeep -->
          <div class="doc-card reveal">
            <div class="doc-card__left">
              <div class="doc-card__image">
                <img src="Images/Dr. Sudeep Portrait.png" alt="Dr. Sudeep Sarda" loading="lazy" decoding="async">
              </div>
              <a href="tel:+919503062999" class="btn btn--dark doc-card__call">📞 CALL</a>
            </div>
            <div class="doc-card__middle">
              <h3 class="doc-card__name">Dr. Sudeep Sarda</h3>
              <p class="doc-card__speciality">Anaesthetist & General Physician</p>
              <div class="doc-card__details">
                <p><strong>35+ Years</strong> experience</p>
                <p>M.B.B.S, M.D (Anaesthesia)</p>
                <p><strong>Expertise:</strong> Surgical & Obstetric Anaesthesia, Critical Care</p>
              </div>
              <div class="doc-card__meta">
                <p><span>🌐</span> English • Marathi • Hindi</p>
                <p><span>🕐</span> By Appointment</p>
                <p><span>📍</span> Sarda Hospital, Solapur</p>
              </div>
            </div>
            <div class="doc-card__right">
              <a href="https://wa.me/919503062999" target="_blank" rel="noopener" class="btn btn--accent doc-card__book">BOOK APPOINTMENT</a>
            </div>
          </div>
        </div>`;

if (html.includes(oldDoctorsHtml)) {
    html = html.replace(oldDoctorsHtml, newDoctorsHtml);
} else {
    // Regex fallback
    html = html.replace(/<div class="doctors__grid">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/, newDoctorsHtml);
}

fs.writeFileSync('index.html', html);


// ========== CSS REPLACEMENT ==========

const oldCssRegex = /\/\* ---------- Doctors Section ---------- \*\/[\s\S]*?\/\* ---------- Facilities Section ---------- \*\//;

const newCss = `/* ---------- Doctors Section ---------- */
.doctors {
  padding: var(--sp-10) 0;
  background: var(--clr-bg-warm);
}

.doctors__list {
  display: flex;
  flex-direction: column;
  gap: var(--sp-8);
}

.doc-card {
  display: flex;
  flex-direction: row;
  background: var(--clr-white);
  border-radius: var(--radius-xl);
  padding: var(--sp-5);
  gap: var(--sp-6);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  border: 1px solid var(--clr-border);
  align-items: center;
}

.doc-card__left {
  display: flex;
  flex-direction: column;
  width: 220px;
  flex-shrink: 0;
  gap: var(--sp-3);
}

.doc-card__image {
  width: 100%;
  aspect-ratio: 1;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--clr-bg-warm);
}

.doc-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
}

.doc-card__call {
  width: 100%;
  text-align: center;
  justify-content: center;
  background: #002c4b; /* deep blue */
  color: white;
  border-radius: 30px;
  padding: var(--sp-2);
}

.doc-card__middle {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: var(--sp-2);
}

.doc-card__name {
  font-family: var(--ff-heading);
  font-size: var(--fs-h3);
  font-weight: var(--fw-bold);
  color: var(--clr-text);
  margin-bottom: 0;
}

.doc-card__speciality {
  font-size: var(--fs-body);
  color: var(--clr-text);
  font-weight: var(--fw-bold);
  margin-bottom: var(--sp-2);
}

.doc-card__details {
  font-size: var(--fs-small);
  color: var(--clr-text-light);
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: var(--sp-3);
  line-height: 1.4;
}

.doc-card__details strong {
  color: var(--clr-text);
}

.doc-card__meta {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: var(--sp-5);
  row-gap: var(--sp-2);
  font-size: var(--fs-small);
  color: var(--clr-text-muted);
}

.doc-card__meta p {
  display: flex;
  align-items: center;
  gap: var(--sp-1);
}

.doc-card__right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  flex-shrink: 0;
  padding-left: var(--sp-4);
  border-left: 1px solid var(--clr-border);
}

.doc-card__book {
  width: 100%;
  text-align: center;
  justify-content: center;
  border-radius: 30px;
  padding: var(--sp-3);
  font-weight: var(--fw-bold);
  box-shadow: 0 4px 10px rgba(230, 126, 34, 0.2);
}

@media (max-width: 900px) {
  .doc-card {
    flex-direction: column;
    align-items: flex-start;
    padding: var(--sp-4);
    gap: var(--sp-4);
  }

  .doc-card__left {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }

  .doc-card__right {
    width: 100%;
    border-left: none;
    padding-left: 0;
    border-top: 1px solid var(--clr-border);
    padding-top: var(--sp-4);
  }
}

/* ---------- Facilities Section ---------- */
`;

css = css.replace(oldCssRegex, newCss);

fs.writeFileSync('css/styles.css', css);
console.log('Layout replaced');
