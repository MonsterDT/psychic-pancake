// pages/webview/webview.js - web-view 容器页逻辑
// 默认加载本地开发服务器的 demo HTML
const DEFAULT_URL = 'http://localhost:8080/makeuppal-demo-v3.6.0.html';

Page({
  data: {
    url: DEFAULT_URL,
    loading: true,
    errorMsg: ''
  },

  // 缓存最近一次 postMessage 的分享数据（postMessage 非实时，仅在后退/销毁/分享时触发）
  _sharePayload: null,

  onLoad(options) {
    console.log('[webview] onLoad, options:', options);
    // 支持外部跳转传 url 参数，便于动态切换 H5 入口
    if (options && options.url) {
      const decodedUrl = decodeURIComponent(options.url);
      console.log('[webview] using custom url:', decodedUrl);
      this.setData({ url: decodedUrl });
    } else {
      console.log('[webview] using default url:', DEFAULT_URL);
    }

    // 3 秒后如果还在 loading，显示排查提示
    this._loadingTimer = setTimeout(() => {
      if (this.data.loading) {
        console.warn('[webview] loading timeout after 3s, showing debug info');
      }
    }, 3000);
  },

  // 接收 H5 通过 wx.miniProgram.postMessage 发送的消息
  // 注意：此回调只在特定时机触发（后退/组件销毁/分享），不是实时的
  onMessage(e) {
    const dataArr = e.detail && e.detail.data;
    if (Array.isArray(dataArr) && dataArr.length > 0) {
      // e.detail.data 是多次 postMessage 累积的数组，取最后一条
      const last = dataArr[dataArr.length - 1];
      if (last && last.type === 'share') {
        this._sharePayload = last;
        getApp().globalData.sharePayload = last;
      }
      console.log('[webview] message received:', last);
    }
  },

  onWebViewLoad(e) {
    console.log('[webview] loaded successfully:', e.detail.src);
    if (this._loadingTimer) {
      clearTimeout(this._loadingTimer);
      this._loadingTimer = null;
    }
    this.setData({ loading: false, errorMsg: '' });
  },

  onWebViewError(e) {
    console.error('[webview] error:', e.detail);
    if (this._loadingTimer) {
      clearTimeout(this._loadingTimer);
      this._loadingTimer = null;
    }

    const errInfo = e.detail || {};
    const errMsg = errInfo.errMsg || JSON.stringify(errInfo) || '未知错误';

    let tip = '页面加载失败。\n\n';
    tip += '请检查以下几项：\n';
    tip += '1. 本地服务器是否启动\n';
    tip += '   (powershell -ExecutionPolicy Bypass -File server.ps1)\n\n';
    tip += '2. 开发者工具是否勾选「不校验合法域名」\n';
    tip += '   详情 → 本地设置 → 不校验合法域名\n\n';
    tip += '3. 错误信息：' + errMsg;

    this.setData({
      loading: false,
      errorMsg: tip
    });
  },

  retryLoad() {
    console.log('[webview] retry loading:', this.data.url);
    this.setData({ loading: true, errorMsg: '' });
    // 强制重新加载：先清空 src，再设置回来
    const currentUrl = this.data.url;
    this.setData({ url: '' });
    setTimeout(() => {
      this.setData({ url: currentUrl });
    }, 100);
  },

  // 用户点击右上角胶囊"转发"时触发
  // 此时 onMessage 已被触发，_sharePayload 已缓存最新分享数据
  onShareAppMessage() {
    const p = this._sharePayload || {};
    return {
      title: p.title || '妆伴 MakeupPal - AI骨相识别专属妆容',
      path: '/pages/webview/webview',
      imageUrl: p.imageUrl || ''
    };
  },

  // 用户点击右上角胶囊"分享到朋友圈"（基础库 2.11.3+）
  onShareTimeline() {
    const p = this._sharePayload || {};
    return {
      title: p.title || '妆伴 MakeupPal - AI骨相识别专属妆容',
      query: ''
    };
  }
});
