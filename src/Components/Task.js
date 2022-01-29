import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import "../styles.css";

export const Task = ({ task, onDelete, onToggle }) => {
  return (
    <Box
      sx={{
        backgroundColor: "whitesmoke",
        m: 3,
        width: "80%",
        height: 30,
        borderRadius: 0.5,
        minHeight: 50,
      }}
      className={`task ${task.reminder && "reminder"}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <Grid container m={2}>
        <Typography variant="caption" fontSize="medium" fontWeight="bold">
          {task.text}
        </Typography>

        <Grid container position={"relative"}>
          <Typography
            variant="caption"
            fontSize="small"
            sx={{ fontWeight: "bold" }}
          >
            {task.day}
          </Typography>
          <Grid item position={"absolute"} right={20} bottom={5}>
            <DeleteOutlineOutlinedIcon
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => onDelete(task.id)}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
