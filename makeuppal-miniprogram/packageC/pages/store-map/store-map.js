// packageC/pages/store-map/store-map.js - 门店地图
Page({
  data: {
    // 地图中心（上海人民广场附近）
    center: {
      longitude: 121.4737,
      latitude: 31.2304
    },
    scale: 13,
    markers: [
      {
        id: 1,
        latitude: 31.2304,
        longitude: 121.4737,
        title: '妆伴·人民广场旗舰店',
        iconPath: '',
        width: 28,
        height: 28
      },
      {
        id: 2,
        latitude: 31.2365,
        longitude: 121.4805,
        title: '妆伴·南京东路体验店',
        width: 28,
        height: 28
      },
      {
        id: 3,
        latitude: 31.2242,
        longitude: 121.4655,
        title: '妆伴·淮海路精品店',
        width: 28,
        height: 28
      }
    ],
    // 门店详情
    stores: [
      { id: 1, name: '妆伴·人民广场旗舰店', address: '上海市黄浦区南京西路 188 号', distance: '0.5 km', latitude: 31.2304, longitude: 121.4737 },
      { id: 2, name: '妆伴·南京东路体验店', address: '上海市黄浦区南京东路 300 号', distance: '0.9 km', latitude: 31.2365, longitude: 121.4805 },
      { id: 3, name: '妆伴·淮海路精品店', address: '上海市黄浦区淮海中路 580 号', distance: '1.2 km', latitude: 31.2242, longitude: 121.4655 }
    ],
    activeStore: null
  },

  onLoad() {
    // 默认选中第一个门店
    this.setData({ activeStore: this.data.stores[0] });
  },

  // 点击地图标记
  onMarkerTap(e) {
    const markerId = e.detail.markerId || e.markerId;
    const store = this.data.stores.find(function (s) {
      return s.id === markerId;
    });
    if (store) {
      this.setData({
        activeStore: store,
        center: { latitude: store.latitude, longitude: store.longitude }
      });
    }
  },

  // 导航
  onNavigateTap() {
    const store = this.data.activeStore;
    if (!store) return;
    wx.openLocation({
      latitude: store.latitude,
      longitude: store.longitude,
      name: store.name,
      address: store.address,
      scale: 16,
      fail: function () {
        wx.showToast({ title: '打开导航失败', icon: 'none' });
      }
    });
  },

  onShareAppMessage() {
    return {
      title: '妆伴门店地图 - 找到离你最近的美妆体验店',
      path: '/packageC/pages/store-map/store-map'
    };
  }
});
