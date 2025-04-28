import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const AddTodoForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addTodo({
        title: value,
      })
    );
  };

  return (
    <form onSubmit={onSubmit} class="mt-3 mb-3 needs-validation" noValidate>
      <div class="col-md-4"></div>
      <label className="sr-only">Event</label>
      <input
        type="text"
        class="form-control mb-2 mr-sm-2"
        id="validation01"
        placeholder="Enter your upcoming event..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>

      <button type="submit" className="btn btn-primary mb-2">
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;
