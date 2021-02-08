import React, { Component } from "react";

class CreateTaskInput extends Component {
  state = {
    value: "",
    error: this.props.error,
    noticeText: "",
    noticeClass: "",
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  handleTaskCreate = () => {
    this.props.onCreate(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    return (
      <>
        <div className="create-task flex">
          <input
            type="text"
            className="create-task-input"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Введите новую задачу"
          />
          <button
            className="btn create-task-btn"
            onClick={this.handleTaskCreate}
          >
            ✔️
          </button>
        </div>
      </>
    );
  }
}

export default CreateTaskInput;
