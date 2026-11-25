# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences carry equal weight:

- **Hiring decision-makers** (recruiters, hiring managers, engineering leaders) checking whether Gughanathan Mani fits a senior or lead role. They skim fast, often from a CV or LinkedIn link, and need to see seniority, scope and real shipped work within seconds.
- **Freelance and consulting clients**: businesses that need AI assistants, voice agents, Python/FastAPI backends, cloud infrastructure or data pipelines built. They want evidence that he can own a problem end to end, and an easy way to start a conversation.

Success for both is the same action: they get in touch (email, LinkedIn, or Freelancer).

## Product Purpose

gugupy.me is the personal site and portfolio of Gughanathan Mani ("gugu", handle `gugupy`). It presents who he is, what he has built, and where he has worked, then turns interest into contact. It is open to both full-time roles and freelance work.

## Positioning

Lead with seniority: a lead engineer / consultant who designs solution architecture, leads engineering teams through delivery, and acts as the technical point of contact for clients. This is backed by 9+ years across Linux administration and cloud infrastructure (Azure, AWS, GCP), and since 2023 by hands-on Python backend and AI assistant work (LLM chat and voice agents). The hands-on range is the proof; the seniority is the headline.

**Approved wording (2026-11-26):** role line "Lead Consultant · Python, AI & Cloud"; hero headline "Transforming ideas into scalable systems." (kept by choice over the rewrite); line under the pitch "I build AI assistants and the cloud systems that keep them running."; bio opens "A lead consultant with 9+ years of experience…". The "9+ years" figure is total career length; never attach it to AI or any single skill. Past job titles in the timeline stay as they were held.

## Operating Context

- Visitors arrive from a CV, LinkedIn, GitHub, X or a Freelancer profile, on desktop or phone.
- Home page (`index.html`): hero, stats, about with quick facts, skills, experience timeline, projects, contact.
- Project overview pages (`project.html?p=<slug>`): one page per project, with prev/next navigation between projects.
- Contact paths: direct email (with copy button), LinkedIn, GitHub, X, Freelancer. Replies promised "within a day"; local time shown in IST.

## Capabilities and Constraints

- **Stay plain static:** HTML, CSS and vanilla JS served from GitHub Pages at the custom domain `gugupy.me` (`CNAME`). No framework, no build step.
- **Content lives in `data.json`:** all copy, stats, experience, skills and projects are rendered from `data.json` by `static/script.js`. New content goes into the JSON, never hard-coded in HTML. Optional per-project fields include `cover`, `coverSrcset`, `snippet`, `features`, `facts`, `live`, `github`.
- **Keep the theme switcher:** light / dark / auto mode plus a seven-color accent picker, remembered per visitor in `localStorage`. The site default lives in `data.json` → `theme`.
- Icons come from a single SVG sprite (`static/icons.svg`).
- Reduced-motion preference turns off all animation; content must stay visible without JavaScript-driven reveals.

## Brand Commitments

- Name: Gughanathan Mani. Wordmark: `__gugu__`. Handle: `gugupy`.
- "Made in India"; based in India and working remotely.
- Voice in existing copy: first person, plain and direct ("I build AI assistants and the cloud systems that keep them running.").

## Evidence on Hand

- **Experience:** Saksoft, Lead Consultant (Jun 2026–present); BI2Value GmbH, Python Developer / DevOps Engineer (Mar 2023–Jun 2026, remote); ITC Infotech India, Linux Administrator / Azure Cloud Engineer (Mar 2019–Feb 2023); Fractalio Data, Linux Administrator (Mar 2017–Mar 2019).
- **Projects (8, each with an overview page):** Git Aliases (hobby, Go CLI), Fonki (AI phone assistant), PAFIS (aviation fault-isolation decision support), Fastify Admin, AdminJS Keycloak Provider, Hausaufgaben Wiki, Langchain Agent Bot, Morse Code Translator.
- **Stats as claimed in `data.json`:** 9+ years experience, 15+ projects shipped, 3 cloud platforms, 4+ open-source PRs.
- **Imagery:** portrait photo (`images/avatar-portrait.*`, `images/avatar-square.webp`), Fastify Admin cover (`images/projects/fastify-admin.*`). Unused: `images/avatar.jpg`, `images/gallery/`, `images/projects/phelina.gif`.
- **Education:** B.Tech (Information Technology), Anna University. Languages: Tamil, Kannada, English.
- **Absent, must not be fabricated:** testimonials, client logos, named clients beyond employers, case-study metrics or outcomes, certifications, pricing or rates.

## Product Principles

1. **Seniority first, depth as proof.** Lead with architecture, leadership and client ownership; let the hands-on stack and shipped projects back it up.
2. **Serve both buyers on one path.** A hiring manager and a freelance client should each find their reason to reach out without a separate funnel.
3. **Every claim traces to real work.** Stats, skills and statements point to projects, roles or code that exist; nothing invented.
4. **Contact is always one step away.** Whatever the visitor is reading, the next move (email, LinkedIn, Freelancer) is obvious.
5. **Content stays editable in one place.** Updating the site means editing `data.json`, not markup.
