import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginWallet } from '../actions/loginWallet';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isButtonDisabled: true,
    };
  }

  inputHandle = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => {
      const { email, password } = this.state;
      const re = /\S+@\S+\.\S+/;
      const result = re.test(email);
      const NUMBER_SIX = 6;
      if (result === true && password.length >= NUMBER_SIX) {
        this.setState({
          isButtonDisabled: false,
        });
      } else {
        this.setState({
          isButtonDisabled: true,
        });
      }
    });
  };

loginHandle = (event) => {
  event.preventDefault();
  const { history, login } = this.props;
  const { email } = this.state;
  login(email);
  history.push('/carteira');
}

render() {
  const { email, password, isButtonDisabled } = this.state;
  return (
    <div>
      <h1>Trybe Wallet</h1>
      <form>
        <label htmlFor="email">
          <input
            data-testid="email-input"
            name="email"
            placeholder="ada@lovelance.com"
            type="email"
            value={ email }
            onChange={ this.inputHandle }
          />
        </label>
        <label htmlFor="password">
          <input
            data-testid="password-input"
            name="password"
            placeholder="*********"
            type="password"
            value={ password }
            onChange={ this.inputHandle }
          />
        </label>
        <button
          type="submit"
          disabled={ isButtonDisabled }
          onClick={ this.loginHandle }
        >
          Entrar

        </button>
      </form>
    </div>
  );
}
}

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(loginWallet(email)),
});

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
  login: PropTypes.func.isRequired,
};

Login.defaultProps = {
  history: null,
};

export default connect(null, mapDispatchToProps)(Login);
