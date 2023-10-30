import React, { Component } from "react";
import "./todo-container.css";
import { TASK } from "../../store/Task";
import { TodoItem } from "./todo-item";

export default class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: TASK.todo,
      inProgress: TASK.inProgress,
      done: TASK.done,
      deleted: TASK.deleted,
    };
  }
  render() {
    return (
      <>
        {this.state.todo.map((item) => (
          <div key={item.id} className="todo-item">
            <TodoItem task={item} />
          </div>
        ))}
      </>
    );
  }
}
