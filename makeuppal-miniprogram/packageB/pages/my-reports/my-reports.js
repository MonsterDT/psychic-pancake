// packageB/pages/my-reports/my-reports.js - 肤质报告列表
const router = require('../../../utils/router');

Page({
  data: {
    reports: [],
    isEmpty: false
  },

  onLoad() {
    this.loadReports();
  },

  // 加载模拟报告列表
  loadReports() {
    // 模拟报告数据
    const mockReports = [
      {
        id: 'rpt001',
        date: '2026-06-28',
        type: '深度肤质检测',
        score: 86,
        scoreLevel: '优秀',
        summary: '混合性肤质，T区略油，两颊偏干。整体肤质状态良好，建议加强T区控油与两颊保湿。',
        tags: ['混合性', '轻度敏感', '暖色调']
      },
      {
        id: 'rpt002',
        date: '2026-06-10',
        type: '面部三维分析',
        score: 82,
        scoreLevel: '良好',
        summary: '骨相86分，皮相78分，妆相82分。脸型偏鹅蛋脸，鼻梁高挺，建议日常突出眼部与唇部妆容。',
        tags: ['鹅蛋脸', '高鼻梁', '双眼皮']
      },
      {
        id: 'rpt003',
        date: '2026-05-22',
        type: '敏感肌评估',
        score: 75,
        scoreLevel: '注意',
        summary: '轻度敏感，屏障功能略有下降。建议减少去角质频率，使用温和洁面产品，加强修护。',
        tags: ['轻度敏感', '屏障受损', '需修护']
      },
      {
        id: 'rpt004',
        date: '2026-04-15',
        type: '深度肤质检测',
        score: 79,
        scoreLevel: '良好',
        summary: '与上次相比，毛孔状态有所改善，但T区出油仍较多。建议持续做好清洁与控油护理。',
        tags: ['混合性', 'T区油', '毛孔改善']
      }
    ];
    this.setData({
      reports: mockReports,
      isEmpty: mockReports.length === 0
    });
  },

  // 跳转报告详情
  onTapReport(e) {
    const id = e.currentTarget.dataset.id;
    if (!id) return;
    router.navigateTo('/packageB/pages/report-detail/report-detail', { id: id });
  },

  // 生成新报告
  onCreateReport() {
    wx.showToast({
      title: '请前往焕新页拍摄检测',
      icon: 'none',
      duration: 1500
    });
    setTimeout(() => {
      router.switchTab('mirror');
    }, 1500);
  },

  // 评分颜色
  getScoreColor(score) {
    if (score >= 85) return '#6B9E6B';
    if (score >= 75) return '#C4956A';
    return '#D4A03C';
  }
});
