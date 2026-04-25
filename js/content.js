// Content loader and renderer
(function() {
  // Fetch content from JSON
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

  // Render external link icon
  function externalLinkIcon() {
    return `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
    </svg>`;
  }

  // Get platform label
  function getPlatformLabel(type) {
    const labels = {
      'medium': 'Medium',
      'substack': 'Substack',
      'devto': 'DEV.to',
      'hashnode': 'Hashnode',
      'company': 'Company Blog'
    };
    return labels[type] || type;
  }

  // Render a single blog post
  function renderPost(post, isFeatured = false) {
    const externalAttrs = post.external ? 'target="_blank" rel="noopener noreferrer"' : '';
    const externalIcon = post.external ? externalLinkIcon() : '';
    const platformLabel = post.type !== 'internal' ? `<span style="color: var(--accent);" class="text-xs">• ${getPlatformLabel(post.type)}</span>` : '';

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

  // Render a single conference talk
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

  // Render a project card (homepage style - card format)
  function renderProjectCard(project) {
    return `
      <div style="background-color: var(--bg-secondary); border-color: var(--border);" class="p-6 rounded-lg border">
        <h3 class="text-xl font-semibold mb-2">
          <a
            href="${project.url}"
            target="_blank"
            rel="noopener noreferrer"
            style="color: var(--text-primary);"
            class="hover:text-[var(--accent)] transition-colors"
          >
            ${project.title}
          </a>
        </h3>
        <p style="color: var(--text-secondary);" class="text-sm mb-4">
          ${project.description}
        </p>
        <a
          href="${project.url}"
          target="_blank"
          rel="noopener noreferrer"
          style="color: var(--accent);"
          class="hover:text-[var(--accent-hover)] text-sm flex items-center gap-1"
        >
          Visit Website
          ${externalLinkIcon()}
        </a>
      </div>
    `;
  }

  // Render a project list item (projects page style - list format)
  function renderProjectListItem(project) {
    return `
      <div class="border-b border-[var(--border)] pb-8">
        <h2 class="text-2xl font-semibold mb-3">
          <a
            href="${project.url}"
            target="_blank"
            rel="noopener noreferrer"
            class="text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
          >
            ${project.title}
          </a>
        </h2>
        <p class="text-[var(--text-secondary)] leading-relaxed mb-4">
          ${project.description}
        </p>
        <div class="flex items-center gap-3 text-sm">
          <a
            href="${project.url}"
            target="_blank"
            rel="noopener noreferrer"
            class="text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors flex items-center gap-1"
          >
            Visit Website
            ${externalLinkIcon()}
          </a>
        </div>
      </div>
    `;
  }

  // Initialize content on page load
  window.addEventListener('DOMContentLoaded', async function() {
    const content = await loadContent();
    if (!content) return;

    // Render featured posts (homepage and blog page)
    const featuredContainer = document.getElementById('featured-posts');
    if (featuredContainer && content.featured) {
      featuredContainer.innerHTML = content.featured.map(post => renderPost(post, true)).join('');
    }

    // Render all posts (blog page)
    const allPosts = document.getElementById('all-posts');
    if (allPosts && content.posts) {
      allPosts.innerHTML = content.posts.map(post => renderPost(post)).join('');
    }

    // Render conference talks
    const talksContainer = document.getElementById('talks-container');
    if (talksContainer && content.talks) {
      talksContainer.innerHTML = content.talks.map(talk => renderTalk(talk)).join('');
    }

    // Render recent talks (homepage - first 2)
    const recentTalksHome = document.getElementById('recent-talks-home');
    if (recentTalksHome && content.talks) {
      recentTalksHome.innerHTML = content.talks.slice(0, 2).map(talk => renderTalk(talk)).join('');
    }

    // Render featured projects (homepage - first 2, card format)
    const featuredProjects = document.getElementById('featured-projects');
    if (featuredProjects && content.projects) {
      const projectsToShow = content.projects.filter(p => p.featured).slice(0, 2);
      featuredProjects.innerHTML = projectsToShow.map(project => renderProjectCard(project)).join('');
    }

    // Render all projects (projects page - list format)
    const allProjects = document.getElementById('all-projects');
    if (allProjects && content.projects) {
      allProjects.innerHTML = content.projects.map(project => renderProjectListItem(project)).join('');
    }
  });
})();
