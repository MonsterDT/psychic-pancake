// utils/recommend.js - AI推荐引擎

const sceneUtil = require('./scene');
const libraryData = require('../data/library');
const libraryExtra = require('../data/library-extra');
const productsData = require('../data/products');

// 分析用户查询
function analyzeUserQuery(query) {
  const scene = sceneUtil.analyzeScene(query);
  const reply = sceneUtil.getSceneReply(scene);
  return { scene, reply };
}

// 获取场景模板推荐
function getSceneTemplates(scene) {
  const allTemplates = [
    ...libraryData.libraryFeed.creators,
    ...libraryData.libraryFeed.tutorials,
    ...libraryData.libraryFeed.brands
  ];
  const sceneMap = {
    date: ['约会', '甜美', '蜜桃', '浪漫'],
    commute: ['通勤', '日常', '职场', '快速'],
    party: ['派对', '气场', '晚宴', '烟熏'],
    daily: ['日常', '裸妆', '清透', '自然'],
    beginner: ['新手', '入门', '简单'],
    skin: ['护肤', '敏感', '保湿'],
    product: ['产品', '推荐']
  };
  const keywords = sceneMap[scene] || [];
  if (keywords.length === 0) {
    return allTemplates.slice(0, 4);
  }
  const matched = allTemplates.filter(t => {
    const tag = t.tag || '';
    const category = t.category || '';
    const title = t.title || '';
    return keywords.some(kw => title.includes(kw) || tag.includes(kw) || category.includes(kw));
  });
  return (matched.length >= 2 ? matched : allTemplates).slice(0, 4);
}

// 获取场景产品推荐
function getSceneProducts(scene) {
  const allProducts = productsData.products;
  const sceneProductMap = {
    date: ['唇妆', '修容'],
    commute: ['底妆', '护肤'],
    party: ['眼妆', '唇妆'],
    daily: ['底妆', '护肤'],
    beginner: ['底妆', '眼妆'],
    skin: ['护肤'],
    product: ['底妆', '眼妆', '唇妆', '修容', '护肤']
  };
  const categories = sceneProductMap[scene] || ['底妆', '唇妆'];
  const matched = allProducts.filter(p => categories.includes(p.category));
  return (matched.length >= 2 ? matched : allProducts).slice(0, 4);
}

// 生成推荐卡片
function generateRecommendationCards(query) {
  const { scene, reply } = analyzeUserQuery(query);
  const templates = getSceneTemplates(scene);
  const products = getSceneProducts(scene);
  return {
    scene,
    reply,
    templates,
    products
  };
}

module.exports = {
  analyzeUserQuery,
  getSceneTemplates,
  getSceneProducts,
  generateRecommendationCards
};
