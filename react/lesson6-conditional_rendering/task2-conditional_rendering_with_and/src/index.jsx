import React from "react";
import ReactDom from 'react-dom';
import './index.scss';
import Mailbox from './Mailbox';

const rootElement = document.querySelector('#root');
ReactDom.render(<Mailbox unreadMessages={[17,12]} />, rootElement);
