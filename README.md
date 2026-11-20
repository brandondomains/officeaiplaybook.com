# Office AI Playbook (`officeaiplaybook.com`)

Practical, calm, handbook-style AI workflows, reusable prompts, and privacy-first templates for everyday office work.

## What's Included

- **Standalone Brand Identity**: Custom geometric book/spark SVG logo (`assets/img/logo.svg`), favicon (`assets/img/favicon.svg`), and OG social preview graphic (`assets/img/og-card.svg`) built specifically for `officeaiplaybook.com`.
- **Dashboard Homepage (`index.html`)**: Live client-side search, category filtering, mobile offcanvas navigation, and quick-access cards across playbooks and the prompt library.
- **4 Complete Playbook Episodes (`playbook/`)**:
  1. `01-5-minute-daily-setup` — Morning triage, prioritization, and draft-ready templates.
  2. `02-email-faster-still-human` — Drafting replies, managing difficult threads, and tone calibration without sounding robotic.
  3. `03-meeting-prep-and-summaries` — Agenda building, note synthesis, decision extraction, and follow-up tracking.
  4. `04-turning-notes-into-reports` — Moving from scattered research and raw notes to structured briefing memos.
- **9 Prompt Library Tools & Guides (`library/`)**:
  - One-click **Copy** buttons on every prompt and template block.
  - Includes Email Rewrite, Meeting Minutes, Redaction Checklist, Safe Summary, Decision Record, Report Outline Generator, Weekly Status Update, Policy & Jargon Translator, and the downloadable/copy-ready Starter Pack.

## Run Locally

```bash
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000` in your browser.

## Customizing & Adding Content

- **Add a Playbook Episode**: Create `playbook/05-your-slug/index.md` using `layout: playbook` and increment `episode: 5`. It will appear automatically on `/playbook/`.
- **Add a Library Item**: Create `library/your-slug/index.md` using `layout: item`.
- **Branding & Colors**: Edit CSS variables in `assets/css/style.css` and vector marks in `assets/img/`.
