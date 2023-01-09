import { sum, mult } from '../calculator.js';

it('should return sum of two numbers', () => {
  const resSum = sum(10, 5);

  expect(resSum).toEqual(15);
});

it('should return multiple of two numbers', () => {
  const resMult = mult(10, 5);

  expect(resMult).toEqual(50);
});

