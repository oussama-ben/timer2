import React, {Component} from 'react';
import Timer from './time'
import {Button} from 'reactstrap'
import './App.css';


function Time2(props) {
 


    return ( <div>
      <Button className ="but1" color="secondary" onClick={props.start}>start</Button> 
     
    </div>);
  }
 
export default Time2;

