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

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
