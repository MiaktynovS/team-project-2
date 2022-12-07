const gallery = document.querySelector('.gallery');

export function createCocktail(images) {
  const markup = images.map(image => {
      const { strDrinkThumb, strImageAttribution, strDrink } = image;
      return `
        <a class="gallery__link" href="${strDrinkThumb}">
          <div class="gallery-item">
            <img class="gallery-item__img" src="${strDrinkThumb}" alt="${strImageAttribution}" loading="lazy" />
            <div class="info">
              <p class="info-item">${strDrink}</p>
            </div>
          </div>
        </a>
      `;
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);

}