import { useState } from "react";

import "./index.css";

import React from "react";
import MoveTrash from "../MoveToTrash";
import { useEffect } from "react";

export default function ItemList(props) {
  const [currItems, setCurrItems] = useState([]);
  const [isTrash, setTrash] = useState([]);

  useEffect(() => {
    setCurrItems(props.items); //get item form another modal
  }, [props.items]); //updating by props

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

  const filteredItems =
    props.type === "all"
      ? currItems
      : props.type === "done"
      ? currItems.filter((item) => item.isDone)
      : isTrash;

  function handleMoveToTrash(id) {
    // setTrash(currItems.filter((item) => item.id === id));

    const itemIsTrashed = currItems.filter((item) => {
      if (item.id === id) {
        return {
          ...item,
          isItemTrash: !item.isItemTrash,
        };
      }
    });
    setTrash(itemIsTrashed);

    setCurrItems(currItems.filter((item) => item.id !== id));
  }

  return (
    <div className="ItemListIn">
      {filteredItems.map((item) => (
        <div className="itemsss" key={item.id}>
          <div className="top-items">
            <button
              className="test"
              onClick={() => handleOpenMenu(item.id)}
            ></button>
            <div className="btn-text">
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
            {item.isMenuOpen && (
              <MoveTrash handleMoveToTrash={handleMoveToTrash} item={item} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

// set - срасывает все элементы в массиве -> показывает только один элемент в треш
