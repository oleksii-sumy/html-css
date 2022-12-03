const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
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

const taskInputField = document.querySelector('input');
// const taskFromInput = taskInputField.value;

const createTask = document.querySelector('.create-task-btn');

const addNewTask = (event) => {
  const taskFromInput = event.target.value;
  console.log(taskFromInput);
  tasks.push({ text: `${taskFromInput}`, done: false, id: Math.floor(Math.random() * 10) });
    console.log(tasks);
taskInputField.value.innerHTML = '';
};
createTask.addEventListener('click', addNewTask);

renderTasks(tasks);



