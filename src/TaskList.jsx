import React, { Component } from "react";
import Task from "./Task";
import CreateTaskInput from "./CreateTaskInput";

class TasksList extends Component {
  state = {
    tasks: [
      { text: "Learn react", done: true, id: 1 },
      { text: "Get react dev job", done: false, id: 2 },
      { text: "Buy flat", done: false, id: 3 },
      { text: "Buy car", done: false, id: 4 },
      { text: "Find girl", done: false, id: 5 },
    ],
  };

  onCreate = (text) => {
    if (text === "") {
      return false;
    }
    const { tasks } = this.state;
    const newTask = {
      id: this.state.tasks.length + 1,
      text,
      done: false,
    };

    const updatedTasks = tasks.concat(newTask);
    this.setState({ tasks: updatedTasks });
    this.state.tasks.slice().sort((a, b) => a.done - b.done);
  };

  handleTaskStatusChange = (id) => {
    const updatedTasks = this.state.tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done,
        };
      }
      return task;
    });
    setTimeout(() => {
      this.setState({ tasks: updatedTasks });
    }, 1500);
  };

  handleTaskDelete = (id) => {
    const updatedTasks = this.state.tasks.filter((task) => task.id !== id);
    this.setState({ tasks: updatedTasks });
  };

  render() {
    const sortedList = this.state.tasks.slice().sort((a, b) => a.done - b.done);

    return (
      <div className="todo-box">
        <div className="todo-list">
          {sortedList.map((task) => (
            <Task
              key={task.id}
              {...task}
              onDelete={this.handleTaskDelete}
              onChange={this.handleTaskStatusChange}
            />
          ))}
        </div>
        <CreateTaskInput onCreate={this.onCreate} />
      </div>
    );
  }
}

export default TasksList;
