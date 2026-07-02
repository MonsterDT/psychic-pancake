// pages/mirror/mirror.js - 焕新页（AI虚拟试妆）
const router = require('../../utils/router');
const { getImageUrl } = require('../../data/images');

// 10步妆容教程数据（从demo硬编码）
const MAKEUP_STEPS = [
  { step: 1, name: '底妆', desc: '轻薄粉底均匀肤色，局部遮瑕', duration: '2分钟', icon: '🎨' },
  { step: 2, name: '遮瑕', desc: '黑眼圈、痘印精准遮盖', duration: '1分钟', icon: '✨' },
  { step: 3, name: '眉形', desc: '自然野生眉，填补空隙', duration: '2分钟', icon: '✏️' },
  { step: 4, name: '眼影', desc: '大地色打底，深棕加深眼窝', duration: '3分钟', icon: '👁️' },
  { step: 5, name: '眼线', desc: '细长眼线，眼尾微扬', duration: '2分钟', icon: '🖋️' },
  { step: 6, name: '睫毛', desc: '夹翘睫毛，刷上纤长睫毛膏', duration: '2分钟', icon: '🖤' },
  { step: 7, name: '修容', desc: '鼻梁、脸颊立体修容', duration: '2分钟', icon: '⛰️' },
  { step: 8, name: '腮红', desc: '元气橘色腮红，打圈晕染', duration: '1分钟', icon: '🌸' },
  { step: 9, name: '唇妆', desc: '豆沙色唇釉，渐变咬唇', duration: '1分钟', icon: '💋' },
  { step: 10, name: '定妆', desc: '散粉定妆，喷雾持久', duration: '1分钟', icon: '💨' }
];

Page({
  data: {
    // 摄像头
    cameraReady: true,
    cameraError: false,
    // 教程步骤
    stepList: MAKEUP_STEPS,
    currentStep: 3,
    totalSteps: 10,
    progressPercent: 30,
    currentStepName: '画眼影',
    // 工具栏状态
    filterOn: false,
    lightOn: false,
    // 占位图
    faceGuideImage: ''
  },

  onLoad() {
    // 面部指南图（正面素颜参考图）
    this.setData({
      faceGuideImage: getImageUrl('faceGuide') || 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Beautiful%20Asian%20woman%20bare%20face%20natural%20makeup%20beauty%20portrait%2C%20front%20view%20facing%20camera%2C%20centered%20face%20in%20frame%2C%20symmetrical%20face%2C%20smooth%20glowing%20skin%2C%20soft%20rose%20gold%20lighting%2C%20high%20end%20cosmetics%20photography%2C%20clean%20light%20beige%20background%2C%20eyes%20open%2C%20neutral%20expression&image_size=portrait_4_3'
    });
    this.updateProgress();
  },

  onShow() {
    // 联动自定义tabBar选中态
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 2 });
    }
  },

  // 更新进度
  updateProgress() {
    const percent = Math.round((this.data.currentStep / this.data.totalSteps) * 100);
    const stepName = MAKEUP_STEPS[this.data.currentStep - 1] ? MAKEUP_STEPS[this.data.currentStep - 1].name : '';
    this.setData({
      progressPercent: percent,
      currentStepName: stepName
    });
  },

  // 摄像头错误降级
  onCameraError() {
    this.setData({ cameraReady: false, cameraError: true });
  },

  // 设置入口
  onSettingsTap() {
    router.navigateTo('/packageD/pages/mirror-settings/mirror-settings');
  },

  // 快门
  onShutter() {
    wx.showToast({ title: '试妆效果已保存', icon: 'success', duration: 1500 });
  },

  // 滤镜切换
  onToggleFilter() {
    const next = !this.data.filterOn;
    this.setData({ filterOn: next });
    wx.showToast({ title: next ? '滤镜已开启' : '滤镜已关闭', icon: 'none', duration: 1000 });
  },

  // 补光切换
  onToggleLight() {
    const next = !this.data.lightOn;
    this.setData({ lightOn: next });
    wx.showToast({ title: next ? '补光已开启' : '补光已关闭', icon: 'none', duration: 1000 });
  },

  // 闺蜜引导
  onCompanionGuideTap() {
    router.openCompanionChat();
  },

  // 步骤点击
  onStepTap(e) {
    const step = e.currentTarget.dataset.step;
    if (!step) return;
    this.setData({ currentStep: step });
    this.updateProgress();
    const stepData = MAKEUP_STEPS[step - 1];
    wx.showToast({ title: `第${step}步：${stepData.name}`, icon: 'none', duration: 1200 });
  },

  // 上一步/下一步
  onPrevStep() {
    if (this.data.currentStep <= 1) return;
    this.setData({ currentStep: this.data.currentStep - 1 });
    this.updateProgress();
  },

  onNextStep() {
    if (this.data.currentStep >= this.data.totalSteps) {
      wx.showToast({ title: '妆容已完成！🎉', icon: 'none' });
      return;
    }
    this.setData({ currentStep: this.data.currentStep + 1 });
    this.updateProgress();
  },

  // 闺蜜浮窗
  onCompanionFabTap() {
    router.openCompanionChat();
  },

  onShareAppMessage() {
    return {
      title: '妆伴 - AI虚拟试妆，一键上脸体验',
      path: '/pages/home/home'
    };
  }
});
