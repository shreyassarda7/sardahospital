const fs = require('fs');

const toggleJs = `
    // ===== DOCTOR BIO TOGGLE =====
    const toggleBtns = document.querySelectorAll('.doc-card__toggle-btn');
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const isExpanded = btn.getAttribute('aria-expanded') === 'true';
            const bioId = btn.getAttribute('aria-controls');
            const bio = document.getElementById(bioId);
            
            if (isExpanded) {
                btn.setAttribute('aria-expanded', 'false');
                btn.textContent = 'More Details ▼';
                if (bio) bio.classList.remove('expanded');
            } else {
                btn.setAttribute('aria-expanded', 'true');
                btn.textContent = 'Less Details ▲';
                if (bio) bio.classList.add('expanded');
            }
        });
    });
`;

let js = fs.readFileSync('js/main.js', 'utf8');

if (!js.includes('DOCTOR BIO TOGGLE')) {
    // Replace the very last '});' with our code + '});'
    const lastIndex = js.lastIndexOf('});');
    if (lastIndex !== -1) {
        js = js.substring(0, lastIndex) + toggleJs + '\n});\n';
        fs.writeFileSync('js/main.js', js, 'utf8');
        console.log("Appended missing logic successfully.");
    } else {
        console.log("Could not find trailing });");
    }
} else {
    console.log("Already appended.");
}
