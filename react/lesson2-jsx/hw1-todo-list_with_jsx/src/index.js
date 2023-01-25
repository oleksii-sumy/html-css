import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const rootElement = document.querySelector('#root');

const element = (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <h1 className="title" style={{ margin: 'auto'}}>
      Todo List
    </h1>
    <main className="todo-list">
      <div className="actions">
        <input className="task-input" type="text" />
        <button className="btn create-task-btn">Create</button>
      </div>
      <ul className="list"></ul>
    </main>
  </div>
);
ReactDOM.render(element, rootElement);
