import "./App.css";
// import Todo from "./Todo";
// import Counter from "./Counter";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Redux/actions";
import TodoRedux from "./TodoRedux";
import DummyComponent from "./DummyComponent";
import Main from "./Components/Main/Main";
// import FolderTree from "./FolderTree/FolderTree";
import Search from "./Search/Search";
import Checkbox from "./Search/Checkbox";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => {
    console.log(state);
    return state.counterReducer;
  });
  return (
    <div className="App">
      {/* <Counter count={0} /> */}
      <Button
        size="lg"
        className="button"
        onClick={(e) => dispatch(decrement())}
      >
        -
      </Button>
      <span style={{ padding: "20px" }}>{counter}</span>
      <Button size="lg" onClick={(e) => dispatch(increment())}>
        +
      </Button>

      {/* <Todo /> */}
      <TodoRedux />
      <DummyComponent />

      <Main />
      <Search />
      {/* <Checkbox /> */}
    </div>
  );
}

export default App;
