// packageC/pages/message/message.js - 消息中心
const { getImageUrl } = require('../../../data/images');

Page({
  data: {
    tabs: [
      { key: 'system', label: '系统', unread: 2 },
      { key: 'interact', label: '互动', unread: 5 },
      { key: 'service', label: '客服', unread: 0 }
    ],
    activeTab: 'system',
    allMessages: {
      system: [
        { id: 'm001', avatar: getImageUrl('coverBrand1'), title: '平台公告', content: '妆伴创作者激励计划上线，最高奖励 5000 GP，快来参与吧！', time: '10:30', unread: true },
        { id: 'm002', avatar: getImageUrl('coverBrand3'), title: '审核通知', content: '你的作品《新中式清冷妆》已通过审核，快去查看吧。', time: '昨天', unread: true },
        { id: 'm003', avatar: getImageUrl('coverBrand5'), title: '系统通知', content: '你的账号等级已升级为 Lv.6，解锁更多创作者权益。', time: '3天前', unread: false }
      ],
      interact: [
        { id: 'm004', avatar: getImageUrl('coverCreator2'), title: '阿紫的美学日记', content: '赞了你的作品《早八通勤妆》', time: '12:15', unread: true },
        { id: 'm005', avatar: getImageUrl('coverCreator3'), title: '桃子软糖', content: '收藏了你的作品《纯欲白开水妆》', time: '11:42', unread: true },
        { id: 'm006', avatar: getImageUrl('coverCreator5'), title: '橙子气泡水', content: '关注了你，回关一下吧～', time: '09:08', unread: true },
        { id: 'm007', avatar: getImageUrl('coverCreator8'), title: '青瓷美学', content: '评论：教程写得太详细了，已收藏！', time: '昨天', unread: true },
        { id: 'm008', avatar: getImageUrl('coverCreator6'), title: '秋秋美妆', content: '评论：请问用的是什么色号呀？', time: '昨天', unread: true },
        { id: 'm009', avatar: getImageUrl('coverCreator4'), title: 'Vivi makeup', content: '赞了你的作品《韩系女高元气妆》', time: '2天前', unread: false }
      ],
      service: [
        { id: 'm010', avatar: getImageUrl('coverCreator7'), title: '妆伴小助手', content: '您好，有什么可以帮您的吗？随时联系我们。', time: '昨天', unread: false }
      ]
    },
    messages: []
  },

  onLoad() {
    this.setData({ messages: this.data.allMessages.system });
  },

  onTabTap(e) {
    const key = e.currentTarget.dataset.key;
    this.setData({
      activeTab: key,
      messages: this.data.allMessages[key] || []
    });
  },

  onMessageTap(e) {
    const id = e.currentTarget.dataset.id;
    wx.showToast({ title: '查看消息 ' + id, icon: 'none' });
  },

  onShareAppMessage() {
    return {
      title: '妆伴消息中心',
      path: '/packageC/pages/message/message'
    };
  }
});
