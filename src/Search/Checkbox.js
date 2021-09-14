import { useState } from "react";

export default function Checkbox() {
  const fruites = [
    { id: 1, value: "banana", isChecked: false },
    { id: 2, value: "apple", isChecked: false },
    { id: 3, value: "mango", isChecked: false },
    { id: 4, value: "grap", isChecked: false },
  ];
  const [list, setList] = useState(fruites);

  const updateSelection = (event) => {
    let fts = list;
    fts.forEach((fruite) => {
      if (fruite.value === event.target.value)
        fruite.isChecked = event.target.checked;
    });
    setList(fts);
    console.log("22222", list);
  };
  return (
    <>
      <h1>Checkbox</h1>
      <ul>
        {list.map((fruit, index) => {
          return (
            <Chk key={index} {...fruit} updateSelection={updateSelection} />
          );
        })}
      </ul>
    </>
  );
}

const Chk = (props) => {
  return (
    <li>
      <input
        key={props.id}
        type="checkbox"
        value={props.value}
        checked={props.isChecked}
        onChange={props.updateSelection}
      />
      {props.value}
    </li>
  );
};
