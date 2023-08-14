import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

export type Todo = {
  id: string;
  text: string;
  status: "active" | "completed";
};

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "234", text: "TDD", status: "active" },
    { id: "345", text: "TODO", status: "active" },
  ]);

  const handleAdd = (todo: Todo) => setTodos((prev) => [...prev, todo]);

  return (
    <section>
      <ul>
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} setTodos={setTodos} />
        ))}
      </ul>
      <TodoForm addTodo={handleAdd} />
    </section>
  );
};

export default TodoList;
