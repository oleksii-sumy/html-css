import { getMinSquaredNUmber } from './getMinSquaredNUmber';

it ('shuld return null if input empty array', () => {
    const result = getMinSquaredNUmber([]);
    expect(result).toEqual(null);
});

it('shuld return null if input type string in the array', () => {
  const result = getMinSquaredNUmber('[]');
  expect(result).toEqual(null);
});

it('should return the square of the minimum modulo number from array', () => {
  const result = getMinSquaredNUmber([-100, 22.5, -0.75, 6]);
  expect(result).toEqual(0.5625);
});


// it('should get squared numbers from array', () => {
//   const res = getSquaredArray([2, 4, 6]);
//   expect(res).toEqual([4, 16, 36]);
// });
