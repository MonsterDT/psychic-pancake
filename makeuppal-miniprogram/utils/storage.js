// utils/storage.js - 封装wx.storage，替代localStorage

const { STORAGE_KEYS } = require('./constants');

// 同步读取
function get(key, defaultVal = null) {
  try {
    const val = wx.getStorageSync(key);
    if (val === '' || val === undefined || val === null) {
      return defaultVal;
    }
    return val;
  } catch (e) {
    console.error('storage get error:', key, e);
    return defaultVal;
  }
}

// 同步写入
function set(key, value) {
  try {
    wx.setStorageSync(key, value);
  } catch (e) {
    console.error('storage set error:', key, e);
  }
}

// 删除
function remove(key) {
  try {
    wx.removeStorageSync(key);
  } catch (e) {
    console.error('storage remove error:', key, e);
  }
}

// 购物车操作
function getCart() {
  return get(STORAGE_KEYS.CART_ITEMS, []);
}

function setCart(items) {
  set(STORAGE_KEYS.CART_ITEMS, items);
  // 更新全局购物车数量
  const app = getApp();
  if (app && app.updateCartCount) {
    app.updateCartCount();
  }
}

function addToCart(product, qty = 1) {
  const cart = getCart();
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.qty = (existing.qty || 1) + qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      img: product.img || product.image,
      qty: qty
    });
  }
  setCart(cart);
  return cart;
}

function removeFromCart(productId) {
  const cart = getCart().filter(item => item.id !== productId);
  setCart(cart);
  return cart;
}

function updateCartQty(productId, qty) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (item) {
    if (qty <= 0) {
      return removeFromCart(productId);
    }
    item.qty = qty;
    setCart(cart);
  }
  return cart;
}

function clearCart() {
  setCart([]);
}

// 收藏模板操作
function getFavoriteTemplates() {
  return get(STORAGE_KEYS.FAVORITE_TEMPLATES, []);
}

function addFavoriteTemplate(templateId) {
  const favs = getFavoriteTemplates();
  if (!favs.includes(templateId)) {
    favs.push(templateId);
    set(STORAGE_KEYS.FAVORITE_TEMPLATES, favs);
  }
  return favs;
}

function removeFavoriteTemplate(templateId) {
  const favs = getFavoriteTemplates().filter(id => id !== templateId);
  set(STORAGE_KEYS.FAVORITE_TEMPLATES, favs);
  return favs;
}

function isFavorite(templateId) {
  return getFavoriteTemplates().includes(templateId);
}

// 搜索历史
function getSearchHistory() {
  return get(STORAGE_KEYS.SEARCH_HISTORY, []);
}

function addSearchHistory(keyword) {
  let history = getSearchHistory().filter(h => h !== keyword);
  history.unshift(keyword);
  if (history.length > 20) history = history.slice(0, 20);
  set(STORAGE_KEYS.SEARCH_HISTORY, history);
  return history;
}

function clearSearchHistory() {
  remove(STORAGE_KEYS.SEARCH_HISTORY);
}

// 地址操作
function getAddresses() {
  return get(STORAGE_KEYS.ADDRESSES, []);
}

function setAddresses(addresses) {
  set(STORAGE_KEYS.ADDRESSES, addresses);
}

module.exports = {
  get, set, remove,
  getCart, setCart, addToCart, removeFromCart, updateCartQty, clearCart,
  getFavoriteTemplates, addFavoriteTemplate, removeFavoriteTemplate, isFavorite,
  getSearchHistory, addSearchHistory, clearSearchHistory,
  getAddresses, setAddresses
};
