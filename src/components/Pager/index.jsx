import { useState } from "react";
import "./index.css";

import React from "react";
import InputMenu from "../InputMenu";

export default function Pager(props) {
  const [isInpuMenuOpen, setMenuOpen] = useState(false);
  const buttons = [
    {
      type: "all",
      label: "To Do",
    },
    {
      type: "done",
      label: "Done",
    },
    {
      type: "trash",
      label: "Trash",
    },
  ];

  function handleTriggerMenu() {
    setMenuOpen((prevMenu) => !prevMenu);
  }

  return (
    <div className="Pager">
      <div className="items">
        {buttons.map((itemB) => (
          <button
            key={itemB.type}
            type="button"
            className=""
            onClick={() => props.handleChangeStatus(itemB.type)}
          >
            {itemB.label}
          </button>
        ))}
      </div>
      {isInpuMenuOpen && <InputMenu handleAdd={props.handleAdd} />}
      <button className="plus" onClick={handleTriggerMenu}>
        +
      </button>
    </div>
  );
}
