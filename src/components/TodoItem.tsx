import React from "react";
import { Todo } from "./TodoList";

type Props = {
  todo: Todo;
  updateTodo: (arg: Todo) => void;
  deleteTodo: (arg: Todo) => void;
};

function TodoItem({ todo, updateTodo, deleteTodo }: Props) {
  const { text, status } = todo;
  const handleDelete = () => deleteTodo(todo);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const status = e.target.value ? "completed" : "active";
    updateTodo({ ...todo, status });
  };

  return (
    <li>
      <input
        type="checkbox"
        id="checkbox"
        checked={status === "completed"}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">{text}</label>
      <button onClick={handleDelete}>삭제</button>
    </li>
  );
}

export default TodoItem;
