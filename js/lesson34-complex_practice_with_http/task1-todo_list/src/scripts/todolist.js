import { onCreateTask } from './createtask.js';
import { onToggleTask } from './updateTask.js';
import { deletTask } from './deleteTask.js';

export const initTodoListHandlers = () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', onCreateTask);

  const todoListElem = document.querySelector('.list');
  todoListElem.addEventListener('click', onToggleTask);

    const toDeletElem = document.querySelector('.list-item__delete-btn');
    toDeletElem.addEventListener('click', deletTask);

};