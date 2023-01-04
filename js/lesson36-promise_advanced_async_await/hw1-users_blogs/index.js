export const getUsersBlogs = users => {
  let resLinks;
  try {
    const urlsList = users.map(async url => {
      await fetch(`https://api.github.com/users/${url}`);

      if (!urlsList.ok) {
        resLinks = new Error('Failed to load data');
      }
    });
    resLinks = Promise.all(urlsList.forEach(links => links.blog));
  } catch (err) {
    throw err.message;
  } finally {
    return resLinks;
  }
};


// examples
// getUsersBlogs(['google', 'facebook', 'reactjs']).then(linksList => console.log(linksList)); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
// getUsersBlogs(['microsoft']).then(linksList => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
