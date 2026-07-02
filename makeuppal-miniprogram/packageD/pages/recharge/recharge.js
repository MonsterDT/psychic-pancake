// packageD/pages/recharge/recharge.js - 充值焕新值
const router = require('../../../utils/router');

// 汇率：1元 = 10 GP
const EXCHANGE_RATE = 10;

Page({
  data: {
    gpBalance: 0,
    amountOptions: [
      { amount: 50, bonus: 0 },
      { amount: 100, bonus: 5 },
      { amount: 200, bonus: 15 },
      { amount: 500, bonus: 50 },
      { amount: 1000, bonus: 120 },
      { amount: 2000, bonus: 300 }
    ],
    selectedAmount: 100,
    customAmount: '',
    finalAmount: 100,
    payAmount: '10.00'
  },

  onLoad() {
    const app = getApp();
    this.setData({ gpBalance: app.globalData.gpBalance });
  },

  onSelectAmount(e) {
    const amount = Number(e.currentTarget.dataset.amount);
    this.setData({
      selectedAmount: amount,
      customAmount: '',
      finalAmount: amount,
      payAmount: (amount / EXCHANGE_RATE).toFixed(2)
    });
  },

  onCustomInput(e) {
    const val = e.detail.value;
    let amount = 0;
    let payAmount = '0.00';
    if (val) {
      amount = parseInt(val, 10) || 0;
      if (amount < 0) amount = 0;
      payAmount = (amount / EXCHANGE_RATE).toFixed(2);
    }
    this.setData({
      customAmount: val,
      selectedAmount: 0,
      finalAmount: amount,
      payAmount: payAmount
    });
  },

  onRecharge() {
    const amount = this.data.finalAmount;
    if (!amount || amount <= 0) {
      wx.showToast({ title: '请选择或输入金额', icon: 'none' });
      return;
    }

    wx.showLoading({ title: '支付中...', mask: true });

    // 模拟微信支付流程
    setTimeout(() => {
      wx.hideLoading();

      // 更新globalData中的gpRecharged
      const app = getApp();
      const newRecharged = app.globalData.gpRecharged + amount;
      app.updateGp(newRecharged, undefined, undefined);

      wx.showToast({
        title: '充值成功 +' + amount + ' GP',
        icon: 'success',
        duration: 1500
      });

      setTimeout(() => {
        router.navigateBack();
      }, 1500);
    }, 1200);
  }
});
