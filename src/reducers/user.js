import { LOGIN_ACTION } from '../actions/loginAction';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN_ACTION:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
};

export default user;
