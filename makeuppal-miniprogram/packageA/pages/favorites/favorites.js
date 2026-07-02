// packageA/pages/favorites/favorites.js
const storage = require('../../../utils/storage');
const router = require('../../../utils/router');
const { findTemplateById } = require('../../../data/library-extra');

Page({
  data: {
    favorites: [],
    isEmpty: false
  },

  onShow() {
    this.loadFavorites();
  },

  loadFavorites() {
    const ids = storage.getFavoriteTemplates();
    const list = [];
    ids.forEach(function (id) {
      const tpl = findTemplateById(id);
      if (tpl) {
        list.push({
          id: tpl.id,
          name: tpl.name,
          desc: tpl.desc,
          image: tpl.image,
          occasion: tpl.occasion,
          difficulty: tpl.difficulty,
          likes: tpl.likes,
          tags: tpl.tags || []
        });
      }
    });
    this.setData({
      favorites: list,
      isEmpty: list.length === 0
    });
  },

  openTemplate(e) {
    const id = e.currentTarget.dataset.id;
    router.openTemplateDetail(id);
  },

  removeFavorite(e) {
    const id = e.currentTarget.dataset.id;
    const self = this;
    wx.showModal({
      title: '提示',
      content: '确定要取消收藏该模板吗？',
      confirmColor: '#C4956A',
      success: function (res) {
        if (res.confirm) {
          storage.removeFavoriteTemplate(id);
          self.loadFavorites();
          wx.showToast({ title: '已取消收藏', icon: 'none' });
        }
      }
    });
  },

  goLibrary() {
    router.switchTab('library');
  }
});
