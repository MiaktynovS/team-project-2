export function openModalWindow(e) {

  if (e.target.classList.contains('js-learn-btn')) {
    document.querySelector('[data-modal]').classList.toggle('is-hidden');
    let closeModal = document.querySelector('[data-modal-close]');
    closeModal.addEventListener('click', (e) => {
      document.querySelector('[data-modal]').classList.add('is-hidden');
    });
  }

}

export function openModalWindowIngredient(e) {

  if (e.target.classList.contains('js-ingredient-link')) {
    document.querySelector('[data-modal-ingredient]').classList.toggle('is-hidden');
    let closeModal = document.querySelector('[data-modal-ingredient-close]');
    closeModal.addEventListener('click', (e) => {
      document.querySelector('[data-modal-ingredient]').classList.add('is-hidden');
    });
  }

}