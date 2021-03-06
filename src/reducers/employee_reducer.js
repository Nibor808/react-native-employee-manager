import { EMPLOYEES_FETCH_SUCCESS} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case EMPLOYEES_FETCH_SUCCESS:
      // firebase returns an object with all the employees
      return action.payload;
    default:
      return state;
  }
};