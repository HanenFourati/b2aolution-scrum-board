import React,{Component} from 'react'
import  ScrumBorad from './Components/ScrumBorad.js'

  
class App extends React.Component {
    render() {
       return(
    <div>
      {/* display the scrum board */}
     < ScrumBorad/>
    </div>
        )
    }

}

export default App;