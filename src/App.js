import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';


function App() {

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

const delApt = (id) =>{
  setTasks(tasks.filter((task) => task.id !== id ))
  console.log("id", id )

 
}
  return (
    <div className='container'>
      <Header/>
      {tasks.length > 0 ?<Tasks  tasks={tasks} onDelete={delApt}/>: 'No task to Show'}
    </div> 
  );
}

export default App;
