import React, { Component } from 'react';
import { Layout } from 'antd';
import Headers from '../../components/headers';
import Footers from '../../components/footers';
import NavLeft from '../../components/navLeft/index';
import Breadcrumbs from '../../components/breadcrumbs';
import '../../styles/common.less';
import './index.less';
const { Content } = Layout;
class Admin extends Component {

  render() {
    return (
      <Layout style={{ height: '100%' }}>
        <NavLeft/>
        <Layout>
          <Headers/>
          <Breadcrumbs/>
          <Content className="content-wrap">
            {this.props.children}
          </Content>
          <Footers/>
        </Layout>
      </Layout>
    );
  }
}

export default Admin;
