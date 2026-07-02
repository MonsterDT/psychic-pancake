// packageA/pages/order-detail/order-detail.js
const { ORDER_STATUS } = require('../../../utils/constants');

const STATUS_TEXT = {};
STATUS_TEXT[ORDER_STATUS.PENDING_PAY] = '待付款';
STATUS_TEXT[ORDER_STATUS.PENDING_SHIP] = '待发货';
STATUS_TEXT[ORDER_STATUS.PENDING_RECEIVE] = '待收货';
STATUS_TEXT[ORDER_STATUS.COMPLETED] = '已完成';
STATUS_TEXT[ORDER_STATUS.CANCELLED] = '已取消';

// 订单状态步骤条
function buildSteps(status) {
  const steps = [
    { key: 'submit', label: '提交订单', done: true },
    { key: 'pay', label: '付款成功', done: status !== ORDER_STATUS.PENDING_PAY },
    { key: 'ship', label: '商家发货', done: status === ORDER_STATUS.PENDING_RECEIVE || status === ORDER_STATUS.COMPLETED },
    { key: 'receive', label: '确认收货', done: status === ORDER_STATUS.COMPLETED },
    { key: 'done', label: '交易完成', done: status === ORDER_STATUS.COMPLETED }
  ];
  return steps;
}

// 根据 id 生成模拟订单详情
function buildMockOrder(id) {
  const baseOrder = {
    id: id || 'ORD20260620001',
    status: ORDER_STATUS.PENDING_RECEIVE,
    totalAmount: 535.00,
    goodsAmount: 530.00,
    freight: 5.00,
    discount: 0,
    createTime: '2026-06-15 09:15:00',
    payTime: '2026-06-15 09:15:30',
    shipTime: '2026-06-16 10:20:00',
    address: {
      name: '王思颖',
      phone: '138****6688',
      region: '上海市 上海市 浦东新区',
      detail: '张江高科技园区博云路2号'
    },
    items: [
      { id: 'p018', name: 'MAC子弹头口红 Chili', img: 'lipstick4', price: 190, qty: 1 },
      { id: 'p009', name: '3CE九宫格眼影盘 Overtake', img: 'eyeshadow2', price: 245, qty: 1 }
    ]
  };
  // 简单根据 id 末位切换状态，便于演示不同详情
  const last = id ? id.charAt(id.length - 1) : '0';
  if (last === '1' || last === 'a') {
    baseOrder.status = ORDER_STATUS.PENDING_PAY;
    baseOrder.id = id;
  } else if (last === '2' || last === 'b') {
    baseOrder.status = ORDER_STATUS.PENDING_SHIP;
    baseOrder.id = id;
  } else if (last === '4' || last === 'd') {
    baseOrder.status = ORDER_STATUS.COMPLETED;
    baseOrder.id = id;
  }
  return baseOrder;
}

Page({
  data: {
    order: null,
    steps: [],
    statusText: STATUS_TEXT,
    statusLabel: ''
  },

  onLoad(options) {
    const id = options && options.id ? options.id : '';
    const order = buildMockOrder(id);
    this.setData({
      order: order,
      steps: buildSteps(order.status),
      statusLabel: STATUS_TEXT[order.status] || ''
    });
  },

  onPay() {
    wx.showToast({ title: '正在跳转支付', icon: 'none' });
  },

  onConfirmReceive() {
    const self = this;
    wx.showModal({
      title: '提示',
      content: '确认已收到商品？',
      confirmColor: '#C4956A',
      success: function (res) {
        if (res.confirm) {
          const order = self.data.order;
          order.status = ORDER_STATUS.COMPLETED;
          self.setData({
            order: order,
            steps: buildSteps(ORDER_STATUS.COMPLETED),
            statusLabel: STATUS_TEXT[ORDER_STATUS.COMPLETED]
          });
          wx.showToast({ title: '已确认收货', icon: 'success' });
        }
      }
    });
  },

  onReview() {
    wx.showToast({ title: '去评价', icon: 'none' });
  }
});
