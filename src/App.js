import React, { Component } from 'react';
// import './styles/reset.less';
import { Button } from 'antd';

class App extends Component {

  render() {
    return (
      <div className="App">
        <span>hello</span>
        <span>world</span>
        <Button className="primary">Button</Button>
      </div>
    );
  }
}

export default App;
