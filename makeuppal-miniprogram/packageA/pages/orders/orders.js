// packageA/pages/orders/orders.js
const router = require('../../../utils/router');
const { ORDER_STATUS } = require('../../../utils/constants');

const STATUS_TABS = [
  { key: 'all', label: '全部' },
  { key: ORDER_STATUS.PENDING_PAY, label: '待付款' },
  { key: ORDER_STATUS.PENDING_SHIP, label: '待发货' },
  { key: ORDER_STATUS.PENDING_RECEIVE, label: '待收货' },
  { key: ORDER_STATUS.COMPLETED, label: '已完成' }
];

const STATUS_TEXT = {};
STATUS_TEXT[ORDER_STATUS.PENDING_PAY] = '待付款';
STATUS_TEXT[ORDER_STATUS.PENDING_SHIP] = '待发货';
STATUS_TEXT[ORDER_STATUS.PENDING_RECEIVE] = '待收货';
STATUS_TEXT[ORDER_STATUS.COMPLETED] = '已完成';
STATUS_TEXT[ORDER_STATUS.CANCELLED] = '已取消';

Page({
  data: {
    tabs: STATUS_TABS,
    activeTab: 'all',
    filteredOrders: [],
    statusText: STATUS_TEXT
  },

  onLoad(options) {
    const status = options && options.status ? options.status : 'all';
    this.setData({ activeTab: status });
  },

  onShow() {
    this.filterOrders();
  },

  getMockOrders() {
    return [
      {
        id: 'ORD20260620001',
        status: ORDER_STATUS.PENDING_PAY,
        totalAmount: 390.00,
        createTime: '2026-06-20 10:30',
        items: [
          { id: 'p015', name: 'YSL小金条细管口红 21', img: 'lipstick1', price: 390, qty: 1 }
        ]
      },
      {
        id: 'ORD20260618002',
        status: ORDER_STATUS.PENDING_SHIP,
        totalAmount: 620.00,
        createTime: '2026-06-18 14:20',
        items: [
          { id: 'p001', name: 'YSL 恒久无瑕持妆粉底液', img: 'foundation1', price: 620, qty: 1 }
        ]
      },
      {
        id: 'ORD20260615003',
        status: ORDER_STATUS.PENDING_RECEIVE,
        totalAmount: 535.00,
        createTime: '2026-06-15 09:15',
        items: [
          { id: 'p018', name: 'MAC子弹头口红 Chili', img: 'lipstick4', price: 190, qty: 1 },
          { id: 'p009', name: '3CE九宫格眼影盘 Overtake', img: 'eyeshadow2', price: 245, qty: 1 }
        ]
      },
      {
        id: 'ORD20260610004',
        status: ORDER_STATUS.COMPLETED,
        totalAmount: 1290.00,
        createTime: '2026-06-10 16:45',
        items: [
          { id: 'p025', name: 'SK-II神仙水精华液 230ml', img: 'skincare1', price: 1540, qty: 1 }
        ]
      },
      {
        id: 'ORD20260605005',
        status: ORDER_STATUS.COMPLETED,
        totalAmount: 89.00,
        createTime: '2026-06-05 11:00',
        items: [
          { id: 'p022', name: '橘朵单色腮红 06杏子色', img: 'blush2', price: 29, qty: 1 },
          { id: 'p013', name: '艾杜纱睫毛打底膏 黑色', img: 'eyeshadow6', price: 89, qty: 1 }
        ]
      }
    ];
  },

  switchTab(e) {
    const key = e.currentTarget.dataset.key;
    this.setData({ activeTab: key });
    this.filterOrders();
  },

  filterOrders() {
    const all = this.getMockOrders();
    const active = this.data.activeTab;
    const filtered = active === 'all' ? all : all.filter(function (o) {
      return o.status === active;
    });
    this.setData({ filteredOrders: filtered });
  },

  openOrder(e) {
    const id = e.currentTarget.dataset.id;
    router.openOrderDetail(id);
  }
});
