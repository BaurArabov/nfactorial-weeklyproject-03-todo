import "./index.css";

import React from "react";

import Delete from "../../assets/delete-svgrepo-com.svg";
import BackToDo from "../../assets/check-list-svgrepo-com.svg";

export default function InputBackMenu(props) {
  return (
    <div className="InputBackMenu">
      <button
        className="delete-menu"
        onClick={() => props.handleDeleteItem(props.item.id)}
      >
        <img src={Delete} alt="delete" />
        <p>Delete Forever</p>
      </button>
      <button
        className="back-menu"
        onClick={() => props.handleMoveBack(props.item.id)}
      >
        <img src={BackToDo} alt="delete" />
        <p>Move Back To To Do</p>
      </button>
    </div>
  );
}
