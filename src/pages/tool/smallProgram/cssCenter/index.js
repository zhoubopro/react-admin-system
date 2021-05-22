import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import './index.less';
// https://github.com/simonguo/react-code-view
// https://rsuitejs.com/components/icon
class CssCenter extends Component {

  render() {
    const markdown = `
# 一、水平居中
## 1.1 行内元素
*  [一起搞懂 CSS 水平居中与垂直居中的16个方法](https://juejin.im/post/5c8f9e595188252db756920c?utm_source=gold_browser_extension)
## HTML block below
`
    return (
      <div className='css-center-wrap'>
        <ReactMarkdown
          source={markdown}
          // escapeHtml={false}
        />
      </div>
    );
  }
}

export default CssCenter;
