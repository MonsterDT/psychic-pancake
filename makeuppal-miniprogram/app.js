// app.js - 妆伴 MakeupPal web-view 壳工程入口
App({
  onLaunch() {
    console.log('[MakeupPal] web-view shell launched');
  },
  globalData: {
    // 缓存从 H5 postMessage 收到的分享数据，供 onShareAppMessage 读取
    sharePayload: null
  }
});
