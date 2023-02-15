import React from "react";
import ReactDom from 'react-dom';
import './index.scss';
import Game from './Game';


const rootElement = document.querySelector('#root');

ReactDom.render(<Game />, rootElement);



