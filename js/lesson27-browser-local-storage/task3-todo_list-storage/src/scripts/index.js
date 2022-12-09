import { renderTasks } from './tasklists.js';
import { tasks } from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
renderTasks(tasks);
});


