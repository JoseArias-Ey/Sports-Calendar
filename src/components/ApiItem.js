import React from "react";
import Button from "@mui/material/Button";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Stack } from "@fluentui/react";

const ApiItem = ({ id, title, completed }) => {
  return (
    <li className={`list-group-item ${completed && "list-group-item"}`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <div class="ms-grid-row ms-sm6 ms-md ms-lg10">{title}</div>
        </span>
        <Stack spacing={8}>
          <Button
            color="success"
            variant="contained"
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
