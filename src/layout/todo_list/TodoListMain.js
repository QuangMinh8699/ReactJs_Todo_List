import React, { useState } from "react";
import "./TodoListMain.css";

const TodoListMain = () => {
  const [todo, setTodo] = useState("");
  const [todoS, setTodoS] = useState([]);

  const handleSubmit = () => {
    if (todo != "") {
      setTodoS((prev) => [todo, ...prev]);
      setTodo("");
    }
  };

  return (
    <>
      <div className="todo-list-main">
        <div className="todo-list-main-inside">
          <div className="todo-list-header">Todo</div>
          <div className="todo-list-input">
            <input
              className="input-text"
              type="text"
              placeholder="Do something !!"
              value={todo}
              onChange={(event) => setTodo(event.target.value)}
            />
            <input
              className="input-submit"
              type="button"
              value="submit"
              onClick={handleSubmit}
            />
          </div>
          <div className="todo-list-content">
            {todoS.map((todo, index) => (
              <div key={index}>{todo}</div>
            ))}
          </div>
          <div className="todo-list-footer"></div>
        </div>
      </div>
    </>
  );
};

export default TodoListMain;
