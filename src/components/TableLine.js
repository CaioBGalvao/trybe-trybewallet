import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpenceAction } from '../actions/deleteButton';

class TableLine extends Component {
  valueConverter = () => {
    const { value, exchangeRates } = this.props;
    const convertedValue = value * exchangeRates;
    return Number(convertedValue.toFixed(2));
  }

  delete = () => {
    console.log('Estou sendo chamada!');
    const { id, deleteExpense, expenses } = this.props;
    console.log('Olá, Eu sou o ', id);
    const newExpenses = expenses.filter((cost) => cost.id !== id);
    deleteExpense(newExpenses);
  }

  render() {
    const {
      description,
      tag,
      paymentMethod,
      value,
      currency,
      exchangeRates,
    } = this.props;

    return (
      <tr>
        <td>{ description }</td>
        <td>{ tag }</td>
        <td>{ paymentMethod }</td>
        <td>{ value }</td>
        <td>{ currency.split('/')[0] }</td>
        <td>{ exchangeRates.toFixed(2) }</td>
        <td>{ this.valueConverter() }</td>
        <td>Real</td>
        <td>
          <button
            type="button"
            data-testid="edit-btn"
          >
            Editar
          </button>
          <button
            type="button"
            data-testid="delete-btn"
            onClick={ this.delete }
          >
            Excluir
          </button>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (newExpenses) => dispatch(deleteExpenceAction(newExpenses)),
});

TableLine.propTypes = {
  description: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  paymentMethod: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  exchangeRates: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  expenses: PropTypes.shape.isRequired,
  deleteExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TableLine);
