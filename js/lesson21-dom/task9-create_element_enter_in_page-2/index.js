export const finishList = () => {
  const firstElem = document.createElement('li');
  firstElem.textContent = 1;
  const placeForFirst = document.querySelector('.list');
  placeForFirst.prepend(firstElem);

  const fourthElem = document.createElement('li');
  fourthElem.textContent = 4;
  const placeForFourth = document.querySelector('.special');
  placeForFourth.before(fourthElem);

  const sixElem = document.createElement('li');
  sixElem.textContent = 6;
  const placeForSix = document.querySelector('.special');
  placeForSix.after(sixElem);

  const eightElem = document.createElement('li');
  eightElem.textContent = 8;
  const placeForEight = document.querySelector('.list');
  placeForEight.append(eightElem);
};

