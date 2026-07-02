// packageD/pages/search/search.js - 搜索页
const storage = require('../../../utils/storage');
const router = require('../../../utils/router');
const { libraryFeed } = require('../../../data/library');
const { getImageUrl } = require('../../../data/images');

Page({
  data: {
    autoFocus: true,
    keyword: '',
    hasSearched: false,
    results: [],
    history: [],
    hotList: ['早八通勤妆', '纯欲白开水妆', '韩系女高妆', 'Y2K千禧妆', '新中式清冷妆', '多巴胺元气妆', '截断式眼妆', '水光肌底妆']
  },

  onLoad() {
    this.setData({ history: storage.getSearchHistory() });
  },

  onInput(e) {
    this.setData({ keyword: e.detail.value });
  },

  onClearKeyword() {
    this.setData({ keyword: '', hasSearched: false, results: [] });
  },

  onCancel() {
    router.navigateBack();
  },

  // 执行搜索
  doSearch(keyword) {
    const kw = (keyword || '').trim();
    if (!kw) {
      wx.showToast({ title: '请输入关键词', icon: 'none' });
      return;
    }

    // 写入历史
    const history = storage.addSearchHistory(kw);

    // 过滤 libraryFeed 全部数据
    const results = [];
    const collect = (items, normalizer) => {
      if (!Array.isArray(items)) return;
      items.forEach(item => {
        const n = normalizer(item);
        const hit = (n.name + ' ' + n.desc + ' ' + n.author + ' ' + (n.tags || []).join(' '))
          .toLowerCase().indexOf(kw.toLowerCase()) >= 0;
        if (hit) results.push(n);
      });
    };

    collect(libraryFeed.creators, item => ({
      id: item.id,
      name: item.title,
      desc: item.category + ' · ' + (item.tag || ''),
      image: getImageUrl(item.coverImage),
      author: item.creatorName,
      likes: item.likes,
      tags: item.tag ? [item.tag] : []
    }));
    collect(libraryFeed.tutorials, item => ({
      id: item.id,
      name: item.title,
      desc: item.category + ' · ' + (item.effect || ''),
      image: getImageUrl(item.coverImage),
      author: '教程',
      likes: item.likes,
      tags: item.tag ? [item.tag] : []
    }));
    collect(libraryFeed.qa, item => ({
      id: item.id,
      name: item.question,
      desc: item.summary,
      image: getImageUrl(item.coverImage),
      author: item.authorName,
      likes: item.viewCount,
      tags: [item.category]
    }));
    collect(libraryFeed.celebrities, item => ({
      id: item.id,
      name: item.title,
      desc: item.celebrityName + ' · ' + item.category,
      image: getImageUrl(item.coverImage),
      author: item.celebrityName,
      likes: item.likes,
      tags: item.tag ? [item.tag] : []
    }));

    this.setData({ keyword: kw, hasSearched: true, results: results, history: history });
  },

  onConfirm(e) {
    this.doSearch(e.detail.value);
  },

  onHistoryTap(e) {
    const key = e.currentTarget.dataset.key;
    this.setData({ keyword: key });
    this.doSearch(key);
  },

  onHotTap(e) {
    const key = e.currentTarget.dataset.key;
    this.setData({ keyword: key });
    this.doSearch(key);
  },

  onClearHistory() {
    wx.showModal({
      title: '提示',
      content: '确定清空搜索历史吗？',
      success: (res) => {
        if (res.confirm) {
          storage.clearSearchHistory();
          this.setData({ history: [] });
          wx.showToast({ title: '已清空', icon: 'success' });
        }
      }
    });
  },

  onResultTap(e) {
    const id = e.currentTarget.dataset.id;
    router.openTemplateDetail(id);
  }
});
