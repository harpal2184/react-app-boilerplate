const TodoList = (props) => {
  return (
    <div className="todo-list">
      {props.todos.map(function (todo, index) {
        return (
          <div key={index} className="todo-item">
            <div className="checker">
              <span className="">
                <input type="checkbox" />
              </span>
            </div>
            <span>{todo}</span>
            <a className="float-right remove-todo-item">
              <i className="icon-close"></i>
            </a>
          </div>
        );
      })}
    </div>
  );
};
export default TodoList;
