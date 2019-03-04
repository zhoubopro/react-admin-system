import React, { Component, Fragment } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from '../App';
import Admin from '../pages/admin/index';
import Home from "../pages/home";
import SmallProgram from "../pages/tool/smallProgram";

export default class Routes extends Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path='/' render={() =>
              <Admin>
                <Switch>
                  <Route path='/home' component={Home}/>
                  <Route path='/tool/smallProgram' component={SmallProgram}/>
                </Switch>
              </Admin>
            }/>
          </Switch>
        </App>
      </HashRouter>
    )
  }
}
