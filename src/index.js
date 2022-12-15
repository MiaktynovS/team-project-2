import { saveToLS, loadFromLS } from './js/localSt.js';
import {
  fetchCocktails,
  fetchLetterCocktails,
  fetchRandomCocktails,
  fetchIngredientCocktails,
  fetchNameIngredientCocktail,
} from './js/fetchCocktails';
import {
  createCocktail,
  createIngredientCocktail,
  createMarkup,
  createMarkupDesktop,
  createIngredientCard,
} from './js/createCocktail';
import { toggleList, togglemList } from './js/openMenuAndFavorite.js';
import {
  openModalWindow,
  openModalWindowIngredient } from './js/modalWindow.js';

import { element } from './js/pagination.js';

const refs = {
  searchForm: document.querySelector('#search-form'),
  gallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.btn-load-more'),
  searchLetterCocktailMobile: document.querySelector('.js-letter-cocktail-1'),
  searchLetterCocktail: document.querySelector('.js-letter-cocktail-2'),
  modal: document.querySelector('.modal'),
  modalCreateCocktail: document.querySelector('.modal-create-cocktail'),
  closeModalBtn: document.querySelector('.modal-close-btn'),
  //модальное ингидиента
  modalIngredient: document.querySelector('.modal-ingredient'),

  modalCreateIngredient: document.querySelector('.modal-create-ingredient'),
  titleContainer2: document.querySelector('.title-2'),
  svg: document.querySelector('.add-favorite__icon use').href.baseVal,

  titleContainer1: document.querySelector('.title-1'),
};

refs.gallery.addEventListener('click', openModalWindow);
refs.modal.addEventListener('click', openModalWindow);
//модальное ингридиента
refs.modal.addEventListener('click', openModalWindowIngredient);
refs.modalIngredient.addEventListener('click', openModalWindowIngredient);
refs.gallery.addEventListener('click', onClickCocktailBtn);

refs.modal.addEventListener('click', onClickIngredientBtn);
refs.modalIngredient.addEventListener('click', onClickIngredientBtn);
refs.titleContainer2.style.display = 'none';

// toggleList();
// togglemList();

// const ingredientModal = document.querySelector('.inredient');
// ingredientModal.insertAdjacentHTML('beforeend', markup);

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
  // page = 1;
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
  // page = 1;

  const { id } = event.target.dataset;
  console.log(id);
  fetchIngredientCocktails(id).then(data => {
    createIngredientCocktail(data.drinks);
    console.log(data);
    const btnRemove = document.querySelectorAll('.js_btn_fav_remove');
    for (let btn of btnRemove) {
      btn.style.display = 'none';
    }
  });
}

function onClickIngredientBtn(event) {
  refs.modalCreateIngredient.innerHTML = '';
  const { name } = event.target.dataset;
  console.log(name);
  fetchNameIngredientCocktail(name).then(data => {
    console.log(data);
    createIngredientCard(data.ingredients);
  });
}

// function onClickLetterCocktail(event) {
//   refs.gallery.innerHTML = '';
//   // page = 1;
//   const letter = event.target.textContent;

//   // console.log(letter);

//   fetchLetterCocktails(letter).then(data => {
//     // console.log(data.drinks);
//     // refs.svg.style.display = 'block';
//     createCocktail(data.drinks);

//     const btnRemove = document.querySelectorAll('.js_btn_fav_remove');
//     for (let btn of btnRemove) {
//       btn.style.display = 'none';
//     }
//   });
// }

function onClickLetterCocktail(event) {
  refs.gallery.innerHTML = '';
  page = 1;
  const letter = event.target.textContent;

  fetchLetterCocktails(letter).then(data => {
    if (data.drinks === null) {
      // console.log(123);
      refs.titleContainer1.style.display = 'none';
      refs.gallery.innerHTML = "<div><h2 class='title-error'>Sorry, we didn't find any cocktail for you</h2><img src='./images/error-img.jpg'></div >";
    } else {
      createCocktail(data.drinks);
    }
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