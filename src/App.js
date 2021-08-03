import React, { useState } from 'react'

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
  return <div>
    <input type="text" value={currentValue} onChange={event => setCurrentValue(event.target.value)} />
    <button disabled={currentValue === ""} onClick={() => handleAddTask()}>Tambah</button>
  </div>
}

const InfoBar = ({ taskNumber }) => {
  return <div>Ada {taskNumber} yang perlu dikerjakan</div>
}

const Header = () => {
  return <h1>React Todo</h1>
}

const Task = ({ id, message, setTasks, tasks }) => {
  const handleDelete = () => {
    const updateTasks = tasks.filter(task => task.id !== id);
    setTasks(updateTasks);
  }
  return <div>
    <div>{message}</div>
    <button onClick={() => handleDelete()}>Delete</button>
  </div >
}

const TaskList = ({ tasks, setTasks }) => {
  return tasks.map(task => {
    return <Task id={task.id} message={task.message} setTasks={setTasks} tasks={tasks} />
  })
}

const TaskApp = () => {
  const [tasks, setTasks] = useState(data);
  return <>
    <Header />
    <InfoBar taskNumber={tasks.length} />
    <TaskAdder setTasks={setTasks} tasks={tasks} />
    <TaskList tasks={tasks} setTasks={setTasks} />
  </>
}

const App = () => {
  return (
    <TaskApp />
  )
}

export default App
