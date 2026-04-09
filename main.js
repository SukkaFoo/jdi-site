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

// Contact form — FormSubmit.co delivery to peter@jdintelligence.com
const form = document.querySelector('.cta-form');
if (form) {
  const submitBtn = document.getElementById('formSubmit');
  const formFields = document.getElementById('formFields');
  const successEl = document.getElementById('formSuccess');
  const errorEl = document.getElementById('formError');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (errorEl) errorEl.classList.remove('visible');

    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending…';

    const payload = {
      name:     form.querySelector('[name="name"]').value,
      email:    form.querySelector('[name="email"]').value,
      company:  form.querySelector('[name="company"]').value,
      service:  form.querySelector('[name="service"]').value,
      location: form.querySelector('[name="location"]').value,
      message:  form.querySelector('[name="message"]').value,
      _subject: `JDI website enquiry — ${form.querySelector('[name="name"]').value}`,
    };

    try {
      const res = await fetch('https://formsubmit.co/ajax/peter@jdintelligence.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('non-200');
      formFields.style.display = 'none';
      if (successEl) successEl.classList.add('visible');
    } catch {
      submitBtn.disabled = false;
      submitBtn.innerHTML = 'Send message <span>→</span>';
      if (errorEl) errorEl.classList.add('visible');
    }
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
