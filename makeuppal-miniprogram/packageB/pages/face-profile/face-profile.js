// packageB/pages/face-profile/face-profile.js - 面部档案
const { faceProfileData, skinProfile } = require('../../../data/face-profile');
const { getImageUrl } = require('../../../data/images');
const router = require('../../../utils/router');

Page({
  data: {
    name: '',
    avatar: '',
    faceShape: '',
    skinType: '',
    undertone: '',
    // 三维评分（骨相86/皮相78/妆相82）圆形进度条
    scores: [],
    // 六维数据横向条形图
    dimensions: [],
    // 特征标签
    traits: [],
    // 肤质详情表
    skinDetails: [],
    // 推荐妆容3张卡片
    makeupRecommendations: [],
    // 推荐产品列表
    productRecommendations: []
  },

  onLoad() {
    this.loadProfile();
  },

  loadProfile() {
    const data = faceProfileData;
    const scores = data.scores || { bone: 86, skin: 78, makeup: 82 };
    const scoreList = [
      { key: 'bone', name: '骨相', value: scores.bone, color: '#C4956A' },
      { key: 'skin', name: '皮相', value: scores.skin, color: '#D4A03C' },
      { key: 'makeup', name: '妆相', value: scores.makeup, color: '#E8C9A8' }
    ];
    // 圆形进度条参数：周长 = 2πr，r=36，周长约226；偏移量 = 周长 * (1 - value/100)
    const radius = 36;
    const circumference = 2 * Math.PI * radius;
    const scoreCircles = scoreList.map(s => {
      return {
        key: s.key,
        name: s.name,
        value: s.value,
        color: s.color,
        circumference: circumference,
        dashOffset: circumference * (1 - s.value / 100)
      };
    });

    const dimensions = (data.dimensions || []).map(d => ({
      label: d.label,
      value: d.value,
      width: d.value + '%'
    }));

    const traits = data.traits || [];

    const skinDetails = data.skinDetails || [];

    const makeupRecommendations = (data.makeupRecommendations || []).map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        desc: rec.desc,
        tags: rec.tags || [],
        img: rec.img ? getImageUrl(rec.img) : getImageUrl('coverCreator1'),
        products: rec.products || []
      };
    });

    const productRecommendations = (data.productRecommendations || []).map(p => {
      return {
        id: p.id,
        name: p.name,
        brand: p.brand,
        price: p.price,
        priceText: '¥' + p.price,
        desc: p.desc,
        img: p.img ? getImageUrl(p.img) : getImageUrl('coverCreator1')
      };
    });

    this.setData({
      name: data.name || '沈婉清',
      avatar: data.avatar ? getImageUrl(data.avatar) : getImageUrl('avatar_shenwanqing'),
      faceShape: data.faceShape || '鹅蛋脸',
      skinType: data.skinType || '混合性肤质',
      undertone: data.undertone || '暖色调',
      scores: scoreCircles,
      dimensions: dimensions,
      traits: traits,
      skinDetails: skinDetails,
      makeupRecommendations: makeupRecommendations,
      productRecommendations: productRecommendations
    });
  },

  // 跳转模板详情
  onTapRecommend(e) {
    const id = e.currentTarget.dataset.id;
    if (!id) return;
    // 推荐妆容id是 mk001 等，不一定是模板库id，这里尝试跳转
    router.openTemplateDetail(id);
  },

  // 跳转产品详情
  onTapProduct(e) {
    const id = e.currentTarget.dataset.id;
    if (!id) return;
    wx.showToast({ title: '查看产品详情', icon: 'none' });
  }
});
