import { useState } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

export default function TodoContainer() {
  const [addTodo, setAddTodo] = useState("");

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

  const addText = () => {
    const newArr = {
      id: uuidv4(),
      todoTitle: addTodo,
      isEditing: false,
    };
    setTodoList([...todoList, newArr]);
    //모르겠어...
  };
  const handleAddText = (e) => {
    setAddTodo(e.target.value);
  };

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
  const del = (id) => {
    const newList = todoList.map((t) => {
      if (id === t.id) {
        return { ...!t, isEditing: t.isEditing };
      } else {
        return t;
      }
    });
    setTodoList(newList);
  };
  // const handleText = (e) => {
  //   setTodo({ ...todo, todoTitle: e.target.value });
  //   console.log(e.target.value);
  //   //e.target.value인지 어디서 확인??
  // };
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
          value={addTodo}
          placeholder="Add Todo..."
          onChange={handleAddText}
        ></input>
        <button onClick={addText}>추가</button>
      </div>

      <ul className="todolistBox">
        {todoList.map((t) => (
          <TodoList
            key={t.id}
            isEditing={t.isEditing}
            todoTitle={t.todoTitle}
            edit={() => edit(t.id)}
            del={() => del(t.id)}
            handleText={(e) => handleTextInList(e, t.id)}
          />
        ))}
      </ul>
    </>
  );
}
