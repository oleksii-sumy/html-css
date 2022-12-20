const servers = ['https://server.com/us', 'https://server.com/eu', 'https://server.com/au'];

const getRandomNUmber = (from, to) => from + Math.random() * (to - from);

const request = url =>
  new Promise(resolve => {
    const randomDelay = getRandomNUmber(1000, 3000);
    setTimeout(() => {
      resolve({
        userData: {
          name: 'Tom',
          age: 17,
        },
        source: url,
      });
    }, randomDelay);
  });

export const getUserASAP = iserId => {
  const userUrls = servers.map(serverUrl => `${serverUrl}/${iserId}`);

  const requests = userUrls.map(userUrl => request(userUrl));
  return Promise.race(requests);
};

