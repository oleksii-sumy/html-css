export const finishForm = () => {
  const inputElem = document.querySelector('input');
inputElem.outerHTML = `<input name="password" type="text" />`;
const changeAtribute = document.querySelector('input');
  changeAtribute.setAttribute('name', 'login');
  changeAtribute.setAttribute('type', 'password');
};

finishForm();