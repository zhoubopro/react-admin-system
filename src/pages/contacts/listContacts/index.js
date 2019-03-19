import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import './index.less';

class Contacts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  // 检测props 类型
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContacts: PropTypes.func
  };

  // 更新查询value
  updateQuery = (query) => {
    this.setState({ query: query.trim() });
  };

  // 清除查询value
  clearQuery = () => {
    this.setState({ query: '' });
  };

  render() {
    const { contacts, onDeleteContacts } = this.props;
    const { query } = this.state;

    let showingContacts;
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i');
      showingContacts = contacts.filter(contact => match.test(contact.name))
    }
    else {
      showingContacts = contacts
    }

    showingContacts.sort(sortBy('name'));

    return (
      <div className="list-contacts-wrap">
        <div className="list-contacts-top">
          <input
            className='search-contacts'
            type='text'
            placeholder='Search contacts'
            value={query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />

          <Link
            to='/contacts/create'
            className='add-contact'
            title="添加联系人"
          >添加联系人</Link>
        </div>

        {showingContacts.length !== contacts.length && (
          <div className='showing-contacts'>
            <span>当前显示 {showingContacts.length} 名联系人/共 {contacts.length} 人</span>
            <button onClick={this.clearQuery}>显示全部</button>
          </div>
        )}
        <ol>
          {
            showingContacts.map(
              contact => (
                <li key={contact.id} className="contact-list-item">
                  <div className='contact-avatar' style={{
                    backgroundImage: `url(${contact.avatarURL})`
                  }}/>
                  <div className='contact-details'>
                    <p>{contact.name}</p>
                    <p>{contact.email}</p>
                  </div>
                  <button onClick={() => onDeleteContacts(contact)} className='contact-remove'>
                    Remove
                  </button>
                </li>
              )
            )
          }
        </ol>
      </div>
    );
  }
}

export default Contacts;
