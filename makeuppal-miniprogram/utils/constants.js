// utils/constants.js - 常量定义

// tabBar配置
const TAB_BAR = {
  tabs: [
    { key: 'home', text: '首页', icon: '🏠' },
    { key: 'library', text: '颜库', icon: '📚' },
    { key: 'mirror', text: '焕新', icon: '✨' },
    { key: 'mall', text: '市集', icon: '🛍️' },
    { key: 'profile', text: '我的', icon: '👤' }
  ],
  tabPages: ['pages/home/home', 'pages/library/library', 'pages/mirror/mirror', 'pages/mall/mall', 'pages/profile/profile']
};

// 颜库类目映射 (daren=creators, jubu=tutorials, qa=qa, gufeng=guofeng, yinfa=silver, dapai=brands, star=celebrities)
const LIBRARY_CATS = [
  { key: 'daren', label: '达人精选', dataKey: 'creators' },
  { key: 'jubu', label: '局部拆解', dataKey: 'tutorials' },
  { key: 'qa', label: '美妆问答', dataKey: 'qa' },
  { key: 'gufeng', label: '国风专区', dataKey: 'guofeng' },
  { key: 'yinfa', label: '银发专区', dataKey: 'silver' },
  { key: 'dapai', label: '大牌精选', dataKey: 'brands' },
  { key: 'star', label: '明星同款', dataKey: 'celebrities' }
];

// 商城分类
const MARKET_CATS = [
  { key: 'kouhong', label: '口红', icon: '💄' },
  { key: 'difen', label: '底粉', icon: '🧴' },
  { key: 'yanying', label: '眼影', icon: '👁️' },
  { key: 'saihong', label: '腮红', icon: '🌸' },
  { key: 'xiaomian', label: '小面', icon: '✏️' },
  { key: 'huzhuang', label: '护肤', icon: '🌿' }
];

// 订单状态
const ORDER_STATUS = {
  PENDING_PAY: 'pending_pay',      // 待付款
  PENDING_SHIP: 'pending_ship',    // 待发货
  PENDING_RECEIVE: 'pending_receive', // 待收货
  COMPLETED: 'completed',          // 已完成
  CANCELLED: 'cancelled'           // 已取消
};

// localStorage keys (对应源demo的13个key)
const STORAGE_KEYS = {
  IS_LOGGED_IN: 'isLoggedIn',
  USER_NAME: 'userName',
  ADDRESSES: 'addresses',
  SEARCH_HISTORY: 'searchHistory',
  FAVORITE_TEMPLATES: 'favoriteTemplates',
  TEMPLATE_COMMENTS: 'templateComments',
  USER_BROWSE_HISTORY: 'userBrowseHistory',
  FACE_AUTH_DONE: 'faceAuthDone',
  FA_SELECTED_NEED: 'faSelectedNeed',
  FA_AGREED: 'faAgreed',
  FA_SELECTED_SOURCE: 'faSelectedSource',
  CART_ITEMS: 'cartItems',
  GP_DATA: 'gpData'
};

// 美妆闺蜜AI称呼
const COMPANION_NAME = '小美';
const COMPANION_WAKE_WORD = '小美小美';

// 图片占位符
const PLACEHOLDER_IMAGE = '/assets/images/placeholder.png';

module.exports = {
  TAB_BAR,
  LIBRARY_CATS,
  MARKET_CATS,
  ORDER_STATUS,
  STORAGE_KEYS,
  COMPANION_NAME,
  COMPANION_WAKE_WORD,
  PLACEHOLDER_IMAGE
};
