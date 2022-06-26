import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`}> 
            <div>
                <FaTimes className='inline' style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(task.id)}/>
                <h3 onClick={() => onToggle(task.id)}>{task.text} </h3>
            </div>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
