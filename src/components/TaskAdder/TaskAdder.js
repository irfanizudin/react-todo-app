import React, { useState } from "react";
import "./TaskAdder.scss";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todoSlice";

const TaskAdder = () => {
    const [currentValue, setCurrentValue] = useState("");

    const dispatch = useDispatch();

    const handleAddTask = () => {
        dispatch(addTodo({ message: currentValue }));
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
