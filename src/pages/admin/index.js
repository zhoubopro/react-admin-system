import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Header from '../../components/header';
import Breadcrumbs from '../../components/breadcrumbs';
import Footer from '../../components/footer';
import NavLeft from '../../components/navLeft';
import '../../styles/common.less';

class Admin extends Component {

  render() {
    return (
      <Row className="container">
        <Col span={4} className="nav-left">
          <NavLeft/>
        </Col>
        <Col span={20} className="main">
          <Header/>
          <Breadcrumbs />
          <Row className="content">
            {this.props.children}
          </Row>
          <Footer/>
        </Col>
      </Row>
    );
  }
}

export default Admin;
