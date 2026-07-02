// components/fullscreen-modal/fullscreen-modal.js
const systemInfo = require('../../utils/system-info');

Component({
  options: { styleIsolation: 'apply-shared', multipleSlots: true },

  properties: {
    visible: { type: Boolean, value: false },
    title: { type: String, value: '' }
  },

  data: {
    closing: false,
    safeTop: 0
  },

  lifetimes: {
    attached() {
      this.setData({ safeTop: systemInfo.getSafeTop() });
    }
  },

  methods: {
    noop() {},

    onClose() {
      if (this.data.closing) return;
      this.setData({ closing: true });
      setTimeout(() => {
        this.setData({ closing: false });
        this.triggerEvent('close');
      }, 280);
    }
  }
});
