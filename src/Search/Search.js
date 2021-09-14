import { useState } from "react";

export default function Search() {
  const searchList = [
    { label: "hello", checked: false },
    { label: "how are you", checked: false },
    { label: "my name is harpal", checked: false },
    { label: "GM Harpal", checked: false },
  ];
  const [filterSearch, setFilterSearch] = useState(searchList);
  const [checkStatus, setCheckStatus] = useState();
  const [selectedValues, setSelectedValues] = useState([]);

  const updateChecked = (e) => {
    let newResult = filterSearch.forEach((item) => {
      return item.checked;
    });
    console.log("3333", searchList);
    setSelectedValues(newResult);
  };
  const allSearch = filterSearch.map((item) => {
    return (
      <ul>
        <li key={item.label}>
          <input
            type="checkbox"
            name={item.label}
            onChange={updateChecked}
            checked={item.checked}
          />
          {item.checked}
          <span>{item.label}</span>
        </li>
      </ul>
    );
  });

  //   on user search inputbox
  const updateSearchResult = (e) => {
    let _filter = [];
    if (e.target.value) {
      _filter = searchList.filter((record) => {
        return record.label.toLowerCase().includes(e.target.value);
      });
      setFilterSearch(_filter);
    } else {
      setFilterSearch(searchList);
    }
    console.log("updated values", filterSearch);
  };

  //   on checkbox value updated
  const selected = selectedValues
    ? selectedValues.map((item) => {
        return item.checked ? (
          <span key={item.label}>{item.label} | </span>
        ) : (
          ""
        );
      })
    : "";

  const updateValue = (e) => {};
  return (
    <>
      <h1>Search</h1>
      <input type="text" onChange={updateSearchResult} />
      <div>selected : {selected}</div>
      {allSearch}

      <select type="dropdown">
        <option></option>
        <option>
          {" "}
          <input type="checkbox"></input>1
        </option>
        <option>
          {" "}
          <input type="checkbox"></input>2
        </option>
        <option>
          {" "}
          <input type="checkbox"></input>3
        </option>
      </select>
    </>
  );
}
