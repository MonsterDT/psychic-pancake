// components/tag-chip/tag-chip.js
Component({
  options: { styleIsolation: 'apply-shared' },

  properties: {
    text: { type: String, value: '' },
    type: { type: String, value: 'default' },
    closable: { type: Boolean, value: false },
    size: { type: String, value: 'md' }
  },

  methods: {
    onClose(e) {
      this.triggerEvent('close', { text: this.properties.text });
    },
    noop() {}
  }
});
