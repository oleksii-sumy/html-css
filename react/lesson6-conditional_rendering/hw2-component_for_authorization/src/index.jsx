import React from "react";
import ReactDom from 'react-dom';
import './index.scss';
import Auth from './Auth';

const rootElement = document.querySelector('#root');
ReactDom.render(<Auth />, rootElement);
