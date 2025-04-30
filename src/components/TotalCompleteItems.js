import React from "react";
import { useSelector } from "react-redux";

const TotalCompleteItems = () => {
  const completed = useSelector((state) =>
    state.todos.filter((todo) => todo.completed === true)
  );

  return <h2 className="mt-3">Total complete items: {completed.length}</h2>;
};

export default TotalCompleteItems;
