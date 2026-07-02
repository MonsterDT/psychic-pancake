// packageC/pages/creator/creator.js - 创作者中心
const { getImageUrl } = require('../../../data/images');
const router = require('../../../utils/router');

Page({
  data: {
    creatorInfo: {
      name: '小鹿美妆',
      avatar: getImageUrl('coverCreator1'),
      level: 6,
      bio: '专注日常通勤妆 · 累计创作 128 个妆容'
    },
    stats: [
      { key: 'fans', value: '12.8w', label: '粉丝' },
      { key: 'plays', value: '348w', label: '播放' },
      { key: 'likes', value: '56.2w', label: '点赞' },
      { key: 'earnings', value: '2,860', label: '收益(GP)' }
    ],
    works: [
      { id: 'w001', cover: getImageUrl('coverCreator1'), title: '早八通勤妆3分钟搞定', views: '12.8w', likes: '1.2w', statusText: '已发布', statusClass: 'published' },
      { id: 'w002', cover: getImageUrl('coverCreator3'), title: '纯欲白开水妆保姆级教程', views: '8.6w', likes: '8600', statusText: '已发布', statusClass: 'published' },
      { id: 'w003', cover: getImageUrl('coverCreator5'), title: '韩系女高元气妆', views: '5.2w', likes: '4200', statusText: '审核中', statusClass: 'reviewing' },
      { id: 'w004', cover: getImageUrl('coverCreator6'), title: '美拉德秋冬妆', views: '0', likes: '0', statusText: '草稿', statusClass: 'draft' }
    ]
  },

  onLoad() {
    // 模拟数据已在 data 中初始化
  },

  // 进入收益中心
  onEarningsTap() {
    router.navigateTo('/packageC/pages/earnings/earnings');
  },

  // 进入数据看板
  onDataCenterTap() {
    router.navigateTo('/packageC/pages/data-center/data-center');
  },

  // 发布作品
  onPublishTap() {
    router.navigateTo('/packageC/pages/upload/upload');
  },

  // 点击作品项
  onWorkTap(e) {
    const id = e.currentTarget.dataset.id;
    wx.showToast({ title: '查看作品 ' + id, icon: 'none' });
  },

  // 进入创作者学院
  onAcademyTap() {
    router.navigateTo('/packageC/pages/academy/academy');
  },

  onShareAppMessage() {
    return {
      title: '妆伴创作者中心 - 分享你的美妆灵感',
      path: '/packageC/pages/creator/creator'
    };
  }
});
