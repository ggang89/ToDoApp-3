import { useState } from "react";
import TodoList from "./TodoList";

export default function TodoContainer() {
  const [todo, setTodo] = useState({
    todoTitle: "todoApp 만들기",
    isEditing: false,
  });
  const edit = () => {
    //수정 버튼을 누르면, input창이 뜨고 삭제버튼이 사라진다
    //다시 수정버튼을 누르면 저장된다.
    ///=>변수를 객체로 변형해줘야 isEdting을 추가할 수 있다
    setTodo({ ...todo, isEditing: !todo.isEditing });
  };
  const handleText = (e) => {
    setTodo({ ...todo, todoTitle: e.target.value });
    console.log(e.target.value);
    //e.target.value인지 어디서 확인??
  };
  return (
    <>
      <div className="addTodo">
        <label htmlFor="todo">NEW ToDo </label>
        <input
          id="todo"
          type="text"
          size="50"
          placeholder="Add Todo..."
        ></input>
        <button>추가</button>
      </div>

      <ul className="todolistBox">
        <TodoList
          isEditing={todo.isEditing}
          todoTitle={todo.todoTitle}
          edit={edit}
          handleText={handleText}
        />
        <li className="todolist">
          <p>{todo.todoTitle}</p>
          <button>수정</button>
          <button>삭제</button>
        </li>
      </ul>
    </>
  );
}
