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
  const btnRemove = document.querySelector('js_btn_fav_remove');

  // const svg = document.querySelector('.add-favorite__icon');
  // const containerSvg = document.querySelector('.add-favorite');
  // containerSvg.insertAdjacentElement('beforeend', svg);
  // refs.svg.style.display = 'block';
}

// ==================ФУНЦИЯ ДОБАВЛЕНИЯ РАЗМЕТКИ ИНГРИДИЕНТОВ В МОДАЛЬНОМ ОКНЕ=======================
export function createIngredientCocktail(ingredients) {
  const markup = ingredients
    .map(ingredient => {
      const { strDrinkThumb, strImageAttribution, strDrink, idDrink } =
        ingredient;
      return `
      <div class="modal-container-1">
      <h2 class="modal-container__header">${strDrink}</h2>
      <div class="modal-container__descr">
        <h3 class="modal-container__descr-header">${strDrink}</h3>
        <p class="info-descr">
          Add the gin, Campari and sweet vermouth to a mixing glass filled with ice, and stir until well-chilled. Strain into a rocks glass filled with large ice cubes. Garnish with an orange peel.
        </p>
      </div>
      <img class="modal-container__img" src="${strDrinkThumb}" alt="${strImageAttribution}" loading="lazy"/>
      <div class="modal-ingredients">
        <h3 class="modal-ingredients__header">${strDrink}</h3>
        <h4 class="modal-ingredients__subheader">${strDrink}</h4>
        <ul class="modal-ingredients__list">
          <li>
            <a href="">✶  Ice</a>
          </li>
          <li>
            <a href="">✶  1 ounce gin</a>
          </li>
          <li>
            <a href="">✶  1 ounce Campari</a>
          </li>
          <li>
            <a href="">✶  1 ounce sweet vermouth</a>
          </li>
          <li>
            <a href="">✶  Garnish: orange peel</a>
          </li>
        </ul>

        <button type="button" class="add-favorite modal-btn">Add To Favorite</button>
        <!-- <button type="button" class="add-favorite modal-btn">Remove from favorite</button> -->
      </div>
    </div>

    <div class="modal-container-2">
      <div class="modal-container-flex">
        <div class="modal-container__img">
          <img class="modal-img" src="./images/ACID.png" alt="Коктейль" loading="lazy"/>
        </div>
        <div>
          <h2 class="modal-container__header">Negroni</h2>
          <div class="modal-ingredients">
            <h3 class="modal-ingredients__header">INGREDIENTS</h3>
            <h4 class="modal-ingredients__subheader">Per cocktail</h4>
            <ul class="modal-ingredients__list">
              <li>
                <a href="">✶  Ice</a>
              </li>
              <li>
                <a href="">✶  1 ounce gin</a>
              </li>
              <li>
                <a href="">✶  1 ounce Campari</a>
              </li>
              <li>
                <a href="">✶  1 ounce sweet vermouth</a>
              </li>
              <li>
                <a href="">✶  Garnish: orange peel</a>
              </li>
            </ul>
        </div>
      </div>
    </div>
        <div class="modal-container__descr">
          <h3 class="modal-container__descr-header">Instractions:</h3>
          <p class="info-descr">
            Add the gin, Campari and sweet vermouth to a mixing glass filled with ice, and stir until well-chilled. Strain into a rocks glass filled with large ice cubes. Garnish with an orange peel.
          </p>
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
