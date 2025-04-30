import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import { TextField } from "@mui/material";

const AddTodoForm = () => {
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addTodo({
        title: value,
      })
    );
  };

  useEffect(() => {
    if (value.length <= 5) {
      setErrorMessage("Enter at least 5 characters");
    }
  }, [value]);

  useEffect(() => {
    if (value.length >= 5 && errorMessage) {
      setErrorMessage("");
    }
  }, [value, errorMessage]);

  return (
    <form>
      <TextField
        id="outlined-error"
        error={value.length <= 5}
        helperText={errorMessage}
        className="form-control mb-6 sm-2"
        type="text"
        onChange={(event) => setValue(event.target.value)}
        placeholder="Enter your event..."
        value={value}
      ></TextField>
      <button
        type="submit"
        disabled={value.length <= 4}
        className="btn btn-primary mb-1"
        onClick={onSubmit}
      >
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;
