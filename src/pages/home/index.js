import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './index.less';

class Home extends Component {

  render() {
    return (
      <Row className="home-wrap">
        <Col>
          home 首页
        </Col>
      </Row>
    );
  }
}

export default Home;
