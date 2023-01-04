export const getUsersBlogs = users => {
  try {
    const urlsList = users
    .map(async url => {
        await fetch(`https://api.github.com/users/${url}`);

            if (!urlsList.ok) {
      return new Promise.reject('Failed to load data');
    }
    });

    return Promise.all(urlsList.forEach(links => links.blog));
  } catch (err) {
    return err.message;
  }
};

// examples
// getUsersBlogs(['google', 'facebook', 'reactjs']).then(linksList => console.log(linksList)); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
// getUsersBlogs(['microsoft']).then(linksList => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
