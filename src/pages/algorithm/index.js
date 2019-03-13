import React, { Component } from 'react';
import { Tabs } from 'antd';
import Demo from './components/demo';
import Bubble from './components/bubble.sort';
import './index.less';

const TabPane = Tabs.TabPane;

class Algorithm extends Component {

  render() {
    return (
      <div className='algorithm-wrap'>
        <Tabs defaultActiveKey="1">
          <TabPane tab="DEMO" key="1"><Demo/></TabPane>
          <TabPane tab="冒泡排序" key="2">
            <Bubble/>
          </TabPane>
          <TabPane tab="建设中" key="3" disabled>Content of Tab Pane 3</TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Algorithm;
