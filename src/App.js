import React, { useState } from "react";
import "./App.scss";
import TaskHeader from "./components/TaskHeader/TaskHeader";
import TaskInfo from "./components/TaskInfo/TaskInfo";
import TaskAdder from "./components/TaskAdder/TaskAdder";
import TaskList from "./components/TaskList/TaskList";

const data = [
    {
        id: 1,
        message: "Belajar Angular",
    },
    {
        id: 2,
        message: "Belajar React",
    },
    {
        id: 3,
        message: "Belajar Vue",
    },
    {
        id: 4,
        message: "Belajar Node",
    },
];

const App = () => {
    const [tasks, setTasks] = useState(data);
    return (
        <div className="container">
            <TaskHeader />
            <TaskInfo taskNumber={tasks.length} />
            <TaskAdder setTasks={setTasks} tasks={tasks} />
            <TaskList tasks={tasks} setTasks={setTasks} />
        </div>
    );
};

export default App;
