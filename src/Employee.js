import React, { Component } from "react";
import PropTypes from "prop-types";

class Employee extends React.Component {
  render() {
    return (
      <div>
        <h2>Employee component</h2>
        <p>To be completed</p>
      </div>
    );
  }
}

Employee.propTypes = {
  uname: PropTypes.string.isRequired, 
  pass: PropTypes.string.isRequired
};

Employee.defaultProps = {
  uname: "String value...",
  pass: "String value..."
};

export default Employee;
