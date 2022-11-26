export const squaredNumbers = () => {
  const arrList = Array.from(document.querySelectorAll('.number'));
  console.log(arrList);
  arrList.map(elemArr => {
    console.log(elemArr);
const numberData = Object.values(elemArr.dataset);
    console.log(numberData);
    elemArr.dataset.squaredNumber = numberData[0] ** 2;
  });
};
