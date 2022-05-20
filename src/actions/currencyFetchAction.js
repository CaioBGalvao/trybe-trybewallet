export const GLOBAL_CURRENCYS = 'GLOBAL_CURRENCYS';
export const currencyDeclaration = (currencys) => ({
  type: GLOBAL_CURRENCYS,
  payload: currencys,
});

export const currencyFetch = () => async (dispatch) => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const result = await response.json();
    const currencys = Object.keys(result);
    currencys.splice(1, 1);
    dispatch(currencyDeclaration(currencys));
  } catch (error) {
    console.log(error);
  }
};
