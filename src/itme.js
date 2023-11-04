import { useRef, useState } from "react";
import "./App.css";
import itme1 from "./itme.js";
/*
function App() {
  const [todos, setTodos] = useState([
    { completed: false, text: "Task 1" },
    { completed: true, text: "Task 2" },
  ]);
  const inputRef = useRef();

  const handleAddTodo = () => {
    const text = inputRef.current.value;
    if (inputRef.current.value === "") {
      alert("The text is Empty , Enter Valid Task");
    } else {
      const newItem = { completed: false, text };
      setTodos([...todos, newItem]);
      inputRef.current.value = "";
    }
  };

  const handleItemDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDeleteItem = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <h2 className="title">To Do App</h2>

      <h3 className="title">TO DO LIST</h3>

      <div className="list-of-task">
        <ul>
          {todos.map(({ text, completed }, index) => {
            return (
              <div className="item">
                <li
                  className={completed ? "done" : ""}
                  key={index}
                  onClick={() => handleItemDone(index)}
                >
                  {completed === false ? text + "🔸" : text + "🔹"}
                </li>
                <span onClick={() => handleDeleteItem(index)} className="trash">
                  ❌
                </span>
              </div>
            );
          })}
        </ul>
      </div>


      
      <div className="App">
        <div className={"to-do-container"}>
          <input
            ref={inputRef}
            placeholder="Write The Task..."
            className="input-style"
          />
          <button onClick={handleAddTodo} className="button-style">
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
*/


import React from 'react';

const Card = ({ text, buttonText, onClick ,onClickDone,buttonTextMark}) => {
  return (
    <div className="card">
      <button className="card-button-mark" onClick={onClickDone}>{buttonTextMark}</button>
      <p className="card-text" onClick={onClickDone}>{text}</p>
      <button className="card-button" onClick={onClick}>{buttonText}</button>
    </div>
  );
};

export default Card;