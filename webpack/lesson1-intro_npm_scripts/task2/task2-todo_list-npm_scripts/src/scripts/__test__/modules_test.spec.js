import { createTask,  } from '../tasksGateway.js';
import { deleteFromServ } from '../deleteTask.js';

it('should return text of new task', () => {
  const getNewTask = createTask('task_test');

  expect(getNewTask).toEqual({
    text: 'task_test',
    done: false,
    createDate: new Date().toISOString(),
  });
});

it('should return empty task list', () => {
  const amptyTaskList = deleteFromServ('2');

  expect(amptyTaskList).toEqual({});
});

