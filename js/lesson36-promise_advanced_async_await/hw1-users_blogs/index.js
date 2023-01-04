export const getUsersBlogs = users => {
  let resLinks;
  try {
  
    const usersData = users
    .map(async user => {
     const userData= await fetch(`https://api.github.com/users/${user}`);
      if (!userData.ok) {
        resLinks = new Error('Failed to load data');
      }
        return userData;
    });
    resLinks = Promise.all(usersData.forEach(user => user.blog));
  } catch (err) {
    throw err.message;
  } finally {
    return resLinks;
  }
};




// examples
// getUsersBlogs(['google', 'facebook', 'reactjs']).then(linksList => console.log(linksList)); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
// getUsersBlogs(['microsoft']).then(linksList => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
