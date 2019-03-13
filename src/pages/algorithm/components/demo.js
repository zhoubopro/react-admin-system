import React, { Component } from 'react';
import { Collapse, Icon, Button, TextInput } from 'antd';

const Panel = Collapse.Panel;

export default class Demo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      thief: '',
      thiefCode: '',
      activeKey: 1
    }
  }

  whoIsThief = (key, event) => {
    const THIEF = ['A', 'B', 'C', 'D'];
    for (let x = 0; x < 4; x++) {
      let dis_a = (x !== 0) ? 1 : 0;             // 我不是小偷
      let dis_b = (x === 2) ? 1 : 0;             // C是小偷
      let dis_c = (x === 3) ? 1 : 0;             // D是小偷
      let dis_d = 1 - dis_c;                     // C说的是不对的

      if ((dis_a + dis_b + dis_c + dis_d) === 3) // 三个人说的是真话
      {
        console.log(THIEF[x] + '：是小偷');
        this.setState({
          thief: ` ${THIEF[x]} ：是小偷 `
        })
      }
    }
    this.setState({
      thiefCode: key
    })
  };

  callback = key => {
    this.setState({
      thief: '',
      thiefCode: '',
      activeKey: key
    })
  };

  render() {
    return (
      <Collapse
        accordion
        defaultActiveKey={['1']}
        expandIcon={() => <Icon type="question-circle"/>}
        onChange={this.callback}
      >
        <Panel
          extra={<Icon type="setting"/>}
          header="警察抓了 A、B、C、D 四名罪犯，请问其中一名小偷是谁？"
          key="1"
        >
          <p>A说：“我不是小偷。” x !=0</p>
          <p>B说：“C 是小偷。” x = 2</p>
          <p>C说：“小偷肯定是 D。” x = 3</p>
          <p>D说：“C 是在冤枉人。” x != 3</p>
          <Button onClick={this.whoIsThief.bind(this, false)}>查看答案</Button> {this.state.thief}
          <Button onClick={this.whoIsThief.bind(this, true)}>查看解释</Button>
          <pre style={{ display: this.state.thiefCode ? 'block' : 'none' }}>
            {`
解释：
const THIEF = ['A', 'B', 'C', 'D'];
for (let x = 0; x < 4; x++) {
  let dis_a = (x !== 0) ? 1 : 0;             // 我不是小偷
  let dis_b = (x === 2) ? 1 : 0;             // C是小偷
  let dis_c = (x === 3) ? 1 : 0;             // D是小偷
  let dis_d = 1 - dis_c;                     // C说的是不对的

  if ((dis_a + dis_b + dis_c + dis_d) === 3) // 三个人说的是真话
  {
    console.log(THIEF[x] + '：是小偷');
  }
}
 `}
          </pre>
        </Panel>
        <Panel header="This is panel header 2" key="2">

        </Panel>
        <Panel header="问题正在赶来中..." disabled>

        </Panel>
      </Collapse>
    )
  }
}
