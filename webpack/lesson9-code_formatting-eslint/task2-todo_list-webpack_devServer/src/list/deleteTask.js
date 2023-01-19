import { renderTasks } from './render';
import { setItem } from './storage';
import { getTasksList, deleteFromServ } from './tasksGateway';

export const deletTask = (e) => {
  const isDeletebox = e.target.classList.contains('list-item__delete-btn');

  if (!isDeletebox) {
    return;
  }
  const taskId = e.target.dataset.id;

  deleteFromServ(taskId)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};
