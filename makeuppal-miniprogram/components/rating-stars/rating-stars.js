// components/rating-stars/rating-stars.js
Component({
  options: { styleIsolation: 'apply-shared' },

  properties: {
    score: { type: Number, value: 0 },
    maxScore: { type: Number, value: 5 },
    size: { type: String, value: 'md' }
  },

  data: {
    fillPercent: 0,
    starList: []
  },

  observers: {
    'score, maxScore': function(score, maxScore) {
      const safeMax = maxScore > 0 ? maxScore : 5;
      const safeScore = Math.max(0, Math.min(score, safeMax));
      const percent = (safeScore / safeMax) * 100;
      const list = [];
      for (let i = 0; i < safeMax; i++) {
        list.push(i);
      }
      this.setData({
        fillPercent: percent,
        starList: list
      });
    }
  },

  lifetimes: {
    attached() {
      // 兜底：observers 在 attached 之前若已收到值会执行，此处确保数据初始化
      const { score, maxScore } = this.properties;
      const safeMax = maxScore > 0 ? maxScore : 5;
      const safeScore = Math.max(0, Math.min(score, safeMax));
      const percent = (safeScore / safeMax) * 100;
      const list = [];
      for (let i = 0; i < safeMax; i++) {
        list.push(i);
      }
      this.setData({ fillPercent: percent, starList: list });
    }
  }
});
