// data/banners.js - Banner轮播数据

const banners = [
  { id: 'bn001', title: '新春限定', subtitle: '国风妆容挑战赛开启', image: 'assets/images/banners/banner_001.jpg', linkType: 'activity', linkTarget: 'challenge-spring', bgGradient: 'linear-gradient(135deg, #FF6B6B 0%, #FFE66D 100%)' },
  { id: 'bn002', title: '大牌联名', subtitle: 'YSL红唇妆模板限时免费', image: 'assets/images/banners/banner_002.jpg', linkType: 'template', linkTarget: 'ysl-red-lip', bgGradient: 'linear-gradient(135deg, #C0392B 0%, #F39C12 100%)' },
  { id: 'bn003', title: '新手专区', subtitle: '0基础化妆入门指南', image: 'assets/images/banners/banner_003.jpg', linkType: 'page', linkTarget: 'beginner-guide', bgGradient: 'linear-gradient(135deg, #3498DB 0%, #9B59B6 100%)' },
  { id: 'bn004', title: '银发焕新', subtitle: '50+优雅妆容精选', image: 'assets/images/banners/banner_004.jpg', linkType: 'category', linkTarget: 'silver-zone', bgGradient: 'linear-gradient(135deg, #1ABC9C 0%, #16A085 100%)' },
  { id: 'bn005', title: '成分安全', subtitle: '一键扫描化妆品成分', image: 'assets/images/banners/banner_005.jpg', linkType: 'feature', linkTarget: 'ingredient-scan', bgGradient: 'linear-gradient(135deg, #2ECC71 0%, #27AE60 100%)' },
  { id: 'bn006', title: '每日签到', subtitle: '连续签到领GP好礼', image: 'assets/images/banners/banner_006.jpg', linkType: 'task', linkTarget: 'daily-checkin', bgGradient: 'linear-gradient(135deg, #E74C3C 0%, #C0392B 100%)' }
];

module.exports = { banners };
