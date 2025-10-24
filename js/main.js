/**
 * Main JavaScript
 * Handles interactions and animations
 */

// Header scroll effect
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerOffset = 72;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements with animation classes
document.querySelectorAll('.fade-in, .slide-in').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  observer.observe(el);
});

// Form submission handler
const form = document.querySelector('.form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    console.log('Form submitted:', data);

    // Show success message (you can customize this)
    alert('Thank you for your message! We\'ll get back to you soon.');

    // Reset form
    form.reset();
  });
}

// Mobile menu toggle (if needed)
const createMobileMenu = () => {
  const nav = document.querySelector('.nav');
  const navList = document.querySelector('.nav-list');

  if (window.innerWidth <= 768 && navList) {
    // Create hamburger button if it doesn't exist
    let hamburger = document.querySelector('.hamburger');
    if (!hamburger) {
      hamburger = document.createElement('button');
      hamburger.className = 'hamburger';
      hamburger.innerHTML = '☰';
      hamburger.style.cssText = `
        background: none;
        border: none;
        font-size: var(--font-size-2xl);
        color: var(--color-primary);
        cursor: pointer;
        padding: var(--space-2);
      `;

      hamburger.addEventListener('click', () => {
        navList.classList.toggle('mobile-open');
      });

      nav.insertBefore(hamburger, navList);
    }

    // Style mobile menu
    navList.style.cssText = `
      position: fixed;
      top: var(--header-height);
      left: 0;
      right: 0;
      background: var(--color-background-white);
      flex-direction: column;
      padding: var(--space-6);
      box-shadow: var(--shadow-lg);
      display: none;
    `;

    // Add toggle class behavior
    const style = document.createElement('style');
    style.textContent = `
      .nav-list.mobile-open {
        display: flex !important;
      }
    `;
    document.head.appendChild(style);
  }
};

// Initialize mobile menu on load and resize
window.addEventListener('load', createMobileMenu);
window.addEventListener('resize', createMobileMenu);

// Parallax effect for hero section (optional)
const hero = document.querySelector('.hero');
if (hero) {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = scrolled * 0.5;
    hero.style.transform = `translateY(${parallax}px)`;
  });
}

// Console message
console.log('%c✨ Tydal-Inspired Theme Loaded!', 'color: #030076; font-size: 16px; font-weight: bold;');
console.log('%cCustom colors: Primary #030076, Accent #F9A643', 'color: #F9A643; font-size: 12px;');
