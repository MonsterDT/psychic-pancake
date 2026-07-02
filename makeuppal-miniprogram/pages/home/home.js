// pages/home/home.js - 首页
const router = require('../../utils/router');
const { faceProfileData } = require('../../data/face-profile');
const { getImageUrl } = require('../../data/images');

Page({
  data: {
    // 面部档案
    faceProfile: null,
    // 轮播
    bannerList: [],
    bannerCurrent: 0,
    // 本周热度榜
    trendingList: [],
    // 瀑布流
    waterfallList: [],
    // 骨相分
    boneScore: 86
  },

  onLoad() {
    this.initData();
  },

  onShow() {
    // 切换tab时选中首页
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 0 });
    }
  },

  onPullDownRefresh() {
    this.initData();
    wx.stopPullDownRefresh();
  },

  initData() {
    const app = getApp();
    // 面部档案（取前3个特征标签）
    const traits = (faceProfileData.traits || []).slice(0, 3);
    this.setData({
      faceProfile: {
        name: faceProfileData.name,
        faceShape: faceProfileData.faceShape,
        skinType: faceProfileData.skinType,
        undertone: faceProfileData.undertone,
        avatar: faceProfileData.avatar,
        boneScore: faceProfileData.scores.bone,
        traits: traits
      }
    });

    // 轮播Banner（4张，对应demo的hero slides）
    this.setData({
      bannerList: [
        { id: 0, badge: 'AI 焕新妆造', badgeClass: 'ai', title: '为你而定制，更懂你的美', desc: 'AI骨相识别 · 大数据妆容库 · 千人千面不撞脸', img: getImageUrl('coverCreator2'), action: 'mirror' },
        { id: 1, badge: '颜库精选', badgeClass: '', title: '发现灵感妆容', desc: '10万+优质妆容模板 · 风格全覆盖', img: getImageUrl('coverCreator5'), action: 'library' },
        { id: 2, badge: '美妆市集', badgeClass: 'mall', title: '正品好物一站购', desc: '精选全球大牌 · 新客首单立减30', img: getImageUrl('lipstick1'), action: 'mall' },
        { id: 3, badge: 'AI成分检测', badgeClass: 'science', title: '成分安全扫一扫', desc: '10000+成分数据库 · 中欧美三方法规对照', img: getImageUrl('skincare1'), action: 'scan' }
      ]
    });

    // 本周热度榜（5张卡片）
    this.setData({
      trendingList: [
        { id: 'c002', name: '浓颜系千金妆', author: '阿紫的美学日记', price: '50 GP', img: getImageUrl('coverCreator2'), rank: 1 },
        { id: 'c003', name: '纯欲白开水妆', author: '桃子软糖', price: '免费', img: getImageUrl('coverCreator3'), rank: 2 },
        { id: 'g001', name: '大唐盛世妆', author: '花西子', price: '80 GP', img: getImageUrl('coverGuofeng1'), rank: 3 },
        { id: 't002', name: '单眼皮消肿眼影', author: '眼妆研究所', price: '60 GP', img: getImageUrl('coverTutorial2'), rank: 4 },
        { id: 'c013', name: '蜜桃少女妆', author: '夏日限定', price: '35 GP', img: getImageUrl('coverCreator13'), rank: 5 }
      ]
    });

    // 瀑布流"大家都在看"（6张卡片，不同高度）
    this.setData({
      waterfallList: [
        { id: 'c002', title: '浓颜系千金妆｜高级感富家千金妆教程', creator: '阿紫的美学日记', price: '50 GP', img: getImageUrl('coverCreator2'), badge: 'L2 精选', badgeClass: 'l2', height: 180, avatarText: '阿', avatarBg: 'linear-gradient(135deg, #C4956A, #A67B52)' },
        { id: 'c003', title: '纯欲白开水妆｜伪素颜神器 5分钟搞定', creator: '桃子软糖', price: '免费', img: getImageUrl('coverCreator3'), badge: '免费', badgeClass: 'free', height: 220, avatarText: '桃', avatarBg: 'linear-gradient(135deg, #E8C9A8, #D4B896)' },
        { id: 'g001', title: '大唐盛世妆｜非遗文化创意妆容分享', creator: '花西子', price: '80 GP', img: getImageUrl('coverGuofeng1'), badge: '国风', badgeClass: 'gufeng', height: 200, avatarText: '唐', avatarBg: 'linear-gradient(135deg, #C45C5C, #A64545)' },
        { id: 't002', title: '单眼皮消肿眼影公式｜新手也能画好', creator: '眼妆研究所', price: '60 GP', img: getImageUrl('coverTutorial2'), badge: 'L3 大师', badgeClass: 'l3', height: 160, avatarText: '眼', avatarBg: 'linear-gradient(135deg, #6B5435, #8B6F47)' },
        { id: 'c006', title: '美拉德秋冬妆｜清透感满满少女感', creator: '秋秋美妆', price: '45 GP', img: getImageUrl('coverCreator6'), badge: 'L2 精选', badgeClass: 'l2', height: 210, avatarText: '秋', avatarBg: 'linear-gradient(135deg, #FFB347, #FFCC33)' },
        { id: 'c009', title: '港风复古妆｜80年代氛围感大红唇', creator: '玫瑰与黄昏', price: '免费', img: getImageUrl('coverCreator9'), badge: '免费', badgeClass: 'free', height: 190, avatarText: '港', avatarBg: 'linear-gradient(135deg, #B85454, #D46A6A)' }
      ]
    });
  },

  // 点击面部档案
  onFaceProfileTap() {
    router.openFaceProfile();
  },

  // 点击美妆闺蜜问候
  onCompanionTap() {
    router.openCompanionChat();
  },

  // 金刚位点击
  onKingKongTap(e) {
    const key = e.currentTarget.dataset.key;
    switch (key) {
      case 'mirror':
        router.switchTab('mirror');
        break;
      case 'library':
        router.switchTab('library');
        break;
      case 'mall':
        router.switchTab('mall');
        break;
      case 'scan':
        router.openScan();
        break;
      case 'creator':
        router.openCreatorCenter();
        break;
    }
  },

  // 轮播切换
  onBannerChange(e) {
    this.setData({ bannerCurrent: e.detail.current });
  },

  // 点击轮播
  onBannerTap(e) {
    const action = e.currentTarget.dataset.action;
    switch (action) {
      case 'mirror':
        router.switchTab('mirror');
        break;
      case 'library':
        router.switchTab('library');
        break;
      case 'mall':
        router.switchTab('mall');
        break;
      case 'scan':
        router.openScan();
        break;
    }
  },

  // 点击热度榜卡片
  onTrendingTap(e) {
    const id = e.currentTarget.dataset.id;
    router.openTemplateDetail(id);
  },

  // 点击瀑布流卡片
  onWaterfallTap(e) {
    const id = e.currentTarget.dataset.id;
    router.openTemplateDetail(id);
  },

  // 更多热度榜
  onMoreTrending() {
    wx.showToast({ title: '热门榜单开发中', icon: 'none' });
  },

  // 美妆闺蜜FAB点击
  onCompanionFabTap() {
    router.openCompanionChat();
  },

  onShareAppMessage() {
    return {
      title: '妆伴 MakeupPal - 你的AI美妆闺蜜',
      path: '/pages/home/home'
    };
  }
});
