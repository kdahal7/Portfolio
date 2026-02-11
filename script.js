// ==================== 
// Navigation Menu Toggle
// ====================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Animate hamburger icon
    const spans = hamburger.querySelectorAll('span');
    if (navLinks.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(10px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// ==================== 
// Smooth Scrolling with Offset
// ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Height of fixed navbar
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== 
// Active Navigation Link
// ====================
const sections = document.querySelectorAll('section');
const navLinkElements = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navLinkElements.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ==================== 
// Scroll Animations
// ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all skill cards, project cards, and sections
document.querySelectorAll('.skill-card, .project-card, .about-content, .contact-content').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ==================== 
// Form Submission
// ====================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Here you would typically send the form data to a backend
    // For now, we'll just show a success message
    console.log('Form submitted:', formData);
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    contactForm.reset();
});

// ==================== 
// Typing Effect for Hero Section
// ====================
const heroSubtitle = document.querySelector('.hero-subtitle');
const subtitles = [
    'Web Developer | Designer | Problem Solver',
    'Full Stack Developer | Creative Thinker',
    'Frontend Expert | UI/UX Enthusiast',
    'Code Craftsman | Tech Explorer'
];

let subtitleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
    const currentSubtitle = subtitles[subtitleIndex];
    
    if (isDeleting) {
        heroSubtitle.textContent = currentSubtitle.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        heroSubtitle.textContent = currentSubtitle.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentSubtitle.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        subtitleIndex = (subtitleIndex + 1) % subtitles.length;
    }
    
    setTimeout(typeEffect, typingSpeed);
}

// Start typing effect after page loads
window.addEventListener('load', () => {
    setTimeout(typeEffect, 1000);
});

// ==================== 
// Navbar Background on Scroll
// ====================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    }
});

// ==================== 
// Prevent Right Click (Optional - for portfolio protection)
// ====================
// Uncomment if you want to disable right-click
// document.addEventListener('contextmenu', (e) => e.preventDefault());

// ==================== 
// Dynamic Year in Footer
// ====================
const footerText = document.querySelector('.footer p');
if (footerText) {
    const currentYear = new Date().getFullYear();
    footerText.textContent = `© ${currentYear} Kaushal Dahal. All rights reserved.`;
}

// ==================== 
// Parallax Effect for Hero Section
// ====================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrolled / 600);
    }
});

// ==================== 
// Console Message
// ====================
console.log('%c👋 Hello Developer! ', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%cLooking at my code? Feel free to reach out!', 'color: #8b5cf6; font-size: 14px;');
