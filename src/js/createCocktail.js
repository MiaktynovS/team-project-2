const markupMobile = document.querySelector('.dropdown-content');
const markupDesktop = document.querySelector('.list-cocktail');
const svg = document.querySelector('.add-favorite__icon');
const containerSvg = document.querySelector('.add-favorite');

// ==================ФУНЦИЯ ДОБАВЛЕНИЯ РАЗМЕТКИ ПО ПОИСКУ=======================
export function createCocktail(images) {
  const markup = images
    .map(image => {
      const { strDrinkThumb, strImageAttribution, strDrink } = image;
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
                  <button type="button" class="info-btn-descr js-learn-btn" data-modal-open="${strDrink}">Learn more</button>
                </div>
                <div class="add-favorite">
                  <button type="button" class="add-descr" data-cocktail-name="${strDrink}">Add To
                  
                  </button>
                  <svg class="add-favorite__icon" width="20" height="20">
                    <use href="../src/images/heart.svg"></use>
                  </svg>
               
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
  // const svg = document.querySelector('.add-favorite__icon');
  // const containerSvg = document.querySelector('.add-favorite');
  // containerSvg.insertAdjacentElement('beforeend', svg);
  // refs.svg.style.display = 'block';
}

// ==================ФУНЦИЯ ДОБАВЛЕНИЯ РАЗМЕТКИ ИНГРИДИЕНТОВ В МОДАЛЬНОМ ОКНЕ=======================
export function createIngredientCocktail(ingredients) {
  const markup = ingredients
    .map(ingredient => {
      const { strDrinkThumb, strImageAttribution, strDrink } = ingredient;
      return `
        <a class="gallery__link">
          <div class="gallery-item">
            <img class="gallery-item__img" src="${strDrinkThumb}" alt="${strImageAttribution}" loading="lazy" />
            <div class="info">
              <div class="info-item">
                <p class="info-descr">${strDrink}</p>
              </div>
              <div class="btn-item">
                <div class="add-favorite">
                  <button type="button" class="add-descr" data-cocktail-name="${strDrink}">Add To</button>
                  <svg class="add-favorite__icon" width="20" height="20">
                    <use href="./images/heart.svg#heart"></use>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </a>
      `;
    })
    .join('');
  const modal = document.querySelector('.modal');
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
