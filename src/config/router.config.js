import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from '../App';
import Login from '../pages/login/index';
import Admin from '../pages/admin/index';
import Home from '../pages/home';

import Contacts from '../pages/contacts';
import CreateContact from '../pages/contacts/createContact';

// tool
import SmallProgram from "../pages/tool/smallProgram";
import Carousel from "../pages/tool/carousel";
import Gallery from "../pages/tool/gallery";

// antd
import Buttons from "../pages/antd/buttons";
import Modals from "../pages/antd/modals";
import Loadings from "../pages/antd/loadings";
import Notice from "../pages/antd/notice";
import Messages from "../pages/antd/messages";
import Tabs from "../pages/antd/tabs";

import Order from "../pages/order/index";

import Algorithm from "../pages/algorithm";

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
                  <Route path='/contacts' render={()=>(
                    <Switch>
                      <Route path='/' component={Contacts}/>
                      <Route path='/create' component={CreateContact}/>
                    </Switch>
                  )}/>

                  <Route path='/tool/smallProgram' component={SmallProgram}/>
                  <Route path='/tool/carousel' component={Carousel}/>
                  <Route path='/tool/gallery' component={Gallery}/>

                  <Route path='/antd/buttons' component={Buttons}/>
                  <Route path='/antd/modals' component={Modals}/>
                  <Route path='/antd/loadings' component={Loadings}/>
                  <Route path='/antd/notice' component={Notice}/>
                  <Route path='/antd/messages' component={Messages}/>
                  <Route path='/antd/tabs' component={Tabs}/>

                  <Route path='/order' component={Order}/>

                  <Route path='/algorithm' component={Algorithm}/>

                  {/*<Redirect to="/home"/>*/}
                </Switch>
              </Admin>
            }/>

          </Switch>
        </App>
      </HashRouter>
    )
  }
}
