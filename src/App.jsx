import { useState } from 'react'
import '../public/style/App.css'
import Task from './components/Task'
import TaskForm from './components/TaskForm'

function App() {

  const [tasks, setTask] = useState([])

  const saveTask = task =>{
    const array = [task,...tasks]
    const names = new Set()
    array.forEach(e=>{
      names.add(e.text)
    })
    
    if(array.length!=names.size){
      return
    }
    setTask(array)
  }

  const completeTask = id =>{
    const tasksChangeState = tasks.map(task=>{
      if(task.id===id){
        task.state = !task.state
      }
      return task
    })
    setTask(tasksChangeState)
  }

  const deleteTask = id =>{
    const newTasks = tasks.filter(task=>task.id!=id)
    setTask(newTasks)
  }

  return (
    <div className="App">
      <div className="principalContainer">
        <h1 className='title'>Tasks</h1>
        <TaskForm onSubmit={saveTask} />
        <div className="containerTasks">
        {
          tasks.map(task=>
            <Task key={task.id} id={task.id} text={task.text} state={task.state} completeTask={completeTask} deleteTask={deleteTask}/>
          )
        }
        </div>
      </div>
    </div>
  )
}

export default App
