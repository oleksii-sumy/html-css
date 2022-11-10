import {getAdults} from './index';

it('get people over the age of 18 from object', () => {
  const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
  expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});

it('get empty object if input is empty object', () => {
  const result = getAdults({ });
  expect(result).toEqual({ });
});

it('get empty object if object values are under 18 yers', () => {
  const result = getAdults({ 'John Doe': 16, Tom: 17, Bob: 15 });
  expect(result).toEqual({});
});
