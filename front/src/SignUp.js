import React, { Component } from "react";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
    this.updateEmailField = this.updateEmailField.bind(this);
  }

  updateEmailField(e) {
    e.preventDefault();
    const email = e.target.value;
    this.setState({ email });
  }

  render() {
    return (
      <div>
        <h1>{this.state.email}</h1>
        <input
          type="email"
          name="email"
          placeholder="Entrer votre email"
          onChange={e => this.updateEmailField(e)}
        />
      </div>
    );
  }
}

export default SignUp;
