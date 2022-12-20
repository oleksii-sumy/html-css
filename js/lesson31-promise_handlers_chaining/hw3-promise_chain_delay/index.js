export const delay = mlsec => {
  const delayPromise = new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, mlsec);
  });
  return delayPromise;
};

delay(3000).then(() => console.log('Done'));
