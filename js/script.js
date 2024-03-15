let modal = document.querySelector('.modal-conteiner');
let searchButton = document.querySelector('.search-button');
let buttonClose = document.querySelector('.search-form__button-close');


searchButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.add('is-open');
});

buttonClose.addEventListener('click', function () {
  modal.classList.remove('is-open');
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    modal.classList.remove('is-open');
  }
});
