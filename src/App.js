import React, { Component } from 'react';
import './styles/reset.less';

class App extends Component {

  render() {
    console.log(this.props.children)
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

export default App;
