const gallery = document.querySelector('.gallery');

export function createCocktail(images) {
  const markup = images.map(image => {
      const { strDrinkThumb, strImageAttribution, strDrink } = image;
      return `
        <a class="gallery__link" href="${strDrinkThumb}">
          <div class="gallery-item">
            <img class="gallery-item__img" src="${strDrinkThumb}" alt="${strImageAttribution}" loading="lazy" />
            <div class="info">
              <div class="info-item">
                <p class="info-descr">${strDrink}</p>
              </div>
              <div class="btn-item">
                <div class="info-btn">
                  <p class="info-btn-descr js-learn-btn">Learn more</p>
                </div>
                <div class="add-favorite">
                  <p class="add-descr">Add To</p>
                  <svg class="add-favorite__icon" width="20" height="20">
                    <use href="images/sprite.svg#heart"></use>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </a>
      `;
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
}