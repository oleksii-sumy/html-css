import React from 'react';
import ReactDom from 'react-dom';
import './index.scss';
import GoodButton from './GoodButton';

const rootElement = document.querySelector('#root');

ReactDom.render(<GoodButton/>, rootElement);

