// packageC/pages/invite/invite.js - 邀请好友
const { getImageUrl } = require('../../../data/images');

Page({
  data: {
    inviteCode: 'ZB2026VIP',
    rewardRules: [
      '好友通过你的邀请码注册，双方各得 50 GP',
      '好友首次发布作品，你再得 100 GP',
      '累计邀请 5 人，解锁专属创作者徽章'
    ],
    invitedCount: 8,
    totalReward: 650,
    invitees: [
      { id: 'i001', avatar: getImageUrl('coverCreator2'), name: '阿紫的美学日记', status: '已注册', reward: 50, time: '07-01' },
      { id: 'i002', avatar: getImageUrl('coverCreator3'), name: '桃子软糖', status: '已发布', reward: 150, time: '06-28' },
      { id: 'i003', avatar: getImageUrl('coverCreator5'), name: '橙子气泡水', status: '已注册', reward: 50, time: '06-25' },
      { id: 'i004', avatar: getImageUrl('coverCreator6'), name: '秋秋美妆', status: '已发布', reward: 150, time: '06-20' },
      { id: 'i005', avatar: getImageUrl('coverCreator8'), name: '青瓷美学', status: '已注册', reward: 50, time: '06-15' }
    ]
  },

  onLoad() {
    // 初始化
  },

  // 复制邀请码
  onCopyCode() {
    const that = this;
    wx.setClipboardData({
      data: this.data.inviteCode,
      success: function () {
        wx.showToast({ title: '邀请码已复制', icon: 'success' });
      }
    });
  },

  // 分享按钮（button open-type="share" 会触发 onShareAppMessage）
  onShareAppMessage() {
    return {
      title: '妆伴 MakeupPal 邀请你一起变美，输入邀请码 ' + this.data.inviteCode + ' 各得 50 GP',
      path: '/pages/home/home?inviteCode=' + this.data.inviteCode
    };
  }
});
