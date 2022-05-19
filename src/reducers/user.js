import { LOGIN_WALLET } from '../actions/loginWallet';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN_WALLET:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
};

export default user;
