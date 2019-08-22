import React from 'react';
import Time from './time';
import Time2 from './timer2';
import Time3 from './timer3'
import './App.css';


class App extends React.Component {
  constructor({duration}) {
    super({duration});
    this.state = { timeMs: 564645654 }
  }

  increm=()=>{
     if(this.state.newinterval){
       return
     }
    const interval=setInterval(() => {
       this.setState({
           timeMs: this.state.timeMs + 1000
       }) 
    },
    1000
     )
     this.setState({
       newinterval:interval
     })
}

stop=()=>{
  clearInterval(this.state.interval) 
     this.setState({
         timeMs: 564645654 
         
     }) 
    }

  


  render(){
    return (
      <div className="App">
      <Time duration={this.state.timeMs}/>
      <Time2 start={this.increm}/>
      <Time3 stop={this.stop}/>
      
      </div>
    );
  }
}

export default App;
