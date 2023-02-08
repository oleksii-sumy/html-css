import React from "react";
import ReactDom from 'react-dom';
import './index.scss';
import Dimensions from './Dimensions';

const rootElement = document.querySelector('#root');



ReactDom.render(<Dimensions />, rootElement);
