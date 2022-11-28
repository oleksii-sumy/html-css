const searchButton = document.querySelector('.search__btn');
searchButton.addEventListener('click', consolText);

function consolText() {
  const inputText = document.querySelector('input');
  console.log(inputText.value);
}
