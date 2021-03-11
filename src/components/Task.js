import { FaTimes } from 'react-icons/fa';

const Task = ({task,onDelete}) => {
    const {id} = task;
    return (
        <div className='task'>
            <h3>{task.text}<FaTimes style={{color:'red', cursor:'pointer'}} 
            onClick={ () => onDelete(id)}/></h3>
            <p>{task.day}</p>
            <p>Done</p>
        </div>
    )}

export default Task
