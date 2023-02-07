import React from "react";
import ReactDom from 'react-dom';
import './index.scss';
import Demo from './Demo';

const rootElement = document.querySelector('#root');



ReactDom.render(<Demo />, rootElement);
