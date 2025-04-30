import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filter = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <input
        type="text"
        placeholder="Search Event..."
        className="search-input"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul className="list-group">
        {filter.map((todo) => (
          <TodoItem
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
