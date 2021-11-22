import React from "react";
import TaskItem from "./../TaskItem/TaskItem";

const TaskList = ({ tasks, setTasks }) => {
    return tasks.map((task) => {
        return <TaskItem id={task.id} message={task.message} setTasks={setTasks} tasks={tasks} />;
    });
};

export default TaskList;
