const shmoment = inputDate => {
  let resultDate = inputDate;
  const getIntervalDate = {
    years: inputDate.getFullYear(),
    months: inputDate.getMonth(),
    days: inputDate.getDate(),
    hours: inputDate.getHours(),
    minutes: inputDate.getMinutes,
    seconds: inputDate.getSeconds,
    milliseconds: inputDate.getMilliseconds,
  };
  console.log(getIntervalDate);

  const newIntervalDate = {
    years: inputDate.getFullYear(),
    months: inputDate.getMonth(),
    days: inputDate.getDate(),
    hours: inputDate.getHours(),
    minutes: inputDate.getMinutes,
    seconds: inputDate.getSeconds,
    milliseconds: inputDate.getMilliseconds,
  };

  const changeMethodDate = {
    add(interval, number) {
      const searchInterval = Object.entries(getIntervalDate).filter(elem => elem[0] === interval);
      console.log(searchInterval);
      if (searchInterval === 'years') {
        newIntervalDate.interval = inputDate.setFullYear(inputDate + number);
      }
      if (searchInterval === 'months') {
        newIntervalDate.interval = inputDate.setMonth(inputDate + number);
      }
      if (searchInterval === 'days') {
        newIntervalDate.interval = inputDate.setDate(inputDate + number);
      }
      if (searchInterval === 'hours') {
        newIntervalDate.interval = inputDate.setHours(inputDate + number);
      }
      if (searchInterval === 'minutes') {
        newIntervalDate.interval = inputDate.setMinutes(inputDate + number);
      }
      if (searchInterval === 'seconds') {
        newIntervalDate.interval = inputDate.setMinutes(inputDate + number);
      }
      if (searchInterval === 'milliseconds') {
        newIntervalDate.interval = inputDate.setMilliseconds(inputDate + number);
      }
      return changeMethodDate;
    },

    // subtract(interval, number) {
    //   const searchInreval = Object.entries(getIntervalDate).filter(elem => {
    //     if (elem[0] === 'years') {
    //       newIntervalDate.interval = inputDate.setFullYear(inputDate - number);
    //     }
    //     if (elem[0] === 'manths') {
    //       newIntervalDate.interval = inputDate.setMonth(inputDate - number);
    //     }
    //     if (elem[0] === 'days') {
    //       newIntervalDate.interval = inputDate.setDate(inputDate - number);
    //     }
    //     if (elem[0] === 'hours') {
    //       newIntervalDate.interval = inputDate.setHours(inputDate - number);
    //     }
    //     if (elem[0] === 'minutes') {
    //       newIntervalDate.interval = inputDate.seMinutes(inputDate - number);
    //     }
    //     if (elem[0] === 'seconds') {
    //       newIntervalDate.interval = inputDate.seMinutes(inputDate - number);
    //     }
    //     if (elem[0] === 'milliseconds') {
    //       newIntervalDate.interval = inputDate.seMilliseconds(inputDate - number);
    //     }
    //     return changeMethodDate;
    //   });
    // },
    result() {
      return Object.values(newIntervalDate).join(' ');
    },
  };
  console.log(newIntervalDate);

  return changeMethodDate;
};
const res = shmoment(new Date(2022, 11, 12, 14, 15)).add('days', 2).result();
console.log(res);
