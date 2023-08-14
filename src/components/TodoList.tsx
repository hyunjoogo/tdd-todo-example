import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

export type Todo = {
  id: number;
  content: string;
  status: "active" | "completed";
};

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, content: "TDD", status: "active" },
    { id: 2, content: "TODO", status: "active" },
  ]);

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} setTodos={setTodos} />
        ))}
      </ul>
      <TodoForm setTodos={setTodos} />
    </>
  );
};

export default TodoList;
