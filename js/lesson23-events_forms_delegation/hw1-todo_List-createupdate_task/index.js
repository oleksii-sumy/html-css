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

  tasks.push({ text: taskFromInput, done: false, id: Math.floor(Math.random(6) * 20) });
  console.log(tasks);
  taskInputField.value = '';
  renderTasks(tasks);
};
createTask.addEventListener('click', addNewTask);

//---------------перевірка чекбокса

const checkboxElem = document.querySelector('.list__item-checkbox');

const changeDone = event => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');
  if (!isCheckbox) return;

  const checkedEl = Number(event.target.dataset.id);
  tasks.forEach(task => {
    if (task.id === checkedEl) {
      task.done = task.done === true ? false : true;
    }
    listElem.innerHTML = '';
  });
  renderTasks(tasks);
};

listElem.addEventListener('click', changeDone);

renderTasks(tasks);
