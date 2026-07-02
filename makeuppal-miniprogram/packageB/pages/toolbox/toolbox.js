// packageB/pages/toolbox/toolbox.js - 美妆工具箱
Page({
  data: {
    // 工具网格
    tools: [
      { id: 'shade', name: '色号对比', icon: '🎨', desc: '对比不同色号差异', color: '#C45C5C' },
      { id: 'expiry', name: '保质期查询', icon: '📅', desc: '查看产品保质期与开封后效期', color: '#D4A03C' },
      { id: 'skin', name: '肤质测试', icon: '💧', desc: '快速测试你的肤质类型', color: '#5B8EC4' },
      { id: 'face', name: '脸型分析', icon: '🙂', desc: 'AI识别你的脸型特征', color: '#C4956A' },
      { id: 'tone', name: '肤色检测', icon: '🌈', desc: '检测肤色冷暖调', color: '#6B9E6B' },
      { id: 'season', name: '季节推荐', icon: '🌸', desc: '根据季节推荐妆容与护肤', color: '#A67B52' }
    ],
    // 当前弹窗
    modalVisible: false,
    modalTitle: '',
    modalContent: ''
  },

  // 点击工具
  onTapTool(e) {
    const id = e.currentTarget.dataset.id;
    const tool = this.data.tools.find(t => t.id === id);
    if (!tool) return;

    // 不同工具显示不同模拟功能
    switch (id) {
      case 'shade':
        this.showShadeCompare(tool);
        break;
      case 'expiry':
        this.showExpiryQuery(tool);
        break;
      case 'skin':
        this.showSkinTest(tool);
        break;
      case 'face':
        this.showFaceAnalysis(tool);
        break;
      case 'tone':
        this.showToneDetect(tool);
        break;
      case 'season':
        this.showSeasonRecommend(tool);
        break;
      default:
        wx.showToast({ title: '功能开发中', icon: 'none' });
    }
  },

  // 色号对比
  showShadeCompare(tool) {
    this.setData({
      modalVisible: true,
      modalTitle: tool.name,
      modalContent: 'shade'
    });
  },

  // 保质期查询
  showExpiryQuery(tool) {
    this.setData({
      modalVisible: true,
      modalTitle: tool.name,
      modalContent: 'expiry'
    });
  },

  // 肤质测试
  showSkinTest(tool) {
    wx.showToast({
      title: '即将进入肤质测试',
      icon: 'none',
      duration: 1200
    });
    setTimeout(() => {
      this.setData({
        modalVisible: true,
        modalTitle: tool.name,
        modalContent: 'skin'
      });
    }, 1200);
  },

  // 脸型分析
  showFaceAnalysis(tool) {
    wx.showToast({
      title: '请上传正面照进行分析',
      icon: 'none',
      duration: 1200
    });
  },

  // 肤色检测
  showToneDetect(tool) {
    this.setData({
      modalVisible: true,
      modalTitle: tool.name,
      modalContent: 'tone'
    });
  },

  // 季节推荐
  showSeasonRecommend(tool) {
    this.setData({
      modalVisible: true,
      modalTitle: tool.name,
      modalContent: 'season'
    });
  },

  // 关闭弹窗
  onCloseModal() {
    this.setData({ modalVisible: false });
  },

  // 阻止冒泡
  noop() {},

  // 选择色号对比
  onSelectShade() {
    wx.showToast({ title: '已加入对比', icon: 'success' });
  },

  // 查询保质期
  onQueryExpiry() {
    wx.showToast({ title: '请输入批号查询', icon: 'none' });
  },

  // 肤质测试结果
  onFinishSkinTest() {
    wx.showToast({ title: '测试完成：混合性肤质', icon: 'none' });
    setTimeout(() => {
      this.setData({ modalVisible: false });
    }, 1500);
  },

  // 肤色检测
  onDetectTone() {
    wx.showToast({ title: '检测结果：暖黄皮', icon: 'none' });
    setTimeout(() => {
      this.setData({ modalVisible: false });
    }, 1500);
  }
});
