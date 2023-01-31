import React from "react";
import ReactDom from 'react-dom';
import './index.scss';
import Colors from './Colors';

const rootElement = document.querySelector('#root');
ReactDom.render(<Colors />, rootElement);
