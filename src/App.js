import Header from './components/Header';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Tasks from './components/Tasks';
import { useState, useEffect } from 'react';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';


function App() {
const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState ([])

useEffect(() => {
  const fetchData = async () => {
    const dataFromServer = await fetchTask();
    setTasks(dataFromServer);
  }
  fetchData();
},[])

//fetch data
 const fetchTask = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data;
  }

const showAdd = () =>{
  setShowAddTask(!showAddTask);
}

//fetch data for togglereminder
const fetchTaskToggle = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data;
  }


const addTask = async (task) => {
  const res = await fetch('http://localhost:5000/tasks', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(task),
  })

  const data = await res.json()

  setTasks([...tasks, data])
  // const id = Math.floor(Math.random() * 10000) + 1
  // const newTask = {id,...task};
  // setTasks([...tasks, newTask]);


}

const delApt = async (id) =>{
  await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'DELETE',
  })
  setTasks(tasks.filter((task) => task.id !== id ))
}

const toggleREminder = async (id )=>{
  
  const taskToggleUpdate = await fetchTaskToggle(id);
  const updTask = {...taskToggleUpdate, reminder: !taskToggleUpdate.reminder}

  const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(updTask),
  })
  
  const data = res.json()

  setTasks(
    tasks.map((task) => 
    task.id === id ? {...task, reminder: !data.reminder} : task 
  )
  )
}

  return (
    <Router>
    <div className='container'>
      <Header showAdd={showAdd} onAddClose={showAddTask}/>
      <Route path='/' exact render={(props) => (
          <>
          {showAddTask && < AddTask onAddTask={addTask}/>}
          {tasks.length > 0 ?<Tasks  tasks={tasks} onDelete={delApt} onToggle={toggleREminder}/>: 'No task to Show'}
          </>
      )}/>

      
      <Route path='/about' component={About}/>
      <Footer/>
    </div> 
    </Router>
  );
}

export default App;
