const baseUrl = 'https://63a6c3fc59fd83b1bb3777cf.mockapi.io/todolist/userform';

const submitBtn = document.querySelector('.submit-button');
const loginForm = document.querySelector('.login-form');
const sumbitEvent = document.querySelector('form');

const checkValidation = () => {
  if (loginForm.reportValidity()) {
    submitBtn.removeAttribute('disabled');
  } else {
    submitBtn.setAttribute('disabled', true);
  }
};

const sendToServer = event => {
  event.preventDefault();
  //   const { fields } = document.forms;
  // = Object.fromEntries(new FormData(fields));
    const email = document.querySelector('input[type="email"]').value;
    console.log(email);

    const name = document.querySelector('input[type="text"]').value;
    console.log(email.value);

    const password = document.querySelector('input[type="password"]').value;
    console.log(email.value);

    const userData = {
      email,
      name,
      password,
    };

  console.log(userData);
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  })
    .then(responce => responce.json())
    .then(data => {
      alert(JSON.stringify(data));
      loginForm.reset();
    });
};


loginForm.addEventListener('input', checkValidation);

sumbitEvent.addEventListener('submit', sendToServer);





