// utils/auth.js - 登录状态多重验证

const storage = require('./storage');
const { STORAGE_KEYS } = require('./constants');

/**
 * 检查登录状态 - 多重验证机制
 * 验证条件（满足任一即视为已登录）:
 * 1. localStorage isLoggedIn 标记为 true
 * 2. localStorage userName 存在
 * 3. globalData.gpBalance 存在（demo环境用户数据）
 */
function isLoggedIn() {
  // 检查1: isLoggedIn标记
  const isLoggedInFlag = storage.get(STORAGE_KEYS.IS_LOGGED_IN);
  if (isLoggedInFlag === true || isLoggedInFlag === 'true') {
    return true;
  }
  // 检查2: userName存在
  const userName = storage.get(STORAGE_KEYS.USER_NAME);
  if (userName) {
    return true;
  }
  // 检查3: globalData中的gpBalance（demo环境）
  const app = getApp();
  if (app && app.globalData && typeof app.globalData.gpBalance !== 'undefined') {
    return true;
  }
  return false;
}

// 获取当前用户信息
function getCurrentUser() {
  const app = getApp();
  return {
    userName: storage.get(STORAGE_KEYS.USER_NAME) || (app && app.globalData && app.globalData.userName) || '沈婉清',
    isLoggedIn: isLoggedIn(),
    gpBalance: app && app.globalData ? app.globalData.gpBalance : 0,
    gpRecharged: app && app.globalData ? app.globalData.gpRecharged : 0,
    gpFree: app && app.globalData ? app.globalData.gpFree : 0,
    gpCreatorEarnings: app && app.globalData ? app.globalData.gpCreatorEarnings : 0
  };
}

// 登录状态验证，未登录时引导登录
function requireLogin(callback, redirectMsg) {
  if (isLoggedIn()) {
    if (callback) callback();
    return true;
  }
  // 未登录，显示提示并跳转到我的页面
  wx.showToast({
    title: redirectMsg || '请先登录',
    icon: 'none',
    duration: 1500
  });
  setTimeout(() => {
    wx.switchTab({ url: '/pages/profile/profile' });
  }, 1500);
  return false;
}

// 初始化demo登录状态
function initDemoLoginState() {
  if (!storage.get(STORAGE_KEYS.IS_LOGGED_IN)) {
    storage.set(STORAGE_KEYS.IS_LOGGED_IN, true);
  }
  if (!storage.get(STORAGE_KEYS.USER_NAME)) {
    storage.set(STORAGE_KEYS.USER_NAME, '沈婉清');
  }
}

module.exports = {
  isLoggedIn,
  getCurrentUser,
  requireLogin,
  initDemoLoginState
};
