// packageC/pages/style-pref/style-pref.js - 风格偏好设置
const storage = require('../../../utils/storage');
const router = require('../../../utils/router');

const STORAGE_KEY = 'userStylePref';

Page({
  data: {
    styles: [
      { key: 'daily', label: '日常', selected: false },
      { key: 'sweet', label: '甜美', selected: false },
      { key: 'elegant', label: '优雅', selected: false },
      { key: 'cool', label: '酷飒', selected: false },
      { key: 'retro', label: '复古', selected: false },
      { key: 'guofeng', label: '国风', selected: false },
      { key: 'korean', label: '韩系', selected: false },
      { key: 'western', label: '欧美', selected: false },
      { key: 'fresh', label: '清新', selected: false },
      { key: 'sexy', label: '轻熟', selected: false },
      { key: 'creative', label: '创意', selected: false },
      { key: 'minimal', label: '极简', selected: false }
    ]
  },

  onLoad() {
    // 读取已保存的偏好
    const saved = storage.get(STORAGE_KEY, []);
    if (Array.isArray(saved) && saved.length) {
      const map = {};
      saved.forEach(function (k) { map[k] = true; });
      const list = this.data.styles.map(function (s) {
        return { key: s.key, label: s.label, selected: !!map[s.key] };
      });
      this.setData({ styles: list });
    }
  },

  // 多选切换
  onStyleTap(e) {
    const idx = e.currentTarget.dataset.index;
    const list = this.data.styles.slice();
    list[idx] = {
      key: list[idx].key,
      label: list[idx].label,
      selected: !list[idx].selected
    };
    this.setData({ styles: list });
  },

  // 保存
  onSave() {
    const selected = this.data.styles
      .filter(function (s) { return s.selected; })
      .map(function (s) { return s.key; });
    if (selected.length === 0) {
      wx.showToast({ title: '请至少选择1个风格', icon: 'none' });
      return;
    }
    storage.set(STORAGE_KEY, selected);
    wx.showToast({ title: '保存成功', icon: 'success' });
    const that = this;
    setTimeout(function () {
      router.navigateBack();
    }, 1000);
  },

  onShareAppMessage() {
    return {
      title: '妆伴 - 设置你的美妆风格偏好',
      path: '/packageC/pages/style-pref/style-pref'
    };
  }
});
