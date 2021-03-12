import { FaTimes } from 'react-icons/fa';

const Task = ({task,onDelete, onToggle}) => {
    const {id} = task;
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={ () => onToggle(id)}>
            <h3>{task.text}<FaTimes style={{color:'red', cursor:'pointer'}} 
            onClick={ () => {
                onDelete(id)
                }}/></h3>
            <p>{task.day}</p>
            <p>Done</p>

        </div>
    )}

export default Task
