// app.js - 妆伴 MakeupPal 小程序入口
App({
  globalData: {
    // 用户信息
    userName: '沈婉清',
    isLoggedIn: true,

    // 焕新值（GP）相关 - 三处数据一致性通过globalData同步
    gpBalance: 328,
    gpRecharged: 200,
    gpFree: 128,
    gpCreatorEarnings: 0,

    // 当前Tab
    currentTab: 'home',

    // 购物车
    cartItems: [],
    cartCount: 0,

    // 颜库状态
    currentLibraryCat: 'creators',
    currentLibraryMode: 'card', // card | waterfall

    // 设备信息
    safeTop: 0,
    safeBottom: 0,
    windowWidth: 375,
    windowHeight: 667,
    systemInfo: null
  },

  onLaunch() {
    // 初始化登录状态
    const isLoggedIn = wx.getStorageSync('isLoggedIn');
    if (isLoggedIn === '' || isLoggedIn === undefined || isLoggedIn === null) {
      wx.setStorageSync('isLoggedIn', true);
    }

    // 获取设备信息（替代 env() CSS函数）
    const systemInfo = wx.getSystemInfoSync();
    this.globalData.systemInfo = systemInfo;
    this.globalData.safeTop = systemInfo.safeArea ? systemInfo.safeArea.top : 0;
    this.globalData.safeBottom = systemInfo.safeArea
      ? systemInfo.screenHeight - systemInfo.safeArea.bottom
      : 0;
    this.globalData.windowWidth = systemInfo.windowWidth;
    this.globalData.windowHeight = systemInfo.windowHeight;

    // 初始化购物车数量
    this.updateCartCount();
  },

  // 更新购物车数量
  updateCartCount() {
    const cart = wx.getStorageSync('cartItems') || [];
    const count = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
    this.globalData.cartItems = cart;
    this.globalData.cartCount = count;

    // 更新tabBar角标
    if (count > 0) {
      wx.setTabBarBadge({ index: 3, text: String(count) });
    } else {
      wx.removeTabBarBadge({ index: 3 });
    }
  },

  // 更新焕新值（全局同步）
  updateGp(gpRecharged, gpFree, gpCreatorEarnings) {
    if (gpRecharged !== undefined) this.globalData.gpRecharged = gpRecharged;
    if (gpFree !== undefined) this.globalData.gpFree = gpFree;
    if (gpCreatorEarnings !== undefined) this.globalData.gpCreatorEarnings = gpCreatorEarnings;
    this.globalData.gpBalance =
      this.globalData.gpRecharged + this.globalData.gpFree + this.globalData.gpCreatorEarnings;
  }
});
