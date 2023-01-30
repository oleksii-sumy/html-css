import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Profile from './Profile.jsx';

const userData = {
  firstName: 'James',
  lastName: 'Bond',
  birthDate: '1991-01-17T11:11:11.819Z',
  birthPlace: 'London',
};


const rootElement = document.querySelector('#root');

ReactDOM.render(<Profile userData={userData} />, rootElement);


