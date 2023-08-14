import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { v4 as uuidv4 } from "uuid";

export type Todo = {
  id: string;
  text: string;
  status: "active" | "completed";
};

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: uuidv4(), text: "TDD", status: "active" },
    { id: uuidv4(), text: "TODO", status: "active" },
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
