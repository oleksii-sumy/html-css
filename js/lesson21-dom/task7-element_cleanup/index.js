export const clearList = (value) => {
  searchCategories = document.querySelector('.categories');
  searchCategories.innerHTML = ${value};
};

clearList('');
