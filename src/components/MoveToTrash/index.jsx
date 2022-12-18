import "./index.css";

import React from "react";

import Delete from "../../assets/delete-svgrepo-com.svg";
import { useState } from "react";

export default function MoveToTrash(props) {
  return (
    <div className="menu">
      <div className="MoveToTrash">
        <button
          value={props.item}
          className="move-to-trash-menu"
          onClick={() => props.handeRemoveItem(props.item.id)}
        >
          <img src={Delete} alt="delete" />
          <p>Move To Trash</p>
        </button>
      </div>
    </div>
  );
}
