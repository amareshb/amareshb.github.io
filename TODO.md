# TODO List

## 🔴 Critical (Required for Launch)

### 1. Add Missing Assets
- [ ] **Add profile photo**
  - File: `assets/profile.jpg`
  - Recommended size: 400x400px (square)
  - Currently referenced in `index.html` line 60

- [ ] **Add favicon**
  - File: `assets/favicon.ico`
  - Size: 32x32px or 16x16px
  - Referenced in all HTML pages

- [ ] **Add Open Graph image**
  - File: `assets/og-image.png`
  - Size: 1200x630px (recommended for social sharing)
  - Used when sharing site on Twitter, LinkedIn, etc.

### 2. Replace Lorem Ipsum Content

- [ ] **Blog Post #1**
  - File: `blog/building-scalable-systems.html`
  - Current title: "Lorem Ipsum Dolor Sit Amet Consectetur"
  - Update: title, meta tags, and all body content

- [ ] **Blog Post #2**
  - File: `blog/distributed-systems-debugging.html`
  - Current title: "Sed Ut Perspiciatis Unde Omnis Iste"
  - Update: title, meta tags, and all body content

- [ ] **Update blog listing**
  - File: `blog.html`
  - Update post titles and previews (lines 64-99)
  - Match new blog post titles

### 3. Deploy to Production

- [ ] **Test locally**
  ```bash
  python3 -m http.server 8000
  # Test at http://localhost:8000
  ```
  - [ ] Check all pages load
  - [ ] Test theme toggle on all pages
  - [ ] Test on mobile/tablet/desktop
  - [ ] Verify all links work

- [ ] **Push to master**
  ```bash
  git checkout master
  git merge v2
  git push origin master
  ```
  OR
  ```bash
  git push origin v2:master --force
  ```

- [ ] **Verify deployment**
  - [ ] Check https://amareshb.github.io
  - [ ] Test theme toggle on live site
  - [ ] Test on different devices
  - [ ] Share on social media to test OG image

---

## 🟡 Nice to Have (Optional)

### Content
- [ ] **Update `data/content.json`** with your real content (see instructions below)
  - Add your company blog posts to "featured" array
  - Add your personal blog posts to "posts" array
  - Add/update projects in "projects" array
- [ ] Write 2-3 more blog posts
- [ ] Add "Tags" to blog posts
- [ ] Create archive/categories for blog

---

## 📝 How to Add Content (JSON-Based)

**All content is now managed in `data/content.json`** - No need to edit HTML files!

### ✏️ Edit data/content.json

Open `/data/content.json` and update the three sections:

#### How to Add Content

### 1. Featured Publications (Company Blogs)

Add to the `"featured"` array in `content.json`:

```json
{
  "title": "Your Company Blog Post Title",
  "url": "https://company.com/blog/your-post",
  "date": "2025-09-10",
  "dateDisplay": "September 10, 2025",
  "description": "Brief description of the post.",
  "type": "company",
  "external": true
}
```

### 2. Personal Blog Posts

Add to the `"posts"` array in `content.json`:

**Internal posts (on your site):**
```json
{
  "title": "Your Blog Post Title",
  "url": "/blog/your-post-slug.html",
  "date": "2026-01-15",
  "dateDisplay": "January 15, 2026",
  "description": "Brief description of the post.",
  "type": "internal",
  "external": false
}
```

**External posts (Medium, Substack, etc.):**
```json
{
  "title": "Your Medium Post Title",
  "url": "https://medium.com/@username/post-slug",
  "date": "2025-11-20",
  "dateDisplay": "November 20, 2025",
  "description": "Brief description of the post.",
  "type": "medium",
  "external": true
}
```

Supported `type` values for external posts:
- `"medium"` - Medium
- `"substack"` - Substack
- `"devto"` - DEV.to
- `"hashnode"` - Hashnode
- `"company"` - Company blog

### 3. Projects

Add to the `"projects"` array in `content.json`:

```json
{
  "title": "Your Project Name",
  "url": "https://github.com/username/project",
  "description": "Brief description of your project.",
  "featured": true
}
```

Set `"featured": true` for projects you want on the homepage (first 2 will show).

---

## 🚀 Example: Adding a New Company Blog

1. Open `data/content.json`
2. Add to the `"featured"` array:

```json
{
  "title": "Building Scalable APIs at Scale",
  "url": "https://tech.company.com/blog/scalable-apis",
  "date": "2025-12-01",
  "dateDisplay": "December 1, 2025",
  "description": "How we handle millions of API requests per second.",
  "type": "company",
  "external": true
}
```

3. Save the file - that's it! No HTML editing needed.

---

## Old Instructions (No Longer Needed)

~~Previously you had to edit HTML files. Now everything is in JSON!~~

**Legacy HTML editing (NOT recommended):**

```html
<article class="border-b border-[var(--border)] pb-8">
  <div class="flex items-center gap-2 mb-1">
    <time class="text-sm text-[var(--text-secondary)]" datetime="YYYY-MM-DD">Date</time>
    <span style="color: var(--accent);" class="text-xs">• Company Blog</span>
  </div>
  <h3 class="text-2xl font-semibold mt-2 mb-3">
    <a
      href="https://company-blog-url.com"
      target="_blank"
      rel="noopener noreferrer"
      class="text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors flex items-center gap-2"
    >
      Your Company Post Title
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
      </svg>
    </a>
  </h3>
  <p class="text-[var(--text-secondary)] leading-relaxed mb-3">
    Your post description here.
  </p>
</article>
```

**Personal External Blogs (Medium, Substack, DEV.to):**
Edit `blog.html` and add entries in the "Recent Posts" section:

```html
<article class="border-b border-[var(--border)] pb-8">
  <div class="flex items-center gap-2 mb-1">
    <time class="text-sm text-[var(--text-secondary)]" datetime="YYYY-MM-DD">Date</time>
    <span style="background-color: var(--bg-secondary); color: var(--text-secondary);" class="text-xs px-2 py-1 rounded">Medium</span>
  </div>
  <h3 class="text-2xl font-semibold mt-2 mb-3">
    <a
      href="https://your-blog-url.com"
      target="_blank"
      rel="noopener noreferrer"
      class="text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors flex items-center gap-2"
    >
      Your Post Title
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
      </svg>
    </a>
  </h3>
  <p class="text-[var(--text-secondary)] leading-relaxed mb-3">
    Your post description here.
  </p>
</article>
```


### Features
- [ ] Create Uses page (`uses.html`)
  - Hardware setup
  - Development tools
  - Software/services
  - Daily apps

- [ ] Add RSS feed
  - Generate `feed.xml`
  - Add link in `<head>` tags
  - Add RSS icon to footer

- [ ] Implement search
  - Client-side search with Fuse.js
  - Or use Algolia DocSearch

- [ ] Add analytics
  - Plausible (privacy-focused)
  - Umami (self-hosted option)
  - Google Analytics (if needed)

- [ ] Comments system
  - Giscus (GitHub Discussions)
  - Or utterances (GitHub Issues)

### Polish
- [ ] Add "Reading Time" to blog posts
- [ ] Add "Last Updated" dates
- [ ] Create 404 page
- [ ] Add sitemap.xml for SEO
- [ ] Add robots.txt

---

## 📋 Checklist: Before Deploying

- [ ] All assets are in place (profile.jpg, favicon.ico, og-image.png)
- [ ] No Lorem Ipsum text remains
- [ ] All links are working
- [ ] Theme toggle works on all pages
- [ ] Site is mobile-responsive
- [ ] Meta tags are accurate
- [ ] Social sharing works (test with https://cards-dev.twitter.com/validator)
- [ ] Tested in Chrome, Firefox, Safari
- [ ] Tested on mobile devices

---

## 🎯 Quick Wins (Do These First)

1. **Add favicon** - Instant visual polish in browser tabs
2. **Add profile photo** - Makes homepage look complete
3. **Write one real blog post** - Shows actual content vs placeholders
4. **Test and deploy** - Get it live!

---

*Last updated: January 27, 2026*
