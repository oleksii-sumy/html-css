function consolText() {
  console.log('clicked');
  singleUseBtn.removeEventListener('click', consolText);

}
const singleUseBtn = document.querySelector('.single-use-btn');
singleUseBtn.addEventListener('click', consolText);
