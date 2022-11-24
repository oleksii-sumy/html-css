export const clearList = () => {
  searchCategories = document.querySelector('.categories');
  return searchCategories.innerHTML = '';
};
