// data/images.js - 图片URL映射表
// 源demo中所有图片通过trae-api-cn文生图API生成，这里保留完整URL映射

const BASE_URL = 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=';
const IMAGE_SIZE_SQUARE = '&image_size=square';
const IMAGE_SIZE_PORTRAIT = '&image_size=portrait_4_3';
const IMAGE_SIZE_LANDSCAPE = '&image_size=landscape_16_9';

// 图片URL映射表（短key -> 完整URL）
const imageUrls = {
  // 达人封面
  coverCreator1: BASE_URL + 'Asian%20woman%20morning%20commute%20makeup%2C%20fresh%20natural%20look%2C%20professional%20beauty%20photography%2C%20soft%20lighting' + IMAGE_SIZE_SQUARE,
  coverCreator2: BASE_URL + 'Asian%20woman%20luxury%20goddess%20makeup%2C%20glamorous%20elegant%20look%2C%20professional%20beauty%20photography%2C%20studio%20lighting' + IMAGE_SIZE_SQUARE,
  coverCreator3: BASE_URL + 'Asian%20woman%20pure%20white%20water%20makeup%2C%20natural%20dewy%20look%2C%20professional%20beauty%20photography%2C%20soft%20pastel%20colors' + IMAGE_SIZE_SQUARE,
  coverCreator4: BASE_URL + 'Asian%20woman%20seductive%20elegant%20makeup%2C%20dark%20glamorous%20look%2C%20professional%20beauty%20photography%2C%20dramatic%20lighting' + IMAGE_SIZE_SQUARE,
  coverCreator5: BASE_URL + 'Asian%20woman%20Korean%20style%20student%20makeup%2C%20fresh%20youthful%20look%2C%20professional%20beauty%20photography%2C%20bright%20lighting' + IMAGE_SIZE_SQUARE,
  coverCreator6: BASE_URL + 'Asian%20woman%20autumn%20maillard%20makeup%2C%20warm%20brown%20tones%2C%20professional%20beauty%20photography%2C%20cozy%20lighting' + IMAGE_SIZE_SQUARE,
  coverCreator7: BASE_URL + 'Asian%20woman%20clean%20minimal%20makeup%2C%20natural%20clear%20skin%2C%20professional%20beauty%20photography%2C%20soft%20lighting' + IMAGE_SIZE_SQUARE,
  coverCreator8: BASE_URL + 'Asian%20woman%20Chinese%20style%20makeup%2C%20elegant%20traditional%2C%20professional%20beauty%20photography%2C%20artistic%20lighting' + IMAGE_SIZE_SQUARE,
  coverCreator9: BASE_URL + 'Asian%20woman%20retro%20Hong%20Kong%20style%20makeup%2C%20vintage%20glamorous%2C%20professional%20beauty%20photography' + IMAGE_SIZE_SQUARE,
  coverCreator10: BASE_URL + 'Asian%20woman%20Thai%20style%20makeup%2C%20bold%20glamorous%2C%20professional%20beauty%20photography' + IMAGE_SIZE_SQUARE,
  coverCreator11: BASE_URL + 'Asian%20woman%20Japanese%20style%20transparent%20makeup%2C%20natural%20dewy%2C%20professional%20beauty%20photography' + IMAGE_SIZE_SQUARE,
  coverCreator12: BASE_URL + 'Asian%20woman%20Y2K%20millennium%20makeup%2C%20creative%20colorful%2C%20professional%20beauty%20photography' + IMAGE_SIZE_SQUARE,
  coverCreator13: BASE_URL + 'Asian%20woman%20ballet%20style%20makeup%2C%20sweet%20elegant%2C%20professional%20beauty%20photography' + IMAGE_SIZE_SQUARE,
  coverCreator14: BASE_URL + 'Asian%20woman%20old%20money%20luxury%20makeup%2C%20quiet%20elegant%2C%20professional%20beauty%20photography' + IMAGE_SIZE_SQUARE,
  coverCreator15: BASE_URL + 'Asian%20woman%20dopamine%20colorful%20makeup%2C%20vibrant%20energetic%2C%20professional%20beauty%20photography' + IMAGE_SIZE_SQUARE,
  coverCreator16: BASE_URL + 'Asian%20woman%20smoky%20eyes%20western%20style%20makeup%2C%20professional%20beauty%20photography' + IMAGE_SIZE_SQUARE,
  // 教程封面
  coverTutorial1: BASE_URL + 'Close%20up%20eyeliner%20tutorial%2C%20eye%20makeup%2C%20professional%20beauty%20photography%2C%20macro' + IMAGE_SIZE_SQUARE,
  coverTutorial2: BASE_URL + 'Close%20up%20eyeshadow%20tutorial%2C%20eye%20makeup%2C%20professional%20beauty%20photography%2C%20macro' + IMAGE_SIZE_SQUARE,
  coverTutorial3: BASE_URL + 'Close%20up%20under%20eye%20makeup%2C%20aegyo%20sal%2C%20professional%20beauty%20photography' + IMAGE_SIZE_SQUARE,
  coverTutorial4: BASE_URL + 'Close%20up%20eyelash%20tutorial%2C%20mascara%2C%20professional%20beauty%20photography' + IMAGE_SIZE_SQUARE,
  coverTutorial5: BASE_URL + 'Close%20up%20contour%20makeup%2C%20face%20sculpting%2C%20professional%20beauty%20photography' + IMAGE_SIZE_SQUARE,
  coverTutorial6: BASE_URL + 'Close%20up%20lip%20makeup%2C%20lipstick%2C%20professional%20beauty%20photography' + IMAGE_SIZE_SQUARE,
  coverTutorial7: BASE_URL + 'Close%20up%20eyebrow%20makeup%2C%20brow%2C%20professional%20beauty%20photography' + IMAGE_SIZE_SQUARE,
  coverTutorial8: BASE_URL + 'Close%20up%20blush%20makeup%2C%20cheek%2C%20professional%20beauty%20photography' + IMAGE_SIZE_SQUARE,
  coverTutorial9: BASE_URL + 'Close%20up%20concealer%20makeup%2C%20under%20eye%2C%20professional%20beauty%20photography' + IMAGE_SIZE_SQUARE,
  coverTutorial10: BASE_URL + 'Close%20up%20foundation%20makeup%2C%20flawless%20skin%2C%20professional%20beauty%20photography' + IMAGE_SIZE_SQUARE,
  // 国风封面
  coverGuofeng1: BASE_URL + 'Asian%20woman%20Tang%20dynasty%20makeup%2C%20traditional%20Chinese%2C%20professional%20beauty%20photography' + IMAGE_SIZE_SQUARE,
  coverGuofeng2: BASE_URL + 'Asian%20woman%20Song%20dynasty%20makeup%2C%20elegant%20minimal%2C%20professional%20beauty%20photography' + IMAGE_SIZE_SQUARE,
  coverGuofeng3: BASE_URL + 'Asian%20woman%20Dunhuang%20makeup%2C%20golden%20artistic%2C%20professional%20beauty%20photography' + IMAGE_SIZE_SQUARE,
  coverGuofeng4: BASE_URL + 'Asian%20woman%20Chinese%20opera%20makeup%2C%20traditional%2C%20professional%20beauty%20photography' + IMAGE_SIZE_SQUARE,
  coverGuofeng5: BASE_URL + 'Asian%20woman%20Ming%20dynasty%20makeup%2C%20classical%2C%20professional%20beauty%20photography' + IMAGE_SIZE_SQUARE,
  coverGuofeng6: BASE_URL + 'Asian%20woman%20Wei%20Jin%20makeup%2C%20natural%20ethereal%2C%20professional%20beauty%20photography' + IMAGE_SIZE_SQUARE,
  coverGuofeng7: BASE_URL + 'Asian%20woman%20Han%20dynasty%20makeup%2C%20red%20lips%2C%20professional%20beauty%20photography' + IMAGE_SIZE_SQUARE,
  coverGuofeng8: BASE_URL + 'Asian%20woman%20Miao%20minority%20makeup%2C%20silver%20jewelry%2C%20professional%20beauty%20photography' + IMAGE_SIZE_SQUARE,
  // 银发封面
  coverSilver1: BASE_URL + 'Senior%20Asian%20woman%20natural%20makeup%2C%20elegant%20mature%2C%20professional%20beauty%20photography' + IMAGE_SIZE_SQUARE,
  coverSilver2: BASE_URL + 'Senior%20Asian%20woman%20elegant%20makeup%2C%20graceful%2C%20professional%20beauty%20photography' + IMAGE_SIZE_SQUARE,
  coverSilver3: BASE_URL + 'Senior%20Asian%20woman%20professional%20makeup%2C%20confident%2C%20professional%20beauty%20photography' + IMAGE_SIZE_SQUARE,
  coverSilver4: BASE_URL + 'Senior%20Asian%20woman%20travel%20makeup%2C%20fresh%2C%20professional%20beauty%20photography' + IMAGE_SIZE_SQUARE,
  coverSilver5: BASE_URL + 'Senior%20Asian%20woman%20bridal%20makeup%2C%20elegant%2C%20professional%20beauty%20photography' + IMAGE_SIZE_SQUARE,
  coverSilver6: BASE_URL + 'Senior%20Asian%20woman%20warm%20makeup%2C%20gentle%2C%20professional%20beauty%20photography' + IMAGE_SIZE_SQUARE,
  // 大牌封面
  coverBrand1: BASE_URL + 'Luxury%20makeup%20product%2C%20YSL%20style%2C%20professional%20product%20photography%2C%20elegant' + IMAGE_SIZE_SQUARE,
  coverBrand2: BASE_URL + 'Luxury%20makeup%20product%2C%20Dior%20style%2C%20professional%20product%20photography%2C%20elegant' + IMAGE_SIZE_SQUARE,
  coverBrand3: BASE_URL + 'Luxury%20makeup%20product%2C%20Chanel%20style%2C%20professional%20product%20photography%2C%20elegant' + IMAGE_SIZE_SQUARE,
  coverBrand4: BASE_URL + 'Luxury%20makeup%20product%2C%20Lancome%20style%2C%20professional%20product%20photography%2C%20elegant' + IMAGE_SIZE_SQUARE,
  coverBrand5: BASE_URL + 'Luxury%20makeup%20product%2C%20MAC%20style%2C%20professional%20product%20photography%2C%20elegant' + IMAGE_SIZE_SQUARE,
  // 明星封面
  coverCelebrity1: BASE_URL + 'Asian%20celebrity%20style%20makeup%2C%20sweet%2C%20professional%20beauty%20photography' + IMAGE_SIZE_SQUARE,
  coverCelebrity2: BASE_URL + 'Asian%20celebrity%20style%20makeup%2C%20cool%2C%20professional%20beauty%20photography' + IMAGE_SIZE_SQUARE,
  coverCelebrity3: BASE_URL + 'Asian%20celebrity%20style%20makeup%2C%20glamorous%2C%20professional%20beauty%20photography' + IMAGE_SIZE_SQUARE,
  coverCelebrity4: BASE_URL + 'Asian%20celebrity%20style%20makeup%2C%20Korean%2C%20professional%20beauty%20photography' + IMAGE_SIZE_SQUARE,
  coverCelebrity5: BASE_URL + 'Asian%20celebrity%20style%20makeup%2C%20elegant%2C%20professional%20beauty%20photography' + IMAGE_SIZE_SQUARE,
  coverCelebrity6: BASE_URL + 'Asian%20celebrity%20style%20makeup%2C%20fairy%2C%20professional%20beauty%20photography' + IMAGE_SIZE_SQUARE,
  coverCelebrity7: BASE_URL + 'Asian%20celebrity%20style%20makeup%2C%20mature%2C%20professional%20beauty%20photography' + IMAGE_SIZE_SQUARE,
  // 商城产品图
  lipstick1: BASE_URL + 'YSL%20gold%20bar%20lipstick%20product%20photo%2C%20luxury%20packaging%2C%20professional%20product%20photography' + IMAGE_SIZE_SQUARE,
  lipstick2: BASE_URL + 'Dior%20lipstick%20product%20photo%2C%20luxury%20packaging%2C%20professional%20product%20photography' + IMAGE_SIZE_SQUARE,
  lipstick3: BASE_URL + 'MAC%20lipstick%20product%20photo%2C%20professional%20product%20photography' + IMAGE_SIZE_SQUARE,
  lipstick4: BASE_URL + '3CE%20lip%20glaze%20product%20photo%2C%20professional%20product%20photography' + IMAGE_SIZE_SQUARE,
  lipstick5: BASE_URL + 'Colorkey%20lip%20glaze%20product%20photo%2C%20professional%20product%20photography' + IMAGE_SIZE_SQUARE,
  lipstick6: BASE_URL + 'lip%20glaze%20product%20photo%2C%20professional%20product%20photography' + IMAGE_SIZE_SQUARE,
  foundation1: BASE_URL + 'YSL%20foundation%20bottle%20product%20photo%2C%20luxury%2C%20professional%20product%20photography' + IMAGE_SIZE_SQUARE,
  foundation2: BASE_URL + 'Lancome%20foundation%20bottle%20product%20photo%2C%20professional%20product%20photography' + IMAGE_SIZE_SQUARE,
  foundation3: BASE_URL + 'Armani%20foundation%20bottle%20product%20photo%2C%20professional%20product%20photography' + IMAGE_SIZE_SQUARE,
  foundation4: BASE_URL + 'Florasis%20cushion%20product%20photo%2C%20Chinese%20style%2C%20professional%20product%20photography' + IMAGE_SIZE_SQUARE,
  foundation5: BASE_URL + 'Estee%20Lauder%20foundation%20product%20photo%2C%20professional%20product%20photography' + IMAGE_SIZE_SQUARE,
  foundation6: BASE_URL + 'NARS%20concealer%20product%20photo%2C%20professional%20product%20photography' + IMAGE_SIZE_SQUARE,
  eyeshadow1: BASE_URL + 'eyeshadow%20palette%20product%20photo%2C%20professional%20product%20photography' + IMAGE_SIZE_SQUARE,
  eyeshadow2: BASE_URL + '3CE%20eyeshadow%20palette%20product%20photo%2C%20professional%20product%20photography' + IMAGE_SIZE_SQUARE,
  eyeshadow3: BASE_URL + 'Tom%20Ford%20eyeshadow%20palette%20product%20photo%2C%20luxury%2C%20professional%20product%20photography' + IMAGE_SIZE_SQUARE,
  eyeshadow4: BASE_URL + 'eyeliner%20pen%20product%20photo%2C%20professional%20product%20photography' + IMAGE_SIZE_SQUARE,
  eyeshadow5: BASE_URL + 'mascara%20product%20photo%2C%20professional%20product%20photography' + IMAGE_SIZE_SQUARE,
  eyeshadow6: BASE_URL + 'eyebrow%20pencil%20product%20photo%2C%20professional%20product%20photography' + IMAGE_SIZE_SQUARE,
  blush1: BASE_URL + 'NARS%20blush%20product%20photo%2C%20professional%20product%20photography' + IMAGE_SIZE_SQUARE,
  blush2: BASE_URL + 'blush%20compact%20product%20photo%2C%20professional%20product%20photography' + IMAGE_SIZE_SQUARE,
  blush3: BASE_URL + 'highlighter%20product%20photo%2C%20professional%20product%20photography' + IMAGE_SIZE_SQUARE,
  blush4: BASE_URL + 'contour%20palette%20product%20photo%2C%20professional%20product%20photography' + IMAGE_SIZE_SQUARE,
  skincare1: BASE_URL + 'SKII%20essence%20bottle%20product%20photo%2C%20luxury%20skincare%2C%20professional%20product%20photography' + IMAGE_SIZE_SQUARE,
  skincare2: BASE_URL + 'skincare%20serum%20bottle%20product%20photo%2C%20professional%20product%20photography' + IMAGE_SIZE_SQUARE,
  skincare3: BASE_URL + 'moisturizer%20cream%20product%20photo%2C%20professional%20product%20photography' + IMAGE_SIZE_SQUARE,
  skincare4: BASE_URL + 'sunscreen%20bottle%20product%20photo%2C%20professional%20product%20photography' + IMAGE_SIZE_SQUARE,
  // 面部档案
  makeup_natural: BASE_URL + 'Asian%20woman%20natural%20daily%20makeup%2C%20fresh%20dewy%20skin%2C%20professional%20beauty%20photography' + IMAGE_SIZE_SQUARE,
  makeup_peach: BASE_URL + 'Asian%20woman%20peach%20sweet%20makeup%2C%20professional%20beauty%20photography' + IMAGE_SIZE_SQUARE,
  makeup_elegant: BASE_URL + 'Asian%20woman%20elegant%20office%20makeup%2C%20professional%20beauty%20photography' + IMAGE_SIZE_SQUARE,
  // 用户头像
  avatar_shenwanqing: BASE_URL + 'Asian%20woman%20beauty%20portrait%2C%20soft%20lighting%2C%20professional%20headshot%2C%20elegant' + IMAGE_SIZE_SQUARE
};

// 通过key获取图片URL，如果key本身就是URL则直接返回
function getImageUrl(key) {
  if (!key) return '';
  if (typeof key === 'string' && key.startsWith('http')) return key;
  if (typeof key === 'string' && key.startsWith('assets/')) return key;
  return imageUrls[key] || imageUrls.coverCreator1; // 默认回退
}

module.exports = { imageUrls, getImageUrl };
