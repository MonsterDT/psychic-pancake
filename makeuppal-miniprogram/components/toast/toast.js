// components/toast/toast.js
Component({
  options: { styleIsolation: 'apply-shared' },
  properties: {
    visible: { type: Boolean, value: false },
    message: { type: String, value: '' },
    type: { type: String, value: 'default' },
    icon: { type: String, value: '' },
    duration: { type: Number, value: 2000 }
  },
  data: { animationData: {} },
  observers: {
    'visible': function(val) {
      if (val) {
        this.showToast();
      }
    }
  },
  methods: {
    showToast() {
      const animation = wx.createAnimation({
        duration: 200,
        timingFunction: 'ease'
      });
      animation.opacity(1).step();
      this.setData({ animationData: animation.export() });

      setTimeout(() => {
        animation.opacity(0).step();
        this.setData({ animationData: animation.export() });
        setTimeout(() => {
          this.triggerEvent('close');
        }, 200);
      }, this.properties.duration);
    }
  }
});
