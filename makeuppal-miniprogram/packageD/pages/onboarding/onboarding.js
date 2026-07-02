// packageD/pages/onboarding/onboarding.js - 引导页
const router = require('../../../utils/router');
const { getImageUrl } = require('../../../data/images');

Page({
  data: {
    current: 0,
    safeTop: 0,
    safeBottom: 0,
    steps: [
      {
        step: 1,
        title: '美妆魔镜 AI 试妆',
        desc: '打开摄像头即可实时预览妆容效果，所见即所得，告别盲选口红颜色',
        image: getImageUrl('coverCreator1')
      },
      {
        step: 2,
        title: '颜库海量妆容',
        desc: '达人精选、局部教程、国风专区、银发专区...海量灵感妆容任你挑选',
        image: getImageUrl('coverCreator3')
      },
      {
        step: 3,
        title: '小美 AI 闺蜜推荐',
        desc: '专属美妆闺蜜小美，根据你的肤质和场合，一对一智能推荐最适合的妆容',
        image: getImageUrl('coverCreator5')
      },
      {
        step: 4,
        title: '成分安全检测',
        desc: '扫一扫产品成分表，AI 智能识别风险等级，敏感肌也能放心选购化妆品',
        image: getImageUrl('coverCreator7')
      }
    ]
  },

  onLoad() {
    try {
      const info = wx.getSystemInfoSync();
      const safeTop = info.safeArea ? info.safeArea.top : 0;
      const safeBottom = info.safeArea ? (info.screenHeight - info.safeArea.bottom) : 0;
      this.setData({ safeTop: safeTop, safeBottom: safeBottom });
    } catch (e) {
      console.error('getSystemInfoSync failed', e);
    }
  },

  onSwiperChange(e) {
    this.setData({ current: e.detail.current });
  },

  onNext() {
    const next = this.data.current + 1;
    if (next < this.data.steps.length) {
      this.setData({ current: next });
    }
  },

  onSkip() {
    this.goHome();
  },

  onStart() {
    this.goHome();
  },

  goHome() {
    router.switchTab('home');
  }
});
