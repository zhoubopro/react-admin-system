import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from '../App';
import Login from '../pages/login/index';
import Admin from '../pages/admin/index';
import Home from "../pages/home";
import SmallProgram from "../pages/tool/smallProgram";
import Buttons from "../pages/tool/buttons";

export default class Routes extends Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path='/login' component={Login}/>
            <Route path='/' render={() =>
              <Admin>
                <Switch>
                  <Route path='/home' component={Home}/>
                  <Route path='/tool/smallProgram' component={SmallProgram}/>
                  <Route path='/tool/buttons' component={Buttons}/>
                  <Redirect to="/home"/>
                </Switch>
              </Admin>
            }/>
          </Switch>
        </App>
      </HashRouter>
    )
  }
}
