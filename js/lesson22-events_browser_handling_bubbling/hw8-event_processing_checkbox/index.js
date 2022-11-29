function consolBoolean(event) {
  console.log(event.target.checked);
}
const searchCheckbox = document.querySelector('input');
searchCheckbox.addEventListener('change', consolBoolean);


