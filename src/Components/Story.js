import React, { Component } from 'react';
import NotStartedTaskList from './NotStartedTaskList.js'
import TaskList from './TaskList.js'
import './css/Story.css'

class Story extends Component {
  constructor(props) {
    super(props)
    this.state = {
        StartedTasks: this.props.thestartedTasks, //the not started tasks list
        InprogressTasks: this.props.theinprogressTasks, //the in progress tasks list
        DoneTasks: this.props.thedoneTasks,// the done tasks list
    }

  }

  AddNewTasktostarted(newTask) {
    //add a new not started task 
    this.props.thestartedTasks.push(newTask)
      this.setState({
        StartedTasks: this.props.thestartedTasks,
        
      })
    
  }
  //drag and drop the tasks
  allowDrop(ev) { 
    ev.preventDefault();
  }
  
   drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    
  }

 render() {
    return (
        <div className="divsdisplayflex" >
        <div className="scrumboardcolstyle" style={{background: '#EEE8AA'}}>
        {this.props.StoryName}
        </div> 
        <div className="scrumboardcolstyle"  style={{background: '#C6E2FF'}}>
        <NotStartedTaskList tasks={this.props.thestartedTasks} onAddTask={(newTask) => this.AddNewTasktostarted(newTask)} />
        </div>  
        <div className="scrumboardcolstyle" onDrop={this.drop} onDragOver={this.allowDrop} style={{background: '#AB82FF'}}>
        <TaskList tasks={this.props.theinprogressTasks} />
        </div>  
        <div className="scrumboardcolstyle" onDrop={this.drop} onDragOver={this.allowDrop} style={{background: '#8FBC8F'}}>
        <TaskList tasks={this.props.thedoneTasks} />
        </div>  
        </div>  
    );
  }
}

export default Story;
