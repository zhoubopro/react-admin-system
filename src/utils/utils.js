import React from 'react';
import { Select } from 'antd';

const { Option } = Select;
export default {
  // 保存本地存储
  setStorage(name, data) {
    const dataType = typeof data;
    const typeArray = ['number', 'string', 'boolean'];
    if (dataType === 'object') {
      window.localStorage.setItem(name, JSON.stringify(data));
    }
    else if (typeArray.indexOf(dataType) >= 0) {
      window.localStorage.setItem(name, data);
    }
    else {
      alert('setStorage not is type');
    }
  },
  // 获取本地存储
  getStorage(name) {
    let data = window.localStorage.getItem(name);
    return data ? JSON.parse(data) : '';
  },
  // 删除本地存储
  removeStorage(name) {
    window.localStorage.removeItem(name);
  },
  formateDate(time) {
    if (!time) return '';
    let date = new Date(time);
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  },
  pagination(data, callback) {
    return {
      onChange: (current) => {
        callback(current)
      },
      current: data.result.page,
      pageSize: data.result.page_size,
      total: data.result.total_count,
      showTotal: () => {
        return `共${data.result.total_count}条`
      },
      showQuickJumper: true
    }
  },
  // 格式化金额,单位:分(eg:430分=4.30元)
  formatFee(fee, suffix = '') {
    if (!fee) {
      return 0;
    }
    return Number(fee).toFixed(2) + suffix;
  },
  // 格式化公里（eg:3000 = 3公里）
  formatMileage(mileage, text) {
    if (!mileage) {
      return 0;
    }
    if (mileage >= 1000) {
      text = text || " km";
      return Math.floor(mileage / 100) / 10 + text;
    } else {
      text = text || " m";
      return mileage + text;
    }
  },
  // 隐藏手机号中间4位
  formatPhone(phone) {
    phone += '';
    return phone.replace(/(\d{3})\d*(\d{4})/g, '$1***$2')
  },
  // 隐藏身份证号中11位
  formatIdentity(number) {
    number += '';
    return number.replace(/(\d{3})\d*(\d{4})/g, '$1***********$2')
  },
  getOptionList(data) {
    if (!data) {
      return [];
    }
    let options = [] //[<Option value="0" key="all_key">全部</Option>];
    data.map(item => {
      options.push(<Option value={item.value} key={item}>{item.name}</Option>)
    })
    return options;
  },
  /**
   * ETable 行点击通用函数
   * @param {*选中行的索引} selectedRowKeys
   * @param {*选中行对象} selectedItem
   */
  updateSelectedItem(selectedRowKeys, selectedRows, selectedIds) {
    if (selectedIds) {
      this.setState({
        selectedRowKeys,
        selectedIds: selectedIds,
        selectedItem: selectedRows
      })
    } else {
      this.setState({
        selectedRowKeys,
        selectedItem: selectedRows
      })
    }
  },
}
