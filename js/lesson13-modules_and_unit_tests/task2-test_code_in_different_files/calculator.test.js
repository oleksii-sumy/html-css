import getSum, {getSquaredNumbers, getOddNumbers} from './calculator';

it ('should get squared numbers from array', () => {
  const res = getSquaredArray([2, 4, 6]);
  expect(res).toEqual([4, 16, 36]);
});

it ('should get odd numbers from array', () => {
  const res = getOddNumbers([1, 2, 3, 4, 5]);
  expect(res).toEqual([1, 3, 5]);
});

it ('should get sum of numbers', () => {
  const res = getSum(8, 2);
  expect(res).toEqual(10);
});
