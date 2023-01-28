import React from 'react';
import './index.scss';

const countYearsOld = birthDate => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

  const yearBirth = new Date(birthDate).getFullYear();
  const monthBirth = new Date(birthDate).getMonth();

  return monthBirth > currentMonth ? (currentYear - yearBirth) - 1 : currentYear - yearBirth;
};

const Greeting = props => {
  return (
    <div className="greeting">
      My name is {props.firstName} {props.lastName}. I am {countYearsOld(props.birthDate)} years old
    </div>
  );
};

export default Greeting;
