let nextTodoId = 0;

export const increment = () => {
  return { type: "INCREMENT" };
};
export const decrement = () => {
  return { type: "DECREMENT" };
};

// Todo Actions
export const addTodo = (title) => {
  return {
    type: "ADD",
    payload: {
      id: nextTodoId++,
      title: title,
    },
  };
};
export const removeTodo = (id) => {
  return {
    type: "REMOVE",
    payload: {
      id: id,
    },
  };
};
