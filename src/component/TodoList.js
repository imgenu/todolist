import React from "react";
function TodoList(props) {
  const {
    todos,
    inputVal,
    hadnleInputAddChange,
    handleAddTodo,
    inputSearchVal,
    handleInputSearchChange,
    handleSearchTodo,
    handleDeleteTodo,
  } = props;
  return (
    <div>
      <form className="dInputAdd">
        <input
          placeholder="新增代辦事項"
          value={inputVal}
          onChange={hadnleInputAddChange}
        />
        <button onSubmit={handleSearchTodo} onClick={handleAddTodo}>Add</button>
      </form>
      <form className="dInputAdd">
        <input
          placeholder="搜尋"
          value={inputSearchVal}
          onChange={handleInputSearchChange}
        />
        <button onSubmit={handleSearchTodo} onClick={handleSearchTodo}>search</button>
      </form>
      {todos
        .filter(({ name }) =>
          name.toUpperCase().includes(inputSearchVal.toUpperCase())
        )
        .map((todo) => (
          <div className="dTodoList" id={todo.id} key={todo.id}>
            <div className="dList">{todo.name}</div>
            <div className="dCompelete">
              <button className="btnComplete" onClick={() => handleDeleteTodo(todo.id)}>Complete</button>
            </div>
          </div>
        ))}
    </div>
  );
}
export default TodoList;
