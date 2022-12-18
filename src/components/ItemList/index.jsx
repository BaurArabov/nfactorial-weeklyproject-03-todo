import { useState } from "react";

import "./index.css";

import React from "react";
import MoveToTrash from "../MoveToTrash";
import DeleteBackMenu from "../DeleteBackMenu";
import { useEffect } from "react";

export default function ItemList(props) {
  const [currItems, setCurrItems] = useState([]);

  useEffect(() => {
    setCurrItems(props.items);
  }, [props.items]); //update every time new item was added

  function handleOpenMenu(id) {
    //get by id of an item
    const newItems = currItems.map((item) => {
      //go through an array to make isMenuOpen true or false for exact item
      if (item.id === id)
        return {
          ...item,
          isMenuOpen: !item.isMenuOpen,
        };
      else return item;
    });

    setCurrItems(newItems);
  }

  const handleItemChecked = (id) => {
    const itemIsDone = currItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isDone: !item.isDone,
        };
      } else return item;
    });
    setCurrItems(itemIsDone.sort((a, b) => a.isDone - b.isDone));
  };

  const handeRemoveItem = (id) => {
    const removedItem = currItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isMenuOpen: false,
          isItemTrash: !item.isItemTrash,
        };
      } else return item;
    });
    setCurrItems(removedItem);
  };

  const handleMoveBack = (id) => {
    const backItem = currItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isMenuOpen: false,
          isItemTrash: !item.isItemTrash,
        };
      } else return item;
    });
    setCurrItems(backItem);
  };

  const handeDeleteItem = (id) => {
    setCurrItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const filteredItems =
    props.type === "all"
      ? currItems.filter((item) => !item.isItemTrash)
      : props.type === "done"
      ? currItems.filter((item) => item.isDone && !item.isItemTrash)
      : props.type === "trash"
      ? currItems.filter((item) => item.isItemTrash)
      : alert("Error!!");

  return (
    <div className="ItemListIn">
      {filteredItems.map((item) => (
        <div className="itemsss" key={item.id}>
          <div
            className="top-items"
            style={{
              display: props.type === "trash" ? "block" : "",
            }}
          >
            <div className="btn-text">
              <button
                className="test"
                onClick={() => handleOpenMenu(item.id)}
              ></button>
              <input
                value={item}
                className="btn-box"
                type="checkbox"
                onClick={() => handleItemChecked(item.id)}
              />
              <p
                style={{
                  textDecoration: item.isDone ? "line-through" : "",
                  color: item.isDone ? "#959595" : "",
                }}
              >
                {item.task}
              </p>
            </div>
            {item.isMenuOpen && props.type !== "trash" && (
              <MoveToTrash handeRemoveItem={handeRemoveItem} item={item} />
            )}
            {item.isMenuOpen && props.type === "trash" && (
              <DeleteBackMenu
                handleDeleteItem={handeDeleteItem}
                handleMoveBack={handleMoveBack}
                item={item}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
