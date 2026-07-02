// utils/scene.js - 8场景模板匹配

// 场景关键词映射
const SCENE_KEYWORDS = {
  date: ['约会', '相亲', '男友', '男朋友', '暗恋', '桃花', '浪漫', '甜蜜', '约会妆'],
  commute: ['通勤', '上班', '职场', '工作', '办公室', '职业', '商务', '早八', '通勤妆'],
  party: ['派对', '聚会', '蹦迪', '酒吧', '夜店', '晚会', '舞会', '年会', '生日', '派对妆'],
  daily: ['日常', '出门', '逛街', '买菜', '接孩子', '日常妆', '生活'],
  beginner: ['新手', '小白', '零基础', '手残', '学生', '入门', '初学', '不会画'],
  skin: ['护肤', '皮肤', '肤质', '敏感', '痘痘', '毛孔', '干燥', '出油', '抗老', '美白'],
  product: ['产品', '推荐', '好物', '口红', '粉底', '眼影', '腮红', '买什么', '种草', '测评']
};

// 场景模板数据（从data/onboarding.js加载场景回复）
const sceneReplies = require('../data/onboarding').sceneTemplates;

// 分析用户查询，返回匹配的场景
function analyzeScene(query) {
  if (!query) return 'default';
  const lowerQuery = query.toLowerCase();
  for (const [scene, keywords] of Object.entries(SCENE_KEYWORDS)) {
    for (const kw of keywords) {
      if (lowerQuery.includes(kw.toLowerCase())) {
        return scene;
      }
    }
  }
  return 'default';
}

// 根据场景获取回复
function getSceneReply(scene) {
  const replies = sceneReplies[scene] || sceneReplies.default;
  return replies[Math.floor(Math.random() * replies.length)];
}

module.exports = {
  SCENE_KEYWORDS,
  analyzeScene,
  getSceneReply
};
