import React from "react";
import ReactDom from 'react-dom';
import './index.scss';
import User from './User';

const rootElement = document.querySelector('#root');



ReactDom.render(<User userId="facebook"/>, rootElement);
