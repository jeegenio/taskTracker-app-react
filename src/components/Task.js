import { useState } from 'react'

const Task = () => {
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
        reminder: true,
    },
    {
        id:3,
        text: 'Business Appointment',
        day: 'Feb 27th at 3:30pm',
        reminder: false,
    },
])
    return (
        <>
            {tasks.map((task) => (
                    <h1 key={task.id}>{task.text}</h1>
                ))}
        </>
    )
}

export default Task
