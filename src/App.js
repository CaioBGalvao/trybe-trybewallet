import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={ Login } />
        <Route path="/carteira" exact component={ Wallet } />
      </Switch>
    );
  }
}
