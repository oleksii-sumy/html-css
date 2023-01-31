import React from 'react';
import ReactDom from 'react-dom';
import './index.scss';
import Counter from './Counter.jsx';

const rootElement = document.querySelector('#root');

ReactDom.render(<Counter/>, rootElement);
