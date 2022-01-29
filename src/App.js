import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import "./styles.css";

import { Header } from "./Components/Header";
import { Tasks } from "./Components/Tasks";
import { AddTask } from "./Components/AddTask";
import { API } from "./API"

// Implement a calendar (React Dates) to select a date and an hour (moment)
// Implement dark / light mode
// Add SnackBar to Add Task in the if


const App = () => {

  // Tasks
  const [showTask, setShowTask] = useState(true);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Do Laundry",
      day: "May 1st 2022",
      reminder: true,
    },
    {
      id: 2,
      text: "Do dishes",
      day: "August 15 2022",
      reminder: true,
    },
  ]);

  // Add task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="container">
      <API />
          <Box alignContent="center">
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              style={{ minHeight: "100vh" }}
            >
              <Grid
                item
                xs={4}
                sx={{
                  height: "50%",
                  textAlign: "center",
                  backgroundColor: "white",
                  boxShadow: 10,
                  borderRadius: 2,
                }}
              >
                <Header title="To-Do List" />
                {showTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                  />
                ) : (
                  "Please add a reminder."
                )}
              </Grid>
            </Grid>
          </Box>
    </div>
  );
}

export default App;
