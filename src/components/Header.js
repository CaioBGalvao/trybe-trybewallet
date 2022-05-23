import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  expensesCalculator = () => {
    const { expenses } = this.props;
    let result = 0;
    expenses.forEach((info) => {
      const total = Number(info.value) * Number(info.exchangeRates[info.currency].ask);
      result += total;
      // const { spend } = this.state;
      // this.setState({
      //   spend: spend + total,
      // });
    });
    return result.toFixed(2);
  }

  render() {
    const { userEmail } = this.props;
    return (
      <>
        <h4
          data-testid="email-field"
        >
          Email:
          { userEmail }
        </h4>
        <h5>Despesa mensal: R$</h5>
        <h5
          data-testid="total-field"
        >
          { this.expensesCalculator() }
        </h5>
        <h5
          data-testid="header-currency-field"
        >
          BRL
        </h5>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default connect(mapStateToProps, null)(Header);
