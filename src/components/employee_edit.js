import React, { Component } from 'react';
import { Card, CardSection, Button, ConfirmModal } from './common';
import { connect } from 'react-redux';
import EmployeeForm from './employee_form';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import Communications from 'react-native-communications';

class EmployeeEdit extends Component {

  state = {
    showModal: false
  }

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

  onSavePress() {
    const { name, phone, shift } = this.props;

    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid })
  }

  onTextPress() {
    const { phone, shift } = this.props;

    Communications.text(phone, `Your up coming shift is on ${shift}`);
  }

  onFirePress() {
    this.setState({ showModal: !this.state.showModal })
  }

  onAccept() {
    const { uid } = this.props.employee;

    this.props.employeeDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <Card>
        <EmployeeForm />

        <CardSection>
          <Button title='Save Changes' onPress={this.onSavePress.bind(this)} />
        </CardSection>

         <CardSection>
          <Button title='Text Schedule' onPress={this.onTextPress.bind(this)} />
        </CardSection>

        <CardSection>
          <Button title='Fire Employee' onPress={this.onFirePress.bind(this)} />
        </CardSection>

        <ConfirmModal
          text='Are you sure you want to fire this employee?'
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        />
      </Card>
    )
  }
}

const mapStateToProps = ({ employeeForm }) => {
  const { name, phone, shift } = employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);