export const getMinSquaredNUmber = arr => {
  if (!Array.isArray(arr) || arr.length == 0) {
    return null;
  }
  const tempArr = arr.map(num => Math.abs(num));
  const sortArr = tempArr.sort((a, b) => a - b);
  return sortArr[0] ** 2;
};

// getMinSquaredNUmber([-100, 22.5, -0.75, 6]);
