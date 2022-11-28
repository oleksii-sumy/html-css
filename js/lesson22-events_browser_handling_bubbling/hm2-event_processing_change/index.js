function consolText() {
  const inputElem = document.querySelector('input');
  console.log(inputElem.value);
}
const inputTextForm = document.querySelector('.text-input');
inputTextForm.addEventListener('change', consolText);
