const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?';
import { loadFromLS, removeFromLS, saveToLS } from './js/localSt.js';

import { createCocktail } from './js/createCocktail';

// import { toggleList, togglemList } from './js/openMenuAndFavorite.js';

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

const cocktails = [];

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
    cocktails.push(...arr);
    //console.log(arr);
    createCocktail(cocktails);

    const btnAdd = document.querySelectorAll('.js_btn_fav_add');
    for (let btn of btnAdd) {
      btn.style.display = 'none';
    }
  });
}
loadLSCocktails();

function removeLSFavoritCocktailLS(event) {
  const cocktailNameRemove = event.target.getAttribute(
    'data-cocktail-name-remove'
  );
  removeFromLS(cocktailNameRemove);
  const index = cocktails.findIndex(
    ({ strDrink }) => strDrink === cocktailNameRemove
  );
  cocktails.splice(index, 1);

  refs.gallery.innerHTML = '';
  // console.log(arr);
  createCocktail(cocktails);

  const btnAdd = document.querySelectorAll('.js_btn_fav_add');
  for (let btn of btnAdd) {
    btn.style.display = 'none';
  }
}
