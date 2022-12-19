export const requestUserData = userId => {
  const request = new Promise((resolve, reject) => {
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
          email: 'userId777@example.com',
        });
      }, 1000);
    }
  });

  return request;
};
