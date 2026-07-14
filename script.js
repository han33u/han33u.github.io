(() => {
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('.site-nav');

  if (!navToggle || !siteNav) {
    return;
  }

  const setExpanded = (isOpen) => {
    navToggle.setAttribute('aria-expanded', String(isOpen));
    siteNav.classList.toggle('is-open', isOpen);
  };

  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    setExpanded(!isOpen);
  });

  siteNav.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement && window.innerWidth <= 720) {
      setExpanded(false);
    }
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setExpanded(false);
      navToggle.focus();
    }
  });
})();
