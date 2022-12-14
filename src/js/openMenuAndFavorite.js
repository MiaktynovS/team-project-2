const refs = {
  openList: document.querySelector('[data-list-open]'),
  closeList: document.querySelector('[data-list-close]'),
  list: document.querySelector('[data-list]'),
  openmList: document.querySelector('[data-mlist-open]'),
  mlist: document.querySelector('[data-mlist]'),
};

refs.openList.addEventListener('click', toggleList);
refs.openmList.addEventListener('click', togglemList);

export function toggleList() {
  refs.list.classList.toggle('is-open');
}
export function togglemList() {
  refs.mlist.classList.toggle('is-open');
}
