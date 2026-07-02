// data/products.js - 商品数据（30个通用商品 + 6类目市集商品）
// 源demo行16625-16661 + 行19863-20027

const { getImageUrl } = require('./images');

// 30个通用商品
const products = [
  // 底妆
  { id: 'p001', name: 'YSL 恒久无瑕持妆粉底液', brand: 'YSL', category: '底妆', price: 620, originalPrice: 680, rating: 4.7, skinTypes: ['油性', '混合'], image: 'foundation1', description: '24小时持妆不暗沉，轻薄遮瑕，油皮亲妈', tags: ['持妆', '遮瑕', '油皮'] },
  { id: 'p002', name: '兰蔻持妆轻透粉底液 PO-01', brand: 'Lancôme', category: '底妆', price: 450, originalPrice: 520, rating: 4.6, skinTypes: ['混合', '中性'], image: 'foundation2', description: '轻盈透气质地，持妆不闷痘，自然柔焦', tags: ['持妆', '轻薄', '透气'] },
  { id: 'p003', name: '阿玛尼权力粉底液 2号', brand: 'Armani', category: '底妆', price: 600, originalPrice: 650, rating: 4.8, skinTypes: ['油性', '混合'], image: 'foundation3', description: '高遮瑕强持妆，丝绒哑光妆效，瑕疵皮必备', tags: ['高遮瑕', '哑光', '权力'] },
  { id: 'p004', name: '花西子玉容气垫 N20', brand: '花西子', category: '底妆', price: 199, originalPrice: 259, rating: 4.3, skinTypes: ['干性', '中性'], image: 'foundation4', description: '东方养肤气垫，水润透亮，适合干皮和混干', tags: ['养肤', '水光', '国风'] },
  { id: 'p005', name: '雅诗兰黛DW持妆粉底液 1W1', brand: 'Estee Lauder', category: '底妆', price: 420, originalPrice: 480, rating: 4.7, skinTypes: ['油性', '混合'], image: 'foundation5', description: '油皮救星，持妆大王，越夜越美丽', tags: ['持妆', '油皮救星', '经典'] },
  { id: 'p006', name: 'NARS亮采柔滑遮瑕膏 Vanilla', brand: 'NARS', category: '底妆', price: 300, originalPrice: 350, rating: 4.6, skinTypes: ['全肤质'], image: 'foundation6', description: '奶油质地不卡纹，黑眼圈痘印一笔隐形', tags: ['遮瑕', '奶油', '不干'] },
  { id: 'p007', name: '纪梵希四宫格散粉 1号', brand: 'Givenchy', category: '底妆', price: 590, originalPrice: 620, rating: 4.8, skinTypes: ['全肤质'], image: 'foundation1', description: '经典四色定妆，柔焦提亮，控油持妆', tags: ['定妆', '四宫格', '经典'] },
  // 眼妆
  { id: 'p008', name: '完美日记探险家十二色眼影盘 小猫盘', brand: '完美日记', category: '眼妆', price: 129, originalPrice: 199, rating: 4.4, skinTypes: ['全肤质'], image: 'eyeshadow1', description: '大地色系百搭消肿，新手友好，一盘搞定日常', tags: ['大地色', '消肿', '新手'] },
  { id: 'p009', name: '3CE九宫格眼影盘 Overtake', brand: '3CE', category: '眼妆', price: 245, originalPrice: 299, rating: 4.7, skinTypes: ['全肤质'], image: 'eyeshadow2', description: '橘棕调经典盘，亮片绝美，韩系眼妆必备', tags: ['橘棕', '亮片', '韩系'] },
  { id: 'p010', name: 'Tom Ford四色眼影盘 20 Disco Dust', brand: 'Tom Ford', category: '眼妆', price: 720, originalPrice: 800, rating: 4.9, skinTypes: ['全肤质'], image: 'eyeshadow3', description: '蜜桃棕经典配色，粉质细腻，贵妇级眼影', tags: ['蜜桃', '贵妇', '细腻'] },
  { id: 'p011', name: 'Kiss Me梦幻泪眼防水眼线液笔 黑色', brand: 'Kiss Me', category: '眼妆', price: 68, originalPrice: 88, rating: 4.6, skinTypes: ['全肤质'], image: 'eyeshadow4', description: '极细笔尖，防水防汗不晕染，新手也能画好眼线', tags: ['防水', '极细', '不晕染'] },
  { id: 'p012', name: '美宝莲纽约极细防晕眼线笔', brand: 'Maybelline', category: '眼妆', price: 79, originalPrice: 99, rating: 4.3, skinTypes: ['全肤质'], image: 'eyeshadow5', description: '平价好用，顺滑显色，持久不晕染', tags: ['平价', '顺滑', '显色'] },
  { id: 'p013', name: '艾杜纱睫毛打底膏 黑色', brand: 'Ettusais', category: '眼妆', price: 89, originalPrice: 110, rating: 4.8, skinTypes: ['全肤质'], image: 'eyeshadow6', description: '根根分明卷翘一整天，睫毛不塌的秘密武器', tags: ['打底', '卷翘', '持久'] },
  { id: 'p014', name: '花西子螺黛生花眉笔 05灰棕', brand: '花西子', category: '眼妆', price: 69, originalPrice: 89, rating: 4.4, skinTypes: ['全肤质'], image: 'eyeshadow1', description: '极细三角笔芯，画出根根分明野生眉', tags: ['极细', '野生眉', '国风'] },
  // 唇妆
  { id: 'p015', name: 'YSL小金条细管口红 21', brand: 'YSL', category: '唇妆', price: 390, originalPrice: 450, rating: 4.8, skinTypes: ['全肤质'], image: 'lipstick1', description: '复古蓝调正红，显白不挑皮，气场全开', tags: ['正红', '显白', '气场'] },
  { id: 'p016', name: 'Dior烈艳蓝金唇膏 999哑光', brand: 'Dior', category: '唇妆', price: 380, originalPrice: 420, rating: 4.7, skinTypes: ['全肤质'], image: 'lipstick2', description: '经典正红色，每个女人都应该拥有的一支口红', tags: ['经典', '正红', '百搭'] },
  { id: 'p017', name: 'Colorkey空气唇釉 R608', brand: 'Colorkey', category: '唇妆', price: 49, originalPrice: 69, rating: 4.5, skinTypes: ['全肤质'], image: 'lipstick3', description: '丝绒雾面质地，焦糖红棕显白，平价战斗机', tags: ['丝绒', '红棕', '平价'] },
  { id: 'p018', name: 'MAC子弹头口红 Chili', brand: 'MAC', category: '唇妆', price: 190, originalPrice: 220, rating: 4.6, skinTypes: ['全肤质'], image: 'lipstick4', description: '经典小辣椒色，黄皮亲妈，显白不出错', tags: ['小辣椒', '黄皮亲妈', '经典'] },
  { id: 'p019', name: '3CE丝绒唇釉 Taupe', brand: '3CE', category: '唇妆', price: 110, originalPrice: 140, rating: 4.6, skinTypes: ['全肤质'], image: 'lipstick5', description: '砖红色复古显白，丝绒质地不拔干', tags: ['砖红', '复古', '不拔干'] },
  { id: 'p020', name: '完美日记名片唇釉 002无花果粉', brand: '完美日记', category: '唇妆', price: 59, originalPrice: 79, rating: 4.3, skinTypes: ['全肤质'], image: 'lipstick6', description: '轻薄名片设计，无花果粉温柔日常', tags: ['轻薄', '温柔', '日常'] },
  // 修容
  { id: 'p021', name: 'NARS腮红 Orgasm', brand: 'NARS', category: '修容', price: 300, originalPrice: 350, rating: 4.8, skinTypes: ['全肤质'], image: 'blush1', description: '蜜桃金偏光，自带高光效果，元气满满', tags: ['蜜桃', '偏光', '元气'] },
  { id: 'p022', name: '橘朵单色腮红 06杏子色', brand: '橘朵', category: '修容', price: 29, originalPrice: 39, rating: 4.5, skinTypes: ['全肤质'], image: 'blush2', description: '温柔杏子色，日杂感满满，新手不出错', tags: ['杏子', '日杂', '平价'] },
  { id: 'p023', name: 'MAC生姜高光 Double Gleam', brand: 'MAC', category: '修容', price: 360, originalPrice: 400, rating: 4.7, skinTypes: ['全肤质'], image: 'blush3', description: '水光感香槟色高光，自然透亮不显毛孔', tags: ['水光', '香槟', '不显毛孔'] },
  { id: 'p024', name: 'Too Cool For School三色修容盘', brand: 'Too Cool For School', category: '修容', price: 89, originalPrice: 119, rating: 4.4, skinTypes: ['全肤质'], image: 'blush4', description: '三色渐变修容，鼻影侧影一盘搞定，新手友好', tags: ['三色', '鼻影', '新手'] },
  // 护肤
  { id: 'p025', name: 'SK-II神仙水精华液 230ml', brand: 'SK-II', category: '护肤', price: 1540, originalPrice: 1690, rating: 4.8, skinTypes: ['油性', '混合'], image: 'skincare1', description: 'PITERA核心成分，调理水油平衡，改善肤质', tags: ['神仙水', '调理', '经典'] },
  { id: 'p026', name: '修丽可色修精华 30ml', brand: 'SkinCeuticals', category: '护肤', price: 595, originalPrice: 650, rating: 4.7, skinTypes: ['敏感', '痘痘'], image: 'skincare2', description: '植萃舒缓修红，淡化痘印，敏感肌安心用', tags: ['修红', '痘印', '植萃'] },
  { id: 'p027', name: '珂润润浸保湿滋养乳霜 40g', brand: 'Curel', category: '护肤', price: 188, originalPrice: 220, rating: 4.6, skinTypes: ['干性', '敏感'], image: 'skincare3', description: '神经酰胺修护，温和保湿，干敏肌救星', tags: ['神经酰胺', '修护', '温和'] },
  { id: 'p028', name: '安热沙金瓶防晒霜 60ml', brand: 'Anessa', category: '护肤', price: 228, originalPrice: 298, rating: 4.7, skinTypes: ['全肤质'], image: 'skincare4', description: '遇水则强防晒技术，户外必备，防水防汗', tags: ['防晒', '防水', '户外'] },
  { id: 'p029', name: '欧莱雅小金管防晒霜 30ml', brand: "L'Oreal", category: '护肤', price: 149, originalPrice: 189, rating: 4.5, skinTypes: ['全肤质'], image: 'skincare5', description: '麦色滤防晒科技，轻薄不搓泥，日常通勤', tags: ['防晒', '轻薄', '通勤'] },
  { id: 'p030', name: '薇诺娜舒敏保湿特护霜 50g', brand: 'Winona', category: '护肤', price: 268, originalPrice: 320, rating: 4.6, skinTypes: ['敏感'], image: 'skincare6', description: '马齿苋舒缓修护，敏感肌换季维稳首选', tags: ['修护', '敏感肌', '维稳'] }
];

// 6类目市集商品
const marketProducts = {
  kouhong: {
    all: [
      { id: 'lip001', name: 'YSL小金条细管口红 21号', brand: 'YSL', price: 390, sales: '5.2万', img: 'lipstick1', tag: '热销', desc: '复古蓝调正红' },
      { id: 'lip002', name: 'Dior烈艳蓝金唇膏 999哑光', brand: 'Dior', price: 380, sales: '4.8万', img: 'lipstick2', tag: '经典', desc: '经典正红色' },
      { id: 'lip003', name: 'MAC子弹头口红 Chili', brand: 'MAC', price: 190, sales: '8.5万', img: 'lipstick3', tag: '', desc: '小辣椒色' },
      { id: 'lip004', name: '3CE丝绒唇釉 Taupe', brand: '3CE', price: 110, sales: '3.2万', img: 'lipstick4', tag: '', desc: '砖红色复古' },
      { id: 'lip005', name: 'Colorkey空气唇釉 R608', brand: 'Colorkey', price: 49, sales: '12.1万', img: 'lipstick5', tag: '爆款', desc: '焦糖红棕' },
      { id: 'lip006', name: '完美日记名片唇釉 002', brand: '完美日记', price: 59, sales: '6.7万', img: 'lipstick6', tag: '', desc: '无花果粉' }
    ],
    '新品上市': [
      { id: 'lip007', name: 'NARS敢耀唇膏 Dragon Girl', brand: 'NARS', price: 300, sales: '2.1万', img: 'lipstick1', tag: '新品', desc: '橘红色' },
      { id: 'lip008', name: 'Tom Ford璀璨幻魅唇膏 16', brand: 'Tom Ford', price: 520, sales: '1.5万', img: 'lipstick2', tag: '新品', desc: 'SCARLET ROUGE' }
    ],
    '限时特惠': [
      { id: 'lip005', name: 'Colorkey空气唇釉 R608', brand: 'Colorkey', price: 39, sales: '12.1万', img: 'lipstick5', tag: '特惠', desc: '焦糖红棕' },
      { id: 'lip006', name: '完美日记名片唇釉 002', brand: '完美日记', price: 49, sales: '6.7万', img: 'lipstick6', tag: '特惠', desc: '无花果粉' }
    ],
    '爆款推荐': [
      { id: 'lip001', name: 'YSL小金条细管口红 21号', brand: 'YSL', price: 390, sales: '5.2万', img: 'lipstick1', tag: '热销', desc: '复古蓝调正红' },
      { id: 'lip003', name: 'MAC子弹头口红 Chili', brand: 'MAC', price: 190, sales: '8.5万', img: 'lipstick3', tag: '', desc: '小辣椒色' }
    ],
    '礼盒套装': [
      { id: 'lip009', name: 'YSL红唇礼盒套装', brand: 'YSL', price: 799, sales: '8千', img: 'lipstick4', tag: '礼盒', desc: '含2支正装' }
    ],
    '小样试用': [
      { id: 'lip010', name: 'Dior口红小样套装', brand: 'Dior', price: 99, sales: '3.5万', img: 'lipstick5', tag: '小样', desc: '3支装' }
    ]
  },
  difen: {
    all: [
      { id: 'base001', name: 'YSL恒久无瑕持妆粉底液', brand: 'YSL', price: 620, sales: '3.8万', img: 'foundation1', tag: '热销', desc: '24小时持妆' },
      { id: 'base002', name: '兰蔻持妆轻透粉底液 PO-01', brand: 'Lancôme', price: 450, sales: '2.9万', img: 'foundation2', tag: '', desc: '轻盈透气' },
      { id: 'base003', name: '阿玛尼权力粉底液 2号', brand: 'Armani', price: 600, sales: '3.2万', img: 'foundation3', tag: '', desc: '高遮瑕强持妆' },
      { id: 'base004', name: '花西子玉容气垫 N20', brand: '花西子', price: 199, sales: '4.5万', img: 'foundation4', tag: '爆款', desc: '东方养肤' },
      { id: 'base005', name: '雅诗兰黛DW持妆粉底液', brand: 'Estee Lauder', price: 420, sales: '5.1万', img: 'foundation5', tag: '', desc: '油皮救星' },
      { id: 'base006', name: 'NARS亮采柔滑遮瑕膏', brand: 'NARS', price: 300, sales: '2.3万', img: 'foundation6', tag: '', desc: '奶油质地' }
    ],
    '新品上市': [
      { id: 'base007', name: 'Chanel柔光持妆粉底液', brand: 'Chanel', price: 650, sales: '1.2万', img: 'foundation1', tag: '新品', desc: '柔光妆效' }
    ],
    '限时特惠': [
      { id: 'base004', name: '花西子玉容气垫 N20', brand: '花西子', price: 159, sales: '4.5万', img: 'foundation4', tag: '特惠', desc: '东方养肤' },
      { id: 'base005', name: '雅诗兰黛DW持妆粉底液', brand: 'Estee Lauder', price: 360, sales: '5.1万', img: 'foundation5', tag: '特惠', desc: '油皮救星' }
    ],
    '爆款推荐': [
      { id: 'base001', name: 'YSL恒久无瑕持妆粉底液', brand: 'YSL', price: 620, sales: '3.8万', img: 'foundation1', tag: '热销', desc: '24小时持妆' },
      { id: 'base004', name: '花西子玉容气垫 N20', brand: '花西子', price: 199, sales: '4.5万', img: 'foundation4', tag: '爆款', desc: '东方养肤' }
    ],
    '礼盒套装': [
      { id: 'base008', name: '兰蔻底妆礼盒', brand: 'Lancôme', price: 999, sales: '5千', img: 'foundation2', tag: '礼盒', desc: '含粉底+散粉' }
    ],
    '小样试用': [
      { id: 'base009', name: '大牌粉底小样套装', brand: 'Mix', price: 59, sales: '2.8万', img: 'foundation3', tag: '小样', desc: '5支装' }
    ]
  },
  yanying: {
    all: [
      { id: 'eye001', name: '完美日记探险家十二色眼影盘', brand: '完美日记', price: 129, sales: '6.8万', img: 'eyeshadow1', tag: '热销', desc: '小猫盘' },
      { id: 'eye002', name: '3CE九宫格眼影盘 Overtake', brand: '3CE', price: 245, sales: '4.2万', img: 'eyeshadow2', tag: '', desc: '橘棕调' },
      { id: 'eye003', name: 'Tom Ford四色眼影盘 20', brand: 'Tom Ford', price: 720, sales: '1.8万', img: 'eyeshadow3', tag: '', desc: '蜜桃棕' },
      { id: 'eye004', name: 'Kiss Me防水眼线液笔', brand: 'Kiss Me', price: 68, sales: '9.2万', img: 'eyeshadow4', tag: '爆款', desc: '极细笔尖' },
      { id: 'eye005', name: '艾杜纱睫毛打底膏', brand: 'Ettusais', price: 89, sales: '5.6万', img: 'eyeshadow5', tag: '', desc: '根根分明' },
      { id: 'eye006', name: '花西子螺黛生花眉笔', brand: '花西子', price: 69, sales: '3.4万', img: 'eyeshadow6', tag: '', desc: '极细三角' }
    ],
    '新品上市': [
      { id: 'eye007', name: 'Urban Decay Naked Heat', brand: 'Urban Decay', price: 480, sales: '1.5万', img: 'eyeshadow1', tag: '新品', desc: '枫叶盘' }
    ],
    '限时特惠': [
      { id: 'eye001', name: '完美日记探险家十二色眼影盘', brand: '完美日记', price: 89, sales: '6.8万', img: 'eyeshadow1', tag: '特惠', desc: '小猫盘' },
      { id: 'eye004', name: 'Kiss Me防水眼线液笔', brand: 'Kiss Me', price: 48, sales: '9.2万', img: 'eyeshadow4', tag: '特惠', desc: '极细笔尖' }
    ],
    '爆款推荐': [
      { id: 'eye001', name: '完美日记探险家十二色眼影盘', brand: '完美日记', price: 129, sales: '6.8万', img: 'eyeshadow1', tag: '热销', desc: '小猫盘' },
      { id: 'eye004', name: 'Kiss Me防水眼线液笔', brand: 'Kiss Me', price: 68, sales: '9.2万', img: 'eyeshadow4', tag: '爆款', desc: '极细笔尖' }
    ],
    '礼盒套装': [
      { id: 'eye008', name: '3CE眼影礼盒套装', brand: '3CE', price: 499, sales: '6千', img: 'eyeshadow2', tag: '礼盒', desc: '含眼影+唇釉' }
    ],
    '新品首发': [
      { id: 'eye009', name: '完美日记赤狐盘', brand: '完美日记', price: 159, sales: '2.1万', img: 'eyeshadow3', tag: '新品', desc: '赤狐限定' }
    ]
  },
  saihong: {
    all: [
      { id: 'blush001', name: 'NARS腮红 Orgasm', brand: 'NARS', price: 300, sales: '4.5万', img: 'blush1', tag: '热销', desc: '蜜桃金偏光' },
      { id: 'blush002', name: '橘朵单色腮红 06', brand: '橘朵', price: 29, sales: '7.8万', img: 'blush2', tag: '爆款', desc: '杏子色' },
      { id: 'blush003', name: 'MAC生姜高光', brand: 'MAC', price: 360, sales: '3.2万', img: 'blush3', tag: '', desc: '香槟色' },
      { id: 'blush004', name: 'Too Cool三色修容盘', brand: 'Too Cool', price: 89, sales: '5.1万', img: 'blush4', tag: '', desc: '鼻影侧影' },
      { id: 'blush005', name: '花西子胭脂腮红', brand: '花西子', price: 129, sales: '2.8万', img: 'blush1', tag: '', desc: '自然好气色' },
      { id: 'blush006', name: 'Hourglass五花肉高光', brand: 'Hourglass', price: 420, sales: '1.5万', img: 'blush2', tag: '', desc: '柔光亮片' }
    ],
    '新品上市': [
      { id: 'blush007', name: 'Fenty Beauty高光棒', brand: 'Fenty', price: 348, sales: '9千', img: 'blush3', tag: '新品', desc: '钻石高光' }
    ],
    '限时特惠': [
      { id: 'blush002', name: '橘朵单色腮红 06', brand: '橘朵', price: 19, sales: '7.8万', img: 'blush2', tag: '特惠', desc: '杏子色' },
      { id: 'blush004', name: 'Too Cool三色修容盘', brand: 'Too Cool', price: 69, sales: '5.1万', img: 'blush4', tag: '特惠', desc: '鼻影侧影' }
    ],
    '爆款推荐': [
      { id: 'blush001', name: 'NARS腮红 Orgasm', brand: 'NARS', price: 300, sales: '4.5万', img: 'blush1', tag: '热销', desc: '蜜桃金偏光' },
      { id: 'blush002', name: '橘朵单色腮红 06', brand: '橘朵', price: 29, sales: '7.8万', img: 'blush2', tag: '爆款', desc: '杏子色' }
    ],
    '礼盒套装': [
      { id: 'blush008', name: 'NARS修容礼盒', brand: 'NARS', price: 599, sales: '4千', img: 'blush3', tag: '礼盒', desc: '腮红+高光' }
    ],
    '小样试用': [
      { id: 'blush009', name: '高光小样套装', brand: 'Mix', price: 39, sales: '2.1万', img: 'blush4', tag: '小样', desc: '4色装' }
    ]
  },
  xiaomian: {
    all: [
      { id: 'brow001', name: '花西子螺黛生花眉笔', brand: '花西子', price: 69, sales: '3.4万', img: 'eyeshadow1', tag: '', desc: '极细三角' },
      { id: 'brow002', name: '植村秀砍刀眉笔', brand: 'Shu Uemura', price: 200, sales: '2.8万', img: 'eyeshadow2', tag: '', desc: '经典砍刀' },
      { id: 'brow003', name: 'Anastasia眉胶', brand: 'Anastasia', price: 230, sales: '1.5万', img: 'eyeshadow3', tag: '', desc: '持久定型' },
      { id: 'brow004', name: '橘朵眉膏', brand: '橘朵', price: 39, sales: '4.2万', img: 'eyeshadow4', tag: '爆款', desc: '防水防汗' },
      { id: 'brow005', name: '卡姿兰眉粉', brand: '卡姿兰', price: 89, sales: '3.1万', img: 'eyeshadow5', tag: '', desc: '三色渐变' },
      { id: 'brow006', name: 'Dior眉笔', brand: 'Dior', price: 280, sales: '1.2万', img: 'eyeshadow6', tag: '', desc: '精准勾勒' }
    ],
    '新品上市': [
      { id: 'brow007', name: 'Hourglass眉笔', brand: 'Hourglass', price: 320, sales: '8千', img: 'eyeshadow1', tag: '新品', desc: '超细笔尖' }
    ],
    '限时特惠': [
      { id: 'brow004', name: '橘朵眉膏', brand: '橘朵', price: 29, sales: '4.2万', img: 'eyeshadow4', tag: '特惠', desc: '防水防汗' }
    ],
    '爆款推荐': [
      { id: 'brow001', name: '花西子螺黛生花眉笔', brand: '花西子', price: 69, sales: '3.4万', img: 'eyeshadow1', tag: '', desc: '极细三角' },
      { id: 'brow004', name: '橘朵眉膏', brand: '橘朵', price: 39, sales: '4.2万', img: 'eyeshadow4', tag: '爆款', desc: '防水防汗' }
    ],
    '礼盒套装': [
      { id: 'brow008', name: '眉部护理套装', brand: 'Mix', price: 129, sales: '5千', img: 'eyeshadow2', tag: '礼盒', desc: '眉笔+眉胶+修眉刀' }
    ],
    '新品首发': [
      { id: 'brow009', name: '3CE眉粉盘', brand: '3CE', price: 150, sales: '1.1万', img: 'eyeshadow3', tag: '新品', desc: '双色眉粉' }
    ]
  },
  huzhuang: {
    all: [
      { id: 'skincare001', name: 'SK-II神仙水精华液', brand: 'SK-II', price: 1540, sales: '2.8万', img: 'skincare1', tag: '热销', desc: '230ml' },
      { id: 'skincare002', name: '修丽可色修精华', brand: 'SkinCeuticals', price: 595, sales: '1.9万', img: 'skincare2', tag: '', desc: '30ml' },
      { id: 'skincare003', name: '珂润润浸保湿乳霜', brand: 'Curel', price: 188, sales: '4.5万', img: 'skincare3', tag: '', desc: '40g' },
      { id: 'skincare004', name: '安热沙金瓶防晒霜', brand: 'Anessa', price: 228, sales: '6.2万', img: 'skincare4', tag: '爆款', desc: '60ml' },
      { id: 'skincare005', name: '欧莱雅小金管防晒霜', brand: "L'Oreal", price: 149, sales: '5.8万', img: 'skincare5', tag: '', desc: '30ml' },
      { id: 'skincare006', name: '薇诺娜舒敏保湿特护霜', brand: 'Winona', price: 268, sales: '3.2万', img: 'skincare6', tag: '', desc: '50g' }
    ],
    '新品上市': [
      { id: 'skincare007', name: 'La Mer海蓝之谜面霜', brand: 'La Mer', price: 2550, sales: '8千', img: 'skincare1', tag: '新品', desc: '60ml' }
    ],
    '限时特惠': [
      { id: 'skincare004', name: '安热沙金瓶防晒霜', brand: 'Anessa', price: 188, sales: '6.2万', img: 'skincare4', tag: '特惠', desc: '60ml' },
      { id: 'skincare005', name: '欧莱雅小金管防晒霜', brand: "L'Oreal", price: 119, sales: '5.8万', img: 'skincare5', tag: '特惠', desc: '30ml' }
    ],
    '爆款推荐': [
      { id: 'skincare001', name: 'SK-II神仙水精华液', brand: 'SK-II', price: 1540, sales: '2.8万', img: 'skincare1', tag: '热销', desc: '230ml' },
      { id: 'skincare004', name: '安热沙金瓶防晒霜', brand: 'Anessa', price: 228, sales: '6.2万', img: 'skincare4', tag: '爆款', desc: '60ml' }
    ],
    '礼盒套装': [
      { id: 'skincare008', name: 'SK-II神仙水礼盒', brand: 'SK-II', price: 2090, sales: '6千', img: 'skincare2', tag: '礼盒', desc: '含清莹露' },
      { id: 'skincare009', name: '修丽可护肤套装', brand: 'SkinCeuticals', price: 1280, sales: '4千', img: 'skincare3', tag: '礼盒', desc: '含色修+B5' }
    ],
    '护肤套装': [
      { id: 'skincare010', name: '基础护肤套装', brand: 'Mix', price: 399, sales: '2.1万', img: 'skincare4', tag: '', desc: '洁面+水+乳' }
    ]
  }
};

// 通过ID查找商品（同时搜索products和marketProducts）
function findProductById(id) {
  // 搜索通用商品
  const product = products.find(p => p.id === id);
  if (product) return product;
  // 搜索市集商品
  for (const cat in marketProducts) {
    for (const sub in marketProducts[cat]) {
      const found = marketProducts[cat][sub].find(p => p.id === id);
      if (found) return found;
    }
  }
  return null;
}

// 获取市集商品（指定类目和子类目）
function getMarketProducts(cat, sub) {
  if (!marketProducts[cat]) return [];
  if (!sub || sub === '全部') return marketProducts[cat].all || [];
  return marketProducts[cat][sub] || [];
}

module.exports = {
  products,
  marketProducts,
  findProductById,
  getMarketProducts
};
