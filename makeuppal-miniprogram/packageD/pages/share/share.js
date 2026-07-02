// packageD/pages/share/share.js - 分享页
const { getImageUrl } = require('../../../data/images');

Page({
  data: {
    title: '发现一个超赞的妆容，快来看看～',
    author: '妆伴用户',
    posterImage: '',
    shareUrl: 'https://makeuppal.example.com/share/template?id=c001'
  },

  onLoad(options) {
    let title = '发现一个超赞的妆容，快来看看～';
    let author = '妆伴用户';
    let image = getImageUrl('coverCreator1');
    let url = this.data.shareUrl;

    if (options && options.id) {
      url = 'https://makeuppal.example.com/share/template?id=' + options.id;
    }
    if (options && options.title) {
      title = decodeURIComponent(options.title);
    }
    if (options && options.author) {
      author = decodeURIComponent(options.author);
    }
    if (options && options.image) {
      image = getImageUrl(options.image);
    }

    this.setData({
      title: title,
      author: author,
      posterImage: image,
      shareUrl: url
    });
  },

  // 朋友圈（小程序无法直接分享到朋友圈，引导用户使用右上角菜单）
  onShareMoments() {
    wx.showToast({
      title: '请点击右上角"..."分享到朋友圈',
      icon: 'none',
      duration: 2000
    });
  },

  onShareQQ() {
    wx.showToast({
      title: '请点击右上角"..."选择分享',
      icon: 'none',
      duration: 2000
    });
  },

  onShareWeibo() {
    wx.setClipboardData({
      data: this.data.title + ' ' + this.data.shareUrl,
      success: () => {
        wx.showToast({ title: '内容已复制，去微博粘贴', icon: 'none' });
      }
    });
  },

  onCopyLink() {
    wx.setClipboardData({
      data: this.data.shareUrl,
      success: () => {
        wx.showToast({ title: '链接已复制', icon: 'success' });
      }
    });
  },

  // 保存海报到相册
  onSaveImage() {
    const url = this.data.posterImage;
    if (!url) {
      wx.showToast({ title: '海报生成中，请稍后', icon: 'none' });
      return;
    }

    wx.showLoading({ title: '保存中...' });

    // 先下载图片到本地临时路径
    wx.downloadFile({
      url: url,
      success: (res) => {
        if (res.statusCode !== 200) {
          wx.hideLoading();
          wx.showToast({ title: '海报下载失败', icon: 'none' });
          return;
        }
        const tempPath = res.tempFilePath;
        // 申请相册写入权限并保存
        wx.saveImageToPhotosAlbum({
          filePath: tempPath,
          success: () => {
            wx.hideLoading();
            wx.showToast({ title: '已保存到相册', icon: 'success' });
          },
          fail: (err) => {
            wx.hideLoading();
            console.error('saveImageToPhotosAlbum failed:', err);
            // 权限被拒绝，引导用户开启
            if (err.errMsg.indexOf('auth') >= 0 || err.errMsg.indexOf('deny') >= 0) {
              wx.showModal({
                title: '提示',
                content: '需要相册写入权限才能保存图片，是否前往设置？',
                success: (modalRes) => {
                  if (modalRes.confirm) {
                    wx.openSetting();
                  }
                }
              });
            } else {
              wx.showToast({ title: '保存失败，请重试', icon: 'none' });
            }
          }
        });
      },
      fail: (err) => {
        wx.hideLoading();
        console.error('downloadFile failed:', err);
        wx.showToast({ title: '海报下载失败', icon: 'none' });
      }
    });
  },

  // 微信好友分享（button open-type="share" 触发）
  onShareAppMessage() {
    return {
      title: this.data.title,
      path: '/packageD/pages/share/share?id=c001&title=' + encodeURIComponent(this.data.title) + '&author=' + encodeURIComponent(this.data.author),
      imageUrl: this.data.posterImage
    };
  }
});
