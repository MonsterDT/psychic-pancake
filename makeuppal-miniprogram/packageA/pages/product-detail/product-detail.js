// packageA/pages/product-detail/product-detail.js
const { getImageUrl } = require('../../../data/images');
const { findProductById } = require('../../../data/products');
const storage = require('../../../utils/storage');

Page({
  data: {
    product: null,
    gallery: [],
    currentImgIndex: 0,
    qty: 1,
    specs: [],
    reviews: [],
    ratingText: ''
  },

  onLoad(options) {
    const id = options && options.id ? options.id : '';
    const product = findProductById(id);
    if (!product) {
      wx.showToast({ title: '商品不存在', icon: 'none' });
      this.setData({ product: null });
      return;
    }
    const mainImg = getImageUrl(product.image || product.img);
    const gallery = this.buildGallery(mainImg);
    const specs = this.buildSpecs(product);
    const reviews = this.buildReviews();
    this.setData({
      product: product,
      gallery: gallery,
      specs: specs,
      reviews: reviews,
      ratingText: this.formatRating(product.rating)
    });
  },

  buildGallery(mainImg) {
    // 主图 + 关联产品图，构成轮播
    const list = [mainImg];
    const extra = ['lipstick1', 'foundation1', 'skincare1'];
    extra.forEach(function (key) {
      const url = getImageUrl(key);
      if (list.indexOf(url) === -1) list.push(url);
    });
    return list;
  },

  buildSpecs(product) {
    const specs = [{
      name: '包装',
      options: ['标准装', '礼盒装'],
      selectedIdx: 0
    }];
    const tags = product.tags || [];
    if (tags.length > 0) {
      specs.push({
        name: '色号',
        options: tags,
        selectedIdx: 0
      });
    }
    return specs;
  },

  buildReviews() {
    const avatar = getImageUrl('avatar_shenwanqing');
    return [
      { id: 'r1', name: '小美', avatar: avatar, rating: 5, content: '非常好用，显色度高，持久不脱妆，会回购！', date: '2026-06-20' },
      { id: 'r2', name: 'Lily', avatar: avatar, rating: 4, content: '包装精致，颜色很正，物流也快，好评。', date: '2026-06-15' },
      { id: 'r3', name: '阿May', avatar: avatar, rating: 5, content: '闺蜜推荐的，确实不错，适合日常使用。', date: '2026-06-10' }
    ];
  },

  formatRating(rating) {
    const num = Number(rating) || 0;
    return num.toFixed(1);
  },

  onSwiperChange(e) {
    this.setData({ currentImgIndex: e.detail.current });
  },

  selectSpec(e) {
    const specIdx = e.currentTarget.dataset.specIdx;
    const optionIdx = e.currentTarget.dataset.optionIdx;
    const specs = this.data.specs;
    specs[specIdx].selectedIdx = optionIdx;
    this.setData({ specs: specs });
  },

  decQty() {
    if (this.data.qty <= 1) return;
    this.setData({ qty: this.data.qty - 1 });
  },

  incQty() {
    this.setData({ qty: this.data.qty + 1 });
  },

  onAddCart() {
    const product = this.data.product;
    if (!product) return;
    storage.addToCart(product, this.data.qty);
    wx.showToast({ title: '已加入购物车', icon: 'success' });
  },

  onBuyNow() {
    wx.showToast({ title: '正在结算', icon: 'none' });
  }
});
