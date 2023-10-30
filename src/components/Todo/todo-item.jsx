import { IconButton, Paper } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import "./todo-item.css";

export const TodoItem = ({ task, onClickTodoTask }) => {
  return (
    <Paper elevation={3} onClick={() => onClickTodoTask()}>
      <div className="task-title">{task.title}</div>
      <div className="task-description" hidden={task.hide}>
        {task.description}
      </div>
      <div className="task-actions">
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="done">
          <CheckCircleOutlineIcon />
        </IconButton>
        <IconButton aria-label="todo">
          <ReplyAllIcon />
        </IconButton>
      </div>
    </Paper>
  );
};
