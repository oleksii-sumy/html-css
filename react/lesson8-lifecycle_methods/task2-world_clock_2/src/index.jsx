import React from "react";
import ReactDom from 'react-dom';
import './index.scss';
import App from './App';

const rootElement = document.querySelector('#root');



ReactDom.render(<App />, rootElement);
