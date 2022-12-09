import { tasks } from './storage.js';
import { renderTasks } from './tasklists.js';



export const onToggleTask = e => {
  const isCheckbox = e.target.classList.contains('list__item-checkbox');

  if (!isCheckbox) {
    return;
  }

  const taskData = tasks.find(task => task.id === e.target.dataset.id);
  Object.assign(taskData, { done: e.target.checked });
  renderTasks(tasks);
};
//     const listElem = document.querySelector('.list');

// listElem.addEventListener('click', onToggleTask);
