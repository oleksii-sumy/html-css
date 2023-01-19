import { onCreateTask } from './createtask';
import { onToggleTask } from './updateTask';
import { deletTask } from './deleteTask';

export const initTodoListHandlers = () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', onCreateTask);

  const todoListElem = document.querySelector('.list');
  todoListElem.addEventListener('click', onToggleTask);

  const toDeletElem = document.querySelector('.list');
  toDeletElem.addEventListener('click', deletTask);
};
