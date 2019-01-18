import React from 'react'
import Task from './Task.js'
//create a tasks list by mapping Task component
const Tasklist = ({tasks}) => (
     <div >
        {
            tasks.map(el => <Task task={el} />
           )

        }
      </div>
)

export default Tasklist;