import { calc } from "./calculator";

it ('shuld get sum two numbers', () => {
    const result = calc('2 + 5');
    expect(result).toEqual('2 + 5 = 7');
});

it('shuld get subtraction of two numbers', () => {
  const result = calc('2 * 5');
  expect(result).toEqual('2 * 5 = 10');
});

it('shuld get smultiple of two numbers', () => {
  const result = calc('2 * 5');
  expect(result).toEqual('2 * 5 = 10');
});

it('shuld get division of two numbers', () => {
  const result = calc('2 / 5');
  expect(result).toEqual('2 / 5 = 0.4');
});

it('shuld get message null if input type in array is not string', () => {
  const result = calc(10);
  expect(result).toEqual(null);
});
