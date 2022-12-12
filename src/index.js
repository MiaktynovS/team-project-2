import { saveToLS, loadFromLS } from './js/localSt.js';
import {
  fetchCocktails,
  fetchLetterCocktails,
  fetchRandomCocktails,
  fetchIngredientCocktails,
} from './js/fetchCocktails';
import {
  createCocktail,
  createIngredientCocktail,
  createMarkup,
  createMarkupDesktop,
} from './js/createCocktail';

import { openModalWindow } from './js/modalWindow.js';

const refs = {
  searchForm: document.querySelector('#search-form'),
  gallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.btn-load-more'),
  searchLetterCocktailMobile: document.querySelector('.js-letter-cocktail-1'),
  searchLetterCocktail: document.querySelector('.js-letter-cocktail-2'),
  modal: document.querySelector('.modal'),
  closeModalBtn: document.querySelector('.modal-close-btn'),
  modalCreateCocktail: document.querySelector('.modal-create-cocktail'),
  titleContainer2: document.querySelector('.title-2'),
  // svg: document.querySelector('.add-favorite__icon use').href.baseVal,
};

refs.gallery.addEventListener('click', openModalWindow);
refs.modal.addEventListener('click', openModalWindow);
refs.gallery.addEventListener('click', onClickCocktailBtn);

refs.titleContainer2.style.display = 'none';

window.addEventListener('load', () => {
  fetchRandomCocktails().then(data => {
    // console.log(data.drinks);
    createCocktail(data.drinks);

    const btnRemove = document.querySelectorAll('.js_btn_fav_remove');
    for (let btn of btnRemove) {
      btn.style.display = 'none';
    }
  });
});
// ==================ФУНЦИЯ ДОБАВЛЕНИЯ РАЗМЕТКИ ДЛЯ МОБИЛЬНОЙ ВЕРСИИ (ВЫПЫДАЮЩИЙ СПИСОК)============================
createMarkup();
// ====================ФУНКЦИЯ ДОБАВЛЕНИЯ РАЗМЕТКИ ДЛЯ DEKSTOP, TABLET==============================================
createMarkupDesktop();
// ====================ВЫВОД РАНДОМНЫХ КОКТЕЙЛЕЙ====================================================================

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
    // console.log(data.drinks);
    // refs.svg.style.display = 'block';

    createCocktail(data.drinks);

    const btnRemove = document.querySelectorAll('.js_btn_fav_remove');
    for (let btn of btnRemove) {
      btn.style.display = 'none';
    }
  });
}

function onClickCocktailBtn(event) {
  refs.modalCreateCocktail.innerHTML = '';
  // refs.closeModalBtn.style.display = 'block';
  // const reset = '';
  // refs.modal.insertAdjacentHTML('afterbegin', reset);
  page = 1;

  const ingredient = event.target.getAttribute('data-id');
  const { id } = event.target.dataset;
  fetchIngredientCocktails(id).then(data => {
    createIngredientCocktail(data.drinks);

    const btnRemove = document.querySelectorAll('.js_btn_fav_remove');
    for (let btn of btnRemove) {
      btn.style.display = 'none';
    }
  });
}

function onClickLetterCocktail(event) {
  refs.gallery.innerHTML = '';
  page = 1;
  const letter = event.target.textContent;

  console.log(letter);

  fetchLetterCocktails(letter).then(data => {
    // console.log(data.drinks);
    // refs.svg.style.display = 'block';
    createCocktail(data.drinks);

    const btnRemove = document.querySelectorAll('.js_btn_fav_remove');
    for (let btn of btnRemove) {
      btn.style.display = 'none';
    }
  });
}

// =====================================================

function saveFavoritCocktailLS(event) {
  // FavoriteCocktails - Улюблені коктейлі
  // FavoriteIngridients - Улюблені Інгрідієнти

  const cocktailName = event.target.getAttribute('data-cocktail-name');
  // console.log(cocktailName);
  saveToLS('FavoriteCocktails', cocktailName);
}
