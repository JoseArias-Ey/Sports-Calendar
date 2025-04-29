import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import { Stack } from "@fluentui/react";
import { Text, Icon } from "@fluentui/react";

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

  const validation = (value) => {
    const x = "Value must be Marko";
    const y = "Put five characters";
    const errors = [];
    if (value !== "Marko" && value.length !== 5) {
      errors.push(x, y);
    } else if (value !== "Marko" && value.length === 5) {
      errors.push(x);
    } else if (value === "Marko" && value.length !== 5) {
      errors.push(y);
    }
    return errors;
  };

  const validateInput = (value) => {
    <Stack>
      {validation(value).map((x, i) => (
        <Stack key={i} verticalAlign="center" horizontal>
          <Icon iconName="Error" />
          <Text variant="smallPlus">{x}</Text>
        </Stack>
      ))}
    </Stack>;
  };

  const handleSubmit = () => {
    validateInput(value);
    if (errorMessage) {
      alert("Event Added correctly");
    }
  };

  return (
    <form onSubmit={onSubmit} class="mt-3 mb-3 needs-validation" noValidate>
      <div class="col-md-4"></div>
      <label>Event</label>
      <input
        type="text"
        class="form-control mb-2 mr-sm-2"
        id="validation01"
        placeholder="Enter your upcoming event..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
        errorMessage={validateInput}
      ></input>

      <button
        type="submit"
        className="btn btn-primary mb-2"
        onClick={handleSubmit}
      >
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;
