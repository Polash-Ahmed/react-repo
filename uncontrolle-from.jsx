import React, { Component } from "react";

export default class Uncontrolledform extends Component {
  handleSubmit = event=>{
    event.preventDefault()
    const data = {}
    data.name = event.target.name.value
    data.email = event.target.email.value
    data.name = event.target.password.value
    console.log(data);
    event.target.reset()
  }
  
  render() {
    return <div>
      <form onSubmit={this.handleSubmit} >
        <input className="form-control" type="text" name="name" placeholder="Polash ahmed" />
        <input className="form-control"  type="email" name="email" placeholder="polash@gmail.com" />
        <input className="form-control"  type="password" name="password" placeholder=" *******" />
        <button type="submit">Submit</button>
      </form>
    </div>;
  }
}
