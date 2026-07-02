// custom-tab-bar/index.js - 自定义底部导航栏
const { TAB_BAR } = require('../utils/constants');

Component({
  options: {
    styleIsolation: 'apply-shared'
  },

  data: {
    selected: 0,
    list: TAB_BAR.tabs,
    // tab页路径映射（用于switchTab）
    pathMap: {
      'home': '/pages/home/home',
      'library': '/pages/library/library',
      'mirror': '/pages/mirror/mirror',
      'mall': '/pages/mall/mall',
      'profile': '/pages/profile/profile'
    }
  },

  methods: {
    // 切换tab
    switchTab(e) {
      const key = e.currentTarget.dataset.key;
      if (!key) return;
      const path = this.data.pathMap[key];
      if (!path) return;

      // 当前已选中则不跳转
      const currentIndex = this.data.list.findIndex(t => t.key === key);
      if (currentIndex === this.data.selected) return;

      // 更新选中态
      this.setData({ selected: currentIndex });

      // 跳转
      wx.switchTab({ url: path });
    }
  }
});
