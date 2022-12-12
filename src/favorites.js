const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?';
import { loadFromLS, removeFromLS, saveToLS } from './js/localSt.js';

import { createCocktail } from './js/createCocktail';

const refs = {
  searchForm: document.querySelector('#search-form'),
  gallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.btn-load-more'),
  searchLetterCocktailMobile: document.querySelector('.js-letter-cocktail-1'),
  searchLetterCocktail: document.querySelector('.js-letter-cocktail-2'),
  favoritCocktails: document.querySelector('.favorit'),
  btnLS: document.querySelector('.add-descr'),
  titleContainer1: document.querySelector('.title-1'),
};

// =======================LISTENER =========================================================
refs.searchForm.addEventListener('submit', onSearchForm);
refs.titleContainer1.style.display = 'none';
refs.gallery.addEventListener('click', removeLSFavoritCocktailLS);
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
    const btnAdd = document.querySelectorAll('.js_btn_fav_add');
    for (let btn of btnAdd) {
      btn.style.display = 'none';
    }
  });
}
loadLSCocktails();

function removeLSFavoritCocktailLS(event) {
  const arr = loadFromLS('FavoriteCocktails');
  const cocktailNameRemove = event.target.getAttribute(
    'data-cocktail-name-remove'
  );
  console.log(cocktailNameRemove);
  //console.log(removeFromLS('FavoriteCocktails'));
  // removeFromLS('FavoriteCocktails', cocktailNameRemove);

  const newArr = arr.map(cocktailName => {
    return fetch(`${BASE_URL}s=${cocktailName}`).then(res => res.json());
  });
  Promise.all(newArr).then(arr => {
    arr = arr.map(obj => {
      return obj.drinks[0];
    });
    console.log(arr);
    createCocktail(arr);
  });
}
removeLSFavoritCocktailLS();
