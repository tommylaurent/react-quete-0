import React, { Component } from "react";
import "./App.css";
import SignUp from "./SignUp";
//import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <SignUp />
      </div>
    );
  }
}

export default App;
