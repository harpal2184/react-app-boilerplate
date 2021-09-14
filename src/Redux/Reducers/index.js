import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import todoReducers from "./todoReducers";

const allReducers = combineReducers({
  counterReducer: counterReducer,
  todoReducers: todoReducers,
});
export default allReducers;
