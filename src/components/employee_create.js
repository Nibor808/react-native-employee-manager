import React, { Component } from 'react';
import { Card, CardSection, Button } from './common';
import { connect } from 'react-redux';
import { employeeCreate } from '../actions';
import EmployeeForm from './employee_form';

class EmployeeCreate extends Component {

  onButtonPress() {
    const { name, phone, shift } = this.props;

    // if the picker is not touched, default to 'Monday'
    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />

        <CardSection>
          <Button title='Create' onPress={this.onButtonPress.bind(this)}/>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = ({ employeeForm }) => {
  const { name, phone, shift } = employeeForm;

  return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeCreate })(EmployeeCreate);