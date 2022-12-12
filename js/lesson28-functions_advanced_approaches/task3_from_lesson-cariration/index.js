export const mult = num1 => num2 => num1 * num2;
const multNum = mult(5);
const result = multNum (4);
// console.log(result);

export const twice = num => {
  const newtValue = mult(num);
  return newtValue(2);
};
// twice(7);

export const triple = num => {
  const newValue = mult(num);
  return newValue(3);
};
// triple(9);