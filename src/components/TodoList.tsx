import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

export type Todo = {
  id: string;
  text: string;
  status: "active" | "completed";
};

type TodoListProps = {
  filter: string;
};

const TodoList = ({ filter }: TodoListProps) => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "234", text: "TDD", status: "active" },
    { id: "345", text: "TODO", status: "active" },
  ]);

  const handleAdd = (todo: Todo) => setTodos([...todos, todo]);
  const handleUpdate = (updated: Todo) =>
    setTodos(todos.map((item) => (item.id === updated.id ? updated : item)));
  const handleDelete = (deleted: Todo) =>
    setTodos(todos.filter((item) => item.id === deleted.id));

  const filteredTodos = filterTodo(filter, todos);

  return (
    <section>
      <ul>
        {filteredTodos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            updateTodo={handleUpdate}
            deleteTodo={handleDelete}
          />
        ))}
      </ul>
      <TodoForm addTodo={handleAdd} />
    </section>
  );
};

export default TodoList;

function filterTodo(filter: string, todos: Todo[]) {
  if (filter === "all") {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}
