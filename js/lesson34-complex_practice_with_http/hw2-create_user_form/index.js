const baseUrl = 'https://63a6c3fc59fd83b1bb3777cf.mockapi.io/todolist/userform';

document.addEventListener('DOMContentLoaded', () => {
  getDataInput
    .then(userData => sendToServer(userData))
    .then(() => {
        const getData = getFromServer()
    alert(getData);
});

    //   sendToServer();
});

const getDataInput = () => {
  const { fields } = document.forms;
  userData = Object.fromEntries(new FormData(fields));

checkValidation(userData)
.then(boolean => submitData(boolean));

  return userData;
};

const checkValidation = userData => {
  const countFormNUmber = Array.from(document.querySelectorAll('.form-input')).length;
  return userData.length === countFormNUmber;
};

const submitData = boolean => {
  if (boolean === 'true') {
    submitBtn.setAttribute('enabled', true);
  }
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



//   const email = document.querySelector('input[type="email"]').value;
//   console.log(emailInput);

//   const name = document.querySelector('input[type="text"]').value;
//   console.log(emailInput.value);

//   const password = document.querySelector('input[type="password"]').value;
//   console.log(emailInput.value);

//   const userData = {
//     email,
//     name,
//     password,
//   };
