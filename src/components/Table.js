import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

class Table extends Component {
  render() {
    return (
      <table>
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
      </table>
    );
  }
}

// const mapStateToProps = (state) => ({
//   expenses: state.wallet.expenses,
// });

// Table.propTypes = {
//   expenses: PropTypes.arrayOf(PropTypes.shape).isRequired,
// };

// export default connect(mapStateToProps, null)(Table);
export default Table;
