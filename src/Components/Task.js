import React from 'react'
import './css/Task.css'

const Task = (props) => {
    const {task = {}} = props
    const {
        id= '',
        image= 'http://media.npr.org/assets/news/2009/10/27/facebook1_sq-17f6f5e06d5742d8c53576f7c13d5cf7158202a9.jpg?s=16',
        name= 'xxx',
        description='xxx',
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
