import React, { Component } from 'react';
import { Icon, Form, Card, Input, Button } from 'antd';
import './index.less';

const FormItem = Form.Item;

class Bmi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bmi: '',
      level: '',
      dom: null
    }
  }

  // 提交
  handleSubmit = e => {
    e.preventDefault();
    // console.log('form', this.props.form.getFieldsValue());
    this.props.form.validateFields((err, values) => {
      if (err) {
        //   message.error('请输入体重和身高再进行计算!');
        return
      }
      let w = this.props.form.getFieldsValue().weight;
      let h = this.props.form.getFieldsValue().height;
      this.bmiCalc(w, h);
    });
  };

  bmiCalc = (weight, height) => {
    let bmi = (weight / ((height / 100) ** 2)).toFixed(1), level, dom;
    if (bmi < 18.5) {
      level = 0;
      dom = <Icon type="dislike"/>
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      level = 1;
      dom = <Icon type="like" spin/>
    } else if (bmi === 25) {
      level = 2;
      dom = <Icon type="smile"/>
    } else if (bmi >= 25 && bmi <= 29.9) {
      level = 3;
      dom = <Icon type="meh"/>
    } else if (bmi >= 30) {
      level = 4;
      dom = <Icon type="frown"/>
    }
    this.setState({ bmi: bmi, level: level, dom: dom })
  };

  // 重置
  handleReset = e => {
    e.preventDefault();
    this.props.form.resetFields();
    this.setState({ bmi: '', level: '', dom: null });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { level, dom } = this.state;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 2 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
    };
    const offsetLayout = {
      wrapperCol: {
        xs: 24,
        sm: {
          span: 12,
          offset: 2
        }
      }
    };

    return (
      <div className='bmi-wrap'>
        <Form onSubmit={this.handleSubmit}>
          <FormItem label='您的体重' {...formItemLayout}>
            {getFieldDecorator('weight', {
              rules: [{
                required: true, message: '请填写您的体重'
              }],
            })(
              <Input placeholder="您的体重/kg" addonBefore={<Icon type="flag"/>}/>
            )}
          </FormItem>
          <FormItem label='您的身高' {...formItemLayout}>
            {getFieldDecorator('height', {
              rules: [{
                required: true,
                message: '请填写您的身高'
              }],
            })(
              <Input placeholder="您的身高/cm" addonBefore={<Icon type="rocket"/>}/>
            )}
          </FormItem>
          <FormItem label='BMI指数' {...formItemLayout}>
            {getFieldDecorator('bmi', {
              value: this.state.bmi ? this.state.bmi : 0,
              initialValue: this.state.bmi
            })(
              <Input placeholder="BMI" disabled addonBefore={<Icon type="notification"/>}/>
            )}
          </FormItem>
          <FormItem
            label='BMI指数' {...formItemLayout}
            help={"腰围：男性：≧90公分，女性：≧80公分"}
          >
            <Card bodyStyle={{ padding: '10px 10px 0 10px' }}>
              <p className={level === 0 ? 'active' : ''}>
                {level === 0 ? dom : null} 偏瘦：{'< 18.5'}
              </p>
              <p className={level === 1 ? 'active' : ''}>
                {level === 1 ? dom : null} 正常：{'18.5～24.9'}
              </p>
              <p className={level === 2 ? 'active' : ''}>
                {level === 2 ? dom : null} 超重：{'= 25.0'}
              </p>
              <p className={level === 3 ? 'active' : ''}>
                {level === 3 ? dom : null} 偏胖：{'25.0～29.9'}
              </p>
              <p className={level === 4 ? 'active' : ''}>
                {level === 4 ? dom : null} 肥胖：{'> 30.0'}
              </p>
            </Card>
          </FormItem>
          <FormItem {...offsetLayout}>
            <Button className='btn' onClick={this.handleReset}>重置</Button>
            <Button type="primary" htmlType='submit' className='btn'>计算</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default Form.create()(Bmi);
