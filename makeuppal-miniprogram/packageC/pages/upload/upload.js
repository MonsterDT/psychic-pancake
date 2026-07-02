// packageC/pages/upload/upload.js - 发布作品4步流程
const router = require('../../../utils/router');

Page({
  data: {
    currentStep: 1, // 1-4
    steps: [
      { step: 1, label: '选类目' },
      { step: 2, label: '传图片' },
      { step: 3, label: '填信息' },
      { step: 4, label: '预览' }
    ],
    // 步骤1：类目
    categories: [
      { key: 'daren', label: '达人精选', icon: '👩' },
      { key: 'jubu', label: '局部拆解', icon: '👁' },
      { key: 'gufeng', label: '国风专区', icon: '🏮' },
      { key: 'yinfa', label: '银发专区', icon: '🤍' },
      { key: 'star', label: '明星同款', icon: '⭐' },
      { key: 'creative', label: '创意妆造', icon: '🎨' }
    ],
    selectedCategory: '',
    // 步骤2：图片
    mediaList: [],
    // 步骤3：信息
    form: {
      title: '',
      desc: '',
      tags: '',
      priceGP: ''
    },
    // 步骤4：预览汇总
    preview: null
  },

  onLoad() {
    // 初始化
  },

  // ===== 步骤1：选择类目 =====
  onCategoryTap(e) {
    const key = e.currentTarget.dataset.key;
    this.setData({ selectedCategory: key });
  },

  // ===== 步骤2：上传图片 =====
  onChooseMedia() {
    const that = this;
    wx.chooseMedia({
      count: 9,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      sizeType: ['compressed'],
      success(res) {
        const files = res.tempFiles || [];
        const list = files.map(function (f) {
          return { tempFilePath: f.tempFilePath, size: f.size };
        });
        that.setData({
          mediaList: that.data.mediaList.concat(list)
        });
      },
      fail() {
        wx.showToast({ title: '已取消选择', icon: 'none' });
      }
    });
  },

  onRemoveMedia(e) {
    const idx = e.currentTarget.dataset.index;
    const list = this.data.mediaList.slice();
    list.splice(idx, 1);
    this.setData({ mediaList: list });
  },

  // ===== 步骤3：表单输入 =====
  onTitleInput(e) {
    this.setData({ 'form.title': e.detail.value });
  },
  onDescInput(e) {
    this.setData({ 'form.desc': e.detail.value });
  },
  onTagsInput(e) {
    this.setData({ 'form.tags': e.detail.value });
  },
  onPriceInput(e) {
    // 仅允许数字，严防负数
    let val = (e.detail.value || '').toString().replace(/[^0-9]/g, '');
    this.setData({ 'form.priceGP': val });
  },

  // ===== 步骤导航 =====
  onNext() {
    const step = this.data.currentStep;
    if (step === 1) {
      if (!this.data.selectedCategory) {
        wx.showToast({ title: '请先选择类目', icon: 'none' });
        return;
      }
      this.setData({ currentStep: 2 });
      return;
    }
    if (step === 2) {
      if (this.data.mediaList.length === 0) {
        wx.showToast({ title: '请至少上传1张图片', icon: 'none' });
        return;
      }
      this.setData({ currentStep: 3 });
      return;
    }
    if (step === 3) {
      const f = this.data.form;
      if (!f.title) {
        wx.showToast({ title: '请填写标题', icon: 'none' });
        return;
      }
      if (!f.desc) {
        wx.showToast({ title: '请填写描述', icon: 'none' });
        return;
      }
      // 生成预览汇总
      const cat = this.data.categories.find(function (c) {
        return c.key === this.data.selectedCategory;
      }, this);
      this.setData({
        currentStep: 4,
        preview: {
          categoryLabel: cat ? cat.label : this.data.selectedCategory,
          cover: this.data.mediaList[0].tempFilePath,
          imgCount: this.data.mediaList.length,
          title: f.title,
          desc: f.desc,
          tags: f.tags,
          priceGP: f.priceGP || '0'
        }
      });
      return;
    }
  },

  onPrev() {
    if (this.data.currentStep > 1) {
      this.setData({ currentStep: this.data.currentStep - 1 });
    }
  },

  // ===== 步骤4：发布（仅末端显示）=====
  onPublish() {
    wx.showToast({ title: '发布成功', icon: 'success' });
    const that = this;
    setTimeout(function () {
      router.navigateBack();
    }, 1200);
  },

  onShareAppMessage() {
    return {
      title: '妆伴 - 发布你的美妆作品',
      path: '/packageC/pages/creator/creator'
    };
  }
});
