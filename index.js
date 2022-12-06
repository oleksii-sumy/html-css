
export const getDiff = (startDate, endDate) => {
let result;
const diffDate = (new Date(startDate).getTime() - new Date(endDate).getTime());
const daysData = Math.trunc(diffDate / 86400000);
// console.log(daysData);
const hoursData = Math.trunc((diffDate - daysData) / 3600000);
// console.log(hoursData);
const minutesData = Math.trunc((daysData - hoursData) / 60000);
// console.log(minutesData);
const secondsData = Math.trunc((hoursData - minutesData) / 1000);
result = `${daysData}d ${hoursData}h ${minutesData}m ${secondsData}s`;
// console.log(result);
return result;
}

getDiff(new Date(2024, 11, 5, 23, 15, 7), new Date(2021, 0, 23, 10, 8, 7));




