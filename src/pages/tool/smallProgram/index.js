import React, { Component } from 'react';
import { Tabs } from 'antd';
import Bmi from '../../../components/bmi';
import './index.less';

const TabPane = Tabs.TabPane;

class SmallProgram extends Component {

  render() {
    return (
      <div className='small-program-wrap'>
        <Tabs defaultActiveKey="1">
          <TabPane tab="身体指数" key="1"><Bmi/></TabPane>
          <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
          <TabPane tab="建设中" key="3" disabled>Content of Tab Pane 3</TabPane>
        </Tabs>
      </div>
    );
  }
}

export default SmallProgram;
