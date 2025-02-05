import React, { Component } from "react";

export default class App extends Component {
  state = {
    count: 0,
  };
  intervalId = null;
  incrimentCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrimentCount = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };
  startTimer = () => {
    if (this.state.count > 0 && !this.intervalId) {
      this.intervalId = setInterval(() => {
        this.setState({ count: this.state.count - 1 }, () => {
          if (this.state.count === 0 ) {
            alert("Timer Finished");
            clearInterval(this.intervalId);
            this.intervalId = null;
          }
        });
      }, 1000);
    }
  };

  stopTimer = ()=>{
    if(this.intervalId){
      clearInterval(this.intervalId)
      this.intervalId = null
    }
  }
  resetTimer = ()=>{
    this.setState({count: 0});
    clearInterval(this.intervalId);
    this.intervalId = null
  }

  render() {
    return (
      <div>
        <button onClick={this.decrimentCount}>decrimentCount</button>
        <span>{this.state.count}</span>
        <button onClick={this.incrimentCount}>incrimentCount</button>
        <div>
          <button onClick={this.startTimer}>Start</button>
          <button onClick={this.stopTimer}>Stop</button>
          <button onClick={this.resetTimer}>Reset</button>
        </div>
      </div>
    );
  }
}
