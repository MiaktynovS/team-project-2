const markupMobile = document.querySelector('.dropdown-content');
const markupDesktop = document.querySelector('.list-cocktail');

// ==================ФУНЦИЯ ДОБАВЛЕНИЯ РАЗМЕТКИ ПО ПОИСКУ=======================
export function createCocktail(images) {
  const svg = document.querySelector('.add-favorite__icon use').href.baseVal;
  const markup = images
    .map(image => {
      const { strDrinkThumb, strImageAttribution, strDrink, idDrink } = image;
      return `
        <a class="gallery__link">
          <div class="gallery-item">
            <img class="gallery-item__img" src="${strDrinkThumb}" alt="${strImageAttribution}" loading="lazy" />
            <div class="info">
              <div class="info-item">
                <p class="info-descr">${strDrink}</p>
              </div>
              <div class="btn-item">
                <div class="info-btn">
                  <button type="button" class="info-btn-descr js-learn-btn" data-modal-open="${strDrink}" data-id="${idDrink}">Learn more</button>
                </div>
                <div class="add-favorite">
                  <button type="button" class="add-descr js_btn_fav_add" data-cocktail-name="${strDrink}">
                  Add To
                   <svg class="add-favorite__icon" width="21" height="18">
                      <use href="${svg}"></use>
                    </svg>
                  </button>
                   <button type="button" class="add-descr js_btn_fav_remove" data-cocktail-name-remove="${strDrink}">
                  Remove
                  <svg class="add-favorite__icon" width="21" height="18">
                      <use href="${svg}"></use>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </a>
      `;
    })
    .join('');
  const gallery = document.querySelector('.gallery');
  gallery.insertAdjacentHTML('beforeend', markup);
  document.getElementById('opacity').style.opacity = '0';
}

// ==================ФУНЦИЯ ДОБАВЛЕНИЯ РАЗМЕТКИ ИНГРИДИЕНТОВ В МОДАЛЬНОМ ОКНЕ=======================
export function createIngredientCocktail(ingredients) {
  const markup = ingredients
    .map(ingredient => {
      const { strDrinkThumb, strImageAttribution, strDrink, strInstructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, idDrink } =
        ingredient;
      return `
      <div class="modal-container-1">
      <h2 class="modal-container__header">${strDrink}</h2>
      <div class="modal-container__descr">
        <h3 class="modal-container__descr-header">Instractions:</h3>
        <p class="info-descr">${strInstructions}</p>
      </div>
      <img class="modal-container__img" src="${strDrinkThumb}" alt="${strImageAttribution}" loading="lazy"/>
      <div class="modal-ingredients">
        <h3 class="modal-ingredients__header">INGREDIENTS</h3>
        <h4 class="modal-ingredients__subheader">Per cocktail</h4>
        <ul class="modal-ingredients__list">
          <li>
          <button type="button" class="modal-ingredients__btn js-ingredient-link" id="inredient-list" data-modal-open="${strDrink}" data-id="${strDrink}" data-name="${strIngredient1}">✶ ${strIngredient1}</button>
          </li>
          <li>
            <button type="button" class="modal-ingredients__btn js-ingredient-link" id="inredient-list" data-modal-open="${strDrink}" data-id="${strDrink}" data-name="${strIngredient2}">✶ ${strIngredient2}</button>
          </li>
          <li>
            <button type="button" class="modal-ingredients__btn js-ingredient-link" id="inredient-list" data-modal-open="${strDrink}" data-id="${strDrink}" data-name="${strIngredient3}">✶ ${strIngredient3}</button>
          </li>
          <li>
            <button type="button" class="modal-ingredients__btn js-ingredient-link" id="inredient-list" data-modal-open="${strDrink}" data-id="${strDrink}" data-name="${strIngredient4}">✶ ${strIngredient4}</button>
          </li>
          <li>
            <button type="button" class="modal-ingredients__btn js-ingredient-link" id="inredient-list" data-modal-open="${strDrink}" data-id="${strDrink}" data-name="${strIngredient5}">✶ ${strIngredient5}</button>
          </li>
        </ul>

        <button type="button" class="add-favorite modal-btn">Add To Favorite</button>
        <!-- <button type="button" class="add-favorite modal-btn">Remove from favorite</button> -->
      </div>
    </div>

    <div class="modal-container-2">
      <div class="modal-container-flex">
        <div class="modal-container__img">
          <img class="modal-img" src="${strDrinkThumb}" alt="${strImageAttribution}" loading="lazy"/>
        </div>
        <div>
          <h2 class="modal-container__header">${strDrink}</h2>
          <div class="modal-ingredients">
            <h3 class="modal-ingredients__header">INGREDIENTS</h3>
            <h4 class="modal-ingredients__subheader">Per cocktail</h4>
            <ul class="modal-ingredients__list">
              <li>
                <button type="button" class="modal-ingredients__btn js-ingredient-link" id="inredient-list" data-modal-open="${strDrink}"
                data-id="${idDrink}" data-name="${strIngredient1}">✶ ${strIngredient1}</button>
              </li>
              <li>
                <button type="button" type="button" class="modal-ingredients__btn js-ingredient-link" id="inredient-list" data-modal-open="${strDrink}"
                data-id="${idDrink}" data-name="${strIngredient2}">✶ ${strIngredient2}</button>
              </li>
              <li>
                <button type="button" class="modal-ingredients__btn js-ingredient-link" id="inredient-list" data-modal-open="${strDrink}"
                data-id="${idDrink}" data-name="${strIngredient3}">✶ ${strIngredient3}</button>
              </li>
              <li>
                <button type="button" class="modal-ingredients__btn js-ingredient-link" id="inredient-list" data-modal-open="${strDrink}"
                data-id="${idDrink}" data-name="${strIngredient4}">✶ ${strIngredient4}</button>
              </li>
              <li>
                <button type="button" class="modal-ingredients__btn js-ingredient-link" id="inredient-list" data-modal-open="${strDrink}"
                data-id="${idDrink}" data-name="${strIngredient5}">✶ ${strIngredient5}</button>
              </li>
            </ul>
        </div>
      </div>
    </div>
        <div class="modal-container__descr">
          <h3 class="modal-container__descr-header">Instractions:</h3>
          <p class="info-descr">${strInstructions}</p>
        </div>
        <button type="button" class="add-favorite modal-btn">Add To Favorite</button>
        <!-- <button type="button" class="add-favorite modal-btn">Remove from favorite</button> -->
    </div>
      `;
    })
    .join('');
  const modal = document.querySelector('.modal-create-cocktail');
  modal.insertAdjacentHTML('beforeend', markup);
}

// ==================ФУНЦИЯ ДОБАВЛЕНИЯ РАЗМЕТКИ В МОДАЛЬНОМ ОКНЕ ИНГРИДИЕНТА=======================

export function createIngredientCard(ingredients) {
  const markup = ingredients
    .map(ingredient => {
      const { strType, strIngredient, strDescription } =
        ingredient;
      return `
      <h3 class="modal-container__ingredient">${strIngredient}</h3>
      <div class="modal-container__descr">
        <h3 class="modal-container__descr-header">${strType}</h3>
        <div class="line">

        </div>
        <p class="info-descr">${strDescription}</p>
      </div>

      <div class="modal-ingredients">
        <ul class="modal-ingredient__list">
          <li>
            <a href="">✶  Type: ${strType}</a>
          </li>
          <li>
            <a href="">✶  Country of origin:</a>
          </li>
          <li>
            <a href="">✶  Alcohol by volume:</a>
          </li>
          <li>
            <a href="">✶  Flavour:</a>
          </li>
        </ul>

        <button type="button" class="add-favorite modal-btn">Add To Favorite</button>
       </div>
      `;
    })
    .join('');
  const modal = document.querySelector('.modal-create-ingredient');
  modal.insertAdjacentHTML('beforeend', markup);
}

// ==================ФУНЦИЯ ДОБАВЛЕНИЯ РАЗМЕТКИ ДЛЯ МОБИЛЬНОЙ ВЕРСИИ (ВЫПЫДАЮЩИЙ СПИСОК)=======================
export function createMarkup() {
  let str = 'ABCDEFGHIJKLMN0PQRSTUVWXYZ1234567890';
  const result = str
    .split('')
    .map(letter => {
      return `
      <span href="#">${letter}</span>`;
    })
    .join('');
  markupMobile.insertAdjacentHTML('beforeend', result);
}

// ====================ФУНКЦИЯ ДОБАВЛЕНИЯ РАЗМЕТКИ ДЛЯ DEKSTOP, TABLET==============================================
export function createMarkupDesktop() {
  let str = 'ABCDEFGHIJKLMN0PQRSTUVWXYZ1234567890';
  const result = str
    .split('')
    .map(letter => {
      return `
      <li class="list-cocktail__item" href="#">
        <button class="list-cocktail__btn">${letter}</button>
      </li>`;
    })
    .join('');
  markupDesktop.insertAdjacentHTML('beforeend', result);
}
