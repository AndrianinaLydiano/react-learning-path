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

  handleClickTodoTask(idItem) {
    const todoTask = this.state.todo.map((item) =>
      item.id === idItem ? { ...item, hide: !item.hide } : item
    );
    this.setState({ ...this.state, todo: todoTask });
  }

  render() {
    return (
      <>
        {this.state.todo.map((item) => (
          <div key={item.id} className="todo-item">
            <TodoItem
              task={item}
              onClickTodoTask={() => this.handleClickTodoTask(item.id)}
            />
          </div>
        ))}
      </>
    );
  }
}
