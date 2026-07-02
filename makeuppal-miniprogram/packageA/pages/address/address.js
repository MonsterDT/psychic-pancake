// packageA/pages/address/address.js
const storage = require('../../../utils/storage');
const router = require('../../../utils/router');

Page({
  data: {
    addresses: [],
    isEmpty: false
  },

  onShow() {
    this.loadAddresses();
  },

  loadAddresses() {
    const addresses = storage.getAddresses();
    // 确保默认地址排在最前
    addresses.sort(function (a, b) {
      if (a.isDefault && !b.isDefault) return -1;
      if (!a.isDefault && b.isDefault) return 1;
      return 0;
    });
    this.setData({
      addresses: addresses,
      isEmpty: addresses.length === 0
    });
  },

  onAdd() {
    router.navigateTo('/packageA/pages/address-edit/address-edit');
  },

  onEdit(e) {
    const id = e.currentTarget.dataset.id;
    router.navigateTo('/packageA/pages/address-edit/address-edit', { id: id });
  },

  onDelete(e) {
    const id = e.currentTarget.dataset.id;
    const self = this;
    wx.showModal({
      title: '提示',
      content: '确定要删除该地址吗？',
      confirmColor: '#C4956A',
      success: function (res) {
        if (res.confirm) {
          const addresses = self.data.addresses.filter(function (a) {
            return a.id !== id;
          });
          storage.setAddresses(addresses);
          self.setData({ addresses: addresses, isEmpty: addresses.length === 0 });
          wx.showToast({ title: '已删除', icon: 'none' });
        }
      }
    });
  },

  setDefault(e) {
    const id = e.currentTarget.dataset.id;
    const addresses = this.data.addresses.map(function (a) {
      a.isDefault = a.id === id;
      return a;
    });
    storage.setAddresses(addresses);
    this.loadAddresses();
    wx.showToast({ title: '已设为默认', icon: 'success' });
  }
});
