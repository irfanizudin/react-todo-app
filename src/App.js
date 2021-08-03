import React from 'react'

const data = [
  {
    id: 1,
    message: "Cari Makan"
  },
  {
    id: 2,
    message: "Belajar React"
  },
  {
    id: 3,
    message: "Belajar Vue"
  }
]

const TaskAdder = () => {
  return <div>
    <input type="text" />
    <button>Tambah</button>
  </div>
}

const InfoBar = ({ taskNumber }) => {
  return <div>Ada {taskNumber} yang perlu dikerjakan</div>
}

const Header = () => {
  return <h1>React Todo</h1>
}

const Task = ({ id, message }) => {
  return <div>
    <div>{message}</div>
    <button>Delete</button>
  </div>
}

const TaskList = ({ tasks }) => {
  return tasks.map(task => {
    return <Task id={task.id} message={task.message} />
  })
}

const TaskApp = () => {
  return <>
    <Header />
    <InfoBar taskNumber={3} />
    <TaskAdder />
    <TaskList tasks={data} />
  </>
}

const App = () => {
  return (
    <TaskApp />
  )
}

export default App
