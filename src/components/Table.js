import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import TableLine from './TableLine';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((cost, index) => (
            <TableLine
              key={ uuid() }
              id={ index }
              description={ cost.description }
              tag={ cost.tag }
              paymentMethod={ cost.method }
              value={ Number(cost.value).toFixed(2) }
              currency={ cost.exchangeRates[cost.currency].name }
              exchangeRates={ Number(cost.exchangeRates[cost.currency].ask) } // <<< objeto?
              exchangeCurrencies={ cost }
            />
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default connect(mapStateToProps, null)(Table);
