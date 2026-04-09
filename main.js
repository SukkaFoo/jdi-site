// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('open');
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
  });
});

// Navbar shadow on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.style.boxShadow = '0 2px 24px rgba(0,0,0,0.35)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

// Contact form — mailto fallback until backend is wired up
const form = document.querySelector('.cta-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('[name="name"]').value;
    const email = form.querySelector('[name="email"]').value;
    const company = form.querySelector('[name="company"]').value;
    const service = form.querySelector('[name="service"]').value;
    const location = form.querySelector('[name="location"]').value;
    const message = form.querySelector('[name="message"]').value;

    const recipient = 'peter@jdintelligence.com';
    const subject = encodeURIComponent(`Enquiry from ${name} — ${company}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nService: ${service}\nLocation: ${location}\n\n${message}`
    );
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  });
}

// Subtle fade-in on scroll for cards
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .team-card, .pillar, .process-step, .location-card, .cap-card, .svc-nav-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
