const baseUrl = 'https://63a6c3fc59fd83b1bb3777cf.mockapi.io/todolist/userform';

const checkValidation = () => {
  const result = document.forms.reportValidity();
  if (result == true) {
    submitBtn.setAttribute('enabled', true);
  }
  getDataInput();
};

const getDataInput = () => {
  const { fields } = document.forms;
  const userData = Object.fromEntries(new FormData(fields));
  sendToServer(userData);
};


const sendToServer = data => {
   fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
  });
    return alert(getFromServer);
};

const submitBtn = document.querySelector('.submit-button');
submitBtn.addEventListener('click', sendToServer);

const getFromServer = () => fetch(baseUrl).then(response => response.json());

const loginForm = document.querySelector('form');
loginForm.addEventListener('input', checkValidation);

