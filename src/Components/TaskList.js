import React from 'react'
import Task from './Task.js'

const Tasklist = ({tasks}) => (
     <div >
        {
            tasks.map(el => <Task task={el} />
           )

        }
      </div>
)

export default Tasklist;