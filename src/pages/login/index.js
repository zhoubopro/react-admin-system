import React, { Component } from 'react';
import { Form, Input, Button, notification, Icon } from 'antd';
// import { Link } from 'react-router-dom';
import Utils from '../../utils/utils';
import './index.less'

const FormItem = Form.Item;

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    Utils.removeStorage('userInfo');
  }

  componentDidMount() {
    this.openNotificationWithIcon('info', <Icon type="user" style={{ color: '#108ee9' }}/>);
  }

  handleSubmit = (e) => {
    const { form } = this.props;
    const { getFieldsValue } = form;
    e.preventDefault();
    let username = getFieldsValue().username;
    let password = getFieldsValue().password;
    if (username === 'admin' && password === '123456') {
      // 表单的路由处理
      Utils.setStorage('userInfo', {username, password});
      this.props.history.push('/home');
    }
    else {
      this.openNotificationWithIcon('error');
    }
  };

  // 返回一个弹框对象，提示用户名和密码
  openNotificationWithIcon = (type, icon) => {
    notification[type]({
      message: '登陆提示',
      description: '账号：admin，密码：123456',
      duration: 10,  // 10s 后关闭
      icon: icon,
    })
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    };
    return (
      <div className="login-wrap">
        <div className="login-box-wrap">
          <p><img src="/assets/logo-ant.svg" alt="logo"/>后台通用管理系统</p>
          <div className="login-form-wrap">
            <Form onSubmit={this.handleSubmit}>
              <FormItem label="账号" {...formItemLayout}>
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: '请输入账号' }],
                })(
                  <Input placeholder="Username：admin"/>
                )}
              </FormItem>
              <FormItem label="密码" {...formItemLayout}>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '请输入密码' }],
                })(
                  <Input type="password" placeholder="Password：123456"/>,
                )}
              </FormItem>
              <Button type="primary" htmlType="submit" className="login-btn">Login</Button>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

export default Form.create()(Login);
