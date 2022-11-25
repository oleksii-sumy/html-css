export const finishForm = () => {
  const inputElem = document.querySelector('input');
  inputElem.setAttribute('placeholder', 'name="login"');
  inputElem.setAttribute('type', 'password');
  };
