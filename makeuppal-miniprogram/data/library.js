// data/library.js - 颜库内容（libraryFeed，7个子类目）
// 源demo行16486-16620

const libraryFeed = {
  // 1.1 达人精选
  creators: [
    { id: 'c001', title: '早八通勤妆3分钟搞定', coverImage: 'coverCreator1', creatorName: '小鹿美妆', creatorAvatar: 'coverCreator1', likes: 12800, collections: 3400, category: '日常妆', tag: '通勤' },
    { id: 'c002', title: '浓颜系千金妆', coverImage: 'coverCreator2', creatorName: '阿紫的美学日记', creatorAvatar: 'coverCreator2', likes: 25600, collections: 8900, category: '晚宴妆', tag: '千金' },
    { id: 'c003', title: '纯欲白开水妆', coverImage: 'coverCreator3', creatorName: '桃子软糖', creatorAvatar: 'coverCreator3', likes: 45200, collections: 15600, category: '日常妆', tag: '纯欲' },
    { id: 'c004', title: '钓系御姐妆', coverImage: 'coverCreator4', creatorName: 'Vivi makeup', creatorAvatar: 'coverCreator4', likes: 18900, collections: 5200, category: '轻熟妆', tag: '御姐' },
    { id: 'c005', title: '韩系女高妆', coverImage: 'coverCreator5', creatorName: '橙子气泡水', creatorAvatar: 'coverCreator5', likes: 32100, collections: 11200, category: '学院妆', tag: '韩系' },
    { id: 'c006', title: '美拉德秋冬妆', coverImage: 'coverCreator6', creatorName: '秋秋美妆', creatorAvatar: 'coverCreator6', likes: 21500, collections: 7800, category: '季节妆', tag: '美拉德' },
    { id: 'c007', title: 'Clean Makeup 清透裸妆', coverImage: 'coverCreator7', creatorName: 'Minimal Beauty', creatorAvatar: 'coverCreator7', likes: 16700, collections: 4500, category: '裸妆', tag: 'clean' },
    { id: 'c008', title: '新中式清冷妆', coverImage: 'coverCreator8', creatorName: '青瓷美学', creatorAvatar: 'coverCreator8', likes: 28900, collections: 9800, category: '国风妆', tag: '新中式' },
    { id: 'c009', title: '港风复古妆', coverImage: 'coverCreator9', creatorName: '玫瑰与黄昏', creatorAvatar: 'coverCreator9', likes: 19800, collections: 6700, category: '复古妆', tag: '港风' },
    { id: 'c010', title: '泰式浓颜妆', coverImage: 'coverCreator10', creatorName: '泰兰德女孩', creatorAvatar: 'coverCreator10', likes: 14500, collections: 4100, category: '轻熟妆', tag: '泰式' },
    { id: 'c011', title: '日杂感透明妆', coverImage: 'coverCreator11', creatorName: '森绘奈', creatorAvatar: 'coverCreator11', likes: 23400, collections: 8900, category: '裸妆', tag: '日杂' },
    { id: 'c012', title: 'Y2K千禧妆', coverImage: 'coverCreator12', creatorName: 'CyberPink', creatorAvatar: 'coverCreator12', likes: 31200, collections: 13400, category: '创意妆', tag: 'Y2K' },
    { id: 'c013', title: '芭蕾少女妆', coverImage: 'coverCreator13', creatorName: '天鹅绒', creatorAvatar: 'coverCreator13', likes: 27600, collections: 10200, category: '甜美妆', tag: '芭蕾' },
    { id: 'c014', title: '老钱静奢妆', coverImage: 'coverCreator14', creatorName: 'OldMoney美学', creatorAvatar: 'coverCreator14', likes: 13400, collections: 3800, category: '轻熟妆', tag: '静奢' },
    { id: 'c015', title: '多巴胺元气妆', coverImage: 'coverCreator15', creatorName: '彩虹糖', creatorAvatar: 'coverCreator15', likes: 38900, collections: 16700, category: '创意妆', tag: '多巴胺' },
    { id: 'c016', title: '小烟熏轻欧美妆', coverImage: 'coverCreator16', creatorName: 'NANA Makeup', creatorAvatar: 'coverCreator16', likes: 22100, collections: 7600, category: '轻熟妆', tag: '轻欧美' },
    { id: 'c017', title: '淡颜系白开水2.0', coverImage: 'coverCreator3', creatorName: '白开水女孩', creatorAvatar: 'coverCreator3', likes: 19800, collections: 6500, category: '日常妆', tag: '淡颜' },
    { id: 'c018', title: '气血感东方妆', coverImage: 'coverCreator8', creatorName: '东方茉莉', creatorAvatar: 'coverCreator8', likes: 25600, collections: 9200, category: '国风妆', tag: '气血感' }
  ],
  // 1.2 局部拆解
  tutorials: [
    { id: 't001', title: '新手必学的3种眼线画法', coverImage: 'coverTutorial1', category: '眼妆', difficulty: 2, duration: '5分钟', suitableFor: ['新手', '手残党'], effect: '自然放大双眼', likes: 18900, tag: '眼线' },
    { id: 't002', title: '单眼皮消肿眼影公式', coverImage: 'coverTutorial2', category: '眼妆', difficulty: 3, duration: '8分钟', suitableFor: ['单眼皮', '肿眼泡'], effect: '消肿深邃', likes: 23400, tag: '眼影' },
    { id: 't003', title: '妈生感卧蚕画法', coverImage: 'coverTutorial3', category: '眼妆', difficulty: 2, duration: '4分钟', suitableFor: ['全肤质', '新手'], effect: '幼态减龄', likes: 31200, tag: '卧蚕' },
    { id: 't004', title: '太阳花睫毛教程', coverImage: 'coverTutorial4', category: '眼妆', difficulty: 3, duration: '10分钟', suitableFor: ['短睫毛', '下垂眼'], effect: '根根分明卷翘', likes: 27600, tag: '睫毛' },
    { id: 't005', title: '骨相修容法', coverImage: 'coverTutorial5', category: '修容', difficulty: 4, duration: '12分钟', suitableFor: ['圆脸', '方脸'], effect: '立体小脸', likes: 19800, tag: '修容' },
    { id: 't006', title: '纯欲嘟嘟唇教程', coverImage: 'coverTutorial6', category: '唇妆', difficulty: 2, duration: '5分钟', suitableFor: ['薄唇', '新手'], effect: '饱满水润', likes: 28900, tag: '唇妆' },
    { id: 't007', title: '野生眉画法', coverImage: 'coverTutorial7', category: '眉形', difficulty: 3, duration: '8分钟', suitableFor: ['眉毛稀疏', '无眉星人'], effect: '毛流感自然', likes: 24500, tag: '眉毛' },
    { id: 't008', title: '氛围感腮红打法', coverImage: 'coverTutorial8', category: '腮红', difficulty: 2, duration: '5分钟', suitableFor: ['全脸型'], effect: '好气色氛围', likes: 16700, tag: '腮红' },
    { id: 't009', title: '黑眼圈泪沟遮瑕术', coverImage: 'coverTutorial9', category: '底妆', difficulty: 4, duration: '10分钟', suitableFor: ['熬夜党', '黑眼圈重'], effect: '眼周干净平整', likes: 35600, tag: '遮瑕' },
    { id: 't010', title: '零毛孔底妆秘籍', coverImage: 'coverTutorial10', category: '底妆', difficulty: 3, duration: '12分钟', suitableFor: ['油皮', '毛孔粗大'], effect: '柔焦磨皮', likes: 21300, tag: '底妆' },
    { id: 't011', title: '眼睑下至放大术', coverImage: 'coverTutorial1', category: '眼妆', difficulty: 3, duration: '7分钟', suitableFor: ['小眼睛', '眼距宽'], effect: '纵向放大双眼', likes: 19800, tag: '眼妆' },
    { id: 't012', title: '3分钟快速出门妆', coverImage: 'coverTutorial10', category: '底妆', difficulty: 1, duration: '3分钟', suitableFor: ['上班族', '学生党'], effect: '提气色伪素颜', likes: 42300, tag: '快速妆' },
    { id: 't013', title: '韩妹水光肌秘诀', coverImage: 'coverTutorial10', category: '底妆', difficulty: 3, duration: '10分钟', suitableFor: ['干皮', '混合皮'], effect: '透亮水光感', likes: 26700, tag: '水光肌' },
    { id: 't014', title: '截断式欧美眼妆', coverImage: 'coverTutorial2', category: '眼妆', difficulty: 5, duration: '20分钟', suitableFor: ['双眼皮', '玩妆党'], effect: '深邃截断轮廓', likes: 14500, tag: '截断式' },
    { id: 't015', title: '减龄苹果肌高光', coverImage: 'coverTutorial5', category: '修容', difficulty: 2, duration: '4分钟', suitableFor: ['面中凹陷', '长脸'], effect: '饱满年轻态', likes: 18900, tag: '高光' },
    { id: 't016', title: '柔雾感唇妆画法', coverImage: 'coverTutorial6', category: '唇妆', difficulty: 2, duration: '5分钟', suitableFor: ['深唇', '唇纹明显'], effect: '柔雾显白', likes: 15600, tag: '唇泥' },
    { id: 't017', title: '新手修眉指南', coverImage: 'coverTutorial7', category: '眉形', difficulty: 1, duration: '6分钟', suitableFor: ['新手', '杂眉'], effect: '眉形干净对称', likes: 28900, tag: '修眉' },
    { id: 't018', title: '内双肿眼泡眼线法', coverImage: 'coverTutorial1', category: '眼妆', difficulty: 3, duration: '8分钟', suitableFor: ['内双', '肿眼泡'], effect: '隐形有神', likes: 32100, tag: '内双' }
  ],
  // 1.3 美妆问答
  qa: [
    { id: 'q001', question: '油皮夏天怎么定妆不脱妆？', summary: '控油妆前+烘焙定妆+定妆喷雾三步法', coverImage: 'coverTutorial10', answerCount: 156, viewCount: 128000, category: '底妆', authorName: '油皮救星', authorAvatar: 'coverTutorial10' },
    { id: 'q002', question: '敏感肌能用什么美白精华？', summary: '推荐温和VC衍生物和传明酸成分', coverImage: 'coverCreator7', answerCount: 89, viewCount: 76000, category: '护肤', authorName: '成分党小美', authorAvatar: 'coverCreator7' },
    { id: 'q003', question: '肿眼泡适合什么眼影颜色？', summary: '哑光大地色消肿，避免珠光和大亮片', coverImage: 'coverTutorial2', answerCount: 234, viewCount: 198000, category: '眼妆', authorName: '眼妆研究所', authorAvatar: 'coverTutorial2' },
    { id: 'q004', question: '学生党第一套化妆品怎么选？', summary: '预算500元内全套搭配方案', coverImage: 'coverCreator5', answerCount: 567, viewCount: 345000, category: '新手', authorName: '省钱小能手', authorAvatar: 'coverCreator5' },
    { id: 'q005', question: '干皮粉底液总是卡粉怎么办？', summary: '妆前保湿+精油混合+湿粉扑上妆', coverImage: 'coverTutorial10', answerCount: 312, viewCount: 256000, category: '底妆', authorName: '干皮守护者', authorAvatar: 'coverTutorial10' },
    { id: 'q006', question: '黄皮涂什么口红最显白？', summary: '橘调红棕、蓝调正红显白不踩雷', coverImage: 'coverTutorial6', answerCount: 445, viewCount: 412000, category: '唇妆', authorName: '口红试色员', authorAvatar: 'coverTutorial6' },
    { id: 'q007', question: '毛孔粗大能靠化妆遮住吗？', summary: '硅类妆前+粉底液逆向涂抹+局部遮瑕', coverImage: 'coverTutorial9', answerCount: 198, viewCount: 167000, category: '底妆', authorName: '毛孔隐形师', authorAvatar: 'coverTutorial9' },
    { id: 'q008', question: '新手怎么画眉毛对称？', summary: '三点定位法+眉粉填充+眉笔补毛流', coverImage: 'coverTutorial7', answerCount: 276, viewCount: 223000, category: '眉形', authorName: '对称强迫症', authorAvatar: 'coverTutorial7' },
    { id: 'q009', question: '法令纹深怎么遮瑕不卡纹？', summary: '轻薄遮瑕液+垂直轻拍+定妆喷雾', coverImage: 'coverTutorial9', answerCount: 134, viewCount: 98000, category: '遮瑕', authorName: '逆龄魔法师', authorAvatar: 'coverTutorial9' },
    { id: 'q010', question: '卸妆油和卸妆膏哪个更好？', summary: '浓妆选卸妆油，日常选卸妆膏', coverImage: 'coverCreator7', answerCount: 189, viewCount: 145000, category: '护肤', authorName: '清洁专家', authorAvatar: 'coverCreator7' },
    { id: 'q011', question: '睫毛膏总是晕染到下眼皮？', summary: '睫毛夹翘+睫毛打底+防水睫毛膏', coverImage: 'coverTutorial4', answerCount: 245, viewCount: 189000, category: '眼妆', authorName: '抗晕染战士', authorAvatar: 'coverTutorial4' },
    { id: 'q012', question: '混油皮T区油两颊干怎么上妆？', summary: '分区护理+不同粉底液混合+分区定妆', coverImage: 'coverTutorial10', answerCount: 167, viewCount: 134000, category: '底妆', authorName: '混合皮救星', authorAvatar: 'coverTutorial10' },
    { id: 'q013', question: '单眼皮怎么画眼影不显脏？', summary: '浅色大面积铺底+深色仅加深眼尾', coverImage: 'coverTutorial2', answerCount: 298, viewCount: 234000, category: '眼妆', authorName: '单眼皮博主', authorAvatar: 'coverTutorial2' },
    { id: 'q014', question: '散粉和粉饼哪个定妆好？', summary: '散粉轻薄自然，粉饼遮瑕力强', answerCount: 356, viewCount: 278000, category: '底妆', authorName: '定妆大师', authorAvatar: 'coverTutorial10' },
    { id: 'q015', question: '新手需要买化妆刷吗？', summary: '必备4把：粉底刷、眼影刷、腮红刷、散粉刷', coverImage: 'coverCreator5', answerCount: 412, viewCount: 312000, category: '新手', authorName: '工具控', authorAvatar: 'coverCreator5' }
  ],
  // 1.4 国风专区
  guofeng: [
    { id: 'g001', title: '唐妆：花钿贴面，大气雍容', coverImage: 'coverGuofeng1', dynasty: '唐代', technique: '花钿、斜红、面靥', description: '以额间花钿为点睛之笔，配合大面积腮红与浓黑眉形，展现大唐盛世的风华绝代。', likes: 18900, tag: '唐妆' },
    { id: 'g002', title: '宋妆：珍珠妆靥，清雅含蓄', coverImage: 'coverGuofeng2', dynasty: '宋代', technique: '珍珠贴面、细眉、淡妆', description: '宋代女子以素雅为美，珍珠点缀面颊，细弯眉如远山含黛，尽显文人雅趣。', likes: 15600, tag: '宋妆' },
    { id: 'g003', title: '敦煌飞天妆：金箔贴面，异域风情', coverImage: 'coverGuofeng3', dynasty: '敦煌', technique: '金箔、彩绘、高发髻', description: '灵感源自敦煌壁画飞天神女，金箔贴面配重彩眼妆，仙气飘飘。', likes: 23400, tag: '敦煌' },
    { id: 'g004', title: '戏曲青衣妆：水衣水袖，眉眼传情', coverImage: 'coverGuofeng4', dynasty: '戏曲', technique: '吊眉、凤眼、贴片', description: '京剧青衣经典妆容，吊眉凤眼显英气，水袖轻扬间尽显东方神韵。', likes: 12300, tag: '戏曲' },
    { id: 'g005', title: '明妆：桃花妆面，端庄秀丽', coverImage: 'coverGuofeng5', dynasty: '明代', technique: '桃花妆、柳叶眉、点唇', description: '明代女子偏好桃花色面颊，柳叶细眉配樱桃小口，端庄又不失娇媚。', likes: 14500, tag: '明妆' },
    { id: 'g006', title: '魏晋风骨：清旷飘逸，素面朝天', coverImage: 'coverGuofeng6', dynasty: '魏晋', technique: '素颜、广眉、白妆', description: '魏晋名士崇尚自然，女子妆容也以素雅为主，广眉白妆尽显飘逸风骨。', likes: 11200, tag: '魏晋' },
    { id: 'g007', title: '汉代红妆：胭脂敷面，唇若朱丹', coverImage: 'coverGuofeng7', dynasty: '汉代', technique: '胭脂、朱砂唇、愁眉', description: '汉代女子以红妆为美，胭脂敷面配朱砂红唇，愁眉微蹙楚楚动人。', likes: 9800, tag: '汉妆' },
    { id: 'g008', title: '苗疆少女妆：银饰叮当，眉眼如画', coverImage: 'coverGuofeng8', dynasty: '苗族', technique: '浓眉、红唇、银饰', description: '苗族少女妆容以浓眉红唇为特色，配合银饰叮当，灵动又神秘。', likes: 16700, tag: '苗疆' },
    { id: 'g009', title: '清汉女妆：柳叶细眉，淡雅温婉', coverImage: 'coverGuofeng2', dynasty: '清代', technique: '柳叶眉、淡雅眼影、薄唇', description: '清代汉族女子妆容趋于淡雅，柳叶细眉配浅色眼影，温婉如水。', likes: 13400, tag: '清汉' },
    { id: 'g010', title: '新中式水墨妆：墨色晕染，意境悠远', coverImage: 'coverGuofeng1', dynasty: '现代', technique: '水墨眼影、渐变唇、写意眉', description: '将水墨画意境融入妆容，墨色眼影晕染配渐变唇，东方美学新诠释。', likes: 28900, tag: '新中式' },
    { id: 'g011', title: '汉服花神妆：十二花神，各领风骚', coverImage: 'coverGuofeng5', dynasty: '传统', technique: '花钿、花瓣唇、主题配色', description: '以十二花神为灵感，每月一种花卉主题妆容，仙气飘飘国风满满。', likes: 21300, tag: '花神' },
    { id: 'g012', title: '山海经精怪妆：奇幻瑰丽，异兽拟人', coverImage: 'coverGuofeng3', dynasty: '神话', technique: '彩绘、贴片、创意眼妆', description: '以《山海经》异兽为灵感，创意彩妆展现奇幻东方神话世界。', likes: 19800, tag: '山海经' }
  ],
  // 1.5 银发专区
  silver: [
    { id: 's001', title: '银发日常焕新：气色提升三步法', coverImage: 'coverSilver1', scene: '日常', description: '简单三步提升气色，让每一天都精神饱满，轻松出门。', likes: 8900, tag: '日常', skinFriendly: true },
    { id: 's002', title: '50+聚会亮妆：优雅不夸张', coverImage: 'coverSilver2', scene: '聚会', description: '聚会场合的优雅妆容，既有气场又不显夸张，得体大方。', likes: 12300, tag: '聚会', skinFriendly: true },
    { id: 's003', title: '职场干练妆：精神自信', coverImage: 'coverSilver3', scene: '职场', description: '职场银发族的干练妆容，精神焕发自信满满，专业形象加分。', likes: 7600, tag: '职场', skinFriendly: true },
    { id: 's004', title: '旅行防晒妆：清爽持久', coverImage: 'coverSilver4', scene: '旅行', description: '旅行必备的清爽防晒妆容，持久不脱妆，拍照美美哒。', likes: 10200, tag: '旅行', skinFriendly: true },
    { id: 's005', title: '银发新娘妆：岁月沉淀的优雅', coverImage: 'coverSilver5', scene: '婚礼', description: '银发新娘的专属妆容，岁月沉淀的优雅，人生第二春的绽放。', likes: 15600, tag: '婚礼', skinFriendly: true },
    { id: 's006', title: '孙辈满月宴：慈爱温婉妆', coverImage: 'coverSilver6', scene: '家宴', description: '孙辈满月宴的慈爱妆容，温婉大方，全家合影C位担当。', likes: 6800, tag: '家宴', skinFriendly: true },
    { id: 's007', title: '老年大学演出妆：舞台亮眼', coverImage: 'coverSilver2', scene: '演出', description: '老年大学舞台演出妆，灯光下依然光彩照人，不输给年轻人。', likes: 5400, tag: '演出', skinFriendly: true },
    { id: 's008', title: '晨练太极妆：自然好气色', coverImage: 'coverSilver1', scene: '运动', description: '晨练太极时的自然妆容，轻薄透气，运动后依然气色在线。', likes: 4300, tag: '运动', skinFriendly: true },
    { id: 's009', title: '银发旗袍妆：古典韵味', coverImage: 'coverSilver3', scene: '旗袍', description: '配旗袍的古典妆容，银发配旗袍别有韵味，东方美人的优雅。', likes: 11200, tag: '旗袍', skinFriendly: true },
    { id: 's010', title: '重阳节敬老妆：端庄喜庆', coverImage: 'coverSilver2', scene: '节日', description: '重阳节敬老活动的端庄妆容，喜庆不浮夸，精神矍铄。', likes: 6700, tag: '节日', skinFriendly: true },
    { id: 's011', title: '银发染发搭配妆：发色妆容协调', coverImage: 'coverSilver1', scene: '日常', description: '银发染发后的妆容搭配技巧，发色与妆容和谐统一。', likes: 8900, tag: '染发', skinFriendly: true },
    { id: 's012', title: '晚年约会妆：温柔浪漫', coverImage: 'coverSilver6', scene: '约会', description: '银发族浪漫约会的温柔妆容，晚年爱情同样甜蜜动人。', likes: 9800, tag: '约会', skinFriendly: true }
  ],
  // 1.6 大牌精选
  brands: [
    { id: 'b001', title: 'YSL 绝色红唇妆', coverImage: 'coverBrand1', brandName: 'YSL', brandLogo: 'coverBrand1', templateCount: 28, rating: 4.8, priceGP: 120, isOfficial: true, tag: '红唇' },
    { id: 'b002', title: 'Dior 花漾甜心妆', coverImage: 'coverBrand2', brandName: 'Dior', brandLogo: 'coverBrand2', templateCount: 22, rating: 4.7, priceGP: 110, isOfficial: true, tag: '甜美' },
    { id: 'b003', title: 'Chanel 法式优雅妆', coverImage: 'coverBrand3', brandName: 'Chanel', brandLogo: 'coverBrand3', templateCount: 18, rating: 4.9, priceGP: 150, isOfficial: true, tag: '优雅' },
    { id: 'b004', title: 'Lancôme 持妆无瑕妆', coverImage: 'coverBrand4', brandName: 'Lancôme', brandLogo: 'coverBrand4', templateCount: 25, rating: 4.6, priceGP: 100, isOfficial: true, tag: '持妆' },
    { id: 'b005', title: 'MAC 专业玩色妆', coverImage: 'coverBrand5', brandName: 'MAC', brandLogo: 'coverBrand5', templateCount: 35, rating: 4.5, priceGP: 80, isOfficial: true, tag: '玩色' },
    { id: 'b006', title: 'Tom Ford 奢金烟熏妆', coverImage: 'coverBrand1', brandName: 'Tom Ford', brandLogo: 'coverBrand1', templateCount: 15, rating: 4.9, priceGP: 180, isOfficial: true, tag: '烟熏' },
    { id: 'b007', title: '花西子 东方雅致妆', coverImage: 'coverBrand3', brandName: '花西子', brandLogo: 'coverBrand3', templateCount: 20, rating: 4.4, priceGP: 60, isOfficial: true, tag: '国风' },
    { id: 'b008', title: '完美日记 动物眼影妆', coverImage: 'coverBrand5', brandName: '完美日记', brandLogo: 'coverBrand5', templateCount: 30, rating: 4.3, priceGP: 45, isOfficial: true, tag: '眼影' },
    { id: 'b009', title: '橘朵 甜系少女妆', coverImage: 'coverBrand2', brandName: '橘朵', brandLogo: 'coverBrand2', templateCount: 24, rating: 4.5, priceGP: 40, isOfficial: true, tag: '少女' },
    { id: 'b010', title: 'Colorkey 丝绒唇釉妆', coverImage: 'coverBrand4', brandName: 'Colorkey', brandLogo: 'coverBrand4', templateCount: 18, rating: 4.4, priceGP: 35, isOfficial: true, tag: '丝绒' },
    { id: 'b011', title: '3CE 韩系氛围妆', coverImage: 'coverBrand5', brandName: '3CE', brandLogo: 'coverBrand5', templateCount: 26, rating: 4.6, priceGP: 70, isOfficial: true, tag: '韩系' },
    { id: 'b012', title: 'NARS 高潮腮红妆', coverImage: 'coverBrand4', brandName: 'NARS', brandLogo: 'coverBrand4', templateCount: 19, rating: 4.7, priceGP: 95, isOfficial: true, tag: '腮红' },
    { id: 'b013', title: 'Estee Lauder 雅诗兰黛精致妆', coverImage: 'coverBrand3', brandName: 'Estee Lauder', brandLogo: 'coverBrand3', templateCount: 21, rating: 4.6, priceGP: 130, isOfficial: true, tag: '精致' },
    { id: 'b014', title: 'Gucci 复古华彩妆', coverImage: 'coverBrand2', brandName: 'Gucci', brandLogo: 'coverBrand2', templateCount: 12, rating: 4.5, priceGP: 160, isOfficial: true, tag: '复古' },
    { id: 'b015', title: '阿玛尼 权力底妆妆', coverImage: 'coverBrand1', brandName: 'Armani', brandLogo: 'coverBrand1', templateCount: 23, rating: 4.8, priceGP: 140, isOfficial: true, tag: '底妆' }
  ],
  // 1.7 明星同款
  celebrities: [
    { id: 'ce001', title: '赵露思同款甜美蜜桃妆', coverImage: 'coverCelebrity1', celebrityName: '赵露思', celebrityPhoto: 'coverCelebrity1', category: '甜美妆', similarity: 92, likes: 45600, tag: '蜜桃妆' },
    { id: 'ce002', title: '虞书欣同款钓系小猫妆', coverImage: 'coverCelebrity2', celebrityName: '虞书欣', celebrityPhoto: 'coverCelebrity2', category: '轻熟妆', similarity: 89, likes: 38900, tag: '小猫妆' },
    { id: 'ce003', title: '迪丽热巴同款浓颜女神妆', coverImage: 'coverCelebrity3', celebrityName: '迪丽热巴', celebrityPhoto: 'coverCelebrity3', category: '女神妆', similarity: 90, likes: 52300, tag: '浓颜' },
    { id: 'ce004', title: 'Jennie同款慵懒猫系妆', coverImage: 'coverCelebrity2', celebrityName: 'Jennie', celebrityPhoto: 'coverCelebrity2', category: '轻熟妆', similarity: 88, likes: 61200, tag: '猫系' },
    { id: 'ce005', title: '张元英同款韩系水光妆', coverImage: 'coverCelebrity4', celebrityName: '张元英', celebrityPhoto: 'coverCelebrity4', category: '韩系妆', similarity: 91, likes: 47800, tag: '水光' },
    { id: 'ce006', title: '鞠婧祎同款清冷破碎妆', coverImage: 'coverCelebrity5', celebrityName: '鞠婧祎', celebrityPhoto: 'coverCelebrity5', category: '清冷妆', similarity: 93, likes: 56700, tag: '破碎感' },
    { id: 'ce007', title: '刘亦菲同款仙气裸妆', coverImage: 'coverCelebrity6', celebrityName: '刘亦菲', celebrityPhoto: 'coverCelebrity6', category: '裸妆', similarity: 85, likes: 73400, tag: '仙气' },
    { id: 'ce008', title: '杨幂同款御姐红唇妆', coverImage: 'coverCelebrity7', celebrityName: '杨幂', celebrityPhoto: 'coverCelebrity7', category: '轻熟妆', similarity: 87, likes: 41200, tag: '红唇' },
    { id: 'ce009', title: '白鹿同款韩系女高妆', coverImage: 'coverCelebrity4', celebrityName: '白鹿', celebrityPhoto: 'coverCelebrity4', category: '学院妆', similarity: 90, likes: 34500, tag: '女高' },
    { id: 'ce010', title: '杨紫同款邻家甜妹妆', coverImage: 'coverCelebrity1', celebrityName: '杨紫', celebrityPhoto: 'coverCelebrity1', category: '甜美妆', similarity: 88, likes: 29800, tag: '甜妹' },
    { id: 'ce011', title: 'Lisa同款酷飒欧美妆', coverImage: 'coverCelebrity3', celebrityName: 'Lisa', celebrityPhoto: 'coverCelebrity3', category: '欧美妆', similarity: 86, likes: 68900, tag: '酷飒' },
    { id: 'ce012', title: 'IU同款清透果汁妆', coverImage: 'coverCelebrity1', celebrityName: 'IU', celebrityPhoto: 'coverCelebrity1', category: '甜美妆', similarity: 89, likes: 45600, tag: '果汁妆' },
    { id: 'ce013', title: '倪妮同款高级感裸妆', coverImage: 'coverCelebrity6', celebrityName: '倪妮', celebrityPhoto: 'coverCelebrity6', category: '裸妆', similarity: 91, likes: 38900, tag: '高级感' },
    { id: 'ce014', title: '周也同款清冷校花妆', coverImage: 'coverCelebrity5', celebrityName: '周也', celebrityPhoto: 'coverCelebrity5', category: '清冷妆', similarity: 92, likes: 33400, tag: '校花' },
    { id: 'ce015', title: '王心凌同款甜心教主妆', coverImage: 'coverCelebrity1', celebrityName: '王心凌', celebrityPhoto: 'coverCelebrity1', category: '甜美妆', similarity: 88, likes: 41200, tag: '甜心' }
  ]
};

module.exports = { libraryFeed };
