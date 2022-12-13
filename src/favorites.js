const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?';
import { loadFromLS } from './js/localSt.js';

import { createCocktail } from './js/createCocktail';

import {
  toggleList,
  togglemList,
} from './js/openMenuAndFavorite.js'

const refs = {
  searchForm: document.querySelector('#search-form'),
  gallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.btn-load-more'),
  searchLetterCocktailMobile: document.querySelector('.js-letter-cocktail-1'),
  searchLetterCocktail: document.querySelector('.js-letter-cocktail-2'),
  favoritCocktails: document.querySelector('.favorit'),
  btnLS: document.querySelector('.add-descr'),
};

// =======================LISTENER =========================================================
refs.searchForm.addEventListener('submit', onSearchForm);
// ======================================================================================
function onSearchForm(event) {
  event.preventDefault();
}

function loadLSCocktails() {
  const arr = loadFromLS('FavoriteCocktails');
  const fetches = arr.map(cocktailName => {
    return fetch(`${BASE_URL}s=${cocktailName}`).then(res => res.json());
  });
  Promise.all(fetches).then(arr => {
    arr = arr.map(obj => {
      return obj.drinks[0];
    });
    console.log(arr);
    createCocktail(arr);
  });
}
loadLSCocktails();

toggleList();
togglemList();


