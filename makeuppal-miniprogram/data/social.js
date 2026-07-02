// data/social.js - 热度榜 + 每日任务 + 成就徽章 + 等级体系

const hotRanking = [
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
];

const dailyTasks = [
  { id: 'dt001', name: '每日签到', description: '每日登录App签到领取GP奖励', rewardGP: 10, totalSteps: 1, icon: '📅', type: 'checkin' },
  { id: 'dt002', name: '浏览妆容模板', description: '浏览5个妆容模板并完成观看', rewardGP: 15, totalSteps: 5, icon: '👁️', type: 'browse' },
  { id: 'dt003', name: '成分扫描', description: '使用成分扫描功能扫描1个产品', rewardGP: 20, totalSteps: 1, icon: '🔬', type: 'scan' },
  { id: 'dt004', name: '收藏妆容', description: '收藏3个喜欢的妆容模板', rewardGP: 15, totalSteps: 3, icon: '⭐', type: 'favorite' },
  { id: 'dt005', name: '分享妆容', description: '将喜欢的妆容分享到社交平台', rewardGP: 25, totalSteps: 1, icon: '📤', type: 'share' },
  { id: 'dt006', name: '完成镜面化妆', description: '使用AR镜面功能完成一次化妆', rewardGP: 30, totalSteps: 1, icon: '📸', type: 'mirror' },
  { id: 'dt007', name: '发布问答', description: '在问答区发布一个美妆问题或回答', rewardGP: 20, totalSteps: 1, icon: '💬', type: 'qa' },
  { id: 'dt008', name: '邀请好友', description: '邀请1位好友注册妆伴App', rewardGP: 50, totalSteps: 1, icon: '🎁', type: 'invite' }
];

const achievements = [
  { id: 'ac001', name: '初出茅庐', description: '完成新手引导，开启美妆之旅', icon: '🥉', condition: '完成新手引导', rarity: 'common' },
  { id: 'ac002', name: '美妆达人', description: '累计收藏50个妆容模板', icon: '⭐', condition: '收藏50个妆容', rarity: 'common' },
  { id: 'ac003', name: '成分专家', description: '累计扫描30个产品成分', icon: '🔬', condition: '扫描30个产品', rarity: 'rare' },
  { id: 'ac004', name: '国风传承者', description: '完成5个国风妆容学习', icon: '🏮', condition: '学习5个国风妆', rarity: 'rare' },
  { id: 'ac005', name: '银发焕新师', description: '为银发族群创建或分享3个妆容', icon: '👵', condition: '分享3个银发妆', rarity: 'rare' },
  { id: 'ac006', name: '剁手王者', description: '在商城累计下单10次', icon: '🛍️', condition: '商城下单10次', rarity: 'epic' },
  { id: 'ac007', name: '镜面大师', description: '使用AR镜面化妆累计30次', icon: '📸', condition: 'AR化妆30次', rarity: 'rare' },
  { id: 'ac008', name: '分享之星', description: '累计分享妆容到社交平台20次', icon: '📤', condition: '分享20次', rarity: 'common' },
  { id: 'ac009', name: '问答达人', description: '在问答区获得100个赞同', icon: '💬', condition: '获赞100次', rarity: 'rare' },
  { id: 'ac010', name: '签到王者', description: '连续签到30天', icon: '🔥', condition: '连续签到30天', rarity: 'epic' },
  { id: 'ac011', name: '品牌挚友', description: '与3个品牌官方账号互动', icon: '👑', condition: '互动3个品牌', rarity: 'legendary' },
  { id: 'ac012', name: '妆伴元老', description: '注册妆伴满365天', icon: '💎', condition: '注册满365天', rarity: 'legendary' }
];

const levels = [
  { level: 1, name: '铜妆', nameEn: 'Bronze', minGP: 0, maxGP: 99, icon: '🥉', benefits: ['每日签到1倍GP', '基础妆容模板'] },
  { level: 2, name: '银妆', nameEn: 'Silver', minGP: 100, maxGP: 499, icon: '🥈', benefits: ['每日签到1.2倍GP', '解锁进阶妆容', '专属银妆边框'] },
  { level: 3, name: '金妆', nameEn: 'Gold', minGP: 500, maxGP: 1499, icon: '🥇', benefits: ['每日签到1.5倍GP', '解锁大师妆容', '专属金妆边框', '优先客服'] },
  { level: 4, name: '钻妆', nameEn: 'Diamond', minGP: 1500, maxGP: 4999, icon: '💎', benefits: ['每日签到2倍GP', '全站模板免费', '专属钻妆边框', '1对1美妆顾问'] },
  { level: 5, name: '星妆', nameEn: 'Star', minGP: 5000, maxGP: 99999, icon: '⭐', benefits: ['每日签到3倍GP', '专属星妆标识', '线下活动邀请', '品牌新品试用', '专属定制妆容'] }
];

// 根据GP获取等级
function getLevelByGP(gp) {
  for (let i = levels.length - 1; i >= 0; i--) {
    if (gp >= levels[i].minGP) return levels[i];
  }
  return levels[0];
}

module.exports = { hotRanking, dailyTasks, achievements, levels, getLevelByGP };
