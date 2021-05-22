import React, { Component } from 'react';
import First from './first';
import { Tabs } from 'antd';
import './index.less';

const TabPane = Tabs.TabPane;

class WebGL extends Component {

  render() {
    return (
      <div className='small-program-wrap'>
        <Tabs defaultActiveKey="1">
          <TabPane tab="First" key="1">
            <First />
          </TabPane>
          <TabPane tab="Reduce" key="2">
          </TabPane>
          <TabPane tab="css-center" key="3" >
          </TabPane>
          <TabPane tab="建设中" key="4" disabled>Content of Tab Pane 3</TabPane>
        </Tabs>
      </div>
    );
  }
}

export default WebGL;
