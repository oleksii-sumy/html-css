import React from "react";
import ReactDom from 'react-dom';
import './index.scss';
import UsersList from './UsersList';


const rootElement = document.querySelector('#root');


const users = [
  {
    id: 'id-1',
    age: 17,
    name: 'Tom',
  },
  {
    id: 'id-2',
    age: 18,
    name: 'Jack',
  },
  {
    id: 'id-3',
    age: 45,
    name: 'Sam',
  },
  {
    id: 'id-4',
    age: 25,
    name: 'Tod',
  },
  {
    id: 'id-0',
    age: 21,
    name: 'Bob',
  },
];

ReactDom.render(<UsersList users={users} />, rootElement);
