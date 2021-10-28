import { useState } from "react";
import TodoItem from "./TodoItem";

function Todos() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Going for a meal",
      completed: false,
    },
    {
      id: 2,
      title: "Write a code",
      completed: false,
    },
    {
      id: 3,
      title: "Go to the office",
      completed: true,
    },
    {
      id: 4,
      title: "Have a family time",
      completed: false,
    },
  ]);
  const changeComplete = (todo, index) => {
    const item = { ...todo, completed: !todo.completed };
    const items = [...todos];
    items[index] = item;
    setTodos(items);

    console.log(todos);
  };
  return (
    <div className="w-96 my-4 mx-auto bg-gray-100 p-3 rounded-md flex flex-col gap-2">
      {todos.map((todo, index) => (
        <TodoItem
          todo={todo}
          index={index}
          key={todo.id}
          changeComplete={changeComplete}
        ></TodoItem>
      ))}
    </div>
  );
}

export default Todos;
