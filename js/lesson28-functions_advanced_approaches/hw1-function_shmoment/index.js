export const shmoment = inputDate => {
  let resultDate = new Date(inputDate);


  const getIntervalDate = {
    years: 'getFullYear',
    months: 'getMonth',
    days: 'getDate',
    hours: 'getHours',
    minutes: 'getMinutes',
    seconds: 'getSeconds',
    milliseconds: 'getMilliseconds',
  };


  const setIntervalDate = {
    years: 'setFullYear',
    months: 'setMonth',
    days: 'setDate',
    hours: 'setHours',
    minutes: 'setMinutes',
    seconds: 'setSeconds',
    milliseconds: 'setMilliseconds',
  };

const addSubtractMethods = {
  add(interval, number) {
    const currentUnitValue = resultDate[getIntervalDate[interval]]();
    resultDate = new Date(resultDate[setIntervalDate[interval]](currentUnitValue + number));
    return addSubtractMethods;
  },
  subtract(interval, number) {
    const currentUnitValue = resultDate[getIntervalDate[interval]]();
    resultDate = new Date(resultDate[setIntervalDate[interval]](currentUnitValue - number));
    return addSubtractMethods;
  },
  result() {
    return resultDate;
  },
};
  return addSubtractMethods;
};
const res = shmoment(new Date(2022, 11, 12, 14, 15)).add('days', 2).result();
console.log(res);

