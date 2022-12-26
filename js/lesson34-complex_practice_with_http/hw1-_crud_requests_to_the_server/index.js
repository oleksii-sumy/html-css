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

// examples
getUsersList().then(users => {
  console.log(users); // array of the user objects [{'id':'1', 'firstName':'Grayce' ... }, {'id':'2', 'firstName':'Ara' ... }, ...]
});

getUserById('2').then(userData => {
  console.log(userData); // {'id':'2', 'firstName':'Ara' ... }
});

const newUserData = {
  email: 'cool@email.com',
  firstName: 'Iron',
  lastName: 'Man',
  age: 42,
};

createUser(newUserData).then(() => {
  console.log('User created');
});

const updatedUserData = {
  email: 'new@email.com',
  firstName: 'John',
  lastName: 'Doe',
  age: 17,
};

updateUser('1', updatedUserData).then(() => {
  console.log('User updated');
});

deleteUser('2').then(() => {
  console.log('User updated');
});
