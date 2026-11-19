/**
 * CINNAMON HEALTH - JAVASCRIPT INTERACTIONS
 * Premium animations and interactivity
 */

// ===== NAVIGATION =====
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const navHeight = navbar.offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== SCROLL REVEAL ANIMATIONS =====
const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('revealed');
        }
    });
};

// Initial check
revealOnScroll();

// Check on scroll with throttle for performance
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }

    scrollTimeout = window.requestAnimationFrame(() => {
        revealOnScroll();
    });
});

// ===== INTERSECTION OBSERVER FOR ADVANCED ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, observerOptions);

// Observe all reveal elements
revealElements.forEach(element => {
    observer.observe(element);
});

// ===== PRODUCT CARDS PARALLAX EFFECT =====
const productCards = document.querySelectorAll('.product-card, .feature-card, .health-card');

productCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// ===== FORM HANDLING =====
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Get the submit button
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;

        // Disable button and show loading state
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            // Show success message
            showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');

            // Reset form
            contactForm.reset();

            // Re-enable button
            submitButton.disabled = false;
            submitButton.textContent = originalText;
        }, 1500);

        // Example: Actual API call
        /*
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
                contactForm.reset();
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            showNotification('Sorry, there was an error sending your message. Please try again.', 'error');
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = originalText;
        }
        */
    });
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'success') {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${type === 'success' ? '✓' : '✕'}</span>
            <span class="notification-message">${message}</span>
        </div>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'var(--color-primary)' : '#dc3545'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-xl);
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
        max-width: 400px;
    `;

    // Append to body
    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Add notification animations to CSS
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }

    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .notification-icon {
        font-size: 1.25rem;
        font-weight: bold;
    }

    .notification-message {
        font-size: 0.95rem;
    }
`;
document.head.appendChild(notificationStyles);

// ===== IMAGE LAZY LOADING =====
const images = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// ===== COUNTER ANIMATION =====
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Animate counters when they come into view
const counters = document.querySelectorAll('[data-counter]');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.dataset.counter);
            animateCounter(counter, target);
            counterObserver.unobserve(counter);
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => counterObserver.observe(counter));

// ===== FLOATING ELEMENTS ENHANCED ANIMATION =====
function enhanceFloatingElements() {
    const floatingElements = document.querySelectorAll('.floating-leaf, .floating-cinnamon');

    floatingElements.forEach((element, index) => {
        const randomDelay = Math.random() * 5;
        const randomDuration = 15 + Math.random() * 10;

        element.style.animationDelay = `${randomDelay}s`;
        element.style.animationDuration = `${randomDuration}s`;
    });
}

enhanceFloatingElements();

// ===== CURSOR EFFECTS (OPTIONAL - PREMIUM TOUCH) =====
const cursorDot = document.createElement('div');
const cursorOutline = document.createElement('div');

cursorDot.className = 'cursor-dot';
cursorOutline.className = 'cursor-outline';

document.body.appendChild(cursorDot);
document.body.appendChild(cursorOutline);

// Add cursor styles
const cursorStyles = document.createElement('style');
cursorStyles.textContent = `
    .cursor-dot,
    .cursor-outline {
        pointer-events: none;
        position: fixed;
        top: 0;
        left: 0;
        border-radius: 50%;
        opacity: 0;
        z-index: 10001;
        transition: opacity 0.3s ease;
    }

    .cursor-dot {
        width: 8px;
        height: 8px;
        background: var(--color-primary);
    }

    .cursor-outline {
        width: 40px;
        height: 40px;
        border: 2px solid var(--color-primary);
        opacity: 0.3;
    }

    body:hover .cursor-dot,
    body:hover .cursor-outline {
        opacity: 1;
    }

    @media (max-width: 1024px) {
        .cursor-dot,
        .cursor-outline {
            display: none;
        }
    }
`;
document.head.appendChild(cursorStyles);

let mouseX = 0;
let mouseY = 0;
let outlineX = 0;
let outlineY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursorDot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
});

function animateOutline() {
    outlineX += (mouseX - outlineX) * 0.15;
    outlineY += (mouseY - outlineY) * 0.15;

    cursorOutline.style.transform = `translate(${outlineX - 20}px, ${outlineY - 20}px)`;

    requestAnimationFrame(animateOutline);
}

animateOutline();

// Scale cursor on interactive elements
const interactiveElements = document.querySelectorAll('a, button, input, textarea, select');

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorDot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px) scale(1.5)`;
        cursorOutline.style.transform = `translate(${outlineX - 20}px, ${outlineY - 20}px) scale(1.5)`;
    });

    el.addEventListener('mouseleave', () => {
        cursorDot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px) scale(1)`;
        cursorOutline.style.transform = `translate(${outlineX - 20}px, ${outlineY - 20}px) scale(1)`;
    });
});

// ===== PERFORMANCE OPTIMIZATION =====
// Debounce function for resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize
const handleResize = debounce(() => {
    revealOnScroll();
}, 250);

window.addEventListener('resize', handleResize);

// ===== LOADING STATE =====
window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    // Add subtle entrance animation to body
    const bodyStyles = document.createElement('style');
    bodyStyles.textContent = `
        body {
            opacity: 0;
            animation: fadeIn 0.5s ease-out forwards;
        }

        body.loaded {
            opacity: 1;
        }
    `;
    document.head.appendChild(bodyStyles);
});

// ===== ACCESSIBILITY ENHANCEMENTS =====
// Keyboard navigation for cards
productCards.forEach(card => {
    card.setAttribute('tabindex', '0');

    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            const link = card.querySelector('a');
            if (link) {
                link.click();
            }
        }
    });
});

// Focus management for mobile menu
navToggle.addEventListener('click', () => {
    if (navMenu.classList.contains('active')) {
        setTimeout(() => {
            navLinks[0]?.focus();
        }, 300);
    }
});

// ===== SCROLL TO TOP BUTTON =====
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
document.body.appendChild(scrollToTopBtn);

const scrollToTopStyles = document.createElement('style');
scrollToTopStyles.textContent = `
    .scroll-to-top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--gradient-primary);
        color: white;
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: var(--shadow-lg);
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all var(--transition-base);
        z-index: 999;
    }

    .scroll-to-top.visible {
        opacity: 1;
        visibility: visible;
    }

    .scroll-to-top:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-xl);
    }

    .scroll-to-top:active {
        transform: translateY(-2px);
    }
`;
document.head.appendChild(scrollToTopStyles);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== CONSOLE MESSAGE =====
console.log('%c🌿 Cinnamon Health', 'color: #2d8659; font-size: 24px; font-weight: bold;');
console.log('%cPremium Ceylon Cinnamon & Natural Infusions', 'color: #d4922f; font-size: 14px;');
console.log('%cWebsite crafted with care | Visit: cinnamonhealth.lk', 'color: #4a4a4a; font-size: 12px;');

// ===== INITIALIZATION COMPLETE =====
console.log('%c✓ All scripts loaded successfully', 'color: #2d8659; font-weight: bold;');
