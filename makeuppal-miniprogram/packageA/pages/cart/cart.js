// packageA/pages/cart/cart.js
const storage = require('../../../utils/storage');
const router = require('../../../utils/router');

Page({
  data: {
    cartItems: [],
    allChecked: false,
    totalCount: 0,
    totalPrice: 0,
    isEmpty: false
  },

  onShow() {
    this.loadCart();
  },

  loadCart() {
    const cart = storage.getCart();
    // 为每条记录附加 checked 状态（首次默认选中）
    const items = cart.map(function (item) {
      return {
        id: item.id,
        name: item.name,
        brand: item.brand,
        price: item.price,
        img: item.img,
        qty: item.qty,
        checked: item.checked !== false
      };
    });
    this.setData({ cartItems: items, isEmpty: items.length === 0 });
    this.recalc();
  },

  recalc() {
    const items = this.data.cartItems;
    let count = 0;
    let total = 0;
    let allChecked = items.length > 0;
    items.forEach(function (item) {
      if (item.checked) {
        count += item.qty;
        total += item.qty * item.price;
      }
      if (!item.checked) allChecked = false;
    });
    this.setData({
      totalCount: count,
      totalPrice: total.toFixed(2),
      allChecked: allChecked
    });
  },

  toggleItem(e) {
    const id = e.currentTarget.dataset.id;
    const items = this.data.cartItems;
    const item = items.find(function (i) { return i.id === id; });
    if (item) item.checked = !item.checked;
    this.setData({ cartItems: items });
    this.recalc();
  },

  toggleAll() {
    const allChecked = !this.data.allChecked;
    const items = this.data.cartItems.map(function (i) {
      i.checked = allChecked;
      return i;
    });
    this.setData({ cartItems: items, allChecked: allChecked });
    this.recalc();
  },

  decQty(e) {
    const id = e.currentTarget.dataset.id;
    const items = this.data.cartItems;
    const item = items.find(function (i) { return i.id === id; });
    if (!item) return;
    const newQty = item.qty - 1;
    if (newQty <= 0) {
      this.removeItem(id);
      return;
    }
    item.qty = newQty;
    storage.updateCartQty(id, newQty);
    this.setData({ cartItems: items });
    this.recalc();
  },

  incQty(e) {
    const id = e.currentTarget.dataset.id;
    const items = this.data.cartItems;
    const item = items.find(function (i) { return i.id === id; });
    if (!item) return;
    const newQty = item.qty + 1;
    item.qty = newQty;
    storage.updateCartQty(id, newQty);
    this.setData({ cartItems: items });
    this.recalc();
  },

  onSwipeDelete(e) {
    const id = e.currentTarget.dataset.id;
    const self = this;
    wx.showModal({
      title: '提示',
      content: '确定要删除该商品吗？',
      confirmColor: '#C4956A',
      success: function (res) {
        if (res.confirm) {
          self.removeItem(id);
        }
      }
    });
  },

  removeItem(id) {
    storage.removeFromCart(id);
    const items = this.data.cartItems.filter(function (i) { return i.id !== id; });
    this.setData({ cartItems: items, isEmpty: items.length === 0 });
    this.recalc();
    wx.showToast({ title: '已删除', icon: 'none' });
  },

  onCheckout() {
    if (this.data.totalCount === 0) {
      wx.showToast({ title: '请选择商品', icon: 'none' });
      return;
    }
    wx.showToast({ title: '正在结算', icon: 'none' });
  },

  goShopping() {
    router.switchTab('mall');
  }
});
