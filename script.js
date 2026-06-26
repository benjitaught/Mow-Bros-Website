// iOS-Style Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    // Initialize navigation
    initBottomNavigation();
    initSmoothScrolling();
    initAnimations();
    initMobileMenu();
    initReviewsMarquee();
});

/**
 * Duplicate the review cards so the auto-scroll loops seamlessly.
 * The CSS animates translateX(-50%), so the second half must mirror the first.
 */
function initReviewsMarquee() {
    const track = document.querySelector('.reviews-track');
    if (!track) return;
    track.innerHTML += track.innerHTML;

    // Duplicate gallery items for seamless loop
    const galleryTrack = document.querySelector('.gallery-track');
    if (galleryTrack) {
        galleryTrack.innerHTML += galleryTrack.innerHTML;
    }
}

/**
 * Initialize bottom navigation
 */
function initBottomNavigation() {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Set active nav item on scroll
    window.addEventListener('scroll', updateActiveNav);
}

/**
 * Update active navigation item based on scroll position
 */
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-item');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === '#' + current) {
            item.classList.add('active');
        }
    });
}

/**
 * Smooth scrolling for anchor links
 */
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                const offsetTop = target.offsetTop - 100;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Initialize scroll animations
 */
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-slide-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service-card, .benefit-card, .testimonial-card, .contact-card').forEach(el => {
        observer.observe(el);
    });
}

/**
 * Mobile menu initialization
 */
function initMobileMenu() {
    // Add touch feedback for buttons
    const buttons = document.querySelectorAll('.btn, .nav-item');

    buttons.forEach(btn => {
        btn.addEventListener('touchstart', function() {
            this.style.opacity = '0.7';
        });

        btn.addEventListener('touchend', function() {
            this.style.opacity = '1';
        });
    });
}

/**
 * Handle form submissions
 */
function handleFormSubmit(e) {
    e.preventDefault();

    // Show success message
    const form = e.target;
    const successMessage = document.createElement('div');
    successMessage.textContent = 'Thank you! We\'ll be in touch soon.';
    successMessage.style.cssText = `
        padding: 16px;
        background-color: #34c759;
        color: white;
        border-radius: 12px;
        margin-bottom: 16px;
        animation: slideIn 0.3s ease-out;
    `;

    form.insertBefore(successMessage, form.firstChild);
    form.reset();

    setTimeout(() => {
        successMessage.remove();
    }, 3000);
}

/**
 * Utility: Add class to multiple elements
 */
function addClassToElements(selector, className) {
    document.querySelectorAll(selector).forEach(el => {
        el.classList.add(className);
    });
}

/**
 * Utility: Remove class from multiple elements
 */
function removeClassFromElements(selector, className) {
    document.querySelectorAll(selector).forEach(el => {
        el.classList.remove(className);
    });
}

/**
 * Utility: Toggle class on multiple elements
 */
function toggleClassOnElements(selector, className) {
    document.querySelectorAll(selector).forEach(el => {
        el.classList.toggle(className);
    });
}

/**
 * Track page scroll for animations and analytics
 */
let scrollTimeout;
window.addEventListener('scroll', function() {
    // Update active navigation
    updateActiveNav();

    // Throttle scroll events
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        // Could add analytics tracking here
    }, 100);
}, false);

/**
 * Handle window resize
 */
window.addEventListener('resize', function() {
    // Handle responsive adjustments
});

/**
 * Initialize app on page ready
 */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        console.log('Mow Bros website loaded successfully');
    });
} else {
    console.log('Mow Bros website loaded successfully');
}
