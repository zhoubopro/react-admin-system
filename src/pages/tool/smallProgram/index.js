import React, { Component } from 'react';
import { Tabs } from 'antd';
import Bmi from './bmi';
import Reduce from './reduce';
import CssCenter from './cssCenter';
import './index.less';

const TabPane = Tabs.TabPane;

class SmallProgram extends Component {

  render() {
    return (
      <div className='small-program-wrap'>
        <Tabs defaultActiveKey="2">
          <TabPane tab="身体指数" key="1">
            <Bmi/>
          </TabPane>
          <TabPane tab="Reduce" key="2">
            <Reduce/>
          </TabPane>
          <TabPane tab="css-center" key="3" >
            <CssCenter/>
          </TabPane>
          <TabPane tab="建设中" key="4" disabled>Content of Tab Pane 3</TabPane>
        </Tabs>
      </div>
    );
  }
}

export default SmallProgram;
