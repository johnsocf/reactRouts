// one reducer responsible for all things authentication
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER } from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

export default(state = INITIAL_STATE, action) => {
  console.log('action', action);
  switch(action.type) {
    case EMAIL_CHANGED:
      // create a new obj, don't just attach to state.
      return {...state, email: action.payload};

    case PASSWORD_CHANGED:
      return {...state, password: action.payload}

    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload, error: '', loading: false}

    case LOGIN_USER_FAIL:
      return { ...state, error: `authentication failed ${action.payload}.`, password: '', loading: false}

    case LOGIN_USER:
      return { ...state, loading: true, error: ''}

    default:
      return state;
  }
}