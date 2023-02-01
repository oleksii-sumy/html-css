import React from "react";
import ReactDom from 'react-dom';
import './index.scss';
import Toggler from './Toggler';

const rootElement = document.querySelector('#root');
ReactDom.render(<Toggler />, rootElement);
