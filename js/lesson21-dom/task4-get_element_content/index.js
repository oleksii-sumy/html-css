export const getTitle = () => {
  const searchTitle = document.querySelector('.title');
  return searchTitle.textContent;
};
getTitle();

export const getDescription = () => {
  const searchAbout = document.querySelector('.about');
  return searchAbout.innerText;
};
getDescription();

export const getPlans = () => {
  const searchPlans = document.querySelector('.plans');
  return searchPlans.innerHTML;
};
getPlans();

export const getGoal = () => {
  const searchGoal = document.querySelector('.goal');
  return searchGoal.outerHTML;
};
getGoal();
