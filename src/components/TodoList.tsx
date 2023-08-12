import React, { useState } from "react";

type Todo = {
  id: number;
  content: string;
  status: "active" | "completed";
};

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[] | []>([
    { id: 1, content: "TDD", status: "active" },
    { id: 2, content: "TODO", status: "active" },
  ]);

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
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTodo}>추가</button>
    </>
  );
};

export default TodoList;
