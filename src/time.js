import React from 'react';
import {Button} from 'reactstrap'




const msToTime=({duration})=> {
    var milliseconds = parseInt((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return hours + ":" + minutes + ":" + seconds ;
  }
  console.log(msToTime(300000))

function Timer({duration}) {

    return (<div className="container">
        {msToTime({duration})} <br></br>
       
      
    </div>
       

    );
}
export default Timer;