(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const body = document.querySelector('body');
  const navLinks = document.querySelectorAll('.menu__nav-link');

  menuBtnRef.addEventListener('click', toggleMenu);

  navLinks.forEach(link => link.addEventListener('click', toggleMenu));

  function toggleMenu() {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    body.classList.toggle('no-scroll');
  }
})();
