export default openMobileMenu = () => {
  const refs = {
    openMobileMenu: document.querySelector('[data-menu-open]'),
    closeMobileMenu: document.querySelector('[data-menu-close]'),
    mobilMenu: document.querySelector('[data-menu]'),
  };

  refs.openMobileMenu.addEventListener('click', toggleMobileMenu);
  refs.closeMobileMenu.addEventListener('click', toggleMobileMenu);

  function toggleMobileMenu() {
    refs.mobilMenu.classList.toggle('is-hidden');
  }
}