// data/local-problems.js - 肌肤问题数据（4层嵌套：problem→solutions→steps→products）
// 源demo行16682-17655，精简为3个代表性问题，保留完整4层结构

const localProblems = [
  {
    id: 'lp001',
    keyword: '卧蚕怎么画',
    title: '卧蚕怎么画才自然不显脏？',
    category: '眼妆',
    solutions: [
      {
        id: 'lp001-s1',
        name: '妈生感阴影卧蚕',
        suitable: ['新手', '日常妆'],
        difficulty: 2,
        duration: '3分钟',
        effect: '自然幼态',
        heat: 98,
        likes: 45200,
        dislikes: 120,
        steps: [
          {
            stepNum: 1,
            description: '微笑找到卧蚕凸起位置，用浅棕色眉笔轻轻画出阴影线',
            products: [
              { tier: '高端', name: 'Benefit precisely my brow', brand: 'Benefit', price: 235, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: '花西子螺黛生花眉笔', brand: '花西子', price: 69, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品极细眉笔', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['全肤质'] }
            ]
          },
          {
            stepNum: 2,
            description: '用细节刷蘸取浅米色眼影，提亮卧蚕凸起部位',
            products: [
              { tier: '高端', name: 'Tom Ford四色眼影盘', brand: 'Tom Ford', price: 720, rating: 4.9, skinMatch: ['全肤质'] },
              { tier: '中端', name: '3CE九宫格眼影盘', brand: '3CE', price: 245, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '平价', name: '橘朵单色眼影', brand: '橘朵', price: 25, rating: 4.3, skinMatch: ['全肤质'] }
            ]
          },
          {
            stepNum: 3,
            description: '用棉签或晕染刷将阴影线向下方自然晕开',
            products: [
              { tier: '高端', name: 'MAC双头眼影刷', brand: 'MAC', price: 280, rating: 4.6, skinMatch: ['全肤质'] },
              { tier: '中端', name: '尔木萄眼部套刷', brand: 'AMORTALS', price: 49, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品晕染刷', brand: 'MINISO', price: 12, rating: 4.0, skinMatch: ['全肤质'] }
            ]
          },
          {
            stepNum: 4,
            description: '定妆喷雾轻喷，让卧蚕更持久自然',
            products: [
              { tier: '高端', name: 'Urban Decay定妆喷雾', brand: 'Urban Decay', price: 260, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: '柏瑞美定妆喷雾', brand: 'PRAMY', price: 69, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品定妆喷雾', brand: 'MINISO', price: 19, rating: 4.0, skinMatch: ['全肤质'] }
            ]
          }
        ],
        warnings: [
          { title: '阴影线位置', desc: '不要画在真正的眼下细纹处，要画在卧蚕凸起的下方', source: '专业化妆师', skinRisk: { dry: 'low', oily: 'low', sensitive: 'medium' } },
          { tip: '新手建议选择灰棕色而非深棕色，更不容易显脏' }
        ]
      },
      {
        id: 'lp001-s2',
        name: '珠光提亮卧蚕',
        suitable: ['派对妆', '上镜妆'],
        difficulty: 3,
        duration: '5分钟',
        effect: '闪亮有神',
        heat: 85,
        likes: 32100,
        dislikes: 230,
        steps: [
          {
            stepNum: 1,
            description: '用遮瑕膏打底卧蚕区域，让后续珠光更显色',
            products: [
              { tier: '高端', name: 'NARS遮瑕膏', brand: 'NARS', price: 300, rating: 4.6, skinMatch: ['全肤质'] },
              { tier: '中端', name: '乐得遮瑕液', brand: 'Medicube', price: 79, rating: 4.3, skinMatch: ['全肤质'] },
              { tier: '平价', name: '美宝莲橡皮擦遮瑕', brand: 'Maybelline', price: 59, rating: 4.2, skinMatch: ['全肤质'] }
            ]
          },
          {
            stepNum: 2,
            description: '香槟色珠光眼影点涂卧蚕中央',
            products: [
              { tier: '高端', name: 'Bobbi Brown月光石', brand: 'Bobbi Brown', price: 360, rating: 4.8, skinMatch: ['全肤质'] },
              { tier: '中端', name: '橘朵G33偏光闪片', brand: '橘朵', price: 29, rating: 4.5, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品单色眼影', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['全肤质'] }
            ]
          },
          {
            stepNum: 3,
            description: '少量亮片点缀眼中，增加立体感',
            products: [
              { tier: '高端', name: '3CE一滴泪', brand: '3CE', price: 89, rating: 4.6, skinMatch: ['全肤质'] },
              { tier: '中端', name: '橘朵液体眼影', brand: '橘朵', price: 35, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品液体眼影', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['全肤质'] }
            ]
          },
          {
            stepNum: 4,
            description: '轻轻按压固定亮片，防止飞粉',
            products: [
              { tier: '高端', name: 'MAC定妆喷雾', brand: 'MAC', price: 240, rating: 4.5, skinMatch: ['全肤质'] },
              { tier: '中端', name: '柏瑞美定妆喷雾', brand: 'PRAMY', price: 69, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品定妆喷雾', brand: 'MINISO', price: 19, rating: 4.0, skinMatch: ['全肤质'] }
            ]
          }
        ],
        warnings: [
          { title: '亮片用量', desc: '亮片不宜过多，否则容易显得眼睛浮肿', source: '美妆博主', skinRisk: { dry: 'low', oily: 'low', sensitive: 'low' } },
          { tip: '肿眼泡建议避开大亮片，选择细腻珠光即可' }
        ]
      }
    ]
  },
  {
    id: 'lp002',
    keyword: '单眼皮怎么画眼影',
    title: '单眼皮怎么画眼影才深邃不浮肿？',
    category: '眼妆',
    solutions: [
      {
        id: 'lp002-s1',
        name: '渐层深邃法',
        suitable: ['单眼皮', '内双'],
        difficulty: 3,
        duration: '8分钟',
        effect: '深邃放大',
        heat: 95,
        likes: 56700,
        dislikes: 180,
        steps: [
          {
            stepNum: 1,
            description: '用浅大地色给整个眼窝大面积打底，消除浮肿感',
            products: [
              { tier: '高端', name: 'Tom Ford四色眼影盘', brand: 'Tom Ford', price: 720, rating: 4.9, skinMatch: ['全肤质'] },
              { tier: '中端', name: '3CE九宫格眼影盘', brand: '3CE', price: 245, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '平价', name: '完美日记探险家眼影盘', brand: '完美日记', price: 129, rating: 4.4, skinMatch: ['全肤质'] }
            ]
          },
          {
            stepNum: 2,
            description: '用深棕色在睫毛根部上方2-3mm处加深，睁眼能看到约2mm',
            products: [
              { tier: '高端', name: 'NARS双色眼影', brand: 'NARS', price: 350, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: 'MAC单色眼影', brand: 'MAC', price: 150, rating: 4.6, skinMatch: ['全肤质'] },
              { tier: '平价', name: '橘朵单色眼影', brand: '橘朵', price: 25, rating: 4.3, skinMatch: ['全肤质'] }
            ]
          },
          {
            stepNum: 3,
            description: '用眼线胶笔画内眼线，再用深色眼影覆盖一层防止晕染',
            products: [
              { tier: '高端', name: 'Chanel眼线胶笔', brand: 'Chanel', price: 280, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: '蜜丝佛陀眼线胶笔', brand: 'Max Factor', price: 89, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品眼线胶笔', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['全肤质'] }
            ]
          },
          {
            stepNum: 4,
            description: '夹翘睫毛并刷上睫毛膏，放大双眼效果',
            products: [
              { tier: '高端', name: '兰蔻睫毛膏', brand: 'Lancôme', price: 280, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: '美宝莲睫毛膏', brand: 'Maybelline', price: 89, rating: 4.5, skinMatch: ['全肤质'] },
              { tier: '平价', name: '橘朵睫毛膏', brand: '橘朵', price: 35, rating: 4.3, skinMatch: ['全肤质'] }
            ]
          }
        ],
        warnings: [
          { title: '避免浅色大面积', desc: '单眼皮避免大面积使用浅色珠光，会放大浮肿感', source: '专业化妆师', skinRisk: { dry: 'low', oily: 'low', sensitive: 'low' } },
          { tip: '深色范围以睁眼能看到2mm为标准，太窄看不到效果' }
        ]
      }
    ]
  },
  {
    id: 'lp003',
    keyword: '油皮脱妆怎么办',
    title: '油皮夏天怎么定妆不脱妆？',
    category: '底妆',
    solutions: [
      {
        id: 'lp003-s1',
        name: '三明治定妆法',
        suitable: ['油性肌肤', '混油皮'],
        difficulty: 3,
        duration: '10分钟',
        effect: '持妆12小时',
        heat: 92,
        likes: 78900,
        dislikes: 350,
        steps: [
          {
            stepNum: 1,
            description: '妆前用控油精华打底，T区重点涂抹',
            products: [
              { tier: '高端', name: 'SK-II神仙水', brand: 'SK-II', price: 1540, rating: 4.8, skinMatch: ['油性', '混合'] },
              { tier: '中端', name: '理肤泉Mat控油乳', brand: 'La Roche-Posay', price: 245, rating: 4.5, skinMatch: ['油性'] },
              { tier: '平价', name: '妮维雅控油乳液', brand: 'Nivea', price: 49, rating: 4.0, skinMatch: ['油性'] }
            ]
          },
          {
            stepNum: 2,
            description: '上粉底后先薄薄扫一层散粉，再喷定妆喷雾',
            products: [
              { tier: '高端', name: '纪梵希四宫格散粉', brand: 'Givenchy', price: 590, rating: 4.8, skinMatch: ['全肤质'] },
              { tier: '中端', name: '玫珂菲散粉', brand: 'Make Up For Ever', price: 280, rating: 4.6, skinMatch: ['全肤质'] },
              { tier: '平价', name: 'PMPM散粉', brand: 'PMPM', price: 59, rating: 4.3, skinMatch: ['全肤质'] }
            ]
          },
          {
            stepNum: 3,
            description: '等喷雾干透后再扫一层散粉，形成"三明治"结构',
            products: [
              { tier: '高端', name: 'Laura Mercier散粉', brand: 'Laura Mercier', price: 380, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: '尔木萄散粉', brand: 'AMORTALS', price: 69, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '美宝莲散粉', brand: 'Maybelline', price: 39, rating: 4.1, skinMatch: ['全肤质'] }
            ]
          },
          {
            stepNum: 4,
            description: '最后再喷一次定妆喷雾，完成三明治定妆',
            products: [
              { tier: '高端', name: 'Urban Decay定妆喷雾', brand: 'Urban Decay', price: 260, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: '柏瑞美定妆喷雾', brand: 'PRAMY', price: 69, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品定妆喷雾', brand: 'MINISO', price: 19, rating: 4.0, skinMatch: ['全肤质'] }
            ]
          }
        ],
        warnings: [
          { title: '散粉用量', desc: '每次散粉都要少量多次，避免卡粉', source: '美妆博主', skinRisk: { dry: 'medium', oily: 'low', sensitive: 'low' } },
          { tip: '干皮可将散粉替换为定妆粉饼，减少干燥感' }
        ]
      }
    ]
  }
];

function getProblemById(id) {
  return localProblems.find(p => p.id === id);
}

function getProblemsByCategory(category) {
  return localProblems.filter(p => p.category === category);
}

module.exports = {
  localProblems,
  getProblemById,
  getProblemsByCategory
};
