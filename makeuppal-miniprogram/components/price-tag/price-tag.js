// components/price-tag/price-tag.js
Component({
  options: { styleIsolation: 'apply-shared' },

  properties: {
    price: { type: Number, value: 0 },
    originalPrice: { type: Number, value: 0 },
    unit: { type: String, value: '¥' },
    size: { type: String, value: 'md' }
  },

  data: {
    displayPrice: '0',
    displayOriginal: '0',
    showOriginal: false
  },

  observers: {
    'price, originalPrice': function(price, originalPrice) {
      this.setData({
        displayPrice: this.formatPrice(price),
        displayOriginal: this.formatPrice(originalPrice),
        showOriginal: originalPrice > 0 && originalPrice > price
      });
    }
  },

  methods: {
    formatPrice(val) {
      const num = Number(val) || 0;
      // 整数不显示小数，非整数保留两位
      return num % 1 === 0 ? String(num) : num.toFixed(2);
    }
  }
});
