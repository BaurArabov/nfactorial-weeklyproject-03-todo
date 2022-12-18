import { useState } from "react";
import "./index.css";

import React from "react";

export default function InputMenu(props) {
  const [inputItem, setInputItem] = useState(""); //input trigger

  function handleChangeItem(event) {
    setInputItem(event.target.value); //change item with setItem
  }

  return (
    <div className="InputM">
      <div className="InputMenu">
        <h3>Add New To Do</h3>
        <textarea
          placeholder="Your text"
          value={inputItem}
          onChange={handleChangeItem} //input change trigger
        ></textarea>
        {/* add changed item in handleAdd*/}
        <button className="btn-add" onClick={() => props.handleAdd(inputItem)}>
          Add
        </button>
      </div>
    </div>
  );
}
