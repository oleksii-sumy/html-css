import React from "react";
import ReactDom from 'react-dom';
import './index.scss';
import NumbersList from './NumbersList'
const rootElement = document.querySelector('#root');

const numbers = [1, 2, 3, 4, 5];

ReactDom.render(<NumbersList numbers={numbers}/>, rootElement);
