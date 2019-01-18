import React from 'react'
import './css/Task.css'
//create a task 
const Task = (props) => {
    const {task = {}} = props
    const {
        id= '',
        image= '',
        name= '',
        description='',
    } = task
        return (
        <div className="scrumboardtaskstyle" id={id} raggable="true" onDragStart={(ev)=>{ 
            ev.dataTransfer.setData("text", ev.target.id);
            } }>
          <h2>  <img src={image} alt="image" /> &ensp;
            {name}</h2>
            <p>{description}</p>
            <div>
        </div></div> 
            );
     
    }

export default Task
