export const clearList = (value) => {
  value = '';
  searchCategories = document.querySelector('.categories');
  return searchCategories.innerHTML = value;
};

