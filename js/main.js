/* ============================================================
   main.js  –  Arturo O. Flores Personal Portfolio
   ============================================================ */

/* ── State ── */
let currentLang = 'en';

/* ── Certifications data — grouped by provider ── */
const certGroups = [
  {
    provider: 'Amazon Web Services',
    color: '#FF9900',
    icon: 'fa-brands fa-aws',
    certs: [
      {
        name: 'AWS Solutions Architect Associate',
        badge: 'img/badges/aws-solutions-architect-associate.png',
        type: 'official',
        certId: 'RDX3VXT26MQ4Q0KV',
        url: 'https://www.credly.com/users/aolmedof',
        period: '2022 – 2025',
      },
      {
        name: 'AWS Developer Associate',
        badge: 'img/badges/aws-developer-associate.png',
        type: 'official',
        certId: 'J1SXM1T2VNVQQ5G3',
        url: 'https://www.credly.com/users/aolmedof',
        period: '2023 – 2026',
      },
      {
        name: 'AWS Security Specialty',
        badge: 'img/badges/aws-security-specialty.png',
        type: 'course',
        certId: 'UC-1c680d8c-2513-4d34-ad4d-f11697cb289f',
        url: 'https://www.udemy.com/certificate/UC-1c680d8c-2513-4d34-ad4d-f11697cb289f/',
        period: '2024 – 2027',
      },
      {
        name: 'AWS Machine Learning Specialty',
        badge: 'img/badges/aws-machine-learning-specialty.png',
        type: 'course',
        certId: 'UC-73f20cb8-bf4e-4d27-b024-ec7e075b1db9',
        url: 'https://www.udemy.com/certificate/UC-73f20cb8-bf4e-4d27-b024-ec7e075b1db9/',
        period: '2024 – 2027',
      },
    ],
  },
  {
    provider: 'Google Cloud',
    color: '#4285F4',
    icon: 'fa-brands fa-google',
    certs: [
      {
        name: 'Associate Cloud Engineer',
        badge: 'img/badges/gcp-associate-cloud-engineer.png',
        type: 'course',
        certId: 'UC-b9cd16d8-9227-4657-a63c-4eaf01096698',
        url: 'https://www.udemy.com/certificate/UC-b9cd16d8-9227-4657-a63c-4eaf01096698/',
        period: '2024 – 2027',
      },
      {
        name: 'Professional Cloud Architect',
        badge: 'img/badges/gcp-professional-cloud-architect.png',
        type: 'in-progress',
        certId: null,
        url: null,
        period: null,
      },
      {
        name: 'Professional Cloud Security Engineer',
        badge: 'img/badges/gcp-professional-cloud-security-engineer.png',
        type: 'in-progress',
        certId: null,
        url: null,
        period: null,
      },
    ],
  },
  {
    provider: 'Microsoft Azure',
    color: '#0078D4',
    icon: 'fa-brands fa-microsoft',
    certs: [
      {
        name: 'Azure Administrator Associate',
        badge: 'img/badges/azure-administrator-associate.png',
        type: 'course',
        certId: 'UC-3dd4eac3-ae65-4e23-8c51-291f1b92004f',
        url: 'https://www.udemy.com/certificate/UC-3dd4eac3-ae65-4e23-8c51-291f1b92004f/',
        period: '2024 – 2027',
      },
      {
        name: 'Azure Security Engineer Associate',
        badge: 'img/badges/azure-security-engineer.png',
        type: 'course',
        certId: 'UC-aa8ca393-b567-49bc-889e-5cbbdad66a93',
        url: 'https://www.udemy.com/certificate/UC-aa8ca393-b567-49bc-889e-5cbbdad66a93/',
        period: '2024 – 2027',
      },
    ],
  },
  {
    provider: 'HashiCorp & CNCF',
    color: '#7B42BC',
    icon: 'fa-solid fa-cube',
    certs: [
      {
        name: 'HashiCorp Certified Terraform Associate',
        badge: 'img/badges/terraform-associate.svg',
        type: 'course',
        certId: 'UC-ba1e0139-d0b7-4102-b035-a673edbab9ed',
        url: 'https://www.udemy.com/certificate/UC-ba1e0139-d0b7-4102-b035-a673edbab9ed/',
        period: '2024 – 2027',
      },
      {
        name: 'Certified Kubernetes Administrator (CKA)',
        badge: 'img/badges/cka-kubernetes.png',
        type: 'course',
        certId: 'UC-5f89303c-670d-49ab-ad0b-575676a950b6',
        url: 'https://www.udemy.com/certificate/UC-5f89303c-670d-49ab-ad0b-575676a950b6/',
        period: '2024 – 2027',
      },
    ],
  },
];

/* ── Skills dots ratings ── */
const skillDotRatings = [
  { name: 'AWS',         dots: 5 },
  { name: 'GCP',         dots: 5 },
  { name: 'Azure',       dots: 5 },
  { name: 'Terraform',   dots: 5 },
  { name: 'Kubernetes',  dots: 5 },
  { name: 'CI/CD',       dots: 5 },
  { name: 'Bash / TS',   dots: 5 },
  { name: 'Linux',       dots: 5 },
  { name: 'Docker',      dots: 4 },
  { name: 'Unix',        dots: 4 },
  { name: 'Big Data',    dots: 4 },
  { name: 'KubeFlow',    dots: 4 },
  { name: 'Java',        dots: 4 },
  { name: 'Groovy',      dots: 4 },
  { name: 'SQL',         dots: 4 },
  { name: 'Oracle',      dots: 4 },
  { name: 'Python',      dots: 3 },
  { name: 'SRE',         dots: 3 },
  { name: 'ETL',         dots: 3 },
  { name: 'Agile/Scrum', dots: 3 },
  { name: 'PyTorch',     dots: 3 },
];

/* ── AI Prompt placeholder questions ── */
const aiPlaceholders = {
  en: [
    'How many years of AWS experience does Arturo have?',
    'What certifications does Arturo hold?',
    "Tell me about Arturo's DevOps experience",
    'What cloud platforms has Arturo worked with?',
    'What MLOps tools does Arturo use?',
  ],
  es: [
    '¿Cuántos años de experiencia tiene Arturo en AWS?',
    '¿Qué certificaciones tiene Arturo?',
    'Cuéntame sobre la experiencia DevOps de Arturo',
    '¿Cuántos años de experiencia tiene Arturo en Kubernetes?',
    '¿Con qué plataformas cloud ha trabajado Arturo?',
  ],
};

/* ── Quick suggestion bilingual data ── */
const quickBtnData = {
  years: {
    en: { q: 'How many years of experience does Arturo have?', label: 'Years of experience?' },
    es: { q: '¿Cuántos años de experiencia tiene Arturo?',     label: '¿Años de experiencia?' },
  },
  certs: {
    en: { q: 'What certifications does Arturo have?', label: 'Certifications' },
    es: { q: '¿Qué certificaciones tiene Arturo?',    label: 'Certificaciones' },
  },
  stack: {
    en: { q: 'What is his tech stack?',               label: 'Tech stack' },
    es: { q: '¿Cuál es su stack tecnológico?',        label: 'Tech stack' },
  },
  visa: {
    en: { q: 'Does Arturo have EU work visa?',            label: 'Visa status' },
    es: { q: '¿Tiene Arturo visa de trabajo para la UE?', label: 'Estado de visa' },
  },
};

/* ── Typing Effect ── */
class TypeWriter {
  constructor(el, words) {
    this.el = el;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
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

    let typeSpeed = this.isDeleting ? 40 : 80;
    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.wordIndex++;
      typeSpeed = 300;
    }

    setTimeout(() => this.type(), typeSpeed);
  }

  updateWords(words) {
    this.words = words;
    this.wordIndex = 0;
    this.txt = '';
    this.isDeleting = false;
  }
}

let typeWriterInstance = null;

/* ── Render Functions ── */

function renderNav(t) {
  document.querySelector('[data-i18n="nav.about"]').textContent        = t.nav.about;
  document.querySelector('[data-i18n="nav.experience"]').textContent   = t.nav.experience;
  document.querySelector('[data-i18n="nav.certifications"]').textContent = t.nav.certifications;
  document.querySelector('[data-i18n="nav.skills"]').textContent       = t.nav.skills;
  document.querySelector('[data-i18n="nav.education"]').textContent    = t.nav.education;
  document.querySelector('[data-i18n="nav.contact"]').textContent      = t.nav.contact;
}

function renderHero(t) {
  document.querySelector('[data-i18n="hero.greeting"]').textContent    = t.hero.greeting;
  document.querySelector('[data-i18n="hero.title"]').textContent       = t.hero.title;
  document.querySelector('[data-i18n="hero.subtitle"]').textContent    = t.hero.subtitle;
  document.querySelector('[data-i18n="hero.cta_experience"]').textContent = t.hero.cta_experience;
  document.querySelector('[data-i18n="hero.cta_cv"]').textContent      = t.hero.cta_cv;

  if (typeWriterInstance) {
    typeWriterInstance.updateWords(t.hero.typing_roles);
  }
}

function renderAbout(t) {
  document.querySelector('[data-i18n="about.title"]').textContent       = t.about.title;
  document.querySelector('[data-i18n="about.subtitle"]').textContent    = t.about.subtitle;
  document.querySelector('[data-i18n="about.text"]').textContent        = t.about.text;
  document.querySelector('[data-i18n="about.availability"]').textContent = t.about.availability;
}

function renderExperience(t) {
  document.querySelector('[data-i18n="experience.title"]').textContent    = t.experience.title;
  document.querySelector('[data-i18n="experience.subtitle"]').textContent = t.experience.subtitle;

  const container = document.getElementById('timeline-container');
  container.innerHTML = '';

  t.experience.jobs.forEach((job, i) => {
    const side = i % 2 === 0 ? 'left' : 'right';
    const item = document.createElement('div');
    item.className = `timeline-item ${side}`;
    item.setAttribute('data-aos', 'fade-up');
    item.setAttribute('data-aos-delay', `${i * 100}`);

    const industryTagsHtml = job.industries
      ? `<div class="industry-tags">${job.industries.split(' · ').map(ind => `<span class="industry-tag">${ind}</span>`).join('')}</div>`
      : '';

    item.innerHTML = `
      <div class="timeline-content">
        <div class="timeline-dot"></div>
        <span class="timeline-period">${job.period}</span>
        <h3 class="timeline-role">${job.role}</h3>
        <h4 class="timeline-company">${job.company}</h4>
        ${industryTagsHtml}
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
  document.querySelector('[data-i18n="certifications.title"]').textContent    = t.certifications.title;
  document.querySelector('[data-i18n="certifications.subtitle"]').textContent = t.certifications.subtitle;

  const container = document.getElementById('certs-container');
  container.innerHTML = '';

  const typeLabel = {
    official:    { cls: 'cert-type-official',     icon: 'fa-solid fa-award',          label: t.certifications.type_official },
    course:      { cls: 'cert-type-course',        icon: 'fa-solid fa-graduation-cap', label: t.certifications.type_course },
    'in-progress': { cls: 'cert-type-in-progress', icon: 'fa-solid fa-rotate',        label: t.certifications.type_in_progress },
  };

  certGroups.forEach((group, gi) => {
    const groupEl = document.createElement('div');
    groupEl.className = 'cert-group';
    groupEl.setAttribute('data-aos', 'fade-up');
    groupEl.setAttribute('data-aos-delay', `${gi * 60}`);

    const cards = group.certs.map((cert, ci) => {
      const tl = typeLabel[cert.type];
      const verifyBtn = '';
      const periodHtml = cert.period
        ? `<p class="cert-period"><i class="fa-regular fa-calendar"></i> ${cert.period}</p>`
        : '';
      const certIdHtml = cert.certId
        ? `<p class="cert-id">${cert.certId}</p>`
        : '';

      return `
        <div class="cert-card" data-aos="zoom-in" data-aos-delay="${(ci % 4) * 80}">
          <div class="cert-card-top">
            <img src="${cert.badge}" alt="${cert.name}" class="cert-badge-img" loading="lazy" />
            <div class="cert-info">
              <h4 class="cert-name">${cert.name}</h4>
              ${periodHtml}
              ${certIdHtml}
            </div>
          </div>
          <div class="cert-card-footer">
            <span class="cert-type-badge ${tl.cls}">
              <i class="${tl.icon}"></i> ${tl.label}
            </span>
            ${verifyBtn}
          </div>
        </div>`;
    }).join('');

    groupEl.innerHTML = `
      <div class="cert-group-header">
        <div class="cert-group-icon" style="background:${group.color}18; color:${group.color};">
          <i class="${group.icon}"></i>
        </div>
        <h3 class="cert-group-name">${group.provider}</h3>
      </div>
      <div class="cert-group-cards">${cards}</div>
    `;
    container.appendChild(groupEl);
  });

  if (typeof AOS !== 'undefined') AOS.refresh();
}

function renderSkills(t) {
  document.querySelector('[data-i18n="skills.title"]').textContent    = t.skills.title;
  document.querySelector('[data-i18n="skills.subtitle"]').textContent = t.skills.subtitle;

  // Dots panel
  const dotsPanel = document.getElementById('skills-dots');
  if (dotsPanel) {
    dotsPanel.innerHTML = `
      <div class="skills-dots-panel" data-aos="fade-right">
        <span class="skills-dots-title">${t.skills.proficiency_title || 'Proficiency'}</span>
        ${skillDotRatings.map(s => `
          <div class="skill-dot-row">
            <span class="skill-dot-name">${s.name}</span>
            <div class="skill-dots" data-dots="${s.dots}">
              ${[1,2,3,4,5].map(n => `<span class="skill-dot${n <= s.dots ? ' filled' : ''}"></span>`).join('')}
            </div>
          </div>`).join('')}
      </div>`;
  }

  // Tech grid
  const grid = document.getElementById('skills-grid');
  grid.innerHTML = '';

  t.skills.categories.forEach((cat, i) => {
    const card = document.createElement('div');
    card.className = 'skill-category';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', `${(i % 3) * 80}`);

    card.innerHTML = `
      <h4 class="skill-cat-name" style="color:${cat.color}; border-left:3px solid ${cat.color};">${cat.name}</h4>
      <div class="skill-tags">
        ${cat.items.map(item => `<span class="skill-tag" style="background:${cat.color}18; color:${cat.color}; border:1px solid ${cat.color}44;">${item}</span>`).join('')}
      </div>`;
    grid.appendChild(card);
  });

  if (typeof AOS !== 'undefined') AOS.refresh();
}

function renderEducation(t) {
  document.querySelector('[data-i18n="education.title"]').textContent    = t.education.title;
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
      </div>`;
    grid.appendChild(card);
  });

  if (typeof AOS !== 'undefined') AOS.refresh();
}

function renderContact(t) {
  document.querySelector('[data-i18n="contact.title"]').textContent          = t.contact.title;
  document.querySelector('[data-i18n="contact.subtitle"]').textContent       = t.contact.subtitle;
  document.querySelector('[data-i18n="contact.email_label"]').textContent    = t.contact.email_label;
  document.querySelector('[data-i18n="contact.whatsapp_label"]').textContent = t.contact.whatsapp_label;
  document.querySelector('[data-i18n="contact.form_name"]').placeholder      = t.contact.form_name;
  document.querySelector('[data-i18n="contact.form_email"]').placeholder     = t.contact.form_email;
  document.querySelector('[data-i18n="contact.form_message"]').placeholder   = t.contact.form_message;
  document.querySelector('[data-i18n="contact.form_send"]').textContent      = t.contact.form_send;
}

function renderFooter(t) {
  document.querySelector('[data-i18n="footer.copyright"]').textContent = t.footer.copyright;
  document.querySelector('[data-i18n="footer.built"]').textContent     = t.footer.built;
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
  updateAIPromptBar(lang);
}

/* ── AI Prompt Bar — Bot Integration ── */

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function addUserBubble(text) {
  const history = document.getElementById('chat-history');
  if (!history) return;
  const wrapper = document.createElement('div');
  wrapper.className = 'chat-bubble-wrapper user';
  wrapper.innerHTML = `<div class="chat-bubble chat-bubble-user">${escapeHtml(text)}</div>`;
  history.appendChild(wrapper);
  history.scrollTop = history.scrollHeight;
}

function addThinkingBubble() {
  const history = document.getElementById('chat-history');
  if (!history) return null;
  const wrapper = document.createElement('div');
  wrapper.className = 'chat-bubble-wrapper bot';
  wrapper.innerHTML = `<div class="chat-thinking"><span></span><span></span><span></span></div>`;
  history.appendChild(wrapper);
  history.scrollTop = history.scrollHeight;
  return wrapper;
}

function removeThinkingBubble(el) {
  if (el && el.parentNode) el.parentNode.removeChild(el);
}

function addBotBubble(text, animate) {
  const history = document.getElementById('chat-history');
  if (!history) return;
  const wrapper = document.createElement('div');
  wrapper.className = 'chat-bubble-wrapper bot';
  const bubble = document.createElement('div');
  bubble.className = 'chat-bubble chat-bubble-bot';
  bubble.innerHTML = '<span class="bot-sparkle">✦</span>';
  wrapper.appendChild(bubble);
  history.appendChild(wrapper);
  history.scrollTop = history.scrollHeight;

  if (animate === false) {
    bubble.appendChild(document.createTextNode(text));
    return;
  }

  // Typewriter: 25ms/char
  let i = 0;
  const cursor = document.createElement('span');
  cursor.className = 'cursor-blink';
  bubble.appendChild(cursor);

  function typeChar() {
    if (i < text.length) {
      cursor.insertAdjacentText('beforebegin', text[i]);
      i++;
      history.scrollTop = history.scrollHeight;
      setTimeout(typeChar, 25);
    } else {
      cursor.remove();
    }
  }
  typeChar();
}

function updateRateCounter() {
  const el = document.getElementById('ai-rate-info');
  if (!el || typeof BotEngine === 'undefined') return;
  const remaining = BotEngine.getRemainingCount();
  const max = BotEngine.getMaxCount();
  el.textContent = remaining <= 5
    ? (currentLang === 'es'
        ? `${remaining}/${max} preguntas restantes`
        : `${remaining}/${max} questions remaining`)
    : '';
}

function handleSubmit(query) {
  if (!query || !query.trim()) return;
  if (typeof BotEngine === 'undefined') return;

  const input = document.getElementById('ai-input');
  if (input) input.value = '';

  const limit = BotEngine.checkRateLimit();
  if (!limit.allowed) {
    addUserBubble(query);
    addBotBubble(
      currentLang === 'es'
        ? 'Has alcanzado el límite de preguntas. Recarga la página para continuar.'
        : 'You have reached the question limit. Reload the page to continue.'
    );
    return;
  }

  addUserBubble(query);
  const thinkingEl = addThinkingBubble();

  setTimeout(() => {
    BotEngine.incrementCount();
    const L = BotEngine.detectLanguage(query);
    const response = BotEngine.answer(query, L);
    removeThinkingBubble(thinkingEl);
    addBotBubble(response);
    updateRateCounter();
  }, 600);
}

let aiPlaceholderIndex = 0;
let aiPlaceholderInterval = null;

function updateAIPromptBar(lang) {
  const input = document.getElementById('ai-input');
  if (input) {
    const questions = aiPlaceholders[lang] || aiPlaceholders.en;
    input.placeholder = questions[aiPlaceholderIndex % questions.length];
  }
  const L = lang || 'en';
  document.querySelectorAll('.quick-btn[data-key]').forEach(btn => {
    const key = btn.dataset.key;
    if (quickBtnData[key] && quickBtnData[key][L]) {
      btn.dataset.q    = quickBtnData[key][L].q;
      btn.textContent  = quickBtnData[key][L].label;
    }
  });
}

function setupAIPromptBar() {
  const input   = document.getElementById('ai-input');
  const sendBtn = document.getElementById('ai-send');
  if (!input || !sendBtn) return;

  // Rotate placeholder every 3.5s
  const getQ = () => aiPlaceholders[currentLang] || aiPlaceholders.en;
  aiPlaceholderInterval = setInterval(() => {
    aiPlaceholderIndex = (aiPlaceholderIndex + 1) % getQ().length;
    input.placeholder = getQ()[aiPlaceholderIndex];
  }, 3500);

  sendBtn.addEventListener('click', () => handleSubmit(input.value.trim()));
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') handleSubmit(input.value.trim());
  });

  // Quick suggestion buttons
  document.querySelectorAll('.quick-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const q = btn.dataset.q;
      if (q) handleSubmit(q);
    });
  });

  // Show greeting on load (no rate-limit increment)
  if (typeof BotEngine !== 'undefined') {
    const greeting = BotEngine.answer('hi', currentLang);
    addBotBubble(greeting, false);
  }
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
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('nav-menu');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 80);
  });

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', hamburger.classList.contains('active'));
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ── Active nav on scroll ── */
function setupScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 110) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  });
}

/* ── Canvas particle background ── */
function setupParticles() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const resize = () => {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resize();
  window.addEventListener('resize', resize);

  const particles = Array.from({ length: 60 }, () => ({
    x:     Math.random() * canvas.width,
    y:     Math.random() * canvas.height,
    r:     Math.random() * 1.5 + 0.5,
    dx:    (Math.random() - 0.5) * 0.4,
    dy:    (Math.random() - 0.5) * 0.4,
    alpha: Math.random() * 0.5 + 0.1,
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0 || p.x > canvas.width)  p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(212, 168, 85, ${p.alpha})`;
      ctx.fill();
    });

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
    e.preventDefault();
    showToast(
      currentLang === 'en'
        ? 'CV available soon — contact me directly at arturo.olmedof@hotmail.com'
        : 'CV disponible pronto — contáctame directamente en arturo.olmedof@hotmail.com'
    );
  });
}

/* ── Contact form → mailto ── */
function setupContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name    = form.querySelector('[name="name"]').value.trim();
    const email   = form.querySelector('[name="email"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();
    const subject = `Contact from ${name}`;
    const body    = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    window.location.href = `mailto:arturo.olmedof@hotmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    showToast(
      currentLang === 'en'
        ? "Your email client has opened with a pre-filled message. If it didn't open, email me at arturo.olmedof@hotmail.com"
        : 'Tu cliente de correo se ha abierto con el mensaje listo. Si no funcionó, escríbeme a arturo.olmedof@hotmail.com',
      8000
    );
    form.reset();
  });
}

/* ── Smooth scroll ── */
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
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 700, once: true, offset: 80 });
  }

  const typingEl = document.getElementById('typing-text');
  if (typingEl) {
    typeWriterInstance = new TypeWriter(typingEl, translations[currentLang].hero.typing_roles);
  }

  applyTranslations(currentLang);

  setupLangToggle();
  setupNavbar();
  setupScrollSpy();
  setupParticles();
  setupCVButton();
  setupContactForm();
  setupSmoothScroll();
  setupAIPromptBar();
});
