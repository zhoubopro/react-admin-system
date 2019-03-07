import React from 'react';
import { Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom';
import MenuConfig from './../../config/menu.config';
import './index.less';

const SubMenu = Menu.SubMenu;

class NavLeft extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      menuTreeNode: []
    }
  }

  componentWillMount() {
    const menuTreeNode = this.renderMenu(MenuConfig);

    this.setState({
      menuTreeNode
    })
  }

  // 菜单渲染
  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu
            key={item.key}
            title={<span><Icon type={item.icons ? item.icons : 'null'}/>{item.title}</span>}
          >
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item title={item.title} key={item.key}>
        <NavLink to={item.key}><Icon type={item.icons ? item.icons : 'null'} spin={item.spin}/>{item.title}</NavLink>
      </Menu.Item>
    })
  };

  render() {
    return (
      <div className="nav-left">
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt="antd-logo"/>
          <h1>github website</h1>
        </div>
        <Menu
          onClick={this.handleClick}
          theme="dark"
        >
          {this.state.menuTreeNode}
        </Menu>
      </div>
    );
  }
}

export default NavLeft;