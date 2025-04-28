import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TotalCompleteItems from "./components/TotalCompleteItems";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="container">
      <Header></Header>
      <AddTodoForm />
      <TodoList />
      <TotalCompleteItems />
      <Footer></Footer>
    </div>
  );
};

export default App;
