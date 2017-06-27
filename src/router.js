import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/login_form';
import EmployeeList from './components/employee_list';
import EmployeeCreate from './components/employee_create';
import EmployeeEdit from './components/employee_edit';

export default RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>

      <Scene key='auth'>
        <Scene
          key='login'
          component={LoginForm}
          title='Please Login'
        />
      </Scene>

      <Scene key='main'>
        <Scene
          key='employeeList'
          component={EmployeeList}
          title='Employees'
          rightTitle='Add'
          onRight={() => Actions.employeeCreate()}
          initial
        />
        <Scene
          key='employeeCreate'
          component={EmployeeCreate}
          title='Create Employee'
        />
        <Scene
          key='employeeEdit'
          component={EmployeeEdit}
          title='Edit Employee'
        />
      </Scene>

    </Router>
  );
};