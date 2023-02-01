import React from "react";
import ReactDom from 'react-dom';
import './index.scss';
import ColorPicker from './ColorPicker';

const rootElement = document.querySelector('#root');
ReactDom.render(<ColorPicker />, rootElement);
