// packageD/pages/scan/scan.js - 成分扫描
Page({
  data: {
    hasCameraAuth: true,
    showResult: false,
    overallRisk: 'low',
    riskText: '低风险',
    ingredients: [
      { name: '水 (Aqua)', desc: '溶剂，化妆品中最常见的基础成分', riskLevel: 'low', riskLabel: '安全' },
      { name: '甘油 (Glycerin)', desc: '保湿剂，能吸附水分保持皮肤水润', riskLevel: 'low', riskLabel: '安全' },
      { name: '尼泊金酯 (Parabens)', desc: '防腐剂，可能引起部分人群过敏', riskLevel: 'medium', riskLabel: '谨慎' }
    ]
  },

  onLoad() {
    this.cameraCtx = null;
    this.checkCameraAuth();
  },

  checkCameraAuth() {
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.camera'] === false) {
          this.setData({ hasCameraAuth: false });
        } else {
          this.setData({ hasCameraAuth: true });
          // 创建相机上下文
          this.cameraCtx = wx.createCameraContext();
        }
      },
      fail: () => {
        // 未授权过，默认显示相机
        this.setData({ hasCameraAuth: true });
        this.cameraCtx = wx.createCameraContext();
      }
    });
  },

  onCameraError(e) {
    console.error('相机错误:', e);
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

  onTakePhoto() {
    if (!this.cameraCtx) {
      this.cameraCtx = wx.createCameraContext();
    }
    wx.showLoading({ title: '识别中...' });
    this.cameraCtx.takePhoto({
      quality: 'normal',
      success: () => {
        setTimeout(() => {
          wx.hideLoading();
          this.showScanResult();
        }, 800);
      },
      fail: (err) => {
        wx.hideLoading();
        console.error('拍照失败:', err);
        wx.showToast({ title: '拍照失败，请重试', icon: 'none' });
      }
    });
  },

  onChooseFromAlbum() {
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['album'],
      success: () => {
        wx.showLoading({ title: '识别中...' });
        setTimeout(() => {
          wx.hideLoading();
          this.showScanResult();
        }, 800);
      },
      fail: () => {
        wx.showToast({ title: '已取消选择', icon: 'none' });
      }
    });
  },

  showScanResult() {
    // 模拟分析结果
    this.setData({
      showResult: true,
      overallRisk: 'medium',
      riskText: '中风险'
    });
  },

  onRescan() {
    this.setData({ showResult: false });
  }
});
