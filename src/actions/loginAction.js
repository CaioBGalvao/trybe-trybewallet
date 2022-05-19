export const LOGIN_ACTION = 'LOGIN_ACTION';
export const loginAction = (email) => ({
  type: LOGIN_ACTION,
  payload: email,
});
