import React from "react";
import { useDispatch } from "react-redux";
import { toggleComplete } from "../redux/todoSlice";
import { deleteTodo } from "../redux/todoSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { Stack } from "@fluentui/react";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleComplete = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };

  const handleDelete = () => {
    dispatch(deleteTodo({ id: id }));
  };
  return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input
            type="checkbox"
            className="mr-3"
            checked={completed}
            onChange={handleComplete}
          ></input>
          {title}
        </span>
        <Stack direction="row" spacing={2}>
          <Button
            onClick={handleDelete}
            className="btn btn-danger"
            color="error"
            variant="contained"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </Stack>
      </div>
    </li>
  );
};

export default TodoItem;
