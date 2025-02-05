import React, { Component } from "react";

export default class ControllForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state);
   this.setState({name:'',email:'',password:''})
  };
  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            className="
        form-control"
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="polash ahmed"
          />
          <input
            className="form-control"
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="polash@gmail.com"
          />
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="******"
            value={password}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
