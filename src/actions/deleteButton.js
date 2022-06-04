export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const deleteExpenceAction = (newExpenses) => {
  console.log('Estou sendo disparada!');
  return {
    type: DELETE_EXPENSE,
    payload: newExpenses,
  };
};
