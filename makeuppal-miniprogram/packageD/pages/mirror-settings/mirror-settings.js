// packageD/pages/mirror-settings/mirror-settings.js - 魔镜设置
const storage = require('../../../utils/storage');
const router = require('../../../utils/router');

const MIRROR_SETTINGS_KEY = 'mirrorSettings';

const FILTERS = [
  { key: 'natural', label: '自然', icon: '🌿' },
  { key: 'warm', label: '暖光', icon: '☀️' },
  { key: 'cool', label: '冷光', icon: '❄️' },
  { key: 'blackwhite', label: '黑白', icon: '⚫' }
];

// 根据肤色值返回标签
function skinToneLabel(val) {
  if (val < 25) return '冷白皮';
  if (val < 50) return '自然白';
  if (val < 75) return '暖黄皮';
  return '小麦色';
}

Page({
  data: {
    lightIntensity: 60,
    skinTone: 40,
    skinToneLabel: '自然白',
    beautyLevel: 5,
    currentFilter: 'natural',
    filters: FILTERS
  },

  onLoad() {
    // 读取已保存的设置
    const saved = storage.get(MIRROR_SETTINGS_KEY, null);
    if (saved) {
      this.setData({
        lightIntensity: saved.lightIntensity != null ? saved.lightIntensity : 60,
        skinTone: saved.skinTone != null ? saved.skinTone : 40,
        beautyLevel: saved.beautyLevel != null ? saved.beautyLevel : 5,
        currentFilter: saved.currentFilter || 'natural',
        skinToneLabel: skinToneLabel(saved.skinTone != null ? saved.skinTone : 40)
      });
    }
  },

  onLightChange(e) {
    this.setData({ lightIntensity: e.detail.value });
  },

  onSkinToneChange(e) {
    const v = e.detail.value;
    this.setData({ skinTone: v, skinToneLabel: skinToneLabel(v) });
  },

  onBeautyChange(e) {
    this.setData({ beautyLevel: e.detail.value });
  },

  onFilterTap(e) {
    const key = e.currentTarget.dataset.key;
    this.setData({ currentFilter: key });
  },

  onSave() {
    const settings = {
      lightIntensity: this.data.lightIntensity,
      skinTone: this.data.skinTone,
      beautyLevel: this.data.beautyLevel,
      currentFilter: this.data.currentFilter
    };
    storage.set(MIRROR_SETTINGS_KEY, settings);
    wx.showToast({ title: '保存成功', icon: 'success', duration: 1200 });
    setTimeout(() => {
      router.navigateBack();
    }, 1200);
  }
});
