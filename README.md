# Arturo O. Flores — Personal Portfolio

Personal portfolio website for [arturo.olmedof.com](https://arturo.olmedof.com).

## Tech Stack

- **Vanilla HTML/CSS/JS** — no frameworks, no build step
- **Google Fonts** — Playfair Display + Source Sans Pro
- **Font Awesome 6** — icons via CDN
- **AOS** — Animate on Scroll via CDN
- **Canvas API** — particle network background in hero

## Structure

```
olmedof-web/
├── index.html          # Main single-page site
├── 404.html            # Custom 404 page
├── css/
│   └── styles.css      # All styles with CSS custom properties
├── js/
│   ├── main.js         # App logic, animations, rendering
│   └── translations.js # EN/ES content objects
├── img/                # Profile photo (add photo.jpg)
├── assets/             # Additional assets
└── README.md
```

## Features

- **Bilingual** — EN/ES toggle, full content in both languages
- **Responsive** — mobile-first, CSS Grid/Flexbox
- **Animated** — AOS fade-in on scroll, typing effect, particle canvas
- **Sections** — Navbar, Hero, About, Experience, Certifications, Skills, Education, Contact, Footer
- **Dark theme** — navy `#0a192f` with gold accent `#d4a855`

## Deployment

Designed for **AWS S3 + CloudFront** or any static host.

Set the custom domain `arturo.olmedof.com` with HTTPS via ACM.

## Adding a Profile Photo

Place your photo at `img/photo.jpg` and update the `.about-photo-placeholder` in `index.html`:

```html
<img src="img/photo.jpg" alt="Arturo O. Flores" class="about-photo-img" />
```

---

© 2025 Arturo O. Flores
