import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
import AddTask from './components/AddTask';


function App() {
const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState ([
    {
        id:1,
        text: 'Doctors Appointment',
        day: 'Feb 6th at 2:30pm',
        reminder: true,
    },
    {
        id:2,
        text: 'Dentis Appointment',
        day: 'Feb 20th at 1:30pm',
        reminder: false,
    },
    {
        id:3,
        text: 'Business Appointment',
        day: 'Feb 27th at 3:30pm',
        reminder: false,
    },
])


const showAdd = () =>{
  setShowAddTask(!showAddTask);
}

const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id,...task};
  setTasks([...tasks, newTask]);
}

const delApt = (id) =>{
  setTasks(tasks.filter((task) => task.id !== id ))
}

const toggleREminder = (id )=>{
  setTasks(
    tasks.map((task) => 
    task.id === id ? {...task, reminder: !task.reminder} : task 
  )
  )
}

  return (
    <div className='container'>
      <Header showAdd={showAdd} onAddClose={showAddTask}/>
      {showAddTask && < AddTask onAddTask={addTask}/>}
      {tasks.length > 0 ?<Tasks  tasks={tasks} onDelete={delApt} onToggle={toggleREminder}/>: 'No task to Show'}
    </div> 
  );
}

export default App;
