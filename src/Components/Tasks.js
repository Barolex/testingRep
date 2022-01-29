import { Task } from "./Task";

export const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((oneItem) => (
        <Task
          key={oneItem.id}
          task={oneItem}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};
