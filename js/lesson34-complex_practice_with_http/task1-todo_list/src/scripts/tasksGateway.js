const baseUrl = 'https://63a6c3fc59fd83b1bb3777cf.mockapi.io/todolist/tasks';

const mapTasks = tasks => {
  tasks.map(({ _id, ...rest }) => ({ ...rest, id: _id }));
};

export const getTasksList = () => fetch(baseUrl)
    .then(response => response.json())
    .then(tasks => mapTasks(tasks));


export const createTask = taskData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskData),
  });
};

export const updateTask = (taskId, updatedTaskData) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(updatedTaskData),
  });
};

export const deleteTask = taskId => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  });
};
