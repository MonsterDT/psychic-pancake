// components/companion-fab/companion-fab.js
Component({
  options: { styleIsolation: 'apply-shared' },

  properties: {
    bottom: { type: String, value: '70px' },
    right: { type: String, value: '16px' }
  },

  data: {
    posStyle: ''
  },

  observers: {
    'bottom, right': function(bottom, right) {
      this.setData({
        posStyle: 'bottom:' + bottom + ';right:' + right + ';'
      });
    }
  },

  lifetimes: {
    attached() {
      this.setData({
        posStyle: 'bottom:' + this.properties.bottom + ';right:' + this.properties.right + ';'
      });
    }
  },

  methods: {
    onTap() {
      this.triggerEvent('tap');
    },
    noop() {}
  }
});
