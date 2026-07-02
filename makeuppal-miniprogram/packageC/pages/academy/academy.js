// packageC/pages/academy/academy.js - 创作者学院
const { getImageUrl } = require('../../../data/images');

Page({
  data: {
    tabs: [
      { key: 'newbie', label: '新手入门' },
      { key: 'advanced', label: '进阶技巧' },
      { key: 'rules', label: '平台规则' },
      { key: 'monetize', label: '变现指南' }
    ],
    activeTab: 'newbie',
    // 全部文章池
    allArticles: {
      newbie: [
        { id: 'a001', cover: getImageUrl('coverCreator1'), title: '创作者入门：如何发布第一个作品', views: '3.2w', readTime: '5分钟' },
        { id: 'a002', cover: getImageUrl('coverTutorial1'), title: '选对类目，让你的作品被更多人看到', views: '2.8w', readTime: '4分钟' },
        { id: 'a003', cover: getImageUrl('coverCreator3'), title: '封面与标题的吸睛法则', views: '4.1w', readTime: '6分钟' }
      ],
      advanced: [
        { id: 'a004', cover: getImageUrl('coverCreator2'), title: '进阶构图技巧：拍出高级感妆容', views: '5.6w', readTime: '8分钟' },
        { id: 'a005', cover: getImageUrl('coverTutorial2'), title: '拆解类目怎么写更受欢迎', views: '3.9w', readTime: '7分钟' },
        { id: 'a006', cover: getImageUrl('coverCreator5'), title: '数据复盘：找到你的爆款公式', views: '6.2w', readTime: '10分钟' }
      ],
      rules: [
        { id: 'a007', cover: getImageUrl('coverBrand1'), title: '平台内容规范：这些内容不要发', views: '8.5w', readTime: '5分钟' },
        { id: 'a008', cover: getImageUrl('coverBrand3'), title: '版权与原创：如何避免侵权', views: '4.3w', readTime: '6分钟' },
        { id: 'a009', cover: getImageUrl('coverBrand5'), title: '违规处罚规则与申诉流程', views: '3.1w', readTime: '4分钟' }
      ],
      monetize: [
        { id: 'a010', cover: getImageUrl('coverCreator4'), title: 'GP 焕新值变现全攻略', views: '7.8w', readTime: '9分钟' },
        { id: 'a011', cover: getImageUrl('coverCreator6'), title: '品牌合作：从接单到交付', views: '6.5w', readTime: '12分钟' },
        { id: 'a012', cover: getImageUrl('coverCreator8'), title: '提现规则与到账说明', views: '4.9w', readTime: '3分钟' }
      ]
    },
    articles: []
  },

  onLoad() {
    this.setData({ articles: this.data.allArticles.newbie });
  },

  onTabTap(e) {
    const key = e.currentTarget.dataset.key;
    this.setData({
      activeTab: key,
      articles: this.data.allArticles[key] || []
    });
  },

  onArticleTap(e) {
    const id = e.currentTarget.dataset.id;
    wx.showToast({ title: '阅读文章 ' + id, icon: 'none' });
  },

  onShareAppMessage() {
    return {
      title: '妆伴创作者学院 - 进阶你的美妆创作',
      path: '/packageC/pages/academy/academy'
    };
  }
});
