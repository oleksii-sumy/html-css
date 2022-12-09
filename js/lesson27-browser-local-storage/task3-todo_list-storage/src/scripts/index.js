import { renderTasks } from './tasklists.js';
import { tasks } from './storage.js';
import { onToggleTask } from './checkbox.js';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks(tasks);
});

const listElem = document.querySelector('.list');
listElem.addEventListener('click', onToggleTask);
