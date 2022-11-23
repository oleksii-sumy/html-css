export const setTitle = text => {
  const searchTitle = document.querySelector('.title');
  searchTitle.textContent = text;
};

setTitle('new text');