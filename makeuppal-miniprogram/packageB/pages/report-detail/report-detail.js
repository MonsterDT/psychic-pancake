// packageB/pages/report-detail/report-detail.js - 报告详情
const { faceProfileData, skinProfile } = require('../../../data/face-profile');
const { getImageUrl } = require('../../../data/images');
const router = require('../../../utils/router');

Page({
  data: {
    reportId: '',
    reportDate: '',
    reportType: '深度肤质检测',
    // 三维评分（骨相/皮相/妆相）
    scores: { bone: 0, skin: 0, makeup: 0 },
    // 雷达图节点（用view模拟）
    radarPoints: [],
    radarPoly: '',
    // 六维数据条形图
    dimensions: [],
    // 肤质/脸型/肤色分析
    skinType: '',
    faceShape: '',
    skinTone: '',
    skinAnalysis: '',
    faceAnalysis: '',
    toneAnalysis: '',
    // 推荐妆容
    recommendations: [],
    // 总评分
    totalScore: 0,
    scoreLevel: ''
  },

  onLoad(options) {
    const id = options.id || 'rpt001';
    this.setData({ reportId: id });
    this.loadReport(id);
  },

  loadReport(id) {
    // 根据id映射日期（模拟）
    const dateMap = {
      'rpt001': '2026-06-28',
      'rpt002': '2026-06-10',
      'rpt003': '2026-05-22',
      'rpt004': '2026-04-15'
    };
    const date = dateMap[id] || '2026-06-28';

    // 从 faceProfileData 取数据
    const scores = faceProfileData.scores || { bone: 86, skin: 78, makeup: 82 };
    const dimensions = (faceProfileData.dimensions || []).map(d => ({
      label: d.label,
      value: d.value,
      width: d.value + '%'
    }));

    // 雷达图节点计算（用view模拟雷达图）
    // 三个维度：骨相、皮相、妆相，0-100分
    const radarLabels = [
      { key: 'bone', name: '骨相', value: scores.bone },
      { key: 'skin', name: '皮相', value: scores.skin },
      { key: 'makeup', name: '妆相', value: scores.makeup }
    ];
    // 雷达图半径基准，三点均匀分布在120度方向上
    const cx = 50;
    const cy = 50;
    const maxR = 38;
    const radarPoints = radarLabels.map((item, idx) => {
      // 三个点：顶部、左下、右下
      const angle = -Math.PI / 2 + (idx * 2 * Math.PI / 3);
      const r = (item.value / 100) * maxR;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      return {
        name: item.name,
        value: item.value,
        x: x,
        y: y,
        cx: cx + maxR * Math.cos(angle),
        cy: cy + maxR * Math.sin(angle)
      };
    });
    const radarPoly = radarPoints.map(p => p.x + ',' + p.y).join(' ');

    // 肤质/脸型/肤色分析
    const skinType = faceProfileData.skinType || '混合性肤质';
    const faceShape = faceProfileData.faceShape || '鹅蛋脸';
    const undertone = faceProfileData.undertone || '暖色调';
    const skinTypeInfo = (skinProfile.skinTypes || []).find(s => skinType.indexOf(s.name) >= 0);
    const faceShapeInfo = (skinProfile.faceShapes || []).find(f => faceShape.indexOf(f.name) >= 0);
    const skinToneInfo = (skinProfile.skinTones || []).find(t => undertone.indexOf(t.name) >= 0 || t.name.indexOf(undertone) >= 0);

    // 推荐妆容（取faceProfileData.makeupRecommendations）
    const recommendations = (faceProfileData.makeupRecommendations || []).map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        desc: rec.desc,
        tags: rec.tags || [],
        img: rec.img ? getImageUrl(rec.img) : getImageUrl('coverCreator1')
      };
    });

    // 总评分
    const totalScore = Math.round((scores.bone + scores.skin + scores.makeup) / 3);
    const scoreLevel = totalScore >= 85 ? '优秀' : (totalScore >= 75 ? '良好' : (totalScore >= 60 ? '中等' : '需改善'));

    this.setData({
      reportDate: date,
      scores: scores,
      radarPoints: radarPoints,
      radarPoly: radarPoly,
      dimensions: dimensions,
      skinType: skinType,
      faceShape: faceShape,
      skinTone: undertone,
      skinAnalysis: skinTypeInfo ? skinTypeInfo.description : '混合性肤质，T区略油，两颊偏干。',
      faceAnalysis: faceShapeInfo ? faceShapeInfo.description : '额头与颧骨基本等宽，脸长约为脸宽的1.5倍。',
      toneAnalysis: skinToneInfo ? skinToneInfo.description : '肤色偏黄，血管呈绿色，适合金饰。',
      recommendations: recommendations,
      totalScore: totalScore,
      scoreLevel: scoreLevel
    });
  },

  // 跳转模板详情
  onTapRecommend(e) {
    const id = e.currentTarget.dataset.id;
    if (!id) return;
    router.openTemplateDetail(id);
  },

  // 分享报告
  onShareAppMessage() {
    return {
      title: '我的肤质报告 - 妆伴 MakeupPal',
      path: '/packageB/pages/report-detail/report-detail?id=' + this.data.reportId
    };
  }
});
