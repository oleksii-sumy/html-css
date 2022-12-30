const baseUrl = 'https://63a6c3fc59fd83b1bb3777cf.mockapi.io/todolist/userform';

const checkValidation = () => {
  if (loginForm.reportValidity()) {
    submitBtn.removeAttribute('disabled');
  }
};

const sendToServer = () => {
  const { fields } = document.forms;
  const userData = Object.fromEntries(new FormData(fields));

  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  });
  formElem.reset();
  return alert(fetch(baseUrl).then(response => response.json()));
};

const submitBtn = document.querySelector('.submit-button');

const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('input', checkValidation);

const sumbitEvent = document.querySelector('.submit-button');
sumbitEvent.addEventListener('submit', sendToServer);
