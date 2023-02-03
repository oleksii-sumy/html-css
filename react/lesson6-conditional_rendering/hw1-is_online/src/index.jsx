import React from "react";
import ReactDom from 'react-dom';
import './index.scss';
import Status from './Status';

const rootElement = document.querySelector('#root');
ReactDom.render(<Status isOnline={true}/>, rootElement);