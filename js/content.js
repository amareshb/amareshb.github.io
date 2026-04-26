// Content loader and renderer
(function() {
  async function loadContent() {
    try {
      const response = await fetch('/data/content.json');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error loading content:', error);
      return null;
    }
  }

  function externalLinkIcon() {
    return `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
    </svg>`;
  }

  function getPlatformLabel(type) {
    const labels = {
      medium: 'Medium',
      substack: 'Substack',
      devto: 'DEV.to',
      hashnode: 'Hashnode',
      company: 'Company Blog'
    };
    return labels[type] || type;
  }

  function renderPost(post) {
    const externalAttrs = post.external ? 'target="_blank" rel="noopener noreferrer"' : '';
    const externalIcon = post.external ? externalLinkIcon() : '';
    const publicationLabel = post.publication || getPlatformLabel(post.type);
    const platformLabel = post.type !== 'internal'
      ? `<span style="color: var(--accent);" class="text-xs">• ${publicationLabel}</span>`
      : '';

    return `
      <article class="border-b border-[var(--border)] pb-8">
        <div class="flex items-center gap-2 mb-1">
          <time class="text-sm text-[var(--text-secondary)]" datetime="${post.date}">${post.dateDisplay}</time>
          ${platformLabel}
        </div>
        <h3 class="text-2xl font-semibold mt-2 mb-3">
          <a
            href="${post.url}"
            ${externalAttrs}
            class="text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors flex items-center gap-2"
          >
            ${post.title}
            ${externalIcon}
          </a>
        </h3>
        <p class="text-[var(--text-secondary)] leading-relaxed mb-3">
          ${post.description}
        </p>
        ${!post.external ? `<a href="${post.url}" class="text-[var(--accent)] hover:text-[var(--accent-hover)] text-sm">Read more →</a>` : ''}
      </article>
    `;
  }

  function renderTalk(talk) {
    return `
      <article class="border-b border-[var(--border)] pb-8">
        <div class="flex items-center gap-2 mb-1">
          <time class="text-sm text-[var(--text-secondary)]" datetime="${talk.date}">${talk.dateDisplay}</time>
          <span style="color: var(--accent);" class="text-xs">• ${talk.conference}</span>
        </div>
        <h3 class="text-2xl font-semibold mt-2 mb-3">
          <a
            href="${talk.url}"
            target="_blank"
            rel="noopener noreferrer"
            class="text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors flex items-center gap-2"
          >
            ${talk.title}
            ${externalLinkIcon()}
          </a>
        </h3>
        <p class="text-[var(--text-secondary)] leading-relaxed mb-3">
          ${talk.description}
        </p>
      </article>
    `;
  }

  function renderTags(tags) {
    if (!tags || !tags.length) return '';
    return `
      <div class="flex flex-wrap gap-2 mt-4">
        ${tags.map(tag => `<span style="background-color: var(--bg-primary); border-color: var(--border); color: var(--text-secondary);" class="rounded-full border px-3 py-1 text-xs">${tag}</span>`).join('')}
      </div>
    `;
  }

  function renderProjectTitle(project, headingTag) {
    const title = project.url
      ? `<a href="${project.url}" target="_blank" rel="noopener noreferrer" class="text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-2">${project.title}${externalLinkIcon()}</a>`
      : `<span class="text-[var(--text-primary)]">${project.title}</span>`;

    return `<${headingTag} class="text-xl font-semibold mb-2">${title}</${headingTag}>`;
  }

  function renderProjectMeta(project) {
    const items = [project.label, project.context].filter(Boolean);
    if (!items.length) return '';
    return `<div class="flex flex-wrap items-center gap-2 mb-3 text-xs text-[var(--accent)]">${items.map((item, index) => `${index > 0 ? '<span class="text-[var(--text-secondary)]">•</span>' : ''}<span>${item}</span>`).join('')}</div>`;
  }

  function renderProjectCta(project) {
    if (!project.url) return '';
    const label = project.ctaLabel || 'Learn more';
    return `
      <a
        href="${project.url}"
        target="_blank"
        rel="noopener noreferrer"
        class="text-[var(--accent)] hover:text-[var(--accent-hover)] text-sm flex items-center gap-1"
      >
        ${label}
        ${externalLinkIcon()}
      </a>
    `;
  }

  function renderProjectCard(project) {
    return `
      <div style="background-color: var(--bg-secondary); border-color: var(--border);" class="rounded-2xl border p-6">
        ${renderProjectMeta(project)}
        ${renderProjectTitle(project, 'h3')}
        <p class="text-sm leading-relaxed text-[var(--text-secondary)]">
          ${project.description}
        </p>
        ${renderTags(project.tags)}
        <div class="mt-5">
          ${renderProjectCta(project)}
        </div>
      </div>
    `;
  }

  function renderProjectListItem(project) {
    return `
      <article class="border-b border-[var(--border)] pb-8">
        ${renderProjectMeta(project)}
        ${renderProjectTitle(project, 'h2')}
        <p class="text-[var(--text-secondary)] leading-relaxed">
          ${project.description}
        </p>
        ${renderTags(project.tags)}
        <div class="mt-4">
          ${renderProjectCta(project)}
        </div>
      </article>
    `;
  }

  function renderHomeHighlightCard(options) {
    const {
      eyebrow,
      title,
      description,
      itemTitle,
      itemMeta,
      itemUrl,
      ctaLabel,
      ctaUrl
    } = options;

    const linkedTitle = itemUrl
      ? `<a href="${itemUrl}" target="_blank" rel="noopener noreferrer" class="text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-2">${itemTitle}${externalLinkIcon()}</a>`
      : `<span class="text-[var(--text-primary)]">${itemTitle}</span>`;

    return `
      <article style="background-color: var(--bg-secondary); border-color: var(--border);" class="rounded-2xl border p-6">
        <p class="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)] mb-3">${eyebrow}</p>
        <h3 class="text-2xl font-semibold text-[var(--text-primary)] mb-3">${title}</h3>
        <p class="text-sm leading-relaxed text-[var(--text-secondary)] mb-5">${description}</p>
        <div class="border-t border-[var(--border)] pt-5">
          <p class="text-xs text-[var(--text-secondary)] mb-2">${itemMeta}</p>
          <div class="text-base font-medium mb-5">${linkedTitle}</div>
          <a href="${ctaUrl}" class="text-[var(--accent)] hover:text-[var(--accent-hover)] text-sm transition-colors">
            ${ctaLabel} →
          </a>
        </div>
      </article>
    `;
  }

  window.addEventListener('DOMContentLoaded', async function() {
    const content = await loadContent();
    if (!content) return;

    const featuredContainer = document.getElementById('featured-posts');
    if (featuredContainer && content.featured) {
      featuredContainer.innerHTML = content.featured.map(renderPost).join('');
    }

    const allPosts = document.getElementById('all-posts');
    if (allPosts && content.posts) {
      allPosts.innerHTML = content.posts.map(renderPost).join('');
    }

    const talksContainer = document.getElementById('talks-container');
    if (talksContainer && content.talks) {
      talksContainer.innerHTML = content.talks.map(renderTalk).join('');
    }

    const recentTalksHome = document.getElementById('recent-talks-home');
    if (recentTalksHome && content.talks) {
      recentTalksHome.innerHTML = content.talks.slice(0, 2).map(renderTalk).join('');
    }

    const featuredProjects = document.getElementById('featured-projects');
    if (featuredProjects && content.projects) {
      const projectsToShow = content.projects.filter((project) => project.featured).slice(0, 4);
      featuredProjects.innerHTML = projectsToShow.map(renderProjectCard).join('');
    }

    const homeHighlights = document.getElementById('home-highlights');
    if (homeHighlights && content.posts && content.talks && content.projects) {
      const featuredPost = content.featured && content.featured.length ? content.featured[0] : content.posts[0];
      const featuredTalk = content.talks[0];
      const featuredProject = content.projects.find((project) => project.featured) || content.projects[0];

      const cards = [];

      if (featuredPost) {
        cards.push(renderHomeHighlightCard({
          eyebrow: 'Writing',
          title: 'Published work',
          description: 'Technical writing on data systems, infrastructure, and lessons from platform engineering.',
          itemTitle: featuredPost.title,
          itemMeta: featuredPost.dateDisplay,
          itemUrl: featuredPost.url,
          ctaLabel: 'See all writing',
          ctaUrl: '/blog.html'
        }));
      }

      if (featuredTalk) {
        cards.push(renderHomeHighlightCard({
          eyebrow: 'Talks',
          title: 'Recent speaking',
          description: 'Conference talks on data platform design, open source, and infrastructure decisions.',
          itemTitle: featuredTalk.title,
          itemMeta: `${featuredTalk.conference} · ${featuredTalk.dateDisplay}`,
          itemUrl: featuredTalk.url,
          ctaLabel: 'See all talks',
          ctaUrl: '/talks.html'
        }));
      }

      if (featuredProject) {
        cards.push(renderHomeHighlightCard({
          eyebrow: 'Projects',
          title: 'Public projects',
          description: 'Independent projects and experiments.',
          itemTitle: featuredProject.title,
          itemMeta: featuredProject.context || 'Project',
          itemUrl: featuredProject.url,
          ctaLabel: 'See all projects',
          ctaUrl: '/projects.html'
        }));
      }

      homeHighlights.innerHTML = cards.join('');
    }

    const allProjects = document.getElementById('all-projects');
    if (allProjects && content.projects) {
      allProjects.innerHTML = content.projects.map(renderProjectListItem).join('');
    }
  });
})();
