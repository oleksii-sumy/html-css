function handleClick(event) {
  console.log(event.target.textContent);
}
const clickButton = document.querySelector('.btn');
clickButton.addEventListener('click', handleClick);
