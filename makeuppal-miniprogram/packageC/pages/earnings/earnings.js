// packageC/pages/earnings/earnings.js - 收益中心
const router = require('../../../utils/router');

Page({
  data: {
    balance: 2860.5, // 可提现余额
    totalEarnings: 8420.3, // 累计收益
    withdrawDisabled: false, // 余额不足时禁用
    records: [
      { id: 'r001', date: '2026-07-02', type: '作品收益', amount: 120, status: '已到账', statusClass: 'done' },
      { id: 'r002', date: '2026-07-01', type: '作品收益', amount: 86, status: '已到账', statusClass: 'done' },
      { id: 'r003', date: '2026-06-30', type: '提现', amount: -500, status: '处理中', statusClass: 'pending' },
      { id: 'r004', date: '2026-06-28', type: '打赏', amount: 30, status: '已到账', statusClass: 'done' },
      { id: 'r005', date: '2026-06-25', type: '作品收益', amount: 156, status: '已到账', statusClass: 'done' },
      { id: 'r006', date: '2026-06-20', type: '提现', amount: -1000, status: '已到账', statusClass: 'done' },
      { id: 'r007', date: '2026-06-15', type: '作品收益', amount: 98, status: '已到账', statusClass: 'done' }
    ]
  },

  onLoad() {
    this.refreshWithdrawState();
  },

  onShow() {
    this.refreshWithdrawState();
  },

  // 严格余额校验：严防负数，余额不足时按钮禁用
  refreshWithdrawState() {
    const balance = Number(this.data.balance) || 0;
    // 余额必须为正数且大于最低提现门槛（如 1 GP），否则禁用
    const disabled = !(balance > 0 && balance >= 1);
    this.setData({ withdrawDisabled: disabled });
  },

  // 提现：跳转提现页
  onWithdrawTap() {
    // 提交前再次严格校验余额，严防负数
    const balance = Number(this.data.balance) || 0;
    if (!(balance > 0)) {
      wx.showToast({ title: '余额不足，无法提现', icon: 'none' });
      this.setData({ withdrawDisabled: true });
      return;
    }
    if (balance < 1) {
      wx.showToast({ title: '最低提现 1 GP', icon: 'none' });
      return;
    }
    router.navigateTo('/packageD/pages/withdraw/withdraw', { balance: balance });
  },

  onShareAppMessage() {
    return {
      title: '妆伴收益中心 - 创作变现',
      path: '/packageC/pages/earnings/earnings'
    };
  }
});
