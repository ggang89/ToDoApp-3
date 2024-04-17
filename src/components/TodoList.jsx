export default function TodoList({ isEditing, todoTitle, edit, handleText }) {
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
            <p>{todoTitle}</p>
            <button onClick={edit}>수정</button>
            <button>삭제</button>
          </>
        )}
      </li>
    </>
  );
}
