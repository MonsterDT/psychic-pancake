// packageD/pages/withdraw/withdraw.js - 提现
const router = require('../../../utils/router');

// 汇率：1元 = 10 GP
const EXCHANGE_RATE = 10;
// 最低提现 GP
const MIN_WITHDRAW_GP = 10;

Page({
  data: {
    gpCreatorEarnings: 0,
    amountInput: '',
    convertGp: 0,
    canSubmit: false,
    submitText: '请输入提现金额'
  },

  onLoad() {
    const app = getApp();
    const earnings = app.globalData.gpCreatorEarnings;
    this.setData({
      gpCreatorEarnings: earnings,
      submitText: earnings > 0 ? '提现到微信零钱' : '暂无可提现收益'
    });
  },

  onAmountInput(e) {
    const val = e.detail.value;
    // 限制只能输入数字和小数点，最多2位小数
    let cleaned = val.replace(/[^\d.]/g, '');
    const dotIdx = cleaned.indexOf('.');
    if (dotIdx >= 0) {
      const intPart = cleaned.slice(0, dotIdx);
      let decPart = cleaned.slice(dotIdx + 1).replace(/\./g, '');
      if (decPart.length > 2) decPart = decPart.slice(0, 2);
      cleaned = intPart + '.' + decPart;
    }

    // 计算 GP 等价值
    const yuan = parseFloat(cleaned) || 0;
    const gp = Math.floor(yuan * EXCHANGE_RATE);

    // 余额校验：严防负数
    let canSubmit = false;
    let submitText = '请输入提现金额';
    if (yuan > 0) {
      if (gp > this.data.gpCreatorEarnings) {
        canSubmit = false;
        submitText = '余额不足';
      } else if (gp < MIN_WITHDRAW_GP) {
        canSubmit = false;
        submitText = '最低提现 ' + MIN_WITHDRAW_GP + ' GP';
      } else {
        canSubmit = true;
        submitText = '提现 ¥' + yuan.toFixed(2) + ' 到微信零钱';
      }
    }

    this.setData({
      amountInput: cleaned,
      convertGp: gp,
      canSubmit: canSubmit,
      submitText: submitText
    });
  },

  onWithdrawAll() {
    const allGp = this.data.gpCreatorEarnings;
    if (allGp <= 0) {
      wx.showToast({ title: '暂无可提现收益', icon: 'none' });
      return;
    }
    const yuan = (allGp / EXCHANGE_RATE).toFixed(2);
    // 触发 input 同样的校验逻辑
    this.onAmountInput({ detail: { value: yuan } });
  },

  onWithdraw() {
    const yuan = parseFloat(this.data.amountInput) || 0;
    const amount = Math.floor(yuan * EXCHANGE_RATE); // 提现 GP 数
    const balance = this.data.gpCreatorEarnings;

    // 严防负数！多重校验
    if (yuan <= 0 || amount <= 0) {
      wx.showToast({ title: '请输入有效金额', icon: 'none' });
      return;
    }

    if (amount > balance) {
      wx.showToast({ title: '余额不足', icon: 'none' });
      return;
    }

    if (amount < MIN_WITHDRAW_GP) {
      wx.showToast({ title: '最低提现 ' + MIN_WITHDRAW_GP + ' GP', icon: 'none' });
      return;
    }

    wx.showModal({
      title: '确认提现',
      content: '提现 ¥' + yuan.toFixed(2) + '（' + amount + ' GP）到微信零钱？',
      confirmText: '确认提现',
      success: (res) => {
        if (!res.confirm) return;

        wx.showLoading({ title: '处理中...', mask: true });

        // 模拟提现流程
        setTimeout(() => {
          wx.hideLoading();

          // 更新 globalData.gpCreatorEarnings（严防负数）
          const app = getApp();
          const newEarnings = app.globalData.gpCreatorEarnings - amount;
          // 二次校验，绝不出现负数
          const finalEarnings = newEarnings < 0 ? 0 : newEarnings;
          app.updateGp(undefined, undefined, finalEarnings);

          wx.showToast({
            title: '提现申请已提交',
            icon: 'success',
            duration: 1500
          });

          setTimeout(() => {
            router.navigateBack();
          }, 1500);
        }, 1200);
      }
    });
  }
});
