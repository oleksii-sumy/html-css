function handleClick(event) {
  console.log(event.textContent);
}
const clickButton = document.querySelector('.btn');
clickButton.addEventListener('click', handleClick);
handleClick(clickButton);
