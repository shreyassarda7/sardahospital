/* ============================================
   SARDA HOSPITAL — Main JavaScript
   Navigation, Form, Carousel, Slideshow,
   Scroll Animations
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ===== MOBILE NAVIGATION =====
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    if (navToggle && navLinks) {
        const closeMobileNav = () => {
            navToggle.classList.remove('open');
            navLinks.classList.remove('open');
            document.body.classList.remove('nav-open');
            document.body.style.overflow = '';
        };

        navToggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('open');
            navToggle.classList.toggle('open', isOpen);
            document.body.classList.toggle('nav-open', isOpen);
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        // Close menu on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMobileNav);
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 1024 && navLinks.classList.contains('open')) {
                closeMobileNav();
            }
        });
    }

    // ===== NAVBAR SCROLL EFFECT =====
    const navbar = document.getElementById('navbar');
    const handleScroll = () => {
        if (navbar) {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        }
        updateActiveNav();
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // ===== ACTIVE NAV LINK HIGHLIGHTING =====
    function updateActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 150;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            const link = navLinks?.querySelector(`a[href="#${id}"]`);

            if (link) {
                if (scrollPos >= top && scrollPos < top + height) {
                    navLinks.querySelectorAll('a').forEach(a => a.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        });
    }

    // ===== HOSPITAL SLIDESHOW =====
    const slideshowWrapper = document.getElementById('hero-carousel');
    const slides = slideshowWrapper ? slideshowWrapper.querySelectorAll('.slideshow__slide') : [];
    const dotsContainer = document.getElementById('hero-carousel-dots');
    let currentSlide = 0;
    let slideshowTimer;

    if (slides.length > 0 && dotsContainer && slideshowWrapper) {
        // Create dots
        slides.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.classList.add('slideshow__dot');
            if (i === 0) dot.classList.add('active');
            dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        });

        function goToSlide(index) {
            slides[currentSlide].classList.remove('active');
            dotsContainer.children[currentSlide].classList.remove('active');
            currentSlide = index;
            slides[currentSlide].classList.add('active');
            dotsContainer.children[currentSlide].classList.add('active');
        }

        function nextSlide() {
            goToSlide((currentSlide + 1) % slides.length);
        }

        function startSlideshow() {
            clearInterval(slideshowTimer);
            slideshowTimer = setInterval(nextSlide, 4200);
        }

        function stopSlideshow() {
            clearInterval(slideshowTimer);
        }

        startSlideshow();

        // Pause on hover
        if (window.matchMedia('(hover: hover)').matches) {
            slideshowWrapper.addEventListener('mouseenter', stopSlideshow);
            slideshowWrapper.addEventListener('mouseleave', startSlideshow);
        }
    }

    // ===== ROTATING MULTILINGUAL COPY =====
    function initRotatingCopy(element) {
        const lines = [
            { text: element.dataset.lineEn?.trim(), lang: 'en' },
            { text: element.dataset.lineMr?.trim(), lang: 'mr' },
            { text: element.dataset.lineHi?.trim(), lang: 'hi' }
        ].filter(line => line.text);

        if (lines.length === 0) return;

        const rotationDelay = Number.parseInt(element.dataset.rotationInterval || '3200', 10);
        const fadeDelay = 180;
        const wrapInQuotes = element.dataset.wrapQuotes === 'true';
        let currentIndex = 0;

        const applyLine = index => {
            const nextLine = lines[index];
            if (!nextLine) return;

            element.classList.add('is-switching');

            window.setTimeout(() => {
                element.textContent = wrapInQuotes ? `"${nextLine.text}"` : nextLine.text;
                element.lang = nextLine.lang;
                element.classList.remove('is-switching');
            }, fadeDelay);
        };

        element.textContent = wrapInQuotes ? `"${lines[0].text}"` : lines[0].text;
        element.lang = lines[0].lang;

        if (lines.length > 1) {
            window.setInterval(() => {
                currentIndex = (currentIndex + 1) % lines.length;
                applyLine(currentIndex);
            }, Number.isFinite(rotationDelay) ? rotationDelay : 3200);
        }
    }

    document.querySelectorAll('[data-rotation-interval][data-line-en]').forEach(initRotatingCopy);

    // ===== REVIEWS CAROUSEL =====
    const track = document.getElementById('reviews-track');
    const prevBtn = document.getElementById('review-prev');
    const nextBtn = document.getElementById('review-next');
    const reviewDotsContainer = document.getElementById('review-dots');
    const reviewCards = document.querySelectorAll('.review-card');
    let currentReview = 0;
    let reviewTimer;

    if (track && reviewCards.length > 0 && reviewDotsContainer) {
        // Create dots
        reviewCards.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.classList.add('reviews__dot');
            if (i === 0) dot.classList.add('active');
            dot.setAttribute('aria-label', `Go to review ${i + 1}`);
            dot.addEventListener('click', () => goToReview(i));
            reviewDotsContainer.appendChild(dot);
        });

        function goToReview(index) {
            reviewDotsContainer.children[currentReview]?.classList.remove('active');
            currentReview = index;
            track.style.transform = `translateX(-${currentReview * 100}%)`;
            reviewDotsContainer.children[currentReview]?.classList.add('active');
        }

        function nextReview() {
            goToReview((currentReview + 1) % reviewCards.length);
        }

        function prevReview() {
            goToReview((currentReview - 1 + reviewCards.length) % reviewCards.length);
        }

        if (prevBtn) prevBtn.addEventListener('click', () => { prevReview(); resetReviewTimer(); });
        if (nextBtn) nextBtn.addEventListener('click', () => { nextReview(); resetReviewTimer(); });

        // Auto-advance every 5 seconds
        reviewTimer = setInterval(nextReview, 5000);

        function resetReviewTimer() {
            clearInterval(reviewTimer);
            reviewTimer = setInterval(nextReview, 5000);
        }

        // Pause on hover
        const carousel = document.getElementById('reviews-carousel');
        if (carousel) {
            carousel.addEventListener('mouseenter', () => clearInterval(reviewTimer));
            carousel.addEventListener('mouseleave', () => {
                reviewTimer = setInterval(nextReview, 5000);
            });
        }

        // Swipe support
        let touchStartX = 0;
        let touchEndX = 0;
        if (carousel) {
            carousel.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
            carousel.addEventListener('touchend', e => {
                touchEndX = e.changedTouches[0].screenX;
                const diff = touchStartX - touchEndX;
                if (Math.abs(diff) > 50) {
                    diff > 0 ? nextReview() : prevReview();
                    resetReviewTimer();
                }
            }, { passive: true });
        }
    }

    // ===== APPOINTMENT FORM =====
    const form = document.getElementById('appointment-form');
    const confirmation = document.getElementById('form-confirmation');
    const doctorSelect = document.getElementById('preferred-doctor');
    const visitReasonSelect = document.getElementById('visit-reason');
    const doctorReasonOptions = {
        default: [
            'Pregnancy / Delivery',
            'Gynaecology Issue',
            'Infertility',
            'General Consultation',
            'Pediatric Checkup (Young / Children)',
            'Sexology Consultation',
            'Other'
        ],
        'Dr. Kiran Sarda (Gynaecologist & Obstetrician)': [
            'Pregnancy / Delivery',
            'Gynaecology Issue',
            'Infertility',
            'Other'
        ],
        'Dr. Sudeep Sarda (Anaesthetist & General Physician — by appointment)': [
            'General Consultation',
            'Pediatric Checkup (Young / Children)',
            'Sexology Consultation',
            'Other'
        ]
    };

    function syncVisitReasonOptions(selectedDoctor = '') {
        if (!visitReasonSelect) return;

        const availableReasons = doctorReasonOptions[selectedDoctor] || doctorReasonOptions.default;
        const previousValue = visitReasonSelect.value;

        visitReasonSelect.innerHTML = '';

        const placeholder = document.createElement('option');
        placeholder.value = '';
        placeholder.textContent = 'Select Reason';
        visitReasonSelect.appendChild(placeholder);

        availableReasons.forEach(reason => {
            const option = document.createElement('option');
            option.value = reason;
            option.textContent = reason;
            visitReasonSelect.appendChild(option);
        });

        if (availableReasons.includes(previousValue)) {
            visitReasonSelect.value = previousValue;
        } else {
            visitReasonSelect.value = '';
        }
    }

    if (doctorSelect && visitReasonSelect) {
        syncVisitReasonOptions(doctorSelect.value);
        doctorSelect.addEventListener('change', () => {
            syncVisitReasonOptions(doctorSelect.value);
        });
    }

    if (form) {
        // Set minimum date to today
        const dateInput = document.getElementById('preferred-date');
        if (dateInput) {
            const today = new Date().toISOString().split('T')[0];
            dateInput.setAttribute('min', today);
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('patient-name').value.trim();
            const phone = document.getElementById('patient-phone').value.trim();
            const doctor = document.getElementById('preferred-doctor').value;
            const reason = document.getElementById('visit-reason').value;
            const date = document.getElementById('preferred-date').value;
            const time = document.getElementById('preferred-time').value;
            const message = document.getElementById('patient-message').value.trim();

            // Build WhatsApp message
            let waMessage = `Hello Sarda Hospital,\nI would like to book an appointment.\n\n`;
            waMessage += `Name: ${name}\n`;
            waMessage += `Phone: ${phone}\n`;
            waMessage += `Doctor: ${doctor}\n`;
            waMessage += `Reason: ${reason}\n`;
            waMessage += `Date: ${date}\n`;
            waMessage += `Time: ${time}\n`;
            if (message) waMessage += `Message: ${message}\n`;

            const waURL = `https://wa.me/919503062999?text=${encodeURIComponent(waMessage)}`;

            // 1. Open WhatsApp
            window.open(waURL, '_blank');

            // 2. Send to Google Sheets (if webhook URL is configured)
            sendToGoogleSheets({ name, phone, doctor, reason, date, time, message });

            // 3. Send email notification (if configured)
            sendEmailNotification({ name, phone, doctor, reason, date, time, message });

            // 4. Show confirmation
            form.style.display = 'none';
            if (confirmation) confirmation.classList.add('show');

            // Reset after 10 seconds
            setTimeout(() => {
                form.reset();
                if (doctorSelect && visitReasonSelect) {
                    syncVisitReasonOptions('');
                }
                form.style.display = '';
                if (confirmation) confirmation.classList.remove('show');
            }, 10000);
        });
    }

    // ===== DOCTOR PREFILL LINKS =====
    const doctorPrefillLinks = document.querySelectorAll('[data-prefill-doctor]');

    if (doctorSelect && doctorPrefillLinks.length > 0) {
        doctorPrefillLinks.forEach(link => {
            link.addEventListener('click', () => {
                const doctorValue = link.getAttribute('data-prefill-doctor');
                if (!doctorValue) return;

                doctorSelect.value = doctorValue;
                doctorSelect.dispatchEvent(new Event('change', { bubbles: true }));
            });
        });
    }

    // ===== PACKAGE TOGGLE ENHANCEMENTS =====
    const packageToggleInputs = Array.from(document.querySelectorAll('.package-card__toggle-input'));
    const mobilePackages = window.matchMedia('(max-width: 768px)');

    function syncPackageToggle(toggle) {
        const label = document.querySelector(`label[for="${toggle.id}"]`);
        if (!label) return;

        const isExpanded = toggle.checked;
        label.textContent = isExpanded ? 'Less Info' : 'More Info';
        label.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
    }

    function collapseSiblingPackageToggles(activeToggle) {
        packageToggleInputs.forEach(toggle => {
            if (toggle !== activeToggle && toggle.checked) {
                toggle.checked = false;
                syncPackageToggle(toggle);
            }
        });
    }

    if (packageToggleInputs.length > 0) {
        packageToggleInputs.forEach(toggle => {
            syncPackageToggle(toggle);

            toggle.addEventListener('change', () => {
                if (mobilePackages.matches && toggle.checked) {
                    collapseSiblingPackageToggles(toggle);
                }

                syncPackageToggle(toggle);
            });
        });

        const handlePackageViewportChange = () => {
            packageToggleInputs.forEach(syncPackageToggle);
        };

        if (typeof mobilePackages.addEventListener === 'function') {
            mobilePackages.addEventListener('change', handlePackageViewportChange);
        } else if (typeof mobilePackages.addListener === 'function') {
            mobilePackages.addListener(handlePackageViewportChange);
        }
    }

    // ===== GOOGLE SHEETS INTEGRATION =====
    // Intentionally disabled for the current WhatsApp-only release.
    const GOOGLE_SHEETS_URL = '';

    function sendToGoogleSheets(data) {
        if (!GOOGLE_SHEETS_URL) return;

        fetch(GOOGLE_SHEETS_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                timestamp: new Date().toISOString(),
                ...data
            })
        }).catch(err => console.log('Sheets logging:', err));
    }

    // ===== EMAIL NOTIFICATION =====
    // Intentionally disabled for the current WhatsApp-only release.
    const EMAIL_ENDPOINT = '';

    function sendEmailNotification(data) {
        if (!EMAIL_ENDPOINT) return;

        fetch(EMAIL_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                to: 'shreyassarda7@gmail.com',
                subject: `New Appointment Request — ${data.name}`,
                ...data
            })
        }).catch(err => console.log('Email notification:', err));
    }

    // ===== SCROLL REVEAL ANIMATIONS =====
    const revealElements = document.querySelectorAll('.reveal, .reveal-stagger');

    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        // Fallback: show everything
        revealElements.forEach(el => el.classList.add('visible'));
    }

    // ===== COUNTER ANIMATION (Trust Strip) =====
    const counters = document.querySelectorAll('[data-count]');

    if (counters.length > 0 && 'IntersectionObserver' in window) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => counterObserver.observe(counter));
    }

    function animateCounter(el) {
        const target = parseInt(el.getAttribute('data-count'));
        const suffix = el.textContent.includes('+') ? '+' : '';
        const duration = 2000;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * target);

            el.textContent = current.toLocaleString() + suffix;

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    }

    // ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

});
