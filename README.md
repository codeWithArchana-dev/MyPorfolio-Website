# Archana Vishwakarma — Portfolio

**Live:** https://archana-vishwakarma-portfolio.vercel.app

A recruiter-focused frontend portfolio built with React, Vite, Tailwind CSS, Framer Motion, and React Router.

> **Ownership note:** the private GitHub repo currently lives under the
> `aashishbharti04` account and the Vercel project under the `aashanas-projects`
> scope — neither is the `codeWithArchana-dev` account used everywhere else on the
> site. Worth transferring both to Archana's own accounts before sharing this
> widely. See "Transferring ownership" below.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

---

## ⚠️ Before going live

The site is fully built, but the **content is still placeholder**. Everything you need to change lives in one file: [`src/data/site.js`](src/data/site.js). Search that file for `TODO:` — every hit is something that must be replaced with real information.

### 1. Personal details (`src/data/site.js` → `profile`)

✅ Email, LinkedIn, and GitHub are set and verified. Nothing to do here.

### 2. Files in `/public`

| File | Path | Status |
| --- | --- | --- |
| Resume PDF | `/public/Archana-Vishwakarma-Resume.pdf` | ⚠️ Starter version — replace with your own |
| Avatar | `/public/avatar.svg` | ✅ Illustrated placeholder in use |
| Profile photo | `/public/archana.jpg` | Optional — see below |
| Hackathon certificate | `/public/certificates/hackathon.jpg` | ❌ Missing |
| Unacademy certificate | `/public/certificates/unacademy.jpg` | ❌ Missing |
| Project screenshots | `/public/projects/*.png` | ❌ Missing |
| Social share image | `/public/og-image.png` (1200×630) | ❌ Missing |

**Swapping the avatar for a real photo:** drop the image into `/public` and change
`profile.photoPath` in `src/data/site.js` from `'/avatar.svg'` to `'/archana.jpg'`.
A real photo is worth adding — recruiters respond better to one.

**The resume PDF** is a generated starter containing only verified facts (summary,
skills, practical experience, education). It has no projects or certificates section
because that data wasn't available. Replace it with your own PDF using the exact same
filename and every download button across the site keeps working. If your resume lists
your portfolio URL, add the deployed link once it's live.

Until a file exists the UI degrades gracefully — missing screenshots and certificates
show a clear placeholder — so nothing looks broken while you gather assets.

### 3. Projects (`projects` array)

✅ All three projects are live, with working demo and repository links:

| Project | Live | Repo |
| --- | --- | --- |
| MediCare+ (Clinic App) | [clinic-app-flax.vercel.app](https://clinic-app-flax.vercel.app) | [Clinic-app](https://github.com/codeWithArchana-dev/Clinic-app) |
| Google Gemini Clone | [google-gemini-rust-one.vercel.app](https://google-gemini-rust-one.vercel.app) | [Google-gemini](https://github.com/codeWithArchana-dev/Google-gemini) |
| TextUtils | [text-utils-chi-flax.vercel.app](https://text-utils-chi-flax.vercel.app) | [TextUtils](https://github.com/codeWithArchana-dev/TextUtils) |

Still worth adding to each entry: `challenges`, `solutions`, and `learned`. These
are deliberately empty — those blocks hide themselves rather than showing invented
content, and they're exactly what interviewers dig into.

**Bank-Management is not listed.** That repository is currently empty (no commits),
so there's nothing to show. Push the code and it can be added as a fourth project.

### 4. Certificates (`certificates` array)

Fill in the exact certificate names, issuing organisations, and dates. For the hackathon, state the real outcome — if it was participation only, leave `result: 'Participant'`. Don't present participation as a win; recruiters check.

### 5. Repositories (`repositories` array)

✅ Populated with the three real repositories, each with a live demo link.

### 6. Deployment URL

Once deployed, replace `https://archana-vishwakarma.vercel.app` in:

- `index.html` (canonical + Open Graph tags)
- `public/robots.txt`
- `public/sitemap.xml`

---

## Contact form

The form works out of the box: without EmailJS credentials it opens the visitor's email client with a prefilled message, so it never silently fails.

To receive messages directly instead:

1. Create a free account at [emailjs.com](https://www.emailjs.com).
2. Copy `.env.example` to `.env` and fill in the three values.
3. Your EmailJS template should use these variables: `from_name`, `from_email`, `company`, `message`, `to_name`.

Add the same three variables to your host's environment settings (Vercel/Netlify dashboard) so the deployed site picks them up.

---

## Deployment

Both hosts are pre-configured for single-page-app routing, so `/projects/<slug>` works on a hard refresh.

- **Vercel** — already deployed. `vercel.json` handles SPA rewrites, so
  `/projects/<slug>` survives a hard refresh. Redeploy with `vercel deploy --prod`.
- **Netlify** — build command `npm run build`, publish directory `dist`; `public/_redirects` handles rewrites.

### Transferring ownership

To move this to Archana's own accounts:

1. **GitHub** — on the repo, Settings → Danger Zone → Transfer ownership → enter
   `codeWithArchana-dev`. Then update the local remote:
   `git remote set-url origin https://github.com/codeWithArchana-dev/archana-vishwakarma-portfolio.git`
2. **Vercel** — sign in as Archana, import the transferred repo as a new project,
   and delete the old one. Pushing to `main` then redeploys automatically.

Transferring changes the deployment URL, so update the SEO URLs afterwards:
they appear in `index.html`, `public/robots.txt`, and `public/sitemap.xml`.

---

## Structure

```
src/
├── data/site.js          ← all content lives here
├── context/              theme (dark/light) provider
├── components/
│   ├── ui/               Section, Reveal, Modal, Icon primitives
│   └── *.jsx             one file per homepage section
└── pages/
    ├── Home.jsx          composes the sections
    └── ProjectDetail.jsx case-study page (lazy-loaded)
```

## Notes on the build

- **No fake skill percentages.** Skills are grouped chips — an unverifiable "React 95%" reads as padding.
- **No invented work experience.** The Practical Experience section presents personal and academic projects honestly.
- **Accessibility.** Semantic landmarks, skip link, visible focus rings, focus-trapped modals, `aria-live` form status, and full keyboard navigation.
- **Reduced motion.** All animation is disabled for visitors with `prefers-reduced-motion` set.
- **Performance.** Route-level code splitting, lazy images, manual vendor chunks, and a pre-paint theme script that avoids a flash of the wrong theme.
