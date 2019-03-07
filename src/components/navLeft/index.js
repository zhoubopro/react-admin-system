import React from 'react';
import { Layout, Menu, Switch, Icon } from 'antd';
import { NavLink } from 'react-router-dom';
import MenuConfig from './../../config/menu.config';
import './index.less';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class NavLeft extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      menuTreeNode: [],
      theme: 'dark',
      mode: 'inline'
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

  changeTheme = value => {
    this.setState({
      theme: value ? 'dark' : 'light',
    })
  };

  changeMode = value => {
    this.setState({
      mode: value ? 'inline' : 'vertical',
    })
  }

  render() {
    return (
      <Sider
        theme={this.state.theme}
        className="nav-left"
        trigger={null}
        breakpoint="lg"
        style={{ overflowY: 'auto' }}
      >
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt="antd-logo"/>
          <h1>🌼管理系统🍄</h1>
        </div>
        <div className="theme-switch">
          <Switch
            checked={this.state.theme === 'dark'}
            onChange={this.changeTheme}
            checkedChildren="Dark"
            unCheckedChildren="Light"
          />
          <Switch
            checked={this.state.mode === 'inline'}
            onChange={this.changeMode}
            checkedChildren="inline"
            unCheckedChildren="vertical"
          />
        </div>
        <Menu
          theme={this.state.theme}
          onClick={this.handleClick}
          mode={this.state.mode}
          // selectedKeys={this.state.selectedKey}
          // openKeys={this.state.firstHide ? null : [this.state.openKey]}
          // onOpenChange={this.openMenu}
        >
          {this.state.menuTreeNode}
        </Menu>
      </Sider>
    );
  }
}

export default NavLeft;
