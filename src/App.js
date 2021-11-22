import React from "react";
import "./App.scss";
import TaskHeader from "./components/TaskHeader/TaskHeader";
import TaskInfo from "./components/TaskInfo/TaskInfo";
import TaskAdder from "./components/TaskAdder/TaskAdder";
import TaskList from "./components/TaskList/TaskList";

const App = () => {
    return (
        <div className="container">
            <TaskHeader />
            <TaskInfo />
            <TaskAdder />
            <TaskList />
        </div>
    );
};

export default App;
