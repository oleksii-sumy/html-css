import { renderTasks } from './tasklists.js';
import { tasks } from './storage.js';
import { initTodoListHandlers } from './todolist.js';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks(tasks);
initTodoListHandlers();
});

const onStorageChange = e => {
  if (e.key === 'taskList') {
    renderTasks();
  }
}

window.addEventListener('storage', onStorageChange);



// const listElem = document.querySelector('.list');
// listElem.addEventListener('click', onToggleTask);
