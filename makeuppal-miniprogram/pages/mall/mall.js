// pages/mall/mall.js - 市集页
const router = require('../../utils/router');
const storage = require('../../utils/storage');
const { MARKET_CATS } = require('../../utils/constants');
const { getMarketProducts } = require('../../data/products');
const { marketSubCats } = require('../../data/market-subcats');

Page({
  data: {
    currentCat: 'kouhong',
    currentSubCat: '全部',
    catTabs: MARKET_CATS,
    subCatList: [],
    productList: [],
    cartCount: 0,
    searchKeyword: ''
  },

  onLoad() {
    this.refreshCartCount();
    this.loadSubCats(this.data.currentCat);
    this.loadProducts(this.data.currentCat, this.data.currentSubCat);
  },

  onShow() {
    // 联动自定义tabBar选中态
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 3 });
    }
    this.refreshCartCount();
  },

  // 刷新购物车角标
  refreshCartCount() {
    const cart = storage.getCart();
    const count = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
    this.setData({ cartCount: count });
  },

  // 加载子分类
  loadSubCats(cat) {
    const subs = marketSubCats[cat] || ['全部'];
    this.setData({ subCatList: subs, currentSubCat: '全部' });
  },

  // 加载商品列表
  loadProducts(cat, sub) {
    let list = getMarketProducts(cat, sub);
    // 预处理：将 sales 字符串（如 '5.2万'）转为数字，便于 product-card 显示
    list = list.map(p => {
      const salesStr = p.sales || '';
      let salesNum = 0;
      if (typeof salesStr === 'string') {
        if (salesStr.indexOf('万') >= 0) {
          salesNum = parseFloat(salesStr) * 10000;
        } else {
          salesNum = parseFloat(salesStr) || 0;
        }
      } else {
        salesNum = Number(salesStr) || 0;
      }
      return Object.assign({}, p, { sales: salesNum });
    });
    this.setData({ productList: list });
  },

  // 搜索
  onSearchTap() {
    router.openSearch();
  },

  onSearchInput(e) {
    this.setData({ searchKeyword: e.detail.value });
  },

  onSearchConfirm() {
    if (this.data.searchKeyword.trim()) {
      router.openSearch();
    }
  },

  // 订单
  onOrdersTap() {
    router.openOrders();
  },

  // 购物车
  onCartTap() {
    router.openCart();
  },

  // 切换分类
  onCatTap(e) {
    const cat = e.currentTarget.dataset.cat;
    if (!cat || cat === this.data.currentCat) return;
    this.setData({ currentCat: cat });
    this.loadSubCats(cat);
    this.loadProducts(cat, '全部');
  },

  // 切换子分类
  onSubCatTap(e) {
    const sub = e.currentTarget.dataset.sub;
    if (!sub || sub === this.data.currentSubCat) return;
    this.setData({ currentSubCat: sub });
    this.loadProducts(this.data.currentCat, sub);
  },

  // 商品点击
  onProductTap(e) {
    const id = e.detail.id;
    if (id) {
      router.openProductDetail(id);
    }
  },

  // 加购物车
  onAddCart(e) {
    const product = e.detail.product;
    if (!product) return;
    storage.addToCart(product, 1);
    this.refreshCartCount();
    wx.showToast({ title: '已加入购物车', icon: 'success', duration: 1200 });
  },

  // 品牌点击
  onBrandTap() {
    router.navigateTo('/packageC/pages/brand/brand');
  },

  // 闺蜜浮窗
  onCompanionFabTap() {
    router.openCompanionChat();
  },

  onShareAppMessage() {
    return {
      title: '妆伴市集 - 大牌美妆精选好物',
      path: '/pages/mall/mall'
    };
  }
});
