import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.less';

class Error extends Component {

  render() {
    return (
      <div className="error-wrap">
        出错啦！找不到该路径<Link to='/home' title="返回首页"> 返回首页 </Link>
      </div>
    );
  }
}

export default Error;
