// packageB/pages/my-templates/my-templates.js - 我的模板收藏
const { findTemplateById } = require('../../../data/library-extra');
const { getImageUrl } = require('../../../data/images');
const storage = require('../../../utils/storage');
const router = require('../../../utils/router');

Page({
  data: {
    favoriteList: [],
    isEmpty: false
  },

  onShow() {
    this.loadFavorites();
  },

  // 加载收藏模板列表
  loadFavorites() {
    const ids = storage.getFavoriteTemplates();
    if (!ids || ids.length === 0) {
      this.setData({ favoriteList: [], isEmpty: true });
      return;
    }
    const list = ids.map(id => {
      const tpl = findTemplateById(id);
      if (!tpl) {
        return null;
      }
      const title = tpl.title || tpl.name || '未知妆容';
      const author = tpl.creatorName || tpl.authorName || tpl.author || '匿名达人';
      const desc = tpl.summary || tpl.description || tpl.desc || '';
      const image = tpl.coverImage ? getImageUrl(tpl.coverImage) : (tpl.image ? (tpl.image.indexOf('http') === 0 ? tpl.image : getImageUrl(tpl.image)) : getImageUrl('coverCreator1'));
      const tags = tpl.tags || (tpl.tag ? [tpl.tag] : []);
      const likes = tpl.likes || 0;
      return {
        id: id,
        title: title,
        author: author,
        desc: desc,
        image: image,
        tags: tags.slice(0, 2),
        likesText: this.formatLikes(likes)
      };
    }).filter(item => item !== null);

    this.setData({
      favoriteList: list,
      isEmpty: list.length === 0
    });
  },

  // 格式化点赞数
  formatLikes(num) {
    if (num >= 10000) {
      return (num / 10000).toFixed(1) + 'w';
    }
    return String(num);
  },

  // 跳转详情
  onTapItem(e) {
    const id = e.currentTarget.dataset.id;
    if (!id) return;
    router.openTemplateDetail(id);
  },

  // 取消收藏
  onRemoveFavorite(e) {
    const id = e.currentTarget.dataset.id;
    if (!id) return;
    wx.showModal({
      title: '提示',
      content: '确定要取消收藏该模板吗？',
      confirmColor: '#C4956A',
      success: (res) => {
        if (res.confirm) {
          storage.removeFavoriteTemplate(id);
          wx.showToast({ title: '已取消收藏', icon: 'none' });
          this.loadFavorites();
        }
      }
    });
  },

  // 空状态跳转颜库
  onGoLibrary() {
    router.switchTab('library');
  },

  // 下拉刷新
  onPullDownRefresh() {
    this.loadFavorites();
    wx.stopPullDownRefresh();
  }
});
