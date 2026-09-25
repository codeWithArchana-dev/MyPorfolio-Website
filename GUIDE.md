# 📘 Complete Guide — Archana Vishwakarma Portfolio Website

This guide explains everything in **very simple language**.
You do not need to be an expert. Just follow the steps one by one.

---

## 📑 What is inside this guide

1. [What is this?](#1-what-is-this)
2. [What you need before starting](#2-what-you-need-before-starting)
3. [How to run the website on your computer](#3-how-to-run-the-website-on-your-computer)
4. [⭐ How to change the content (most important)](#4--how-to-change-the-content-most-important)
5. [How to change photos, resume and certificates](#5-how-to-change-photos-resume-and-certificates)
6. [How to make the contact form work](#6-how-to-make-the-contact-form-work)
7. [How to change colours](#7-how-to-change-colours)
8. [How to upload the code to GitHub](#8-how-to-upload-the-code-to-github)
9. [How to make the website live](#9-how-to-make-the-website-live)
10. [Things that still need to be filled](#10-things-that-still-need-to-be-filled)
11. [If something breaks](#11-if-something-breaks)

---

## 1. What is this?

This is a personal portfolio website for **Archana Vishwakarma**, made for
showing her skills to companies and recruiters.

It is built with:

| Thing used | What it does |
| --- | --- |
| React | Builds the website |
| Vite | Makes the website run fast |
| Tailwind CSS | Handles the design and colours |
| Framer Motion | Adds the smooth animations |
| React Router | Handles the separate project pages |

**The website has these sections:** Home, Quick Profile, About, Skills,
Projects, Practical Experience, Achievements & Certificates, Education,
GitHub, Why Hire Me, Recruiter Quick Profile, Contact, and Footer.

It also works in **dark mode and light mode**, and works properly on
**mobile, tablet, and computer**.

---

## 2. What you need before starting

You only need **one** thing installed: **Node.js**.

**How to install it:**

1. Go to https://nodejs.org
2. Download the **LTS** version (the green button on the left)
3. Install it — just keep clicking "Next"
4. Restart your computer

**How to check it worked:**

Open Command Prompt (press `Windows key`, type `cmd`, press Enter) and type:

```
node -v
```

If you see something like `v20.11.0`, it is installed correctly. 👍

---

## 3. How to run the website on your computer

Do this **once** to set up:

1. Unzip the folder somewhere easy, like your Desktop
2. Open Command Prompt
3. Go into the folder. Type `cd ` (with a space), then drag the folder
   into the Command Prompt window, then press Enter
4. Type this and press Enter:

```
npm install
```

Wait 1–2 minutes. It is downloading the things the website needs.
You only need to do this **one time**.

**Now, to start the website:**

```
npm run dev
```

You will see a link like `http://localhost:5173`.
Open that link in your browser. The website is now running! 🎉

**Very useful:** while this is running, if you change any file and save it,
the website updates by itself immediately. You do not need to restart.

**To stop it:** press `Ctrl + C` in the Command Prompt.

---

## 4. ⭐ How to change the content (most important)

> **Remember this one thing:**
> **Almost all the text on the website comes from ONE file.**
>
> That file is: **`src/data/site.js`**

Open that file in any text editor (Notepad works, but
**VS Code** is much better — free from https://code.visualstudio.com).

Change the text **inside the quotation marks** `' '`, save the file, and the
website updates automatically.

### ⚠️ Three rules to avoid breaking the site

1. Only change text **inside the quotes**. Do not delete the quotes.
2. Do not delete the commas `,` at the end of lines.
3. If the text itself has an apostrophe (like `I'm`), write it as `I\'m`
   or use double quotes: `"I'm"`.

### 4.1 Name, email, and links

Find the part that starts with `export const profile`:

```js
export const profile = {
  name: 'Archana Vishwakarma',        // ← her name
  email: 'archana10122004@gmail.com', // ← her email

  links: {
    linkedin: 'https://www.linkedin.com/in/codewitharchu',
    github: 'https://github.com/codeWithArchana-dev',
  },
}
```

Just replace the text inside the quotes with the new value.

### 4.2 About Me section

Find `export const about`. Each line inside `paragraphs` is one paragraph
on the website:

```js
export const about = {
  paragraphs: [
    'First paragraph goes here.',
    'Second paragraph goes here.',
  ],
}
```

To **add** a paragraph, copy a line and paste it below.
To **remove** one, delete that whole line.

### 4.3 Skills

Find `export const skillGroups`. To add a skill, just add it to the list:

```js
{
  title: 'Frontend Development',
  skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Bootstrap'],
  //                                       ↑ add new skills here, inside quotes
},
```

> **Important:** Only add a skill if Archana can actually talk about it in an
> interview. Adding fake skills causes problems later.

### 4.4 Projects

Find `export const projects`. Each project looks like this:

```js
{
  slug: 'clinic-app',                    // web address of the project page — no spaces
  title: 'MediCare+ — Clinic App',       // project name shown on the card
  summary: 'Short description here.',    // 1–2 lines
  tech: ['React.js', 'Bootstrap'],       // technology tags
  features: [
    'First feature',
    'Second feature',
  ],
  liveUrl: 'https://...',                // the working website link
  repoUrl: 'https://github.com/...',     // the GitHub code link
  cover: '/projects/clinic-app.svg',     // the picture on the card

  caseStudy: {
    overview: 'What is this project?',
    purpose: 'Why was it made?',
    role: 'What did Archana build herself?',
    challenges: [],   // problems faced while making it
    solutions: [],    // how those problems were solved
    learned: [],      // what she learned
    screenshots: [],
  },
},
```

**To add a new project:** copy one whole block (from `{` to `},`) and paste
it below, then change the values. Make sure `slug` is different from the others.

**About the empty `[ ]` parts:** `challenges`, `solutions`, and `learned` are
empty on purpose. When they are empty, those boxes simply do not appear on
the website — nothing looks broken. Fill them in when you have real answers.
This is the **most valuable thing you can add**, because interviewers always
ask about it.

### 4.5 Certificates and Achievements

Find `export const certificates`. Each certificate looks like this:

```js
{
  id: 'unacademy',
  title: 'Course Name Here',
  organization: 'Unacademy',
  date: 'March 2024',
  result: '',                     // e.g. '1st Place' or 'Participant'
  description: 'What was learned.',
  credentialId: '',               // leave empty if there is none
  verifyUrl: '',                  // leave empty if there is none
  file: '/certificates/unacademy.jpg',   // the certificate image
  icon: 'Award',                  // use 'Trophy' for competitions
},
```

> ⚠️ **Be honest with `result`.** If it was only participation, write
> `'Participant'`. Do not write "Winner" if she did not win — companies
> do check this.

### 4.6 Education

Find `export const education`:

```js
{
  degree: 'Master of Computer Applications (MCA)',
  institution: 'Indira Gandhi National Open University (IGNOU)',
  period: 'Currently Pursuing',
  current: true,        // true = shows a green "In Progress" tag
  description: 'Short line about it.',
},
```

### 4.7 Menu at the top

Find `export const navLinks` to change the menu items.

---

## 5. How to change photos, resume and certificates

All picture and file changes happen in the **`public`** folder.

### 5.1 The photo on the home page

Right now the website shows a **drawing (avatar)**, not a real photo.

**To use a real photo instead:**

1. Put the photo in the `public` folder. Name it `archana.jpg`
2. Open `src/data/site.js`
3. Find this line:

```js
photoPath: '/avatar.svg',
```

4. Change it to:

```js
photoPath: '/archana.jpg',
```

5. Save. Done!

> 💡 **Tip:** A real photo works much better than a drawing. Recruiters
> trust real photos more. Use a clear photo where the face is visible.
> A tall photo (portrait) fits best.

### 5.2 The resume

The resume file is here: `public/Archana-Vishwakarma-Resume.pdf`

**To use a different resume:**

Simply delete that file and put the new one in the same folder,
**with exactly the same name**.

That is all. Every "Download Resume" button on the website will
automatically use the new file. You do not need to change any code.

> ⚠️ The name must match **exactly**, including capital letters and dashes.

### 5.3 Certificate images

Put the certificate pictures in `public/certificates/`.
Then in `src/data/site.js`, set the `file` value to match the file name:

```js
file: '/certificates/hackathon.jpg',
```

Both images (`.jpg`, `.png`) and PDF files work.

### 5.4 Project pictures

Put project screenshots in `public/projects/`.
Then set the `cover` value in `site.js` to match.

> **Best tip:** Take a real screenshot of each project website and use that.
> It looks much more professional than a drawing.
> Good size: 1600 × 1000 pixels.

---

## 6. How to make the contact form work

**Right now the form already works.** When someone fills it and clicks Send,
it opens their email app with the message ready. This is fine and never fails.

**If you want messages delivered directly to the inbox instead**, do this:

1. Make a free account at https://www.emailjs.com
2. Add an email service and create a template
3. In the template, use these variable names:
   `from_name`, `from_email`, `company`, `message`, `to_name`
4. In the website folder, make a copy of the file `.env.example`
   and rename the copy to `.env`
5. Open `.env` and fill in the three values from your EmailJS account:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

6. Stop the website (`Ctrl + C`) and start it again with `npm run dev`

> ⚠️ **Never upload the `.env` file to GitHub.** It is already blocked
> automatically, so you do not need to worry — just do not force it.
>
> When you make the site live, add these same three values in the
> hosting website's "Environment Variables" settings.

---

## 7. How to change colours

Open the file `tailwind.config.js` and find the `brand` colours:

```js
brand: {
  50:  '#eef4ff',
  500: '#345ffd',
  600: '#1f3ef3',   // ← this is the main blue used on buttons
  700: '#182cdf',
}
```

Change these colour codes to change the whole website's colour theme.
You can pick colour codes from https://tailwindcss.com/docs/customizing-colors

---

## 8. How to upload the code to GitHub

1. Go to https://github.com and log in
2. Click the **+** button at the top right → **New repository**
3. Give it a name, for example `archana-portfolio`
4. Choose **Private** (or Public — your choice)
5. **Do not** tick "Add a README file"
6. Click **Create repository**
7. GitHub will show you some commands. In your project folder, open
   Command Prompt and type these one by one:

```
git init
git add .
git commit -m "First version of portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/archana-portfolio.git
git push -u origin main
```

Replace `YOUR-USERNAME` with the real GitHub username.

> 💡 `node_modules` and `.env` will **not** be uploaded. That is correct
> and normal — they are blocked on purpose.

---

## 9. How to make the website live

### Option A — Vercel (easiest, recommended)

1. Go to https://vercel.com and sign in **with GitHub**
2. Click **Add New → Project**
3. Choose the repository you just uploaded
4. Vercel will automatically detect the correct settings — **do not change anything**
5. Click **Deploy**
6. Wait about one minute. Your website is live! 🎉

You will get a free link like `https://archana-portfolio.vercel.app`

**Very useful:** after this, every time you upload a change to GitHub, the
live website updates automatically. You do nothing extra.

### Option B — Netlify

1. Go to https://netlify.com and sign in with GitHub
2. Click **Add new site → Import an existing project**
3. Choose the repository
4. Settings to enter:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click **Deploy**

> ✅ Both options are already fully set up in the code. The files
> `vercel.json` and `public/_redirects` make sure the separate project
> pages work correctly even if someone refreshes the page.

### ⚠️ One important step after going live

Once you know the real website address, open these three files and replace
the old address with the new one:

- `index.html`
- `public/robots.txt`
- `public/sitemap.xml`

Search for `archana-vishwakarma-portfolio.vercel.app` and replace it
everywhere with the real address.

This helps Google find the site, and makes the link preview look correct
when it is shared on WhatsApp or LinkedIn.

---

## 10. Things that still need to be filled

These are the parts that still have placeholder text. Search for the word
`TODO` inside `src/data/site.js` to find them quickly.

| What | Where | Why it matters |
| --- | --- | --- |
| Certificate details | `certificates` in `site.js` | 5 places say `TODO` — the Unacademy course name and date, and the hackathon's college, year, and result |
| Certificate images | `public/certificates/` | Files are missing, so the popup shows "file not found" |
| Project screenshots | `public/projects/` | Real screenshots look far better than the drawings |
| Challenges / Solutions / Learned | each project in `site.js` | Empty right now. **Most valuable thing to add** — interviewers always ask this |
| Real photo | `public/` | A drawing is used at the moment |
| Social share image | `public/og-image.png` (1200 × 630) | Makes the link look good when shared |

**About the Bank-Management project:** it is not on the website because that
GitHub repository is **empty** — there is no code inside it. Once code is
added there, it can be added as a fourth project.

---

## 11. If something breaks

| Problem | What to do |
| --- | --- |
| `npm is not recognized` | Node.js is not installed. Go back to Step 2. |
| Website shows a blank white page | Press `F12` in the browser, click "Console", and read the red error. Usually a missing comma in `site.js`. |
| Changes are not showing | Make sure you **saved** the file (`Ctrl + S`). Then refresh the browser. |
| Photo not showing | Check the file name matches **exactly** in `site.js` — capital letters matter. |
| Error after editing `site.js` | You probably deleted a comma, a quote, or a bracket. Undo with `Ctrl + Z` until it works again. |
| Everything is broken | Delete the `node_modules` folder and run `npm install` again. |

**Useful commands:**

```
npm install     → set up the project (only once)
npm run dev     → run the website on your computer
npm run build   → make the final version for going live
npm run preview → check the final version before going live
```

---

## 📂 Where everything is

```
├── public/                  ← images, resume, certificates
│   ├── avatar.svg              the drawing on the home page
│   ├── favicon.svg             small icon in the browser tab
│   ├── Archana-...-Resume.pdf  the resume
│   ├── projects/               project pictures
│   └── certificates/           certificate pictures  ← ADD FILES HERE
│
├── src/
│   ├── data/site.js         ⭐ ALL TEXT IS HERE — edit this one
│   ├── components/             the design pieces of each section
│   ├── pages/                  home page and project detail pages
│   └── index.css               overall styling
│
├── index.html               ← page title and Google settings
├── tailwind.config.js       ← colours
└── package.json             ← list of tools used
```

---

## ✅ Final checklist before sharing with companies

- [ ] Real photo added (or keep the drawing if preferred)
- [ ] Latest resume PDF added
- [ ] Certificate details filled and images added
- [ ] Challenges / Solutions / Learned filled for each project
- [ ] All project links open correctly
- [ ] Checked the site on a mobile phone
- [ ] Tried dark mode and light mode
- [ ] Sent a test message through the contact form
- [ ] Website address updated in the 3 files (Step 9)

---

**Remember the main point:**
👉 To change text → edit **`src/data/site.js`**
👉 To change images or files → put them in the **`public`** folder

That is all you need. Good luck! 🚀
