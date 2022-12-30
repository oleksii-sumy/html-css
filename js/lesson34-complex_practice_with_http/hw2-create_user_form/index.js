const baseUrl = 'https://63a6c3fc59fd83b1bb3777cf.mockapi.io/todolist/userform';

const checkValidation = () => {
  const result = new Promise(resolve => {
    const resultChecked = loginForm.reportValidity();
    if (resultChecked) {
      submitBtn.removeAttribute('disabled');
    }
    resolve(resultChecked);
  });
  return result;
};

const getDataInput = boolean => {
  const resultData = new Promise(resolve => {
    if (boolean) {
      const { fields } = document.forms;
      const userData = Object.fromEntries(new FormData(fields));
      resolve(userData);
    }
  });

  return resultData;
};

const sendToServer = data => {
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
  });
  return alert(getFromServer());
};

checkValidation()
  .then(result => getDataInput(result))
  .then(result => sendToServer(result));

const getFromServer = () => fetch(baseUrl).then(response => response.json());

const submitBtn = document.querySelector('.submit-button');

const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('input', checkValidation);


