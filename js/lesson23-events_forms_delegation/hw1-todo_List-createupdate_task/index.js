const tasks = [
  { text: 'Buy milk', done: false, id: 1 },
  { text: 'Pick up Tom from airport', done: false, id: 2 },
  { text: 'Visit party', done: false, id: 3 },
  { text: 'Visit doctor', done: true, id: 4 },
  { text: 'Buy meat', done: true, id: 5 },
];

const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
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
//---------додавання таски

const createTask = document.querySelector('.create-task-btn');

const addNewTask = () => {
  listElem.innerHTML = '';
  const taskInputField = document.querySelector('input');
  const taskFromInput = taskInputField.value;
  if (taskFromInput.length === 0) {
    return renderTasks(tasks);
  }
  tasks.push({ text: taskFromInput, done: false, id: Math.floor(Math.random(6) * 20) });
  console.log(tasks);
  taskInputField.value = '';
  renderTasks(tasks);
};
createTask.addEventListener('click', addNewTask);

//---------------перевірка чекбокса

renderTasks(tasks);

function statusCheckbox(event) {
  const listItemElem = document.querySelector('input');
  if (event.target.checked) {
    listItemElem.classList.add('list__item_done');
  } 
  else listItemElem.classList.remove('list__item_done');
}
const checkboxElem = document.querySelector('li');
checkboxElem.addEventListener('change', statusCheckbox);
