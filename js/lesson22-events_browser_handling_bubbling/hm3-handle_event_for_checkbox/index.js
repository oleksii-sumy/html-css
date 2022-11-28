function statusCheckbox() {
  const checkboxElem = document.querySelector('input');
  console.log(checkboxElem.checked);
}

const checkboxInput = document.querySelector('input');
checkboxInput.addEventListener('change', statusCheckbox);
