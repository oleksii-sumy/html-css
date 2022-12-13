const add2 = value => value + 2;
const square = value => value * value;
const half = value => value / 2;

const compose = (...funcs) => value => {
    return funcs.reduce((acc,func) => func(acc), value);
};

export const superFunc = compose(add2, square, half);
superFunc(2);