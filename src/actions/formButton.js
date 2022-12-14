export const GLOBAL_EXPENSES_UPDATE = 'GLOBAL_EXPENSES_UPDATE';
export const globalExpensesUpdate = (expenses) => ({
  type: GLOBAL_EXPENSES_UPDATE,
  payload: expenses,
});

export const currencyFetchButton = (expenses) => async (dispatch) => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const result = await response.json();
    const currencys = {
      ...expenses,
      exchangeRates: result,
    };
    dispatch(globalExpensesUpdate(currencys));
  } catch (error) {
    console.log(error);
  }
};
