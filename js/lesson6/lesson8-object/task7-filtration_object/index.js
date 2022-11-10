export const getAdults = obj => {
  let filtredObject = {};
  for (let key in obj) {
    if (obj[key] >= 18) {
      filtredObject[key] = obj[key];
    }
  }
  return filtredObject;
};

// examples
getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }); // ==> { 'John Doe': 19, Bob: 18 }
