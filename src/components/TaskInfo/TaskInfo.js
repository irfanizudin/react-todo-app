import React from "react";
import "./TaskInfo.scss";

const TaskInfo = ({ taskNumber }) => {
  return (
    <div className="info-bar">
      There {taskNumber > 1 ? "are" : "is"} <span>{taskNumber}</span>{" "}
      {taskNumber > 1 ? "tasks" : "task"} must be done
    </div>
  );
};

export default TaskInfo;
