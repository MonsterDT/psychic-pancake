// data/library-extra.js - 颜库扩展数据（makeupLibraryData，7个分类27个模板）
// 源demo行18669-19008

const { libraryFeed } = require('./library');

const makeupLibraryData = {
  // 达人妆容
  daren: [
    {
      id: 'm001', name: '日常通勤妆', desc: '适合上班族的快速妆容，自然清新不夸张，3分钟搞定',
      occasion: '日常通勤', difficulty: 1,
      tools: ['粉底液', '眉笔', '睫毛膏', '口红', '散粉'],
      steps: ['基础护肤打底', '轻薄粉底均匀肤色', '自然眉形修饰', '睫毛卷翘定型', '裸色口红提气色'],
      likes: 12580,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20natural%20daily%20commute%20makeup%2C%20fresh%20dewy%20skin%2C%20light%20eyebrows%2C%20minimal%20makeup%2C%20professional%20beauty%20photography%2C%20soft%20lighting&image_size=portrait_4_3',
      tags: ['日常', '通勤', '快速']
    },
    {
      id: 'm002', name: '甜美约会妆', desc: '粉嫩少女感妆容，适合约会场合，打造温柔甜美的气质',
      occasion: '约会', difficulty: 2,
      tools: ['气垫粉底', '粉色腮红', '眼影盘', '眼线笔', '唇釉'],
      steps: ['水润底妆打造', '粉色腮红晕染', '蜜桃色眼影', '精致眼线', '镜面唇釉'],
      likes: 9860,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20sweet%20date%20makeup%2C%20pink%20cheeks%2C%20dewy%20skin%2C%20romantic%20soft%20look%2C%20professional%20beauty%20photography%2C%20pink%20tones&image_size=portrait_4_3',
      tags: ['约会', '甜美', '浪漫']
    },
    {
      id: 'm003', name: '气场女王妆', desc: '浓艳红唇搭配深邃眼妆，展现强大气场，适合派对和晚宴',
      occasion: '派对晚宴', difficulty: 4,
      tools: ['遮瑕膏', '哑光粉底', '眼影盘', '假睫毛', '哑光口红'],
      steps: ['无瑕底妆', '大地色眼影打底', '深邃眼线', '浓密假睫毛', '复古红唇'],
      likes: 8720,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20glamorous%20queen%20makeup%2C%20bold%20red%20lipstick%2C%20smoky%20eyes%2C%20dramatic%20look%2C%20professional%20beauty%20photography%2C%20dark%20background&image_size=portrait_4_3',
      tags: ['派对', '气场', '晚宴']
    },
    {
      id: 'm004', name: '清透裸妆', desc: '伪素颜妆容，轻薄自然，适合追求天生丽质的日常妆',
      occasion: '日常休闲', difficulty: 2,
      tools: ['素颜霜', '遮瑕', '眉粉', '睫毛夹', '润唇膏'],
      steps: ['素颜霜打底', '局部遮瑕', '自然眉色', '睫毛夹翘', '润唇提亮'],
      likes: 15320,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20natural%20no-makeup%20look%2C%20clear%20skin%2C%20minimal%20makeup%2C%20fresh%20pure%20beauty%2C%20professional%20beauty%20photography%2C%20soft%20natural%20lighting&image_size=portrait_4_3',
      tags: ['裸妆', '自然', '日常']
    },
    {
      id: 'm005', name: '韩系女团妆', desc: '韩式水光肌搭配亮片眼妆，打造青春活力的女团风格',
      occasion: '聚会', difficulty: 3,
      tools: ['水光粉底', '修容盘', '亮片眼影', '睫毛膏', '镜面唇釉'],
      steps: ['水光底妆', '立体修容', '亮片眼影', '卷翘睫毛', '玻璃唇'],
      likes: 11240,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20Korean%20girl%20group%20makeup%2C%20glossy%20skin%2C%20sparkle%20eyeshadow%2C%20cute%20fresh%20look%2C%20professional%20beauty%20photography%2C%20K-pop%20style&image_size=portrait_4_3',
      tags: ['韩系', '女团', '青春']
    },
    {
      id: 'm006', name: '复古港风妆', desc: '八九十年代香港女星妆容，浓郁复古，韵味十足',
      occasion: '复古派对', difficulty: 4,
      tools: ['哑光粉底', '眉笔', '珠光眼影', '假睫毛', '哑光红唇'],
      steps: ['哑光底妆', '利落眉形', '珠光眼影', '浓密睫毛', '复古红唇'],
      likes: 7680,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20Hong%20Kong%20vintage%20makeup%2C%20retro%20glamorous%2C%20bold%20eyeliner%2C%20red%20lipstick%2C%20classic%2080s%20style%2C%20professional%20beauty%20photography&image_size=portrait_4_3',
      tags: ['港风', '复古', '经典']
    },
    {
      id: 'm007', name: '新中式清冷妆', desc: '结合传统美学与现代妆容，营造清冷高雅的气质',
      occasion: '古风活动', difficulty: 3,
      tools: ['轻薄粉底', '眉笔', '清冷色系眼影', '眼线', '豆沙唇'],
      steps: ['清透底妆', '远山眉形', '青灰眼影', '细长眼线', '豆沙唇色'],
      likes: 8960,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20new%20Chinese%20style%20makeup%2C%20serene%20elegant%2C%20cool%20tones%2C%20traditional%20elements%2C%20professional%20beauty%20photography%2C%20minimalist%20aesthetic&image_size=portrait_4_3',
      tags: ['新中式', '清冷', '国风']
    },
    {
      id: 'm008', name: '欧美辣妹妆', desc: '深邃眼窝搭配饱满唇妆，展现欧美风格的火辣性感',
      occasion: '夜店派对', difficulty: 5,
      tools: ['遮瑕膏', '修容盘', '烟熏眼影', '假睫毛', '裸色唇釉'],
      steps: ['无瑕底妆', '立体修容', '烟熏眼影', '夸张睫毛', '丰唇效果'],
      likes: 6450,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20American%20hot%20girl%20makeup%2C%20smoky%20eyes%2C%20contoured%20face%2C%20bold%20lip%2C%20sexy%20confident%20look%2C%20professional%20beauty%20photography&image_size=portrait_4_3',
      tags: ['欧美', '辣妹', '性感']
    }
  ],

  // 局部妆容
  jubu: [
    {
      id: 'm009', name: '眼妆-大地色系', desc: '经典大地色眼妆，适合日常，深邃有神',
      occasion: '日常', difficulty: 1,
      tools: ['大地色眼影盘', '眼线笔', '睫毛膏'],
      steps: ['浅棕色打底', '深棕色加深', '眼线勾勒', '睫毛刷翘'],
      likes: 5230,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Close%20up%20Asian%20woman%20eye%20makeup%2C%20earth%20tone%20eyeshadow%2C%20natural%20beautiful%20eyes%2C%20professional%20beauty%20photography%2C%20macro%20shot&image_size=portrait_4_3',
      tags: ['眼妆', '大地色', '日常']
    },
    {
      id: 'm010', name: '眼妆-亮片闪粉', desc: '闪亮眼妆，适合派对场合，闪耀夺目',
      occasion: '派对', difficulty: 3,
      tools: ['亮片眼影', '眼线胶', '假睫毛'],
      steps: ['珠光打底', '亮片叠涂', '眼线定型', '假睫毛'],
      likes: 4890,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Close%20up%20Asian%20woman%20eye%20makeup%2C%20sparkle%20glitter%20eyeshadow%2C%20shiny%20party%20look%2C%20professional%20beauty%20photography%2C%20dramatic%20lighting&image_size=portrait_4_3',
      tags: ['眼妆', '亮片', '派对']
    },
    {
      id: 'm011', name: '唇妆-渐变咬唇', desc: '韩式渐变咬唇效果，自然甜美',
      occasion: '约会', difficulty: 2,
      tools: ['唇线笔', '口红', '唇刷'],
      steps: ['唇线勾勒', '内侧加深', '边缘晕染', '整体匀色'],
      likes: 6120,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Close%20up%20Asian%20woman%20lips%2C%20gradient%20ombre%20lipstick%2C%20Korean%20style%2C%20beautiful%20lips%2C%20professional%20beauty%20photography%2C%20macro%20shot&image_size=portrait_4_3',
      tags: ['唇妆', '渐变', '韩式']
    },
    {
      id: 'm012', name: '底妆-无瑕奶油肌', desc: '打造完美奶油肌质感，细腻服帖',
      occasion: '婚礼', difficulty: 3,
      tools: ['妆前乳', '遮瑕', '粉底液', '散粉'],
      steps: ['妆前保湿', '局部遮瑕', '粉底上妆', '定妆控油'],
      likes: 7350,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Close%20up%20Asian%20woman%20skin%2C%20flawless%20cream%20foundation%2C%20perfect%20skin%20texture%2C%20professional%20beauty%20photography%2C%20soft%20lighting&image_size=portrait_4_3',
      tags: ['底妆', '奶油肌', '完美']
    },
    {
      id: 'm013', name: '腮红-元气橘色', desc: '元气满满的橘色腮红，提升气色',
      occasion: '日常', difficulty: 1,
      tools: ['橘色腮红', '腮红刷'],
      steps: ['微笑定位', '打圈晕染', '过渡自然'],
      likes: 4560,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Close%20up%20Asian%20woman%20cheeks%2C%20orange%20blush%2C%20healthy%20glow%2C%20fresh%20look%2C%20professional%20beauty%20photography%2C%20natural%20lighting&image_size=portrait_4_3',
      tags: ['腮红', '橘色', '元气']
    },
    {
      id: 'm014', name: '眉妆-野生眉', desc: '打造自然野生眉，毛流感十足',
      occasion: '日常', difficulty: 2,
      tools: ['眉笔', '眉粉', '睫毛膏'],
      steps: ['修眉定型', '填充空隙', '梳顺毛流', '定型喷雾'],
      likes: 5890,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Close%20up%20Asian%20woman%20eyebrows%2C%20wild%20eyebrows%2C%20natural%20hair%20texture%2C%20beautiful%20brows%2C%20professional%20beauty%20photography%2C%20macro%20shot&image_size=portrait_4_3',
      tags: ['眉妆', '野生眉', '自然']
    }
  ],

  // 古风妆容
  gufeng: [
    {
      id: 'm015', name: '唐妆-华贵牡丹', desc: '唐代宫廷妆容，华丽大气，富贵逼人',
      occasion: '古风活动', difficulty: 5,
      tools: ['粉底', '胭脂', '眉黛', '花钿', '唇脂'],
      steps: ['白粉打底', '胭脂晕染', '翠眉描画', '花钿装饰', '朱唇点绛'],
      likes: 6780,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20Tang%20dynasty%20makeup%2C%20ancient%20Chinese%20imperial%20style%2C%20elegant%20traditional%2C%20red%20lip%2C%20professional%20beauty%20photography%2C%20historical%20costume&image_size=portrait_4_3',
      tags: ['唐妆', '古风', '华贵']
    },
    {
      id: 'm016', name: '宋妆-清雅淡妆', desc: '宋代文人妆容，清新淡雅，温婉端庄',
      occasion: '古风活动', difficulty: 3,
      tools: ['米粉', '檀色胭脂', '眉墨', '唇脂'],
      steps: ['薄施粉黛', '淡扫蛾眉', '轻点胭脂', '浅涂唇脂'],
      likes: 5230,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20Song%20dynasty%20makeup%2C%20elegant%20minimal%20style%2C%20soft%20pastel%20colors%2C%20traditional%20Chinese%20beauty%2C%20professional%20beauty%20photography&image_size=portrait_4_3',
      tags: ['宋妆', '古风', '清雅']
    },
    {
      id: 'm017', name: '敦煌飞天妆', desc: '敦煌壁画风格妆容，神秘华丽，异域风情',
      occasion: '演出', difficulty: 5,
      tools: ['金粉', '青黛', '胭脂', '亮片', '唇脂'],
      steps: ['金粉打底', '青绿眼影', '飞天眉', '亮片装饰', '朱砂唇'],
      likes: 8960,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20Dunhuang%20flying%20Apsara%20makeup%2C%20golden%20sparkle%2C%20mystical%20elegant%2C%20traditional%20art%20style%2C%20professional%20beauty%20photography%2C%20artistic%20lighting&image_size=portrait_4_3',
      tags: ['敦煌', '飞天', '华丽']
    },
    {
      id: 'm018', name: '汉服-明制妆容', desc: '明代汉服妆容，端庄大方，古典韵味',
      occasion: '汉服活动', difficulty: 3,
      tools: ['粉底', '胭脂', '眉笔', '唇脂'],
      steps: ['细腻底妆', '桃花腮红', '柳叶眉', '樱桃小口'],
      likes: 4680,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20Ming%20dynasty%20Hanfu%20makeup%2C%20elegant%20traditional%2C%20modest%20beauty%2C%20Chinese%20classical%20style%2C%20professional%20beauty%20photography&image_size=portrait_4_3',
      tags: ['明妆', '汉服', '端庄']
    }
  ],

  // 大牌妆容
  dapai: [
    {
      id: 'm019', name: 'YSL-小金条妆容', desc: 'YSL小金条口红打造的经典妆容，气场全开',
      occasion: '晚宴', difficulty: 3,
      tools: ['YSL粉底', 'YSL眼影', 'YSL小金条'],
      steps: ['精致底妆', '大地眼影', '经典红唇'],
      likes: 7560,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20luxury%20makeup%2C%20YSL%20golden%20lipstick%2C%20high%20fashion%20beauty%2C%20elegant%20glamorous%2C%20professional%20beauty%20photography%2C%20luxury%20background&image_size=portrait_4_3',
      tags: ['YSL', '大牌', '气场']
    },
    {
      id: 'm020', name: 'Dior-迪奥真我妆', desc: '迪奥风格妆容，优雅自信，展现真我风采',
      occasion: '商务', difficulty: 4,
      tools: ['Dior粉底', 'Dior眼影', 'Dior口红'],
      steps: ['无瑕底妆', '精致眼妆', '优雅唇色'],
      likes: 6230,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20Dior%20style%20makeup%2C%20elegant%20sophisticated%2C%20luxury%20beauty%2C%20confident%20woman%2C%20professional%20beauty%20photography%2C%20elegant%20background&image_size=portrait_4_3',
      tags: ['Dior', '大牌', '优雅']
    }
  ],

  // 明星同款
  star: [
    {
      id: 'm021', name: 'Jennie同款甜酷妆', desc: 'BLACKPINK Jennie同款妆容，甜美与酷飒并存',
      occasion: '日常', difficulty: 3,
      tools: ['水光粉底', '眼影盘', '眼线', '唇釉'],
      steps: ['水光底妆', '蜜桃眼影', '小猫眼线', '哑光唇釉'],
      likes: 15890,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20K-pop%20idol%20makeup%2C%20Jennie%20style%2C%20cute%20cool%20mix%2C%20Korean%20beauty%2C%20professional%20beauty%20photography%2C%20K-pop%20aesthetic&image_size=portrait_4_3',
      tags: ['明星', 'Jennie', '韩系']
    },
    {
      id: 'm022', name: '刘亦菲天仙妆', desc: '刘亦菲同款仙气妆容，清新脱俗，宛若天仙',
      occasion: '日常', difficulty: 2,
      tools: ['轻薄粉底', '眉笔', '粉色腮红', '口红'],
      steps: ['清透底妆', '自然眉形', '淡淡腮红', '裸粉色唇'],
      likes: 13240,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20fairy%20makeup%2C%20elegant%20ethereal%2C%20fresh%20natural%2C%20angelic%20beauty%2C%20professional%20beauty%20photography%2C%20soft%20dreamy%20lighting&image_size=portrait_4_3',
      tags: ['明星', '刘亦菲', '仙气']
    },
    {
      id: 'm023', name: 'Lisa猫眼妆', desc: 'BLACKPINK Lisa同款猫眼妆容，酷飒十足',
      occasion: '舞台', difficulty: 4,
      tools: ['哑光粉底', '烟熏眼影', '眼线', '假睫毛'],
      steps: ['哑光底妆', '烟熏眼影', '上扬眼线', '浓密睫毛'],
      likes: 12150,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20cat%20eye%20makeup%2C%20Lisa%20style%2C%20cool%20fierce%2C%20K-pop%20stage%20look%2C%20professional%20beauty%20photography%2C%20dramatic%20lighting&image_size=portrait_4_3',
      tags: ['明星', 'Lisa', '酷飒']
    }
  ],

  // 银发人群
  yinfa: [
    {
      id: 'm024', name: '优雅奶奶妆', desc: '适合银发人群的优雅妆容，端庄大方',
      occasion: '聚会', difficulty: 2,
      tools: ['滋润粉底', '眉笔', '口红'],
      steps: ['滋润底妆', '柔和眉色', '端庄唇色'],
      likes: 3560,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Senior%20Asian%20woman%20elegant%20makeup%2C%20graceful%20mature%2C%20sophisticated%20beauty%2C%20professional%20beauty%20photography%2C%20warm%20lighting&image_size=portrait_4_3',
      tags: ['银发', '优雅', '端庄']
    },
    {
      id: 'm025', name: '喜庆节日妆', desc: '适合节日的喜庆妆容，红红火火',
      occasion: '节日', difficulty: 3,
      tools: ['粉底', '红色眼影', '腮红', '口红'],
      steps: ['精致底妆', '红色眼影', '喜庆腮红', '大红唇'],
      likes: 4890,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20festive%20red%20makeup%2C%20Chinese%20New%20Year%2C%20joyful%20celebration%2C%20red%20lipstick%2C%20professional%20beauty%20photography%2C%20festive%20background&image_size=portrait_4_3',
      tags: ['银发', '节日', '喜庆']
    }
  ],

  // 美妆问答
  qa: [
    {
      id: 'm026', name: '新手入门妆', desc: '专为化妆新手设计，简单易学，5分钟搞定',
      occasion: '日常', difficulty: 1,
      tools: ['素颜霜', '眉笔', '口红'],
      steps: ['素颜霜打底', '简单画眉', '涂口红'],
      likes: 8760,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20simple%20beginner%20makeup%2C%20easy%20natural%2C%20fresh%20look%2C%20professional%20beauty%20photography%2C%20soft%20lighting&image_size=portrait_4_3',
      tags: ['新手', '简单', '入门']
    },
    {
      id: 'm027', name: '敏感肌友好妆', desc: '针对敏感肌肤设计，温和不刺激',
      occasion: '日常', difficulty: 2,
      tools: ['敏感肌粉底', '矿物质彩妆'],
      steps: ['温和清洁', '敏感肌粉底', '矿物眼影'],
      likes: 6540,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20sensitive%20skin%20makeup%2C%20gentle%20natural%2C%20clean%20beauty%2C%20professional%20beauty%20photography%2C%20soft%20natural%20lighting&image_size=portrait_4_3',
      tags: ['敏感肌', '温和', '护肤']
    }
  ]
};

// 统一查找模板：同时搜索 libraryFeed 和 makeupLibraryData
function findTemplateById(id) {
  // 搜索 libraryFeed（7个子类目）
  if (libraryFeed) {
    for (const cat in libraryFeed) {
      const found = libraryFeed[cat].find(item => item.id === id);
      if (found) return found;
    }
  }
  // 搜索 makeupLibraryData（7个分类）
  for (const cat in makeupLibraryData) {
    const found = makeupLibraryData[cat].find(item => item.id === id);
    if (found) return found;
  }
  return null;
}

module.exports = {
  makeupLibraryData,
  findTemplateById
};
