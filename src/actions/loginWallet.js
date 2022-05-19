export const LOGIN_WALLET = 'LOGIN_WALLET';
export const loginWallet = (email) => ({
  type: LOGIN_WALLET,
  payload: email,
});
