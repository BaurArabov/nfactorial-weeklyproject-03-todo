import { useState } from "react";
import "./index.css";

import React from "react";
import InputMenu from "../InputMenu";

export default function Pager(props) {
  const [isInpuMenuOpen, setMenuOpen] = useState(false);

  const buttons = [
    {
      id: 1,
      type: "all",
      label: "To Do",
    },
    {
      id: 2,
      type: "done",
      label: "Done",
    },
    {
      id: 3,
      type: "trash",
      label: "Trash",
    },
  ];

  function handleTriggerMenu() {
    //function for openning and closing Input Menu Modal
    setMenuOpen((prevMenu) => !prevMenu);
  }

  return (
    <div className="Pager">
      <div className="items">
        {buttons.map((itemB) => (
          <button
            key={itemB.id}
            type="button"
            onClick={() => props.handleChangeStatus(itemB.type, itemB.label)}
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
