const baseUrl = 'https://63a6c3fc59fd83b1bb3777cf.mockapi.io/todolist/userform';

const submitBtn = document.querySelector('.submit-button');
const loginForm = document.querySelector('.login-form');

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
  const userData = Object.fromEntries(new FormData(forms));
console.log (userData);
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
      formElem.reset();
    });
};


loginForm.addEventListener('input', checkValidation);

submitBtn.addEventListener('submit', sendToServer);




