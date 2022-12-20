const p1 = Promise.resolve(5);
const p2 = Promise.resolve(10);
const p3 = Promise.resolve(15);

const getSum = numbers => numbers.filter(value => !isNaN(value))
.reduce((acc, num) => acc + Number(num), 0);

export const asyncSum = (...asyncNumber) => {
    return Promise.all(asyncNumber)
      .then(numbers => getSum(numbers))
      .catch(() => Promise.reject(new Error("Can't caclculate")));
};

asyncSum(p1, p2, p3 ).then(result => console.log(result));