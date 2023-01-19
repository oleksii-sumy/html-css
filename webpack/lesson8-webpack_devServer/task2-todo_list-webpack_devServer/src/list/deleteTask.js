import { renderTasks } from './render.js';
import { setItem } from './storage.js';
import { getTasksList, deleteFromServ } from './tasksGateway.js';

export const deletTask = e => {
  const isDeletebox = e.target.classList.contains('list-item__delete-btn');

  if (!isDeletebox) {
    return;
  }
  const taskId = e.target.dataset.id;

  deleteFromServ(taskId)
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};