import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  const handleAddTodo = () => {
    const text = inputRef.current.value;
    if(inputRef.current.value ===""){
      alert('The text is Empty , Enter Valid Task');
    }else{
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
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }




  return (
    <div className="App">
      <h2 className="title">To Do List</h2>
      <div className={"to-do-container"}>
        <ul>
          {todos.map(({ text, completed }, index) => {
            return (
              <div className="item">
                <li
                  className={completed ? "done" : ""}
                  key={index}
                  onClick={() => handleItemDone(index)}
                >
                  {completed===false? text:text} 
                </li>
                <span onClick={() => handleDeleteItem(index)} className="trash">❌</span>
              </div>
            );
          })}
        </ul>
        <input ref={inputRef} placeholder="Enter item..." />
        <button onClick={handleAddTodo}>Add</button>
      </div>
    </div>
  );
}

export default App;