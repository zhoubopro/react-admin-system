import React from 'react';
import { Breadcrumb, Icon } from 'antd';
import './index.less';

const BreadcrumbItem = Breadcrumb.Item;

class Breadcrumbs extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <Breadcrumb className="breadcrumb">
        <BreadcrumbItem>
          <Icon type="home"/>
          <span>home</span>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Icon type="user"/>
          <span>Application List</span>
        </BreadcrumbItem>
        <BreadcrumbItem>
          Application
        </BreadcrumbItem>
      </Breadcrumb>
    );
  }
}

export default Breadcrumbs;
