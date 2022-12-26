const baseUrl = 'https://63a6c3fc59fd83b1bb3777cf.mockapi.io/todolist';

export function getUsersList() {
  return fetch(baseUrl).then(response => response.json());
}

export function getUserById(userId) {
  return fetch(`${baseUrl}/${userId}`).then(response => response.json());
}

export function createUser(userData) {
  const { email, firstName, lastName, age } = userData;
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      email,
      firstName,
      lastName,
      age,
    }),
  }).then(response => response.json());
}

export function deleteUser(userId) {
  return fetch(`${baseUrl}/${userId}`, {
    method: 'DELETE',
  }).then(response => response.json());
}

export function updateUser(userId, userData) {
  return fetch(`${baseUrl}/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  }).then(response => response.json());
}

