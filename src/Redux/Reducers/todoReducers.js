const initialState = {
  todos: [],
};
const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case "REMOVE":
      const { id } = action.payload;
      const filterTodos = state.todos.filter((item) => item.id !== id);
      return {
        ...state,
        todos: filterTodos,
      };
    default:
      return state;
  }
};
export default todoReducers;
