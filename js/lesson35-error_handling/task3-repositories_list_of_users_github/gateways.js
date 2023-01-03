export const fetchUserData = userName => {
  return fetch(`https://api.github.com/users/${userName}`)
  .then(response => {
    if (response.status === 200) {
      return response.json();
    }
    throw new Error('Failed to load data');
  });
};

export const fetchRepositories = url => {
  return fetch(url)
  .then(response => {
    if(response.status === 200) {
    return response.json();
    }
    throw new Error('Failed to load data');
  });
};