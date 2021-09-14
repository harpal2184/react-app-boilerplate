import { useSelector } from "react-redux";
export default function DummyComponent() {
  const count = useSelector((state) => state.counterReducer);
  console.log("22222", count);
  return <h2>{count}</h2>;
}
