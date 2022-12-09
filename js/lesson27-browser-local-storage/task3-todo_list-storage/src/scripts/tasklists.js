import { tasks } from './storage.js';
import { onCreateTask } from './createtask.js';
import { onToggleTask } from './checkbox.js';


export const renderTasks = tasksList => {
    const listElem = document.querySelector('.list');

  listElem.innerHTML = '';
  const tasksElems = tasksList
    .slice()
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('data-id', id);
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

