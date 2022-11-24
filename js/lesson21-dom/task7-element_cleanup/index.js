export const clearList = (value) => {
  value = '';
  searchCategories = document.querySelector('.categories');
  searchCategories.innerHTML = value;
};
clearList('');
