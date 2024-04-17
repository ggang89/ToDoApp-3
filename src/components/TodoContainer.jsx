import { useState } from "react";
import TodoList from "./TodoList";

export default function TodoContainer() {
  const [todo, setTodo] = useState({
    todoTitle: "todoApp 만들기",
    isEditing: false,
  });
  //map함수를 사용하려면 배열이 필요하다
  //미리 안 정해놓고 그냥 추가 하려면?
  const [todoList, setTodoList] = useState([
    {
      id: "id1",
      todoTitle: "Todo App 만들기",
      isEditing: false,
    },
    { id: "id2", todoTitle: "REACT 공식문서 공부", isEditing: false },
  ]);
  const edit = (id) => {
    const newArr = todoList.map((t) => {
      if (id === t.id) {
        return { ...t, isEditing: !t.isEditing };
      } else {
        return t;
      }
    });
    setTodoList(newArr);
  };
  const handleText = (e) => {
    setTodo({ ...todo, todoTitle: e.target.value });
    console.log(e.target.value);
    //e.target.value인지 어디서 확인??
  };
  const handleTextInList = (e, id) => {
    const newText = todoList.map((t) => {
      if (id === t.id) {
        return { ...t, todoTitle: e.target.value };
      } else {
        return t;
      }
    });
    setTodoList(newText);
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
        {todoList.map((t) => (
          <TodoList
            key={t.id}
            isEditing={t.isEditing}
            todoTitle={t.todoTitle}
            edit={() => edit(t.id)}
            handleText={(e) => handleTextInList(e, t.id)}
          />
        ))}

        <li className="todolist">
          <p>{todo.todoTitle}</p>
          <button>수정</button>
          <button>삭제</button>
        </li>
      </ul>
    </>
  );
}
