import React, { Component } from 'react';
import { Card, Button } from 'antd';
import bubbleImg from '../../../assets/sort/bubble.gif';

export default class Demo extends Component {

  componentDidMount() {
    const arr = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24];

    console.log(this.bubbleSort(arr));
  }

  swap = (arr, indexA, indexB) => {
    [arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]];
  };

  bubbleSort = arr => {
    let length = arr.length - 1;
    for (let i = length; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (arr[j] > arr[j + 1]) {
          this.swap(arr, j, j + 1);
        }
      }
    }
    return arr;
  };

  render() {
    return (
      <Card>
        <div>
          冒泡排序（Bubble Sort）也是一种简单直观的排序算法。
          它重复地走访过要排序的数列，一次比较两个元素，如果他们的顺序错误就把他们交换过来。
          走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。
          这个算法的名字由来是因为越小的元素会经由交换慢慢“浮”到数列的顶端。
        </div>
        <h1>算法步骤</h1>
        <div>
          1.比较相邻的元素。如果第一个比第二个大，就交换他们两个。<br/>
          2.对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。<br/>
          3.针对所有的元素重复以上的步骤，除了最后一个。<br/>
          4.持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。<br/>
        </div>
        <h1>算法演示</h1>
        <img src={bubbleImg} style={{ height: '190px' }} alt=""/>
        <h1>排序动画过程解释</h1>
        <div>
          1.将天平放在序列的右端，并比较天平左右的数字<br/>
          2.在这种情况下我们比较 3 和 8<br/>
          3.比较后如果右边的数字较小，则被交换<br/>
          4.因为 8 大于 3 ，所以数字不用交换<br/>
          5.比较完成后，将天平向左移动一个位置，比较数字<br/>
          6.因为 3 大于 2 ，所以数字不用交换<br/>
          7.比较完成后，逐一移动天平，比较数字<br/>
          8.此时 2 小于 4 ，所以左右的数字互相交换<br/>
          9.重复同样的操作，直到天平移动到左端<br/>
          10.。。。。。。<br/>
          11.天平到达左端<br/>
          12.经过上述的操作，数列中最小的数字已经移动到左端<br/>
          13.将天平返回右端<br/>
          14.重复相同的操作，直到所有数字都被排序<br/>
          15.。。。。。。<br/>
          16.吐完泡泡了<br/>
        </div>
        <h1>代码</h1>
        <pre>
          {`
const arr = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24];

this.bubbleSort(arr); // [7, 9, 10, 20, 24, 30, 31, 35, 60, 65, 65, 77, 81, 91, 96]

swap = (arr, indexA, indexB) => {
    [arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]];
  };

bubbleSort = arr => {
  let length = arr.length - 1;
  for (let i = length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        this.swap(arr, j, j + 1);
      }
    }
  }
  return arr;
};
          `}
        </pre>
      </Card>
    )
  }
}
