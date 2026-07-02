// utils/router.js - 页面跳转封装

const { TAB_BAR } = require('./constants');

// tab页路径集合
const TAB_PATHS = new Set(TAB_BAR.tabPages);

// 切换tab页
function switchTab(pageKey) {
  const pathMap = {
    'home': '/pages/home/home',
    'library': '/pages/library/library',
    'mirror': '/pages/mirror/mirror',
    'mall': '/pages/mall/mall',
    'profile': '/pages/profile/profile'
  };
  const path = pathMap[pageKey];
  if (path) {
    wx.switchTab({ url: path });
    // 更新全局currentTab
    const app = getApp();
    if (app) app.globalData.currentTab = pageKey;
  }
}

// 导航到子页面
function navigateTo(url, params) {
  let fullUrl = url;
  if (params) {
    const query = Object.keys(params)
      .map(k => `${k}=${encodeURIComponent(params[k])}`)
      .join('&');
    fullUrl = `${url}?${query}`;
  }
  wx.navigateTo({
    url: fullUrl,
    fail: (err) => {
      console.error('navigateTo failed:', fullUrl, err);
      // 如果是tab页，改用switchTab
      const pathWithoutQuery = url.split('?')[0];
      if (TAB_PATHS.has(pathWithoutQuery.replace(/^\//, ''))) {
        wx.switchTab({ url: pathWithoutQuery });
      }
    }
  });
}

// 返回上一页
function navigateBack(delta = 1) {
  wx.navigateBack({ delta });
}

// 重定向
function redirectTo(url, params) {
  let fullUrl = url;
  if (params) {
    const query = Object.keys(params)
      .map(k => `${k}=${encodeURIComponent(params[k])}`)
      .join('&');
    fullUrl = `${url}?${query}`;
  }
  wx.redirectTo({ url: fullUrl });
}

// 各功能页跳转封装
function openProductDetail(id) {
  navigateTo('/packageA/pages/product-detail/product-detail', { id });
}
function openCart() {
  navigateTo('/packageA/pages/cart/cart');
}
function openOrders() {
  navigateTo('/packageA/pages/orders/orders');
}
function openOrderDetail(id) {
  navigateTo('/packageA/pages/order-detail/order-detail', { id });
}
function openTemplateDetail(id) {
  navigateTo('/packageB/pages/template-detail/template-detail', { id });
}
function openSearch() {
  navigateTo('/packageD/pages/search/search');
}
function openScan() {
  navigateTo('/packageD/pages/scan/scan');
}
function openCompanionChat() {
  navigateTo('/packageD/pages/companion-chat/companion-chat');
}
function openGpCenter() {
  navigateTo('/packageD/pages/gp-center/gp-center');
}
function openCreatorCenter() {
  navigateTo('/packageC/pages/creator/creator');
}
function openFaceProfile() {
  navigateTo('/packageB/pages/face-profile/face-profile');
}

module.exports = {
  switchTab,
  navigateTo,
  navigateBack,
  redirectTo,
  openProductDetail,
  openCart,
  openOrders,
  openOrderDetail,
  openTemplateDetail,
  openSearch,
  openScan,
  openCompanionChat,
  openGpCenter,
  openCreatorCenter,
  openFaceProfile
};
