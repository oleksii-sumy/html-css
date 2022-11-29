function consolFromInput(event) {
  console.log(event.target.value);
}
const textInput = document.querySelector('.text-input');
textInput.addEventListener('change', consolFromInput);


