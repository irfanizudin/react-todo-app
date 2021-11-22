import React, { useState } from "react";
import "./TaskAdder.scss";

const TaskAdder = ({ setTasks, tasks }) => {
    const [currentValue, setCurrentValue] = useState("");
    const handleAddTask = () => {
        const newTask = {
            id: tasks.length + 1,
            message: currentValue,
        };
        setTasks([...tasks, newTask]);
        setCurrentValue("");
    };

    return (
        <div className="task-adder">
            <input
                type="text"
                value={currentValue}
                onChange={(event) => setCurrentValue(event.target.value)}
                placeholder="Add your task here..."
            />
            <button
                className="btn-primary"
                disabled={currentValue === ""}
                onClick={() => handleAddTask()}
            >
                Add
            </button>
        </div>
    );
};

export default TaskAdder;
