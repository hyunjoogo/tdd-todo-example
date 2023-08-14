import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

export type Todo = {
  id: number;
  text: string;
  status: "active" | "completed";
};

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "TDD", status: "active" },
    { id: 2, text: "TODO", status: "active" },
  ]);

  return (
    <section>
      <ul>
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} setTodos={setTodos} />
        ))}
      </ul>
      <TodoForm setTodos={setTodos} />
    </section>
  );
};

export default TodoList;
