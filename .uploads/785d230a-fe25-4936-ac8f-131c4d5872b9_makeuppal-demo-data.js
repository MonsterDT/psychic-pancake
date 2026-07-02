/**
 * ============================================================
 * 妆伴 MakeupPal Demo 示例资料库
 * 版本: v3.0
 * 用途: 提供 MakeupPal App 所有模块的完整演示数据
 * 使用方式:
 *   1. 浏览器环境: <script src="makeuppal-demo-data.js"></script>
 *      直接使用全局变量 MakeupPalData
 *   2. Node 环境: const MakeupPalData = require('./makeuppal-demo-data.js');
 * ============================================================
 */

const MakeupPalData = {

  // ============================================================
  // 1. libraryFeed — 颜库瀑布流内容（V3.0 七个子类目）
  // ============================================================
  libraryFeed: {

    // 1.1 达人精选
    creators: [
      { id: 'c001', title: '早八通勤妆3分钟搞定', coverImage: 'assets/images/covers/creator_001.jpg', creatorName: '小鹿美妆', creatorAvatar: 'assets/images/avatars/ava_001.jpg', likes: 12800, collections: 3400, category: '日常妆', tag: '通勤' },
      { id: 'c002', title: '浓颜系千金妆', coverImage: 'assets/images/covers/creator_002.jpg', creatorName: '阿紫的美学日记', creatorAvatar: 'assets/images/avatars/ava_002.jpg', likes: 25600, collections: 8900, category: '晚宴妆', tag: '千金' },
      { id: 'c003', title: '纯欲白开水妆', coverImage: 'assets/images/covers/creator_003.jpg', creatorName: '桃子软糖', creatorAvatar: 'assets/images/avatars/ava_003.jpg', likes: 45200, collections: 15600, category: '日常妆', tag: '纯欲' },
      { id: 'c004', title: '钓系御姐妆', coverImage: 'assets/images/covers/creator_004.jpg', creatorName: 'Vivi makeup', creatorAvatar: 'assets/images/avatars/ava_004.jpg', likes: 18900, collections: 5200, category: '轻熟妆', tag: '御姐' },
      { id: 'c005', title: '韩系女高妆', coverImage: 'assets/images/covers/creator_005.jpg', creatorName: '橙子气泡水', creatorAvatar: 'assets/images/avatars/ava_005.jpg', likes: 32100, collections: 11200, category: '学院妆', tag: '韩系' },
      { id: 'c006', title: '美拉德秋冬妆', coverImage: 'assets/images/covers/creator_006.jpg', creatorName: '秋秋美妆', creatorAvatar: 'assets/images/avatars/ava_006.jpg', likes: 21500, collections: 7800, category: '季节妆', tag: '美拉德' },
      { id: 'c007', title: 'Clean Makeup 清透裸妆', coverImage: 'assets/images/covers/creator_007.jpg', creatorName: 'Minimal Beauty', creatorAvatar: 'assets/images/avatars/ava_007.jpg', likes: 16700, collections: 4500, category: '裸妆', tag: 'clean' },
      { id: 'c008', title: '新中式清冷妆', coverImage: 'assets/images/covers/creator_008.jpg', creatorName: '青瓷美学', creatorAvatar: 'assets/images/avatars/ava_008.jpg', likes: 28900, collections: 9800, category: '国风妆', tag: '新中式' },
      { id: 'c009', title: '港风复古妆', coverImage: 'assets/images/covers/creator_009.jpg', creatorName: '玫瑰与黄昏', creatorAvatar: 'assets/images/avatars/ava_009.jpg', likes: 19800, collections: 6700, category: '复古妆', tag: '港风' },
      { id: 'c010', title: '泰式浓颜妆', coverImage: 'assets/images/covers/creator_010.jpg', creatorName: '泰兰德女孩', creatorAvatar: 'assets/images/avatars/ava_010.jpg', likes: 14500, collections: 4100, category: '轻熟妆', tag: '泰式' },
      { id: 'c011', title: '日杂感透明妆', coverImage: 'assets/images/covers/creator_011.jpg', creatorName: '森绘奈', creatorAvatar: 'assets/images/avatars/ava_011.jpg', likes: 23400, collections: 8900, category: '裸妆', tag: '日杂' },
      { id: 'c012', title: 'Y2K千禧妆', coverImage: 'assets/images/covers/creator_012.jpg', creatorName: 'CyberPink', creatorAvatar: 'assets/images/avatars/ava_012.jpg', likes: 31200, collections: 13400, category: '创意妆', tag: 'Y2K' },
      { id: 'c013', title: '芭蕾少女妆', coverImage: 'assets/images/covers/creator_013.jpg', creatorName: '天鹅绒', creatorAvatar: 'assets/images/avatars/ava_013.jpg', likes: 27600, collections: 10200, category: '甜美妆', tag: '芭蕾' },
      { id: 'c014', title: '老钱静奢妆', coverImage: 'assets/images/covers/creator_014.jpg', creatorName: 'OldMoney美学', creatorAvatar: 'assets/images/avatars/ava_014.jpg', likes: 13400, collections: 3800, category: '轻熟妆', tag: '静奢' },
      { id: 'c015', title: '多巴胺元气妆', coverImage: 'assets/images/covers/creator_015.jpg', creatorName: '彩虹糖', creatorAvatar: 'assets/images/avatars/ava_015.jpg', likes: 38900, collections: 16700, category: '创意妆', tag: '多巴胺' },
      { id: 'c016', title: '小烟熏轻欧美妆', coverImage: 'assets/images/covers/creator_016.jpg', creatorName: 'NANA Makeup', creatorAvatar: 'assets/images/avatars/ava_016.jpg', likes: 22100, collections: 7600, category: '轻熟妆', tag: '轻欧美' },
      { id: 'c017', title: '淡颜系白开水2.0', coverImage: 'assets/images/covers/creator_017.jpg', creatorName: '白开水女孩', creatorAvatar: 'assets/images/avatars/ava_017.jpg', likes: 19800, collections: 6500, category: '日常妆', tag: '淡颜' },
      { id: 'c018', title: '气血感东方妆', coverImage: 'assets/images/covers/creator_018.jpg', creatorName: '东方茉莉', creatorAvatar: 'assets/images/avatars/ava_018.jpg', likes: 25600, collections: 9200, category: '国风妆', tag: '气血感' }
    ],

    // 1.2 局部拆解
    tutorials: [
      { id: 't001', title: '新手必学的3种眼线画法', coverImage: 'assets/images/covers/tutorial_001.jpg', category: '眼妆', difficulty: 2, duration: '5分钟', suitableFor: ['新手', '手残党'], effect: '自然放大双眼', likes: 18900, tag: '眼线' },
      { id: 't002', title: '单眼皮消肿眼影公式', coverImage: 'assets/images/covers/tutorial_002.jpg', category: '眼妆', difficulty: 3, duration: '8分钟', suitableFor: ['单眼皮', '肿眼泡'], effect: '消肿深邃', likes: 23400, tag: '眼影' },
      { id: 't003', title: '妈生感卧蚕画法', coverImage: 'assets/images/covers/tutorial_003.jpg', category: '眼妆', difficulty: 2, duration: '4分钟', suitableFor: ['全肤质', '新手'], effect: '幼态减龄', likes: 31200, tag: '卧蚕' },
      { id: 't004', title: '太阳花睫毛教程', coverImage: 'assets/images/covers/tutorial_004.jpg', category: '眼妆', difficulty: 3, duration: '10分钟', suitableFor: ['短睫毛', '下垂眼'], effect: '根根分明卷翘', likes: 27600, tag: '睫毛' },
      { id: 't005', title: '骨相修容法', coverImage: 'assets/images/covers/tutorial_005.jpg', category: '修容', difficulty: 4, duration: '12分钟', suitableFor: ['圆脸', '方脸'], effect: '立体小脸', likes: 19800, tag: '修容' },
      { id: 't006', title: '纯欲嘟嘟唇教程', coverImage: 'assets/images/covers/tutorial_006.jpg', category: '唇妆', difficulty: 2, duration: '5分钟', suitableFor: ['薄唇', '新手'], effect: '饱满水润', likes: 28900, tag: '唇妆' },
      { id: 't007', title: '野生眉画法', coverImage: 'assets/images/covers/tutorial_007.jpg', category: '眉形', difficulty: 3, duration: '8分钟', suitableFor: ['眉毛稀疏', '无眉星人'], effect: '毛流感自然', likes: 24500, tag: '眉毛' },
      { id: 't008', title: '氛围感腮红打法', coverImage: 'assets/images/covers/tutorial_008.jpg', category: '腮红', difficulty: 2, duration: '5分钟', suitableFor: ['全脸型'], effect: '好气色氛围', likes: 16700, tag: '腮红' },
      { id: 't009', title: '黑眼圈泪沟遮瑕术', coverImage: 'assets/images/covers/tutorial_009.jpg', category: '底妆', difficulty: 4, duration: '10分钟', suitableFor: ['熬夜党', '黑眼圈重'], effect: '眼周干净平整', likes: 35600, tag: '遮瑕' },
      { id: 't010', title: '零毛孔底妆秘籍', coverImage: 'assets/images/covers/tutorial_010.jpg', category: '底妆', difficulty: 3, duration: '12分钟', suitableFor: ['油皮', '毛孔粗大'], effect: '柔焦磨皮', likes: 21300, tag: '底妆' },
      { id: 't011', title: '眼睑下至放大术', coverImage: 'assets/images/covers/tutorial_011.jpg', category: '眼妆', difficulty: 3, duration: '7分钟', suitableFor: ['小眼睛', '眼距宽'], effect: '纵向放大双眼', likes: 19800, tag: '眼妆' },
      { id: 't012', title: '3分钟快速出门妆', coverImage: 'assets/images/covers/tutorial_012.jpg', category: '底妆', difficulty: 1, duration: '3分钟', suitableFor: ['上班族', '学生党'], effect: '提气色伪素颜', likes: 42300, tag: '快速妆' },
      { id: 't013', title: '韩妹水光肌秘诀', coverImage: 'assets/images/covers/tutorial_013.jpg', category: '底妆', difficulty: 3, duration: '10分钟', suitableFor: ['干皮', '混合皮'], effect: '透亮水光感', likes: 26700, tag: '水光肌' },
      { id: 't014', title: '截断式欧美眼妆', coverImage: 'assets/images/covers/tutorial_014.jpg', category: '眼妆', difficulty: 5, duration: '20分钟', suitableFor: ['双眼皮', '玩妆党'], effect: '深邃截断轮廓', likes: 14500, tag: '截断式' },
      { id: 't015', title: '减龄苹果肌高光', coverImage: 'assets/images/covers/tutorial_015.jpg', category: '修容', difficulty: 2, duration: '4分钟', suitableFor: ['面中凹陷', '长脸'], effect: '饱满年轻态', likes: 18900, tag: '高光' },
      { id: 't016', title: '柔雾感唇妆画法', coverImage: 'assets/images/covers/tutorial_016.jpg', category: '唇妆', difficulty: 2, duration: '5分钟', suitableFor: ['深唇', '唇纹明显'], effect: '柔雾显白', likes: 15600, tag: '唇泥' },
      { id: 't017', title: '新手修眉指南', coverImage: 'assets/images/covers/tutorial_017.jpg', category: '眉形', difficulty: 1, duration: '6分钟', suitableFor: ['新手', '杂眉'], effect: '眉形干净对称', likes: 28900, tag: '修眉' },
      { id: 't018', title: '内双肿眼泡眼线法', coverImage: 'assets/images/covers/tutorial_018.jpg', category: '眼妆', difficulty: 3, duration: '8分钟', suitableFor: ['内双', '肿眼泡'], effect: '隐形有神', likes: 32100, tag: '内双' }
    ],

    // 1.3 美妆问答
    qa: [
      { id: 'q001', question: '油皮夏天怎么定妆不脱妆？', summary: '控油妆前+烘焙定妆+定妆喷雾三步法', answerCount: 156, viewCount: 128000, category: '底妆', authorName: '油皮救星', authorAvatar: 'assets/images/avatars/ava_050.jpg' },
      { id: 'q002', question: '敏感肌能用什么美白精华？', summary: '推荐温和VC衍生物和传明酸成分', answerCount: 89, viewCount: 76000, category: '护肤', authorName: '成分党小美', authorAvatar: 'assets/images/avatars/ava_051.jpg' },
      { id: 'q003', question: '肿眼泡适合什么眼影颜色？', summary: '哑光大地色消肿，避免珠光和大亮片', answerCount: 234, viewCount: 198000, category: '眼妆', authorName: '眼妆研究所', authorAvatar: 'assets/images/avatars/ava_052.jpg' },
      { id: 'q004', question: '学生党第一套化妆品怎么选？', summary: '预算500元内全套搭配方案', answerCount: 567, viewCount: 345000, category: '新手', authorName: '省钱小能手', authorAvatar: 'assets/images/avatars/ava_053.jpg' },
      { id: 'q005', question: '干皮粉底液总是卡粉怎么办？', summary: '妆前保湿+精油混合+湿粉扑上妆', answerCount: 312, viewCount: 256000, category: '底妆', authorName: '干皮守护者', authorAvatar: 'assets/images/avatars/ava_054.jpg' },
      { id: 'q006', question: '黄皮涂什么口红最显白？', summary: '橘调红棕、蓝调正红显白不踩雷', answerCount: 445, viewCount: 412000, category: '唇妆', authorName: '口红试色员', authorAvatar: 'assets/images/avatars/ava_055.jpg' },
      { id: 'q007', question: '毛孔粗大能靠化妆遮住吗？', summary: '硅类妆前+粉底液逆向涂抹+局部遮瑕', answerCount: 198, viewCount: 167000, category: '底妆', authorName: '毛孔隐形师', authorAvatar: 'assets/images/avatars/ava_056.jpg' },
      { id: 'q008', question: '新手怎么画眉毛对称？', summary: '三点定位法+眉粉填充+眉笔补毛流', answerCount: 276, viewCount: 223000, category: '眉形', authorName: '对称强迫症', authorAvatar: 'assets/images/avatars/ava_057.jpg' },
      { id: 'q009', question: '法令纹深怎么遮瑕不卡纹？', summary: '轻薄遮瑕液+垂直轻拍+定妆喷雾', answerCount: 134, viewCount: 98000, category: '遮瑕', authorName: '逆龄魔法师', authorAvatar: 'assets/images/avatars/ava_058.jpg' },
      { id: 'q010', question: '卸妆油和卸妆膏哪个更好？', summary: '浓妆选卸妆油，日常选卸妆膏，敏感肌避开香精', answerCount: 189, viewCount: 145000, category: '护肤', authorName: '清洁专家', authorAvatar: 'assets/images/avatars/ava_059.jpg' },
      { id: 'q011', question: '睫毛膏总是晕染到下眼皮？', summary: '睫毛夹翘+睫毛打底+防水睫毛膏+烘焙定妆', answerCount: 245, viewCount: 189000, category: '眼妆', authorName: '抗晕染战士', authorAvatar: 'assets/images/avatars/ava_060.jpg' },
      { id: 'q012', question: '混油皮T区油两颊干怎么上妆？', summary: '分区护理+不同粉底液混合+分区定妆', answerCount: 167, viewCount: 134000, category: '底妆', authorName: '混合皮救星', authorAvatar: 'assets/images/avatars/ava_061.jpg' },
      { id: 'q013', question: '单眼皮怎么画眼影不显脏？', summary: '浅色大面积铺底+深色仅加深眼尾+避免深色上眼窝', answerCount: 298, viewCount: 234000, category: '眼妆', authorName: '单眼皮博主', authorAvatar: 'assets/images/avatars/ava_062.jpg' },
      { id: 'q014', question: '散粉和粉饼哪个定妆好？', summary: '散粉轻薄自然，粉饼遮瑕力强，油皮两者叠加', answerCount: 356, viewCount: 278000, category: '底妆', authorName: '定妆大师', authorAvatar: 'assets/images/avatars/ava_063.jpg' },
      { id: 'q015', question: '新手需要买化妆刷吗？', summary: '必备4把：粉底刷、眼影刷、腮红刷、散粉刷', answerCount: 412, viewCount: 312000, category: '新手', authorName: '工具控', authorAvatar: 'assets/images/avatars/ava_064.jpg' }
    ],

    // 1.4 国风专区
    guofeng: [
      { id: 'g001', title: '唐妆：花钿贴面，大气雍容', coverImage: 'assets/images/covers/guofeng_001.jpg', dynasty: '唐代', technique: '花钿、斜红、面靥', description: '以额间花钿为点睛之笔，配合大面积腮红与浓黑眉形，展现大唐盛世的风华绝代。', likes: 18900, tag: '唐妆' },
      { id: 'g002', title: '宋妆：珍珠妆靥，清雅含蓄', coverImage: 'assets/images/covers/guofeng_002.jpg', dynasty: '宋代', technique: '珍珠贴面、细眉、淡妆', description: '宋代女子以素雅为美，珍珠点缀面颊，细弯眉如远山含黛，尽显文人雅趣。', likes: 15600, tag: '宋妆' },
      { id: 'g003', title: '敦煌飞天妆：金箔贴面，异域风情', coverImage: 'assets/images/covers/guofeng_003.jpg', dynasty: '敦煌', technique: '金箔、彩绘、高发髻', description: '灵感源自敦煌壁画飞天神女，金箔贴面配重彩眼妆，仙气飘飘。', likes: 23400, tag: '敦煌' },
      { id: 'g004', title: '戏曲青衣妆：水衣水袖，眉眼传情', coverImage: 'assets/images/covers/guofeng_004.jpg', dynasty: '戏曲', technique: '吊眉、凤眼、贴片', description: '京剧青衣经典妆容，吊眉凤眼显英气，水袖轻扬间尽显东方神韵。', likes: 12300, tag: '戏曲' },
      { id: 'g005', title: '明妆：桃花妆面，端庄秀丽', coverImage: 'assets/images/covers/guofeng_005.jpg', dynasty: '明代', technique: '桃花妆、柳叶眉、点唇', description: '明代女子偏好桃花色面颊，柳叶细眉配樱桃小口，端庄又不失娇媚。', likes: 14500, tag: '明妆' },
      { id: 'g006', title: '魏晋风骨：清旷飘逸，素面朝天', coverImage: 'assets/images/covers/guofeng_006.jpg', dynasty: '魏晋', technique: '素颜、广眉、白妆', description: '魏晋名士崇尚自然，女子妆容也以素雅为主，广眉白妆尽显飘逸风骨。', likes: 11200, tag: '魏晋' },
      { id: 'g007', title: '汉代红妆：胭脂敷面，唇若朱丹', coverImage: 'assets/images/covers/guofeng_007.jpg', dynasty: '汉代', technique: '胭脂、朱砂唇、愁眉', description: '汉代女子以红妆为美，胭脂敷面配朱砂红唇，愁眉微蹙楚楚动人。', likes: 9800, tag: '汉妆' },
      { id: 'g008', title: '苗疆少女妆：银饰叮当，眉眼如画', coverImage: 'assets/images/covers/guofeng_008.jpg', dynasty: '苗族', technique: '浓眉、红唇、银饰', description: '苗族少女妆容以浓眉红唇为特色，配合银饰叮当，灵动又神秘。', likes: 16700, tag: '苗疆' },
      { id: 'g009', title: '清汉女妆：柳叶细眉，淡雅温婉', coverImage: 'assets/images/covers/guofeng_009.jpg', dynasty: '清代', technique: '柳叶眉、淡雅眼影、薄唇', description: '清代汉族女子妆容趋于淡雅，柳叶细眉配浅色眼影，温婉如水。', likes: 13400, tag: '清汉' },
      { id: 'g010', title: '新中式水墨妆：墨色晕染，意境悠远', coverImage: 'assets/images/covers/guofeng_010.jpg', dynasty: '现代', technique: '水墨眼影、渐变唇、写意眉', description: '将水墨画意境融入妆容，墨色眼影晕染配渐变唇，东方美学新诠释。', likes: 28900, tag: '新中式' },
      { id: 'g011', title: '汉服花神妆：十二花神，各领风骚', coverImage: 'assets/images/covers/guofeng_011.jpg', dynasty: '传统', technique: '花钿、花瓣唇、主题配色', description: '以十二花神为灵感，每月一种花卉主题妆容，仙气飘飘国风满满。', likes: 21300, tag: '花神' },
      { id: 'g012', title: '山海经精怪妆：奇幻瑰丽，异兽拟人', coverImage: 'assets/images/covers/guofeng_012.jpg', dynasty: '神话', technique: '彩绘、贴片、创意眼妆', description: '以《山海经》异兽为灵感，创意彩妆展现奇幻东方神话世界。', likes: 19800, tag: '山海经' }
    ],

    // 1.5 银发专区
    silver: [
      { id: 's001', title: '银发日常焕新：气色提升三步法', coverImage: 'assets/images/covers/silver_001.jpg', scene: '日常', description: '简单三步提升气色，让每一天都精神饱满，轻松出门。', likes: 8900, tag: '日常', skinFriendly: true },
      { id: 's002', title: '50+聚会亮妆：优雅不夸张', coverImage: 'assets/images/covers/silver_002.jpg', scene: '聚会', description: '聚会场合的优雅妆容，既有气场又不显夸张，得体大方。', likes: 12300, tag: '聚会', skinFriendly: true },
      { id: 's003', title: '职场干练妆：精神自信', coverImage: 'assets/images/covers/silver_003.jpg', scene: '职场', description: '职场银发族的干练妆容，精神焕发自信满满，专业形象加分。', likes: 7600, tag: '职场', skinFriendly: true },
      { id: 's004', title: '旅行防晒妆：清爽持久', coverImage: 'assets/images/covers/silver_004.jpg', scene: '旅行', description: '旅行必备的清爽防晒妆容，持久不脱妆，拍照美美哒。', likes: 10200, tag: '旅行', skinFriendly: true },
      { id: 's005', title: '银发新娘妆：岁月沉淀的优雅', coverImage: 'assets/images/covers/silver_005.jpg', scene: '婚礼', description: '银发新娘的专属妆容，岁月沉淀的优雅，人生第二春的绽放。', likes: 15600, tag: '婚礼', skinFriendly: true },
      { id: 's006', title: '孙辈满月宴：慈爱温婉妆', coverImage: 'assets/images/covers/silver_006.jpg', scene: '家宴', description: '孙辈满月宴的慈爱妆容，温婉大方，全家合影C位担当。', likes: 6800, tag: '家宴', skinFriendly: true },
      { id: 's007', title: '老年大学演出妆：舞台亮眼', coverImage: 'assets/images/covers/silver_007.jpg', scene: '演出', description: '老年大学舞台演出妆，灯光下依然光彩照人，不输给年轻人。', likes: 5400, tag: '演出', skinFriendly: true },
      { id: 's008', title: '晨练太极妆：自然好气色', coverImage: 'assets/images/covers/silver_008.jpg', scene: '运动', description: '晨练太极时的自然妆容，轻薄透气，运动后依然气色在线。', likes: 4300, tag: '运动', skinFriendly: true },
      { id: 's009', title: '银发旗袍妆：古典韵味', coverImage: 'assets/images/covers/silver_009.jpg', scene: '旗袍', description: '配旗袍的古典妆容，银发配旗袍别有韵味，东方美人的优雅。', likes: 11200, tag: '旗袍', skinFriendly: true },
      { id: 's010', title: '重阳节敬老妆：端庄喜庆', coverImage: 'assets/images/covers/silver_010.jpg', scene: '节日', description: '重阳节敬老活动的端庄妆容，喜庆不浮夸，精神矍铄。', likes: 6700, tag: '节日', skinFriendly: true },
      { id: 's011', title: '银发染发搭配妆：发色妆容协调', coverImage: 'assets/images/covers/silver_011.jpg', scene: '日常', description: '银发染发后的妆容搭配技巧，发色与妆容和谐统一。', likes: 8900, tag: '染发', skinFriendly: true },
      { id: 's012', title: '晚年约会妆：温柔浪漫', coverImage: 'assets/images/covers/silver_012.jpg', scene: '约会', description: '银发族浪漫约会的温柔妆容，晚年爱情同样甜蜜动人。', likes: 9800, tag: '约会', skinFriendly: true }
    ],

    // 1.6 大牌精选
    brands: [
      { id: 'b001', title: 'YSL 绝色红唇妆', coverImage: 'assets/images/covers/brand_001.jpg', brandName: 'YSL', brandLogo: 'assets/images/brands/ysl.png', templateCount: 28, rating: 4.8, priceGP: 120, isOfficial: true, tag: '红唇' },
      { id: 'b002', title: 'Dior 花漾甜心妆', coverImage: 'assets/images/covers/brand_002.jpg', brandName: 'Dior', brandLogo: 'assets/images/brands/dior.png', templateCount: 22, rating: 4.7, priceGP: 110, isOfficial: true, tag: '甜美' },
      { id: 'b003', title: 'Chanel 法式优雅妆', coverImage: 'assets/images/covers/brand_003.jpg', brandName: 'Chanel', brandLogo: 'assets/images/brands/chanel.png', templateCount: 18, rating: 4.9, priceGP: 150, isOfficial: true, tag: '优雅' },
      { id: 'b004', title: 'Lancôme 持妆无瑕妆', coverImage: 'assets/images/covers/brand_004.jpg', brandName: 'Lancôme', brandLogo: 'assets/images/brands/lancome.png', templateCount: 25, rating: 4.6, priceGP: 100, isOfficial: true, tag: '持妆' },
      { id: 'b005', title: 'MAC 专业玩色妆', coverImage: 'assets/images/covers/brand_005.jpg', brandName: 'MAC', brandLogo: 'assets/images/brands/mac.png', templateCount: 35, rating: 4.5, priceGP: 80, isOfficial: true, tag: '玩色' },
      { id: 'b006', title: 'Tom Ford 奢金烟熏妆', coverImage: 'assets/images/covers/brand_006.jpg', brandName: 'Tom Ford', brandLogo: 'assets/images/brands/tomford.png', templateCount: 15, rating: 4.9, priceGP: 180, isOfficial: true, tag: '烟熏' },
      { id: 'b007', title: '花西子 东方雅致妆', coverImage: 'assets/images/covers/brand_007.jpg', brandName: '花西子', brandLogo: 'assets/images/brands/florasis.png', templateCount: 20, rating: 4.4, priceGP: 60, isOfficial: true, tag: '国风' },
      { id: 'b008', title: '完美日记 动物眼影妆', coverImage: 'assets/images/covers/brand_008.jpg', brandName: '完美日记', brandLogo: 'assets/images/brands/perfectdiary.png', templateCount: 30, rating: 4.3, priceGP: 45, isOfficial: true, tag: '眼影' },
      { id: 'b009', title: '橘朵 甜系少女妆', coverImage: 'assets/images/covers/brand_009.jpg', brandName: '橘朵', brandLogo: 'assets/images/brands/judydoll.png', templateCount: 24, rating: 4.5, priceGP: 40, isOfficial: true, tag: '少女' },
      { id: 'b010', title: 'Colorkey 丝绒唇釉妆', coverImage: 'assets/images/covers/brand_010.jpg', brandName: 'Colorkey', brandLogo: 'assets/images/brands/colorkey.png', templateCount: 18, rating: 4.4, priceGP: 35, isOfficial: true, tag: '丝绒' },
      { id: 'b011', title: '3CE 韩系氛围妆', coverImage: 'assets/images/covers/brand_011.jpg', brandName: '3CE', brandLogo: 'assets/images/brands/3ce.png', templateCount: 26, rating: 4.6, priceGP: 70, isOfficial: true, tag: '韩系' },
      { id: 'b012', title: 'NARS 高潮腮红妆', coverImage: 'assets/images/covers/brand_012.jpg', brandName: 'NARS', brandLogo: 'assets/images/brands/nars.png', templateCount: 19, rating: 4.7, priceGP: 95, isOfficial: true, tag: '腮红' },
      { id: 'b013', title: 'Estee Lauder 雅诗兰黛精致妆', coverImage: 'assets/images/covers/brand_013.jpg', brandName: 'Estee Lauder', brandLogo: 'assets/images/brands/esteelauder.png', templateCount: 21, rating: 4.6, priceGP: 130, isOfficial: true, tag: '精致' },
      { id: 'b014', title: 'Gucci 复古华彩妆', coverImage: 'assets/images/covers/brand_014.jpg', brandName: 'Gucci', brandLogo: 'assets/images/brands/gucci.png', templateCount: 12, rating: 4.5, priceGP: 160, isOfficial: true, tag: '复古' },
      { id: 'b015', title: '阿玛尼 权力底妆妆', coverImage: 'assets/images/covers/brand_015.jpg', brandName: 'Armani', brandLogo: 'assets/images/brands/armani.png', templateCount: 23, rating: 4.8, priceGP: 140, isOfficial: true, tag: '底妆' }
    ],

    // 1.7 明星同款
    celebrities: [
      { id: 'ce001', title: '赵露思同款甜美蜜桃妆', coverImage: 'assets/images/covers/celebrity_001.jpg', celebrityName: '赵露思', celebrityPhoto: 'assets/images/celebrities/zhaolusi.jpg', category: '甜美妆', similarity: 92, likes: 45600, tag: '蜜桃妆' },
      { id: 'ce002', title: '虞书欣同款钓系小猫妆', coverImage: 'assets/images/covers/celebrity_002.jpg', celebrityName: '虞书欣', celebrityPhoto: 'assets/images/celebrities/yushuxin.jpg', category: '轻熟妆', similarity: 89, likes: 38900, tag: '小猫妆' },
      { id: 'ce003', title: '迪丽热巴同款浓颜女神妆', coverImage: 'assets/images/covers/celebrity_003.jpg', celebrityName: '迪丽热巴', celebrityPhoto: 'assets/images/celebrities/dilireba.jpg', category: '女神妆', similarity: 90, likes: 52300, tag: '浓颜' },
      { id: 'ce004', title: 'Jennie同款慵懒猫系妆', coverImage: 'assets/images/covers/celebrity_004.jpg', celebrityName: 'Jennie', celebrityPhoto: 'assets/images/celebrities/jennie.jpg', category: '轻熟妆', similarity: 88, likes: 61200, tag: '猫系' },
      { id: 'ce005', title: '张元英同款韩系水光妆', coverImage: 'assets/images/covers/celebrity_005.jpg', celebrityName: '张元英', celebrityPhoto: 'assets/images/celebrities/jangwonyoung.jpg', category: '韩系妆', similarity: 91, likes: 47800, tag: '水光' },
      { id: 'ce006', title: '鞠婧祎同款清冷破碎妆', coverImage: 'assets/images/covers/celebrity_006.jpg', celebrityName: '鞠婧祎', celebrityPhoto: 'assets/images/celebrities/jujingyi.jpg', category: '清冷妆', similarity: 93, likes: 56700, tag: '破碎感' },
      { id: 'ce007', title: '刘亦菲同款仙气裸妆', coverImage: 'assets/images/covers/celebrity_007.jpg', celebrityName: '刘亦菲', celebrityPhoto: 'assets/images/celebrities/liuyifei.jpg', category: '裸妆', similarity: 85, likes: 73400, tag: '仙气' },
      { id: 'ce008', title: '杨幂同款御姐红唇妆', coverImage: 'assets/images/covers/celebrity_008.jpg', celebrityName: '杨幂', celebrityPhoto: 'assets/images/celebrities/yangmi.jpg', category: '轻熟妆', similarity: 87, likes: 41200, tag: '红唇' },
      { id: 'ce009', title: '白鹿同款韩系女高妆', coverImage: 'assets/images/covers/celebrity_009.jpg', celebrityName: '白鹿', celebrityPhoto: 'assets/images/celebrities/bailu.jpg', category: '学院妆', similarity: 90, likes: 34500, tag: '女高' },
      { id: 'ce010', title: '杨紫同款邻家甜妹妆', coverImage: 'assets/images/covers/celebrity_010.jpg', celebrityName: '杨紫', celebrityPhoto: 'assets/images/celebrities/yangzi.jpg', category: '甜美妆', similarity: 88, likes: 29800, tag: '甜妹' },
      { id: 'ce011', title: 'Lisa同款酷飒欧美妆', coverImage: 'assets/images/covers/celebrity_011.jpg', celebrityName: 'Lisa', celebrityPhoto: 'assets/images/celebrities/lisa.jpg', category: '欧美妆', similarity: 86, likes: 68900, tag: '酷飒' },
      { id: 'ce012', title: 'IU同款清透果汁妆', coverImage: 'assets/images/covers/celebrity_012.jpg', celebrityName: 'IU', celebrityPhoto: 'assets/images/celebrities/iu.jpg', category: '甜美妆', similarity: 89, likes: 45600, tag: '果汁妆' },
      { id: 'ce013', title: '倪妮同款高级感裸妆', coverImage: 'assets/images/covers/celebrity_013.jpg', celebrityName: '倪妮', celebrityPhoto: 'assets/images/celebrities/nini.jpg', category: '裸妆', similarity: 91, likes: 38900, tag: '高级感' },
      { id: 'ce014', title: '周也同款清冷校花妆', coverImage: 'assets/images/covers/celebrity_014.jpg', celebrityName: '周也', celebrityPhoto: 'assets/images/celebrities/zhouye.jpg', category: '清冷妆', similarity: 92, likes: 33400, tag: '校花' },
      { id: 'ce015', title: '王心凌同款甜心教主妆', coverImage: 'assets/images/covers/celebrity_015.jpg', celebrityName: '王心凌', celebrityPhoto: 'assets/images/celebrities/wangxinling.jpg', category: '甜美妆', similarity: 88, likes: 41200, tag: '甜心' }
    ]
  },

  // ============================================================
  // 2. products — 商城商品SKU（30条）
  // ============================================================
  products: [
    // 底妆
    { id: 'p001', name: 'YSL 恒久无瑕持妆粉底液', brand: 'YSL', category: '底妆', price: 620, originalPrice: 680, rating: 4.7, skinTypes: ['油性', '混合'], image: 'assets/images/products/p001.jpg', description: '24小时持妆不暗沉，轻薄遮瑕，油皮亲妈', tags: ['持妆', '遮瑕', '油皮'] },
    { id: 'p002', name: '兰蔻持妆轻透粉底液 PO-01', brand: 'Lancôme', category: '底妆', price: 450, originalPrice: 520, rating: 4.6, skinTypes: ['混合', '中性'], image: 'assets/images/products/p002.jpg', description: '轻盈 breathable 质地，持妆不闷痘，自然柔焦', tags: ['持妆', '轻薄', '透气'] },
    { id: 'p003', name: '阿玛尼权力粉底液 2号', brand: 'Armani', category: '底妆', price: 600, originalPrice: 650, rating: 4.8, skinTypes: ['油性', '混合'], image: 'assets/images/products/p003.jpg', description: '高遮瑕强持妆，丝绒哑光妆效，瑕疵皮必备', tags: ['高遮瑕', '哑光', '权力'] },
    { id: 'p004', name: '花西子玉容气垫 N20', brand: '花西子', category: '底妆', price: 199, originalPrice: 259, rating: 4.3, skinTypes: ['干性', '中性'], image: 'assets/images/products/p004.jpg', description: '东方养肤气垫，水润透亮，适合干皮和混干', tags: ['养肤', '水光', '国风'] },
    { id: 'p005', name: '雅诗兰黛DW持妆粉底液 1W1', brand: 'Estee Lauder', category: '底妆', price: 420, originalPrice: 480, rating: 4.7, skinTypes: ['油性', '混合'], image: 'assets/images/products/p005.jpg', description: '油皮救星，持妆大王，越夜越美丽', tags: ['持妆', '油皮救星', '经典'] },
    { id: 'p006', name: 'NARS亮采柔滑遮瑕膏 Vanilla', brand: 'NARS', category: '底妆', price: 300, originalPrice: 350, rating: 4.6, skinTypes: ['全肤质'], image: 'assets/images/products/p006.jpg', description: '奶油质地不卡纹，黑眼圈痘印一笔隐形', tags: ['遮瑕', '奶油', '不干'] },
    { id: 'p007', name: '纪梵希四宫格散粉 1号', brand: 'Givenchy', category: '底妆', price: 590, originalPrice: 620, rating: 4.8, skinTypes: ['全肤质'], image: 'assets/images/products/p007.jpg', description: '经典四色定妆，柔焦提亮，控油持妆', tags: ['定妆', '四宫格', '经典'] },
    // 眼妆
    { id: 'p008', name: '完美日记探险家十二色眼影盘 小猫盘', brand: '完美日记', category: '眼妆', price: 129, originalPrice: 199, rating: 4.4, skinTypes: ['全肤质'], image: 'assets/images/products/p008.jpg', description: '大地色系百搭消肿，新手友好，一盘搞定日常', tags: ['大地色', '消肿', '新手'] },
    { id: 'p009', name: '3CE九宫格眼影盘 Overtake', brand: '3CE', category: '眼妆', price: 245, originalPrice: 299, rating: 4.7, skinTypes: ['全肤质'], image: 'assets/images/products/p009.jpg', description: '橘棕调经典盘，亮片绝美，韩系眼妆必备', tags: ['橘棕', '亮片', '韩系'] },
    { id: 'p010', name: 'Tom Ford四色眼影盘 20 Disco Dust', brand: 'Tom Ford', category: '眼妆', price: 720, originalPrice: 800, rating: 4.9, skinTypes: ['全肤质'], image: 'assets/images/products/p010.jpg', description: '蜜桃棕经典配色，粉质细腻，贵妇级眼影', tags: ['蜜桃', '贵妇', '细腻'] },
    { id: 'p011', name: 'Kiss Me梦幻泪眼防水眼线液笔 黑色', brand: 'Kiss Me', category: '眼妆', price: 68, originalPrice: 88, rating: 4.6, skinTypes: ['全肤质'], image: 'assets/images/products/p011.jpg', description: '极细笔尖，防水防汗不晕染，新手也能画好眼线', tags: ['防水', '极细', '不晕染'] },
    { id: 'p012', name: '美宝莲纽约极细防晕眼线笔', brand: 'Maybelline', category: '眼妆', price: 79, originalPrice: 99, rating: 4.3, skinTypes: ['全肤质'], image: 'assets/images/products/p012.jpg', description: '平价好用，顺滑显色，持久不晕染', tags: ['平价', '顺滑', '显色'] },
    { id: 'p013', name: '艾杜纱睫毛打底膏 黑色', brand: 'Ettusais', category: '眼妆', price: 89, originalPrice: 110, rating: 4.8, skinTypes: ['全肤质'], image: 'assets/images/products/p013.jpg', description: '根根分明卷翘一整天，睫毛不塌的秘密武器', tags: ['打底', '卷翘', '持久'] },
    { id: 'p014', name: '花西子螺黛生花眉笔 05灰棕', brand: '花西子', category: '眼妆', price: 69, originalPrice: 89, rating: 4.4, skinTypes: ['全肤质'], image: 'assets/images/products/p014.jpg', description: '极细三角笔芯，画出根根分明野生眉', tags: ['极细', '野生眉', '国风'] },
    // 唇妆
    { id: 'p015', name: 'YSL小金条细管口红 21', brand: 'YSL', category: '唇妆', price: 390, originalPrice: 450, rating: 4.8, skinTypes: ['全肤质'], image: 'assets/images/products/p015.jpg', description: '复古蓝调正红，显白不挑皮，气场全开', tags: ['正红', '显白', '气场'] },
    { id: 'p016', name: 'Dior烈艳蓝金唇膏 999哑光', brand: 'Dior', category: '唇妆', price: 380, originalPrice: 420, rating: 4.7, skinTypes: ['全肤质'], image: 'assets/images/products/p016.jpg', description: '经典正红色，每个女人都应该拥有的一支口红', tags: ['经典', '正红', '百搭'] },
    { id: 'p017', name: 'Colorkey空气唇釉 R608', brand: 'Colorkey', category: '唇妆', price: 49, originalPrice: 69, rating: 4.5, skinTypes: ['全肤质'], image: 'assets/images/products/p017.jpg', description: '丝绒雾面质地，焦糖红棕显白，平价战斗机', tags: ['丝绒', '红棕', '平价'] },
    { id: 'p018', name: 'MAC子弹头口红 Chili', brand: 'MAC', category: '唇妆', price: 190, originalPrice: 220, rating: 4.6, skinTypes: ['全肤质'], image: 'assets/images/products/p018.jpg', description: '经典小辣椒色，黄皮亲妈，显白不出错', tags: ['小辣椒', '黄皮亲妈', '经典'] },
    { id: 'p019', name: '3CE丝绒唇釉 Taupe', brand: '3CE', category: '唇妆', price: 110, originalPrice: 140, rating: 4.6, skinTypes: ['全肤质'], image: 'assets/images/products/p019.jpg', description: '砖红色复古显白，丝绒质地不拔干', tags: ['砖红', '复古', '不拔干'] },
    { id: 'p020', name: '完美日记名片唇釉 002无花果粉', brand: '完美日记', category: '唇妆', price: 59, originalPrice: 79, rating: 4.3, skinTypes: ['全肤质'], image: 'assets/images/products/p020.jpg', description: '轻薄名片设计，无花果粉温柔日常', tags: ['轻薄', '温柔', '日常'] },
    // 修容
    { id: 'p021', name: 'NARS腮红 Orgasm', brand: 'NARS', category: '修容', price: 300, originalPrice: 350, rating: 4.8, skinTypes: ['全肤质'], image: 'assets/images/products/p021.jpg', description: '蜜桃金偏光，自带高光效果，元气满满', tags: ['蜜桃', '偏光', '元气'] },
    { id: 'p022', name: '橘朵单色腮红 06杏子色', brand: '橘朵', category: '修容', price: 29, originalPrice: 39, rating: 4.5, skinTypes: ['全肤质'], image: 'assets/images/products/p022.jpg', description: '温柔杏子色，日杂感满满，新手不出错', tags: ['杏子', '日杂', '平价'] },
    { id: 'p023', name: 'MAC生姜高光 Double Gleam', brand: 'MAC', category: '修容', price: 360, originalPrice: 400, rating: 4.7, skinTypes: ['全肤质'], image: 'assets/images/products/p023.jpg', description: '水光感香槟色高光，自然透亮不显毛孔', tags: ['水光', '香槟', '不显毛孔'] },
    { id: 'p024', name: 'Too Cool For School三色修容盘', brand: 'Too Cool For School', category: '修容', price: 89, originalPrice: 119, rating: 4.4, skinTypes: ['全肤质'], image: 'assets/images/products/p024.jpg', description: '三色渐变修容，鼻影侧影一盘搞定，新手友好', tags: ['三色', '鼻影', '新手'] },
    // 护肤
    { id: 'p025', name: 'SK-II神仙水精华液 230ml', brand: 'SK-II', category: '护肤', price: 1540, originalPrice: 1690, rating: 4.8, skinTypes: ['油性', '混合'], image: 'assets/images/products/p025.jpg', description: 'PITERA核心成分，调理水油平衡，改善肤质', tags: ['神仙水', '调理', '经典'] },
    { id: 'p026', name: '修丽可色修精华 30ml', brand: 'SkinCeuticals', category: '护肤', price: 595, originalPrice: 650, rating: 4.7, skinTypes: ['敏感', '痘痘'], image: 'assets/images/products/p026.jpg', description: '植萃舒缓修红，淡化痘印，敏感肌安心用', tags: ['修红', '痘印', '植萃'] },
    { id: 'p027', name: '珂润润浸保湿滋养乳霜 40g', brand: 'Curel', category: '护肤', price: 188, originalPrice: 220, rating: 4.6, skinTypes: ['干性', '敏感'], image: 'assets/images/products/p027.jpg', description: '神经酰胺修护，温和保湿，干敏肌救星', tags: ['神经酰胺', '修护', '温和'] },
    { id: 'p028', name: '安热沙金瓶防晒霜 60ml', brand: 'Anessa', category: '护肤', price: 228, originalPrice: 298, rating: 4.7, skinTypes: ['全肤质'], image: 'assets/images/products/p028.jpg', description: '遇水则强防晒技术，户外必备，防水防汗', tags: ['防晒', '防水', '户外'] },
    { id: 'p029', name: '欧莱雅小金管防晒霜 30ml', brand: 'L\'Oreal', category: '护肤', price: 149, originalPrice: 189, rating: 4.5, skinTypes: ['全肤质'], image: 'assets/images/products/p029.jpg', description: '麦色滤防晒科技，轻薄不搓泥，日常通勤', tags: ['防晒', '轻薄', '通勤'] },
    { id: 'p030', name: '薇诺娜舒敏保湿特护霜 50g', brand: 'Winona', category: '护肤', price: 268, originalPrice: 320, rating: 4.6, skinTypes: ['敏感'], image: 'assets/images/products/p030.jpg', description: '马齿苋舒缓修护，敏感肌换季维稳首选', tags: ['修护', '敏感肌', '维稳'] }
  ],

  // ============================================================
  // 3. brandPartners — 品牌合作方（10条）
  // ============================================================
  brandPartners: [
    { id: 'bp001', name: 'YSL圣罗兰', nameEn: 'YSL', logo: 'assets/images/brands/ysl.png', description: '法国奢侈品牌，以大胆前卫的彩妆风格著称，红唇与底妆系列深受全球消费者喜爱。', templateCount: 28, rating: 4.8, isOfficial: true, cooperationType: '品牌联名' },
    { id: 'bp002', name: 'Lancôme兰蔻', nameEn: 'Lancôme', logo: 'assets/images/brands/lancome.png', description: '欧莱雅集团旗下高端美妆品牌，持妆粉底液与睫毛膏为明星产品。', templateCount: 25, rating: 4.7, isOfficial: true, cooperationType: '官方入驻' },
    { id: 'bp003', name: 'Dior迪奥', nameEn: 'Dior', logo: 'assets/images/brands/dior.png', description: '法国顶级奢侈品牌，999口红与花蜜系列为经典之作，优雅与奢华并存。', templateCount: 22, rating: 4.7, isOfficial: true, cooperationType: '品牌联名' },
    { id: 'bp004', name: 'Chanel香奈儿', nameEn: 'Chanel', logo: 'assets/images/brands/chanel.png', description: '法国奢侈品牌代表，简约优雅的风格，双C标志与山茶花元素深入人心。', templateCount: 18, rating: 4.9, isOfficial: true, cooperationType: '官方入驻' },
    { id: 'bp005', name: 'MAC魅可', nameEn: 'MAC', logo: 'assets/images/brands/mac.png', description: '专业彩妆品牌，色号丰富，玩色自由，深受化妆师与美妆爱好者喜爱。', templateCount: 35, rating: 4.5, isOfficial: true, cooperationType: '官方入驻' },
    { id: 'bp006', name: '花西子', nameEn: 'Florasis', logo: 'assets/images/brands/florasis.png', description: '东方彩妆品牌，以花养妆，融合传统工艺与现代科技，展现东方美学。', templateCount: 20, rating: 4.4, isOfficial: true, cooperationType: '国货精选' },
    { id: 'bp007', name: '完美日记', nameEn: 'Perfect Diary', logo: 'assets/images/brands/perfectdiary.png', description: '中国新锐彩妆品牌，高性价比，动物眼影盘与名片唇釉为爆款产品。', templateCount: 30, rating: 4.3, isOfficial: true, cooperationType: '国货精选' },
    { id: 'bp008', name: '橘朵Judydoll', nameEn: 'Judydoll', logo: 'assets/images/brands/judydoll.png', description: '平价彩妆品牌，色彩丰富，腮红与眼影深受学生党喜爱。', templateCount: 24, rating: 4.5, isOfficial: true, cooperationType: '国货精选' },
    { id: 'bp009', name: 'Colorkey珂拉琪', nameEn: 'Colorkey', logo: 'assets/images/brands/colorkey.png', description: '空气唇釉开创者，丝绒质地，平价高显色，年轻人首选唇妆品牌。', templateCount: 18, rating: 4.4, isOfficial: true, cooperationType: '国货精选' },
    { id: 'bp010', name: '3CE三熹玉', nameEn: '3CE', logo: 'assets/images/brands/3ce.png', description: '韩国Stylenanda旗下彩妆品牌，韩系色彩美学，九宫格眼影为明星产品。', templateCount: 26, rating: 4.6, isOfficial: true, cooperationType: '海外品牌' }
  ],

  // ============================================================
  // 4. localProblems — 局部问题+解法+步骤+产品+避雷（F25/F26/F27）
  // ============================================================
  localProblems: [
    {
      id: 'lp001', keyword: '卧蚕怎么画', title: '卧蚕怎么画才自然不显脏？', category: '眼妆',
      solutions: [
        {
          id: 'lp001-s1', name: '妈生感阴影卧蚕', suitable: ['新手', '日常妆'], difficulty: 2, duration: '3分钟', effect: '自然幼态', heat: 98, likes: 45200, dislikes: 120,
          steps: [
            { stepNum: 1, description: '微笑找到卧蚕凸起位置，用浅棕色眉笔轻轻画出阴影线', image: 'assets/images/steps/wochan_01.jpg', products: [
              { tier: '高端', name: 'Benefit precisely my brow', brand: 'Benefit', price: 235, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: '花西子螺黛生花眉笔', brand: '花西子', price: 69, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品极细眉笔', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 2, description: '用细节刷蘸取浅米色眼影，提亮卧蚕凸起部位', image: 'assets/images/steps/wochan_02.jpg', products: [
              { tier: '高端', name: 'Tom Ford四色眼影盘', brand: 'Tom Ford', price: 720, rating: 4.9, skinMatch: ['全肤质'] },
              { tier: '中端', name: '3CE九宫格眼影盘', brand: '3CE', price: 245, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '平价', name: '橘朵单色眼影', brand: '橘朵', price: 25, rating: 4.3, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 3, description: '用棉签或晕染刷将阴影线向下方自然晕开', image: 'assets/images/steps/wochan_03.jpg', products: [
              { tier: '高端', name: 'MAC双头眼影刷', brand: 'MAC', price: 280, rating: 4.6, skinMatch: ['全肤质'] },
              { tier: '中端', name: '尔木萄眼部套刷', brand: 'AMORTALS', price: 49, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品晕染刷', brand: 'MINISO', price: 12, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 4, description: '定妆喷雾轻喷，让卧蚕更持久自然', image: 'assets/images/steps/wochan_04.jpg', products: [
              { tier: '高端', name: 'Urban Decay定妆喷雾', brand: 'Urban Decay', price: 260, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: '柏瑞美定妆喷雾', brand: 'PRAMY', price: 69, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品定妆喷雾', brand: 'MINISO', price: 19, rating: 4.0, skinMatch: ['全肤质'] }
            ]}
          ],
          warnings: [
            { title: '阴影线位置', desc: '不要画在真正的眼下细纹处，要画在卧蚕凸起的下方', source: '专业化妆师', skinRisk: { dry: 'low', oily: 'low', sensitive: 'medium' } },
            { tip: '新手建议选择灰棕色而非深棕色，更不容易显脏' }
          ]
        },
        {
          id: 'lp001-s2', name: '珠光提亮卧蚕', suitable: ['派对妆', '上镜妆'], difficulty: 3, duration: '5分钟', effect: '闪亮有神', heat: 85, likes: 32100, dislikes: 230,
          steps: [
            { stepNum: 1, description: '用遮瑕膏打底卧蚕区域，让后续珠光更显色', image: 'assets/images/steps/wochan2_01.jpg', products: [
              { tier: '高端', name: 'NARS遮瑕膏', brand: 'NARS', price: 300, rating: 4.6, skinMatch: ['全肤质'] },
              { tier: '中端', name: '乐得遮瑕液', brand: 'Medicube', price: 79, rating: 4.3, skinMatch: ['全肤质'] },
              { tier: '平价', name: '美宝莲橡皮擦遮瑕', brand: 'Maybelline', price: 59, rating: 4.2, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 2, description: '香槟色珠光眼影点涂卧蚕中央', image: 'assets/images/steps/wochan2_02.jpg', products: [
              { tier: '高端', name: 'Bobbi Brown月光石', brand: 'Bobbi Brown', price: 360, rating: 4.8, skinMatch: ['全肤质'] },
              { tier: '中端', name: '橘朵G33偏光闪片', brand: '橘朵', price: 29, rating: 4.5, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品单色眼影', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 3, description: '少量亮片点缀眼中，增加立体感', image: 'assets/images/steps/wochan2_03.jpg', products: [
              { tier: '高端', name: '3CE一滴泪', brand: '3CE', price: 89, rating: 4.6, skinMatch: ['全肤质'] },
              { tier: '中端', name: '橘朵液体眼影', brand: '橘朵', price: 35, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品液体眼影', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 4, description: '轻轻按压固定亮片，防止飞粉', image: 'assets/images/steps/wochan2_04.jpg', products: [
              { tier: '高端', name: 'MAC定妆喷雾', brand: 'MAC', price: 240, rating: 4.5, skinMatch: ['全肤质'] },
              { tier: '中端', name: '柏瑞美定妆喷雾', brand: 'PRAMY', price: 69, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品定妆喷雾', brand: 'MINISO', price: 19, rating: 4.0, skinMatch: ['全肤质'] }
            ]}
          ],
          warnings: [
            { title: '亮片用量', desc: '亮片不宜过多，否则容易显得眼睛浮肿', source: '美妆博主', skinRisk: { dry: 'low', oily: 'low', sensitive: 'low' } },
            { tip: '肿眼泡建议避开大亮片，选择细腻珠光即可' }
          ]
        },
        {
          id: 'lp001-s3', name: '卧蚕笔速成法', suitable: ['急救', '懒人'], difficulty: 1, duration: '1分钟', effect: '快速成型', heat: 92, likes: 38900, dislikes: 180,
          steps: [
            { stepNum: 1, description: '选择双头卧蚕笔，阴影头画出卧蚕下缘', image: 'assets/images/steps/wochan3_01.jpg', products: [
              { tier: '高端', name: 'Benefit卧蚕笔', brand: 'Benefit', price: 220, rating: 4.5, skinMatch: ['全肤质'] },
              { tier: '中端', name: '花西子卧蚕笔', brand: '花西子', price: 59, rating: 4.3, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品双头卧蚕笔', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 2, description: '换提亮头涂抹在卧蚕凸起处', image: 'assets/images/steps/wochan3_02.jpg', products: [
              { tier: '高端', name: 'Benefit卧蚕笔提亮头', brand: 'Benefit', price: 220, rating: 4.5, skinMatch: ['全肤质'] },
              { tier: '中端', name: '花西子卧蚕笔提亮头', brand: '花西子', price: 59, rating: 4.3, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品双头卧蚕笔', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 3, description: '用手指轻轻拍开边缘，让过渡自然', image: 'assets/images/steps/wochan3_03.jpg', products: [
              { tier: '高端', name: '美妆蛋套装', brand: 'Beauty Blender', price: 180, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: '尔木萄美妆蛋', brand: 'AMORTALS', price: 29, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品美妆蛋', brand: 'MINISO', price: 10, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 4, description: '检查两边对称度，适当补妆', image: 'assets/images/steps/wochan3_04.jpg', products: [
              { tier: '高端', name: 'MAC小镜子', brand: 'MAC', price: 120, rating: 4.5, skinMatch: ['全肤质'] },
              { tier: '中端', name: '花西子随身镜', brand: '花西子', price: 39, rating: 4.3, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品折叠镜', brand: 'MINISO', price: 12, rating: 4.0, skinMatch: ['全肤质'] }
            ]}
          ],
          warnings: [
            { title: '对称度', desc: '两边卧蚕高度要一致，否则会导致大小眼', source: '化妆师建议', skinRisk: { dry: 'low', oily: 'low', sensitive: 'low' } },
            { tip: '画之前先对着镜子微笑，找到最适合自己的卧蚕位置' }
          ]
        },
        {
          id: 'lp001-s4', name: '结构式卧蚕法', suitable: ['进阶', '欧美妆'], difficulty: 4, duration: '8分钟', effect: '立体深邃', heat: 72, likes: 19800, dislikes: 340,
          steps: [
            { stepNum: 1, description: '用修容粉在眼下画出阴影轮廓', image: 'assets/images/steps/wochan4_01.jpg', products: [
              { tier: '高端', name: 'MAC Omega修容', brand: 'MAC', price: 160, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: 'Too Cool For School修容', brand: 'Too Cool For School', price: 89, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '橘朵修容盘', brand: '橘朵', price: 45, rating: 4.2, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 2, description: '用高光粉提亮卧蚕凸起和眼头', image: 'assets/images/steps/wochan4_02.jpg', products: [
              { tier: '高端', name: 'MAC生姜高光', brand: 'MAC', price: 360, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: '花西子高光', brand: '花西子', price: 89, rating: 4.3, skinMatch: ['全肤质'] },
              { tier: '平价', name: '橘朵高光', brand: '橘朵', price: 35, rating: 4.2, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 3, description: '用细节刷加深眼尾三角区阴影', image: 'assets/images/steps/wochan4_03.jpg', products: [
              { tier: '高端', name: 'MAC224晕染刷', brand: 'MAC', price: 260, rating: 4.6, skinMatch: ['全肤质'] },
              { tier: '中端', name: '尔木萄细节刷', brand: 'AMORTALS', price: 25, rating: 4.3, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品眼影刷', brand: 'MINISO', price: 12, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 4, description: '定妆喷雾定妆，检查整体效果', image: 'assets/images/steps/wochan4_04.jpg', products: [
              { tier: '高端', name: 'Urban Decay定妆喷雾', brand: 'Urban Decay', price: 260, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: '柏瑞美定妆喷雾', brand: 'PRAMY', price: 69, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品定妆喷雾', brand: 'MINISO', price: 19, rating: 4.0, skinMatch: ['全肤质'] }
            ]}
          ],
          warnings: [
            { title: '结构把握', desc: '需要一定的面部结构理解，否则容易画成眼袋', source: '专业化妆师', skinRisk: { dry: 'medium', oily: 'low', sensitive: 'low' } },
            { tip: '干皮建议用膏状修容，油皮建议用粉状修容' }
          ]
        }
      ]
    },
    {
      id: 'lp002', keyword: '眼线怎么画', title: '眼线怎么画不手抖？', category: '眼妆',
      solutions: [
        {
          id: 'lp002-s1', name: '三点连线法', suitable: ['新手', '手残党'], difficulty: 1, duration: '3分钟', effect: '自然流畅', heat: 96, likes: 41200, dislikes: 150,
          steps: [
            { stepNum: 1, description: '在眼尾、眼中、眼头分别点三个小点', image: 'assets/images/steps/yanxian_01.jpg', products: [
              { tier: '高端', name: 'Kiss Me眼线液笔', brand: 'Kiss Me', price: 68, rating: 4.6, skinMatch: ['全肤质'] },
              { tier: '中端', name: '花西子眼线液笔', brand: '花西子', price: 59, rating: 4.3, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品眼线液笔', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 2, description: '将三个点轻轻连起来，不要用力', image: 'assets/images/steps/yanxian_02.jpg', products: [
              { tier: '高端', name: 'Kiss Me眼线液笔', brand: 'Kiss Me', price: 68, rating: 4.6, skinMatch: ['全肤质'] },
              { tier: '中端', name: '花西子眼线液笔', brand: '花西子', price: 59, rating: 4.3, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品眼线液笔', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 3, description: '不够连贯的地方用棉签蘸卸妆水修改', image: 'assets/images/steps/yanxian_03.jpg', products: [
              { tier: '高端', name: '贝德玛卸妆水', brand: 'Bioderma', price: 158, rating: 4.7, skinMatch: ['敏感'] },
              { tier: '中端', name: '美宝莲眼唇卸', brand: 'Maybelline', price: 59, rating: 4.5, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品棉签', brand: 'MINISO', price: 10, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 4, description: '用深色眼影在眼线上按压，让眼线更持久', image: 'assets/images/steps/yanxian_04.jpg', products: [
              { tier: '高端', name: 'MAC眼影炭黑色', brand: 'MAC', price: 160, rating: 4.6, skinMatch: ['全肤质'] },
              { tier: '中端', name: '橘朵单色眼影', brand: '橘朵', price: 25, rating: 4.3, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品眼影', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['全肤质'] }
            ]}
          ],
          warnings: [
            { title: '手肘支撑', desc: '画眼线时手肘要有支撑点，悬空容易手抖', source: '化妆师技巧', skinRisk: { dry: 'low', oily: 'low', sensitive: 'low' } },
            { tip: '新手建议先画内眼线，熟练后再画外眼线' }
          ]
        },
        {
          id: 'lp002-s2', name: '胶带辅助法', suitable: ['新手', '欧美妆'], difficulty: 2, duration: '5分钟', effect: '利落上扬', heat: 88, likes: 34500, dislikes: 200,
          steps: [
            { stepNum: 1, description: '取一小段透明胶带，贴在眼尾作为参考线', image: 'assets/images/steps/yanxian2_01.jpg', products: [
              { tier: '高端', name: '3M美纹纸胶带', brand: '3M', price: 25, rating: 4.5, skinMatch: ['全肤质'] },
              { tier: '中端', name: '普通透明胶带', brand: '得力', price: 8, rating: 4.2, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品胶带', brand: 'MINISO', price: 5, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 2, description: '沿着胶带边缘画出上扬眼线', image: 'assets/images/steps/yanxian2_02.jpg', products: [
              { tier: '高端', name: 'Kiss Me眼线液笔', brand: 'Kiss Me', price: 68, rating: 4.6, skinMatch: ['全肤质'] },
              { tier: '中端', name: '花西子眼线液笔', brand: '花西子', price: 59, rating: 4.3, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品眼线液笔', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 3, description: '轻轻撕掉胶带，检查眼线边缘', image: 'assets/images/steps/yanxian2_03.jpg', products: [
              { tier: '高端', name: 'Benefit卸妆水', brand: 'Benefit', price: 180, rating: 4.5, skinMatch: ['全肤质'] },
              { tier: '中端', name: '美宝莲眼唇卸', brand: 'Maybelline', price: 59, rating: 4.5, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品卸妆巾', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 4, description: '用遮瑕膏修整边缘，让眼线更利落', image: 'assets/images/steps/yanxian2_04.jpg', products: [
              { tier: '高端', name: 'NARS遮瑕膏', brand: 'NARS', price: 300, rating: 4.6, skinMatch: ['全肤质'] },
              { tier: '中端', name: '乐得遮瑕液', brand: 'Medicube', price: 79, rating: 4.3, skinMatch: ['全肤质'] },
              { tier: '平价', name: '美宝莲橡皮擦', brand: 'Maybelline', price: 59, rating: 4.2, skinMatch: ['全肤质'] }
            ]}
          ],
          warnings: [
            { title: '胶带撕除', desc: '撕胶带时要轻柔，避免拉扯眼部肌肤', source: '护肤专家建议', skinRisk: { dry: 'medium', oily: 'low', sensitive: 'high' } },
            { tip: '敏感肌建议使用低粘性美纹纸胶带，不要用强力胶带' }
          ]
        },
        {
          id: 'lp002-s3', name: '眼影替代法', suitable: ['日常妆', '内双'], difficulty: 1, duration: '2分钟', effect: '柔和自然', heat: 90, likes: 37800, dislikes: 110,
          steps: [
            { stepNum: 1, description: '选择深棕色眼影，用斜角刷蘸取', image: 'assets/images/steps/yanxian3_01.jpg', products: [
              { tier: '高端', name: 'Tom Ford四色眼影', brand: 'Tom Ford', price: 720, rating: 4.9, skinMatch: ['全肤质'] },
              { tier: '中端', name: '3CE九宫格眼影', brand: '3CE', price: 245, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '平价', name: '橘朵单色眼影', brand: '橘朵', price: 25, rating: 4.3, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 2, description: '沿着睫毛根部按压上色，模拟眼线效果', image: 'assets/images/steps/yanxian3_02.jpg', products: [
              { tier: '高端', name: 'MAC斜角刷', brand: 'MAC', price: 240, rating: 4.6, skinMatch: ['全肤质'] },
              { tier: '中端', name: '尔木萄眼线刷', brand: 'AMORTALS', price: 25, rating: 4.3, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品眼线刷', brand: 'MINISO', price: 12, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 3, description: '眼尾向外拉出一条自然的延长线', image: 'assets/images/steps/yanxian3_03.jpg', products: [
              { tier: '高端', name: 'MAC斜角刷', brand: 'MAC', price: 240, rating: 4.6, skinMatch: ['全肤质'] },
              { tier: '中端', name: '尔木萄眼线刷', brand: 'AMORTALS', price: 25, rating: 4.3, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品眼线刷', brand: 'MINISO', price: 12, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 4, description: '定妆喷雾定妆', image: 'assets/images/steps/yanxian3_04.jpg', products: [
              { tier: '高端', name: 'Urban Decay定妆喷雾', brand: 'Urban Decay', price: 260, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: '柏瑞美定妆喷雾', brand: 'PRAMY', price: 69, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品定妆喷雾', brand: 'MINISO', price: 19, rating: 4.0, skinMatch: ['全肤质'] }
            ]}
          ],
          warnings: [
            { title: '晕染风险', desc: '眼影画的眼线容易晕染，油皮需做好眼部打底', source: '油皮博主', skinRisk: { dry: 'low', oily: 'high', sensitive: 'low' } },
            { tip: '内双建议用眼线膏或眼线胶笔，比眼影更持久' }
          ]
        },
        {
          id: 'lp002-s4', name: '眼线胶笔填缝法', suitable: ['内双', '肿眼泡'], difficulty: 2, duration: '4分钟', effect: '隐形有神', heat: 82, likes: 28900, dislikes: 180,
          steps: [
            { stepNum: 1, description: '用眼线胶笔填满睫毛根部空隙', image: 'assets/images/steps/yanxian4_01.jpg', products: [
              { tier: '高端', name: 'Bobbi Brown眼线胶笔', brand: 'Bobbi Brown', price: 280, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: 'Canmake眼线胶笔', brand: 'Canmake', price: 58, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品眼线胶笔', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 2, description: '轻轻提拉上眼皮，确保内眼线也填满', image: 'assets/images/steps/yanxian4_02.jpg', products: [
              { tier: '高端', name: 'Bobbi Brown眼线胶笔', brand: 'Bobbi Brown', price: 280, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: 'Canmake眼线胶笔', brand: 'Canmake', price: 58, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品眼线胶笔', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 3, description: '眼尾用胶笔拉出2mm小尾巴', image: 'assets/images/steps/yanxian4_03.jpg', products: [
              { tier: '高端', name: 'Bobbi Brown眼线胶笔', brand: 'Bobbi Brown', price: 280, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: 'Canmake眼线胶笔', brand: 'Canmake', price: 58, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品眼线胶笔', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 4, description: '深色眼影压在眼线上定妆', image: 'assets/images/steps/yanxian4_04.jpg', products: [
              { tier: '高端', name: 'MAC炭黑眼影', brand: 'MAC', price: 160, rating: 4.6, skinMatch: ['全肤质'] },
              { tier: '中端', name: '橘朵单色眼影', brand: '橘朵', price: 25, rating: 4.3, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品眼影', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['全肤质'] }
            ]}
          ],
          warnings: [
            { title: '笔芯软硬度', desc: '胶笔太软容易断，太硬会拉扯眼皮', source: '产品测评', skinRisk: { dry: 'medium', oily: 'low', sensitive: 'medium' } },
            { tip: '画之前先在手上画几下，让笔芯变圆润再画' }
          ]
        }
      ]
    },
    {
      id: 'lp003', keyword: '单眼皮眼影怎么画', title: '单眼皮眼影怎么画不显肿？', category: '眼妆',
      solutions: [
        {
          id: 'lp003-s1', name: '纵向消肿法', suitable: ['单眼皮', '肿眼泡'], difficulty: 3, duration: '8分钟', effect: '深邃消肿', heat: 95, likes: 42300, dislikes: 200,
          steps: [
            { stepNum: 1, description: '哑光浅米色大面积打底整个眼窝', image: 'assets/images/steps/danyan_01.jpg', products: [
              { tier: '高端', name: 'MAC Omega', brand: 'MAC', price: 160, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: '3CE哑光眼影', brand: '3CE', price: 245, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '平价', name: '橘朵哑光眼影', brand: '橘朵', price: 25, rating: 4.3, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 2, description: '哑光灰棕色加深眼尾三角区，向前晕染', image: 'assets/images/steps/danyan_02.jpg', products: [
              { tier: '高端', name: 'Tom Ford眼影盘', brand: 'Tom Ford', price: 720, rating: 4.9, skinMatch: ['全肤质'] },
              { tier: '中端', name: '完美日记动物盘', brand: '完美日记', price: 129, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '橘朵眼影盘', brand: '橘朵', price: 55, rating: 4.2, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 3, description: '用深色眼影代替眼线，画出自然眼线', image: 'assets/images/steps/danyan_03.jpg', products: [
              { tier: '高端', name: 'MAC炭黑眼影', brand: 'MAC', price: 160, rating: 4.6, skinMatch: ['全肤质'] },
              { tier: '中端', name: '花西子眼影', brand: '花西子', price: 69, rating: 4.3, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品眼影', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 4, description: '下眼影从后往前画，加深眼部轮廓', image: 'assets/images/steps/danyan_04.jpg', products: [
              { tier: '高端', name: 'MAC眼影刷套装', brand: 'MAC', price: 560, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: '尔木萄眼影刷', brand: 'AMORTALS', price: 49, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品眼影刷', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['全肤质'] }
            ]}
          ],
          warnings: [
            { title: '避免珠光', desc: '单眼皮避免大面积使用珠光色，会显肿', source: '单眼皮博主', skinRisk: { dry: 'low', oily: 'low', sensitive: 'low' } },
            { tip: '眼影范围不要太大，睁开眼睛能看到颜色即可' }
          ]
        },
        {
          id: 'lp003-s2', name: '截断式眼妆', suitable: ['进阶', '玩妆'], difficulty: 5, duration: '15分钟', effect: '欧美深邃', heat: 78, likes: 23400, dislikes: 400,
          steps: [
            { stepNum: 1, description: '浅色遮瑕在眼窝画出截断线', image: 'assets/images/steps/danyan2_01.jpg', products: [
              { tier: '高端', name: 'NARS遮瑕膏', brand: 'NARS', price: 300, rating: 4.6, skinMatch: ['全肤质'] },
              { tier: '中端', name: '乐得遮瑕液', brand: 'Medicube', price: 79, rating: 4.3, skinMatch: ['全肤质'] },
              { tier: '平价', name: '美宝莲橡皮擦', brand: 'Maybelline', price: 59, rating: 4.2, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 2, description: '截断线以上用深色眼影晕染', image: 'assets/images/steps/danyan2_02.jpg', products: [
              { tier: '高端', name: 'Huda Beauty眼影盘', brand: 'Huda Beauty', price: 450, rating: 4.8, skinMatch: ['全肤质'] },
              { tier: '中端', name: '完美日记动物盘', brand: '完美日记', price: 129, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '橘朵眼影盘', brand: '橘朵', price: 55, rating: 4.2, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 3, description: '截断线以内用亮片色填充', image: 'assets/images/steps/danyan2_03.jpg', products: [
              { tier: '高端', name: 'Stila液体眼影', brand: 'Stila', price: 220, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: '3CE液体眼影', brand: '3CE', price: 89, rating: 4.5, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品液体眼影', brand: 'MINISO', price: 19, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 4, description: '画出上挑眼线，强调眼部轮廓', image: 'assets/images/steps/danyan2_04.jpg', products: [
              { tier: '高端', name: 'Kiss Me眼线液笔', brand: 'Kiss Me', price: 68, rating: 4.6, skinMatch: ['全肤质'] },
              { tier: '中端', name: '花西子眼线液笔', brand: '花西子', price: 59, rating: 4.3, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品眼线液笔', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['全肤质'] }
            ]}
          ],
          warnings: [
            { title: '截断位置', desc: '截断线位置要找准确，太高或太低都会影响效果', source: '欧美妆博主', skinRisk: { dry: 'low', oily: 'low', sensitive: 'low' } },
            { tip: '新手建议先用浅色眼影画截断线，熟练后再用遮瑕' }
          ]
        },
        {
          id: 'lp003-s3', name: '韩系清淡法', suitable: ['日常妆', '学生党'], difficulty: 2, duration: '5分钟', effect: '清新自然', heat: 91, likes: 36700, dislikes: 130,
          steps: [
            { stepNum: 1, description: '哑光杏色大面积打底', image: 'assets/images/steps/danyan3_01.jpg', products: [
              { tier: '高端', name: '3CE九宫格眼影', brand: '3CE', price: 245, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: '橘朵眼影盘', brand: '橘朵', price: 55, rating: 4.2, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品眼影', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 2, description: '哑光棕色加深眼尾', image: 'assets/images/steps/danyan3_02.jpg', products: [
              { tier: '高端', name: '3CE九宫格眼影', brand: '3CE', price: 245, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: '橘朵眼影盘', brand: '橘朵', price: 55, rating: 4.2, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品眼影', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 3, description: '卧蚕提亮增加幼态感', image: 'assets/images/steps/danyan3_03.jpg', products: [
              { tier: '高端', name: 'Bobbi Brown月光石', brand: 'Bobbi Brown', price: 360, rating: 4.8, skinMatch: ['全肤质'] },
              { tier: '中端', name: '橘朵高光', brand: '橘朵', price: 35, rating: 4.2, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品高光', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 4, description: '睫毛夹翘刷睫毛膏', image: 'assets/images/steps/danyan3_04.jpg', products: [
              { tier: '高端', name: 'HR猎豹睫毛膏', brand: 'HR', price: 420, rating: 4.8, skinMatch: ['全肤质'] },
              { tier: '中端', name: 'Kiss Me睫毛膏', brand: 'Kiss Me', price: 78, rating: 4.6, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品睫毛膏', brand: 'MINISO', price: 19, rating: 4.0, skinMatch: ['全肤质'] }
            ]}
          ],
          warnings: [
            { title: '睫毛膏选择', desc: '单眼皮容易压睫毛，建议选纤长型而非浓密型', source: '单眼皮博主', skinRisk: { dry: 'low', oily: 'low', sensitive: 'low' } },
            { tip: '夹睫毛时分三段夹，根部-中部-梢部，更翘更持久' }
          ]
        },
        {
          id: 'lp003-s4', name: '假双眼皮贴法', suitable: ['约会妆', '上镜妆'], difficulty: 3, duration: '10分钟', effect: '放大双眼', heat: 86, likes: 31200, dislikes: 280,
          steps: [
            { stepNum: 1, description: '选择橄榄型双眼皮贴，根据眼型裁剪', image: 'assets/images/steps/danyan4_01.jpg', products: [
              { tier: '高端', name: 'AB Mezical双眼皮贴', brand: 'AB', price: 68, rating: 4.6, skinMatch: ['全肤质'] },
              { tier: '中端', name: '素之然双眼皮贴', brand: 'Motonozen', price: 35, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品双眼皮贴', brand: 'MINISO', price: 12, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 2, description: '贴在眼皮褶皱处，用Y型叉辅助定型', image: 'assets/images/steps/danyan4_02.jpg', products: [
              { tier: '高端', name: 'AB双眼皮贴套装', brand: 'AB', price: 68, rating: 4.6, skinMatch: ['全肤质'] },
              { tier: '中端', name: '素之然双眼皮贴', brand: 'Motonozen', price: 35, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品双眼皮贴', brand: 'MINISO', price: 12, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 3, description: '贴好后用眼影覆盖，让双眼皮贴隐形', image: 'assets/images/steps/danyan4_03.jpg', products: [
              { tier: '高端', name: 'MAC眼影', brand: 'MAC', price: 160, rating: 4.6, skinMatch: ['全肤质'] },
              { tier: '中端', name: '橘朵眼影', brand: '橘朵', price: 25, rating: 4.3, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品眼影', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 4, description: '画眼线和睫毛膏，完成放大双眼效果', image: 'assets/images/steps/danyan4_04.jpg', products: [
              { tier: '高端', name: 'Kiss Me眼线液笔', brand: 'Kiss Me', price: 68, rating: 4.6, skinMatch: ['全肤质'] },
              { tier: '中端', name: '花西子眼线液笔', brand: '花西子', price: 59, rating: 4.3, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品眼线液笔', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['全肤质'] }
            ]}
          ],
          warnings: [
            { title: '眼部敏感', desc: '双眼皮贴撕除时容易拉扯眼皮，长期使用可能导致眼皮松弛', source: '皮肤科专家', skinRisk: { dry: 'medium', oily: 'low', sensitive: 'high' } },
            { tip: '建议使用专用卸除液，不要直接撕扯' }
          ]
        }
      ]
    },
    {
      id: 'lp004', keyword: '新手底妆怎么画', title: '新手底妆怎么画才服帖不卡粉？', category: '底妆',
      solutions: [
        {
          id: 'lp004-s1', name: '湿美妆蛋法', suitable: ['新手', '干皮'], difficulty: 2, duration: '8分钟', effect: '服帖水润', heat: 97, likes: 48900, dislikes: 150,
          steps: [
            { stepNum: 1, description: '妆前保湿，等待护肤品完全吸收', image: 'assets/images/steps/dizhuang_01.jpg', products: [
              { tier: '高端', name: 'SK-II神仙水', brand: 'SK-II', price: 1540, rating: 4.8, skinMatch: ['油性', '混合'] },
              { tier: '中端', name: '珂润保湿乳液', brand: 'Curel', price: 158, rating: 4.6, skinMatch: ['干性', '敏感'] },
              { tier: '平价', name: '名创优品保湿喷雾', brand: 'MINISO', price: 19, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 2, description: '粉底液挤在手背，用指腹点涂在脸上', image: 'assets/images/steps/dizhuang_02.jpg', products: [
              { tier: '高端', name: '雅诗兰黛DW粉底液', brand: 'Estee Lauder', price: 420, rating: 4.7, skinMatch: ['油性', '混合'] },
              { tier: '中端', name: '兰蔻持妆粉底液', brand: 'Lancôme', price: 450, rating: 4.6, skinMatch: ['混合', '中性'] },
              { tier: '平价', name: '美宝莲FitMe粉底液', brand: 'Maybelline', price: 89, rating: 4.3, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 3, description: '美妆蛋浸湿挤干，用按压方式拍开粉底', image: 'assets/images/steps/dizhuang_03.jpg', products: [
              { tier: '高端', name: 'Beauty Blender美妆蛋', brand: 'Beauty Blender', price: 180, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: '尔木萄美妆蛋', brand: 'AMORTALS', price: 29, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品美妆蛋', brand: 'MINISO', price: 10, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 4, description: '散粉轻扫定妆，重点在T区', image: 'assets/images/steps/dizhuang_04.jpg', products: [
              { tier: '高端', name: '纪梵希四宫格散粉', brand: 'Givenchy', price: 590, rating: 4.8, skinMatch: ['全肤质'] },
              { tier: '中端', name: '花西子散粉', brand: '花西子', price: 149, rating: 4.5, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品散粉', brand: 'MINISO', price: 25, rating: 4.0, skinMatch: ['全肤质'] }
            ]}
          ],
          warnings: [
            { title: '美妆蛋湿度', desc: '美妆蛋太湿会稀释粉底，太干会吸走粉底', source: '化妆师技巧', skinRisk: { dry: 'low', oily: 'low', sensitive: 'low' } },
            { tip: '美妆蛋浸湿后用纸巾包着挤干，湿度最适宜' }
          ]
        },
        {
          id: 'lp004-s2', name: '粉底刷+美妆蛋结合法', suitable: ['瑕疵皮', '高遮瑕'], difficulty: 3, duration: '10分钟', effect: '高遮瑕服帖', heat: 89, likes: 34500, dislikes: 180,
          steps: [
            { stepNum: 1, description: '用粉底刷将粉底均匀刷在脸上', image: 'assets/images/steps/dizhuang2_01.jpg', products: [
              { tier: '高端', name: 'MAC粉底刷', brand: 'MAC', price: 380, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: '尔木萄粉底刷', brand: 'AMORTALS', price: 39, rating: 4.3, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品粉底刷', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 2, description: '美妆蛋按压拍开，让粉底更贴合', image: 'assets/images/steps/dizhuang2_02.jpg', products: [
              { tier: '高端', name: 'Beauty Blender美妆蛋', brand: 'Beauty Blender', price: 180, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: '尔木萄美妆蛋', brand: 'AMORTALS', price: 29, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品美妆蛋', brand: 'MINISO', price: 10, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 3, description: '遮瑕膏点涂瑕疵处，美妆蛋边缘拍开', image: 'assets/images/steps/dizhuang2_03.jpg', products: [
              { tier: '高端', name: 'NARS遮瑕膏', brand: 'NARS', price: 300, rating: 4.6, skinMatch: ['全肤质'] },
              { tier: '中端', name: '乐得遮瑕液', brand: 'Medicube', price: 79, rating: 4.3, skinMatch: ['全肤质'] },
              { tier: '平价', name: '美宝莲橡皮擦', brand: 'Maybelline', price: 59, rating: 4.2, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 4, description: '定妆喷雾定妆', image: 'assets/images/steps/dizhuang2_04.jpg', products: [
              { tier: '高端', name: 'Urban Decay定妆喷雾', brand: 'Urban Decay', price: 260, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: '柏瑞美定妆喷雾', brand: 'PRAMY', price: 69, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品定妆喷雾', brand: 'MINISO', price: 19, rating: 4.0, skinMatch: ['全肤质'] }
            ]}
          ],
          warnings: [
            { title: '刷痕处理', desc: '粉底刷容易留下刷痕，必须用美妆蛋拍开', source: '化妆师技巧', skinRisk: { dry: 'low', oily: 'low', sensitive: 'low' } },
            { tip: '粉底刷要顺着毛孔方向刷，不要打圈' }
          ]
        },
        {
          id: 'lp004-s3', name: '分区上妆法', suitable: ['混合皮', 'T区油'], difficulty: 3, duration: '12分钟', effect: '分区控油', heat: 85, likes: 29800, dislikes: 160,
          steps: [
            { stepNum: 1, description: 'T区用控油妆前乳打底', image: 'assets/images/steps/dizhuang3_01.jpg', products: [
              { tier: '高端', name: '贝玲妃反孔精英', brand: 'Benefit', price: 280, rating: 4.6, skinMatch: ['油性', '混合'] },
              { tier: '中端', name: '苏菲娜控油妆前', brand: 'Sofina', price: 120, rating: 4.5, skinMatch: ['油性', '混合'] },
              { tier: '平价', name: '名创优品妆前乳', brand: 'MINISO', price: 25, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 2, description: '两颊用保湿妆前乳打底', image: 'assets/images/steps/dizhuang3_02.jpg', products: [
              { tier: '高端', name: 'Bobbi Brown橘子面霜', brand: 'Bobbi Brown', price: 590, rating: 4.8, skinMatch: ['干性', '混合'] },
              { tier: '中端', name: '法国大宝妆前乳', brand: 'Embryolisse', price: 98, rating: 4.5, skinMatch: ['干性', '混合'] },
              { tier: '平价', name: '名创优品保湿妆前', brand: 'MINISO', price: 25, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 3, description: 'T区薄涂粉底，两颊正常上妆', image: 'assets/images/steps/dizhuang3_03.jpg', products: [
              { tier: '高端', name: '阿玛尼权力粉底', brand: 'Armani', price: 600, rating: 4.8, skinMatch: ['油性', '混合'] },
              { tier: '中端', name: '兰蔻持妆粉底', brand: 'Lancôme', price: 450, rating: 4.6, skinMatch: ['混合', '中性'] },
              { tier: '平价', name: '美宝莲FitMe', brand: 'Maybelline', price: 89, rating: 4.3, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 4, description: 'T区重点定妆，两颊轻扫', image: 'assets/images/steps/dizhuang3_04.jpg', products: [
              { tier: '高端', name: '纪梵希四宫格散粉', brand: 'Givenchy', price: 590, rating: 4.8, skinMatch: ['全肤质'] },
              { tier: '中端', name: '花西子散粉', brand: '花西子', price: 149, rating: 4.5, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品散粉', brand: 'MINISO', price: 25, rating: 4.0, skinMatch: ['全肤质'] }
            ]}
          ],
          warnings: [
            { title: '妆前冲突', desc: '不同妆前乳不要混合涂抹，要分区使用', source: '化妆师建议', skinRisk: { dry: 'low', oily: 'low', sensitive: 'medium' } },
            { tip: '妆前乳要等完全吸收再上粉底，否则会搓泥' }
          ]
        },
        {
          id: 'lp004-s4', name: '手上妆法', suitable: ['急救', '懒人'], difficulty: 1, duration: '3分钟', effect: '快速均匀', heat: 90, likes: 37800, dislikes: 140,
          steps: [
            { stepNum: 1, description: '粉底液挤在手心，双手搓匀', image: 'assets/images/steps/dizhuang4_01.jpg', products: [
              { tier: '高端', name: '雅诗兰黛DW', brand: 'Estee Lauder', price: 420, rating: 4.7, skinMatch: ['油性', '混合'] },
              { tier: '中端', name: '兰蔻持妆', brand: 'Lancôme', price: 450, rating: 4.6, skinMatch: ['混合', '中性'] },
              { tier: '平价', name: '美宝莲FitMe', brand: 'Maybelline', price: 89, rating: 4.3, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 2, description: '像涂面霜一样将粉底按压上脸', image: 'assets/images/steps/dizhuang4_02.jpg', products: [
              { tier: '高端', name: '雅诗兰黛DW', brand: 'Estee Lauder', price: 420, rating: 4.7, skinMatch: ['油性', '混合'] },
              { tier: '中端', name: '兰蔻持妆', brand: 'Lancôme', price: 450, rating: 4.6, skinMatch: ['混合', '中性'] },
              { tier: '平价', name: '美宝莲FitMe', brand: 'Maybelline', price: 89, rating: 4.3, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 3, description: '指腹点拍不均匀的地方', image: 'assets/images/steps/dizhuang4_03.jpg', products: [
              { tier: '高端', name: '雅诗兰黛DW', brand: 'Estee Lauder', price: 420, rating: 4.7, skinMatch: ['油性', '混合'] },
              { tier: '中端', name: '兰蔻持妆', brand: 'Lancôme', price: 450, rating: 4.6, skinMatch: ['混合', '中性'] },
              { tier: '平价', name: '美宝莲FitMe', brand: 'Maybelline', price: 89, rating: 4.3, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 4, description: '定妆喷雾定妆', image: 'assets/images/steps/dizhuang4_04.jpg', products: [
              { tier: '高端', name: 'Urban Decay定妆喷雾', brand: 'Urban Decay', price: 260, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: '柏瑞美定妆喷雾', brand: 'PRAMY', price: 69, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品定妆喷雾', brand: 'MINISO', price: 19, rating: 4.0, skinMatch: ['全肤质'] }
            ]}
          ],
          warnings: [
            { title: '卫生问题', desc: '手上细菌较多，建议洗手后再上妆', source: '护肤专家', skinRisk: { dry: 'low', oily: 'low', sensitive: 'medium' } },
            { tip: '手上妆适合质地较稀的粉底液，太稠的不好推开' }
          ]
        }
      ]
    },
    {
      id: 'lp005', keyword: '修容怎么打', title: '修容怎么打才自然不假面？', category: '修容',
      solutions: [
        {
          id: 'lp005-s1', name: '3字修容法', suitable: ['圆脸', '方脸'], difficulty: 2, duration: '5分钟', effect: '自然小脸', heat: 94, likes: 43500, dislikes: 170,
          steps: [
            { stepNum: 1, description: '从太阳穴开始，沿发际线画3字第一笔', image: 'assets/images/steps/xiurong_01.jpg', products: [
              { tier: '高端', name: 'MAC Omega', brand: 'MAC', price: 160, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: 'Too Cool For School', brand: 'Too Cool For School', price: 89, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '橘朵修容', brand: '橘朵', price: 45, rating: 4.2, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 2, description: '沿颧骨下方画3字第二笔', image: 'assets/images/steps/xiurong_02.jpg', products: [
              { tier: '高端', name: 'MAC Omega', brand: 'MAC', price: 160, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: 'Too Cool For School', brand: 'Too Cool For School', price: 89, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '橘朵修容', brand: '橘朵', price: 45, rating: 4.2, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 3, description: '沿下颌线画3字第三笔', image: 'assets/images/steps/xiurong_03.jpg', products: [
              { tier: '高端', name: 'MAC Omega', brand: 'MAC', price: 160, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: 'Too Cool For School', brand: 'Too Cool For School', price: 89, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '橘朵修容', brand: '橘朵', price: 45, rating: 4.2, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 4, description: '用大号晕染刷将修容自然晕开', image: 'assets/images/steps/xiurong_04.jpg', products: [
              { tier: '高端', name: 'MAC修容刷', brand: 'MAC', price: 420, rating: 4.6, skinMatch: ['全肤质'] },
              { tier: '中端', name: '尔木萄修容刷', brand: 'AMORTALS', price: 35, rating: 4.3, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品修容刷', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['全肤质'] }
            ]}
          ],
          warnings: [
            { title: '晕染范围', desc: '修容一定要晕染开，否则会有明显色块', source: '化妆师技巧', skinRisk: { dry: 'low', oily: 'low', sensitive: 'low' } },
            { tip: '修容颜色要比肤色深1-2度，太深会显脏' }
          ]
        },
        {
          id: 'lp005-s2', name: '鼻影C字法', suitable: ['塌鼻梁', '宽鼻翼'], difficulty: 2, duration: '4分钟', effect: '立体鼻梁', heat: 93, likes: 41200, dislikes: 150,
          steps: [
            { stepNum: 1, description: '从眉头下方开始画C字', image: 'assets/images/steps/xiurong2_01.jpg', products: [
              { tier: '高端', name: 'MAC Omega', brand: 'MAC', price: 160, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: 'Too Cool For School', brand: 'Too Cool For School', price: 89, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '橘朵修容', brand: '橘朵', price: 45, rating: 4.2, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 2, description: '沿鼻梁两侧向下画', image: 'assets/images/steps/xiurong2_02.jpg', products: [
              { tier: '高端', name: 'MAC鼻影刷', brand: 'MAC', price: 260, rating: 4.6, skinMatch: ['全肤质'] },
              { tier: '中端', name: '尔木萄鼻影刷', brand: 'AMORTALS', price: 25, rating: 4.3, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品鼻影刷', brand: 'MINISO', price: 12, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 3, description: '鼻尖画小V字缩小鼻头', image: 'assets/images/steps/xiurong2_03.jpg', products: [
              { tier: '高端', name: 'MAC Omega', brand: 'MAC', price: 160, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: 'Too Cool For School', brand: 'Too Cool For School', price: 89, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '橘朵修容', brand: '橘朵', price: 45, rating: 4.2, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 4, description: '鼻梁中央高光提亮', image: 'assets/images/steps/xiurong2_04.jpg', products: [
              { tier: '高端', name: 'MAC生姜高光', brand: 'MAC', price: 360, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: '花西子高光', brand: '花西子', price: 89, rating: 4.3, skinMatch: ['全肤质'] },
              { tier: '平价', name: '橘朵高光', brand: '橘朵', price: 35, rating: 4.2, skinMatch: ['全肤质'] }
            ]}
          ],
          warnings: [
            { title: 'C字对称', desc: '两边C字要对称，否则鼻梁会歪', source: '化妆师技巧', skinRisk: { dry: 'low', oily: 'low', sensitive: 'low' } },
            { tip: '山根处不要画太宽，否则会显得鼻梁很粗' }
          ]
        },
        {
          id: 'lp005-s3', name: '颧骨内推法', suitable: ['高颧骨', '菱形脸'], difficulty: 3, duration: '6分钟', effect: '柔和轮廓', heat: 87, likes: 28900, dislikes: 190,
          steps: [
            { stepNum: 1, description: '找到颧骨最高点，从耳前开始斜向画', image: 'assets/images/steps/xiurong3_01.jpg', products: [
              { tier: '高端', name: 'MAC Omega', brand: 'MAC', price: 160, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: 'Too Cool For School', brand: 'Too Cool For School', price: 89, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '橘朵修容', brand: '橘朵', price: 45, rating: 4.2, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 2, description: '向面中方向晕染，制造内推效果', image: 'assets/images/steps/xiurong3_02.jpg', products: [
              { tier: '高端', name: 'MAC修容刷', brand: 'MAC', price: 420, rating: 4.6, skinMatch: ['全肤质'] },
              { tier: '中端', name: '尔木萄修容刷', brand: 'AMORTALS', price: 35, rating: 4.3, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品修容刷', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 3, description: '颧骨下方用哑光高光提亮', image: 'assets/images/steps/xiurong3_03.jpg', products: [
              { tier: '高端', name: 'MAC哑光高光', brand: 'MAC', price: 240, rating: 4.6, skinMatch: ['全肤质'] },
              { tier: '中端', name: '花西子高光', brand: '花西子', price: 89, rating: 4.3, skinMatch: ['全肤质'] },
              { tier: '平价', name: '橘朵高光', brand: '橘朵', price: 35, rating: 4.2, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 4, description: '检查整体对称度', image: 'assets/images/steps/xiurong3_04.jpg', products: [
              { tier: '高端', name: 'MAC化妆镜', brand: 'MAC', price: 120, rating: 4.5, skinMatch: ['全肤质'] },
              { tier: '中端', name: '花西子随身镜', brand: '花西子', price: 39, rating: 4.3, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品折叠镜', brand: 'MINISO', price: 12, rating: 4.0, skinMatch: ['全肤质'] }
            ]}
          ],
          warnings: [
            { title: '修容方向', desc: '要从外向内晕染，不要横向扫', source: '化妆师建议', skinRisk: { dry: 'low', oily: 'low', sensitive: 'low' } },
            { tip: '菱形脸修容重点在颧骨，不要在太阳穴画阴影' }
          ]
        },
        {
          id: 'lp005-s4', name: '液体修容法', suitable: ['干皮', '奶油肌'], difficulty: 3, duration: '6分钟', effect: '自然融合', heat: 84, likes: 26700, dislikes: 200,
          steps: [
            { stepNum: 1, description: '液体修容点涂在需要修饰的位置', image: 'assets/images/steps/xiurong4_01.jpg', products: [
              { tier: '高端', name: 'Benefit液体修容', brand: 'Benefit', price: 280, rating: 4.6, skinMatch: ['全肤质'] },
              { tier: '中端', name: '花西子液体修容', brand: '花西子', price: 69, rating: 4.3, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品液体修容', brand: 'MINISO', price: 25, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 2, description: '用美妆蛋或刷子拍开', image: 'assets/images/steps/xiurong4_02.jpg', products: [
              { tier: '高端', name: 'Beauty Blender', brand: 'Beauty Blender', price: 180, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: '尔木萄美妆蛋', brand: 'AMORTALS', price: 29, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品美妆蛋', brand: 'MINISO', price: 10, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 3, description: '液体高光点涂在提亮处', image: 'assets/images/steps/xiurong4_03.jpg', products: [
              { tier: '高端', name: 'Benefit液体高光', brand: 'Benefit', price: 280, rating: 4.6, skinMatch: ['全肤质'] },
              { tier: '中端', name: '花西子液体高光', brand: '花西子', price: 69, rating: 4.3, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品液体高光', brand: 'MINISO', price: 25, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 4, description: '定妆喷雾定妆', image: 'assets/images/steps/xiurong4_04.jpg', products: [
              { tier: '高端', name: 'Urban Decay定妆喷雾', brand: 'Urban Decay', price: 260, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: '柏瑞美定妆喷雾', brand: 'PRAMY', price: 69, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品定妆喷雾', brand: 'MINISO', price: 19, rating: 4.0, skinMatch: ['全肤质'] }
            ]}
          ],
          warnings: [
            { title: '粉底前使用', desc: '液体修容要在粉底前或粉底后立刻使用，定妆后无法使用', source: '化妆师技巧', skinRisk: { dry: 'low', oily: 'low', sensitive: 'low' } },
            { tip: '液体修容比粉状更自然，但持久度稍差，需要定妆' }
          ]
        }
      ]
    },
    {
      id: 'lp006', keyword: '腮红怎么打', title: '腮红怎么打才显气色不猴屁股？', category: '腮红',
      solutions: [
        {
          id: 'lp006-s1', name: '苹果肌打法', suitable: ['圆脸', '长脸'], difficulty: 1, duration: '2分钟', effect: '元气减龄', heat: 95, likes: 45600, dislikes: 120,
          steps: [
            { stepNum: 1, description: '微笑找到苹果肌最高点', image: 'assets/images/steps/saihong_01.jpg', products: [
              { tier: '高端', name: 'NARS腮红Orgasm', brand: 'NARS', price: 300, rating: 4.8, skinMatch: ['全肤质'] },
              { tier: '中端', name: '橘朵单色腮红', brand: '橘朵', price: 29, rating: 4.5, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品腮红', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 2, description: '腮红刷打圈取粉，抖掉多余粉末', image: 'assets/images/steps/saihong_02.jpg', products: [
              { tier: '高端', name: 'MAC腮红刷', brand: 'MAC', price: 380, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: '尔木萄腮红刷', brand: 'AMORTALS', price: 29, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品腮红刷', brand: 'MINISO', price: 12, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 3, description: '在苹果肌最高点打圈晕染', image: 'assets/images/steps/saihong_03.jpg', products: [
              { tier: '高端', name: 'NARS腮红Orgasm', brand: 'NARS', price: 300, rating: 4.8, skinMatch: ['全肤质'] },
              { tier: '中端', name: '橘朵单色腮红', brand: '橘朵', price: 29, rating: 4.5, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品腮红', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 4, description: '边缘向四周自然过渡', image: 'assets/images/steps/saihong_04.jpg', products: [
              { tier: '高端', name: 'MAC腮红刷', brand: 'MAC', price: 380, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: '尔木萄腮红刷', brand: 'AMORTALS', price: 29, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品腮红刷', brand: 'MINISO', price: 12, rating: 4.0, skinMatch: ['全肤质'] }
            ]}
          ],
          warnings: [
            { title: '取粉量', desc: '少量多次，新手宁少勿多', source: '化妆师技巧', skinRisk: { dry: 'low', oily: 'low', sensitive: 'low' } },
            { tip: '圆脸横向扫，长脸斜向扫' }
          ]
        },
        {
          id: 'lp006-s2', name: '眼下宿醉法', suitable: ['日系妆', '可爱风'], difficulty: 2, duration: '4分钟', effect: '微醺可爱', heat: 88, likes: 33400, dislikes: 210,
          steps: [
            { stepNum: 1, description: '选择粉嫩色腮红', image: 'assets/images/steps/saihong2_01.jpg', products: [
              { tier: '高端', name: 'NARS腮红Deep Throat', brand: 'NARS', price: 300, rating: 4.8, skinMatch: ['全肤质'] },
              { tier: '中端', name: '3CE腮红', brand: '3CE', price: 85, rating: 4.5, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品腮红', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 2, description: '从眼下开始横向扫腮红', image: 'assets/images/steps/saihong2_02.jpg', products: [
              { tier: '高端', name: 'MAC腮红刷', brand: 'MAC', price: 380, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: '尔木萄腮红刷', brand: 'AMORTALS', price: 29, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品腮红刷', brand: 'MINISO', price: 12, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 3, description: '连接鼻梁中段，形成连贯色块', image: 'assets/images/steps/saihong2_03.jpg', products: [
              { tier: '高端', name: 'NARS腮红', brand: 'NARS', price: 300, rating: 4.8, skinMatch: ['全肤质'] },
              { tier: '中端', name: '3CE腮红', brand: '3CE', price: 85, rating: 4.5, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品腮红', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 4, description: '用散粉轻压边缘，模糊边界', image: 'assets/images/steps/saihong2_04.jpg', products: [
              { tier: '高端', name: '纪梵希四宫格散粉', brand: 'Givenchy', price: 590, rating: 4.8, skinMatch: ['全肤质'] },
              { tier: '中端', name: '花西子散粉', brand: '花西子', price: 149, rating: 4.5, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品散粉', brand: 'MINISO', price: 25, rating: 4.0, skinMatch: ['全肤质'] }
            ]}
          ],
          warnings: [
            { title: '眼下细纹', desc: '眼下有细纹的人要避开细纹区域', source: '化妆师建议', skinRisk: { dry: 'medium', oily: 'low', sensitive: 'low' } },
            { tip: '这种打法适合皮肤好的人，瑕疵皮不建议' }
          ]
        },
        {
          id: 'lp006-s3', name: '斜向提拉法', suitable: ['方脸', '圆脸'], difficulty: 2, duration: '3分钟', effect: '提拉瘦脸', heat: 91, likes: 38900, dislikes: 140,
          steps: [
            { stepNum: 1, description: '从颧骨下方斜向太阳穴方向扫', image: 'assets/images/steps/saihong3_01.jpg', products: [
              { tier: '高端', name: 'NARS腮红', brand: 'NARS', price: 300, rating: 4.8, skinMatch: ['全肤质'] },
              { tier: '中端', name: '橘朵腮红', brand: '橘朵', price: 29, rating: 4.5, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品腮红', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 2, description: '颜色从深到浅过渡', image: 'assets/images/steps/saihong3_02.jpg', products: [
              { tier: '高端', name: 'MAC腮红刷', brand: 'MAC', price: 380, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: '尔木萄腮红刷', brand: 'AMORTALS', price: 29, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品腮红刷', brand: 'MINISO', price: 12, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 3, description: '不要低于鼻底线', image: 'assets/images/steps/saihong3_03.jpg', products: [
              { tier: '高端', name: 'NARS腮红', brand: 'NARS', price: 300, rating: 4.8, skinMatch: ['全肤质'] },
              { tier: '中端', name: '橘朵腮红', brand: '橘朵', price: 29, rating: 4.5, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品腮红', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 4, description: '检查两边对称', image: 'assets/images/steps/saihong3_04.jpg', products: [
              { tier: '高端', name: 'MAC化妆镜', brand: 'MAC', price: 120, rating: 4.5, skinMatch: ['全肤质'] },
              { tier: '中端', name: '花西子随身镜', brand: '花西子', price: 39, rating: 4.3, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品折叠镜', brand: 'MINISO', price: 12, rating: 4.0, skinMatch: ['全肤质'] }
            ]}
          ],
          warnings: [
            { title: '位置过高', desc: '位置太高会显得颧骨更高，中庭更长', source: '化妆师建议', skinRisk: { dry: 'low', oily: 'low', sensitive: 'low' } },
            { tip: '圆脸适合斜向扫，长脸适合横向扫' }
          ]
        },
        {
          id: 'lp006-s4', name: '膏状腮红法', suitable: ['干皮', '水光肌'], difficulty: 3, duration: '4分钟', effect: '自然通透', heat: 82, likes: 24500, dislikes: 180,
          steps: [
            { stepNum: 1, description: '指腹沾取膏状腮红', image: 'assets/images/steps/saihong4_01.jpg', products: [
              { tier: '高端', name: 'NARS膏状腮红', brand: 'NARS', price: 320, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: 'Canmake膏状腮红', brand: 'Canmake', price: 58, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品膏状腮红', brand: 'MINISO', price: 19, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 2, description: '在手背拍开，让颜色变淡', image: 'assets/images/steps/saihong4_02.jpg', products: [
              { tier: '高端', name: 'NARS膏状腮红', brand: 'NARS', price: 320, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: 'Canmake膏状腮红', brand: 'Canmake', price: 58, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品膏状腮红', brand: 'MINISO', price: 19, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 3, description: '用美妆蛋拍在苹果肌', image: 'assets/images/steps/saihong4_03.jpg', products: [
              { tier: '高端', name: 'Beauty Blender', brand: 'Beauty Blender', price: 180, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: '尔木萄美妆蛋', brand: 'AMORTALS', price: 29, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品美妆蛋', brand: 'MINISO', price: 10, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 4, description: '定妆喷雾定妆', image: 'assets/images/steps/saihong4_04.jpg', products: [
              { tier: '高端', name: 'Urban Decay定妆喷雾', brand: 'Urban Decay', price: 260, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: '柏瑞美定妆喷雾', brand: 'PRAMY', price: 69, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品定妆喷雾', brand: 'MINISO', price: 19, rating: 4.0, skinMatch: ['全肤质'] }
            ]}
          ],
          warnings: [
            { title: '粉底前使用', desc: '膏状腮红要在定妆前使用，否则推不开', source: '化妆师技巧', skinRisk: { dry: 'low', oily: 'low', sensitive: 'low' } },
            { tip: '膏状腮红比粉状更自然，但油皮可能容易脱妆' }
          ]
        }
      ]
    },
    {
      id: 'lp007', keyword: '唇妆怎么画', title: '唇妆怎么画才饱满不显唇纹？', category: '唇妆',
      solutions: [
        {
          id: 'lp007-s1', name: '咬唇妆法', suitable: ['薄唇', '日常妆'], difficulty: 2, duration: '4分钟', effect: '渐变减龄', heat: 93, likes: 41200, dislikes: 150,
          steps: [
            { stepNum: 1, description: '唇部遮瑕打底，模糊原有唇线', image: 'assets/images/steps/chun_01.jpg', products: [
              { tier: '高端', name: 'NARS遮瑕膏', brand: 'NARS', price: 300, rating: 4.6, skinMatch: ['全肤质'] },
              { tier: '中端', name: '乐得遮瑕液', brand: 'Medicube', price: 79, rating: 4.3, skinMatch: ['全肤质'] },
              { tier: '平价', name: '美宝莲橡皮擦', brand: 'Maybelline', price: 59, rating: 4.2, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 2, description: '口红涂在内侧1/3处', image: 'assets/images/steps/chun_02.jpg', products: [
              { tier: '高端', name: 'YSL小金条', brand: 'YSL', price: 390, rating: 4.8, skinMatch: ['全肤质'] },
              { tier: '中端', name: 'MAC子弹头', brand: 'MAC', price: 190, rating: 4.6, skinMatch: ['全肤质'] },
              { tier: '平价', name: 'Colorkey唇釉', brand: 'Colorkey', price: 49, rating: 4.5, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 3, description: '用唇刷或手指向外晕染', image: 'assets/images/steps/chun_03.jpg', products: [
              { tier: '高端', name: 'MAC唇刷', brand: 'MAC', price: 220, rating: 4.6, skinMatch: ['全肤质'] },
              { tier: '中端', name: '尔木萄唇刷', brand: 'AMORTALS', price: 19, rating: 4.3, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品唇刷', brand: 'MINISO', price: 10, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 4, description: '透明唇蜜点涂中央', image: 'assets/images/steps/chun_04.jpg', products: [
              { tier: '高端', name: 'Dior唇蜜', brand: 'Dior', price: 320, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: '珂拉琪唇蜜', brand: 'Colorkey', price: 39, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品唇蜜', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['全肤质'] }
            ]}
          ],
          warnings: [
            { title: '唇部状态', desc: '唇部干燥起皮时效果差，需先去角质', source: '化妆师建议', skinRisk: { dry: 'high', oily: 'low', sensitive: 'medium' } },
            { tip: '咬唇妆适合颜色饱和度高的口红' }
          ]
        },
        {
          id: 'lp007-s2', name: '满唇法', suitable: ['厚唇', '正式场合'], difficulty: 2, duration: '5分钟', effect: '精致饱满', heat: 89, likes: 35600, dislikes: 130,
          steps: [
            { stepNum: 1, description: '唇线笔勾勒唇形', image: 'assets/images/steps/chun2_01.jpg', products: [
              { tier: '高端', name: 'MAC唇线笔', brand: 'MAC', price: 170, rating: 4.6, skinMatch: ['全肤质'] },
              { tier: '中端', name: '花西子唇线笔', brand: '花西子', price: 49, rating: 4.3, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品唇线笔', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 2, description: '口红填满唇部', image: 'assets/images/steps/chun2_02.jpg', products: [
              { tier: '高端', name: 'YSL小金条', brand: 'YSL', price: 390, rating: 4.8, skinMatch: ['全肤质'] },
              { tier: '中端', name: 'MAC子弹头', brand: 'MAC', price: 190, rating: 4.6, skinMatch: ['全肤质'] },
              { tier: '平价', name: 'Colorkey唇釉', brand: 'Colorkey', price: 49, rating: 4.5, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 3, description: '用遮瑕刷修整边缘', image: 'assets/images/steps/chun2_03.jpg', products: [
              { tier: '高端', name: 'MAC遮瑕刷', brand: 'MAC', price: 260, rating: 4.6, skinMatch: ['全肤质'] },
              { tier: '中端', name: '尔木萄遮瑕刷', brand: 'AMORTALS', price: 25, rating: 4.3, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品遮瑕刷', brand: 'MINISO', price: 12, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 4, description: '定妆喷雾轻喷', image: 'assets/images/steps/chun2_04.jpg', products: [
              { tier: '高端', name: 'Urban Decay定妆喷雾', brand: 'Urban Decay', price: 260, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: '柏瑞美定妆喷雾', brand: 'PRAMY', price: 69, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品定妆喷雾', brand: 'MINISO', price: 19, rating: 4.0, skinMatch: ['全肤质'] }
            ]}
          ],
          warnings: [
            { title: '唇线颜色', desc: '唇线笔颜色要和口红接近，否则会有分层感', source: '化妆师技巧', skinRisk: { dry: 'low', oily: 'low', sensitive: 'low' } },
            { tip: '满唇法适合正式场合，日常可能显得太隆重' }
          ]
        },
        {
          id: 'lp007-s3', name: '嘟嘟唇法', suitable: ['薄唇', '约会妆'], difficulty: 3, duration: '6分钟', effect: '水润饱满', heat: 90, likes: 38900, dislikes: 160,
          steps: [
            { stepNum: 1, description: '遮瑕打底后，口红涂满唇部', image: 'assets/images/steps/chun3_01.jpg', products: [
              { tier: '高端', name: 'YSL唇釉', brand: 'YSL', price: 380, rating: 4.8, skinMatch: ['全肤质'] },
              { tier: '中端', name: '3CE唇釉', brand: '3CE', price: 110, rating: 4.6, skinMatch: ['全肤质'] },
              { tier: '平价', name: 'Colorkey唇釉', brand: 'Colorkey', price: 49, rating: 4.5, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 2, description: '唇峰和唇中央点涂高光', image: 'assets/images/steps/chun3_02.jpg', products: [
              { tier: '高端', name: 'MAC生姜高光', brand: 'MAC', price: 360, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: '花西子高光', brand: '花西子', price: 89, rating: 4.3, skinMatch: ['全肤质'] },
              { tier: '平价', name: '橘朵高光', brand: '橘朵', price: 35, rating: 4.2, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 3, description: '透明唇蜜厚涂中央', image: 'assets/images/steps/chun3_03.jpg', products: [
              { tier: '高端', name: 'Dior唇蜜', brand: 'Dior', price: 320, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: '珂拉琪唇蜜', brand: 'Colorkey', price: 39, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品唇蜜', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 4, description: '嘴角用遮瑕提亮，制造微笑感', image: 'assets/images/steps/chun3_04.jpg', products: [
              { tier: '高端', name: 'NARS遮瑕膏', brand: 'NARS', price: 300, rating: 4.6, skinMatch: ['全肤质'] },
              { tier: '中端', name: '乐得遮瑕液', brand: 'Medicube', price: 79, rating: 4.3, skinMatch: ['全肤质'] },
              { tier: '平价', name: '美宝莲橡皮擦', brand: 'Maybelline', price: 59, rating: 4.2, skinMatch: ['全肤质'] }
            ]}
          ],
          warnings: [
            { title: '唇蜜用量', desc: '唇蜜太多会流到唇外，显得油腻', source: '化妆师建议', skinRisk: { dry: 'low', oily: 'low', sensitive: 'low' } },
            { tip: '风吹头发会粘到唇蜜，户外活动慎用' }
          ]
        },
        {
          id: 'lp007-s4', name: '渐变唇法', suitable: ['日常妆', '韩妆'], difficulty: 2, duration: '5分钟', effect: '自然渐变', heat: 88, likes: 33400, dislikes: 140,
          steps: [
            { stepNum: 1, description: '浅色口红涂满唇部打底', image: 'assets/images/steps/chun4_01.jpg', products: [
              { tier: '高端', name: 'YSL圆管', brand: 'YSL', price: 360, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: 'MAC子弹头', brand: 'MAC', price: 190, rating: 4.6, skinMatch: ['全肤质'] },
              { tier: '平价', name: 'Colorkey唇釉', brand: 'Colorkey', price: 49, rating: 4.5, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 2, description: '深色口红点涂内侧', image: 'assets/images/steps/chun4_02.jpg', products: [
              { tier: '高端', name: 'YSL小金条', brand: 'YSL', price: 390, rating: 4.8, skinMatch: ['全肤质'] },
              { tier: '中端', name: '3CE唇釉', brand: '3CE', price: 110, rating: 4.6, skinMatch: ['全肤质'] },
              { tier: '平价', name: '橘朵唇釉', brand: '橘朵', price: 39, rating: 4.3, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 3, description: '用唇刷将交界处晕染开', image: 'assets/images/steps/chun4_03.jpg', products: [
              { tier: '高端', name: 'MAC唇刷', brand: 'MAC', price: 220, rating: 4.6, skinMatch: ['全肤质'] },
              { tier: '中端', name: '尔木萄唇刷', brand: 'AMORTALS', price: 19, rating: 4.3, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品唇刷', brand: 'MINISO', price: 10, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 4, description: '唇蜜点涂中央增加立体感', image: 'assets/images/steps/chun4_04.jpg', products: [
              { tier: '高端', name: 'Dior唇蜜', brand: 'Dior', price: 320, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: '珂拉琪唇蜜', brand: 'Colorkey', price: 39, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品唇蜜', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['全肤质'] }
            ]}
          ],
          warnings: [
            { title: '颜色搭配', desc: '深浅色要属于同色系，撞色会显脏', source: '化妆师技巧', skinRisk: { dry: 'low', oily: 'low', sensitive: 'low' } },
            { tip: '浅色在外深色在内是咬唇，深色在外浅色在内是欧唇' }
          ]
        }
      ]
    },
    {
      id: 'lp008', keyword: '眉毛怎么画', title: '眉毛怎么画对称又自然？', category: '眉形',
      solutions: [
        {
          id: 'lp008-s1', name: '三点定位法', suitable: ['新手', '所有人'], difficulty: 2, duration: '6分钟', effect: '对称标准', heat: 96, likes: 47800, dislikes: 130,
          steps: [
            { stepNum: 1, description: '鼻翼到眼角的延长线确定眉头', image: 'assets/images/steps/meimao_01.jpg', products: [
              { tier: '高端', name: 'Benefit眉笔', brand: 'Benefit', price: 235, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: '花西子眉笔', brand: '花西子', price: 69, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品眉笔', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 2, description: '鼻翼到瞳孔的延长线确定眉峰', image: 'assets/images/steps/meimao_02.jpg', products: [
              { tier: '高端', name: 'Benefit眉笔', brand: 'Benefit', price: 235, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: '花西子眉笔', brand: '花西子', price: 69, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品眉笔', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 3, description: '鼻翼到眼尾的延长线确定眉尾', image: 'assets/images/steps/meimao_03.jpg', products: [
              { tier: '高端', name: 'Benefit眉笔', brand: 'Benefit', price: 235, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: '花西子眉笔', brand: '花西子', price: 69, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品眉笔', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 4, description: '用眉笔或眉粉连接三点并填充', image: 'assets/images/steps/meimao_04.jpg', products: [
              { tier: '高端', name: 'Benefit眉粉', brand: 'Benefit', price: 260, rating: 4.6, skinMatch: ['全肤质'] },
              { tier: '中端', name: 'Kate眉粉', brand: 'Kate', price: 79, rating: 4.5, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品眉粉', brand: 'MINISO', price: 19, rating: 4.0, skinMatch: ['全肤质'] }
            ]}
          ],
          warnings: [
            { title: '眉头位置', desc: '眉头不要太近，会显凶；也不要太远，会显傻', source: '化妆师技巧', skinRisk: { dry: 'low', oily: 'low', sensitive: 'low' } },
            { tip: '三点定位后轻轻画线，不要用力，后续可以再调整' }
          ]
        },
        {
          id: 'lp008-s2', name: '眉粉填充法', suitable: ['眉毛稀疏', '日常妆'], difficulty: 1, duration: '4分钟', effect: '柔和自然', heat: 92, likes: 38900, dislikes: 110,
          steps: [
            { stepNum: 1, description: '眉刷蘸取浅色眉粉，画出眉形轮廓', image: 'assets/images/steps/meimao2_01.jpg', products: [
              { tier: '高端', name: 'Benefit眉粉', brand: 'Benefit', price: 260, rating: 4.6, skinMatch: ['全肤质'] },
              { tier: '中端', name: 'Kate眉粉', brand: 'Kate', price: 79, rating: 4.5, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品眉粉', brand: 'MINISO', price: 19, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 2, description: '用深色眉粉填充中间和尾部', image: 'assets/images/steps/meimao2_02.jpg', products: [
              { tier: '高端', name: 'Benefit眉粉', brand: 'Benefit', price: 260, rating: 4.6, skinMatch: ['全肤质'] },
              { tier: '中端', name: 'Kate眉粉', brand: 'Kate', price: 79, rating: 4.5, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品眉粉', brand: 'MINISO', price: 19, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 3, description: '眉刷梳理眉毛，让颜色均匀', image: 'assets/images/steps/meimao2_03.jpg', products: [
              { tier: '高端', name: 'Benefit眉刷', brand: 'Benefit', price: 180, rating: 4.6, skinMatch: ['全肤质'] },
              { tier: '中端', name: '尔木萄眉刷', brand: 'AMORTALS', price: 19, rating: 4.3, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品眉刷', brand: 'MINISO', price: 10, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 4, description: '眉毛雨衣定型', image: 'assets/images/steps/meimao2_04.jpg', products: [
              { tier: '高端', name: 'Benefit眉毛雨衣', brand: 'Benefit', price: 200, rating: 4.6, skinMatch: ['全肤质'] },
              { tier: '中端', name: '大创眉毛雨衣', brand: 'DAISO', price: 15, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品眉毛雨衣', brand: 'MINISO', price: 12, rating: 4.0, skinMatch: ['全肤质'] }
            ]}
          ],
          warnings: [
            { title: '眉粉颜色', desc: '眉粉颜色要比头发浅一号，太深会显假', source: '化妆师建议', skinRisk: { dry: 'low', oily: 'low', sensitive: 'low' } },
            { tip: '眉头浅眉尾深，上缘浅下缘深，这样最自然' }
          ]
        },
        {
          id: 'lp008-s3', name: '野生眉法', suitable: ['眉毛浓密', '欧美妆'], difficulty: 3, duration: '8分钟', effect: '毛流感强', heat: 88, likes: 34500, dislikes: 180,
          steps: [
            { stepNum: 1, description: '眉皂或眉胶将眉毛向上梳', image: 'assets/images/steps/meimao3_01.jpg', products: [
              { tier: '高端', name: 'Benefit眉胶', brand: 'Benefit', price: 220, rating: 4.6, skinMatch: ['全肤质'] },
              { tier: '中端', name: '花西子眉胶', brand: '花西子', price: 59, rating: 4.3, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品眉胶', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 2, description: '极细眉笔画出根根分明的毛流', image: 'assets/images/steps/meimao3_02.jpg', products: [
              { tier: '高端', name: 'Benefit极细眉笔', brand: 'Benefit', price: 235, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: '花西子极细眉笔', brand: '花西子', price: 69, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品极细眉笔', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 3, description: '眉粉填补空隙', image: 'assets/images/steps/meimao3_03.jpg', products: [
              { tier: '高端', name: 'Benefit眉粉', brand: 'Benefit', price: 260, rating: 4.6, skinMatch: ['全肤质'] },
              { tier: '中端', name: 'Kate眉粉', brand: 'Kate', price: 79, rating: 4.5, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品眉粉', brand: 'MINISO', price: 19, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 4, description: '透明眉胶定型', image: 'assets/images/steps/meimao3_04.jpg', products: [
              { tier: '高端', name: 'Benefit眉毛雨衣', brand: 'Benefit', price: 200, rating: 4.6, skinMatch: ['全肤质'] },
              { tier: '中端', name: '大创眉毛雨衣', brand: 'DAISO', price: 15, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品眉毛雨衣', brand: 'MINISO', price: 12, rating: 4.0, skinMatch: ['全肤质'] }
            ]}
          ],
          warnings: [
            { title: '眉毛长度', desc: '野生眉不是乱眉，要有基本眉形框架', source: '化妆师技巧', skinRisk: { dry: 'low', oily: 'low', sensitive: 'low' } },
            { tip: '眉毛稀疏的人需要更多眉笔补充，浓密的人只需定型' }
          ]
        },
        {
          id: 'lp008-s4', name: '眉笔快速法', suitable: ['急救', '通勤'], difficulty: 1, duration: '2分钟', effect: '快速成型', heat: 94, likes: 42300, dislikes: 120,
          steps: [
            { stepNum: 1, description: '眉笔从眉头画到眉尾，画出基本框架', image: 'assets/images/steps/meimao4_01.jpg', products: [
              { tier: '高端', name: 'Benefit眉笔', brand: 'Benefit', price: 235, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: '花西子眉笔', brand: '花西子', price: 69, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品眉笔', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 2, description: '用眉笔另一头眉刷梳理晕染', image: 'assets/images/steps/meimao4_02.jpg', products: [
              { tier: '高端', name: 'Benefit眉笔', brand: 'Benefit', price: 235, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: '花西子眉笔', brand: '花西子', price: 69, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品眉笔', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 3, description: '眉尾不够长的地方补几笔', image: 'assets/images/steps/meimao4_03.jpg', products: [
              { tier: '高端', name: 'Benefit眉笔', brand: 'Benefit', price: 235, rating: 4.7, skinMatch: ['全肤质'] },
              { tier: '中端', name: '花西子眉笔', brand: '花西子', price: 69, rating: 4.4, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品眉笔', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['全肤质'] }
            ]},
            { stepNum: 4, description: '检查对称度', image: 'assets/images/steps/meimao4_04.jpg', products: [
              { tier: '高端', name: 'MAC化妆镜', brand: 'MAC', price: 120, rating: 4.5, skinMatch: ['全肤质'] },
              { tier: '中端', name: '花西子随身镜', brand: '花西子', price: 39, rating: 4.3, skinMatch: ['全肤质'] },
              { tier: '平价', name: '名创优品折叠镜', brand: 'MINISO', price: 12, rating: 4.0, skinMatch: ['全肤质'] }
            ]}
          ],
          warnings: [
            { title: '眉笔硬度', desc: '太软的眉笔容易结块，太硬的不好上色', source: '产品测评', skinRisk: { dry: 'medium', oily: 'low', sensitive: 'medium' } },
            { tip: '新手建议选自动旋转眉笔，不用削，方便控制' }
          ]
        }
      ]
    }
  ],

  // ============================================================
  // 5. hotRanking — 热度榜（20条）
  // ============================================================
  hotRanking: [
    { rank: 1, name: '早八通勤妆3分钟搞定', heat: 985000, tag: '通勤', creatorName: '小鹿美妆', category: '日常妆' },
    { rank: 2, name: '纯欲白开水妆', heat: 923000, tag: '纯欲', creatorName: '桃子软糖', category: '日常妆' },
    { rank: 3, name: '多巴胺元气妆', heat: 876000, tag: '多巴胺', creatorName: '彩虹糖', category: '创意妆' },
    { rank: 4, name: '韩系女高妆', heat: 845000, tag: '韩系', creatorName: '橙子气泡水', category: '学院妆' },
    { rank: 5, name: 'Y2K千禧妆', heat: 812000, tag: 'Y2K', creatorName: 'CyberPink', category: '创意妆' },
    { rank: 6, name: '妈生感卧蚕画法', heat: 789000, tag: '卧蚕', creatorName: '美妆研究所', category: '眼妆' },
    { rank: 7, name: '骨相修容法', heat: 756000, tag: '修容', creatorName: '修容大师', category: '修容' },
    { rank: 8, name: '单眼皮消肿眼影公式', heat: 734000, tag: '眼影', creatorName: '单眼皮博主', category: '眼妆' },
    { rank: 9, name: '新中式清冷妆', heat: 698000, tag: '新中式', creatorName: '青瓷美学', category: '国风妆' },
    { rank: 10, name: '太阳花睫毛教程', heat: 678000, tag: '睫毛', creatorName: '睫毛精', category: '眼妆' },
    { rank: 11, name: '赵露思同款甜美蜜桃妆', heat: 654000, tag: '明星同款', creatorName: '明星仿妆', category: '甜美妆' },
    { rank: 12, name: '港风复古妆', heat: 632000, tag: '港风', creatorName: '玫瑰与黄昏', category: '复古妆' },
    { rank: 13, name: '美拉德秋冬妆', heat: 612000, tag: '美拉德', creatorName: '秋秋美妆', category: '季节妆' },
    { rank: 14, name: '野生眉画法', heat: 589000, tag: '眉毛', creatorName: '眉毛专家', category: '眉形' },
    { rank: 15, name: '3分钟快速出门妆', heat: 567000, tag: '快速妆', creatorName: '懒人美妆', category: '底妆' },
    { rank: 16, name: '钓系御姐妆', heat: 545000, tag: '御姐', creatorName: 'Vivi makeup', category: '轻熟妆' },
    { rank: 17, name: '唐妆：花钿贴面', heat: 523000, tag: '国风', creatorName: '国风美学', category: '国风妆' },
    { rank: 18, name: '芭蕾少女妆', heat: 498000, tag: '芭蕾', creatorName: '天鹅绒', category: '甜美妆' },
    { rank: 19, name: '韩妹水光肌秘诀', heat: 476000, tag: '水光肌', creatorName: '水光肌达人', category: '底妆' },
    { rank: 20, name: '截断式欧美眼妆', heat: 456000, tag: '截断式', creatorName: '欧美妆博主', category: '眼妆' }
  ],

  // ============================================================
  // 6. banners — Banner轮播（6条）
  // ============================================================
  banners: [
    { id: 'bn001', title: '新春限定', subtitle: '国风妆容挑战赛开启', image: 'assets/images/banners/banner_001.jpg', linkType: 'activity', linkTarget: 'challenge-spring', bgGradient: 'linear-gradient(135deg, #FF6B6B 0%, #FFE66D 100%)' },
    { id: 'bn002', title: '大牌联名', subtitle: 'YSL红唇妆模板限时免费', image: 'assets/images/banners/banner_002.jpg', linkType: 'template', linkTarget: 'ysl-red-lip', bgGradient: 'linear-gradient(135deg, #C0392B 0%, #F39C12 100%)' },
    { id: 'bn003', title: '新手专区', subtitle: '0基础化妆入门指南', image: 'assets/images/banners/banner_003.jpg', linkType: 'page', linkTarget: 'beginner-guide', bgGradient: 'linear-gradient(135deg, #3498DB 0%, #9B59B6 100%)' },
    { id: 'bn004', title: '银发焕新', subtitle: '50+优雅妆容精选', image: 'assets/images/banners/banner_004.jpg', linkType: 'category', linkTarget: 'silver-zone', bgGradient: 'linear-gradient(135deg, #1ABC9C 0%, #16A085 100%)' },
    { id: 'bn005', title: '成分安全', subtitle: '一键扫描化妆品成分', image: 'assets/images/banners/banner_005.jpg', linkType: 'feature', linkTarget: 'ingredient-scan', bgGradient: 'linear-gradient(135deg, #2ECC71 0%, #27AE60 100%)' },
    { id: 'bn006', title: '每日签到', subtitle: '连续签到领GP好礼', image: 'assets/images/banners/banner_006.jpg', linkType: 'task', linkTarget: 'daily-checkin', bgGradient: 'linear-gradient(135deg, #E74C3C 0%, #C0392B 100%)' }
  ],

  // ============================================================
  // 7. dailyTasks — 每日任务（8条）
  // ============================================================
  dailyTasks: [
    { id: 'dt001', name: '每日签到', description: '每日登录App签到领取GP奖励', rewardGP: 10, totalSteps: 1, icon: 'assets/icons/checkin.png', type: 'checkin' },
    { id: 'dt002', name: '浏览妆容模板', description: '浏览5个妆容模板并完成观看', rewardGP: 15, totalSteps: 5, icon: 'assets/icons/browse.png', type: 'browse' },
    { id: 'dt003', name: '成分扫描', description: '使用成分扫描功能扫描1个产品', rewardGP: 20, totalSteps: 1, icon: 'assets/icons/scan.png', type: 'scan' },
    { id: 'dt004', name: '收藏妆容', description: '收藏3个喜欢的妆容模板', rewardGP: 15, totalSteps: 3, icon: 'assets/icons/favorite.png', type: 'favorite' },
    { id: 'dt005', name: '分享妆容', description: '将喜欢的妆容分享到社交平台', rewardGP: 25, totalSteps: 1, icon: 'assets/icons/share.png', type: 'share' },
    { id: 'dt006', name: '完成镜面化妆', description: '使用AR镜面功能完成一次化妆', rewardGP: 30, totalSteps: 1, icon: 'assets/icons/mirror.png', type: 'mirror' },
    { id: 'dt007', name: '发布问答', description: '在问答区发布一个美妆问题或回答', rewardGP: 20, totalSteps: 1, icon: 'assets/icons/qa.png', type: 'qa' },
    { id: 'dt008', name: '邀请好友', description: '邀请1位好友注册妆伴App', rewardGP: 50, totalSteps: 1, icon: 'assets/icons/invite.png', type: 'invite' }
  ],

  // ============================================================
  // 8. achievements — 成就徽章（12条）
  // ============================================================
  achievements: [
    { id: 'ac001', name: '初出茅庐', description: '完成新手引导，开启美妆之旅', icon: 'assets/icons/achievement_001.png', condition: '完成新手引导', rarity: 'common' },
    { id: 'ac002', name: '美妆达人', description: '累计收藏50个妆容模板', icon: 'assets/icons/achievement_002.png', condition: '收藏50个妆容', rarity: 'common' },
    { id: 'ac003', name: '成分专家', description: '累计扫描30个产品成分', icon: 'assets/icons/achievement_003.png', condition: '扫描30个产品', rarity: 'rare' },
    { id: 'ac004', name: '国风传承者', description: '完成5个国风妆容学习', icon: 'assets/icons/achievement_004.png', condition: '学习5个国风妆', rarity: 'rare' },
    { id: 'ac005', name: '银发焕新师', description: '为银发族群创建或分享3个妆容', icon: 'assets/icons/achievement_005.png', condition: '分享3个银发妆', rarity: 'rare' },
    { id: 'ac006', name: '剁手王者', description: '在商城累计下单10次', icon: 'assets/icons/achievement_006.png', condition: '商城下单10次', rarity: 'epic' },
    { id: 'ac007', name: '镜面大师', description: '使用AR镜面化妆累计30次', icon: 'assets/icons/achievement_007.png', condition: 'AR化妆30次', rarity: 'rare' },
    { id: 'ac008', name: '分享之星', description: '累计分享妆容到社交平台20次', icon: 'assets/icons/achievement_008.png', condition: '分享20次', rarity: 'common' },
    { id: 'ac009', name: '问答达人', description: '在问答区获得100个赞同', icon: 'assets/icons/achievement_009.png', condition: '获赞100次', rarity: 'rare' },
    { id: 'ac010', name: '签到王者', description: '连续签到30天', icon: 'assets/icons/achievement_010.png', condition: '连续签到30天', rarity: 'epic' },
    { id: 'ac011', name: '品牌挚友', description: '与3个品牌官方账号互动', icon: 'assets/icons/achievement_011.png', condition: '互动3个品牌', rarity: 'legendary' },
    { id: 'ac012', name: '妆伴元老', description: '注册妆伴满365天', icon: 'assets/icons/achievement_012.png', condition: '注册满365天', rarity: 'legendary' }
  ],

  // ============================================================
  // 9. levels — 等级体系（5级）
  // ============================================================
  levels: [
    { level: 1, name: '铜妆', nameEn: 'Bronze', minGP: 0, maxGP: 99, icon: 'assets/icons/level_bronze.png', benefits: ['每日签到1倍GP', '基础妆容模板'] },
    { level: 2, name: '银妆', nameEn: 'Silver', minGP: 100, maxGP: 499, icon: 'assets/icons/level_silver.png', benefits: ['每日签到1.2倍GP', '解锁进阶妆容', '专属银妆边框'] },
    { level: 3, name: '金妆', nameEn: 'Gold', minGP: 500, maxGP: 1499, icon: 'assets/icons/level_gold.png', benefits: ['每日签到1.5倍GP', '解锁大师妆容', '专属金妆边框', '优先客服'] },
    { level: 4, name: '钻妆', nameEn: 'Diamond', minGP: 1500, maxGP: 4999, icon: 'assets/icons/level_diamond.png', benefits: ['每日签到2倍GP', '全站模板免费', '专属钻妆边框', '1对1美妆顾问'] },
    { level: 5, name: '星妆', nameEn: 'Star', minGP: 5000, maxGP: 99999, icon: 'assets/icons/level_star.png', benefits: ['每日签到3倍GP', '专属星妆标识', '线下活动邀请', '品牌新品试用', '专属定制妆容'] }
  ],

  // ============================================================
  // 10. skinProfile — 肤质/脸型/肤色数据
  // ============================================================
  skinProfile: {
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
  },

  // ============================================================
  // 11. onboardingSteps — Onboarding步骤内容
  // ============================================================
  onboardingSteps: [
    {
      stepNum: 1,
      title: '欢迎来到妆伴',
      subtitle: '你的私人美妆助手',
      description: '妆伴MakeupPal为你提供智能妆容推荐、AR试妆、成分分析等全方位美妆服务。让我们一起开启美丽之旅吧！',
      image: 'assets/images/onboarding/step_001.jpg',
      options: []
    },
    {
      stepNum: 2,
      title: '你的肤质是？',
      subtitle: '让我们更了解你',
      description: '选择最符合你当前皮肤状况的选项，我们将为你推荐最适合的妆容和产品。',
      image: 'assets/images/onboarding/step_002.jpg',
      options: [
        { id: 'skin_dry', label: '干性', icon: 'assets/icons/skin_dry.png', desc: '皮肤干燥，易起皮' },
        { id: 'skin_oily', label: '油性', icon: 'assets/icons/skin_oily.png', desc: 'T区出油，易长痘' },
        { id: 'skin_combo', label: '混合', icon: 'assets/icons/skin_combo.png', desc: 'T区油两颊干' },
        { id: 'skin_sensitive', label: '敏感', icon: 'assets/icons/skin_sensitive.png', desc: '易泛红，需温和护理' }
      ]
    },
    {
      stepNum: 3,
      title: 'AI肤质扫描',
      subtitle: '科技赋能美丽',
      description: '使用手机摄像头扫描面部，AI将智能分析你的肤质、脸型和肤色，为你生成专属美妆档案。',
      image: 'assets/images/onboarding/step_003.jpg',
      options: []
    },
    {
      stepNum: 4,
      title: '你喜欢的风格？',
      subtitle: '个性化推荐',
      description: '选择你感兴趣的妆容风格，我们将为你定制专属内容推荐。',
      image: 'assets/images/onboarding/step_004.jpg',
      options: [
        { id: 'style_daily', label: '日常通勤', icon: 'assets/icons/style_daily.png', desc: '简约自然的日常妆容' },
        { id: 'style_sweet', label: '甜美可爱', icon: 'assets/icons/style_sweet.png', desc: '元气满满的甜系风格' },
        { id: 'style_mature', label: '轻熟优雅', icon: 'assets/icons/style_mature.png', desc: '知性优雅的成熟风格' },
        { id: 'style_creative', label: '创意玩妆', icon: 'assets/icons/style_creative.png', desc: '大胆前卫的创意妆容' }
      ]
    },
    {
      stepNum: 5,
      title: '新手礼包',
      subtitle: '专属奖励已备好',
      description: '恭喜完成注册！送你100GP新手积分和3个专属妆容模板，快来体验妆伴的魅力吧！',
      image: 'assets/images/onboarding/step_005.jpg',
      options: [],
      rewards: [
        { type: 'gp', amount: 100 },
        { type: 'template', amount: 3 }
      ]
    }
  ],

  // ============================================================
  // 12. ingredientScanResults — 成分扫描示例结果（5条）
  // ============================================================
  ingredientScanResults: [
    {
      productName: 'SK-II护肤精华露',
      brand: 'SK-II',
      riskLevel: 'low',
      sensitivityScore: 15,
      safeIngredients: ['PITERA', '丁二醇', '水杨酸钠'],
      cautionIngredients: ['防腐剂'],
      avoidIngredients: [],
      regulationTags: ['欧盟合规', '美国FDA认证'],
      reportUrl: 'assets/reports/report_sk2.pdf'
    },
    {
      productName: '修丽可色修精华',
      brand: 'SkinCeuticals',
      riskLevel: 'low',
      sensitivityScore: 22,
      safeIngredients: ['黄瓜提取物', '麝香草提取物', '橄榄叶提取物'],
      cautionIngredients: ['丙二醇'],
      avoidIngredients: [],
      regulationTags: ['欧盟合规'],
      reportUrl: 'assets/reports/report_skinceuticals.pdf'
    },
    {
      productName: '某网红美白精华',
      brand: 'X品牌',
      riskLevel: 'high',
      sensitivityScore: 78,
      safeIngredients: ['甘油'],
      cautionIngredients: ['高浓度果酸', '香精'],
      avoidIngredients: ['氢醌', '汞化合物'],
      regulationTags: ['含禁用成分', '不建议使用'],
      reportUrl: 'assets/reports/report_warn.pdf'
    },
    {
      productName: '珂润润浸保湿滋养乳霜',
      brand: 'Curel',
      riskLevel: 'low',
      sensitivityScore: 8,
      safeIngredients: ['神经酰胺', '蓝桉叶提取物', '尿囊素'],
      cautionIngredients: [],
      avoidIngredients: [],
      regulationTags: ['敏感肌推荐', '无香精'],
      reportUrl: 'assets/reports/report_curel.pdf'
    },
    {
      productName: '安热沙金瓶防晒霜',
      brand: 'Anessa',
      riskLevel: 'medium',
      sensitivityScore: 45,
      safeIngredients: ['氧化锌', '二氧化钛'],
      cautionIngredients: ['酒精', '化学防晒剂'],
      avoidIngredients: [],
      regulationTags: ['防晒特证'],
      reportUrl: 'assets/reports/report_anessa.pdf'
    }
  ]

}; // End of MakeupPalData

// ============================================================
// 支持 Node.js 模块导出
// ============================================================
if (typeof module !== 'undefined') module.exports = MakeupPalData;


