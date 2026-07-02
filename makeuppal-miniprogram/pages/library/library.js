// pages/library/library.js - 颜库页
const router = require('../../utils/router');
const storage = require('../../utils/storage');
const { LIBRARY_CATS } = require('../../utils/constants');
const { libraryFeed } = require('../../data/library');
const { makeupLibraryData, findTemplateById } = require('../../data/library-extra');
const { librarySubCats } = require('../../data/library-subcats');
const { getImageUrl } = require('../../data/images');

Page({
  data: {
    // 当前模式：card(卡片) / waterfall(瀑布流)
    currentMode: 'card',
    // 当前类目
    currentCat: 'daren',
    // 类目列表
    catTabs: LIBRARY_CATS,
    // 子类目列表
    subCatList: [],
    // 当前子类目
    currentSubCat: '全部',
    // 子类目栏是否显示
    showSubTabs: false,
    // 当前展示的数据列表
    currentItems: [],
    // 卡片模式：当前卡片索引
    currentCardIndex: 0,
    // 卡片模式：当前卡片数据
    currentCard: null,
    // 卡片模式：下一张卡片数据（预览）
    nextCard: null,
    // 卡片位移
    cardX: 0,
    cardY: 0,
    // 卡片是否正在动画中
    cardAnimating: false,
    // 滑动方向标记
    swipeDirection: '',
    // 瀑布流左列
    waterfallLeft: [],
    // 瀑布流右列
    waterfallRight: [],
    // 搜索关键词
    searchKeyword: ''
  },

  onLoad() {
    this.loadSubCats(this.data.currentCat);
    this.loadItems();
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 1 });
    }
    // 进入颜库默认卡片模式，子类目栏隐藏
    if (this.data.currentMode === 'card') {
      this.setData({ showSubTabs: false });
    }
  },

  // 加载子类目
  loadSubCats(catKey) {
    const subs = librarySubCats[catKey] || ['全部'];
    this.setData({ subCatList: subs, currentSubCat: '全部' });
  },

  // 获取数据（统一数据源，卡片和瀑布流共用）
  getLibraryItems(catKey, subCat) {
    const catConfig = LIBRARY_CATS.find(c => c.key === catKey);
    if (!catConfig) return [];

    // 从 libraryFeed 取数据（按 dataKey）
    let items = [];
    const feedData = libraryFeed[catConfig.dataKey];
    if (Array.isArray(feedData)) {
      items = feedData.map(item => this.normalizeFeedItem(item, catKey));
    }

    // 从 makeupLibraryData 取数据（按 catKey）
    const extraData = makeupLibraryData[catKey];
    if (Array.isArray(extraData)) {
      items = items.concat(extraData.map(item => this.normalizeExtraItem(item, catKey)));
    }

    // 子类目过滤
    if (subCat && subCat !== '全部') {
      items = items.filter(item => {
        const tags = item.tags || [];
        const occasion = item.occasion || item.category || '';
        return tags.some(t => t.indexOf(subCat) >= 0 || subCat.indexOf(t) >= 0) ||
               occasion.indexOf(subCat) >= 0;
      });
    }

    return items;
  },

  // 标准化 libraryFeed 数据项
  normalizeFeedItem(item, catKey) {
    return {
      id: item.id,
      name: item.title || item.name || item.question || '未知妆容',
      desc: item.summary || item.description || item.desc || '',
      image: item.coverImage ? getImageUrl(item.coverImage) : (item.image || getImageUrl('coverCreator1')),
      author: item.creatorName || item.authorName || '',
      avatar: item.creatorAvatar || item.authorAvatar || '',
      likes: item.likes || 0,
      tags: item.tags || (item.tag ? [item.tag] : []),
      occasion: item.occasion || item.category || item.dynasty || item.scene || '',
      difficulty: item.difficulty || 1,
      price: item.priceGP ? (item.priceGP + ' GP') : '免费',
      catKey: catKey
    };
  },

  // 标准化 makeupLibraryData 数据项
  normalizeExtraItem(item, catKey) {
    return {
      id: item.id,
      name: item.name || item.title || '未知妆容',
      desc: item.desc || item.summary || item.description || '',
      image: item.image || getImageUrl('coverCreator1'),
      author: item.author || '',
      avatar: '',
      likes: item.likes || 0,
      tags: item.tags || [],
      occasion: item.occasion || item.category || '',
      difficulty: item.difficulty || 1,
      price: '免费',
      catKey: catKey
    };
  },

  // 加载数据并渲染
  loadItems() {
    const items = this.getLibraryItems(this.data.currentCat, this.data.currentSubCat);
    if (this.data.currentMode === 'card') {
      this.setData({
        currentItems: items,
        currentCardIndex: 0,
        currentCard: items[0] || null,
        nextCard: items[1] || null,
        cardX: 0,
        cardY: 0,
        swipeDirection: ''
      });
    } else {
      // 瀑布流分两列
      const left = [];
      const right = [];
      items.forEach((item, idx) => {
        if (idx % 2 === 0) left.push(item);
        else right.push(item);
      });
      this.setData({ currentItems: items, waterfallLeft: left, waterfallRight: right });
    }
  },

  // 切换模式（卡片/瀑布流）
  switchMode(e) {
    const mode = e.currentTarget.dataset.mode;
    if (mode === this.data.currentMode) return;
    this.setData({
      currentMode: mode,
      showSubTabs: mode === 'waterfall',
      cardX: 0,
      cardY: 0
    });
    this.loadItems();
  },

  // 切换类目
  switchCat(e) {
    const cat = e.currentTarget.dataset.cat;
    if (cat === this.data.currentCat) return;
    this.loadSubCats(cat);
    this.setData({ currentCat: cat });
    this.loadItems();
  },

  // 切换子类目
  switchSub(e) {
    const sub = e.currentTarget.dataset.sub;
    this.setData({ currentSubCat: sub });
    this.loadItems();
  },

  // 卡片拖动变化
  onCardChange(e) {
    if (this.data.cardAnimating) return;
    const x = e.detail.x;
    if (x > 20) {
      this.setData({ swipeDirection: 'right' });
    } else if (x < -20) {
      this.setData({ swipeDirection: 'left' });
    } else {
      this.setData({ swipeDirection: '' });
    }
  },

  // 卡片拖动结束
  onCardTouchEnd() {
    if (this.data.cardAnimating) return;
    const x = this.data.cardX;
    if (x > 20) {
      // 右滑喜欢
      this.doSwipe('right');
    } else if (x < -20) {
      // 左滑不喜欢
      this.doSwipe('left');
    } else {
      // 回到原位
      this.setData({ cardX: 0, cardY: 0, swipeDirection: '' });
    }
  },

  // 点击喜欢按钮
  onLike() {
    this.doSwipe('right');
  },

  // 点击不喜欢按钮
  onDislike() {
    this.doSwipe('left');
  },

  // 执行滑动
  doSwipe(direction) {
    if (this.data.cardAnimating || !this.data.currentCard) return;

    const card = this.data.currentCard;
    if (direction === 'right') {
      // 喜欢 - 收藏
      this.addFavorite(card);
    }

    // 动画飞出
    this.setData({
      cardAnimating: true,
      cardX: direction === 'right' ? 500 : -500,
      cardY: 0
    });

    // 延迟切换下一张
    setTimeout(() => {
      const nextIndex = this.data.currentCardIndex + 1;
      const items = this.data.currentItems;
      if (nextIndex < items.length) {
        this.setData({
          currentCardIndex: nextIndex,
          currentCard: items[nextIndex],
          nextCard: items[nextIndex + 1] || null,
          cardX: 0,
          cardY: 0,
          cardAnimating: false,
          swipeDirection: ''
        });
      } else {
        // 没有更多了
        this.setData({
          currentCard: null,
          nextCard: null,
          cardX: 0,
          cardY: 0,
          cardAnimating: false,
          swipeDirection: ''
        });
        wx.showToast({ title: '已浏览全部', icon: 'none' });
      }
    }, 300);
  },

  // 收藏模板（多重登录验证）
  addFavorite(card) {
    // 多重登录验证
    const isLoggedIn = wx.getStorageSync('isLoggedIn') ||
                       wx.getStorageSync('userName') ||
                       getApp().globalData.isLoggedIn;
    if (!isLoggedIn) {
      wx.showToast({ title: '请先登录', icon: 'none' });
      return;
    }
    storage.addFavoriteTemplate(card.id);
    wx.showToast({ title: '已收藏: ' + card.name, icon: 'success', duration: 1500 });
  },

  // 回看上一张
  onRewind() {
    if (this.data.currentCardIndex === 0) {
      wx.showToast({ title: '没有更多了', icon: 'none' });
      return;
    }
    const prevIndex = this.data.currentCardIndex - 1;
    const items = this.data.currentItems;
    this.setData({
      currentCardIndex: prevIndex,
      currentCard: items[prevIndex],
      nextCard: items[prevIndex + 1] || null,
      cardX: 0,
      cardY: 0
    });
  },

  // 点击卡片（跳转详情，滑动距离>20px时忽略）
  onCardTap() {
    if (this.data.cardAnimating) return;
    // 检查滑动距离
    if (Math.abs(this.data.cardX) > 20) return;
    const card = this.data.currentCard;
    if (card) {
      router.openTemplateDetail(card.id);
    }
  },

  // 瀑布流卡片点击
  onWaterfallTap(e) {
    const id = e.currentTarget.dataset.id;
    router.openTemplateDetail(id);
  },

  // 点击搜索框
  onSearchTap() {
    router.openSearch();
  },

  // 点击发布按钮
  onPublishTap() {
    router.openCreatorCenter();
  },

  // 美妆闺蜜FAB
  onCompanionFabTap() {
    router.openCompanionChat();
  },

  onShareAppMessage() {
    return { title: '妆伴颜库 - 发现灵感妆容', path: '/pages/library/library' };
  }
});
