import { GLOBAL_CURRENCYS } from '../actions/currencyFetchAction';
import { GLOBAL_EXPENSES_UPDATE } from '../actions/formButton';
import { DELETE_EXPENSE } from '../actions/deleteButton';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GLOBAL_CURRENCYS:
    return {
      ...state,
      currencies: action.payload,
    };
  case GLOBAL_EXPENSES_UPDATE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case DELETE_EXPENSE:
    console.log('Estou Reduzindo!');
    return {
      ...state,
      expenses: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
