import React, { Component } from "react";
import PropTypes from "prop-types";

class Employee extends React.Component {
  render() {
    return (
      <div className="employee">
        <h1>Employee</h1>
        <label for="empid">
          <b>Employee ID: </b>
        </label>
        <input
          type="text"
          placeholder="Enter Employee Id"
          name="empid"
          value={this.props.empid}
        />
        <br />
        <br />
        <label for="name">
          <b>Name: </b>
        </label>
        <input
          type="password"
          placeholder="Enter Name"
          name="name"
          value={this.props.name}
        />
        <br />
        <br />
        <label for="deptname">
          <b>Department Name: </b>
        </label>
        <input
          type="text"
          placeholder="Enter Department Name"
          name="deptname"
          value={this.props.deptname}
        />
        <br />
        <br />
        <label for="gender">
          <b>Gender: </b>
        </label>
        <input
          type="text"
          placeholder="Enter Gender"
          name="name"
          value={this.props.gender}
        />
        <br />
        <br />
        <label for="age">
          <b>Age: </b>
        </label>
        <input
          type="text"
          placeholder="Enter Age"
          name="age"
          value={this.props.age}
        />
      </div>
    );
  }
}

Employee.propTypes = {
  empid: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  deptname: PropTypes.oneOf(["HR", "SALES", "PROD"]),
  gender: PropTypes.oneOf(["Female", "Male"]),
  age: PropTypes.number
};

Employee.defaultProps = {
  uname: "String value...",
  pass: "String value..."
};

export default Employee;
