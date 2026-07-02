// data/onboarding.js - 新手引导步骤 + 场景模板回复 + 成分扫描结果

const onboardingSteps = [
  {
    stepNum: 1,
    title: '欢迎来到妆伴',
    subtitle: '你的私人美妆助手',
    description: '妆伴MakeupPal为你提供智能妆容推荐、AR试妆、成分分析等全方位美妆服务。让我们一起开启美丽之旅吧！',
    image: 'coverCreator1',
    options: []
  },
  {
    stepNum: 2,
    title: '你的肤质是？',
    subtitle: '让我们更了解你',
    description: '选择最符合你当前皮肤状况的选项，我们将为你推荐最适合的妆容和产品。',
    image: 'coverCreator3',
    options: [
      { id: 'skin_dry', label: '干性', icon: '🏜️', desc: '皮肤干燥，易起皮' },
      { id: 'skin_oily', label: '油性', icon: '💧', desc: 'T区出油，易长痘' },
      { id: 'skin_combo', label: '混合', icon: '⚡', desc: 'T区油两颊干' },
      { id: 'skin_sensitive', label: '敏感', icon: '🌸', desc: '易泛红，需温和护理' }
    ]
  },
  {
    stepNum: 3,
    title: 'AI肤质扫描',
    subtitle: '科技赋能美丽',
    description: '使用手机摄像头扫描面部，AI将智能分析你的肤质、脸型和肤色，为你生成专属美妆档案。',
    image: 'coverCreator7',
    options: []
  },
  {
    stepNum: 4,
    title: '你喜欢的风格？',
    subtitle: '个性化推荐',
    description: '选择你感兴趣的妆容风格，我们将为你定制专属内容推荐。',
    image: 'coverCreator5',
    options: [
      { id: 'style_daily', label: '日常通勤', icon: '🏢', desc: '简约自然的日常妆容' },
      { id: 'style_sweet', label: '甜美可爱', icon: '🍑', desc: '元气满满的甜系风格' },
      { id: 'style_mature', label: '轻熟优雅', icon: '🍷', desc: '知性优雅的成熟风格' },
      { id: 'style_creative', label: '创意玩妆', icon: '🎨', desc: '大胆前卫的创意妆容' }
    ]
  },
  {
    stepNum: 5,
    title: '新手礼包',
    subtitle: '专属奖励已备好',
    description: '恭喜完成注册！送你100GP新手积分和3个专属妆容模板，快来体验妆伴的魅力吧！',
    image: 'coverCreator13',
    options: [],
    rewards: [
      { type: 'gp', amount: 100 },
      { type: 'template', amount: 3 }
    ]
  }
];

const ingredientScanResults = [
  { productName: 'SK-II护肤精华露', brand: 'SK-II', riskLevel: 'low', sensitivityScore: 15, safeIngredients: ['PITERA', '丁二醇', '水杨酸钠'], cautionIngredients: ['防腐剂'], avoidIngredients: [], regulationTags: ['欧盟合规', '美国FDA认证'] },
  { productName: '修丽可色修精华', brand: 'SkinCeuticals', riskLevel: 'low', sensitivityScore: 22, safeIngredients: ['黄瓜提取物', '麝香草提取物', '橄榄叶提取物'], cautionIngredients: ['丙二醇'], avoidIngredients: [], regulationTags: ['欧盟合规'] },
  { productName: '某网红美白精华', brand: 'X品牌', riskLevel: 'high', sensitivityScore: 78, safeIngredients: ['甘油'], cautionIngredients: ['高浓度果酸', '香精'], avoidIngredients: ['氢醌', '汞化合物'], regulationTags: ['含禁用成分', '不建议使用'] },
  { productName: '珂润润浸保湿滋养乳霜', brand: 'Curel', riskLevel: 'low', sensitivityScore: 8, safeIngredients: ['神经酰胺', '蓝桉叶提取物', '尿囊素'], cautionIngredients: [], avoidIngredients: [], regulationTags: ['敏感肌推荐', '无香精'] },
  { productName: '安热沙金瓶防晒霜', brand: 'Anessa', riskLevel: 'medium', sensitivityScore: 45, safeIngredients: ['氧化锌', '二氧化钛'], cautionIngredients: ['酒精', '化学防晒剂'], avoidIngredients: [], regulationTags: ['防晒特证'] }
];

// 美妆闺蜜AI场景模板回复（8场景）
const sceneTemplates = {
  default: [
    '哇！这个问题我来帮你分析～首先要考虑你的肤质和场合哦～',
    '好的呢！我马上帮你找最合适的妆容推荐～',
    '这个问题问得好！我来给你一些专业建议～',
    '没问题！让我想想怎么帮你搭配最漂亮～',
    '太棒了！我来帮你设计一个专属妆容方案～'
  ],
  date: [
    '约会当然要甜甜的！我推荐蜜桃粉腮红+奶茶色唇釉+浅棕眼影的自然妆，既温柔又不会太夸张～',
    '约会妆重点是营造温柔氛围感！推荐清透底妆+粉色系妆容，让你看起来甜美可人～',
    '完美约会妆来啦！推荐伪素颜妆容，让他觉得你天生丽质～'
  ],
  commute: [
    '通勤妆要快速又精致！推荐3分钟快速出门妆，自然不夸张，职场气质拉满～',
    '上班族必备！推荐日常通勤妆，轻薄底妆+自然眉形，让你一整天都精神焕发～',
    '通勤妆容推荐！简约大方的妆容风格，适合忙碌的工作日～'
  ],
  party: [
    '派对妆容要闪亮夺目！推荐气场女王妆，红唇搭配烟熏眼妆，你就是全场焦点～',
    '派对当然要美美的！推荐亮片眼妆+饱满唇妆，让你在灯光下闪闪发光～'
  ],
  daily: [
    '日常妆容要清新自然！推荐清透裸妆，打造伪素颜效果～',
    '日常妆推荐！简单几步就能搞定，让你每天都元气满满～'
  ],
  beginner: [
    '新手宝宝看过来！推荐简单易上手的日常妆容，步骤清晰，轻松学会～',
    '新手入门首选！推荐难度低、效果好的妆容教程，让你快速掌握化妆技巧～'
  ],
  skin: [
    '护肤是化妆的基础！推荐适合你肤质的护肤品，让底妆更服帖～',
    '根据你的肤质，推荐温和有效的护肤方案，改善肌肤状态～'
  ],
  product: [
    '好的化妆品能让妆容事半功倍！推荐几款口碑好的产品给你～',
    '根据你的需求，推荐适合的美妆产品，让你的化妆体验更棒～'
  ]
};

module.exports = { onboardingSteps, ingredientScanResults, sceneTemplates };
