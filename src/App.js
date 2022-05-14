import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect, useState } from "react";

function App() {
  const times = new Date();
  const [formSubmitDisplay, setFormSubmitDisplay] = useState("none");
  const [btnAddDisplay, setBtnAddDisplay] = useState("block");
  const [time, setTime] = useState(times.toLocaleTimeString());
  const [task, setTask] = useState("0");
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    setInterval(() => {
      const Dates = new Date();
      setTime(Dates.toLocaleTimeString());
    }, 1000);
  }, []);

  const handleSubmit = () => {
    if (todo !== "") {
      setTodoList((prev) => [todo, ...prev]);
      setTodo("");
      setTask(todoList.length + 1);
    }
  };

  return (
    <>
      <div className="App">
        <div className="todo-list">
          {/* HEADER */}
          <div className="todo-list__header">
            <div className="header">
              <div className="header__time">{time}</div>
              <div className="header__task">tasks: {task}</div>
            </div>
          </div>
          {/* INPUT */}
          <div className="todo-list__form">
            <div className="form">
              <div
                className="form__submit"
                style={{ display: formSubmitDisplay }}
              >
                <input
                  type="text"
                  className="submit--text"
                  placeholder="Do something..."
                  value={todo}
                  onChange={(event) => {
                    setTodo(event.target.value);
                  }}
                />
                <button className="submit--btn" onClick={handleSubmit}>
                  Add
                </button>
              </div>
              <div
                className="from__text--sub"
                style={{ display: btnAddDisplay }}
              >
                Do not fear failure but rather fear not trying
              </div>
              <div
                style={{ display: btnAddDisplay }}
                className="form__button--add"
                onClick={() => {
                  setFormSubmitDisplay("block");
                  setBtnAddDisplay("none");
                }}
              >
                <i className="bi bi-plus-lg"></i>
              </div>
            </div>
          </div>
          {/* CONTENT */}
          <div className="todo-list__content">
            <div className="content">
              {todoList.map((todo, index) => (
                <div className="todo" key={index}>
                  <div className="todo__content">{todo}</div>
                  <div
                    className="todo__delete"
                    onClick={() => {
                      const deleteElement = todoList[index];
                      setTodoList(
                        todoList.filter((todo, index) => {
                          return todo !== deleteElement;
                        }, [])
                      );
                      setTask(todoList.length - 1);
                    }}
                  >
                    <i className="bi bi-check2"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
