import React, { useState } from "react";

import "./Todo.css";

import TodoList from "./todo-list";
const Todo = () => {
  let todosList = ["Hello world", "work from home", "done homework"];
  const todoInput = React.useRef();

  const [todos, setTodos] = useState(todosList);

  function add() {
    let value = todoInput.current.value;
    console.log(todos);
    setTodos([...todos, value]);
  }
  const buttonStyle = {
    color: "white",
    height: 50,
    width: 200,
    backgroundColor: "blue",
    marginTop: 20,
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card card-white">
            <div className="card-body">
              <form>
                <input
                  type="text"
                  ref={todoInput}
                  className="form-control add-task"
                  placeholder="New Task..."
                />
                <button onClick={add} style={buttonStyle}>
                  {" "}
                  Add
                </button>
              </form>
              <ul className="nav nav-pills todo-nav">
                <li role="presentation" className="nav-item all-task active">
                  <a className="nav-link">All</a>
                </li>
                <li role="presentation" className="nav-item active-task">
                  <a className="nav-link">Active</a>
                </li>
                <li role="presentation" className="nav-item completed-task">
                  <a className="nav-link">Completed</a>
                </li>
              </ul>
              <TodoList todos={todos} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
