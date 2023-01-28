import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Greeting from './Greeting.jsx';

const rootElement = document.querySelector('#root');

ReactDOM.render(<Greeting firstName="John" lastName="Doe" birthDate="2019-02-01" />, rootElement);


