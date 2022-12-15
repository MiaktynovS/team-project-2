
// export default function ingredientModalMarkup(drink, ingredientDetails) {
//     let type = drink.strType;
//     let description = drink.strDescription;
//     if (drink.strType == null) {
//         type = 'unknown';
//     }
//     if (drink.strDescription == null) {
//         description = 'Sorry, description was not found.';
//     }
//     return `
//         <h1 class="modal-hero">${drink.strIngredient}</h1>

//         <h2 class="modal-description">${type}</h2>

//         <p class="modal-description__text">
//         ${description}
//         </p>

//         <ul class="modal-cocktail list">
//         ${ingredientDetails}
//         </ul>

//         `;
// }

// import FetchDrinks from './fetchDrinks';
// const fetchDrinks = new FetchDrinks();
// export default class Storage {
// // constructor() {
// //   localStorage.setItem('cocktails', JSON.stringify([]));
// //   localStorage.setItem('ingredients', JSON.stringify([]));
// // }
// async toggleDrink(id) {
//     const cocktailsStorege = localStorage.getItem('cocktails');
//     const arr = JSON.parse(cocktailsStorege);
//     const drinkObj = await fetchDrinks.byID(id);

//     const isInStorage = arr.find(el => el.idDrink === id);
//     if (isInStorage) {
//     const reducedArr = arr.filter(el => el.idDrink != id);
//     localStorage.setItem('cocktails', JSON.stringify(reducedArr));
//     } else {
//     arr.push(drinkObj);
//     localStorage.setItem('cocktails', JSON.stringify(arr));
//     }
// }
// async toggleIngredient(name) {
//     const ingredientsStorage = localStorage.getItem('ingredients');
//     const arr = JSON.parse(ingredientsStorage);
//     const ingredientObj = await fetchDrinks.ingredient(name);

//     const isInStorage = arr.find(el => el.strIngredient === name);
//     if (isInStorage) {
//     const reducedArr = arr.filter(el => el.strIngredient != name);
//     localStorage.setItem('ingredients', JSON.stringify(reducedArr));
//     } else {
//     arr.push(ingredientObj);
//     localStorage.setItem('ingredients', JSON.stringify(arr));
//     }
// }
// isInStorage(id) {
//     const cocktailsStorege = localStorage.getItem('cocktails');
//     const arr = JSON.parse(cocktailsStorege);
//     const isInStorage = arr.find(el => el.idDrink === id);
//     if (isInStorage === undefined) {
//     return false;
//     } else {
//     return true;
//     }
// }
// isIngredientInStorage(name) {
//     const ingredientStorege = localStorage.getItem('ingredients');
//     const arr = JSON.parse(ingredientStorege);
//     const isInStorage = arr.find(el => el.strIngredient === name);
//     if (isInStorage === undefined) {
//     return false;
//     } else {
//     return true;
//     }
// }
// hasDrinks() {
//     const cocktailsStorege = localStorage.getItem('cocktails');
//     const arr = JSON.parse(cocktailsStorege);
//     if (arr.length === 0) {
//     return false;
//     } else {
//     return true;
//     }
// }
// hasIngredients() {
//     const cocktailsStorege = localStorage.getItem('ingredients');
//     const arr = JSON.parse(cocktailsStorege);
//     if (arr.length === 0) {
//     return false;
//     } else {
//     return true;
//     }
// }
// }

// export default class FetchDrinks {
// random() {
//     return fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
//     .then(p => p.json())
//     .then(p => p.drinks[0]);
// }
// byLetter(letter) {
//     return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`).then(p => p.json());
// }
// byName(keyWord) {
//     return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyWord}`)
//     .then(p => p.json())
//     .then(p => p.drinks);
// }
// byID(id) {
//     return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
//     .then(p => p.json())
//     .then(p => p.drinks[0]);
// }
// ingredient(keyWord) {
//     return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${keyWord}`)
//     .then(p => p.json())
//     .then(p => p.ingredients[0]);
// }
// favorites() {}
// }

// import FetchDrinks from './fetchDrinks';
// import cocktailModalMarkup from './cocktailModalMarkup';
// import ingredientModalMarkup from './ingredientModalMarkup';
// import refs from './refs';
// import Storage from './storage';
// const fetchDrinks = new FetchDrinks();
// const storage = new Storage();
// // -------------------------------------------------
// let currentModalID = 0;
// let currentIngredientModal = '';
// function listenLearnMoreBtns() {
//   const learnMoreBtns = document.querySelectorAll('.learn-more-btn');
//   learnMoreBtns.forEach(el => el.addEventListener('click', showModalDrink));
// }
// async function showModalDrink(e) {
//   fetchDrinks
//     .byName(e.currentTarget.id)
//     .then(targetedDrink => {
//       const ingredientList = createIngredientList(targetedDrink[0]);
//       refs.cocktailModalContent.innerHTML = cocktailModalMarkup(
//         targetedDrink[0],
//         ingredientList
//       );
//       refs.cocktailModal.classList.remove('visually-hidden');
//       currentModalID = targetedDrink[0].idDrink;
//       if (storage.isInStorage(currentModalID)) {
//         refs.modalAddDrink.children[0].textContent = 'Remove from favorite';
//       } else {
//         refs.modalAddDrink.children[0].textContent = 'Add to favorite';
//       }
//     })
//     .then(() => {
//       const ingredients = document.querySelectorAll(
//         '.modal-cocktail__item-link'
//       );
//       ingredients.forEach(el =>
//         el.addEventListener('click', showModalIngregients)
//       );
//     });
// }

// function createIngredientList(targetedDrink) {
//   const markup = [];
//   for (let key in targetedDrink) {
//     if (key.includes('strIngredient') && targetedDrink[key] != null) {
//       markup.push(`<li class="modal-cocktail__item">
//         <a class="modal-cocktail__item-link" id="${targetedDrink[key]}">✶ ${targetedDrink[key]}</a>
//       </li>
//       `);
//     }
//   }
//   return markup.join('');
// }
// function showModalIngregients(e) {
//   refs.ingredientMOdal.classList.remove('visually-hidden');
//   fetchDrinks.ingredient(e.currentTarget.id).then(p => {
//     currentIngredientModal = p.strIngredient;
//     const ingredientDetails = createIngredientDetails(p);
//     refs.ingredientMOdalContent.innerHTML = ingredientModalMarkup(p, ingredientDetails);
//   });
// }
// function createIngredientDetails(ingredient) {
//   let abv = ingredient.strABV;
//   if (ingredient.strABV == null) {
//     abv = '0';
//   }
//   return `<li class="modal-cocktail__item">
//         <a class="modal-cocktail__item-link">✶ Type: ${ingredient.strType}</a>
//       </li>

//       <li class="modal-cocktail__item">
//         <a class="modal-cocktail__item-link"
//           >✶ Alcohol by volume: ${abv}%</a
//         >
//       </li>`;
// }
// export {
//   listenLearnMoreBtns,
//   currentModalID,
//   currentIngredientModal,
//   createIngredientDetails,
// };