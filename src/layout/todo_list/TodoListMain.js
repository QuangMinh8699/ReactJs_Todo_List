import React, { useState } from "react";
import "./TodoListMain.css";

const TodoListMain = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleSubmit = () => {
    if (todo !== "") {
      setTodoList((prev) => [todo, ...prev]);
    }
    setTodo("");
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
            {/* render todoList Array */}
            {todoList.map((todo, index) => (
              <div className="todo-main" key={index}>
                {/* Todo content */}
                <div className="todo">{todo}</div>

                {/* Delete button  */}
                <div className="delete">
                  <i
                    className="bi bi-x-circle"
                    onClick={() => {
                      let deleteValue = todoList.splice(index, 1);

                      //* filter delete value
                      let updateTodoList = todoList.filter((todoS) => {
                        return todoS !== deleteValue;
                      }, []);

                      //* update todo list arena
                      setTodoList(updateTodoList);
                    }}
                  ></i>
                </div>
              </div>
            ))}
          </div>
          <div className="todo-list-footer"></div>
        </div>
      </div>
    </>
  );
};

export default TodoListMain;
