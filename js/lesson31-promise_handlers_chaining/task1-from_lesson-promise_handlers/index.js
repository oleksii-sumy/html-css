export const requestUserData = userId => {
  const request = new Promise((rulfilled, reject) => {
    if (userId === 'broken') {
      setTimeout(() => {
        reject(new Error('User not found'));
      }, 500);
    } else {
      setTimeout(() => {
        rulfilled({
          name: 'John',
          age: 17,
          userId,
          email: 'userid777@example.com',
        });
      }, 1000);
    }
  });

  return request;
};
