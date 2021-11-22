import React from "react";
import "./TaskInfo.scss";
import { useSelector } from "react-redux";

const TaskInfo = () => {
    const taskNumber = useSelector((state) => state.todos.length);

    return (
        <div className="info-bar">
            There {taskNumber > 1 ? "are" : "is"} <span>{taskNumber}</span>{" "}
            {taskNumber > 1 ? "tasks" : "task"} must be done
        </div>
    );
};

export default TaskInfo;
