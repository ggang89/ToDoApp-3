import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState({
    todoTitle: "todoApp 만들기",
    isEditing: false,
  });
  const edit = () => {
    //수정 버튼을 누르면, input창이 뜨고 삭제버튼이 사라진다
    //다시 수정버튼을 누르면 저장된다.
    ///=>변수를 객체로 변형해줘야 isEdting을 추가할 수 있다
  };
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
          <p>{todo.todoTitle}</p>
          <button onClick={edit}>수정</button>
          <button>삭제</button>
        </li>
        <li className="todolist">
          <p>{todo.todoTitle}</p>
          <button>수정</button>
          <button>삭제</button>
        </li>
      </ul>
    </div>
  );
}

export default App;
