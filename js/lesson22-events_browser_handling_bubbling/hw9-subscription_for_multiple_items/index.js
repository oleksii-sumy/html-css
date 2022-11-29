function handleClick(event) {
  console.log(event.target.textContent);
}

const listOfButtons = Array.from(document.querySelectorAll('.pagination__page'));
listOfButtons.map(btn => {
  btn.addEventListener('click', handleClick);
});
