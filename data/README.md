# Content Data (JSON)

All website content (blog posts, projects) is managed through `content.json`. Edit this file to add/update/remove content - no HTML editing required!

## Structure

```json
{
  "featured": [],    // Company blog posts (always at top)
  "posts": [],       // Personal blog posts
  "projects": []     // Project portfolio
}
```

## Featured Publications

Company blog posts that appear at the top of the homepage and blog page.

```json
{
  "title": "Post Title",
  "url": "https://company.com/blog/post",
  "date": "2025-09-10",
  "dateDisplay": "September 10, 2025",
  "description": "Brief description",
  "type": "company",
  "external": true
}
```

## Posts

Personal blog posts (internal or external platforms).

**Internal post:**
```json
{
  "title": "Post Title",
  "url": "/blog/post-slug.html",
  "date": "2026-01-15",
  "dateDisplay": "January 15, 2026",
  "description": "Brief description",
  "type": "internal",
  "external": false
}
```

**External post (Medium/Substack/etc):**
```json
{
  "title": "Post Title",
  "url": "https://medium.com/@you/post",
  "date": "2025-11-20",
  "dateDisplay": "November 20, 2025",
  "description": "Brief description",
  "type": "medium",
  "external": true
}
```

### Supported Types

- `"internal"` - Posts on your site
- `"medium"` - Medium
- `"substack"` - Substack
- `"devto"` - DEV.to
- `"hashnode"` - Hashnode
- `"company"` - Company blog (for posts array)

## Projects

```json
{
  "title": "Project Name",
  "url": "https://github.com/username/repo",
  "description": "What the project does",
  "featured": true
}
```

- `featured: true` - Appears on homepage (first 2)
- `featured: false` - Only on projects page

## Order

- **Featured**: Displayed in array order
- **Posts**: Displayed in array order (put newest first)
- **Projects**: Displayed in array order

## Adding New Content

1. Open `data/content.json`
2. Add new object to appropriate array
3. Save file
4. Refresh page - content appears automatically!

No HTML editing, no rebuilding required. Just edit the JSON!
