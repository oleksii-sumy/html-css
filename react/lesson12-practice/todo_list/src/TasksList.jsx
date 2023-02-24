import React from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';
import { createTask, fetchTasksList, updateTask, deleteTask } from './tasksGateway';

class TasksList extends React.Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    //3.fetch list from server
    this.fetchTasks();
  }

  fetchTasks = () => {
    fetchTasksList().then(tasksList =>
      this.setState({
        tasks: tasksList,
      }),
    );
  };

  onCreate = text => {
    //1. create task object
    //2.post object to server
    //3.fetch list from server

    // const { tasks } = this.state;
    const newTask = {
      text,
      done: false,
    };
    createTask(newTask).then(() => this.fetchTasks());
  };

  handleTaskStatusChange = id => {
    const { done, text } = this.state.tasks.find(task => task.id === id);
    const updatedTask = {
      text,
      don: !done,
    };

    updateTask(id, updatedTask).then(() => this.fetchTasks());
  };

  handleTaskDelete = id => {
    //1. filter tasks (show only undelete tasks)
    //2.update state
    deleteTask(id).then(() => this.fetchTasks());
  };

  render() {
    const sortedList = this.state.tasks.slice().sort((a, b) => a.done - b.done);

    return (
      <div className="todo-list">
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className="list">
          {sortedList.map(task => (
            <Task
              {...task}
              key={task.id}
              onChange={this.handleTaskStatusChange}
              onDelete={this.handleTaskDelete}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TasksList;

// { text: 'Learn React', done: false, id: 1 },
// { text: 'Lear HTML / CSS', done: true, id: 2 },
// { text: 'Learn JavaScript', done: true, id: 3 },
// { text: 'Visit doctor', done: true, id: 4 },
// { text: 'Learn Dev Tools', done: true, id: 5 },
