import { useState } from "react";
import "./Counter.css";
import { Button } from "react-bootstrap";
const Counter = () => {
  const [count, setCount] = useState(0);
  function increaseCount() {
    setCount(count++);
  }
  function decreaseCount() {
    setCount(count++);
  }
  return (
    <div style={{ textAlign: "center", margin: "10px" }}>
      <h1>Counter</h1>
      <hr />
      <div>
        <Button
          size="lg"
          className="button"
          onClick={(e) => setCount(count > 0 ? count - 1 : 0)}
        >
          -
        </Button>
        <span style={{ padding: "20px" }}>{count}</span>
        <Button size="lg" onClick={(e) => setCount(count + 1)}>
          +
        </Button>
      </div>
      <hr />
    </div>
  );
};
export default Counter;
