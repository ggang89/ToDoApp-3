import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("todoapp만들기");
  return (
    <div className="wrap">
      <h1 className="title">To Do App 3</h1>
      <div className="addTodo">
        <label for="todo">NEW ToDo </label>
        <input
          id="todo"
          type="text"
          size="50"
          placeholder="Add Todo..."
        ></input>
        <button>추가</button>
      </div>

      <ul className="todolistBox">
        <li className="todolist">
          <p>{todo}</p>
          <button>수정</button>
          <button>삭제</button>
        </li>
        <li className="todolist">
          <p>{todo}</p>
          <button>수정</button>
          <button>삭제</button>
        </li>
      </ul>
    </div>
  );
}

export default App;
