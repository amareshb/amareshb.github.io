# amareshb.github.io

Personal website for Amaresh Bingumalla - Backend Engineer

## 🚀 Status

**Current Branch:** `v2` (new design)
**Live Site:** [amareshb.github.io](https://amareshb.github.io) (currently serving old site)

## ✅ What's Complete

- ✅ **Full Site Structure** - 4 main pages (Home, About, Blog, Projects)
- ✅ **Light/Dark Theme** - Complete theme toggle with system preference detection
- ✅ **Responsive Design** - Mobile-first, works on all devices
- ✅ **Blog System** - 2 blog post templates (currently Lorem Ipsum)
- ✅ **Projects Page** - 3 GitHub projects with links
- ✅ **About Page** - Bio, "Now" section, education & work history

## 🚧 Next Steps

### Required Before Launch

1. **Add Assets:**
   - [ ] `assets/profile.jpg` - Profile photo
   - [ ] `assets/favicon.ico` - Browser icon
   - [ ] `assets/og-image.png` - Social sharing image (1200x630px)

2. **Content:**
   - [ ] Replace Lorem Ipsum in blog posts
   - [ ] Write real blog content
   - [ ] Update blog titles and descriptions

3. **Deploy:**
   - [ ] Test locally
   - [ ] Merge `v2` → `master`
   - [ ] Verify live deployment

### Optional Enhancements

- [ ] Create Uses page
- [ ] Add RSS feed
- [ ] Implement search
- [ ] Add analytics (Plausible/Umami)
- [ ] Add external blog links (Substack, etc.)

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **Tailwind CSS** - Via CDN, no build step
- **Vanilla JavaScript** - Theme toggle + content loading
- **JSON** - Content management (no HTML editing needed!)
- **GitHub Pages** - Static hosting

## ✨ Content Management

**All content is managed via JSON!** No need to edit HTML files.

- **Edit `data/content.json`** to add/update blog posts and projects
- Changes appear immediately on page refresh
- See `data/README.md` for full documentation

## 📁 Structure

```
amareshb.github.io/
├── index.html              # Homepage
├── about.html              # About page
├── blog.html               # Blog listing
├── projects.html           # Projects showcase
├── blog/
│   ├── building-scalable-systems.html
│   └── distributed-systems-debugging.html
├── css/
│   └── styles.css          # Theme variables & styles
├── js/
│   └── theme.js            # Theme toggle logic
├── assets/                 # ⚠️ Missing files (see Next Steps)
├── _archive/
│   └── v1/                 # Old site (archived)
├── spec.md                 # Design specifications
└── CLAUDE.md               # Development guide

```

## 🎨 Features

### Theme System
- **Light Mode** - White backgrounds, dark text
- **Dark Mode** - Near-black backgrounds, light text
- **Auto-detect** - Uses system preference
- **Persistent** - Saves choice in localStorage
- **Smooth Transitions** - No flash on page load

### Pages
- **Home** - Name, role, tagline, social links
- **About** - Bio, current focus ("Now"), work history, education
- **Blog** - Post listing with dates and previews
- **Projects** - GitHub project links with descriptions

## 🧪 Local Development

```bash
# Start local server
python3 -m http.server 8000

# View in browser
open http://localhost:8000
```

## 📚 Documentation

- **spec.md** - Complete design specifications and implementation phases
- **CLAUDE.md** - Project overview and development guidelines

## 🎯 Design Goals

1. **Minimal & Clean** - No flashy animations, focus on content
2. **Accessible Themes** - Both light and dark modes with proper contrast
3. **Typography-Focused** - Text is the hero
4. **Fast** - Static HTML/CSS, minimal JavaScript
5. **Mobile-First** - Responsive on all devices

## 📝 Content Status

- **Homepage:** ✅ Complete (real content)
- **About:** ✅ Complete (real content)
- **Projects:** ✅ Complete (3 real projects)
- **Blog Posts:** ⚠️ Placeholder (Lorem Ipsum)

## 🔗 Links

- GitHub: [@amareshb](https://github.com/amareshb)
- LinkedIn: [amareshbingumalla](https://linkedin.com/in/amareshbingumalla)
- Email: amareshbingumalla@gmail.com

---

*Last updated: January 27, 2026*
