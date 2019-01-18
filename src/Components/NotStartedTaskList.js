import React from 'react'
import Task from './Task.js'
//create a not started tasks list by mapping Task component
const NotStartedTaskList = ({tasks, onAddTask}) => (
     <div >
         {/* add a new task which is not started yet */}
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