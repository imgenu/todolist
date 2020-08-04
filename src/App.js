import React, { useState } from "react";
import "./App.css";
import TodoList from "./component/TodoList.js";

function App() {
  const todosFromDatabase = [
    { id: 1, name: "寄信給客戶" },
    { id: 2, name: "幫媽媽買東西" },
    { id: 3, name: "下週五要聚餐" },
  ];
  const [inputVal, setInputVal] = useState("");
  const [inputSearchVal, setInputSearchVal] = useState("");
  const [todos, setTodos] = useState(todosFromDatabase);
  const [searchTodos, setSearchTodos] = useState(todosFromDatabase);
  const hadnleInputAddChange = (e) => {
    setInputVal(e.target.value);
  };
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputVal === "" || typeof inputVal !== "string") {
      return false;
    }
    const newID = todos.length === 0 ? 0 : todos[todos.length - 1].id + 1;
    const newTodos = [...todos, { id: newID, name: inputVal }];
    setInputVal("");
    setTodos(newTodos);
    setSearchTodos(newTodos);
  };

  function handleDeleteTodo(todoId) {
    const newTodos = todos.filter(({ id }) => id !== todoId);
    setTodos(newTodos);
    setSearchTodos(newTodos);
  }
  const handleInputSearchChange = (e) => {
    setInputSearchVal(e.target.value);
  };

  function handleSearchTodo(e) {
    e.preventDefault();

    setTodos(searchTodos);
    if (inputSearchVal !== "" && typeof inputSearchVal === "string") {
      const search = todos.filter(({ name }) =>
        name.toUpperCase().includes(inputSearchVal.toUpperCase())
      );
      setTodos(search);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <TodoList
            todos={todos}
            inputVal={inputVal}
            hadnleInputAddChange={hadnleInputAddChange}
            handleAddTodo={handleAddTodo}
            inputSearchVal={inputSearchVal}
            handleInputSearchChange={handleInputSearchChange}
            handleSearchTodo={handleSearchTodo}
            handleDeleteTodo={handleDeleteTodo}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
