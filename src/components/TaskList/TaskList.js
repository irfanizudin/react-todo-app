import React from "react";
import TaskItem from "./../TaskItem/TaskItem";
import { useSelector } from "react-redux";

const TaskList = () => {
    const todos = useSelector((state) => state.todos);

    return todos.map((task) => {
        return <TaskItem id={task.id} message={task.message} />;
    });
};

export default TaskList;
