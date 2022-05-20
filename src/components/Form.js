import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { currencyFetch } from '../actions/currencyFetchAction';

class Form extends Component {
  async componentDidMount() {
    const { fetch } = this.props;
    await fetch();
  }

  render() {
    const { initialsCurrencys } = this.props;
    return (
      <forms>
        <label htmlFor="Valor">
          Valor:
          <input
            name="Valor"
            type="text"
            placeholder="Valor"
            data-testid="value-input"
          />
        </label>
        <label htmlFor="Moeda">
          Moeda:
          <select id="Moeda">
            {initialsCurrencys.map((currencys) => (
              <option
                key={ currencys }
                value={ currencys }
              >
                { currencys }
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="Método de Pagamento">
          Método de Pagamento:
          <select data-testid="method-input">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="Categoria">
          Categoria:
          <select data-testid="tag-input">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <lable htmlFor="Descrição">
          Descrição:
          <input
            name="Descrição"
            type="text"
            placeholder="Super Mercado"
            data-testid="description-input"
          />
        </lable>
        {/* <button
          type="submit"
          onClick={ this. }
          /> */}
      </forms>

    );
  }
}

const mapStateToProps = (state) => ({
  initialsCurrencys: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetch: () => dispatch(currencyFetch()),
});

Form.propTypes = {
  initialsCurrencys: PropTypes.shape.isRequired,
  fetch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
