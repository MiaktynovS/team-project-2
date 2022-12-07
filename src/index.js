import { fetchCocktails } from './js/fetchCocktails';
import { createCocktail } from './js/createCocktail';

const refs = {
  searchForm: document.querySelector('#search-form'),
  gallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.btn-load-more'),
};

// let query = '';
// let page = 1;
// let simpleLightBox;
// const perPage = 40;

refs.searchForm.addEventListener('submit', onSearchForm);
// refs.loadMoreBtn.addEventListener('click', onLoadBtn);

function onSearchForm(event) {
  event.preventDefault();
  page = 1;
  const query = event.currentTarget.searchQuery.value.trim();
  refs.gallery.innerHTML = '';


  fetchCocktails(query).then(data => {
    console.log(data.drinks);
    createCocktail(data.drinks);

  });
}

console.log(onSearchForm);