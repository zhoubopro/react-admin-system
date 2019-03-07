import React from 'react';
import { Card, Button, Radio, Icon } from 'antd';
import './index.less';

class Buttons extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      size: 'default'
    }
  }

  handleLoading = () => {
    this.setState({
      loading: true
    });
  };

  handleCloseLoading = () => {
    this.setState({
      loading: false
    });
  };

  handleChange = (e) => {
    this.setState({
      size: e.target.value
    })
  };

  render() {
    return (
      <div className='buttons-wrap'>
        <Card title="基础按钮" className="card-wrap">
          <Button type="primary">基础按钮</Button>
          <Button>基础按钮</Button>
          <Button type="dashed">基础按钮</Button>
          <Button type="danger">基础按钮</Button>
          <Button disabled>基础按钮</Button>
        </Card>
        <Card title="图形按钮" className="card-wrap">
          <Button icon="plus">创建</Button>
          <Button icon="edit">编辑</Button>
          <Button icon="delete">删除</Button>
          <Button shape="circle" icon="search"></Button>
          <Button type="primary" icon="search">搜索</Button>
          <Button type="primary" icon="download">下载</Button>
        </Card>
        <Card title="Loading按钮" className="card-wrap">
          <Button type="primary" loading={this.state.loading}>确定</Button>
          <Button type="primary" shape="circle" loading={this.state.loading}></Button>
          <Button loading={this.state.loading} onClick={this.handleLoading}>点击加载</Button>
          <Button shape="circle" loading={this.state.loading}></Button>
          <Button type="primary" onClick={this.handleCloseLoading}>关闭</Button>
        </Card>
        <Card title="按钮组" className="card-wrap">
          <Button.Group>
            <Button type="primary">
              <Icon type="left"/>返回
            </Button>
            <Button type="primary">
              前进<Icon type="right"/>
            </Button>
          </Button.Group>
        </Card>
        <Card title="按钮尺寸" className="card-wrap">
          <Radio.Group value={this.state.size} onChange={this.handleChange}>
            <Radio value="small">small</Radio>
            <Radio value="default">default</Radio>
            <Radio value="large">large</Radio>
          </Radio.Group>
          <Button type="primary" size={this.state.size}>Button</Button>
          <Button size={this.state.size}>Button</Button>
          <Button type="dashed" size={this.state.size}>Button</Button>
          <Button type="danger" size={this.state.size}>Button</Button>
        </Card>
      </div>
    );
  }
}

export default Buttons;
