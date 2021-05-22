import React, { Component } from 'react';
import { Icon, Form, Card, Input, Button } from 'antd';
import './index.less';

const FormItem = Form.Item;

class Reduce extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0
    };

    this.iceCreamStats = [
      { name: 'Amanda', gallonsEaten: Math.ceil(Math.random() * 10) },
      { name: 'Geoff', gallonsEaten: Math.round(Math.random()) },
      { name: 'Tyler', gallonsEaten: Math.floor(Math.random() * 50) },
      { name: 'Richard', gallonsEaten: Math.round(Math.random() * 100) },
      { name: 'Bo', gallonsEaten: 100 }
    ]
  }

  componentDidMount() {
    // 计算总数
    let total = this.iceCreamStats.reduce((accumulator, currentValue) => {
      console.log(accumulator);
      return accumulator + currentValue.gallonsEaten
    }, 0);
    console.log(total, this.iceCreamStats);
    this.setState({
      total
    });
  }

  render() {
    return (
      <div className='reduce-wrap'>
        total：{this.state.total}
      </div>
    );
  }
}

export default Form.create()(Reduce);
