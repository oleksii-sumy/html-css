export const finishForm = () => {
  const oldElemPlace = document.querySelector('[type="text"]');
  oldElemPlace.setAttribute('type', 'passport');
  oldElemPlace.setAttribute('name', 'password');
  const placeForNewElem = document.querySelector('.login-form');
  const newElem = document.createElement('input');
  placeForNewElem.prepend(newElem);
  newElem.setAttribute('type', 'text');
  newElem.setAttribute('name', 'login');
};
