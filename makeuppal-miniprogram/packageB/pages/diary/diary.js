// packageB/pages/diary/diary.js - 美妆日记
const { getImageUrl } = require('../../../data/images');
const storage = require('../../../utils/storage');
const { STORAGE_KEYS } = require('../../../utils/constants');

Page({
  data: {
    // 当前年月
    currentYear: 2026,
    currentMonth: 7,
    monthText: '',
    // 日历日期网格
    calendarDays: [],
    // 选中日期
    selectedDate: '',
    selectedDay: null,
    // 当日日记
    currentDiary: null,
    // 所有日记记录（按日期 key 索引）
    diaryMap: {},
    // 周标题
    weekHeaders: ['日', '一', '二', '三', '四', '五', '六']
  },

  onLoad() {
    this.initCalendar();
    this.loadDiaries();
  },

  // 初始化日历
  initCalendar() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    this.setData({
      currentYear: year,
      currentMonth: month,
      monthText: year + '年' + month + '月',
      selectedDate: this.formatDate(year, month, now.getDate())
    });
    this.buildCalendar(year, month);
  },

  // 构建日历网格
  buildCalendar(year, month) {
    const firstDay = new Date(year, month - 1, 1);
    const firstDayWeek = firstDay.getDay(); // 0=周日
    const daysInMonth = new Date(year, month, 0).getDate();
    const today = new Date();
    const todayStr = this.formatDate(today.getFullYear(), today.getMonth() + 1, today.getDate());

    const days = [];
    // 前置空位
    for (let i = 0; i < firstDayWeek; i++) {
      days.push({ empty: true });
    }
    for (let d = 1; d <= daysInMonth; d++) {
      const dateStr = this.formatDate(year, month, d);
      days.push({
        day: d,
        date: dateStr,
        isToday: dateStr === todayStr,
        hasDiary: false,
        isSelected: dateStr === this.data.selectedDate
      });
    }
    this.setData({ calendarDays: days });
    // 重新标记有日记的日期
    this.markDiaryDays();
  },

  // 格式化日期 YYYY-MM-DD
  formatDate(y, m, d) {
    const mm = m < 10 ? '0' + m : '' + m;
    const dd = d < 10 ? '0' + d : '' + d;
    return y + '-' + mm + '-' + dd;
  },

  // 加载日记记录（模拟3条 + storage）
  loadDiaries() {
    // 模拟3条日记记录
    const mockDiaries = {
      '2026-07-01': {
        date: '2026-07-01',
        makeupName: '日常通勤妆',
        mood: '😊',
        moodText: '心情不错',
        photo: getImageUrl('coverCreator1'),
        note: '今天用了新买的粉底液，妆效很自然，一整天都没脱妆。同事都夸气色好。',
        duration: '15分钟',
        products: ['兰蔻粉底液', '眉笔', '口红']
      },
      '2026-06-25': {
        date: '2026-06-25',
        makeupName: '甜美约会妆',
        mood: '🥰',
        moodText: '甜蜜',
        photo: getImageUrl('coverCreator2'),
        note: '约会画了蜜桃妆，男朋友说很好看，眼影颜色很显白。',
        duration: '30分钟',
        products: ['气垫粉底', '蜜桃腮红', '唇釉']
      },
      '2026-06-18': {
        date: '2026-06-18',
        makeupName: '职场气场妆',
        mood: '😎',
        moodText: '自信满满',
        photo: getImageUrl('coverCreator4'),
        note: '今天有重要会议，画了气场红唇妆，谈判很顺利。',
        duration: '25分钟',
        products: ['哑光粉底', '眼影盘', '哑光口红']
      }
    };

    // 合并 storage 中的日记
    const storedDiaries = storage.get(STORAGE_KEYS.USER_BROWSE_HISTORY + '_diaries', {});
    const merged = Object.assign({}, mockDiaries, storedDiaries);

    this.setData({ diaryMap: merged });
    this.markDiaryDays();
    // 加载选中日期的日记
    this.loadSelectedDiary();
  },

  // 标记日历中有日记的日期
  markDiaryDays() {
    const diaryMap = this.data.diaryMap;
    const days = this.data.calendarDays.map(d => {
      if (d.empty) return d;
      return Object.assign({}, d, { hasDiary: !!diaryMap[d.date] });
    });
    this.setData({ calendarDays: days });
  },

  // 加载选中日期的日记
  loadSelectedDiary() {
    const date = this.data.selectedDate;
    const diary = this.data.diaryMap[date] || null;
    this.setData({ currentDiary: diary });
  },

  // 选择日期
  onSelectDay(e) {
    const date = e.currentTarget.dataset.date;
    if (!date) return;
    const days = this.data.calendarDays.map(d => {
      if (d.empty) return d;
      return Object.assign({}, d, { isSelected: d.date === date });
    });
    this.setData({
      calendarDays: days,
      selectedDate: date
    });
    this.loadSelectedDiary();
  },

  // 上一月
  onPrevMonth() {
    let y = this.data.currentYear;
    let m = this.data.currentMonth - 1;
    if (m < 1) {
      m = 12;
      y = y - 1;
    }
    this.setData({
      currentYear: y,
      currentMonth: m,
      monthText: y + '年' + m + '月'
    });
    this.buildCalendar(y, m);
  },

  // 下一月
  onNextMonth() {
    let y = this.data.currentYear;
    let m = this.data.currentMonth + 1;
    if (m > 12) {
      m = 1;
      y = y + 1;
    }
    this.setData({
      currentYear: y,
      currentMonth: m,
      monthText: y + '年' + m + '月'
    });
    this.buildCalendar(y, m);
  },

  // 添加日记
  onAddDiary() {
    wx.showToast({
      title: '添加日记功能开发中',
      icon: 'none'
    });
  },

  // 预览图片
  onPreviewPhoto(e) {
    const url = e.currentTarget.dataset.url;
    if (!url) return;
    wx.previewImage({
      current: url,
      urls: [url]
    });
  }
});
