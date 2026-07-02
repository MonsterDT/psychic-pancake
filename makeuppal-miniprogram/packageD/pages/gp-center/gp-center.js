// packageD/pages/gp-center/gp-center.js - 焕新值中心
const router = require('../../../utils/router');

Page({
  data: {
    gpBalance: 0,
    gpRecharged: 0,
    gpFree: 0,
    gpCreatorEarnings: 0,
    transactions: [
      { id: 't1', title: '充值焕新值', time: '2026-07-02 14:30', type: 'income', amount: 200 },
      { id: 't2', title: '解锁妆容模板', time: '2026-07-02 11:20', type: 'expense', amount: 30 },
      { id: 't3', title: '每日签到奖励', time: '2026-07-01 09:00', type: 'income', amount: 5 },
      { id: 't4', title: '创作内容奖励', time: '2026-06-30 18:45', type: 'income', amount: 50 },
      { id: 't5', title: 'AI试妆消耗', time: '2026-06-30 16:12', type: 'expense', amount: 10 }
    ],
    earnMethods: [
      { icon: '📅', title: '每日任务', desc: '完成签到、浏览、互动等任务', amount: 5 },
      { icon: '🏆', title: '成就奖励', desc: '达成成就里程碑解锁奖励', amount: 100 },
      { icon: '✍️', title: '创作收益', desc: '发布妆容模板获得用户打赏', amount: 50 },
      { icon: '👥', title: '邀请好友', desc: '邀请新用户注册并完成引导', amount: 30 },
      { icon: '💰', title: '充值购买', desc: '直接充值获取焕新值', amount: 50 }
    ]
  },

  onLoad() {
    this.refreshGp();
  },

  onShow() {
    this.refreshGp();
  },

  refreshGp() {
    const app = getApp();
    const g = app.globalData;
    this.setData({
      gpBalance: g.gpBalance,
      gpRecharged: g.gpRecharged,
      gpFree: g.gpFree,
      gpCreatorEarnings: g.gpCreatorEarnings
    });
  },

  onRecharge() {
    router.navigateTo('/packageD/pages/recharge/recharge');
  },

  onWithdraw() {
    router.navigateTo('/packageD/pages/withdraw/withdraw');
  }
});
