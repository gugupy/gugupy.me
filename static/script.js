gsap.registerPlugin(ScrollTrigger, TextPlugin);

// ── SVG icon map ──
const ICONS = {
  github: '<svg class="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
  linkedin: '<svg class="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  x: '<svg class="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
  email: '<svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>',
  location: '<svg class="w-4 h-4 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',
  languages: '<svg class="w-4 h-4 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/></svg>',
  education: '<svg class="w-4 h-4 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>',
  calendar: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>',
  freelancer: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>',
  dot: '<svg class="w-3 h-3" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3"/></svg>',
  pull: '<svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"/></svg>',
  bug: '<svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
  link: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>',
  cloud: '<svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/></svg>',
  azure: '<svg class="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24"><path d="M11.6 5.5H5l6.5 13h6.1L11.6 5.5zm7.5 0h-6.5l-1.8 3.7h6.5l1.8-3.7zM5 5.5L3.2 9.2h6.5l1.8-3.7H5z"/></svg>',
  aws: '<svg class="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></svg>',
  gcloud: '<svg class="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></svg>',
  ai: '<svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h.01M12 20h.01M16 20h.01M9 16h.01M13 16h.01M17 16h.01"/></svg>',
  infra: '<svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 012 0v4a1 1 0 001 1m-6 0h6"/></svg>',
  code: '<svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>',
  db:'<svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/></svg>',
  test:'<svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>',
  container: `
    <svg class="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">

      <!-- top face -->
      <polygon points="5,6 17,6 21,9 9,9" stroke-width="2" stroke-linejoin="round"/>

      <!-- front face -->
      <rect x="3" y="9" width="12" height="8" rx="1.5" stroke-width="2"/>

      <!-- side face -->
      <polygon points="15,9 21,9 21,17 15,17" stroke-width="2" stroke-linejoin="round"/>

      <!-- ribs front -->
      <path d="M6 9v8M9 9v8M12 9v8" stroke-width="2" stroke-linecap="round"/>

      <!-- ribs side -->
      <path d="M18 9v8" stroke-width="2" stroke-linecap="round"/>

    </svg>
    `,
  iac: `
    <svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">

      <!-- code brackets -->
      <path stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            d="M8 5L3 12l5 7M16 5l5 7-5 7"/>

      <!-- infrastructure blocks -->
      <rect x="9" y="9" width="2.5" height="2.5" rx="0.5" stroke-width="2"/>
      <rect x="12.5" y="9" width="2.5" height="2.5" rx="0.5" stroke-width="2"/>
      <rect x="9" y="12.5" width="2.5" height="2.5" rx="0.5" stroke-width="2"/>
      <rect x="12.5" y="12.5" width="2.5" height="2.5" rx="0.5" stroke-width="2"/>

    </svg>
    `,
  framework: '<svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2z"/></svg>'

};

// ── Fetch data and render ──
fetch('./data.json')
  .then(r => r.json())
  .then(data => {
    render(data);
    // Wait one frame for the browser to lay out all rendered content,
    // then initialise GSAP so ScrollTrigger positions are accurate.
    requestAnimationFrame(() => {
      initGSAP();
      // Second refresh after images / fonts may have shifted layout
      setTimeout(() => ScrollTrigger.refresh(), 300);
    });
  });

// ── Image error handling with gradient fallbacks ──
function handleImageError(imgElement, projectIndex) {
  // Hide the failed image
  imgElement.style.display = 'none';

  // Calculate gradient index (cycle through 8 gradients)
  const gradientIndex = projectIndex % 8;

  // Create fallback div with gradient and noise
  const fallback = document.createElement('div');
  fallback.className = `project-img-fallback fallback-gradient-${gradientIndex}`;

  // Insert fallback before the gradient overlay
  const container = imgElement.parentElement;
  container.insertBefore(fallback, container.firstChild);
}

function render(data) {
  const { person, social, home, about, gitHub } = data;
  const name = `${person.firstName} ${person.lastName}`;

  // Page meta
  document.title = `${name} - ${person.role}`;
  document.querySelector('meta[name="description"]').content = `Portfolio of ${name}, ${person.role}`;

  // Nav
  const navSections = ['about', 'experience', 'skills', 'projects', 'github', 'gallery', 'contact'];
  const navLabels = { about: 'About', experience: 'Experience', skills: 'Skills', projects: 'Projects', github: 'Open Source', gallery: 'Gallery', contact: 'Contact' };
  document.getElementById('nav-brand').textContent = `/${home.name}/`;

  const navLinksEl = document.getElementById('nav-links');
  const mobileLinksEl = document.getElementById('mobile-menu-links');
  navSections.forEach(s => {
    const label = navLabels[s];
    navLinksEl.innerHTML += `<a href="#${s}" class="nav-link text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">${label}</a>`;
    mobileLinksEl.innerHTML += `<a href="#${s}" class="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">${label}</a>`;
  });

  // Hero
  document.getElementById('hero-greeting').innerHTML = `<span class="inline-block px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-sm font-mono tracking-wider">Hello, I'm</span>`;
  // Split name into individual characters for SplitText effect
  const nameChars = home.name.split('').map((ch, i) =>
    `<span class="split-char inline-block text-white" style="opacity:0">${ch}</span>`
  ).join('');
  document.getElementById('hero-name').innerHTML = `${nameChars}<span class="split-char inline-block text-cyan-400" style="opacity:0">.</span>`;

  // Split headline into words for animation
  const headlineWords = home.headline.split(' ').map(word =>
    `<span class="headline-word">${word}</span>`
  ).join(' ');
  document.getElementById('hero-tagline').innerHTML = headlineWords;

  document.getElementById('hero-desc').textContent = home.subline;

  // About card
  const studies = about.studies.institutions.map(i => i.name).join(', ');
  document.getElementById('about-card').innerHTML = `
    <div class="relative group">
      <div class="absolute -inset-1 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-2xl blur-sm group-hover:blur-md transition-all"></div>
      <div class="relative bg-surface-900 border border-slate-800 rounded-2xl p-8 text-center">
        <div class="relative w-32 h-32 mx-auto mb-6">
          <div class="absolute -inset-1 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full animate-pulse opacity-20"></div>
          <div class="relative w-full h-full rounded-full overflow-hidden ring-2 ring-cyan-500/30">
            <div class="absolute inset-0 bg-gradient-to-br from-cyan-500 to-cyan-700"></div>
            <img src="${person.avatar}" alt="${name}" class="relative w-full h-full object-cover rounded-full" style="object-position: center 30%;" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
            <div class="absolute inset-0 bg-gradient-to-br from-cyan-500 to-cyan-700 flex items-center justify-center text-5xl font-black text-surface-950" style="display:none;">${person.firstName[0]}</div>
          </div>
          <div class="absolute -bottom-1 -right-1 w-7 h-7 bg-emerald-500 rounded-full border-4 border-surface-900 flex items-center justify-center" title="Available">
            <div class="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
        <h3 class="text-xl font-bold text-white mb-1">${name}</h3>
        <p class="text-cyan-400 font-mono text-sm mb-2">${person.role}</p>
        <div class="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-xs font-medium mb-6">
          <div class="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
          Available for work
        </div>
        <div class="flex flex-col gap-3 text-sm text-slate-400 mb-6">
          <div class="flex items-center gap-3">${ICONS.location}<span>${person.location}</span></div>
          <div class="flex items-center gap-3">${ICONS.languages}<span>${person.languages.join(', ')}</span></div>
          <div class="flex items-center gap-3">${ICONS.education}<span>${studies}</span></div>
        </div>
        <div class="flex flex-col gap-3">
          ${about.calendar?.display ? `<a href="${about.calendar.link}" target="_blank" rel="noopener" class="flex items-center justify-center gap-2 px-5 py-2.5 bg-cyan-500 text-surface-950 font-semibold rounded-xl hover:bg-cyan-400 transition-colors text-sm">${ICONS.calendar} Schedule a Call</a>` : ''}
          ${about.freelancer?.display ? `<a href="${about.freelancer.link}" target="_blank" rel="noopener" class="flex items-center justify-center gap-2 px-5 py-2.5 border border-slate-700 text-slate-300 font-medium rounded-xl hover:border-cyan-500/50 hover:text-cyan-400 transition-all text-sm">${ICONS.freelancer} Hire Me</a>` : ''}
        </div>
      </div>
    </div>`;

  // About bio
  const paragraphs = about.intro.description.split('\n\n');
  // Highlight keywords in bio
  function highlightBio(text) {
    const keywords = ['Python', 'ReactJS', 'Superset', 'Flask-AppBuilder', 'Azure', 'AWS', 'GCP', 'open-source', 'freelancer', 'frontend', 'backend', 'OpenAI'];
    let result = text;
    keywords.forEach(kw => {
      result = result.replace(new RegExp(`(${kw})`, 'gi'), '<span class="text-cyan-400 font-medium">$1</span>');
    });
    return result;
  }
  document.getElementById('about-bio').innerHTML = `
    <div class="space-y-6">
      <div class="space-y-5 text-lg text-slate-300 leading-relaxed">
        ${paragraphs.map(p => `<p>${highlightBio(p)}</p>`).join('')}
      </div>
      <div class="flex flex-wrap gap-3 pt-4">
        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface-900/50 border border-slate-800/50 rounded-lg text-xs text-slate-400 font-mono">
          <svg class="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          Problem Solver
        </span>
        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface-900/50 border border-slate-800/50 rounded-lg text-xs text-slate-400 font-mono">
          <svg class="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
          Open Source Contributor
        </span>
        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface-900/50 border border-slate-800/50 rounded-lg text-xs text-slate-400 font-mono">
          <svg class="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          Cloud Native
        </span>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-6 mt-10">
      <div class="text-center p-4 bg-surface-900/50 border border-slate-800/50 rounded-xl stat-card">
        <div class="text-3xl font-black text-cyan-400 counter" data-target="${new Date().getFullYear() - 2017}">0</div>
        <div class="text-xs text-slate-500 mt-1 font-mono uppercase tracking-wider">Years Exp</div>
      </div>
      <div class="text-center p-4 bg-surface-900/50 border border-slate-800/50 rounded-xl stat-card">
        <div class="text-3xl font-black text-cyan-400 counter" data-target="${about.work.experiences.length}">0</div>
        <div class="text-xs text-slate-500 mt-1 font-mono uppercase tracking-wider">Companies</div>
      </div>
      <div class="text-center p-4 bg-surface-900/50 border border-slate-800/50 rounded-xl stat-card">
        <div class="text-3xl font-black text-cyan-400 counter" data-target="${gitHub.contributions.length}">0</div>
        <div class="text-xs text-slate-500 mt-1 font-mono uppercase tracking-wider">OSS Repos</div>
      </div>
    </div>`;

  // Experience timeline - build card HTML helper
  const timelineEl = document.getElementById('experience-timeline');
  const totalExperiences = about.work.experiences.length;
  const cardHTML = (exp, i, isLast) => `
    <div class="timeline-card w-full ${isLast ? 'timeline-card-current' : ''}" data-card="${i}">
      <div class="flex items-center gap-3 mb-4">
        <span class="timeline-year" data-year="${i}">${exp.timeframe}</span>
        <div class="flex-1 h-px bg-slate-800"></div>
        ${isLast ? '<span class="current-badge">Current</span>' : ''}
      </div>
      <h3 class="text-xl font-bold text-white mb-1">
        <span class="typing-text" data-text="${exp.role}"></span><span class="typing-cursor"></span>
      </h3>
      <p class="text-cyan-400 font-medium mb-4">
        <span class="typing-text typing-text-company" data-text="${exp.company}"></span>
      </p>
      <ul class="space-y-2.5 text-slate-400 text-sm typing-achievements">
        ${exp.achievements.map((a, idx) => `<li class="flex gap-2.5 achievement-item" data-achievement-index="${idx}"><span class="text-cyan-400 mt-1 flex-shrink-0">${ICONS.dot}</span><span class="typing-text typing-text-achievement" data-text="${a}"></span></li>`).join('')}
      </ul>
    </div>`;

  [...about.work.experiences].reverse().forEach((exp, i) => {
    const isEven = i % 2 === 0;
    const isLast = i === totalExperiences - 1;
    timelineEl.innerHTML += `
      <div class="exp-row relative mb-20 last:mb-0 ${isLast ? 'exp-row-current' : ''}" data-index="${i}">
        <!-- MOBILE LAYOUT -->
        <div class="flex items-start gap-4 md:hidden">
          <div class="flex-shrink-0 relative z-10" style="width:48px;">
            <div class="timeline-dot ${isLast ? 'timeline-dot-current' : ''}" data-dot="${i}">
              <div class="timeline-dot-inner"></div>
            </div>
          </div>
          <div class="flex-1 pt-1">${cardHTML(exp, i, isLast)}</div>
        </div>
        <!-- DESKTOP LAYOUT: 3-column grid -->
        <div class="hidden md:grid md:grid-cols-[1fr_48px_1fr] md:gap-8 items-start">
          <div class="${isEven ? '' : 'flex justify-end'}">${isEven ? cardHTML(exp, i, isLast) : ''}</div>
          <div class="flex justify-center relative z-10">
            <div class="timeline-dot ${isLast ? 'timeline-dot-current' : ''}" data-dot="${i}">
              <div class="timeline-dot-inner"></div>
            </div>
          </div>
          <div class="${isEven ? 'flex justify-start' : ''}">${isEven ? '' : cardHTML(exp, i, isLast)}</div>
        </div>
      </div>`;
  });

  // Skills
  const skillsGrid = document.getElementById('skills-grid');
  about.technical.skills.forEach((skill, i) => {
    const iconSVG = ICONS[skill.icon] || ICONS["infra"];
    skillsGrid.innerHTML += `
      <div class="skill-category skill-bg-${i % 5} bg-surface-900/30 border border-slate-800/50 rounded-2xl p-8 card-hover">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
            ${iconSVG}
          </div>
          <h3 class="text-lg font-bold text-white">${skill.title}</h3>
        </div>

        <!-- New Skills Items Section -->
        <div class="flex flex-wrap gap-2 mb-4">
          ${skill.items ? skill.items.map(item => `
            <span class="px-3 py-1 text-xs font-medium bg-slate-800/50 text-cyan-400 border border-cyan-500/20 rounded-full">
              ${item}
            </span>
          `).join('') : ''}
        </div>
        <p class="text-slate-400 text-sm leading-relaxed">${skill.description}</p>
      </div>`;
  });


  // Projects
  if (data.projects && data.projects.items && data.projects.items.length) {
    const projectsGrid = document.getElementById('projects-grid');
    const sortedProjects = [...data.projects.items].sort((a, b) => (a.order || 999) - (b.order || 999));

    function renderProjects(filter) {
      projectsGrid.innerHTML = '';
      sortedProjects.forEach((project, projectIndex) => {
        if (project.display === false) return;
        if (filter !== 'all' && project.category !== filter) return;
        const hasGithub = project.links.github && project.links.github !== '';
        const hasLive = project.links.live && project.links.live !== '';
        const categoryLabel = project.category === 'client' ? 'Client' : 'Personal';
        const categoryColor = project.category === 'client'
          ? 'text-amber-400 bg-amber-500/10 border-amber-500/20'
          : 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
        const githubBtn = hasGithub ? `
          <a href="${project.links.github}" target="_blank" rel="noopener"
            class="project-action-btn flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-700 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-400 text-xs font-medium transition-all">
            ${ICONS.github.replace('w-5 h-5', 'w-4 h-4')}
            <span>Source</span>
          </a>` : '';
        const liveBtn = hasLive ? `
          <a href="${project.links.live}" target="_blank" rel="noopener"
            class="project-action-btn flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/25 hover:bg-cyan-500/20 hover:border-cyan-500/50 text-cyan-400 text-xs font-medium transition-all">
            ${ICONS.link}
            <span>Live Demo</span>
          </a>` : '';
        projectsGrid.innerHTML += `
          <div class="project-card relative bg-surface-900/30 border border-slate-800/50 rounded-2xl overflow-hidden card-hover group" data-project-index="${projectIndex}" data-category="${project.category || 'personal'}">
            <!-- Top accent strip -->
            <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/0 to-transparent group-hover:via-cyan-500/60 transition-all duration-500 z-10"></div>
            <!-- Image -->
            <div class="project-img-container">
              <img src="${project.image}" alt="${project.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" onerror="handleImageError(this, ${projectIndex})" />
              <div class="absolute inset-0 bg-gradient-to-t from-surface-950 via-surface-950/30 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-300"></div>
              <span class="absolute top-4 left-4 px-2.5 py-1 rounded-full text-xs font-mono border ${categoryColor}">${categoryLabel}</span>
            </div>
            <!-- Content -->
            <div class="p-6 flex flex-col gap-4">
              <!-- Title row -->
              <div class="flex items-start justify-between gap-3">
                <h3 class="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug">${project.name}</h3>
                ${hasLive ? `<a href="${project.links.live}" target="_blank" rel="noopener" class="shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-cyan-400 hover:text-cyan-300">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                </a>` : ''}
              </div>
              <!-- Description (3-line clamp) -->
              <p class="text-slate-400 text-sm leading-relaxed" style="-webkit-line-clamp:3;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden">${project.description}</p>
              <!-- Tags -->
              <div class="flex flex-wrap gap-1.5">
                ${project.tags.map(tag => `<span class="px-2.5 py-0.5 rounded-full bg-slate-800/80 border border-slate-700/60 text-slate-400 text-xs font-mono">${tag}</span>`).join('')}
              </div>
              <!-- Action buttons -->
              ${hasGithub || hasLive ? `
                <div class="flex gap-3 pt-2 border-t border-slate-800/60">
                  ${githubBtn}
                  ${liveBtn}
                </div>` : ''}
            </div>
          </div>`;
      });
    }

    renderProjects('all');

    // Filter click handler
    document.querySelectorAll('.project-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.project-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProjects(btn.dataset.filter);
      });
    });
  }

  // GitHub contributions
  const ghGrid = document.getElementById('github-grid');
  gitHub.contributions.forEach(repo => {
    const totalPRs = repo.contributions.filter(c => c.type === 'pull').length;
    const totalBugs = repo.contributions.filter(c => c.type === 'bug').length;
    ghGrid.innerHTML += `
      <div class="gh-card bg-surface-900/30 border border-slate-800/50 rounded-2xl p-8 card-hover">
        <div class="flex items-center justify-between mb-5">
          <a href="${repo.repoUrl}" target="_blank" rel="noopener" class="flex items-center gap-2 text-white font-bold text-lg hover:text-cyan-400 transition-colors">
            ${ICONS.github.replace('w-5 h-5', 'w-5 h-5').replace('text-cyan-400', 'text-slate-500')}
            ${repo.repoName}
          </a>
          <div class="flex gap-2">
            ${totalPRs ? `<span class="px-2 py-0.5 rounded text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">${totalPRs} PR${totalPRs > 1 ? 's' : ''}</span>` : ''}
            ${totalBugs ? `<span class="px-2 py-0.5 rounded text-xs font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20">${totalBugs} Issue${totalBugs > 1 ? 's' : ''}</span>` : ''}
          </div>
        </div>
        <ul class="space-y-3">
          ${repo.contributions.map(c => `
            <li>
              <a href="${c.url}" target="_blank" rel="noopener" class="group flex items-start gap-3 text-sm text-slate-400 hover:text-cyan-400 transition-colors">
                <span class="${c.type === 'pull' ? 'text-emerald-400' : 'text-amber-400'} mt-0.5">${ICONS[c.type] || ICONS.link}</span>
                <span class="group-hover:underline">${c.title}</span>
              </a>
            </li>
          `).join('')}
        </ul>
      </div>`;
  });

  // Gallery
  if (data.gallery && data.gallery.images && data.gallery.images.length) {
    const galleryGrid = document.getElementById('gallery-grid');
    data.gallery.images.forEach((img, i) => {
      const spanClass = img.orientation === 'vertical' ? 'md:row-span-2' : '';
      galleryGrid.innerHTML += `
        <div class="gallery-item ${spanClass} relative group overflow-hidden rounded-2xl bg-surface-900 border border-slate-800/50 card-hover">
          <img src="${img.src}" alt="${img.alt}" class="gallery-img w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" onerror="this.parentElement.style.display='none';" />
          <div class="gallery-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent translate-x-[-200%]"></div>
          <div class="absolute inset-0 bg-gradient-to-t from-surface-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>`;
    });
  }

  // Contact
  const contactGrid = document.getElementById('contact-grid');
  social.forEach(s => {
    const displayName = s.name === 'Email' ? s.link.replace('mailto:', '') : s.link.replace(/https?:\/\/(www\.)?/, '').split('/').pop() || s.link.replace(/https?:\/\/(www\.)?/, '');
    contactGrid.innerHTML += `
      <a href="${s.link}" target="${s.name === 'Email' ? '_self' : '_blank'}" rel="noopener" class="contact-card group flex items-center gap-4 p-5 bg-surface-900/30 border border-slate-800/50 rounded-xl hover:border-cyan-500/30 transition-all card-hover">
        <div class="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">${ICONS[s.icon]}</div>
        <div class="text-left min-w-0 flex-1">
          <div class="text-xs text-slate-500 font-mono uppercase tracking-wider">${s.name}</div>
          <div class="text-sm text-slate-300 group-hover:text-cyan-400 transition-colors truncate">${displayName}</div>
        </div>
      </a>`;
  });

  // Contact CTAs
  const ctaEl = document.getElementById('contact-cta');
  let ctaHTML = '';
  if (about.calendar?.display) {
    ctaHTML += `<a href="${about.calendar.link}" target="_blank" rel="noopener" class="magnetic-btn inline-flex items-center gap-3 px-8 py-4 bg-cyan-500 text-surface-950 font-bold rounded-full hover:bg-cyan-400 transition-colors text-lg">${ICONS.calendar} Schedule a Call</a>`;
  }
  if (about.freelancer?.display) {
    ctaHTML += `<a href="${about.freelancer.link}" target="_blank" rel="noopener" class="magnetic-btn inline-flex items-center gap-3 px-8 py-4 border border-slate-700 text-slate-300 font-medium rounded-full hover:border-cyan-500/50 hover:text-cyan-400 transition-all text-lg">${ICONS.freelancer} Hire Me</a>`;
  }
  ctaEl.innerHTML = ctaHTML;

  // Footer
  document.getElementById('footer-copy').innerHTML = `&copy; ${new Date().getFullYear()} /${home.name}/`;
}

// ── GSAP Animations (called after render) ──
function initGSAP() {
  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger, TextPlugin);

  // Cursor
  const cursor = document.getElementById('cursor');
  let mouseX = 0, mouseY = 0;
  document.addEventListener('mousemove', e => { mouseX = e.clientX; mouseY = e.clientY; });
  gsap.ticker.add(() => gsap.set(cursor, { x: mouseX, y: mouseY }));
  if ('ontouchstart' in window) cursor.style.display = 'none';

  // Navbar
  const navbar = document.getElementById('navbar');
  ScrollTrigger.create({
    start: 'top -80',
    onUpdate: self => {
      if (self.direction === 1) {
        navbar.style.background = 'var(--overlay-bg)';
        navbar.style.backdropFilter = 'blur(20px)';
        navbar.style.borderBottom = '1px solid var(--overlay-border)';
      }
      if (self.scroll() < 80) {
        navbar.style.background = 'transparent';
        navbar.style.backdropFilter = 'none';
        navbar.style.borderBottom = 'none';
      }
    }
  });

  // Theme toggle
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', () => {
    const html = document.documentElement;
    const isLight = html.getAttribute('data-theme') === 'light';
    if (isLight) {
      html.removeAttribute('data-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      html.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  });

  // Mobile menu
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
  mobileMenu.querySelectorAll('a').forEach(link =>
    link.addEventListener('click', () => mobileMenu.classList.add('hidden'))
  );

  // Hero timeline
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  const nameEl = document.getElementById('hero-name');
  nameEl.style.opacity = 1; // container visible, chars animate individually
  const chars = nameEl.querySelectorAll('.split-char');

  heroTl
    .to('#hero-greeting', { opacity: 1, y: 0, duration: 0.8 }, 0.3)
    .from('#hero-greeting', { y: 30 }, 0.3)
    // SplitText: each character with smooth animation
    .fromTo(chars, {
      opacity: 0,
      y: 60,
      rotateX: -45,
      scale: 0.8,
    }, {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      duration: 0.8,
      stagger: 0.05,
      ease: 'power3.out',
    }, 0.6)
    .to('#hero-tagline', {
      opacity: 1,
      duration: 0.8,
      onComplete: () => {
        // Trigger the shine sweep animation
        const tagline = document.getElementById('hero-tagline');
        tagline.classList.add('shine-sweep');

        // Remove the class after animation completes to reset to normal gradient position
        setTimeout(() => {
          tagline.classList.remove('shine-sweep');
        }, 3000);
      }
    }, 1.4)
    .from('#hero-tagline', { y: 30 }, 1.4)
    .to('#hero-desc', { opacity: 1, duration: 0.8 }, 1.7)
    .from('#hero-desc', { y: 20 }, 1.7)
    .to('#hero-cta', { opacity: 1, duration: 0.8 }, 2.0)
    .from('#hero-cta', { y: 20 }, 2.0)
    .to('#scroll-indicator', { opacity: 1, duration: 0.8 }, 2.4);

  gsap.to('#orb1', { x: 50, y: -30, duration: 6, repeat: -1, yoyo: true, ease: 'sine.inOut' });
  gsap.to('#orb2', { x: -40, y: 40, duration: 8, repeat: -1, yoyo: true, ease: 'sine.inOut' });
  gsap.to('#scroll-indicator', { opacity: 0, scrollTrigger: { trigger: '#about', start: 'top bottom', end: 'top center', scrub: true } });

  // About
  gsap.utils.toArray('.about-reveal').forEach((el, i) => {
    gsap.from(el, { opacity: 0, y: 40, duration: 0.8, delay: i * 0.15, scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' } });
  });

  // Counters
  document.querySelectorAll('.counter').forEach(counter => {
    const target = parseInt(counter.dataset.target);
    gsap.to(counter, { innerText: target, duration: 2, ease: 'power2.out', snap: { innerText: 1 }, scrollTrigger: { trigger: counter, start: 'top 85%', toggleActions: 'play none none none' } });
  });
  gsap.from('.stat-card', { opacity: 0, y: 30, scale: 0.95, duration: 0.6, stagger: 0.15, scrollTrigger: { trigger: '.stat-card', start: 'top 85%', toggleActions: 'play none none none' } });

  // Experience - section header
  gsap.from('.exp-reveal', { opacity: 0, y: 40, duration: 0.8, scrollTrigger: { trigger: '.exp-reveal', start: 'top 85%', toggleActions: 'play none none none' } });

  // Experience - scroll-driven timeline progress line
  const timelineContainer = document.getElementById('experience-timeline');
  const progressBar = document.getElementById('timeline-progress');
  if (timelineContainer && progressBar) {
    gsap.to(progressBar, {
      height: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: timelineContainer,
        start: 'top 60%',
        end: 'bottom 40%',
        scrub: 0.3,
      }
    });
  }

  // Experience - each row: card slide-in + dot/card activation
  gsap.utils.toArray('.exp-row').forEach((row, i) => {
    const isEven = i % 2 === 0;
    const cards = row.querySelectorAll('.timeline-card');
    const dots = row.querySelectorAll('.timeline-dot');
    const years = row.querySelectorAll('.timeline-year');

    // Cards slide in from the side they sit on
    cards.forEach(card => {
      gsap.from(card, {
        opacity: 0,
        x: isEven ? -60 : 60,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: row, start: 'top 78%', toggleActions: 'play none none none' }
      });
    });

    // Dots scale in
    dots.forEach(dot => {
      gsap.from(dot, {
        scale: 0,
        duration: 0.5,
        ease: 'back.out(2)',
        scrollTrigger: { trigger: row, start: 'top 78%', toggleActions: 'play none none none' }
      });
    });

    // Typing animation for timeline text
    cards.forEach(card => {
      const typingElements = card.querySelectorAll('.typing-text');
      const cursor = card.querySelector('.typing-cursor');

      typingElements.forEach((element, idx) => {
        const text = element.getAttribute('data-text');
        const isRole = !element.classList.contains('typing-text-company') && !element.classList.contains('typing-text-achievement');
        const isCompany = element.classList.contains('typing-text-company');
        const isAchievement = element.classList.contains('typing-text-achievement');

        // Calculate delays - role first, then company, then achievements
        let baseDelay = 0.9; // After card slides in
        if (isCompany) baseDelay = 1.4; // After role finishes
        if (isAchievement) {
          const achievementIndex = element.closest('.achievement-item').getAttribute('data-achievement-index');
          baseDelay = 1.8 + (parseFloat(achievementIndex) * 0.8); // Stagger achievements
        }

        ScrollTrigger.create({
          trigger: row,
          start: 'top 78%',
          onEnter: () => {
            // Type out the text character by character
            let currentText = '';
            const chars = text.split('');
            const typingSpeed = isAchievement ? 0.015 : 0.03; // Faster for achievements

            gsap.to({}, {
              duration: chars.length * typingSpeed,
              delay: baseDelay,
              onUpdate: function() {
                const progress = this.progress();
                const charIndex = Math.floor(progress * chars.length);

                if (charIndex < chars.length) {
                  currentText = chars.slice(0, charIndex + 1).join('');
                  element.textContent = currentText;

                  // Show cursor on active element
                  if (cursor && isRole) {
                    cursor.style.display = 'inline-block';
                  }
                }
              },
              onComplete: () => {
                element.textContent = text;
                // Hide cursor after role is complete
                if (cursor && isRole) {
                  gsap.to(cursor, {
                    opacity: 0,
                    duration: 0.3,
                    delay: 0.2
                  });
                }
              }
            });
          }
        });
      });
    });

    // Toggle active class on all matching elements when row is in view
    const activate = () => {
      dots.forEach(d => d.classList.add('active'));
      cards.forEach(c => c.classList.add('active'));
      years.forEach(y => y.classList.add('active'));
    };
    const deactivate = () => {
      dots.forEach(d => d.classList.remove('active'));
      cards.forEach(c => c.classList.remove('active'));
      years.forEach(y => y.classList.remove('active'));
    };

    ScrollTrigger.create({
      trigger: row,
      start: 'top 65%',
      end: 'bottom 35%',
      onEnter: activate,
      onLeave: deactivate,
      onEnterBack: activate,
      onLeaveBack: deactivate,
    });

    // Special pop animation for the last/current timeline item
    if (row.classList.contains('exp-row-current')) {
      const currentTl = gsap.timeline({
        scrollTrigger: {
          trigger: row,
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      });

      // Card entrance
      currentTl.from(row, {
        scale: 0.92,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.4)',
      });

      // Badge pop
      const badge = row.querySelector('.current-badge');
      if (badge) {
        currentTl.from(badge, {
          scale: 0,
          opacity: 0,
          duration: 0.5,
          ease: 'back.out(2)',
        }, '-=0.3');
      }

      // Particle burst from the current dot
      const currentDot = row.querySelector('.timeline-dot-current');
      if (currentDot) {
        ScrollTrigger.create({
          trigger: row,
          start: 'top 75%',
          once: true,
          onEnter: () => {
            const dotRect = currentDot.getBoundingClientRect();
            const sectionRect = document.getElementById('experience').getBoundingClientRect();
            const cx = dotRect.left + dotRect.width / 2 - sectionRect.left;
            const cy = dotRect.top + dotRect.height / 2 - sectionRect.top;

            // Create celebration container
            const container = document.createElement('div');
            container.className = 'timeline-celebration';
            container.style.left = cx + 'px';
            container.style.top = cy + 'px';
            document.getElementById('experience').appendChild(container);

            // Expanding rings
            for (let r = 0; r < 3; r++) {
              const ring = document.createElement('div');
              ring.className = 'celebration-ring';
              ring.style.width = '0px';
              ring.style.height = '0px';
              ring.style.left = '0px';
              ring.style.top = '0px';
              ring.style.opacity = '0.8';
              container.appendChild(ring);
              const size = 100 + r * 60;
              gsap.to(ring, {
                width: size,
                height: size,
                left: -size / 2,
                top: -size / 2,
                opacity: 0,
                duration: 1.2 + r * 0.3,
                delay: 0.05 + r * 0.15,
                ease: 'power2.out',
              });
            }

            // Particles burst outward
            const colors = ['#06b6d4', '#22d3ee', '#67e8f9', '#a5f3fc', '#06b6d4', '#0e7490'];
            const particleCount = 30;
            for (let p = 0; p < particleCount; p++) {
              const particle = document.createElement('div');
              particle.className = 'celebration-particle';
              const size = 4 + Math.random() * 7;
              particle.style.width = size + 'px';
              particle.style.height = size + 'px';
              particle.style.background = colors[p % colors.length];
              particle.style.left = '0px';
              particle.style.top = '0px';
              particle.style.boxShadow = `0 0 ${size * 3}px ${colors[p % colors.length]}`;
              container.appendChild(particle);

              const angle = (p / particleCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.5;
              const dist = 60 + Math.random() * 120;
              const tx = Math.cos(angle) * dist;
              const ty = Math.sin(angle) * dist;

              gsap.fromTo(particle, {
                scale: 1,
                opacity: 1,
              }, {
                x: tx,
                y: ty,
                opacity: 0,
                scale: 0,
                duration: 1 + Math.random() * 0.8,
                delay: 0.1 + Math.random() * 0.15,
                ease: 'power3.out',
              });
            }

            // Dot flash
            gsap.fromTo(currentDot, {
              boxShadow: '0 0 20px rgba(6,182,212,0.5), 0 0 40px rgba(6,182,212,0.2)',
            }, {
              boxShadow: '0 0 50px rgba(6,182,212,0.9), 0 0 100px rgba(6,182,212,0.4), 0 0 150px rgba(6,182,212,0.2)',
              duration: 0.6,
              delay: 0.1,
              yoyo: true,
              repeat: 2,
              ease: 'power2.inOut',
            });

            // Clean up after animation
            setTimeout(() => container.remove(), 3000);
          }
        });
      }
    }
  });

  // Skills
  gsap.from('.skills-reveal', { opacity: 0, y: 40, duration: 0.8, scrollTrigger: { trigger: '.skills-reveal', start: 'top 85%', toggleActions: 'play none none none' } });

  const skillCards = gsap.utils.toArray('.skill-category');
  if (skillCards.length) {
    gsap.fromTo(skillCards,
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#skills-grid',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // Projects
  gsap.from('.projects-reveal', { opacity: 0, y: 40, duration: 0.8, scrollTrigger: { trigger: '.projects-reveal', start: 'top 85%', toggleActions: 'play none none none' } });

  const projectCards = gsap.utils.toArray('.project-card');
  if (projectCards.length) {
    gsap.fromTo(projectCards,
      { opacity: 0, y: 60, rotateX: 15, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#projects-grid',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Animate project images with parallax on hover
    projectCards.forEach(card => {
      const img = card.querySelector('img');
      const fallback = card.querySelector('.project-img-fallback');

      if (img || fallback) {
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = (e.clientX - rect.left - rect.width / 2) / 20;
          const y = (e.clientY - rect.top - rect.height / 2) / 20;

          if (img && img.style.display !== 'none') {
            gsap.to(img, { x, y, duration: 0.5, ease: 'power2.out' });
          } else if (fallback) {
            gsap.to(fallback, { x, y, duration: 0.5, ease: 'power2.out' });
          }
        });

        card.addEventListener('mouseleave', () => {
          if (img && img.style.display !== 'none') {
            gsap.to(img, { x: 0, y: 0, duration: 0.6, ease: 'power2.out' });
          } else if (fallback) {
            gsap.to(fallback, { x: 0, y: 0, duration: 0.6, ease: 'power2.out' });
          }
        });
      }
    });
  }

  // GitHub
  gsap.utils.toArray('.gh-reveal').forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' } }
    );
  });

  const ghCards = gsap.utils.toArray('.gh-card');
  if (ghCards.length) {
    gsap.fromTo(ghCards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#github-grid',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // Gallery
  gsap.from('.gallery-reveal', { opacity: 0, y: 40, duration: 0.8, scrollTrigger: { trigger: '.gallery-reveal', start: 'top 85%', toggleActions: 'play none none none' } });

  const galleryItems = gsap.utils.toArray('.gallery-item');
  if (galleryItems.length) {
    // Animate containers with enhanced effects
    gsap.fromTo(galleryItems,
      {
        opacity: 0,
        y: 80,
        scale: 0.85,
        rotateY: -15,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateY: 0,
        duration: 1,
        stagger: {
          amount: 0.6,
          from: 'start',
          ease: 'power2.inOut'
        },
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#gallery-grid',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Animate images with clip-path reveal
    const galleryImages = gsap.utils.toArray('.gallery-img');
    gsap.fromTo(galleryImages,
      {
        clipPath: 'inset(0% 100% 0% 0%)',
        scale: 1.3,
      },
      {
        clipPath: 'inset(0% 0% 0% 0%)',
        scale: 1,
        duration: 1.2,
        stagger: {
          amount: 0.6,
          from: 'start',
          ease: 'power2.inOut'
        },
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#gallery-grid',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Shimmer effect sweep
    const shimmers = gsap.utils.toArray('.gallery-shimmer');
    gsap.to(shimmers, {
      x: '200%',
      duration: 1.5,
      stagger: {
        amount: 0.6,
        from: 'start'
      },
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '#gallery-grid',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });

    // Border glow effect on reveal
    galleryItems.forEach((item, i) => {
      gsap.to(item, {
        borderColor: 'rgba(6, 182, 212, 0.3)',
        duration: 0.5,
        delay: i * 0.2,
        yoyo: true,
        repeat: 1,
        scrollTrigger: {
          trigger: '#gallery-grid',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });
    });
  }

  // Contact
  const contactReveals = gsap.utils.toArray('.contact-reveal');
  if (contactReveals.length) {
    gsap.fromTo(contactReveals,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: '#contact',
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      }
    );
  }

  const contactCards = gsap.utils.toArray('.contact-card');
  if (contactCards.length) {
    gsap.fromTo(contactCards,
      { opacity: 0, y: 30, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#contact-grid',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // Parallax
  gsap.to('#hero-name', { yPercent: -20, scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 1 } });
  gsap.to('#hero-tagline', { yPercent: -10, scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 1 } });

  // Active nav tracking
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  ScrollTrigger.create({
    start: 'top top', end: 'bottom bottom',
    onUpdate: () => {
      let current = '';
      sections.forEach(section => { if (window.scrollY >= section.offsetTop - 200) current = section.id; });
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
      });
    }
  });

  // Magnetic buttons
  document.querySelectorAll('.magnetic-btn').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      gsap.to(btn, {
        x: (e.clientX - rect.left - rect.width / 2) * 0.2,
        y: (e.clientY - rect.top - rect.height / 2) * 0.2,
        duration: 0.4,
        ease: 'power2.out'
      });
    });
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'power2.out'
      });
    });
  });
}

// ── Floating Code Particles Animation ──
(function initCodeParticles() {
  const canvas = document.getElementById('code-particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let dpr = window.devicePixelRatio || 1;
  let W, H;

  function resize() {
    dpr = window.devicePixelRatio || 1;
    const rect = canvas.parentElement.getBoundingClientRect();
    W = rect.width;
    H = rect.height;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener('resize', resize);

  // Code tokens that float around
  const tokens = [
    'def', 'class', 'import', 'return', 'async', 'await', 'yield',
    'for', 'while', 'if', 'else', 'try', 'except', 'with',
    'lambda', 'self', 'None', 'True', 'False',
    'flask', 'openai', 'docker', 'git', 'npm',
    '()', '{}', '[]', '=>', '::', '//', '/**/',
    'print()', '.get()', '.post()', '.map()', '.filter()',
    'const', 'let', 'fn', 'pub', 'use',
    '<div>', '</>', '&&', '||', '!=', '===',
    'pip', 'brew', 'kubectl', 'terraform',
    '0x3F', '127.0.0.1', ':8080', 'utf-8',
  ];

  const PARTICLE_COUNT = 45;
  let particles = [];
  let mouse = { x: -1000, y: -1000 };

  // Track mouse for subtle interaction
  canvas.parentElement.addEventListener('mousemove', (e) => {
    const rect = canvas.parentElement.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  function createParticle(init) {
    const size = 10 + Math.random() * 14;
    return {
      text: tokens[Math.floor(Math.random() * tokens.length)],
      x: init ? Math.random() * W : (Math.random() < 0.5 ? -100 : W + 100),
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.2,
      size,
      baseAlpha: 0.06 + Math.random() * 0.12,
      alpha: 0,
      targetAlpha: 0.06 + Math.random() * 0.12,
      rotation: (Math.random() - 0.5) * 0.3,
      rotationSpeed: (Math.random() - 0.5) * 0.002,
      phase: Math.random() * Math.PI * 2,       // for sine drift
      driftAmp: 0.2 + Math.random() * 0.5,      // sine amplitude
      driftFreq: 0.0003 + Math.random() * 0.0005, // sine frequency
      life: 0,
      maxLife: 8000 + Math.random() * 12000,     // 8–20 seconds
      fadeIn: 1500 + Math.random() * 1000,
      fadeOut: 2000 + Math.random() * 1000,
    };
  }

  // Initialize particles
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const p = createParticle(true);
    p.life = Math.random() * p.maxLife; // stagger initial lifetimes
    particles.push(p);
  }

  let lastTime = 0;

  function animate(time) {
    requestAnimationFrame(animate);
    const dt = Math.min(time - lastTime, 50);
    lastTime = time;

    ctx.clearRect(0, 0, W, H);

    const isDark = !document.documentElement.classList.contains('light');

    particles.forEach((p, i) => {
      p.life += dt;

      // Respawn if expired
      if (p.life > p.maxLife) {
        particles[i] = createParticle(false);
        return;
      }

      // Fade in/out
      let alpha = p.baseAlpha;
      if (p.life < p.fadeIn) {
        alpha *= p.life / p.fadeIn;
      } else if (p.life > p.maxLife - p.fadeOut) {
        alpha *= (p.maxLife - p.life) / p.fadeOut;
      }

      // Gentle sine wave drift
      const drift = Math.sin(time * p.driftFreq + p.phase) * p.driftAmp;

      // Mouse repulsion (subtle)
      let pushX = 0, pushY = 0;
      const dx = p.x - mouse.x;
      const dy = p.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 150 && dist > 0) {
        const force = (150 - dist) / 150 * 0.5;
        pushX = (dx / dist) * force;
        pushY = (dy / dist) * force;
      }

      p.x += (p.vx + drift * 0.02 + pushX) * (dt / 16);
      p.y += (p.vy + pushY) * (dt / 16);
      p.rotation += p.rotationSpeed * dt;

      // Wrap around edges with margin
      if (p.x < -150) p.x = W + 100;
      if (p.x > W + 150) p.x = -100;
      if (p.y < -100) p.y = H + 50;
      if (p.y > H + 100) p.y = -50;

      // Draw
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.font = `${p.size}px ui-monospace, SFMono-Regular, Menlo, Monaco, monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      if (isDark) {
        ctx.fillStyle = `rgba(6, 182, 212, ${alpha})`;
      } else {
        ctx.fillStyle = `rgba(15, 118, 110, ${alpha * 3})`;
      }

      // Subtle glow on nearby particles
      if (dist < 200) {
        const glowIntensity = (200 - dist) / 200 * 0.15;
        if (isDark) {
          ctx.shadowColor = 'rgba(6, 182, 212, 0.3)';
        } else {
          ctx.shadowColor = 'rgba(15, 118, 110, 0.2)';
        }
        ctx.shadowBlur = 15 * glowIntensity;
      }

      ctx.fillText(p.text, 0, 0);
      ctx.restore();
    });

    // Draw faint connecting lines between nearby particles
    ctx.lineWidth = 0.5;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i];
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const lineAlpha = (1 - dist / 120) * (isDark ? 0.04 : 0.08);
          ctx.strokeStyle = isDark
            ? `rgba(6, 182, 212, ${lineAlpha})`
            : `rgba(15, 118, 110, ${lineAlpha})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
  }

  requestAnimationFrame(animate);
})();
