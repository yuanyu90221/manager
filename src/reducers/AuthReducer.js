import {
  EMAIL_CHANGED, 
  PASSWD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from '../actions/types';
const INITIAL_STATE = { 
  email: '', 
  passwd: '',
  user: null,
  error: '',
  loading: false
};
export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case EMAIL_CHANGED: 
      return {...state, email: action.payload};
    case PASSWD_CHANGED:
      return {...state, passwd: action.payload};
    case LOGIN_USER:
      return {...state, loading: true, error: ''};
    case LOGIN_USER_SUCCESS:
      return {...state, ...INITIAL_STATE ,user: action.payload};
    case LOGIN_USER_FAIL:
      return {...state, error: 'Authentication Failed.', loading: false};
    default: 
      return state;
  }
};