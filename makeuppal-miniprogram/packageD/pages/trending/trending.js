// packageD/pages/trending/trending.js - 热门趋势榜单
const { libraryFeed } = require('../../../data/library');
const { getImageUrl } = require('../../../data/images');
const router = require('../../../utils/router');

// 格式化热度值（1200 -> 1.2k, 12000 -> 1.2w）
function formatLikes(n) {
  if (n >= 10000) return (n / 10000).toFixed(1) + 'w';
  if (n >= 1000) return (n / 1000).toFixed(1) + 'k';
  return String(n);
}

Page({
  data: {
    currentTab: 'daily',
    tabs: [
      { key: 'daily', label: '日榜' },
      { key: 'weekly', label: '周榜' },
      { key: 'monthly', label: '月榜' }
    ],
    list: []
  },

  onLoad() {
    this.loadList('daily');
  },

  onTabTap(e) {
    const key = e.currentTarget.dataset.key;
    if (key === this.data.currentTab) return;
    this.setData({ currentTab: key });
    this.loadList(key);
  },

  loadList(tab) {
    // 数据源：libraryFeed.creators 按likes排序
    let items = (libraryFeed.creators || []).slice();

    // 不同tab模拟不同的排行规则
    if (tab === 'daily') {
      // 日榜：likes轻微波动
      items = items.map(item => ({ ...item, _rank: item.likes + Math.floor(Math.random() * 2000 - 1000) }));
    } else if (tab === 'weekly') {
      // 周榜：likes × 7
      items = items.map(item => ({ ...item, _rank: item.likes * 7 + Math.floor(Math.random() * 5000) }));
    } else {
      // 月榜：likes × 30
      items = items.map(item => ({ ...item, _rank: item.likes * 30 + Math.floor(Math.random() * 10000) }));
    }

    items.sort((a, b) => b._rank - a._rank);

    const list = items.map(item => ({
      id: item.id,
      title: item.title,
      author: item.creatorName,
      avatar: getImageUrl(item.creatorAvatar || item.coverImage),
      likes: item._rank,
      likesText: formatLikes(item._rank)
    }));

    this.setData({ list });
  },

  onItemTap(e) {
    const id = e.currentTarget.dataset.id;
    router.openTemplateDetail(id);
  }
});
