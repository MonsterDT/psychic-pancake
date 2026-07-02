// packageA/pages/address-edit/address-edit.js
const storage = require('../../../utils/storage');
const router = require('../../../utils/router');

Page({
  data: {
    isEdit: false,
    editId: '',
    form: {
      name: '',
      phone: '',
      region: [],
      detail: '',
      isDefault: false
    },
    regionText: '请选择省/市/区'
  },

  onLoad(options) {
    if (options && options.id) {
      const addresses = storage.getAddresses();
      const target = addresses.find(function (a) { return a.id === options.id; });
      if (target) {
        const region = target.region ? target.region.split(' ') : [];
        this.setData({
          isEdit: true,
          editId: options.id,
          form: {
            name: target.name,
            phone: target.phone,
            region: region,
            detail: target.detail,
            isDefault: !!target.isDefault
          },
          regionText: region.length > 0 ? region.join(' ') : '请选择省/市/区'
        });
      }
    }
  },

  onNameInput(e) {
    this.setData({ 'form.name': e.detail.value });
  },

  onPhoneInput(e) {
    this.setData({ 'form.phone': e.detail.value });
  },

  onDetailInput(e) {
    this.setData({ 'form.detail': e.detail.value });
  },

  onRegionChange(e) {
    const region = e.detail.value;
    this.setData({
      'form.region': region,
      regionText: region.join(' ')
    });
  },

  onDefaultChange(e) {
    this.setData({ 'form.isDefault': e.detail.value });
  },

  onSave() {
    const form = this.data.form;
    if (!form.name || !form.name.trim()) {
      wx.showToast({ title: '请输入姓名', icon: 'none' });
      return;
    }
    if (!form.phone || !/^1\d{10}$/.test(form.phone)) {
      wx.showToast({ title: '请输入正确的手机号', icon: 'none' });
      return;
    }
    if (!form.region || form.region.length === 0) {
      wx.showToast({ title: '请选择所在地区', icon: 'none' });
      return;
    }
    if (!form.detail || !form.detail.trim()) {
      wx.showToast({ title: '请输入详细地址', icon: 'none' });
      return;
    }

    const addresses = storage.getAddresses();
    const regionStr = form.region.join(' ');

    let savedId = '';
    if (this.data.isEdit) {
      // 编辑：更新现有记录
      const editId = this.data.editId;
      savedId = editId;
      const idx = addresses.findIndex(function (a) { return a.id === editId; });
      if (idx > -1) {
        addresses[idx].name = form.name.trim();
        addresses[idx].phone = form.phone;
        addresses[idx].region = regionStr;
        addresses[idx].detail = form.detail.trim();
        addresses[idx].isDefault = form.isDefault;
      }
    } else {
      // 新增
      const newAddr = {
        id: 'addr_' + Date.now(),
        name: form.name.trim(),
        phone: form.phone,
        region: regionStr,
        detail: form.detail.trim(),
        isDefault: form.isDefault
      };
      savedId = newAddr.id;
      addresses.push(newAddr);
    }

    // 若设为默认，取消其他默认
    if (form.isDefault) {
      addresses.forEach(function (a) {
        if (a.id !== savedId) a.isDefault = false;
      });
    }

    storage.setAddresses(addresses);
    wx.showToast({ title: '保存成功', icon: 'success' });
    setTimeout(function () {
      router.navigateBack(1);
    }, 600);
  }
});
