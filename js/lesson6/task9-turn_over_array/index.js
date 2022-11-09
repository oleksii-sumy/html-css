export const reverseArray = arr => {
  return !Array.isArray(arr) ? null : arr.slice().reverse();
};

reverseArray([1, 2, 3, 4, 5, 6]);
