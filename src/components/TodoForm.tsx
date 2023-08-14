import React, { useState } from "react";
import { Todo } from "./TodoList";
import { v4 as uuidv4 } from "uuid";

type Props = {
  addTodo: (arg: Todo) => void;
};

function TodoForm({ addTodo }: Props) {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    addTodo({ id: uuidv4(), text, status: "active" });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleChange} />
      <button>추가</button>
    </form>
  );
}

export default TodoForm;
