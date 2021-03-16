import './Season.css'
import React from 'react'


const getSeason = (lat,month) =>{
if(month > 2 && month < 9){
  if(lat > 0) {
    return 'summer'
  }
  else{
    return 'harmattan'
  }
}
else {
  if(lat > 0){
    return 'harmattan'
  }
  else{
    return 'summer'
  }
}
}

const SeasonDisplay = (props) =>{

const season = getSeason(props.lat, new Date().getMonth())



const textDisplay = season === 'harmattan' ? 'Omo, Cold dei oo' : 'Hot Damn! Beach Time!!';

const icon = season === 'harmattan' ? 'ac_unit' : 'wb_sunny';

const iconColor = season === 'harmattan' ? 'blue-text' : 'red-text'

console.log(season);

return (<div className={`season-display ${season}`}>
  <i className={`icon-left ${iconColor} large material-icons`}>{icon}</i>
  
  <h1>{textDisplay}!</h1>
  
  <i className={`icon-right ${iconColor} large right material-icons`}>{icon}</i>

  
  </div>)
}

export default SeasonDisplay