const menuList = [
  {
    title: '首页',
    key: '/home',
    icons: 'home'
  },
  {
    title: "通讯录",
    key: "/contacts",
    icons: "user"
  },
  {
    title: '工具',
    key: '/tool',
    icons: 'tool',
    children: [
      {
        title: '小程序',
        key: '/tool/smallProgram',
        icons: 'smallProgram'
      },
      {
        title: '图片画廊',
        key: '/tool/gallery',
        icons: 'img',
      },
      {
        title: '轮播图',
        key: '/tool/carousel',
        icons: 'loop'
      },{
        title: 'WebGL',
        key: '/tool/webgl',
        icons: 'loop'
      }
    ]
  },
  {
    title: 'ant.design',
    key: 'antd',
    icons: 'alibaba',
    children: [
      {
        title: '按钮',
        key: '/antd/buttons',
      },
      {
        title: '弹框',
        key: '/antd/modals',
      },
      {
        title: 'Loading',
        key: '/antd/loadings',
        icons: 'sync',
        spin: 'true',
      },
      {
        title: '通知提醒',
        key: '/antd/notice',
        icons: 'sound'
      },
      {
        title: '全局Message',
        key: '/antd/messages',
        icons: 'message'
      },
      {
        title: 'Tab页签',
        key: '/antd/tabs',
        icons: 'tag',
      },
    ]
  },
  {
    title: '表单',
    key: '/form',
    icons: 'form',
    children: [
      {
        title: '登录',
        key: '/form/login',
      },
      {
        title: '注册',
        key: '/form/register',
      }
    ]
  },
  {
    title: '表格',
    key: '/table',
    icons: 'table',
    children: [
      {
        title: '基础表格',
        key: '/table/basic',
      },
      {
        title: '高级表格',
        key: '/table/high',
      }
    ]
  },
  {
    title: '排序与算法',
    key: '/algorithm'
  },
  {
    title: '富文本',
    key: '/rich'
  },
  {
    title: '城市管理',
    key: '/city'
  },
  {
    title: '订单管理',
    key: '/order',
    btnList: [
      {
        title: '订单详情',
        key: 'detail'
      },
      {
        title: '结束订单',
        key: 'finish'
      }
    ]
  },
  {
    title: '员工管理',
    key: '/user'
  },
  {
    title: '车辆地图',
    key: '/bikeMap'
  },
  {
    title: '图标',
    key: '/charts',
    children: [
      {
        title: '柱形图',
        key: '/charts/bar'
      },
      {
        title: '饼图',
        key: '/charts/pie'
      },
      {
        title: '折线图',
        key: '/charts/line'
      },
    ]
  },
  {
    title: '权限设置',
    key: '/permission'
  },
  {
    title: '友情链接',
    key: '/link',
    icons: 'user'
  }
];
export default menuList;
