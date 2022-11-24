 export const createButton = text => {
  const buttonElem = document.createElement('button');
  buttonElem.textContent = text;
  const placeForButton = document.querySelector('body');
  placeForButton.append(buttonElem);
};
