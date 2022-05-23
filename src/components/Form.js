import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { currencyFetch } from '../actions/currencyFetchAction';
import { currencyFetchButton } from '../actions/formButton';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: '',
      currency: '',
      method: '',
      tag: '',
      description: '',
    };
  }

  async componentDidMount() {
    const { fetch } = this.props;
    await fetch();
  }

  formHandler = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  submitHandler = (event) => {
    event.preventDefault();
    const { stateSubmit } = this.props;
    this.setState((prevState) => ({
      id: prevState.id + 1,
    }));
    stateSubmit(this.state);
    this.setState(() => ({
      value: '',
      currency: '',
      method: '',
      tag: '',
      description: '',
    }));
  }

  render() {
    const { initialsCurrencys } = this.props;
    const {
      value,
      currency,
      method,
      tag,
      description,
    } = this.state;

    return (
      <form>

        <label htmlFor="Value">
          Valor:
          <input
            id="Value"
            name="value"
            type="number"
            value={ value }
            onChange={ this.formHandler }
            placeholder="Valor"
            data-testid="value-input"
          />
        </label>

        <label htmlFor="Moeda">
          Moeda:
          <select
            id="Moeda"
            name="currency"
            value={ currency }
            onChange={ this.formHandler }
          >
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

        <label htmlFor="Method">
          Método de Pagamento:
          <select
            id="Method"
            name="method"
            value={ method }
            onChange={ this.formHandler }
            data-testid="method-input"
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="Tag">
          Categoria:
          <select
            id="Tag"
            name="tag"
            value={ tag }
            onChange={ this.formHandler }
            data-testid="tag-input"
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>

        <label htmlFor="Description">
          Descrição:
          <input
            id="Description"
            name="description"
            type="text"
            value={ description }
            onChange={ this.formHandler }
            placeholder="Super Mercado"
            data-testid="description-input"
          />
        </label>

        <button
          type="submit"
          onClick={ this.submitHandler }
        >
          Adicionar despesa

        </button>

      </form>

    );
  }
}

const mapStateToProps = (state) => ({
  initialsCurrencys: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetch: () => dispatch(currencyFetch()),
  stateSubmit: (state) => dispatch(currencyFetchButton(state)),
});

Form.propTypes = {
  initialsCurrencys: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetch: PropTypes.func.isRequired,
  stateSubmit: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
