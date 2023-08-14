import React, { useState } from "react";
import { Todo } from "./TodoList";
import { v4 as uuidv4 } from "uuid";

type Props = {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

function TodoForm({ setTodos }: Props) {
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    setTodos((prev) => [
      ...prev,
      { id: uuidv4(), text: inputValue, status: "active" },
    ]);
    setInputValue("");
  };
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTodo}>추가</button>
    </>
  );
}

export default TodoForm;
