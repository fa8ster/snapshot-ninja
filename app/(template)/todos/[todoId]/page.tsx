import React from "react";
import { Todo } from "../../../../typings";

type PageProps = {
  params: {
    todoId: string;
  };
};

const fetchTodo = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`
  );
  const todo: Todo = await res.json();
  return todo;
};

async function TodoPage({ params: { todoId } }: PageProps) {
  const todo = await fetchTodo(todoId);
  return (
    <div className="p-10">
      <p>
        #{todo.id}: {todo.title}
      </p>
    </div>
  );
}

export default TodoPage;
