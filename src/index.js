import { saveToLS, loadFromLS } from './js/localSt.js';
import {
  fetchCocktails,
  fetchLetterCocktails,
  fetchRandomCocktails,
} from './js/fetchCocktails';
import {
  createCocktail,
  createMarkup,
  createMarkupDesktop,
} from './js/createCocktail';

import { openModalWindow } from './js/modalWindow';

const refs = {
  searchForm: document.querySelector('#search-form'),
  gallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.btn-load-more'),
  searchLetterCocktailMobile: document.querySelector('.js-letter-cocktail-1'),
  searchLetterCocktail: document.querySelector('.js-letter-cocktail-2'),
  btnLS: document.querySelector('.add-descr'),
};
// ==================ФУНЦИЯ ДОБАВЛЕНИЯ РАЗМЕТКИ ДЛЯ МОБИЛЬНОЙ ВЕРСИИ (ВЫПЫДАЮЩИЙ СПИСОК)============================
createMarkup();
// ====================ФУНКЦИЯ ДОБАВЛЕНИЯ РАЗМЕТКИ ДЛЯ DEKSTOP, TABLET==============================================
createMarkupDesktop();
// ====================ВЫВОД РАНДОМНЫХ КОКТЕЙЛЕЙ====================================================================
fetchRandomCocktails().then(data => {
  console.log(data.drinks);
  createCocktail(data.drinks);
});
fetchRandomCocktails();
// =======================LISTENER =================================================================================
refs.searchForm.addEventListener('submit', onSearchForm);
refs.searchLetterCocktailMobile.addEventListener(
  'click',
  onClickLetterCocktail
);
refs.searchLetterCocktail.addEventListener('click', onClickLetterCocktail);
refs.gallery.addEventListener('click', saveFavoritCocktailLS);
// refs.btnLS.addEventListener('click', saveFavoritCocktailLS);

function onSearchForm(event) {
  event.preventDefault();
  refs.gallery.innerHTML = '';
  page = 1;
  const query = event.currentTarget.searchQuery.value.trim();

  fetchCocktails(query).then(data => {
    console.log(data.drinks);
    createCocktail(data.drinks);
  });
}

function onClickLetterCocktail(event) {
  refs.gallery.innerHTML = '';
  page = 1;
  const letter = event.target.textContent;

  console.log(letter);

  fetchLetterCocktails(letter).then(data => {
    console.log(data.drinks);
    createCocktail(data.drinks);
  });
}

// =====================================================

function saveFavoritCocktailLS(event) {
  // FavoriteCocktails - Улюблені коктейлі
  // FavoriteIngridients - Улюблені Інгрідієнти

  const cocktailName = event.target.getAttribute('data-cocktail-name');
  console.log(cocktailName);
  saveToLS('FavoriteCocktails', cocktailName);
}
