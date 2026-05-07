# Portfolio Website

A modern, responsive portfolio website built with HTML, Tailwind CSS, and dynamic JSON-based content loading.

## 🚀 Features

- **Dynamic Content** - Projects, blogs, and talks are loaded from a central `data/content.json` file.
- **Dark Mode Support** - Automatic and manual theme switching.
- **Responsive Design** - Optimized for mobile, tablet, and desktop.
- **Conference Talks Section** - Dedicated page and homepage teaser for speaking engagements.
- **Clean Architecture** - Separated content (JSON), logic (JS), and styling (CSS/Tailwind).

## 📂 Project Structure

```
├── index.html          # Homepage
├── about.html          # About Me page
├── blog.html           # Blog listing page
├── talks.html          # Conference talks page
├── projects.html       # Projects listing page
├── data/
│   └── content.json    # Central data store for all content
├── js/
│   ├── content.js      # Dynamic content loader
│   └── theme.js        # Theme switching logic
├── css/
│   └── styles.css      # Custom CSS variables and styles
├── blog/
│   └── template.html   # Template for future internal blog posts
└── assets/             # Images and favicons
```

## 🛠️ Local Development

To run the website locally and see your changes:

```bash
# Using Python
python3 -m http.server 8000

# Or using Node.js 'serve'
npx serve .
```

Then open `http://localhost:8000` in your browser.

## ✍️ How to Add Content

All content is managed in `data/content.json`. You don't need to edit HTML for content updates!
The site fetches this JSON with `cache: 'no-store'`, so content-only deploys should show up without needing users to hard-refresh cached JavaScript or CSS.
HTML pages also include cache-control meta tags to encourage browser revalidation. GitHub Pages default branch publishing does not support custom HTTP cache headers from this repo; use GitHub Actions or a CDN if stricter production cache rules are needed.

### 1. Adding a Blog Post (External)
Add to the `posts` array:
```json
{
  "title": "Post Title",
  "url": "https://external-link.com",
  "date": "2025-07-15",
  "dateDisplay": "July 15, 2025",
  "description": "Short summary...",
  "type": "company",
  "external": true
}
```

### 2. Adding a Blog Post (Internal)
1. Copy `blog/template.html` to a new file (e.g., `blog/my-post.html`).
2. Add to the `posts` array in `content.json`:
```json
{
  "title": "Post Title",
  "url": "/blog/my-post.html",
  "date": "2026-01-15",
  "dateDisplay": "January 15, 2026",
  "description": "Short summary...",
  "type": "internal",
  "external": false
}
```

### 3. Adding a Conference Talk
Add to the `talks` array:
```json
{
  "title": "Talk Title",
  "conference": "Conf Name 2025",
  "url": "https://link-to-talk.com",
  "date": "2025-06-25",
  "dateDisplay": "June 25, 2025",
  "description": "Talk abstract..."
}
```

### 4. Adding a Project
Add to the `projects` array. Set `"featured": true` to show it on the homepage.

## 📄 License
MIT
