const fs = require('fs');
let css = fs.readFileSync('css/styles.css', 'utf8');

const bioCss = `
/* ---------- Doctor Bio Toggle ---------- */
.doc-card__toggle-btn {
  background: none;
  border: none;
  color: var(--clr-primary);
  font-family: var(--ff-body);
  font-weight: var(--fw-bold);
  font-size: var(--fs-small);
  padding: 0;
  margin-top: var(--sp-2);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  transition: color var(--transition-fast);
}

.doc-card__toggle-btn:hover {
  color: var(--clr-primary-dark);
  text-decoration: underline;
}

.doc-card__bio {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease-out, margin-top 0.4s ease-out, opacity 0.3s ease-out;
  opacity: 0;
  margin-top: 0;
}

.doc-card__bio p {
  font-size: var(--fs-small);
  line-height: var(--lh-body);
  color: var(--clr-text-light);
  margin-bottom: var(--sp-3);
}

.doc-card__bio p:last-child {
  margin-bottom: 0;
}

.doc-card__bio.expanded {
  max-height: 500px; /* arbitrary large max-height for transition */
  opacity: 1;
  margin-top: var(--sp-4);
}
`;

if (!css.includes('.doc-card__toggle-btn')) {
    css += bioCss;
    fs.writeFileSync('css/styles.css', css, 'utf8');
    console.log("CSS appended successfully.");
} else {
    console.log("CSS already exists.");
}
