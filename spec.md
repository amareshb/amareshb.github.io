# Personal Website - Architecture & Specification Document

## Overview

A minimal, elegant personal website for a **backend engineer in data platform**. The design is inspired by [zenorocha.com](https://zenorocha.com) — clean, dark-themed, text-focused, and optimized for blogging.

**Hosting:** GitHub Pages (free `username.github.io` domain)  
**Target:** Static site, no backend required

---

## Design Philosophy

- **Minimal & Clean:** No flashy animations, no clutter
- **Light/Dark Theme:** System preference detection with manual toggle, accessible color schemes for both modes
- **Text-Focused:** Typography is the hero, not images
- **Fast:** Static HTML/CSS, minimal JavaScript
- **Mobile-Responsive:** Works on all devices

---

## Tech Stack

### Recommended: Pure HTML + CSS + Minimal JS
Since this will be hosted on GitHub Pages and needs to be simple:

```
Option A: Pure Static (Simplest)
├── HTML + Tailwind CSS (via CDN)
├── No build step required
├── Blog posts as individual HTML files
└── Good for: Getting started fast, full control

Option B: Jekyll (GitHub Pages Native)
├── Markdown for blog posts
├── Liquid templating
├── Automatic builds on GitHub Pages
└── Good for: Easier blog management, no local build needed

Option C: Hugo/Astro (Advanced)
├── Markdown + templating
├── Requires GitHub Actions for build
└── Good for: If you want more features later
```

**Recommendation for v1:** Start with **Option A (Pure HTML + Tailwind)** for maximum simplicity and control. Can migrate to Jekyll later if blog management becomes tedious.

---

## Site Structure

```
username.github.io/
│
├── index.html          # Homepage
├── about.html          # About page
├── blog.html           # Blog listing page
├── projects.html       # Projects page
├── contact.html        # Contact page (optional, can be in footer)
├── uses.html           # Tools & setup (optional)
│
├── blog/
│   ├── post-1.html     # Individual blog post
│   ├── post-2.html
│   └── ...
│
├── css/
│   └── styles.css      # Custom styles (if needed beyond Tailwind)
│
├── assets/
│   ├── profile.jpg     # Profile photo
│   └── favicon.ico
│
└── README.md
```

---

## Page Specifications

### 1. Homepage (`index.html`)

**Layout:**
```
┌─────────────────────────────────────────────────┐
│  [Logo/Initial]              [Nav Links]        │  ← Header (optional)
├─────────────────────────────────────────────────┤
│                                                 │
│  ┌─────────┐                                    │
│  │ Sidebar │    # Your Name                     │
│  │         │                                    │
│  │ - About │    **Role at [Company]**           │
│  │ - Blog  │    Tagline about what you do       │
│  │ - Proj  │                                    │
│  │ - Uses  │    [Email] [GitHub] [LinkedIn]     │
│  │         │    [Twitter] [Substack]            │
│  └─────────┘                                    │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Content:**
- Name (large heading)
- Current role + company (with link)
- One-line tagline/description
- Social links (icons or text)

**Example:**
```
# John Doe

**Backend Engineer at [DataCo](https://dataco.com)**
Building data platforms. Writing about distributed systems.

[Email] [GitHub] [LinkedIn] [Twitter] [Substack]
```

---

### 2. About Page (`about.html`)

**Sections:**
1. **Short intro** (2-3 sentences, casual)
2. **Bio** (2-3 paragraphs, more formal — for press/podcasts)
3. **Now** (what you're currently working on)
4. **Previously** (past roles, optional)

**Example Content:**
```markdown
## About

I'm a backend engineer passionate about data infrastructure and distributed systems. 
Currently building [X] at [Company]. I write about what I learn.

When I'm not coding, I enjoy [hobbies].

---

### Bio (for press)

[Your Name] is a backend engineer specializing in data platforms. 
Currently at [Company], they work on [specific area]. 
Previously, they built [X] at [Y Company].

---

### Now

- Building [project] at [Company]
- Writing about [topic]
- Learning [technology]
```

---

### 3. Blog Page (`blog.html`)

**Layout:**
- Page title: "Blog" or "Writing" or "Articles"
- Subtitle: Brief description
- List of posts (title + date, optionally + short description)
- Support for **external links** (Substack posts)

**Post List Format:**
```
# Blog

Thoughts on backend engineering, data systems, and lessons learned.

---

[Post Title]                                    Jan 2026
[Another Post Title]                            Dec 2025
[External: My Substack Post] →                  Nov 2025  ← external link indicator
```

**Blog Post Page (`blog/post-slug.html`):**
- Title
- Date
- Content (supports code blocks, headers, lists)
- Back link to blog index
- Optional: Tags

---

### 4. Projects Page (`projects.html`)

**Layout:**
- List of projects with:
  - Name
  - One-line description
  - Link (GitHub, live demo, or both)
  - Status: Active / Archived / Deprecated (optional)

**Example:**
```
# Projects

Side projects and open source work.

---

**[Project Name](https://github.com/...)**
Brief description of what it does.

**[Another Project](https://...)**
Another brief description.
```

---

### 5. Uses Page (`uses.html`) — Optional

**Sections:**
- **Hardware:** Laptop, monitor, keyboard, etc.
- **Development:** Editor, terminal, tools
- **Software:** Apps you use daily
- **Services:** Cloud, hosting, etc.

---

### 6. Contact

Can be:
- A separate page, OR
- Just social links on homepage/footer

**If separate page:**
- Email (obfuscated or contact form)
- Social links
- Optional: Calendly link for calls

---

## Navigation

**Sidebar Navigation (Desktop):**
```
[Logo/Initial]

About
Blog
Projects
Uses (optional)

[Theme Toggle]  ← Light/Dark mode switch
```

**Mobile:** Hamburger menu or horizontal nav (with theme toggle in header/menu)

**Footer:**
```
© 2026 · [GitHub] [LinkedIn] [Twitter]
```

---

## Design Tokens

### Colors (Light & Dark Themes)

**Dark Theme (Default):**
```css
--bg-primary: #0a0a0a;        /* Main background - near black */
--bg-secondary: #111111;      /* Card/sidebar background */
--text-primary: #fafafa;      /* Main text - near white */
--text-secondary: #a1a1a1;    /* Muted text - gray */
--accent: #3b82f6;            /* Links - blue */
--accent-hover: #60a5fa;      /* Link hover */
--border: #262626;            /* Borders */
```

**Light Theme:**
```css
--bg-primary: #ffffff;        /* Main background - white */
--bg-secondary: #f9fafb;      /* Card/sidebar background - light gray */
--text-primary: #111827;      /* Main text - near black */
--text-secondary: #6b7280;    /* Muted text - gray */
--accent: #2563eb;            /* Links - blue */
--accent-hover: #1d4ed8;      /* Link hover - darker blue */
--border: #e5e7eb;            /* Borders - light gray */
```

**Theme Toggle Implementation:**
- Use `prefers-color-scheme` media query to detect system preference
- Store user's manual preference in localStorage
- Toggle button in header/sidebar
- Smooth transition between themes (CSS transitions)

### Typography
```css
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;

--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.25rem;
--text-2xl: 1.5rem;
--text-3xl: 1.875rem;
--text-4xl: 2.25rem;
```

### Spacing
```css
/* Use Tailwind's default spacing scale */
/* Key values: 4 (1rem), 6 (1.5rem), 8 (2rem), 12 (3rem), 16 (4rem) */
```

---

## Responsive Breakpoints

```css
/* Mobile first */
sm: 640px   /* Small devices */
md: 768px   /* Tablets */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
```

**Layout Changes:**
- **Mobile:** Single column, no sidebar, hamburger nav
- **Desktop (lg+):** Sidebar + main content

---

## Components

### 1. Navigation Sidebar
```html
<nav class="sidebar">
  <a href="/" class="logo">JD</a>
  <ul>
    <li><a href="/about">About</a></li>
    <li><a href="/blog">Blog</a></li>
    <li><a href="/projects">Projects</a></li>
    <li><a href="/uses">Uses</a></li>
  </ul>
</nav>
```

### 2. Social Links
```html
<div class="social-links">
  <a href="mailto:...">Email</a>
  <a href="https://github.com/...">GitHub</a>
  <a href="https://linkedin.com/in/...">LinkedIn</a>
  <a href="https://twitter.com/...">Twitter</a>
</div>
```

### 3. Blog Post Card
```html
<article class="post-item">
  <a href="/blog/post-slug">
    <h3>Post Title</h3>
    <time>Jan 15, 2026</time>
  </a>
</article>
```

### 4. Project Card
```html
<div class="project-item">
  <h3><a href="https://github.com/...">Project Name</a></h3>
  <p>Brief description of the project.</p>
</div>
```

### 5. Theme Toggle
```html
<button id="theme-toggle" aria-label="Toggle theme">
  <svg class="sun-icon"><!-- Sun icon for light mode --></svg>
  <svg class="moon-icon"><!-- Moon icon for dark mode --></svg>
</button>

<script>
// Detect system preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

// Check localStorage or use system preference
const theme = localStorage.getItem('theme') ||
  (prefersDark.matches ? 'dark' : 'light');

// Apply theme
document.documentElement.setAttribute('data-theme', theme);

// Toggle function
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
}
</script>
```

---

## Blog Post Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Post Title | Your Name</title>
  <meta name="description" content="Brief description of the post">
  <!-- Open Graph tags for social sharing -->
  <meta property="og:title" content="Post Title">
  <meta property="og:description" content="Brief description">
  <meta property="og:type" content="article">
</head>
<body>
  <!-- Nav -->
  <article class="prose">
    <header>
      <h1>Post Title</h1>
      <time datetime="2026-01-15">January 15, 2026</time>
    </header>
    
    <main>
      <!-- Post content here -->
    </main>
    
    <footer>
      <a href="/blog">← Back to Blog</a>
    </footer>
  </article>
</body>
</html>
```

---

## External Blog Links (Substack Integration)

For posts hosted on Substack, add them to the blog list with an external link indicator:

```html
<article class="post-item external">
  <a href="https://yourname.substack.com/p/post-slug" target="_blank" rel="noopener">
    <h3>Post Title <span class="external-icon">↗</span></h3>
    <time>Jan 10, 2026</time>
  </a>
</article>
```

---

## SEO & Meta Tags

Every page should include:

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title | Your Name</title>
  <meta name="description" content="Page description (150-160 chars)">
  
  <!-- Open Graph -->
  <meta property="og:title" content="Page Title">
  <meta property="og:description" content="Description">
  <meta property="og:image" content="/assets/og-image.png">
  <meta property="og:url" content="https://username.github.io/page">
  <meta property="og:type" content="website">
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Page Title">
  <meta name="twitter:description" content="Description">
  
  <!-- Favicon -->
  <link rel="icon" href="/assets/favicon.ico">
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  
  <!-- Tailwind CSS (CDN for simplicity) -->
  <script src="https://cdn.tailwindcss.com"></script>
</head>
```

---

## Implementation Phases

### Phase 0: Archive Existing Site ✅ COMPLETED
- [x] Clone existing `username.github.io` repository
- [x] Create `archive/v1` branch to preserve old version in git history
- [x] Create `_archive/v1/` folder and move all old site files there
- [x] Commit the archive
- [x] Verify old site is preserved before proceeding

### Phase 1: Core (MVP) ✅ MOSTLY COMPLETED
- [x] Homepage with name, role, tagline, social links
- [x] About page with bio, now, and previously sections
- [x] Blog listing page
- [x] 2 sample blog posts (currently Lorem Ipsum placeholders)
- [x] Basic navigation with theme toggle button
- [x] Light/dark theme with toggle (system preference detection + manual control)
- [x] Mobile responsive
- [x] Projects page with 3 GitHub projects
- [ ] **Deploy to GitHub Pages (push v2 to master)**

### Phase 2: Content 🚧 NEXT STEPS
- [x] Projects page
- [ ] **Replace Lorem Ipsum with real blog post content**
- [ ] **Add external Substack links (if applicable)**
- [ ] **Add favicon.ico to /assets/**
- [ ] **Add og-image.png to /assets/ for social sharing**
- [ ] **Add profile.jpg to /assets/ (referenced but missing)**

### Phase 3: Enhancements (Optional) ⏸️ NOT STARTED
- [ ] Uses page
- [ ] RSS feed
- [ ] Search functionality
- [ ] Analytics (Plausible/Umami)
- [ ] Comments (Giscus)

---

## File Naming Conventions

- **Pages:** `lowercase-with-hyphens.html`
- **Blog posts:** `blog/post-title-slug.html`
- **Assets:** `assets/descriptive-name.ext`
- **CSS:** `css/styles.css`

---

## Deployment (GitHub Pages)

### ⚠️ IMPORTANT: Archive Existing Site First

The user already has an existing `username.github.io` site. Before deploying the new version:

**Step 1: Archive the old site**
```bash
# Clone the existing repo (if not already local)
git clone https://github.com/USERNAME/USERNAME.github.io.git
cd USERNAME.github.io

# Create an archive branch for the old version
git checkout -b archive/v1

# Push the archive branch
git push origin archive/v1

# Alternative: Create a folder to keep old files
mkdir -p _archive/v1
# Move all existing files (except .git) into _archive/v1
mv *.html _archive/v1/ 2>/dev/null
mv *.css _archive/v1/ 2>/dev/null
mv *.js _archive/v1/ 2>/dev/null
# ... move other relevant files/folders

# Commit the archived version
git add .
git commit -m "Archive old site to _archive/v1"
```

**Step 2: Deploy new site**
```bash
# Switch back to main branch
git checkout main

# Remove old files from root (keep _archive folder)
# Then add new site files to root

# Commit and push
git add .
git commit -m "Launch new personal website v2"
git push origin main
```

**Folder structure after migration:**
```
username.github.io/
├── _archive/
│   └── v1/                 # Old website files preserved here
│       ├── index.html
│       ├── styles.css
│       └── ...
├── index.html              # NEW site
├── about.html              # NEW site
├── blog.html               # NEW site
├── blog/                   # NEW site
├── projects.html           # NEW site
├── css/                    # NEW site
├── assets/                 # NEW site
└── README.md
```

> **Note:** Files in `_archive/` won't be served by GitHub Pages (underscore prefix). The old site is preserved in git history AND in the archive folder for reference.

---

### Standard Deployment Steps

1. Repository already exists: `username.github.io`
2. Archive old version (see above)
3. Push new code to `main` branch
4. GitHub Pages should already be enabled
5. Site will be live at `https://username.github.io`

**Alternative with custom domain:**
1. Add `CNAME` file with your domain
2. Configure DNS with your domain provider

---

## Content Placeholders

Replace these with your actual content:

```
[YOUR_NAME] → Your full name
[YOUR_ROLE] → e.g., "Backend Engineer"
[YOUR_COMPANY] → e.g., "DataCo"
[YOUR_TAGLINE] → e.g., "Building data platforms. Writing about distributed systems."
[YOUR_EMAIL] → your@email.com
[YOUR_GITHUB] → github.com/username
[YOUR_LINKEDIN] → linkedin.com/in/username
[YOUR_TWITTER] → twitter.com/username
[YOUR_SUBSTACK] → yourname.substack.com
```

---

## Reference Sites

- [zenorocha.com](https://zenorocha.com) - Primary inspiration
- [janvi.me](https://janvi.me) - Timeline style
- [leerob.io](https://leerob.io) - Next.js blog
- [jvns.ca](https://jvns.ca) - Content-first blog

---

## Current Status (January 27, 2026)

### ✅ What's Been Completed

**Site Structure:**
- ✅ Full 4-page website (Home, About, Blog, Projects)
- ✅ 2 blog post templates (currently Lorem Ipsum content)
- ✅ Responsive navigation with theme toggle
- ✅ Mobile-responsive design
- ✅ All pages use semantic HTML with proper meta tags

**Theme System:**
- ✅ Complete light/dark theme implementation
- ✅ CSS custom properties for all colors
- ✅ JavaScript theme toggle (`js/theme.js`)
- ✅ System preference detection (`prefers-color-scheme`)
- ✅ localStorage persistence
- ✅ Smooth theme transitions
- ✅ Sun/moon icon toggle button in navigation

**Content:**
- ✅ Homepage: Name, role, tagline, social links (Email, GitHub, LinkedIn)
- ✅ About page: Intro, bio, "Now" section, "Previously" (education & work)
- ✅ Projects page: 3 projects with GitHub links
- ✅ Blog listing: 2 Lorem Ipsum placeholder posts
- ✅ Individual blog posts: Full article layout with Lorem Ipsum

**Files Created:**
```
amareshb.github.io/
├── index.html              ✅ Homepage
├── about.html              ✅ About page
├── blog.html               ✅ Blog listing
├── projects.html           ✅ Projects page
├── blog/
│   ├── building-scalable-systems.html          ✅ Post 1 (Lorem Ipsum)
│   └── distributed-systems-debugging.html      ✅ Post 2 (Lorem Ipsum)
├── css/
│   └── styles.css          ✅ Theme variables and styles
├── js/
│   └── theme.js            ✅ Theme management logic
└── assets/                 ⚠️  Directory exists but missing files
```

**Current Branch:** `v2`

---

### 🚧 Next Steps / To-Do

**Immediate (Required for launch):**

1. **Add Missing Assets:**
   - [ ] Add `profile.jpg` to `/assets/` (referenced in index.html)
   - [ ] Create/add `favicon.ico` to `/assets/`
   - [ ] Create/add `og-image.png` to `/assets/` (1200x630px for social sharing)

2. **Replace Placeholder Content:**
   - [ ] Write real blog post #1 (replace Lorem Ipsum in `building-scalable-systems.html`)
   - [ ] Write real blog post #2 (replace Lorem Ipsum in `distributed-systems-debugging.html`)
   - [ ] Update blog post titles and descriptions in `blog.html`
   - [ ] Update meta descriptions and Open Graph tags

3. **Deploy:**
   - [ ] Test site locally (`python3 -m http.server 8000`)
   - [ ] Merge `v2` branch to `master` or push to `master` branch
   - [ ] Verify GitHub Pages deployment
   - [ ] Test live site at `https://amareshb.github.io`

**Optional Enhancements (Phase 3):**
- [ ] Create Uses page (`uses.html`)
- [ ] Add external blog links (Substack, Medium, etc.)
- [ ] Implement RSS feed for blog
- [ ] Add search functionality
- [ ] Add analytics (Plausible or Umami)
- [ ] Add comments system (Giscus)

---

## Notes for Claude Code

1. **ARCHIVE FIRST:** The user has an existing site at `username.github.io`. Archive it before making any changes (see Phase 0)
2. **Start simple:** Build the homepage first, then add pages one by one
3. **Use Tailwind CDN:** No build step needed for v1
4. **Test locally:** Use `python -m http.server` or VS Code Live Server
5. **Commit often:** Push to GitHub frequently to see live changes
6. **Mobile first:** Design for mobile, then expand for desktop
7. **Preserve history:** Keep old site in `_archive/v1/` folder AND in a git branch

---

## Questions to Ask the User

Before starting, Claude Code should confirm:

1. What is your name?
2. What is your current role and company?
3. What is your one-line tagline?
4. What social links do you want to include?
5. Do you have a profile photo ready?
6. What is your GitHub username (for the repo)?

---

*Document version: 1.0*  
*Last updated: January 2026*