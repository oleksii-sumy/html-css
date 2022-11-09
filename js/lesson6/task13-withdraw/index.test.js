import { withdraw } from './index';

it('shuld withdraw money from the specified client\'s account', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
  expect(result).toEqual(37);
});

it('shuld get message: -1, if abalance < amount', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 47, -6], 'John', 50);
  expect(result).toEqual(-1);
});

it('shuld get message: -1, if amount < 0', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 47, -6], 'John', -50);
  expect(result).toEqual(null);
});



