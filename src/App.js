import React,{Component} from 'react'
import './App.css'
import Story from './Components/Story.js'

// the first story tasks
const s1thestartedTasks = [
  {
    id: '0001',
    image: 'http://whitenessproject.org/img/Audrey.jpg',
    name: 'Sara Mhiri',
    description: 'user profil developement',
   }
 ,
]
const s1theinprogressTasks = [
     {
      id: '0002', 
        image: 'http://whitenessproject.org/img/05-chris.jpg',
        name: 'Firas BenLahmer',
        description: 'Worker profil developement',
        
     },
   ,
  ]
const s1thedoneTasks = [
     {
        id:'0003',
        image: 'http://whitenessproject.org/img/23-scott.jpg',
        name: 'Anis KEFI',
        description: 'Search worker developement',
  
     },
   ,
  ]
//the second story tasks
  const s2thestartedTasks = [
    {
      id: '0004',
      image: 'http://whitenessproject.org/img/09-rob.jpg',
      name: 'Sami CHERIF',
      description: 'Home page developement',
     }
   ,
  ]
  const s2theinprogressTasks = [
       {
        id: '0005', 
          image: 'http://whitenessproject.org/img/Carson.jpg',
          name: 'Mohamed FARDI',
          description: 'services developement ',
          
       },
       {
        id:'0010',
        image: 'http://whitenessproject.org/img/23-scott.jpg',
        name: 'Anis KEFI',
        description: 'Worker materials developement',
  
     },
     ,
    ]
  const s2thedoneTasks = [
       {
          id:'0006',
          image: 'http://whitenessproject.org/img/Nick.jpg',
          name: 'Samir CHABANI',
          description: 'Time scheduling developement',
    
       },
     ,
    ]
//the third story tasks
    const s3thestartedTasks = [
      {
        id: '0007',
        image: 'http://whitenessproject.org/img/Nicholas.jpg',
        name: 'Bachir hasni',
        description: 'Reviews developement',
       }
     ,
    ]
    const s3theinprogressTasks = [
         {
          id: '0008', 
            image: 'http://whitenessproject.org/img/Liam.jpg',
            name: 'Haithem RABHI',
            description: 'Appointement developement',
            
         },
         {
          id:'0011',
          image: 'http://whitenessproject.org/img/Nick.jpg',
          name: 'Samir CHABANI',
          description: 'Contacts developement',
    
       },
       ,
      ]
    const s3thedoneTasks = [
         {
            id:'0009',
            image: 'http://whitenessproject.org/img/Javier.jpg',
            name: 'Zouhair SELLAMI',
            description: 'Map developement',
      
         },
       ,
      ]
    
class App extends React.Component {
    render() {
       return(
          <div>
          {/* Scrum board  */}
    <div className="divsdisplayflex">
    <div  className="scrumboardcolstyle" style={{backgroundColor: '#c68f0c'}}>Story</div>
    <div  className="scrumboardcolstyle" style={{backgroundColor: '#2f5881'}}>Not Started</div>
    <div  className="scrumboardcolstyle" style={{backgroundColor: '#6959CD'}}>In Progress</div>
    <div  className="scrumboardcolstyle" style={{backgroundColor: '#3d682e'}}>Done</div>
    </div>
    {/* Stories, here we have 3 but we can add as many as  we need */}
    <Story  StoryName="First story" thestartedTasks={s1thestartedTasks} theinprogressTasks={s1theinprogressTasks} thedoneTasks={s1thedoneTasks}/>
    <Story StoryName="Second story" thestartedTasks={s2thestartedTasks} theinprogressTasks={s2theinprogressTasks} thedoneTasks={s2thedoneTasks}/>
    <Story  StoryName="Third story" thestartedTasks={s3thestartedTasks} theinprogressTasks={s3theinprogressTasks} thedoneTasks={s3thedoneTasks}/>

    </div>
        )
    }

}

export default App;