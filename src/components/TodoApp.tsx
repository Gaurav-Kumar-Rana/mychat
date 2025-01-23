import React, { useState, useRef } from "react";
interface TodoList {
  readonly id: number;
  title: string;
  completed: boolean;
}
function TodoApp({ lists }: { lists: TodoList[] }) {
  const [todos, setTodos] = useState(lists);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleCheckboxClick = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return todo.id == id ? { ...todo, completed: !todo.completed } : todo;
      })
    );
  };
  const handleInputType = (e: React.KeyboardEvent) => {
    const target = e.currentTarget as HTMLInputElement;
    const text = target.value;
    if (e.key === "Enter" && text) {
      const id = Number(target.id);
      console.log(text);
      if (id) {
        setTodos((prevTodos) => [
          ...prevTodos.map((todo) =>
            todo.id == id ? { ...todo, title: text } : todo
          ),
        ]);
      } else {
        setTodos((prevTodos) => [
          ...prevTodos,
          {
            title: text,
            completed: false,
            id: +new Date(),
          },
        ]);
      }
      target.value = "";
    }
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const handleUpdateTodo = (id: number, title: string) => {
    if (inputRef.current) {
      inputRef.current.value = title;
      inputRef.current.id = String(id);
    }
  };
  console.log(todos);
  return (
    <div className={"todo"}>
      <h1>My Todo App</h1>
      <input type="text" onKeyUp={(e) => handleInputType(e)} ref={inputRef} />
      <ul>
        {todos.map(({ title, completed, id }) => {
          return (
            <li key={id}>
              <input
                type="checkbox"
                checked={completed}
                onChange={() => handleCheckboxClick(id)}
              />
              {title}
              {!completed && (
                <button onClick={() => handleUpdateTodo(id, title)}>
                  edite
                </button>
              )}
              {!completed && (
                <button onClick={() => handleDeleteTodo(id)}>delet</button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoApp;
