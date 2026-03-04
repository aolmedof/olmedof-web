/* ============================================================
   main.js  –  Arturo O. Flores Personal Portfolio
   ============================================================ */

/* ── State ── */
let currentLang = 'en';

/* ── Certifications data (static, not translated) ── */
const certs = [
  {
    name: 'AWS Solutions Architect Associate',
    provider: 'Amazon Web Services',
    providerShort: 'AWS',
    period: '2022 – 2025',
    color: '#FF9900',
    icon: 'fa-brands fa-aws',
    url: 'https://aws.amazon.com/certification/verify',
  },
  {
    name: 'AWS Developer Associate',
    provider: 'Amazon Web Services',
    providerShort: 'AWS',
    period: '2023 – 2026',
    color: '#FF9900',
    icon: 'fa-brands fa-aws',
    url: 'https://aws.amazon.com/certification/verify',
  },
  {
    name: 'AWS Security Specialty',
    provider: 'Amazon Web Services',
    providerShort: 'AWS',
    period: '2024 – 2027',
    color: '#FF9900',
    icon: 'fa-brands fa-aws',
    url: 'https://aws.amazon.com/certification/verify',
  },
  {
    name: 'AWS Machine Learning Specialty',
    provider: 'Amazon Web Services',
    providerShort: 'AWS',
    period: '2024 – 2027',
    color: '#FF9900',
    icon: 'fa-brands fa-aws',
    url: 'https://aws.amazon.com/certification/verify',
  },
  {
    name: 'Associate Cloud Engineer',
    provider: 'Google Cloud',
    providerShort: 'GCP',
    period: '2024 – 2027',
    color: '#4285F4',
    icon: 'fa-brands fa-google',
    url: 'https://cloud.google.com/certification/verify',
  },
  {
    name: 'Professional Cloud Architect',
    provider: 'Google Cloud',
    providerShort: 'GCP',
    period: '2024 – 2027',
    color: '#4285F4',
    icon: 'fa-brands fa-google',
    url: 'https://cloud.google.com/certification/verify',
  },
  {
    name: 'Professional Cloud Security Engineer',
    provider: 'Google Cloud',
    providerShort: 'GCP',
    period: '2024 – 2027',
    color: '#4285F4',
    icon: 'fa-brands fa-google',
    url: 'https://cloud.google.com/certification/verify',
  },
  {
    name: 'Azure Administrator Associate',
    provider: 'Microsoft Azure',
    providerShort: 'Azure',
    period: '2024 – 2027',
    color: '#0078D4',
    icon: 'fa-brands fa-microsoft',
    url: 'https://learn.microsoft.com/en-us/certifications/verify',
  },
  {
    name: 'Azure Security Engineer',
    provider: 'Microsoft Azure',
    providerShort: 'Azure',
    period: '2024 – 2027',
    color: '#0078D4',
    icon: 'fa-brands fa-microsoft',
    url: 'https://learn.microsoft.com/en-us/certifications/verify',
  },
  {
    name: 'Terraform Associate',
    provider: 'HashiCorp',
    providerShort: 'HashiCorp',
    period: '2024 – 2027',
    color: '#7B42BC',
    icon: 'fa-solid fa-cube',
    url: 'https://www.credly.com',
  },
  {
    name: 'Certified Kubernetes Administrator (CKA)',
    provider: 'Linux Foundation',
    providerShort: 'CNCF',
    period: '2024 – 2027',
    color: '#326CE5',
    icon: 'fa-brands fa-linux',
    url: 'https://training.linuxfoundation.org/certification/verify',
  },
];

/* ── Typing Effect ── */
class TypeWriter {
  constructor(el, words, wait = 2800) {
    this.el = el;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.isDeleting = false;
    this.type();
  }

  type() {
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];

    this.txt = this.isDeleting
      ? fullTxt.substring(0, this.txt.length - 1)
      : fullTxt.substring(0, this.txt.length + 1);

    this.el.innerHTML = `<span class="txt">${this.txt}</span>`;

    let typeSpeed = this.isDeleting ? 60 : 110;
    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.wordIndex++;
      typeSpeed = 400;
    }

    setTimeout(() => this.type(), typeSpeed);
  }

  updateWords(words) {
    this.words = words;
  }
}

let typeWriterInstance = null;

/* ── Render Functions ── */

function renderNav(t) {
  document.querySelector('[data-i18n="nav.about"]').textContent = t.nav.about;
  document.querySelector('[data-i18n="nav.experience"]').textContent = t.nav.experience;
  document.querySelector('[data-i18n="nav.certifications"]').textContent = t.nav.certifications;
  document.querySelector('[data-i18n="nav.skills"]').textContent = t.nav.skills;
  document.querySelector('[data-i18n="nav.education"]').textContent = t.nav.education;
  document.querySelector('[data-i18n="nav.contact"]').textContent = t.nav.contact;
}

function renderHero(t) {
  document.querySelector('[data-i18n="hero.greeting"]').textContent = t.hero.greeting;
  document.querySelector('[data-i18n="hero.title"]').textContent = t.hero.title;
  document.querySelector('[data-i18n="hero.subtitle"]').textContent = t.hero.subtitle;
  document.querySelector('[data-i18n="hero.cta_experience"]').textContent = t.hero.cta_experience;
  document.querySelector('[data-i18n="hero.cta_cv"]').textContent = t.hero.cta_cv;

  if (typeWriterInstance) {
    typeWriterInstance.updateWords(t.hero.typing_roles);
    typeWriterInstance.wordIndex = 0;
    typeWriterInstance.txt = '';
    typeWriterInstance.isDeleting = false;
  }
}

function renderAbout(t) {
  document.querySelector('[data-i18n="about.title"]').textContent = t.about.title;
  document.querySelector('[data-i18n="about.subtitle"]').textContent = t.about.subtitle;
  document.querySelector('[data-i18n="about.text"]').textContent = t.about.text;
  document.querySelector('[data-i18n="about.location"]').textContent = t.about.location;
  document.querySelector('[data-i18n="about.availability"]').textContent = t.about.availability;
}

function renderExperience(t) {
  document.querySelector('[data-i18n="experience.title"]').textContent = t.experience.title;
  document.querySelector('[data-i18n="experience.subtitle"]').textContent = t.experience.subtitle;

  const container = document.getElementById('timeline-container');
  container.innerHTML = '';

  t.experience.jobs.forEach((job, i) => {
    const side = i % 2 === 0 ? 'left' : 'right';
    const item = document.createElement('div');
    item.className = `timeline-item ${side}`;
    item.setAttribute('data-aos', 'fade-up');
    item.setAttribute('data-aos-delay', `${i * 100}`);

    item.innerHTML = `
      <div class="timeline-content">
        <div class="timeline-dot"></div>
        <span class="timeline-period">${job.period}</span>
        <h3 class="timeline-role">${job.role}</h3>
        <h4 class="timeline-company">${job.company}</h4>
        <span class="timeline-location"><i class="fa-solid fa-location-dot"></i> ${job.location}</span>
        <ul class="timeline-highlights">
          ${job.highlights.map(h => `<li><i class="fa-solid fa-chevron-right"></i> ${h}</li>`).join('')}
        </ul>
      </div>
    `;
    container.appendChild(item);
  });

  if (typeof AOS !== 'undefined') AOS.refresh();
}

function renderCertifications(t) {
  document.querySelector('[data-i18n="certifications.title"]').textContent = t.certifications.title;
  document.querySelector('[data-i18n="certifications.subtitle"]').textContent = t.certifications.subtitle;

  const grid = document.getElementById('certs-grid');
  grid.innerHTML = '';

  certs.forEach((cert, i) => {
    const card = document.createElement('div');
    card.className = 'cert-card';
    card.setAttribute('data-aos', 'zoom-in');
    card.setAttribute('data-aos-delay', `${(i % 4) * 80}`);

    card.innerHTML = `
      <div class="cert-badge" style="color: ${cert.color}; border-color: ${cert.color}33; background: ${cert.color}11;">
        <i class="${cert.icon}" style="color:${cert.color}"></i>
      </div>
      <div class="cert-info">
        <span class="cert-provider" style="color: ${cert.color};">${cert.providerShort}</span>
        <h4 class="cert-name">${cert.name}</h4>
        <p class="cert-period"><i class="fa-regular fa-calendar"></i> ${t.certifications.valid}: ${cert.period}</p>
      </div>
      <a href="${cert.url}" target="_blank" rel="noopener noreferrer" class="cert-verify" style="border-color: ${cert.color}; color: ${cert.color};">
        ${t.certifications.verify} <i class="fa-solid fa-arrow-up-right-from-square"></i>
      </a>
    `;
    grid.appendChild(card);
  });

  if (typeof AOS !== 'undefined') AOS.refresh();
}

function renderSkills(t) {
  document.querySelector('[data-i18n="skills.title"]').textContent = t.skills.title;
  document.querySelector('[data-i18n="skills.subtitle"]').textContent = t.skills.subtitle;

  const grid = document.getElementById('skills-grid');
  grid.innerHTML = '';

  t.skills.categories.forEach((cat, i) => {
    const card = document.createElement('div');
    card.className = 'skill-category';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', `${(i % 3) * 80}`);

    card.innerHTML = `
      <h4 class="skill-cat-name" style="color: ${cat.color}; border-left: 3px solid ${cat.color};">${cat.name}</h4>
      <div class="skill-tags">
        ${cat.items.map(item => `<span class="skill-tag" style="background:${cat.color}18; color:${cat.color}; border:1px solid ${cat.color}44;">${item}</span>`).join('')}
      </div>
    `;
    grid.appendChild(card);
  });

  if (typeof AOS !== 'undefined') AOS.refresh();
}

function renderEducation(t) {
  document.querySelector('[data-i18n="education.title"]').textContent = t.education.title;
  document.querySelector('[data-i18n="education.subtitle"]').textContent = t.education.subtitle;

  const grid = document.getElementById('education-grid');
  grid.innerHTML = '';

  t.education.degrees.forEach((deg, i) => {
    const card = document.createElement('div');
    card.className = 'edu-card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', `${i * 100}`);

    card.innerHTML = `
      <div class="edu-icon"><i class="fa-solid ${deg.icon}"></i></div>
      <div class="edu-info">
        <span class="edu-level">${deg.level}</span>
        <h3 class="edu-field">${deg.field}</h3>
        <h4 class="edu-institution">${deg.institution}</h4>
        <div class="edu-meta">
          <span><i class="fa-regular fa-calendar"></i> ${deg.period}</span>
          <span><i class="fa-solid fa-location-dot"></i> ${deg.location}</span>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  if (typeof AOS !== 'undefined') AOS.refresh();
}

function renderContact(t) {
  document.querySelector('[data-i18n="contact.title"]').textContent = t.contact.title;
  document.querySelector('[data-i18n="contact.subtitle"]').textContent = t.contact.subtitle;
  document.querySelector('[data-i18n="contact.email_label"]').textContent = t.contact.email_label;
  document.querySelector('[data-i18n="contact.location_label"]').textContent = t.contact.location_label;
  document.querySelector('[data-i18n="contact.location_value"]').textContent = t.contact.location_value;
  document.querySelector('[data-i18n="contact.whatsapp_label"]').textContent = t.contact.whatsapp_label;
  document.querySelector('[data-i18n="contact.form_name"]').placeholder = t.contact.form_name;
  document.querySelector('[data-i18n="contact.form_email"]').placeholder = t.contact.form_email;
  document.querySelector('[data-i18n="contact.form_message"]').placeholder = t.contact.form_message;
  document.querySelector('[data-i18n="contact.form_send"]').textContent = t.contact.form_send;
}

function renderFooter(t) {
  document.querySelector('[data-i18n="footer.copyright"]').textContent = t.footer.copyright;
  document.querySelector('[data-i18n="footer.built"]').textContent = t.footer.built;
}

function applyTranslations(lang) {
  const t = translations[lang];
  renderNav(t);
  renderHero(t);
  renderAbout(t);
  renderExperience(t);
  renderCertifications(t);
  renderSkills(t);
  renderEducation(t);
  renderContact(t);
  renderFooter(t);
}

/* ── Language Toggle ── */
function setupLangToggle() {
  const btn = document.getElementById('lang-toggle');
  btn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'es' : 'en';
    btn.textContent = currentLang === 'en' ? 'ES' : 'EN';
    applyTranslations(currentLang);
  });
}

/* ── Navbar scroll behavior ── */
function setupNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('open');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('open');
    });
  });
}

/* ── Active nav on scroll ── */
function setupScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
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
}

/* ── Canvas particle background ── */
function setupParticles() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resize();
  window.addEventListener('resize', resize);

  const PARTICLE_COUNT = 60;
  const particles = [];

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.1,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.x += p.dx;
      p.y += p.dy;

      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(212, 168, 85, ${p.alpha})`;
      ctx.fill();
    });

    // Draw connecting lines between nearby particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(212, 168, 85, ${0.06 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  draw();
}

/* ── Toast notification ── */
function showToast(message, duration = 6000) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('toast-visible');
  clearTimeout(toast._hideTimer);
  toast._hideTimer = setTimeout(() => toast.classList.remove('toast-visible'), duration);
}

/* ── CV Button ── */
function setupCVButton() {
  const btn = document.getElementById('cv-btn');
  if (!btn) return;

  btn.addEventListener('click', e => {
    // Check if the CV file exists by making a HEAD request
    fetch(btn.href, { method: 'HEAD' })
      .then(res => {
        if (!res.ok) throw new Error('not found');
        // File exists — allow the default download to proceed
      })
      .catch(() => {
        e.preventDefault();
        const msg =
          currentLang === 'en'
            ? 'CV coming soon — contact me directly at arturo.olmedof@hotmail.com'
            : 'CV próximamente — contáctame directamente en arturo.olmedof@hotmail.com';
        showToast(msg);
      });
  });
}

/* ── Contact form → mailto ── */
function setupContactForm() {
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', e => {
    e.preventDefault();

    const name    = form.querySelector('[name="name"]').value.trim();
    const email   = form.querySelector('[name="email"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();

    const subject = `Contact from ${name}`;
    const body    = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailto  = `mailto:arturo.olmedof@hotmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;

    const msg =
      currentLang === 'en'
        ? 'Your email client has opened with a pre-filled message. If it didn\'t open, email me directly at arturo.olmedof@hotmail.com'
        : 'Tu cliente de correo se ha abierto con el mensaje listo. Si no funcionó, escríbeme a arturo.olmedof@hotmail.com';
    showToast(msg, 8000);

    form.reset();
  });
}

/* ── Smooth scroll for anchor links ── */
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  // Init AOS
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 700, once: true, offset: 80 });
  }

  // Init typing effect
  const typingEl = document.getElementById('typing-text');
  if (typingEl) {
    typeWriterInstance = new TypeWriter(typingEl, translations[currentLang].hero.typing_roles);
  }

  // Initial render
  applyTranslations(currentLang);

  setupLangToggle();
  setupNavbar();
  setupScrollSpy();
  setupParticles();
  setupCVButton();
  setupContactForm();
  setupSmoothScroll();
});
