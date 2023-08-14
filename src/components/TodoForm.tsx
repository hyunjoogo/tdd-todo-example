import React, { useState } from "react";
import { Todo } from "./TodoList";

type Props = {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};
function TodoForm({ setTodos }: Props) {
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    setTodos((prev) => [
      ...prev,
      { id: 3, content: inputValue, status: "active" },
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
