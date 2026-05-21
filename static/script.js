// ── Theme engine ───────────────────────────────────────
const themes = {
  // ── Dark themes ──────────────────────────────────────
  'dark-indigo': {
    '--bg':       '#06070e',
    '--surface':  '#0c0d1c',
    '--surface2': '#111228',
    '--border':   'rgba(255,255,255,0.07)',
    '--accent':   '#6366f1',
    '--accent2':  '#818cf8',
    '--blue':     '#3b82f6',
    '--text':     '#f1f5f9',
    '--muted':    '#94a3b8',
    '--dim':      '#475569',
  },
  'dark-emerald': {
    '--bg':       '#020f0a',
    '--surface':  '#041a11',
    '--surface2': '#07261a',
    '--border':   'rgba(255,255,255,0.07)',
    '--accent':   '#10b981',
    '--accent2':  '#34d399',
    '--blue':     '#06b6d4',
    '--text':     '#f0fdf4',
    '--muted':    '#a7f3d0',
    '--dim':      '#6ee7b7',
  },
  'dark-violet': {
    '--bg':       '#0a050f',
    '--surface':  '#130a1e',
    '--surface2': '#1a0f28',
    '--border':   'rgba(255,255,255,0.07)',
    '--accent':   '#8b5cf6',
    '--accent2':  '#a78bfa',
    '--blue':     '#7c3aed',
    '--text':     '#f5f3ff',
    '--muted':    '#c4b5fd',
    '--dim':      '#7c3aed',
  },
  'dark-amber': {
    '--bg':       '#0f0a02',
    '--surface':  '#1a1206',
    '--surface2': '#261c09',
    '--border':   'rgba(255,255,255,0.07)',
    '--accent':   '#f59e0b',
    '--accent2':  '#fbbf24',
    '--blue':     '#f97316',
    '--text':     '#fffbeb',
    '--muted':    '#fde68a',
    '--dim':      '#d97706',
  },
  'dark-cyan': {
    '--bg':       '#020c0f',
    '--surface':  '#04181e',
    '--surface2': '#07242d',
    '--border':   'rgba(255,255,255,0.07)',
    '--accent':   '#06b6d4',
    '--accent2':  '#22d3ee',
    '--blue':     '#0ea5e9',
    '--text':     '#ecfeff',
    '--muted':    '#a5f3fc',
    '--dim':      '#67e8f9',
  },
  'dark-rose': {
    '--bg':       '#0f0205',
    '--surface':  '#1e050b',
    '--surface2': '#2d0812',
    '--border':   'rgba(255,255,255,0.07)',
    '--accent':   '#f43f5e',
    '--accent2':  '#fb7185',
    '--blue':     '#ec4899',
    '--text':     '#fff1f2',
    '--muted':    '#fda4af',
    '--dim':      '#fb7185',
  },

  // ── Light themes ─────────────────────────────────────
  'light-arctic': {
    '--bg':       '#f8fafc',
    '--surface':  '#f1f5f9',
    '--surface2': '#e2e8f0',
    '--border':   'rgba(0,0,0,0.08)',
    '--accent':   '#6366f1',
    '--accent2':  '#4f46e5',
    '--blue':     '#3b82f6',
    '--text':     '#0f172a',
    '--muted':    '#475569',
    '--dim':      '#94a3b8',
  },
  'light-slate': {
    '--bg':       '#f8fafc',
    '--surface':  '#f1f5f9',
    '--surface2': '#e2e8f0',
    '--border':   'rgba(0,0,0,0.08)',
    '--accent':   '#0f766e',
    '--accent2':  '#0d9488',
    '--blue':     '#0284c7',
    '--text':     '#0f172a',
    '--muted':    '#475569',
    '--dim':      '#94a3b8',
  },
  'light-cream': {
    '--bg':       '#fffbf5',
    '--surface':  '#fef3e2',
    '--surface2': '#fde8c8',
    '--border':   'rgba(0,0,0,0.08)',
    '--accent':   '#d97706',
    '--accent2':  '#b45309',
    '--blue':     '#f97316',
    '--text':     '#1c1917',
    '--muted':    '#57534e',
    '--dim':      '#a8a29e',
  },
  'light-lavender': {
    '--bg':       '#faf5ff',
    '--surface':  '#f3e8ff',
    '--surface2': '#e9d5ff',
    '--border':   'rgba(0,0,0,0.08)',
    '--accent':   '#7c3aed',
    '--accent2':  '#6d28d9',
    '--blue':     '#a21caf',
    '--text':     '#3b0764',
    '--muted':    '#6b21a8',
    '--dim':      '#a855f7',
  },
  'light-paper': {
    '--bg':       '#fafaf9',
    '--surface':  '#f5f5f4',
    '--surface2': '#e7e5e4',
    '--border':   'rgba(0,0,0,0.08)',
    '--accent':   '#1d4ed8',
    '--accent2':  '#1e40af',
    '--blue':     '#2563eb',
    '--text':     '#1c1917',
    '--muted':    '#44403c',
    '--dim':      '#a8a29e',
  },
  'light-rose': {
    '--bg':       '#fff1f2',
    '--surface':  '#ffe4e6',
    '--surface2': '#fecdd3',
    '--border':   'rgba(0,0,0,0.08)',
    '--accent':   '#e11d48',
    '--accent2':  '#be123c',
    '--blue':     '#f43f5e',
    '--text':     '#1c1917',
    '--muted':    '#44403c',
    '--dim':      '#a8a29e',
  },
}

function applyTheme(name) {
  const theme = themes[name] || themes['dark-indigo']
  const root = document.documentElement
  Object.entries(theme).forEach(([prop, val]) => root.style.setProperty(prop, val))
}

// ── Icon helper — references SVG sprite in index.html ─
function icon(id, size = 20) {
  return `<svg width="${size}" height="${size}"><use href="#icon-${id}"/></svg>`
}

function iconFor(name) {
  const map = { github: 'github', linkedin: 'linkedin', twitter: 'twitter', x: 'twitter', email: 'email' }
  return icon(map[name.toLowerCase()] || 'email')
}

// ── Render ─────────────────────────────────────────────
function render(data) {
  const { person, social, home, stats, about, projects } = data

  // Nav logo + footer name
  const brandName = `${person.handle}<span>.</span>`
  document.getElementById('nav-logo').innerHTML = brandName
  document.getElementById('footer-name').innerHTML = brandName
  document.title = `${person.firstName} ${person.lastName} — ${person.role}`

  // Hero
  document.getElementById('hero-title').innerHTML =
    `${home.headline}<br><span class="gradient-text">${home.headlineAccent}</span>`
  document.getElementById('hero-role').textContent = home.role
  document.getElementById('hero-desc').textContent = home.description
  document.getElementById('hero-stack').innerHTML =
    home.stack.map(s => `<span>${s}</span>`).join('')

  // Stats bar
  document.getElementById('stats-bar').innerHTML = stats.map((s, i) => `
    ${i > 0 ? '<div class="stat-divider"></div>' : ''}
    <div class="stat">
      <span class="stat-num">${s.value}</span>
      <span class="stat-label">${s.label}</span>
    </div>`).join('')

  // About — bio + social links
  const emailSocial = social.find(s => s.name === 'Email')
  document.getElementById('about-text').innerHTML = `
    ${about.bio.map(p => `<p>${p}</p>`).join('')}
    <div class="about-social">
      ${social.map(s => `
        <a href="${s.link}" target="${s.name === 'Email' ? '_self' : '_blank'}" class="social-pill">
          ${iconFor(s.name)} ${s.name}
        </a>`).join('')}
    </div>`

  // About — info card
  document.getElementById('about-card').innerHTML = `
    <div class="about-card-item">
      <span class="card-label">Location</span>
      <span class="card-value">${person.location}</span>
    </div>
    <div class="about-card-item">
      <span class="card-label">Email</span>
      <a href="mailto:${person.email}" class="card-value card-link">${person.email}</a>
    </div>
    <div class="about-card-item">
      <span class="card-label">Phone</span>
      <span class="card-value">${person.phone}</span>
    </div>
    <div class="about-card-item">
      <span class="card-label">Languages</span>
      <span class="card-value">${person.languages.join(' · ')}</span>
    </div>
    <div class="about-card-item">
      <span class="card-label">Education</span>
      <span class="card-value">${person.education}</span>
    </div>
    <div class="about-card-item">
      <span class="card-label">Status</span>
      <span class="card-value card-available">Open to work</span>
    </div>
    <a href="mailto:${person.email}" class="btn btn-primary btn-block">Let's Work Together →</a>
    ${person.freelancer ? `<a href="${person.freelancer}" target="_blank" class="btn btn-outline btn-block">Hire on Freelancer →</a>` : ''}`

  // Skills
  document.getElementById('skills-grid').innerHTML = about.skills.map(skill => `
    <div class="skill-card reveal">
      <div class="skill-icon">${icon(skill.icon, 22)}</div>
      <div class="skill-info">
        <h3>${skill.title}</h3>
        <div class="skill-tags">${skill.tags.map(t => `<span>${t}</span>`).join('')}</div>
      </div>
    </div>`).join('')

  // Experience
  document.getElementById('experience-timeline').innerHTML = about.experience.map(job => `
    <div class="timeline-item reveal">
      <div class="timeline-meta">
        <span class="timeline-period">${job.period}</span>
        ${job.current ? '<span class="timeline-badge">Current</span>' : ''}
      </div>
      <div class="timeline-card">
        <h3 class="job-title">${job.role}</h3>
        <p class="job-company">${job.company}${job.location ? ' · ' + job.location : ''}</p>
        ${job.note ? `<p class="job-note">${job.note}</p>` : ''}
        ${job.bullets.length ? `<ul class="job-bullets">${job.bullets.map(b => `<li>${b}</li>`).join('')}</ul>` : ''}
      </div>
    </div>`).join('')

  // Projects
  document.getElementById('projects-grid').innerHTML = projects.map(p => {
    const links = [
      p.live   ? `<a href="${p.live}"   target="_blank" class="project-link" title="Live">${icon('external', 14)}</a>` : '',
      p.github ? `<a href="${p.github}" target="_blank" class="project-link" title="GitHub">${icon('github', 14)}</a>` : '',
    ].join('')
    return `
    <div class="project-card reveal">
      <div class="project-header">
        <div class="project-icon">${icon(p.icon, 24)}</div>
        <div class="project-links">${links}</div>
      </div>
      <h3 class="project-name">${p.name}</h3>
      <p class="project-desc">${p.description}</p>
      <div class="project-tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
    </div>`
  }).join('')

  // Contact
  const contactValues = {
    GitHub: 'gugupy',
    LinkedIn: 'gughanathan-m',
    X: '@ManiGughan',
    Email: person.email,
  }
  document.getElementById('contact-grid').innerHTML = social.map(s => `
    <a href="${s.link}" target="${s.name === 'Email' ? '_self' : '_blank'}" class="contact-card">
      <div class="contact-icon">${iconFor(s.name)}</div>
      <div>
        <p class="contact-card-label">${s.name}</p>
        <p class="contact-card-value">${contactValues[s.name] || s.link}</p>
      </div>
    </a>`).join('')

  document.getElementById('contact-email-btn').href = `mailto:${person.email}`

  // Footer links
  document.getElementById('footer-links').innerHTML = social.map(s => `
    <a href="${s.link}" target="${s.name === 'Email' ? '_self' : '_blank'}">${s.name}</a>`).join('')

  // Nav hire button
  document.querySelector('.nav-hire').href = `mailto:${person.email}`

  // Observe newly injected .reveal elements
  document.querySelectorAll('.reveal:not(.observed)').forEach(el => {
    el.classList.add('observed')
    revealObserver.observe(el)
  })
}

// ── Scroll reveal ──────────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80)
      revealObserver.unobserve(entry.target)
    }
  })
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' })

// ── Navbar scroll effect ───────────────────────────────
const navbar = document.getElementById('navbar')
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20)
}, { passive: true })

// ── Mobile nav toggle ──────────────────────────────────
const toggle = document.querySelector('.nav-toggle')
const mobileNav = document.querySelector('.nav-mobile')
toggle?.addEventListener('click', () => mobileNav.classList.toggle('open'))
mobileNav?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => mobileNav.classList.remove('open'))
})

// ── Smooth scroll ──────────────────────────────────────
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]')
  if (!a) return
  const target = document.querySelector(a.getAttribute('href'))
  if (!target) return
  e.preventDefault()
  target.scrollIntoView({ behavior: 'smooth', block: 'start' })
})

// ── GSAP animations ────────────────────────────────────
function initAnimations() {
  if (typeof gsap === 'undefined') return

  gsap.registerPlugin(ScrollTrigger)

  // Hero entrance — stagger each element in sequence
  gsap.fromTo(
    ['.hero-badge', '#hero-title', '#hero-role', '#hero-desc', '.hero-actions', '#hero-stack'],
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out', delay: 0.2 }
  )

  // Section headers slide up on scroll
  document.querySelectorAll('.section-header').forEach(header => {
    gsap.fromTo(
      header,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: header, start: 'top 88%', once: true }
      }
    )
  })

  // Stat numbers count up
  document.querySelectorAll('.stat-num').forEach(el => {
    const raw = el.textContent.replace(/[^0-9]/g, '')
    const suffix = el.textContent.replace(/[0-9]/g, '')
    if (!raw) return
    const end = parseInt(raw, 10)
    const proxy = { val: 0 }
    gsap.fromTo(
      proxy,
      { val: 0 },
      {
        val: end, duration: 1.6, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        onUpdate() { el.textContent = Math.round(proxy.val) + suffix }
      }
    )
  })

  // Timeline items slide in from left
  gsap.fromTo(
    '.timeline-item',
    { opacity: 0, x: -30 },
    {
      opacity: 1, x: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out',
      scrollTrigger: { trigger: '.timeline', start: 'top 80%', once: true }
    }
  )

  // Pinned horizontal scroll for projects
  const projectsSection = document.getElementById('projects')
  const projectsGrid = document.getElementById('projects-grid')

  if (projectsSection && projectsGrid) {
    const getScrollDist = () => projectsGrid.scrollWidth - window.innerWidth

    gsap.to(projectsGrid, {
      x: () => -getScrollDist(),
      ease: 'none',
      scrollTrigger: {
        trigger: projectsSection,
        start: 'top top',
        end: () => '+=' + getScrollDist(),
        scrub: 1,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onToggle: self => {
          projectsSection.style.overflow = self.isActive ? 'hidden' : ''
        }
      }
    })
  }
}

// ── Boot ───────────────────────────────────────────────
fetch('./data.json')
  .then(r => r.json())
  .then(data => {
    applyTheme(data.theme.active)
    render(data)
    // Observe static .reveal elements (section headers etc.)
    document.querySelectorAll('.reveal:not(.observed)').forEach(el => {
      el.classList.add('observed')
      revealObserver.observe(el)
    })
    // Init GSAP after render so all elements exist in the DOM
    initAnimations()
  })
