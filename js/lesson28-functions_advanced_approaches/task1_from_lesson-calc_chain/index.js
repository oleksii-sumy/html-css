const calc = initeValue => {
  let result = initeValue;

  const calculator = {
    add(number) {
      result += number;
      return calculator;
    },
    substract(number) {
      result -= number;
      return this;
    },
    mult(value) {
      result *= number;
      return this;
    },
    div(value) {
      result /= number;
      return this;
    },
    result() {
      return result;
    },
  };
  return calculator;
};
const result = calc(3).add(2).div(10).substract(5).result();
console.log(result);
