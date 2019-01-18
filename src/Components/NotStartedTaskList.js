import React from 'react'
import Task from './Task.js'

const NotStartedTaskList = ({tasks, onAddTask}) => (
     <div >
          <button onClick={() => {
            onAddTask({
                id: Math.random(),
                image:  prompt('Task Responsible image is  '),
                name:  prompt('Task Responsible name is '),
                description: prompt('Task description is '),
            })
        }}>Add new Task</button>
        {
            tasks.map(el => <Task task={el} />
           )

        }
       
      </div>
)

export default NotStartedTaskList;