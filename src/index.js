import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './Season'
import Loader from './Loader'

class App extends Component{


  state = {lat: '',
  error: null};

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({lat:position.coords.latitude})
      },
      err => {this.setState({error: err.message})}
    ); 
  }

  renderDisplay(){
    
    if(this.state.error && !this.state.lat){
      return(<div>
       <h3> Error :  {this.state.error} </h3>
      </div>
      )
    }
 
    if(this.state.lat){
      return(<div>
        <SeasonDisplay  lat= {this.state.lat}/>
      </div>)
    }
 
    return <div><Loader/></div>
  }
  
    
  render(){
  return(<div>{this.renderDisplay()}</div>

    )

  }
}




ReactDOM.render(
  <App/>,
  document.getElementById('root')
)