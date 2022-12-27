import { renderTasks } from './render.js';
import { setItem } from './storage.js';
import { getTasksList, deleteFromServ } from './tasksGateway.js';

export const deletTask = e => {
  const isDeletebox = e.target.classList.contains('list-item__delete-btn');

  if (!isDeletebox) {
    return;
  }


  const taskId = e.target.dataset.id;

  getTasksList()
    .then(tasklist => tasklist.find(task => task.id === taskId))
    .then(task => task.id)
    .then(delTask => deleteFromServ(delTask))
    .then(() => getTasksList());
  renderTasks();
};
