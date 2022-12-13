import { useState } from "react";
import "./index.css";

import React from "react";

export default function InputMenu(props) {
  const [item, setItem] = useState("");

  function handleChangeItem(event) {
    setItem(event.target.value);
  }

  return (
    <div className="InputM">
      <div className="InputMenu">
        <h3>Add New To Do</h3>
        <textarea
          placeholder="Your text"
          wrap="soft"
          value={item}
          onChange={handleChangeItem}
        ></textarea>
        <button className="btn-add" onClick={() => props.handleAdd(item)}>
          Add
        </button>
      </div>
    </div>
  );
}
