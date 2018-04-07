import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS,
  EMPLOYEE_DELETE_SUCCESS,
  EMPLOYEE_EDIT_CANCEL
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      // action.payload === { prop:'name', value:'jane'}
      return {...state, [action.payload.prop]:action.payload.value};
    case EMPLOYEE_CREATE:
    case EMPLOYEE_EDIT_CANCEL:
      return INITIAL_STATE;
    case EMPLOYEE_SAVE_SUCCESS:
      return INITIAL_STATE;
    case EMPLOYEE_DELETE_SUCCESS:
      return INITIAL_STATE;
    default: 
      return state;
  }
};