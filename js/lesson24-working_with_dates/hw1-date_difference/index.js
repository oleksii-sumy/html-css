
export const getDiff = (startDate, endDate) => {
  let result;
  const diffDate = Math.abs(startDate - endDate);
  const daysData = Math.trunc(diffDate / 86400000);
  const hoursData = new Date(diffDate).getUTCHours();
  const minutesData = new Date(diffDate).getUTCMinutes();
  const secondsData = new Date(diffDate).getUTCSeconds();
  result = `${daysData}d ${hoursData}h ${minutesData}m ${secondsData}s`;
  return result;
};
getDiff(
  new Date(Date.UTC(2019, 10, 24, 20, 50, 34, 44)),
  new Date(Date.UTC(2019, 1, 22, 17, 52, 18)),
);



