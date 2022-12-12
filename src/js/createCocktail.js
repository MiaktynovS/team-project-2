const markupMobile = document.querySelector('.dropdown-content');
const markupDesktop = document.querySelector('.list-cocktail');

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
                  <button type="button" class="info-btn-descr js-learn-btn" data-modal-open>Learn more</button>
                </div>
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
  const gallery = document.querySelector('.gallery');
  console.log(gallery);
  gallery.insertAdjacentHTML('beforeend', markup);
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
