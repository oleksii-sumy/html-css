import React from "react";
import ReactDom from 'react-dom';
import './index.scss';
import Search from './Search';

const rootElement = document.querySelector('#root');



ReactDom.render(<Search />, rootElement);
