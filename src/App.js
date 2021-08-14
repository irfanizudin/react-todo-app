import React, { useState } from 'react'
import "./App.css"

const data = [
  {
    id: 1,
    message: "Belajar Angular"
  },
  {
    id: 2,
    message: "Belajar React"
  },
  {
    id: 3,
    message: "Belajar Vue"
  },
  {
    id: 4,
    message: "Belajar Node"
  }
]

const TaskAdder = ({ setTasks, tasks }) => {
  const [currentValue, setCurrentValue] = useState("");
  const handleAddTask = () => {
    const newTask = {
      id: tasks.length + 1,
      message: currentValue
    }
    setTasks([...tasks, newTask])
    setCurrentValue("")
  }
  return <div className="task-adder">
    <input type="text" value={currentValue} onChange={event => setCurrentValue(event.target.value)} />
    <button className="btn-primary" disabled={currentValue === ""} onClick={() => handleAddTask()}>Add</button>
  </div>
}

const InfoBar = ({ taskNumber }) => {
  return <div className="info-bar">There {taskNumber > 1 ? "are" : "is"} <span>{taskNumber}</span> {taskNumber > 1 ? "tasks" : "task"} must be done</div>
}

const Header = () => {
  return <h1 className="text-center">React Todo</h1>
}

const Task = ({ id, message, setTasks, tasks }) => {
  const handleDelete = () => {
    const updateTasks = tasks.filter(task => task.id !== id);
    setTasks(updateTasks);
  }
  return <div className="task-item">
    <div className="text">{message}</div>
    <button onClick={() => handleDelete()}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg></button>
  </div >
}

const TaskList = ({ tasks, setTasks }) => {
  return tasks.map(task => {
    return <Task id={task.id} message={task.message} setTasks={setTasks} tasks={tasks} />
  })
}

const TaskApp = () => {
  const [tasks, setTasks] = useState(data);
  return <div className="container">
    <Header />
    <InfoBar taskNumber={tasks.length} />
    <TaskAdder setTasks={setTasks} tasks={tasks} />
    <TaskList tasks={tasks} setTasks={setTasks} />
  </div>
}

const App = () => {
  return (
    <TaskApp />
  )
}

export default App
