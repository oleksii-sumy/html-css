import React from "react";
import ReactDom from 'react-dom';
import './index.scss';
import Page from './Page';

const rootElement = document.querySelector('#root');
ReactDom.render(<Page />, rootElement);
