it ('17 и в Африке 17', () => {
expect(17).toEqual(17);
});

it('18 єто вам не  17', () => {
  expect(18).not.toEqual(17);
});

const getEvenNumbers = numbers =>
numbers.filter(num => (num % 2 == 0));

it('should get even numbers from array', () => {
    const res = getEvenNumbers([1, 2, 3, 4]);

    expect(res).toEqual([2, 4]);
});