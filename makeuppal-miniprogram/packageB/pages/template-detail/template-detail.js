// packageB/pages/template-detail/template-detail.js - 妆容模板详情
const { findTemplateById } = require('../../../data/library-extra');
const { getImageUrl } = require('../../../data/images');
const storage = require('../../../utils/storage');
const router = require('../../../utils/router');
const auth = require('../../../utils/auth');

Page({
  data: {
    templateId: '',
    template: null,
    coverImage: '',
    title: '',
    author: '',
    avatar: '',
    likes: 0,
    likesText: '',
    desc: '',
    tags: [],
    occasion: '',
    difficulty: 1,
    difficultyText: '',
    steps: [],
    isFavorite: false,
    hasLiked: false
  },

  onLoad(options) {
    const id = options.id || '';
    this.setData({ templateId: id });
    this.loadTemplate(id);
  },

  // 加载模板详情
  loadTemplate(id) {
    if (!id) {
      wx.showToast({ title: '模板不存在', icon: 'none' });
      return;
    }
    const tpl = findTemplateById(id);
    if (!tpl) {
      wx.showToast({ title: '未找到该模板', icon: 'none' });
      return;
    }
    // 标准化字段，兼容 libraryFeed 与 makeupLibraryData 两种结构
    const title = tpl.title || tpl.name || '未知妆容';
    const author = tpl.creatorName || tpl.authorName || tpl.author || '匿名达人';
    const avatar = tpl.creatorAvatar || tpl.authorAvatar || '';
    const desc = tpl.summary || tpl.description || tpl.desc || '';
    const image = tpl.coverImage ? getImageUrl(tpl.coverImage) : (tpl.image ? (tpl.image.indexOf('http') === 0 ? tpl.image : getImageUrl(tpl.image)) : getImageUrl('coverCreator1'));
    const tags = tpl.tags || (tpl.tag ? [tpl.tag] : []);
    const likes = tpl.likes || 0;
    const occasion = tpl.occasion || tpl.category || tpl.scene || '';
    const difficulty = tpl.difficulty || 1;
    const tools = tpl.tools || [];

    // 步骤拆解：把 steps 字符串数组映射为带序号+描述+产品的对象
    const stepList = Array.isArray(tpl.steps) ? tpl.steps : [];
    const steps = stepList.map((s, idx) => {
      const descText = typeof s === 'string' ? s : (s.description || s.desc || s.title || '');
      const titleText = typeof s === 'string' ? ('第' + (idx + 1) + '步') : (s.title || ('第' + (idx + 1) + '步'));
      const products = typeof s === 'object' && Array.isArray(s.products) ? s.products : (tools[idx] ? [tools[idx]] : []);
      return {
        num: idx + 1,
        title: titleText,
        desc: descText,
        products: products
      };
    });

    const favStatus = storage.isFavorite(id);

    this.setData({
      template: tpl,
      coverImage: image,
      title: title,
      author: author,
      avatar: avatar,
      likes: likes,
      likesText: this.formatLikes(likes),
      desc: desc,
      tags: tags,
      occasion: occasion,
      difficulty: difficulty,
      difficultyText: this.formatDifficulty(difficulty),
      steps: steps,
      isFavorite: favStatus
    });
  },

  // 格式化点赞数
  formatLikes(num) {
    if (num >= 10000) {
      return (num / 10000).toFixed(1) + 'w';
    }
    return String(num);
  },

  // 格式化难度
  formatDifficulty(d) {
    const map = { 1: '入门', 2: '简单', 3: '中等', 4: '进阶', 5: '高级' };
    return map[d] || '中等';
  },

  // 喜欢操作（点赞）
  onLike() {
    // 多重登录验证：isLoggedIn / userName / gpBalance
    if (!auth.isLoggedIn()) {
      wx.showToast({ title: '请先登录', icon: 'none' });
      return;
    }
    const next = !this.data.hasLiked;
    this.setData({
      hasLiked: next,
      likes: next ? this.data.likes + 1 : Math.max(0, this.data.likes - 1),
      likesText: this.formatLikes(next ? this.data.likes + 1 : Math.max(0, this.data.likes - 1))
    });
    wx.showToast({
      title: next ? '已点赞' : '取消点赞',
      icon: 'none'
    });
  },

  // 收藏操作
  onFavorite() {
    // 多重登录验证
    if (!auth.isLoggedIn()) {
      wx.showToast({ title: '请先登录', icon: 'none' });
      return;
    }
    const id = this.data.templateId;
    if (this.data.isFavorite) {
      storage.removeFavoriteTemplate(id);
      this.setData({ isFavorite: false });
      wx.showToast({ title: '已取消收藏', icon: 'none' });
    } else {
      storage.addFavoriteTemplate(id);
      this.setData({ isFavorite: true });
      wx.showToast({ title: '收藏成功', icon: 'success' });
    }
  },

  // 分享
  onShareAppMessage() {
    return {
      title: this.data.title + ' - 妆伴 MakeupPal',
      path: '/packageB/pages/template-detail/template-detail?id=' + this.data.templateId
    };
  },

  // 立即试用 - 跳转焕新镜面页
  onTryNow() {
    if (!auth.isLoggedIn()) {
      wx.showToast({ title: '请先登录', icon: 'none' });
      return;
    }
    wx.showToast({
      title: '正在打开试妆镜...',
      icon: 'none',
      duration: 800
    });
    setTimeout(() => {
      router.switchTab('mirror');
    }, 600);
  },

  // 预览大图
  onPreviewImage() {
    if (!this.data.coverImage) return;
    wx.previewImage({
      current: this.data.coverImage,
      urls: [this.data.coverImage]
    });
  }
});
