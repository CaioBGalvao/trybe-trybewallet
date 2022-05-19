import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { userEmail } = this.props;
    return (
      <>
        <h4
          data-testid="email-field"
        >
          { userEmail }
        </h4>
        <h5
          data-testid="total-field"
        >
          `$
          {0}
          `

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
});

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
