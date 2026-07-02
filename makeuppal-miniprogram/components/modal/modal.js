// components/modal/modal.js
Component({
  options: { styleIsolation: 'apply-shared', multipleSlots: true },

  properties: {
    visible: { type: Boolean, value: false },
    title: { type: String, value: '' },
    showFooter: { type: Boolean, value: false },
    closeOnOverlay: { type: Boolean, value: true }
  },

  data: {
    closing: false
  },

  methods: {
    noop() {},

    onOverlayTap() {
      if (this.properties.closeOnOverlay) {
        this.onClose();
      }
    },

    onClose() {
      this.setData({ closing: true });
      setTimeout(() => {
        this.setData({ closing: false });
        this.triggerEvent('close');
      }, 250);
    }
  }
});
