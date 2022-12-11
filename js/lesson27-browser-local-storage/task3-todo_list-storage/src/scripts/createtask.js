import { tasks } from './storage.js';
import { renderTasks } from './tasklists.js';
import {getItem, setItem } from './storage.js';


export const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector('.task-input');

  const text = taskTitleInputElem.value;

  if (!text) {
    return;
  }
  taskTitleInputElem.value = '';
  // const tasksList = getItem('taskList') || [];

  // const newTasksList = tasksList.concat({
  //   text,
  //   done:false,
  //   createDate: new Date().toISOString(),
  //   id: Math.random().toString
  // });

  tasks.push({
    text,
    done: false,
    id: Math.random().toString(),
  });
  setItem('taskList', tasks);

  renderTasks(tasks);
};
const createBtnElem = document.querySelector('.create-task-btn');
createBtnElem.addEventListener('click', onCreateTask);
