import { useRef, useState } from "react";
import "./App.css";
import Card from "./itme";

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
    <div className="App">
      <h2 className="title">To Do App</h2>

      <h3 className="title">TO DO LIST</h3>

      <div>
        {todos.map(({ text, completed }, index) => {
          return (
            <>
              <Card
                text={text}
                buttonText="❌"
                onClick={() => handleDeleteItem(index)}
                key={index}
                buttonTextMark={completed?"✅":"❎"}
                onClickDone={() => handleItemDone(index)}
              />
            </>
          );
        })}
      </div>

      <div className="">
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
    </div>
  );
}

export default App;
