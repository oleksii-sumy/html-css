import { renderTasks } from './render.js';
import { getItem, setItem } from './storage.js';
import { createTask, getTasksList } from './tasksGateway.js';

export const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector('.task-input');

  const text = taskTitleInputElem.value;

  if (!text) {
    return;
  }
  taskTitleInputElem.value = '';

  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(),
  };
  
  createTask(newTask).then(() => getTasksList())
  .then(newTasksList => {
    setItem('tasksList', newTasksList);
    renderTasks();
  });
};


// Algo:
//1. prepare data
//2. write data to bd
//3.read new data from server
//4. save new data to front-end storage
//5. update UI based on new data