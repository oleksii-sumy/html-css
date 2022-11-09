import {reverseArray} from './index';

it('shuld get reverse array', () => {
  const result = reverseArray([1, 2, 3, 4, 5, 6]);
  expect(result).toEqual([6, 5, 4, 3, 2, 1]);
});

it('shuld get message null if arguments of array is a number', () => {
  const result = reverseArray(6);
  expect(result).toEqual(null);
});

it('shuld get message null if arguments of array is a string', () => {
  const result = reverseArray(6);
  expect(result).toEqual(null);
});



