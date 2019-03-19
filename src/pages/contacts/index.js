import React, { Component } from 'react';
import { Tabs } from 'antd';
import CreateContact from './createContact';
import ListContacts from './listContacts';
import * as contactsAPI from './contactsAPI';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import './index.less';

const TabPane = Tabs.TabPane;

class Contacts extends Component {
  state = {
    contacts: []
  };

  componentDidMount() {
    contactsAPI.getAll().then((contacts) => {
      this.setState({ contacts: contacts })
    })
  }


  removeContact = contact => {
    // 写法一 如果组件的新状态取决于 之前的状态 则使用 setState 的函数方法 而在其他情况下 则使用对象方法
    this.setState(
      state => ({
        contacts: state.contacts.filter(c => c.id !== contact.id)
      })
    )

    // 写法二
    // this.setState(state => {
    //   return {
    //     listContacts: state.listContacts.filter(c => c.id !== contact.id)
    //   }
    // });
  };



  render() {
    console.log(this.props);
    return (
      <div className="contacts-wrap">
        <ListContacts
          onDeleteContacts={this.removeContact}
          contacts={this.state.contacts}
        />
        <CreateContact
          onCreateContact={(contact) => {
            this.createContact(contact)
            this.props.history.push('/')
          }}
        />
      </div>
    );
  }
}

export default Contacts;
