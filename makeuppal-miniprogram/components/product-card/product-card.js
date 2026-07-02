// components/product-card/product-card.js
Component({
  options: { styleIsolation: 'apply-shared' },

  properties: {
    product: { type: Object, value: null }
  },

  data: {
    id: '',
    name: '',
    brand: '',
    price: 0,
    originalPrice: 0,
    img: '',
    sales: 0,
    tag: '',
    desc: '',
    salesText: ''
  },

  observers: {
    'product': function(product) {
      if (!product || typeof product !== 'object') {
        this.resetData();
        return;
      }
      // 兼容 img / image 两种字段
      const img = product.img || product.image || '';
      this.setData({
        id: product.id || '',
        name: product.name || '',
        brand: product.brand || '',
        price: Number(product.price) || 0,
        originalPrice: Number(product.originalPrice) || 0,
        img: img,
        sales: Number(product.sales) || 0,
        tag: product.tag || '',
        desc: product.desc || '',
        salesText: this.formatSales(Number(product.sales) || 0)
      });
    }
  },

  lifetimes: {
    attached() {
      const product = this.properties.product;
      if (product) {
        const img = product.img || product.image || '';
        this.setData({
          id: product.id || '',
          name: product.name || '',
          brand: product.brand || '',
          price: Number(product.price) || 0,
          originalPrice: Number(product.originalPrice) || 0,
          img: img,
          sales: Number(product.sales) || 0,
          tag: product.tag || '',
          desc: product.desc || '',
          salesText: this.formatSales(Number(product.sales) || 0)
        });
      }
    }
  },

  methods: {
    resetData() {
      this.setData({
        id: '', name: '', brand: '', price: 0,
        originalPrice: 0, img: '', sales: 0,
        tag: '', desc: '', salesText: ''
      });
    },

    formatSales(num) {
      if (!num || num <= 0) return '';
      if (num >= 10000) {
        return (num / 10000).toFixed(1).replace(/\.0$/, '') + '万已售';
      }
      return num + '已售';
    },

    onTap() {
      this.triggerEvent('tap', { id: this.data.id, product: this.properties.product });
    },

    onAddCart(e) {
      // 阻止事件冒泡到卡片 onTap
      this.triggerEvent('addcart', { id: this.data.id, product: this.properties.product });
    },

    noop() {}
  }
});
