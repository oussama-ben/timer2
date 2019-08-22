import React, {Component} from 'react';
import {Button} from 'reactstrap'
import './App.css';

function Time3(props) {

 
   
      return ( <div>
         
        <Button className ="but2" color="primary" onClick={props.stop}>Reset</Button>
      </div>);
}
   
  export default Time3;