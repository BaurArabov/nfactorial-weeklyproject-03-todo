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
      isMenuOpen: false,
    },
    {
      id: uuidv4(),
      task: "Push it on your git",
      isDone: false,
      isItemTrash: false,
      isMenuOpen: false,
    },
    {
      id: uuidv4(),
      task: "Send project ",
      isDone: false,
      isItemTrash: false,
      isMenuOpen: false,
    },
  ];

  const [items, setItems] = useState(initItems);
  const [type, setType] = useState("all");
  const [name, setName] = useState("");

  function handleAdd(inputItem) {
    if (!inputItem) return;

    const newItem = {
      id: uuidv4(),
      task: inputItem,
      isDone: false,
      isItemTrash: false,
      isMenuOpen: false,
    };
    setItems((prevItems) => [newItem, ...prevItems]);
  }

  const handleChangeStatus = (typeFromButton, nameFromButton) => {
    //function to change type and name
    setName(nameFromButton);
    setType(typeFromButton);
  };

  return (
    <div className="App">
      <Title />
      <Pager handleAdd={handleAdd} handleChangeStatus={handleChangeStatus} />
      <SectionName name={name} />
      <ItemList items={items} type={type} />
    </div>
  );
}

export default App;
