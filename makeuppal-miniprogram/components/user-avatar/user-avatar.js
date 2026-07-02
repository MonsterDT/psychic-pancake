// components/user-avatar/user-avatar.js
Component({
  options: { styleIsolation: 'apply-shared' },

  properties: {
    src: { type: String, value: '' },
    name: { type: String, value: '' },
    size: { type: String, value: 'md' },
    showName: { type: Boolean, value: false }
  },

  data: {
    initial: ''
  },

  observers: {
    'name': function(name) {
      this.setData({
        initial: this.getInitial(name)
      });
    }
  },

  lifetimes: {
    attached() {
      this.setData({ initial: this.getInitial(this.properties.name) });
    }
  },

  methods: {
    getInitial(name) {
      if (!name) return '';
      const trimmed = String(name).trim();
      if (!trimmed) return '';
      // 取第一个字符（支持中英文）
      return trimmed.charAt(0).toUpperCase();
    },
    onImageError(e) {
      this.triggerEvent('error', e);
    }
  }
});
