// utils/clipboard.js - 剪贴板封装

function copy(text, successMsg) {
  wx.setClipboardData({
    data: text,
    success: () => {
      if (successMsg) {
        wx.showToast({ title: successMsg, icon: 'success' });
      }
    }
  });
}

function get() {
  return new Promise((resolve) => {
    wx.getClipboardData({
      success: (res) => resolve(res.data),
      fail: () => resolve('')
    });
  });
}

module.exports = { copy, get };
