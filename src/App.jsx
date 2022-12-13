import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

import ItemList from "./components/ItemList";
import Pager from "./components/Pager";
import SectionName from "./components/SectionName";
import Title from "./components/Title";

import React from "react";
import InputBackMenu from "./components/DeleteBackMenu";

function App() {
  const initItems = [
    {
      id: uuidv4(),
      task: "Make your project",
      isDone: false,
      isItemTrash: false,
    },
    {
      id: uuidv4(),
      task: "Push it on your git",
      isDone: false,
      isItemTrash: false,
    },
    {
      id: uuidv4(),
      task: "Send project ",
      isDone: false,
      isItemTrash: false,
    },
  ];

  const [items, setItems] = useState(initItems);
  const [type, setType] = useState("all");

  function handleAdd(item) {
    if (!item) return;

    const newItem = {
      id: uuidv4(),
      task: item,
      isDone: false,
      isItemTrash: false,
    };
    setItems((prevItems) => [newItem, ...prevItems]);
  }

  const handleChangeStatus = (typeFromButton) => {
    setType(typeFromButton);
  };

  return (
    <div className="App">
      <Title />
      <Pager handleAdd={handleAdd} handleChangeStatus={handleChangeStatus} />
      <SectionName />
      <ItemList items={items} type={type} />
      {/* <InputBackMenu /> */}
    </div>
  );
}

export default App;
