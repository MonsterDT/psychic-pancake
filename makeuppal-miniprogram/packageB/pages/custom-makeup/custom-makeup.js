// packageB/pages/custom-makeup/custom-makeup.js - AI定制妆容
const { getImageUrl } = require('../../../data/images');
const router = require('../../../utils/router');
const auth = require('../../../utils/auth');

Page({
  data: {
    // 当前步骤 1-4
    currentStep: 1,
    totalSteps: 4,
    stepTitles: ['选场景', '选风格', '选产品', '生成方案'],
    // 步骤1：场景选择
    scenes: [
      { id: 'daily', name: '日常', icon: '☀️', desc: '通勤、上学、日常出行' },
      { id: 'date', name: '约会', icon: '💕', desc: '甜蜜约会、浪漫晚餐' },
      { id: 'work', name: '职场', icon: '💼', desc: '商务会议、正式场合' },
      { id: 'party', name: '派对', icon: '🎉', desc: '聚会派对、夜店狂欢' },
      { id: 'wedding', name: '婚礼', icon: '💒', desc: '婚礼出席、新娘妆容' }
    ],
    selectedScene: '',
    // 步骤2：风格选择
    styles: [
      { id: 'natural', name: '自然', icon: '🌿', desc: '清新裸妆，伪素颜感' },
      { id: 'sweet', name: '甜美', icon: '🌸', desc: '粉嫩少女，温柔可爱' },
      { id: 'elegant', name: '优雅', icon: '💎', desc: '知性气质，精致大方' },
      { id: 'cool', name: '酷飒', icon: '⚡', desc: '气场全开，帅气利落' },
      { id: 'retro', name: '复古', icon: '🎬', desc: '港风复古，韵味十足' }
    ],
    selectedStyle: '',
    // 步骤3：产品偏好
    productPrefs: [
      { id: 'base', name: '底妆', icon: '🧴', options: ['轻薄水润', '持妆哑光', '遮瑕无瑕'], selected: '' },
      { id: 'eye', name: '眼妆', icon: '👁️', options: ['大地深邃', '粉色桃花', '烟熏酷感'], selected: '' },
      { id: 'lip', name: '唇妆', icon: '💄', options: ['裸色温柔', '正红气场', '浆果浓郁'], selected: '' }
    ],
    // 步骤4：生成方案
    isGenerating: false,
    generatedPlan: null
  },

  // 选择场景
  onSelectScene(e) {
    const id = e.currentTarget.dataset.id;
    this.setData({ selectedScene: id });
  },

  // 选择风格
  onSelectStyle(e) {
    const id = e.currentTarget.dataset.id;
    this.setData({ selectedStyle: id });
  },

  // 选择产品偏好
  onSelectProduct(e) {
    const { pref, option } = e.currentTarget.dataset;
    const prefs = this.data.productPrefs.map(p => {
      if (p.id === pref) {
        return Object.assign({}, p, { selected: option });
      }
      return p;
    });
    this.setData({ productPrefs: prefs });
  },

  // 下一步
  onNextStep() {
    const step = this.data.currentStep;
    if (step === 1 && !this.data.selectedScene) {
      wx.showToast({ title: '请先选择场景', icon: 'none' });
      return;
    }
    if (step === 2 && !this.data.selectedStyle) {
      wx.showToast({ title: '请先选择风格', icon: 'none' });
      return;
    }
    if (step === 3) {
      const allSelected = this.data.productPrefs.every(p => p.selected);
      if (!allSelected) {
        wx.showToast({ title: '请完成所有产品偏好选择', icon: 'none' });
        return;
      }
    }

    if (step < this.data.totalSteps) {
      const next = step + 1;
      this.setData({ currentStep: next });
      if (next === 4) {
        this.generatePlan();
      }
    }
  },

  // 上一步
  onPrevStep() {
    if (this.data.currentStep > 1) {
      this.setData({ currentStep: this.data.currentStep - 1 });
    }
  },

  // 生成方案
  generatePlan() {
    if (!auth.isLoggedIn()) {
      wx.showToast({ title: '请先登录', icon: 'none' });
      return;
    }
    this.setData({ isGenerating: true });
    // 模拟AI生成
    setTimeout(() => {
      const scene = this.data.scenes.find(s => s.id === this.data.selectedScene);
      const style = this.data.styles.find(s => s.id === this.data.selectedStyle);
      const prefs = this.data.productPrefs;

      const plan = {
        title: this.buildPlanName(scene, style),
        scene: scene ? scene.name : '',
        style: style ? style.name : '',
        coverImage: getImageUrl('coverCreator1'),
        summary: this.buildSummary(scene, style, prefs),
        steps: this.buildSteps(prefs),
        products: this.buildProducts(prefs),
        tips: this.buildTips(scene, style)
      };
      this.setData({
        isGenerating: false,
        generatedPlan: plan
      });
    }, 1500);
  },

  // 构建方案名称
  buildPlanName(scene, style) {
    if (!scene || !style) return 'AI定制妆容';
    return style.name + scene.name + '妆';
  },

  // 构建摘要
  buildSummary(scene, style, prefs) {
    const sceneDesc = scene ? scene.desc : '';
    const styleDesc = style ? style.desc : '';
    const base = prefs.find(p => p.id === 'base');
    const eye = prefs.find(p => p.id === 'eye');
    const lip = prefs.find(p => p.id === 'lip');
    return '基于' + scene.name + '场景与' + style.name + '风格定制，' +
      '采用' + (base ? base.selected : '') + '底妆、' +
      (eye ? eye.selected : '') + '眼妆、' +
      (lip ? lip.selected : '') + '唇妆。' + styleDesc;
  },

  // 构建步骤
  buildSteps(prefs) {
    const base = prefs.find(p => p.id === 'base');
    const eye = prefs.find(p => p.id === 'eye');
    const lip = prefs.find(p => p.id === 'lip');
    return [
      { num: 1, title: '基础护肤打底', desc: '洁面后依次涂抹化妆水、精华、乳液，做好妆前保湿。' },
      { num: 2, title: '底妆', desc: '取适量粉底液，由内向外均匀涂抹，' + (base ? base.selected : '') + '质感。T区薄涂，两颊可略厚。' },
      { num: 3, title: '眉形修饰', desc: '根据脸型描画自然眉形，眉头淡眉尾深。' },
      { num: 4, title: '眼妆', desc: '使用' + (eye ? eye.selected : '') + '风格眼影，由浅到深晕染，描画眼线并刷翘睫毛。' },
      { num: 5, title: '唇妆', desc: '涂抺' + (lip ? lip.selected : '') + '色口红，由内向外自然晕染。' },
      { num: 6, title: '定妆', desc: '轻扫散粉或喷定妆喷雾，让妆容更持久。' }
    ];
  },

  // 构建产品推荐
  buildProducts(prefs) {
    const base = prefs.find(p => p.id === 'base');
    const eye = prefs.find(p => p.id === 'eye');
    const lip = prefs.find(p => p.id === 'lip');
    const products = [];
    if (base && base.selected) {
      products.push({ name: '兰蔻持妆轻透粉底液', desc: base.selected + '底妆', img: getImageUrl('foundation2') });
    }
    if (eye && eye.selected) {
      products.push({ name: 'Tom Ford四色眼影盘', desc: eye.selected + '眼妆', img: getImageUrl('eyeshadow3') });
    }
    if (lip && lip.selected) {
      products.push({ name: 'YSL小金条细管口红', desc: lip.selected + '唇妆', img: getImageUrl('lipstick1') });
    }
    return products;
  },

  // 构建小贴士
  buildTips(scene, style) {
    const tips = [];
    if (scene && scene.id === 'wedding') {
      tips.push('婚礼妆容建议选择持妆型底妆，确保全天不脱妆。');
    }
    if (scene && scene.id === 'party') {
      tips.push('派对场合可适当加重眼妆与唇妆，提升存在感。');
    }
    if (style && style.id === 'natural') {
      tips.push('自然风妆容讲究轻薄，建议使用素颜霜替代粉底。');
    }
    tips.push('定妆后2小时可补涂一次，保持妆容新鲜。');
    return tips;
  },

  // 重新生成
  onRegenerate() {
    this.setData({
      currentStep: 1,
      selectedScene: '',
      selectedStyle: '',
      productPrefs: this.data.productPrefs.map(p => Object.assign({}, p, { selected: '' })),
      generatedPlan: null
    });
  },

  // 立即试用
  onTryNow() {
    wx.showToast({
      title: '正在打开试妆镜...',
      icon: 'none',
      duration: 800
    });
    setTimeout(() => {
      router.switchTab('mirror');
    }, 600);
  },

  // 保存方案
  onSavePlan() {
    wx.showToast({ title: '方案已保存', icon: 'success' });
  }
});
