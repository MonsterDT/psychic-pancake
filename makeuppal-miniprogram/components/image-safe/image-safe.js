// components/image-safe/image-safe.js
const { getImageUrl } = require('../../data/images');

Component({
  options: {
    styleIsolation: 'apply-shared'
  },

  properties: {
    src: { type: String, value: '' },
    mode: { type: String, value: 'aspectFill' },
    lazyLoad: { type: Boolean, value: true },
    width: { type: String, value: '' },
    height: { type: String, value: '' },
    placeholderText: { type: String, value: '图片加载中' }
  },

  data: {
    currentSrc: '',
    loaded: false,
    failed: false
  },

  lifetimes: {
    attached() {
      this.updateSrc();
    }
  },

  observers: {
    'src': function(val) {
      this.updateSrc();
    }
  },

  methods: {
    updateSrc() {
      const src = this.properties.src;
      if (!src) {
        this.setData({ failed: true, currentSrc: '' });
        return;
      }
      // 如果是完整URL直接使用，否则通过getImageUrl转换
      let finalSrc = src;
      if (src.indexOf('http') === 0) {
        finalSrc = src;
      } else if (src.indexOf('assets/') === 0) {
        // assets路径在demo中是本地路径，小程序中用图片URL替代
        finalSrc = getImageUrl(src.split('/').pop().replace('.jpg', '').replace('.png', '')) || getImageUrl('coverCreator1');
      } else {
        // 通过image key查找
        finalSrc = getImageUrl(src) || src;
      }
      this.setData({ currentSrc: finalSrc, loaded: false, failed: false });
    },

    onLoad(e) {
      this.setData({ loaded: true, failed: false });
      this.triggerEvent('load', e);
    },

    onError(e) {
      console.warn('图片加载失败:', this.data.currentSrc);
      this.setData({ failed: true, loaded: false });
      this.triggerEvent('error', e);
    }
  }
});
