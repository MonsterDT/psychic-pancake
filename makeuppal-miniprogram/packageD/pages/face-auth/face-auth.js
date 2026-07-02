// packageD/pages/face-auth/face-auth.js - 面部认证
const storage = require('../../../utils/storage');
const { STORAGE_KEYS } = require('../../../utils/constants');
const router = require('../../../utils/router');

const ANALYZING_TEXTS = [
  '检测面部轮廓...',
  '识别肤质特征...',
  '分析肤色色调...',
  '生成美妆档案...'
];

Page({
  data: {
    step: 1,
    hasCameraAuth: true,
    authDone: false,
    analyzingText: ANALYZING_TEXTS[0]
  },

  onLoad() {
    this.cameraCtx = null;
    this.analyzeTimer = null;
    this.textTimer = null;

    // 已同意协议，直接进入拍照
    const agreed = storage.get(STORAGE_KEYS.FA_AGREED, false);
    if (agreed) {
      this.setData({ step: 2 });
      this.checkCameraAuth();
    }
  },

  onUnload() {
    if (this.analyzeTimer) clearTimeout(this.analyzeTimer);
    if (this.textTimer) clearInterval(this.textTimer);
  },

  // 步骤1：同意
  onAgree() {
    storage.set(STORAGE_KEYS.FA_AGREED, true);
    this.setData({ step: 2 });
    this.checkCameraAuth();
  },

  checkCameraAuth() {
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.camera'] === false) {
          this.setData({ hasCameraAuth: false });
        } else {
          this.setData({ hasCameraAuth: true });
          this.cameraCtx = wx.createCameraContext();
        }
      },
      fail: () => {
        this.setData({ hasCameraAuth: true });
        this.cameraCtx = wx.createCameraContext();
      }
    });
  },

  onCameraError() {
    this.setData({ hasCameraAuth: false });
  },

  onRequestCameraAuth() {
    wx.openSetting({
      success: (res) => {
        if (res.authSetting['scope.camera']) {
          this.setData({ hasCameraAuth: true });
          this.cameraCtx = wx.createCameraContext();
        }
      }
    });
  },

  // 步骤2：拍照
  onCapture() {
    if (!this.cameraCtx) {
      this.cameraCtx = wx.createCameraContext();
    }
    wx.showLoading({ title: '拍摄中...' });
    this.cameraCtx.takePhoto({
      quality: 'high',
      success: () => {
        wx.hideLoading();
        this.startAnalyzing();
      },
      fail: (err) => {
        wx.hideLoading();
        console.error('拍照失败:', err);
        wx.showToast({ title: '拍照失败，请重试', icon: 'none' });
      }
    });
  },

  // 步骤3：分析中
  startAnalyzing() {
    this.setData({ step: 3, authDone: false, analyzingText: ANALYZING_TEXTS[0] });

    // 文案轮播
    let idx = 0;
    this.textTimer = setInterval(() => {
      idx = (idx + 1) % ANALYZING_TEXTS.length;
      this.setData({ analyzingText: ANALYZING_TEXTS[idx] });
    }, 800);

    // 2.4s 后显示成功
    this.analyzeTimer = setTimeout(() => {
      clearInterval(this.textTimer);
      // 标记认证完成
      storage.set(STORAGE_KEYS.FACE_AUTH_DONE, true);
      this.setData({ authDone: true });
    }, 2400);
  },

  // 完成
  onFinish() {
    router.navigateBack();
  }
});
