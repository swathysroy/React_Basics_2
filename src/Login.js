import React, { Component } from "react";
import PropTypes from 'prop-types';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="login">
        <h1>Login</h1>
        <label for="uname">
          <b>Username: </b>
        </label>
        <input type="text" placeholder="Enter Username" name="uname" value={this.props.uname}/>
        <br />
        <br />
        <label for="pass">
          <b>Password: </b>
        </label>
        <input type="password" placeholder="Enter Password" name="pass" value={this.props.pass}/>
        <br />
        <br />
        <button type="submit">Login</button>
      </div>
    );
  }
}

Login.propTypes = {
  uname: PropTypes.string.isRequired, 
  pass: PropTypes.string.isRequired
};

Login.defaultProps = {
  uname: "String value...",
  pass: "String value..."
};

export default Login;
