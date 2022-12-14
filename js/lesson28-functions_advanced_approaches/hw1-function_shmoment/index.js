export const shmoment = inputDate => {
  let resultDate = inputDate;


  const getIntervalDate = {
    years: 'getYears',
    months: 'getMonths',
    days: 'getDays',
    hours: 'getHours',
    minutes: 'getMinutes',
    seconds: 'getSeconds',
    milliseconds: 'getMilliseconds',
  };


  const setIntervalDate = {
    years: 'setYears',
    months: 'setMonths',
    days: 'setDays',
    hours: 'setHours',
    minutes: 'setMinutes',
    seconds: 'setSeconds',
    milliseconds: 'setMilliseconds',
  };

  const addSubtractMethods = {
    add(interval, number) {
      const currentUnitValue = resultDate[getIntervalDate[interval]]();
      console.log(currentUnitValue);
      setIntervalDate.currentUnitValue(currentUnitValue + number);
      return addSubtractMethods;
    },
    Subtract(interval, number) {
      const currentUnitValue = resultDate[getIntervalDate[interval]]();
      setIntervalDate.currentUnitValue(currentUnitValue - number);
      return addSubtractMethods;
    },
    result() {
      return Object.values(setIntervalDate);
    },
  };

  return addSubtractMethods;
};


