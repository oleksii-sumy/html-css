export const shmoment = inputDate => {
  let resultDate = inputDate;

  const getYears = inputDate.getFullYear();
  const getMonths = inputDate.getMonth();
  const getDays = inputDate.getDate();
  const getHours = inputDate.getHours();
  const getMinutes = inputDate.getMinutes();
  const getSeconds = inputDate.getSeconds();
  const getMilliseconds = inputDate.getMilliseconds();

  const getIntervalDate = {
    years: getYears,
    months: getMonths,
    days: getDays,
    hours: getHours,
    minutes: getMinutes,
    seconds: getSeconds,
    milliseconds: getMilliseconds,
  };

  const setYears = inputDate.setFullYear();
  const setMonths = inputDate.setMonth();
  const setDays = inputDate.setDate();
  const setHours = inputDate.setHours();
  const setMinutes = inputDate.setMinutes();
  const setSeconds = inputDate.setSeconds();
  const setMilliseconds = inputDate.setMilliseconds();

  const setIntervalDate = {
    years: setYears,
    months: setMonths,
    days: setDays,
    hours: setHours,
    minutes: setMinutes,
    seconds: setSeconds,
    milliseconds: setMilliseconds,
  };

  const addSubtractMethods = {
    add(interval, number) {
      const currentUnitValue = resultDate[getIntervalDate[interval]]();
      console.log(currentUnitValue);
      setIntervalDate.currentUnitValue(currentUnitValue + number);
      return addSubtractMethods;
    },
    subtract(interval, number) {
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


