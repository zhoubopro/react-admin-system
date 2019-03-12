import React, { Component } from 'react';
import { Card, Button, Table, Form, Select } from 'antd';
import FilterForm from '../../components/filterForm';
import axios from '../../config/axios.config';
import Utils from '../../utils/utils';
import { columns, formList } from './columns';

import './index.less';

const FormItem = Form.Item;
const Option = Select.Option;

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      pagination: 1,
      selectedRowKeys: [],  // 当前行keys
    };
  }

  // 获取订单列表
  orderList = () => {
    axios.ajax({
      url: '/order/list',
      data: {}
    }).then(res => {
      let list = res.result.item_list.map((item, index) => {
        item.key = index;
        return item;
      });
      this.setState({
        list
      })
    })
  };

  componentDidMount() {
    this.orderList();
  }

  handleFilter = (params) => {
    this.params = params;
    this.orderList();
  };

  // 选中当前行
  onRowClick = (record, index) => {
    this.setState({
      selectedRowKeys: [index],
      selectedItem: record
    })
  };

  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      type: 'radio',
      selectedRowKeys
    };
    return (
      <div className="order-wrap">
        <Card>
          <FilterForm formList={formList} filterSubmit={this.handleFilter}/>
          <Button>订单详情</Button>
          <Button>结束订单</Button>
        </Card>
        <Card>
          <Table
            bordered
            columns={columns}
            dataSource={this.state.list}
            pagination={this.state.pagination}
            rowSelection={rowSelection}
            onRow={(record, index) => {
              return {
                onClick: () => {
                  this.onRowClick(record, index);
                }
              };
            }}
          />
        </Card>
      </div>
    )
  }
}

export default Order;
