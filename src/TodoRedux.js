import "./TodoRedux.css";
import { addTodo, removeTodo } from "./Redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
const TodoRedux = () => {
  const selectTodos = (state) => state.todoReducers.todos;
  const todos = useSelector(selectTodos);

  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const updateTodo = (e) => {
    setTodo(e.target.value);
  };
  const addNewTodo = () => {
    console.log(todo);
    dispatch(addTodo(todo));
    setTodo("");
  };
  const deleteTodo = (e, id) => {
    console.log(id);
    dispatch(removeTodo(id));
  };

  return (
    <>
      <input type="text" onChange={updateTodo} value={todo} />
      <button onClick={addNewTodo}>Add </button>
      <table>
        {todos
          ? todos.map((item) => {
              return (
                <tr key={item.id}>
                  <td> {item.title}</td>
                  <td>
                    <button onClick={(e) => deleteTodo(e, item.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          : ""}
      </table>
    </>
  );
};
export default TodoRedux;
