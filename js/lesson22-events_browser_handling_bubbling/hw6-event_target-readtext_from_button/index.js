function handleClick(event) {
  console.log(event.target.textContent);
}
const arrBtn = Array.from(document.querySelectorAll('.btn'));
arrBtn.map(btn => {
  btn.addEventListener('click', handleClick);
})
