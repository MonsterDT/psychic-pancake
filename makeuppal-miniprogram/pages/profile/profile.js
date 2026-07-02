// pages/profile/profile.js - 我的页
const router = require('../../utils/router');
const storage = require('../../utils/storage');
const { faceProfileData } = require('../../data/face-profile');
const { getImageUrl } = require('../../data/images');

Page({
  data: {
    // 用户信息
    userInfo: {
      name: '沈婉清',
      level: '金妆达人 · Lv.5',
      bio: '✨ 热爱美妆 | 分享穿搭 | 追求精致生活',
      avatar: ''
    },
    // stats
    gpBalance: 328,
    favCount: 86,
    followingCount: 328,
    fansCount: '1.2k',
    // 面部档案（slim卡用）
    faceProfile: null,
    // 功能宫格1（5项）
    grid5: [
      { key: 'templates', icon: '💄', label: '我的模板' },
      { key: 'reports', icon: '📊', label: '我的报告' },
      { key: 'toolbox', icon: '🧰', label: '工具箱' },
      { key: 'diary', icon: '📔', label: '成长日记' },
      { key: 'custom', icon: '🎨', label: '自定义妆容' }
    ],
    // 功能宫格2（3项）
    grid3: [
      { key: 'companion', icon: '🌸', label: '小美设置' },
      { key: 'creator', icon: '✨', label: '创作者中心' },
      { key: 'invite', icon: '🎁', label: '邀请好友' }
    ],
    // 功能宫格3（3项）
    grid3Bottom: [
      { key: 'store', icon: '📍', label: '门店地图' },
      { key: 'message', icon: '🔔', label: '消息中心' },
      { key: 'settings', icon: '⚙️', label: '设置' }
    ]
  },

  onLoad() {
    this.initData();
  },

  onShow() {
    // 联动自定义tabBar选中态
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 4 });
    }
    this.refreshData();
  },

  initData() {
    // 用户头像
    const avatarUrl = getImageUrl('avatar_shenwanqing') || 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Beautiful%20young%20Asian%20woman%20portrait%20photo%2C%20elegant%20makeup%2C%20soft%20rose%20gold%20lighting%2C%20natural%20glow%20skin%2C%20warm%20tone%2C%20high-end%20beauty%20aesthetic%2C%20studio%20portrait%2C%20head%20and%20shoulders%2C%20clean%20background&image_size=square';

    // 面部档案slim卡数据
    const traits = (faceProfileData.traits || []).slice(0, 3);
    const faceProfile = {
      avatar: avatarUrl,
      name: faceProfileData.name,
      boneScore: faceProfileData.scores ? faceProfileData.scores.bone : 86,
      faceShape: faceProfileData.faceShape,
      skinType: faceProfileData.skinType,
      undertone: faceProfileData.undertone,
      traits: traits
    };

    this.setData({
      'userInfo.avatar': avatarUrl,
      faceProfile: faceProfile
    });
  },

  refreshData() {
    // 从全局同步GP余额
    const app = getApp();
    if (app && app.globalData) {
      this.setData({ gpBalance: app.globalData.gpBalance || 328 });
    }
    // 收藏数
    const favs = storage.getFavoriteTemplates();
    this.setData({ favCount: favs.length || 86 });
  },

  // 编辑资料
  onEditProfile() {
    wx.showToast({ title: '编辑资料功能开发中', icon: 'none', duration: 1200 });
  },

  // 面部档案
  onFaceProfileTap() {
    router.openFaceProfile();
  },

  // GP中心
  onGpCenterTap() {
    router.openGpCenter();
  },

  // 收藏统计点击
  onFavTap() {
    router.navigateTo('/packageA/pages/favorites/favorites');
  },

  // 功能宫格点击
  onGridTap(e) {
    const key = e.currentTarget.dataset.key;
    if (!key) return;
    switch (key) {
      case 'templates':
        router.navigateTo('/packageB/pages/my-templates/my-templates');
        break;
      case 'reports':
        router.navigateTo('/packageB/pages/my-reports/my-reports');
        break;
      case 'toolbox':
        router.navigateTo('/packageB/pages/toolbox/toolbox');
        break;
      case 'diary':
        router.navigateTo('/packageB/pages/diary/diary');
        break;
      case 'custom':
        router.navigateTo('/packageB/pages/custom-makeup/custom-makeup');
        break;
      case 'companion':
        wx.showToast({ title: '小美设置开发中', icon: 'none', duration: 1200 });
        break;
      case 'creator':
        router.openCreatorCenter();
        break;
      case 'invite':
        router.navigateTo('/packageC/pages/invite/invite');
        break;
      case 'store':
        router.navigateTo('/packageC/pages/store-map/store-map');
        break;
      case 'message':
        router.navigateTo('/packageC/pages/message/message');
        break;
      case 'settings':
        wx.showToast({ title: '设置功能开发中', icon: 'none', duration: 1200 });
        break;
      default:
        break;
    }
  },

  // 闺蜜浮窗
  onCompanionFabTap() {
    router.openCompanionChat();
  },

  onShareAppMessage() {
    return {
      title: '妆伴 - 我的AI美妆闺蜜',
      path: '/pages/home/home'
    };
  }
});
