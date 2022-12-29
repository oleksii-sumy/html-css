const baseUrl = 'https://63a6c3fc59fd83b1bb3777cf.mockapi.io/todolist/userform';

document.addEventListener('DOMContentLoaded', () => {
  checkValidation()
    .then(() => getDataInput())
    .then(userData => sendToServer(userData))
    .then(() => alert(getFromServer())); 
    });


const getDataInput = () => {
  const { fields } = document.forms;
  const userData = Object.fromEntries(new FormData(fields));

//   checkValidation();

  return userData;
};

const checkValidation = () => {
    const result = Array.from(document.querySelectorAll('.form-input'))
    .forEach(input => input.reportValidity());
  if (result == true) {
    submitBtn.setAttribute('enabled', true);
  }
    // return result;
  };

const sendToServer = data => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
  });
};

const submitBtn = document.querySelector('.submit-button');
submitBtn.addEventListener('click', sendToServer);

const getFromServer = () => fetch(baseUrl).then(response => response.json());

const loginForm = document.querySelector('form');
loginForm.addEventListener('input', checkValidation);
