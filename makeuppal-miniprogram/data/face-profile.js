// data/face-profile.js - 面部档案数据 + 肤质/脸型/肤色

const skinProfile = {
  skinTypes: [
    { id: 'st001', name: '干性', description: '皮脂分泌少，皮肤干燥，易起皮' },
    { id: 'st002', name: '油性', description: '皮脂分泌旺盛，毛孔粗大，易长痘' },
    { id: 'st003', name: '混合', description: 'T区油两颊干，需要分区护理' },
    { id: 'st004', name: '中性', description: '水油平衡，皮肤状态稳定' },
    { id: 'st005', name: '敏感', description: '皮肤薄，易泛红，需温和护理' }
  ],
  faceShapes: [
    { id: 'fs001', name: '椭圆脸', description: '额头与颧骨基本等宽，脸长约为脸宽的1.5倍' },
    { id: 'fs002', name: '圆脸', description: '脸长与脸宽接近，轮廓圆润' },
    { id: 'fs003', name: '方脸', description: '下颌骨明显，额头与下颌宽度接近' },
    { id: 'fs004', name: '长脸', description: '脸长明显大于脸宽，中庭较长' },
    { id: 'fs005', name: '心形脸', description: '额头宽，下颌窄，尖下巴' },
    { id: 'fs006', name: '菱形脸', description: '颧骨最宽，额头和下颌较窄' }
  ],
  skinTones: [
    { id: 'ton001', name: '冷白皮', description: '肤色偏白，血管呈蓝紫色，适合银饰' },
    { id: 'ton002', name: '暖黄皮', description: '肤色偏黄，血管呈绿色，适合金饰' },
    { id: 'ton003', name: '中性皮', description: '肤色自然，血管蓝绿兼有，冷暖皆宜' },
    { id: 'ton004', name: '小麦色', description: '肤色偏深，健康光泽，适合大地色系' },
    { id: 'ton005', name: '深肤色', description: '肤色较深，对比度强，适合高饱和色彩' }
  ]
};

// 当前用户面部档案（沈婉清）
const faceProfileData = {
  name: '沈婉清',
  faceShape: '鹅蛋脸',
  skinType: '混合性肤质',
  undertone: '暖色调',
  avatar: 'avatar_shenwanqing',
  scores: { bone: 86, skin: 78, makeup: 82 },
  dimensions: [
    { label: '脸长比例', value: 85 },
    { label: '额头宽度', value: 76 },
    { label: '颧骨高度', value: 72 },
    { label: '下颌线条', value: 88 },
    { label: '鼻梁高度', value: 84 },
    { label: '眼距比例', value: 80 }
  ],
  traits: ['双眼皮', '高鼻梁', '樱桃小嘴', 'T区油', '敏感肌', '法令纹轻'],
  skinDetails: [
    { label: '肤质类型', value: '混合性' },
    { label: '肤色色调', value: '暖色调' },
    { label: '毛孔状态', value: 'T区略粗' },
    { label: '出油情况', value: 'T区较油' },
    { label: '敏感程度', value: '轻度敏感' },
    { label: '紧致程度', value: '良好' }
  ],
  makeupRecommendations: [
    { id: 'mk001', title: '日常清新裸妆', desc: '适合日常通勤，轻薄自然', tags: ['日常', '裸妆'], img: 'makeup_natural', products: ['base002', 'blush002', 'eye001'] },
    { id: 'mk002', title: '温柔蜜桃妆容', desc: '暖色调搭配，甜美可人', tags: ['甜美', '蜜桃'], img: 'makeup_peach', products: ['lip005', 'blush001', 'eye002'] },
    { id: 'mk003', title: '优雅气质妆', desc: '提升气场，精致干练', tags: ['气质', '职场'], img: 'makeup_elegant', products: ['lip001', 'base001', 'blush003'] }
  ],
  productRecommendations: [
    { id: 'base002', name: '兰蔻持妆轻透粉底液', price: 450, img: 'foundation2', brand: '兰蔻', desc: '轻盈透气' },
    { id: 'skincare001', name: 'SK-II神仙水精华液', price: 1540, img: 'skincare1', brand: 'SK-II', desc: '230ml' },
    { id: 'lip001', name: 'YSL小金条细管口红 21号', price: 390, img: 'lipstick1', brand: 'YSL', desc: '复古蓝调正红' },
    { id: 'skincare004', name: '安热沙金瓶防晒霜', price: 228, img: 'skincare4', brand: 'Anessa', desc: '60ml' }
  ]
};

module.exports = { skinProfile, faceProfileData };
