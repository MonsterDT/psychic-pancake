// utils/format.js - 格式化工具

// 格式化数字（如 12800 -> 1.3w）
function formatNumber(n) {
  if (n === undefined || n === null) return '0';
  if (n >= 10000) return (n / 10000).toFixed(1) + 'w';
  if (n >= 1000) return (n / 1000).toFixed(1) + 'k';
  return String(n);
}

// 格式化价格
function formatPrice(price) {
  if (price === undefined || price === null) return '0';
  return Number(price).toFixed(0);
}

// 格式化日期
function formatDate(timestamp, fmt = 'YYYY-MM-DD') {
  const d = new Date(timestamp);
  const pad = (n) => (n < 10 ? '0' + n : '' + n);
  return fmt
    .replace('YYYY', d.getFullYear())
    .replace('MM', pad(d.getMonth() + 1))
    .replace('DD', pad(d.getDate()))
    .replace('HH', pad(d.getHours()))
    .replace('mm', pad(d.getMinutes()))
    .replace('ss', pad(d.getSeconds()));
}

// 相对时间
function timeAgo(timestamp) {
  const now = Date.now();
  const diff = now - timestamp;
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  if (diff < minute) return '刚刚';
  if (diff < hour) return Math.floor(diff / minute) + '分钟前';
  if (diff < day) return Math.floor(diff / hour) + '小时前';
  if (diff < 7 * day) return Math.floor(diff / day) + '天前';
  return formatDate(timestamp, 'MM-DD');
}

module.exports = {
  formatNumber,
  formatPrice,
  formatDate,
  timeAgo
};
