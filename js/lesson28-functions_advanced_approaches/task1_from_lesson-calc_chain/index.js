const calc = number => {
  let result = number;

  const calculator = {
    add(number) {
      result += number;
      return calculator;
    },
    subtract(number) {
      result -= number;
      return this;
    },
    mult(number) {
      result *= number;
      return this;
    },
    div(number) {
      result /= number;
      return this;
    },
    result() {
      return result;
    },
  };
  return calculator;
};

