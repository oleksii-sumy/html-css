export const dayOfWeek = (date, days) => {
  const inputDate = new Date(date).getDate();
  const setDate = new Date(date).setDate(inputDate + days);
  return week[new Date(setDate).getDay()];
};
const week = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];

// dayOfWeek(new Date(), 18);
