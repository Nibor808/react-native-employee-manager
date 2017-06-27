import React, { Component } from 'react';
import { Card, CardSection, Button } from './common';
import { connect } from 'react-redux';
import EmployeeForm from './employee_form';
import { employeeUpdate, employeeSave } from '../actions';

class EmployeeEdit extends Component {
  componentWillMount() {
    // prefill reducer with employee info
    const employee = this.props.employee;

    for (let prop in employee) {
      if (employee.hasOwnProperty(prop)) {
        const value = employee[prop];
        this.props.employeeUpdate({ prop, value })
      }
    }
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid })
  }

  render() {
    return (
      <Card>
        <EmployeeForm />

        <CardSection>
          <Button title='Save Changes' onPress={this.onButtonPress.bind(this)} />
        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = ({ employeeForm }) => {
  const { name, phone, shift } = employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave })(EmployeeEdit);