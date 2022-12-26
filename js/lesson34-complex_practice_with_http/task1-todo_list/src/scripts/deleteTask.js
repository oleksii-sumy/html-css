import { renderTasks } from './render.js';
import { setItem } from './storage.js';
import { getTasksList} from './tasksGateway.js';
import { deleteTask } from './tasksGateway.js';


export const deletTask = e => {
  const isDeletebox = e.target.classList.contains('list-item__delete-btn');

  if (!isDeletebox) {
    return;
  }
  const taskId = e.target.dataset.id;

  deleteTask(taskId)
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};
