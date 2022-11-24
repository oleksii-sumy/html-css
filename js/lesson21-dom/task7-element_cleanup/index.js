export const clearList = (value) => {
  searchCategories = document.querySelector('.categories');
return searchCategories.innerHTML = value;
};


clearList('');
