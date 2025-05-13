import React from "react";
import Button from "@mui/material/Button";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { useDispatch } from "react-redux";
import { Stack } from "@fluentui/react";
import { toggleComplete } from "../redux/todoSlice";
import { deleteTodo } from "../redux/todoSlice";

const ApiItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleComplete = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };

  const handleDelete = () => {
    dispatch(deleteTodo({ id: id }));
  };
  return (
    <li className={`list-group-item `}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          {title}
          <div class="ms-grid-row ms-sm6 ms-md ms-lg10"></div>
        </span>
        <Stack spacing={8}>
          <Button
            color="success"
            variant="contained"
            onClick={handleDelete}
            startIcon={<TaskAltIcon />}
          >
            Completed
          </Button>
        </Stack>
      </div>
    </li>
  );
};

export default ApiItem;
