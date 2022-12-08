import {
  fetchCocktails,
  fetchLetterCocktails,
  fetchRandomCocktails,
  fetchIdCocktails,
} from './js/fetchCocktails';
import {
  createCocktail,
  createMarkup,
  createMarkupDesktop,
} from './js/createCocktail';

const refs = {
  searchForm: document.querySelector('#search-form'),
  gallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.btn-load-more'),
  searchLetterCocktailMobile: document.querySelector('.js-letter-cocktail-1'),
  searchLetterCocktail: document.querySelector('.js-letter-cocktail-2'),
  favoritCocktails: document.querySelector('.favorit'),
};
// ==================ФУНЦИЯ ДОБАВЛЕНИЯ РАЗМЕТКИ ДЛЯ МОБИЛЬНОЙ ВЕРСИИ (ВЫПЫДАЮЩИЙ СПИСОК)============================
createMarkup();
// ====================ФУНКЦИЯ ДОБАВЛЕНИЯ РАЗМЕТКИ ДЛЯ DEKSTOP, TABLET==============================================
createMarkupDesktop();
// ====================ВЫВОД РАНДОМНЫХ КОКТЕЙЛЕЙ====================================================================
fetchRandomCocktails().then(data => {
  console.log(data.drinks);
  appendCocktailsMarkup(data.drinks);
});
fetchRandomCocktails();
// =======================LISTENER =================================================================================
refs.searchForm.addEventListener('submit', onSearchForm);
refs.searchLetterCocktailMobile.addEventListener(
  'click',
  onClickLetterCocktail
);
refs.searchLetterCocktail.addEventListener('click', onClickLetterCocktail);
// refs.favoritCocktails.addEventListener('click', onClickIdCocktail);
// ======================================================================================
function onSearchForm(event) {
  event.preventDefault();
  refs.gallery.innerHTML = '';
  page = 1;
  const query = event.currentTarget.searchQuery.value.trim();

  fetchCocktails(query).then(data => {
    console.log(data.drinks);
    appendCocktailsMarkup(data.drinks);
  });
}

function onClickLetterCocktail(event) {
  refs.gallery.innerHTML = '';
  page = 1;
  const letter = event.target.textContent;

  console.log(letter);

  fetchLetterCocktails(letter).then(data => {
    console.log(data.drinks);
    appendCocktailsMarkup(data.drinks);
  });
}

// function onClickIdCocktail(event) {
//   //refs.gallery.innerHTML = '';
//   page = 1;
//   const Id = event.target.textContent;

//   console.log(Id);

//   fetchIdCocktails(Id).then(data => {
//     console.log(data.drinks.idDrink);
//     appendCocktailsMarkupFavorit(data.drinks.idDrink);
//   });
// }

function appendCocktailsMarkup(images) {
  console.log(images);
  refs.gallery.insertAdjacentHTML('beforeend', createCocktail(images));
}

// function appendCocktailsMarkupFavorit(images) {
//   console.log(images);
//   refs.favoritCocktails.insertAdjacentHTML('beforeend', createCocktail(images));
// }
