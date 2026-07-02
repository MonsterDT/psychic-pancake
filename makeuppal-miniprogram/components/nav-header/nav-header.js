// components/nav-header/nav-header.js
const systemInfo = require('../../utils/system-info');

Component({
  options: { styleIsolation: 'apply-shared' },

  properties: {
    title: { type: String, value: '' },
    showBack: { type: Boolean, value: true },
    rightText: { type: String, value: '' },
    rightIcon: { type: String, value: '' }
  },

  data: {
    safeTop: 0,
    navHeight: 44
  },

  lifetimes: {
    attached() {
      const safeTop = systemInfo.getSafeTop();
      this.setData({
        safeTop: safeTop,
        navHeight: 44 + safeTop
      });
    }
  },

  methods: {
    onBack() {
      this.triggerEvent('back');
      const pages = getCurrentPages();
      if (pages.length > 1) {
        wx.navigateBack({ delta: 1 });
      } else {
        wx.switchTab({ url: '/pages/home/home' });
      }
    },

    onRight() {
      this.triggerEvent('right');
    }
  }
});
