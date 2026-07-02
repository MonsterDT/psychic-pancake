// packageC/pages/brand/brand.js - 品牌馆
const { libraryFeed } = require('../../../data/library');
const { getImageUrl } = require('../../../data/images');

Page({
  data: {
    brands: []
  },

  onLoad() {
    // 数据源：libraryFeed.brands
    const list = (libraryFeed.brands || []).map(function (b) {
      return {
        id: b.id,
        title: b.title,
        brandName: b.brandName,
        brandLogo: getImageUrl(b.brandLogo),
        coverImage: getImageUrl(b.coverImage),
        templateCount: b.templateCount,
        rating: b.rating,
        priceGP: b.priceGP,
        isOfficial: !!b.isOfficial,
        tag: b.tag
      };
    });
    this.setData({ brands: list });
  },

  onEnterStore(e) {
    const id = e.currentTarget.dataset.id;
    const name = e.currentTarget.dataset.name;
    wx.showToast({ title: '进入 ' + name + ' 店铺', icon: 'none' });
  },

  onShareAppMessage() {
    return {
      title: '妆伴品牌馆 - 官方认证大牌妆容',
      path: '/packageC/pages/brand/brand'
    };
  }
});
