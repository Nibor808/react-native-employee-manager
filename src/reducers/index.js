import { combineReducers } from 'redux';
import AuthReducer from './auth_reducer';
import EmployeeFormReducer from './employeeForm_reducer';
import EmployeeReducer from './employee_reducer';

export default combineReducers({
  auth: AuthReducer,
  employeeForm: EmployeeFormReducer,
  employeesObj: EmployeeReducer
});