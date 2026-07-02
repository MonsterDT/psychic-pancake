// utils/system-info.js - 设备信息与安全区域

let systemInfo = null;
let safeAreaData = null;

// 获取系统信息（缓存）
function getSystemInfo() {
  if (systemInfo) return systemInfo;
  try {
    systemInfo = wx.getSystemInfoSync();
  } catch (e) {
    systemInfo = {
      windowWidth: 375,
      windowHeight: 667,
      safeArea: { top: 0, bottom: 667, height: 667 }
    };
  }
  return systemInfo;
}

// 获取安全区域数据
function getSafeArea() {
  if (safeAreaData) return safeAreaData;
  const info = getSystemInfo();
  const safeArea = info.safeArea || { top: 0, bottom: info.windowHeight, height: info.windowHeight };
  safeAreaData = {
    safeTop: safeArea.top || 0,
    safeBottom: info.windowHeight - (safeArea.bottom || info.windowHeight),
    windowWidth: info.windowWidth,
    windowHeight: info.windowHeight,
    statusBarHeight: info.statusBarHeight || 20,
    navBarHeight: 44,
    tabBarHeight: 56
  };
  return safeAreaData;
}

// 获取安全区域顶部高度
function getSafeTop() {
  return getSafeArea().safeTop;
}

// 获取安全区域底部高度
function getSafeBottom() {
  return getSafeArea().safeBottom;
}

// 获取窗口宽度
function getWindowWidth() {
  return getSafeArea().windowWidth;
}

module.exports = {
  getSystemInfo,
  getSafeArea,
  getSafeTop,
  getSafeBottom,
  getWindowWidth
};
