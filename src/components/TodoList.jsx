export default function TodoList({ isEditing, todoTitle, edit, del, handleText }) {
  return (
    <>
      <li className="todolist">
        {isEditing ? (
          <>
            <input
              value={todoTitle}
              type="text"
              size="50"
              onChange={handleText}
            ></input>
            <button onClick={edit}>저장</button>
          </>
        ) : (
          <>
            <p className="todoList">{todoTitle}</p>
            <button onClick={edit} className="btn">수정</button>
            <button onClick={del}className="btn"> 삭제</button>
          </>
        )}
      </li>
    </>
  );
}
