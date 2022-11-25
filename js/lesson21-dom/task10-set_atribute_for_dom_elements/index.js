export const finishForm = () => {
  const element = document.querySelector('input');
  element.setAttribute('name', 'login');
  element.setAttribute('type', 'password');
};
