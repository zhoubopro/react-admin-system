import React, { Component, Fragment } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from '../App';
import Admin from '../pages/admin/index';

export default class Routes extends Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path='/' render={() =>
              <Admin></Admin>
            }/>
          </Switch>
        </App>
      </HashRouter>
    )
  }
}
