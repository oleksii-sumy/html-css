import React from "react";
import ReactDom from 'react-dom';
import './index.scss';
import ConnectionStatus from './ConnectionStatus';

const rootElement = document.querySelector('#root');



ReactDom.render(<ConnectionStatus />, rootElement);
