import React from "react";
import { Todo } from "./TodoList";

type Props = {
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

function TodoItem({ todo, setTodos }: Props) {
  const isCompleted = todo.status === "completed";

  function deleteTodo(targetId: number) {
    // todos에게 나를 삭제해줘라고 해야되
    // setTodos를 해서 나의 id와 다른것만 셋하기
    setTodos((prev) => prev.filter((item) => item.id !== targetId));
  }

  function changeStatus(id: number, checked: boolean) {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status: checked ? "completed" : "active" }
          : item,
      ),
    );
  }

  return (
    <li>
      <input
        type="checkbox"
        name="status-checkbox"
        checked={isCompleted}
        onChange={(e) => changeStatus(todo.id, e.target.checked)}
      />
      <p>{todo.content}</p>
      <button onClick={() => deleteTodo(todo.id)}>삭제</button>
    </li>
  );
}

export default TodoItem;
