// ── Theme engine ───────────────────────────────────────
// Two independent choices: mode (light / dark / system) and accent.
// Colours live in styles.css; JS only sets data attributes on <html>.
const ACCENTS = {
  python: { label: 'Python blue', light: '#2f6ea5', dark: '#7db4e6' },
  teal:   { label: 'Teal',        light: '#0f766e', dark: '#4fd1c0' },
  forest: { label: 'Forest',      light: '#3d6b35', dark: '#9ccc8a' },
  indigo: { label: 'Indigo',      light: '#4f46e5', dark: '#a5a8ff' },
  violet: { label: 'Violet',      light: '#7c3aed', dark: '#c4a5ff' },
  amber:  { label: 'Amber',       light: '#b45309', dark: '#f6b94a' },
  rose:   { label: 'Rose',        light: '#be123c', dark: '#ff8fa3' },
}

// Old theme names from data.json still work
const LEGACY_THEMES = {
  'dark-indigo': ['dark', 'indigo'],   'light-arctic':   ['light', 'indigo'],
  'dark-emerald': ['dark', 'teal'],    'light-slate':    ['light', 'teal'],
  'dark-violet': ['dark', 'violet'],   'light-lavender': ['light', 'violet'],
  'dark-amber': ['dark', 'amber'],     'light-cream':    ['light', 'amber'],
  'dark-cyan': ['dark', 'python'],     'light-paper':    ['light', 'python'],
  'dark-rose': ['dark', 'rose'],       'light-rose':     ['light', 'rose'],
}

const STORAGE_KEY = 'gugupy-theme'
const root = document.documentElement
const darkQuery = matchMedia('(prefers-color-scheme: dark)')
const theme = { mode: 'system', accent: 'python' }

function loadSaved() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') } catch { return {} }
}
function save() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(theme)) } catch {}
}

// Animated version for user-triggered changes: cross-fades the whole page
function switchTheme() {
  const calm = matchMedia('(prefers-reduced-motion: reduce)').matches
  if (document.startViewTransition && !calm) document.startViewTransition(applyTheme)
  else applyTheme()
}

function applyTheme() {
  const dark = theme.mode === 'dark' || (theme.mode === 'system' && darkQuery.matches)
  root.dataset.mode = dark ? 'dark' : 'light'
  root.dataset.accent = theme.accent
  syncThemeControls()
}

function initTheme(config = {}) {
  // Site default from data.json, then the visitor's own saved choice wins
  if (config.active && LEGACY_THEMES[config.active]) {
    const [mode, accent] = LEGACY_THEMES[config.active]
    Object.assign(theme, { mode, accent })
  }
  if (config.mode) theme.mode = config.mode
  if (config.accent && ACCENTS[config.accent]) theme.accent = config.accent

  const saved = loadSaved()
  if (['light', 'dark', 'system'].includes(saved.mode)) theme.mode = saved.mode
  if (ACCENTS[saved.accent]) theme.accent = saved.accent
  applyTheme()
}

darkQuery.addEventListener('change', () => theme.mode === 'system' && applyTheme())

// ── Theme panel UI ─────────────────────────────────────
const themeBtn = document.getElementById('theme-btn')
const themePanel = document.getElementById('theme-panel')
const modeGroup = document.getElementById('mode-group')
const accentGroup = document.getElementById('accent-group')

accentGroup.innerHTML = Object.entries(ACCENTS).map(([key, a]) =>
  `<button class="swatch" data-accent="${key}" aria-label="${a.label}" title="${a.label}"></button>`
).join('') + '<p class="accent-name" id="accent-name" aria-live="polite"></p>'
accentGroup.style.gridTemplateColumns = `repeat(${Object.keys(ACCENTS).length}, 1fr)`
document.getElementById('accent-name').style.gridColumn = '1 / -1'

function syncThemeControls() {
  const shade = root.dataset.mode === 'dark' ? 'dark' : 'light'
  modeGroup.querySelectorAll('button').forEach(b =>
    b.setAttribute('aria-pressed', b.dataset.mode === theme.mode))
  accentGroup.querySelectorAll('.swatch').forEach(b => {
    b.style.setProperty('--swatch', ACCENTS[b.dataset.accent][shade])
    b.setAttribute('aria-pressed', b.dataset.accent === theme.accent)
  })
  document.getElementById('accent-name').textContent = ACCENTS[theme.accent].label
}

modeGroup.addEventListener('click', e => {
  const b = e.target.closest('button[data-mode]')
  if (!b) return
  theme.mode = b.dataset.mode
  save(); switchTheme()
})
accentGroup.addEventListener('click', e => {
  const b = e.target.closest('button[data-accent]')
  if (!b) return
  theme.accent = b.dataset.accent
  save(); switchTheme()
})

function setPanel(open) {
  themePanel.hidden = !open
  themeBtn.setAttribute('aria-expanded', open)
  if (open) setMenu(false)
}
themeBtn.addEventListener('click', () => setPanel(themePanel.hidden))
document.addEventListener('click', e => {
  if (!themePanel.hidden && !e.target.closest('.theme-menu')) setPanel(false)
})

// ── Mobile nav ─────────────────────────────────────────
const navbar = document.getElementById('navbar')
const toggle = document.querySelector('.nav-toggle')
const mobileNav = document.getElementById('nav-mobile')

function setMenu(open) {
  mobileNav.hidden = !open
  toggle.setAttribute('aria-expanded', open)
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu')
  navbar.classList.toggle('menu-open', open)
  if (open) { themePanel.hidden = true; themeBtn.setAttribute('aria-expanded', false) }
}
toggle.addEventListener('click', () => setMenu(mobileNav.hidden))
mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)))

document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return
  if (!themePanel.hidden) { setPanel(false); themeBtn.focus() }
  if (!mobileNav.hidden) { setMenu(false); toggle.focus() }
})

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 12)
}, { passive: true })

// ── Helpers ────────────────────────────────────────────
const SPRITE = './static/icons.svg'
function icon(id, size = 20) {
  return `<svg width="${size}" height="${size}" aria-hidden="true"><use href="${SPRITE}#icon-${id}"/></svg>`
}
function iconFor(name) {
  const map = { github: 'github', linkedin: 'linkedin', twitter: 'twitter', x: 'twitter', email: 'email' }
  return icon(map[name.toLowerCase()] || 'email')
}
function linkAttrs(s) {
  return s.name === 'Email' ? '' : 'target="_blank" rel="noopener"'
}
// "github.com/gugupy" style display values derived from the link itself
function prettyLink(s) {
  if (s.link.startsWith('mailto:')) return s.link.slice(7)
  try {
    const u = new URL(s.link)
    return (u.hostname.replace(/^www\./, '') + u.pathname).replace(/\/$/, '')
  } catch { return s.link }
}

// Escape plain text from data.json before it goes into innerHTML
function esc(s = '') {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])
}

// Projects in display order: "order" 1..N, anything without a number goes last
function sortProjects(projects) {
  return [...projects].sort((a, b) => (a.order ?? Infinity) - (b.order ?? Infinity))
}
function projectUrl(p) {
  return `./project.html?p=${encodeURIComponent(p.slug)}`
}

// ── Render ─────────────────────────────────────────────
// Logo, footer and other bits shared by every page
function renderShared({ person, social }) {
  // Logo: punctuation (".", "_") is drawn in the accent colour — e.g. __gugu__ or gugu.py
  const logo = person.logo || person.handle
  const logoHtml = logo.replace(/[._]+/g, m => `<span class="logo-dot">${m}</span>`)
  document.getElementById('nav-logo').innerHTML = logoHtml
  document.getElementById('footer-name').innerHTML = logoHtml
  document.getElementById('footer-year').textContent = new Date().getFullYear()
  document.getElementById('footer-links').innerHTML = social.map(s =>
    `<a href="${s.link}" ${linkAttrs(s)}>${s.name}</a>`).join('')
}

function render(data) {
  const { person, social, home, stats, about, projects } = data

  renderShared(data)
  document.title = `${person.firstName} ${person.lastName} — ${person.role}`

  // Hero
  document.getElementById('hero-name').innerHTML =
    `<span class="name-line"><span>${person.firstName}</span></span> <span class="name-line"><span>${person.lastName}</span></span>`
  document.getElementById('hero-role').textContent = home.role
  const pitch = `${home.headline} ${home.headlineAccent}`.toLowerCase()
  document.getElementById('hero-pitch').textContent = pitch.charAt(0).toUpperCase() + pitch.slice(1) + '.'
  document.getElementById('hero-desc').textContent = home.description
  document.getElementById('hero-stack').innerHTML = home.stack.map(s => `<li>${s}</li>`).join('')
  document.getElementById('hero-photo').alt = `Portrait of ${person.firstName} ${person.lastName}`
  document.getElementById('hero-caption').innerHTML =
    `${icon('pin', 16)}<span>Based in <strong>${person.location}</strong>, working remotely</span>`

  // Stats (dt/dd inside a <dl>; CSS shows the number first)
  document.getElementById('stats-bar').innerHTML = stats.map(s => `
    <div class="stat"><dt>${s.label}</dt><dd data-count="${s.value}">${s.value}</dd></div>`).join('')

  // About
  document.getElementById('about-text').innerHTML = `
    ${about.bio.map(p => `<p>${p}</p>`).join('')}
    <div class="about-social">
      ${social.map(s => `<a href="${s.link}" ${linkAttrs(s)} class="social-pill">${iconFor(s.name)}${s.name}</a>`).join('')}
    </div>`

  const facts = [
    ['Location', person.location],
    ['Email', `<a href="mailto:${person.email}">${person.email}</a>`],
    ['Phone', `<a href="tel:${person.phone.replace(/\s/g, '')}">${person.phone}</a>`],
    ['Languages', person.languages.join(', ')],
    ['Education', person.education],
    ['Status', '<span class="fact-available">Open to work</span>'],
  ]
  document.getElementById('about-card').innerHTML = `
    <dl>${facts.map(([k, v]) => `<div class="fact"><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>
    <a href="mailto:${person.email}" class="btn btn-primary btn-block">Start a conversation</a>
    ${person.freelancer ? `<a href="${person.freelancer}" target="_blank" rel="noopener" class="btn btn-ghost btn-block">Hire me on Freelancer</a>` : ''}`

  // Skills
  document.getElementById('skills-grid').innerHTML = about.skills.map(skill => `
    <div class="skill">
      <div class="skill-icon">${icon(skill.icon, 20)}</div>
      <h3>${skill.title}</h3>
      <p>${skill.tags.join(', ')}</p>
    </div>`).join('')

  // Experience — data.json lists newest first; show the career from the start to now
  const careerOrder = [...about.experience].reverse()
  document.getElementById('experience-timeline').innerHTML = careerOrder.map(job => `
    <li class="job${job.current || /present/i.test(job.period) ? ' current' : ''}">
      <div class="job-when">
        <span class="job-period">${job.period}</span>
        ${job.current || /present/i.test(job.period) ? '<span class="job-badge">Current</span>' : ''}
      </div>
      <div class="job-rail" aria-hidden="true"></div>
      <div class="job-body">
        <h3 class="job-title">${job.role}</h3>
        <p class="job-company">${job.company}${job.location ? ` <span>· ${job.location}</span>` : ''}</p>
        ${job.note ? `<p class="job-note">${job.note}</p>` : ''}
        ${job.bullets.length ? `<ul class="job-bullets">${job.bullets.map(b => `<li>${b}</li>`).join('')}</ul>` : ''}
      </div>
    </li>`).join('')

  // Projects — sorted by "order" (1..N); only the first PROJECTS_VISIBLE show until "Show more"
  const PROJECTS_VISIBLE = 6
  const sortedProjects = sortProjects(projects)
  document.getElementById('projects-grid').innerHTML = sortedProjects.map((p, i) => {
    const links = [
      p.live   ? `<a href="${p.live}" target="_blank" rel="noopener">${icon('external', 15)}Visit<span class="sr-only"> ${p.name}</span></a>` : '',
      p.github ? `<a href="${p.github}" target="_blank" rel="noopener">${icon('github', 15)}Source<span class="sr-only"> for ${p.name}</span></a>` : '',
      p.slug   ? `<span class="project-more" aria-hidden="true">Overview${icon('arrow-right', 15)}</span>` : '',
    ].join('')
    // The name links to the overview page and stretches over the whole card
    const name = p.slug ? `<a href="${projectUrl(p)}" class="project-card-link">${p.name}</a>` : p.name
    return `
    <article class="project${p.slug ? ' has-page' : ''}"${i >= PROJECTS_VISIBLE ? ' hidden' : ''}>
      <div class="project-icon">${icon(p.icon, 22)}</div>
      <h3 class="project-name">${name}</h3>
      <p class="project-desc">${p.description}</p>
      <ul class="project-tags">${p.tags.map(t => `<li${t === 'Hobby' ? ' class="tag-hobby"' : ''}>${t}</li>`).join('')}</ul>
      ${links ? `<div class="project-links">${links}</div>` : ''}
    </article>`
  }).join('')

  const moreBtn = document.getElementById('projects-more')
  const extraCount = sortedProjects.length - PROJECTS_VISIBLE
  if (extraCount > 0) {
    moreBtn.hidden = false
    const setLabel = expanded => {
      moreBtn.textContent = expanded ? 'Show less' : `Show more (${extraCount})`
      moreBtn.setAttribute('aria-expanded', expanded)
    }
    setLabel(false)
    moreBtn.addEventListener('click', () => {
      const expanded = moreBtn.getAttribute('aria-expanded') !== 'true'
      document.querySelectorAll('#projects-grid .project').forEach((el, i) => {
        if (i >= PROJECTS_VISIBLE) el.hidden = !expanded
      })
      setLabel(expanded)
      if (!expanded) document.getElementById('projects').scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  } else {
    moreBtn.hidden = true
  }

  // Contact
  const mailto = `mailto:${person.email}`
  const emailLink = document.getElementById('contact-email')
  emailLink.href = mailto
  emailLink.textContent = person.email
  document.getElementById('contact-email-btn').href = mailto
  initCopyEmail(person.email)

  // Email already has its own panel, so list the other channels here
  const channels = social.filter(s => s.name !== 'Email')
  if (person.freelancer) channels.push({ name: 'Freelancer', link: person.freelancer, icon: 'briefcase' })
  document.getElementById('contact-links').innerHTML = channels.map(s => `
    <li>
      <a href="${s.link}" target="_blank" rel="noopener" class="contact-link">
        <span class="contact-icon">${s.icon ? icon(s.icon) : iconFor(s.name)}</span>
        <span class="contact-link-text">
          <span class="contact-link-name">${s.name}</span>
          <span class="contact-link-value">${prettyLink(s)}</span>
        </span>
        <span class="contact-link-go">${icon('external', 15)}<span class="sr-only">(opens in a new tab)</span></span>
      </a>
    </li>`).join('')

  initLocalTime(person.timezone || 'Asia/Kolkata')
}

// ── Project overview page (project.html?p=<slug>) ──────
function renderProject(data) {
  const { person } = data
  renderShared(data)

  // Mark "Projects" as the current section in the nav
  document.querySelectorAll('.nav-links a[href="./#projects"], .nav-mobile a[href="./#projects"]')
    .forEach(a => { a.classList.add('active'); a.setAttribute('aria-current', 'page') })

  const page = document.getElementById('project-page')
  const all = sortProjects(data.projects).filter(p => p.slug)
  const slug = new URLSearchParams(location.search).get('p')
  const index = all.findIndex(p => p.slug === slug)
  const p = all[index]

  if (!p) {
    document.title = `Project not found — ${person.firstName} ${person.lastName}`
    page.innerHTML = `
      <div class="container pd-missing">
        <h1 class="section-title">That project doesn't exist</h1>
        <p>It may have been renamed or removed.</p>
        <a href="./#projects" class="btn btn-primary">${icon('arrow-left', 16)}See all projects</a>
      </div>`
    return
  }

  document.title = `${p.name} — ${person.firstName} ${person.lastName}`
  document.querySelector('meta[name="description"]')?.setAttribute('content', p.tagline || p.description)

  const overview = p.overview?.length ? p.overview : [p.description]
  const actions = [
    p.live   ? `<a href="${esc(p.live)}" target="_blank" rel="noopener" class="btn btn-primary">${icon('external', 16)}Visit ${esc(p.name)}</a>` : '',
    p.github ? `<a href="${esc(p.github)}" target="_blank" rel="noopener" class="btn btn-ghost">${icon('github', 16)}View source</a>` : '',
  ].join('')

  const snippet = p.snippet ? `
    <figure class="pd-terminal">
      <figcaption>
        <span class="pd-terminal-dots" aria-hidden="true"><i></i><i></i><i></i></span>
        <span>${esc(p.snippet.title || 'Terminal')}</span>
      </figcaption>
      <pre><code>${esc(p.snippet.code).replace(/(^|\s)(#.*)$/gm, '$1<span class="pd-comment">$2</span>')}</code></pre>
    </figure>` : ''

  // Hero visual: cover image if there is one, otherwise the code snippet, otherwise a large icon tile
  let visual
  if (p.cover) visual = `<figure class="pd-cover"><img src="./${esc(p.cover)}" alt="${esc(p.name)} preview" /></figure>`
  else if (snippet) visual = snippet
  else visual = `<div class="pd-emblem" aria-hidden="true">${icon(p.icon, 72)}</div>`
  const snippetInBody = p.cover && snippet

  const facts = [
    ...(p.facts || []),
    ...(p.live ? [['Website', `<a href="${esc(p.live)}" target="_blank" rel="noopener">${esc(prettyLink({ link: p.live }))}</a>`]] : []),
    ...(p.github ? [['Source', `<a href="${esc(p.github)}" target="_blank" rel="noopener">${esc(prettyLink({ link: p.github }).replace(/\.git$/, ''))}</a>`]] : []),
  ]

  const neighbour = (p2, dir) => p2 ? `
    <a href="${projectUrl(p2)}" class="pd-next pd-next-${dir}">
      <span class="pd-next-label">${dir === 'prev' ? icon('arrow-left', 15) + 'Previous' : 'Next' + icon('arrow-right', 15)}</span>
      <span class="pd-next-name">${esc(p2.name)}</span>
      <span class="pd-next-tagline">${esc(p2.tagline || '')}</span>
    </a>` : '<span></span>'

  // Compact previous/next buttons beside "All projects"
  const step = (p2, dir) => {
    const label = dir === 'prev' ? 'Previous' : 'Next'
    const inner = dir === 'prev' ? `${icon('arrow-left', 16)}<span>${label}</span>` : `<span>${label}</span>${icon('arrow-right', 16)}`
    return p2
      ? `<a href="${projectUrl(p2)}" class="pd-step" rel="${dir}" title="${label}: ${esc(p2.name)}" aria-label="${label} project: ${esc(p2.name)}">${inner}</a>`
      : `<span class="pd-step is-disabled" aria-hidden="true">${inner}</span>`
  }

  page.innerHTML = `
    <header class="pd-hero">
      <div class="container">
        <div class="pd-topbar">
          <a href="./#projects" class="pd-back">${icon('arrow-left', 16)}All projects</a>
          <nav class="pd-stepper" aria-label="Previous and next project">
            ${step(all[index - 1], 'prev')}
            ${step(all[index + 1], 'next')}
          </nav>
        </div>
        <div class="pd-hero-grid">
          <div class="pd-hero-copy">
            <p class="pd-eyebrow">
              <span class="project-icon">${icon(p.icon, 22)}</span>
              <span>Project ${String(index + 1).padStart(2, '0')} <span class="pd-of">/ ${String(all.length).padStart(2, '0')}</span></span>
            </p>
            <h1 class="pd-title">${esc(p.name)}</h1>
            ${p.tagline ? `<p class="pd-tagline">${esc(p.tagline)}</p>` : ''}
            <ul class="project-tags pd-tags">${p.tags.map(t => `<li${t === 'Hobby' ? ' class="tag-hobby"' : ''}>${esc(t)}</li>`).join('')}</ul>
            ${actions ? `<div class="pd-actions">${actions}</div>` : ''}
          </div>
          <div class="pd-visual">${visual}</div>
        </div>
      </div>
    </header>

    <section class="pd-body">
      <div class="container pd-body-grid">
        <div class="pd-main">
          <h2 class="pd-h2">Overview</h2>
          <div class="pd-overview">${overview.map(t => `<p>${esc(t)}</p>`).join('')}</div>
          ${snippetInBody ? `<h2 class="pd-h2">${esc(p.snippet.title || 'Try it')}</h2>${snippet}` : ''}
        </div>
        ${facts.length ? `
        <aside class="about-card pd-facts" aria-label="At a glance">
          <p class="pd-facts-title">At a glance</p>
          <dl>${facts.map(([k, v]) => `<div class="fact"><dt>${esc(k)}</dt><dd>${/^<a /.test(v) ? v : esc(v)}</dd></div>`).join('')}</dl>
        </aside>` : ''}
      </div>
    </section>

    ${p.features?.length ? `
    <section class="pd-features-wrap section-alt">
      <div class="container">
        <h2 class="section-title">What it does</h2>
        <ol class="pd-features">
          ${p.features.map((f, i) => `
          <li class="pd-feature">
            <span class="pd-feature-num">${String(i + 1).padStart(2, '0')}</span>
            <h3>${esc(f.title)}</h3>
            <p>${esc(f.text)}</p>
          </li>`).join('')}
        </ol>
      </div>
    </section>` : ''}

    <nav class="pd-pager" aria-label="More projects">
      <div class="container pd-pager-grid">
        ${neighbour(all[index - 1], 'prev')}
        ${neighbour(all[index + 1], 'next')}
      </div>
    </nav>`
}

// ── Contact helpers ────────────────────────────────────
// Copy button works even when the visitor has no mail app set up
function initCopyEmail(email) {
  const btn = document.getElementById('copy-email')
  const label = btn.querySelector('span')
  const iconUse = btn.querySelector('use')
  const status = document.getElementById('copy-status')
  let timer

  btn.addEventListener('click', async () => {
    let ok = false
    try {
      await navigator.clipboard.writeText(email)
      ok = true
    } catch {
      // Fallback for older browsers / non-secure contexts
      const ta = Object.assign(document.createElement('textarea'), { value: email })
      ta.style.cssText = 'position:fixed;opacity:0'
      document.body.appendChild(ta); ta.select()
      try { ok = document.execCommand('copy') } catch {}
      ta.remove()
    }
    btn.classList.toggle('copied', ok)
    label.textContent = ok ? 'Copied' : 'Copy'
    iconUse.setAttribute('href', SPRITE + (ok ? '#icon-check' : '#icon-copy'))
    status.textContent = ok ? 'Email address copied to your clipboard.' : 'Couldn’t copy. Select the address and copy it manually.'
    clearTimeout(timer)
    timer = setTimeout(() => {
      btn.classList.remove('copied')
      label.textContent = 'Copy'
      iconUse.setAttribute('href', SPRITE + '#icon-copy')
      status.textContent = ''
    }, 2500)
  })
}

// "4:12 PM in India" — tells visitors in other time zones when to expect a reply
function initLocalTime(timeZone) {
  const el = document.getElementById('local-time')
  let fmt
  try {
    fmt = new Intl.DateTimeFormat('en-US', { timeZone, hour: 'numeric', minute: '2-digit' })
  } catch { return }
  const tick = () => { el.textContent = `${fmt.format(new Date())} IST` }
  tick()
  setInterval(tick, 30_000)
}

// ── Career timeline pointer ────────────────────────────
// A pointer travels down the timeline as you scroll, filling the line behind it
// and lighting up each job it passes. On reaching the current job it stops and blinks.
function initTimelinePointer() {
  const list = document.getElementById('experience-timeline')
  const jobs = [...list.querySelectorAll('.job')]
  if (!jobs.length) return

  // Wrap the <ol> so the pointer lives outside the list (keeps the HTML valid)
  const wrap = Object.assign(document.createElement('div'), { className: 'tl-wrap tl-on' })
  list.before(wrap)
  wrap.append(list)
  const fill = Object.assign(document.createElement('div'), { className: 'tl-fill' })
  const pointer = Object.assign(document.createElement('div'), { className: 'tl-pointer' })
  fill.setAttribute('aria-hidden', 'true')
  pointer.setAttribute('aria-hidden', 'true')
  wrap.append(fill, pointer)

  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches
  let stops = [], ticking = false

  // Centre of each job's dot, relative to the wrapper
  function measure() {
    const box = wrap.getBoundingClientRect()
    let x = 0
    stops = jobs.map(job => {
      const r = job.querySelector('.job-rail').getBoundingClientRect()
      x = r.left - box.left + r.width / 2
      return r.top - box.top + 12   // dot: 6px margin + half of 12px
    })
    wrap.style.setProperty('--tl-x', `${x}px`)
    wrap.style.setProperty('--tl-start', `${stops[0]}px`)
    update()
  }

  function update() {
    ticking = false
    const first = stops[0], last = stops[stops.length - 1]
    // "Reading line" sits a little above the middle of the screen
    const line = window.innerHeight * 0.55 - wrap.getBoundingClientRect().top
    const y = reduced ? last : Math.min(Math.max(line, first), last)

    wrap.style.setProperty('--tl-y', `${y}px`)
    jobs.forEach((job, i) => job.classList.toggle('reached', y >= stops[i] - 1))
    wrap.classList.toggle('arrived', y >= last - 1)
  }

  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update) }
  }, { passive: true })
  window.addEventListener('resize', measure)
  document.fonts?.ready.then(measure)
  measure()
}

// ── Count-up stats ─────────────────────────────────────
function initCounters() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const io = new IntersectionObserver(entries => {
    entries.forEach(({ isIntersecting, target }) => {
      if (!isIntersecting) return
      io.unobserve(target)
      const raw = target.dataset.count
      const end = parseInt(raw, 10)
      const suffix = raw.replace(/^\d+/, '')
      if (Number.isNaN(end)) return
      const start = performance.now(), dur = 1200
      const step = now => {
        const t = Math.min((now - start) / dur, 1)
        target.textContent = Math.round(end * (1 - Math.pow(1 - t, 3))) + suffix
        if (t < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    })
  }, { threshold: 0.6 })
  document.querySelectorAll('[data-count]').forEach(el => io.observe(el))
}

// ── Active nav link ────────────────────────────────────
function initScrollSpy() {
  const links = [...document.querySelectorAll('.nav-links a, .nav-mobile a')]
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return
      const id = entry.target.id
      links.forEach(a => {
        const on = a.getAttribute('href') === `#${id}`
        a.classList.toggle('active', on)
        on ? a.setAttribute('aria-current', 'true') : a.removeAttribute('aria-current')
      })
    })
  }, { rootMargin: '-45% 0px -50% 0px' })
  document.querySelectorAll('main section[id]').forEach(s => io.observe(s))
}

// ── Scroll progress bar ────────────────────────────────
function initScrollProgress() {
  const bar = Object.assign(document.createElement('div'), { className: 'scroll-progress' })
  bar.setAttribute('aria-hidden', 'true')
  document.body.prepend(bar)
  let ticking = false
  const update = () => {
    ticking = false
    const max = document.documentElement.scrollHeight - window.innerHeight
    bar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`
  }
  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update) }
  }, { passive: true })
  update()
}

// ── Reveal on scroll ───────────────────────────────────
// Content is visible by default; JS only adds the hidden starting state,
// so nothing disappears if scripts fail or motion is reduced.
function initReveal() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return

  const groups = [
    ['.section-title, .contact-title', 'reveal-title'],
    ['.about-text > *', 'reveal'],
    ['.about-card', 'reveal'],
    ['.skill', 'reveal'],
    ['.project', 'reveal'],
    ['.pd-main > *, .pd-facts', 'reveal'],
    ['.pd-feature', 'reveal'],
    ['.contact-intro > :not(.contact-title)', 'reveal'],
    ['.contact-panel', 'reveal'],
  ]
  const io = new IntersectionObserver(entries => {
    entries.forEach(({ isIntersecting, target }) => {
      if (!isIntersecting) return
      io.unobserve(target)
      target.classList.add('in')
      // Hand control back to the element's own hover transitions afterwards
      const cleanup = () => {
        target.removeEventListener('transitionend', onEnd)
        target.classList.remove('reveal', 'reveal-title', 'in')
        target.style.removeProperty('--d')
      }
      const onEnd = e => { if (e.target === target && e.propertyName === 'opacity') cleanup() }
      target.addEventListener('transitionend', onEnd)
      // Safety net in case transitionend never fires (tab hidden, etc.)
      setTimeout(cleanup, 1400 + (parseFloat(target.style.getPropertyValue('--d')) || 0))
    })
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' })

  groups.forEach(([selector, cls]) => {
    document.querySelectorAll(selector).forEach(el => {
      // Stagger siblings that sit side by side (grid cells, cards)
      const i = [...el.parentElement.children].indexOf(el)
      el.style.setProperty('--d', `${Math.min(i, 6) * 70}ms`)
      el.classList.add(cls)
      io.observe(el)
    })
  })
}

// ── Boot ───────────────────────────────────────────────
initTheme()
const isProjectPage = document.body.dataset.page === 'project'
fetch('./data.json')
  .then(r => r.json())
  .then(data => {
    initTheme(data.theme)
    if (isProjectPage) {
      renderProject(data)
      initScrollProgress()
      initReveal()
      return
    }
    render(data)
    initCounters()
    initScrollSpy()
    initTimelinePointer()
    initScrollProgress()
    initReveal()
  })
