(() => {
    const refs = {
      openMenuBtn: document.querySelector('[data-menu-open]'),
      closeMenuBtn: document.querySelector('[data-menu-close]'),
      menu: document.querySelector('[data-menu]'),
      openList: document.querySelector('[data-list-open]'),
      closeList: document.querySelector('[data-list-close]'),
      list: document.querySelector('[data-list]'),
      openmList: document.querySelector('[data-mlist-open]'),
      mlist: document.querySelector('[data-mlist]'),
    };
  
    refs.openMenuBtn.addEventListener('click', toggleModal);
    refs.closeMenuBtn.addEventListener('click', toggleModal);
    refs.openList.addEventListener('click', toggleList);
    refs.openmList.addEventListener('click', togglemList);
  
    function toggleModal() {
      refs.menu.classList.toggle('is-open');
    }
    function toggleList() {
        refs.list.classList.toggle('is-open');
    }
    function togglemList() {
        refs.mlist.classList.toggle('is-open');
    }  
  })();