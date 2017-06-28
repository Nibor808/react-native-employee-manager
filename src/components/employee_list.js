import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import EmployeeListItem from './employee_list_item';

class EmployeeList extends Component {

  componentWillMount() {
    this.props.employeesFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    /*
      call this method when the component mounts
      and also when we come back to it from another scene
      in order to fetch updated data from creatinga n new employee
    */
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee) {
    return <EmployeeListItem employee={employee} />;
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = ({ employeesObj }) => {
  let employees = {};
  // create new object adding the uid to each employee
  for (let prop in employeesObj) {
    employees[prop] = { ...employeesObj[prop], uid: prop }
  }

  return { employees };
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);