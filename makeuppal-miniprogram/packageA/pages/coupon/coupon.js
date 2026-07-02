// packageA/pages/coupon/coupon.js
const STATUS_UNUSED = 'unused';
const STATUS_USED = 'used';
const STATUS_EXPIRED = 'expired';

const TABS = [
  { key: STATUS_UNUSED, label: '未使用' },
  { key: STATUS_USED, label: '已使用' },
  { key: STATUS_EXPIRED, label: '已过期' }
];

function buildMockCoupons() {
  return [
    {
      id: 'c1',
      status: STATUS_UNUSED,
      amount: 50,
      threshold: 300,
      name: '美妆满减券',
      scope: '全场商品可用',
      validStart: '2026-06-01',
      validEnd: '2026-07-31'
    },
    {
      id: 'c2',
      status: STATUS_UNUSED,
      amount: 20,
      threshold: 100,
      name: '新人专享券',
      scope: '限新用户首单',
      validStart: '2026-06-15',
      validEnd: '2026-07-15'
    },
    {
      id: 'c3',
      status: STATUS_UNUSED,
      amount: 100,
      threshold: 800,
      name: '大牌满减券',
      scope: '限大牌精选类目',
      validStart: '2026-06-20',
      validEnd: '2026-08-20'
    },
    {
      id: 'c4',
      status: STATUS_USED,
      amount: 30,
      threshold: 200,
      name: '唇妆满减券',
      scope: '限唇妆类目',
      validStart: '2026-05-01',
      validEnd: '2026-06-30'
    },
    {
      id: 'c5',
      status: STATUS_USED,
      amount: 15,
      threshold: 0,
      name: '无门槛券',
      scope: '全场通用',
      validStart: '2026-05-10',
      validEnd: '2026-06-10'
    },
    {
      id: 'c6',
      status: STATUS_EXPIRED,
      amount: 80,
      threshold: 500,
      name: '护肤满减券',
      scope: '限护肤类目',
      validStart: '2026-04-01',
      validEnd: '2026-05-31'
    },
    {
      id: 'c7',
      status: STATUS_EXPIRED,
      amount: 10,
      threshold: 0,
      name: '生日礼券',
      scope: '全场通用',
      validStart: '2026-03-01',
      validEnd: '2026-04-30'
    }
  ];
}

Page({
  data: {
    tabs: TABS,
    activeTab: STATUS_UNUSED,
    filteredCoupons: []
  },

  onShow() {
    this.filterCoupons();
  },

  switchTab(e) {
    const key = e.currentTarget.dataset.key;
    this.setData({ activeTab: key });
    this.filterCoupons();
  },

  filterCoupons() {
    const all = buildMockCoupons();
    const active = this.data.activeTab;
    const filtered = all.filter(function (c) {
      return c.status === active;
    });
    this.setData({ filteredCoupons: filtered });
  },

  useCoupon(e) {
    const id = e.currentTarget.dataset.id;
    if (this.data.activeTab !== STATUS_UNUSED) return;
    wx.showToast({ title: '去使用', icon: 'none' });
  }
});
