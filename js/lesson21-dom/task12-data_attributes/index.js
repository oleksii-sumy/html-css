export const squaredNumbers = () => {
  const firstElem = document.querySelector('[data-number="5"]');
  const numberOfFirstElem = Object.values(firstElem.dataset);
  firstElem.dataset.squaredNumber = numberOfFirstElem[0] ** 2;

  const secondElem = document.querySelector('[data-number="7"]');
  const numberOfSecondElem = Object.values(secondElem.dataset);
  secondElem.dataset.squaredNumber = numberOfSecondElem[0] ** 2;

  const thirdElem = document.querySelector('[data-number="-3"]');
  const numberOfThirdElem = Object.values(thirdElem.dataset);
  thirdElem.dataset.squaredNumber = numberOfThirdElem[0] ** 2;
};

squaredNumbers();
