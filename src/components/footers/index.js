import React from 'react';
import { Layout } from 'antd'
import './index.less';

const { Footer } = Layout
export default class Footers extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      timer: 0
    }
  }

  tick = () => {
    const { timer } = this.state;
    this.setState({ timer: timer + 1 })
  };

  render() {
    return (
      <Footer className="footer">
        <span className="stay">
          您在这里累计用时
          <span className="time"> {this.state.timer} </span>
          秒
        </span>
        (推荐使用谷歌浏览器，可以获得更佳操作页面体验）
      </Footer>
    );
  }

  // 组件渲染后开始循环执行tick函数
  componentDidMount() {
    this.interval = setInterval(this.tick, 1000)
  }

  // 组件将要死亡时清除计时器，不清除也可以
  componentWillUnmount() {
    clearInterval(this.interval)
  }
}
