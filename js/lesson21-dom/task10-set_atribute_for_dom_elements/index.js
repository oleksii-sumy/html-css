export const finishForm = () => {
  const inputElem = document.querySelector('input');
  inputElem.setAttribute('placeholder', 'name="login"');
  inputElem.setAttribute('type', 'password');
    inputElem.setAttribute('name', 'login');

};

finishForm();

// export const finishForm = () => {
//   const inputElem = document.querySelector('input');
//   inputElem.outerHTML = `<input name="password" type="text" />`;
//   const changeAtribute = document.querySelector('input');
//   changeAtribute.setAttribute('name', 'login');
//   changeAtribute.setAttribute('type', 'password');
// };
