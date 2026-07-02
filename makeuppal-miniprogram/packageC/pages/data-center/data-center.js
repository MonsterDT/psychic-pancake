// packageC/pages/data-center/data-center.js - 数据看板
const { getImageUrl } = require('../../../data/images');

Page({
  data: {
    // 概览卡片
    overview: [
      { key: 'plays', value: '348.2w', label: '总播放', trend: '+12.5%' },
      { key: 'likes', value: '56.2w', label: '总点赞', trend: '+8.3%' },
      { key: 'favs', value: '18.6w', label: '总收藏', trend: '+5.1%' },
      { key: 'newFans', value: '3,256', label: '新增粉丝', trend: '+18.7%' }
    ],
    // 7天趋势数据（用于柱状图模拟）
    trendMax: 0,
    trendList: [
      { day: '周一', value: 4200 },
      { day: '周二', value: 5800 },
      { day: '周三', value: 3600 },
      { day: '周四', value: 7200 },
      { day: '周五', value: 9500 },
      { day: '周六', value: 12000 },
      { day: '周日', value: 8400 }
    ],
    // TOP作品列表
    topWorks: [
      { id: 'w001', cover: getImageUrl('coverCreator1'), title: '早八通勤妆3分钟搞定', plays: '12.8w', likes: '1.2w' },
      { id: 'w002', cover: getImageUrl('coverCreator3'), title: '纯欲白开水妆保姆级教程', plays: '8.6w', likes: '8600' },
      { id: 'w003', cover: getImageUrl('coverCreator5'), title: '韩系女高元气妆', plays: '5.2w', likes: '4200' },
      { id: 'w005', cover: getImageUrl('coverCreator8'), title: '新中式清冷妆教程', plays: '4.8w', likes: '3900' }
    ]
  },

  onLoad() {
    // 计算柱状图最大值，用于高度比例
    const max = Math.max.apply(null, this.data.trendList.map(function (t) { return t.value; }));
    const list = this.data.trendList.map(function (t) {
      return {
        day: t.day,
        value: t.value,
        heightPercent: Math.round((t.value / max) * 100)
      };
    });
    this.setData({ trendMax: max, trendList: list });
  },

  onWorkTap(e) {
    wx.showToast({ title: '查看作品 ' + e.currentTarget.dataset.id, icon: 'none' });
  },

  onShareAppMessage() {
    return {
      title: '妆伴数据看板 - 我的美妆创作数据',
      path: '/packageC/pages/data-center/data-center'
    };
  }
});
