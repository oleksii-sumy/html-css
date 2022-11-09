import getSum, {getSquaredNumbers, getOddNumbers} from './calculator';

it ('should get squared numbers from array', () => {
  const res = getSquaredNumbers([1, 2, 3]);
  expect(res).toEqual([1, 4, 9]);
});

it ('should get odd numbers from array', () => {
  const res = getOddNumbers([1, 2, 3, 4, 5]);
  expect(res).toEqual([1, 3, 5]);
});

it ('should get sum of numbers', () => {
  const res = getSum(8, 2);
  expect(res).toEqual(10);
});
