// Theme management
(function() {
  const THEME_OVERRIDE_KEY = 'theme-override';
  const LEGACY_THEME_KEY = 'theme';

  const prefersDarkQuery = window.matchMedia
    ? window.matchMedia('(prefers-color-scheme: dark)')
    : null;

  const getSystemTheme = () => {
    return prefersDarkQuery && prefersDarkQuery.matches ? 'dark' : 'light';
  };

  const getInitialTheme = () => {
    const savedTheme =
      localStorage.getItem(THEME_OVERRIDE_KEY) ||
      localStorage.getItem(LEGACY_THEME_KEY);

    if (savedTheme) {
      return savedTheme;
    }

    return getSystemTheme();
  };

  const applyTheme = (theme) => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  };

  const theme = getInitialTheme();
  applyTheme(theme);

  window.toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    applyTheme(newTheme);
    localStorage.setItem(THEME_OVERRIDE_KEY, newTheme);
  };

  if (prefersDarkQuery) {
    prefersDarkQuery.addEventListener('change', (e) => {
      if (!localStorage.getItem(THEME_OVERRIDE_KEY)) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }
})();
