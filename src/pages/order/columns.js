const columns = [
  {
    title: '订单编号',
    dataIndex: 'order_sn'
  },
  {
    title: '车辆编号',
    dataIndex: 'bike_sn'
  },
  {
    title: '用户名',
    dataIndex: 'user_name'
  },
  {
    title: '手机号',
    dataIndex: 'mobile'
  },
  {
    title: '里程',
    dataIndex: 'distance',
    render(distance) {
      return distance / 1000 + 'Km';
    }
  },
  {
    title: '行驶时长',
    dataIndex: 'total_time'
  },
  {
    title: '状态',
    dataIndex: 'status'
  },
  {
    title: '开始时间',
    dataIndex: 'start_time'
  },
  {
    title: '结束时间',
    dataIndex: 'end_time'
  },
  {
    title: '订单金额',
    dataIndex: 'total_fee'
  },
  {
    title: '实付金额',
    dataIndex: 'user_pay'
  }
];

const formList = [
  {
    type: 'SELECT',
    label: '城市',
    field: 'city',
    placeholder: '全部',
    initialValue: '1',
    width: 80,
    list: [{ value: '0', name: '全部' }, { value: '1', name: '北京' }, { value: '2', name: '天津' }, { value: '3', name: '上海' }]
  },
  {
    type: '时间查询'
  },
  {
    type: 'SELECT',
    label: '订单状态',
    field: 'order_status',
    placeholder: '全部',
    initialValue: '1',
    width: 100,
    list: [{ value: '0', name: '全部' }, { value: '1', name: '进行中' }, { value: '2', name: '结束行程' }]
  }
];

export {
  columns,
  formList
}
