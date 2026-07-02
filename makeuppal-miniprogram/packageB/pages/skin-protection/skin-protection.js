// packageB/pages/skin-protection/skin-protection.js - 敏感肌保护方案
const { localProblems, getProblemById, getProblemsByCategory } = require('../../../data/local-problems');

Page({
  data: {
    // 问题列表（3个问题卡片）
    problems: [],
    // 当前展开的问题id
    expandedProblemId: '',
    // 当前展开的方案id（按问题分组）
    expandedSolutionMap: {},
    // 当前展开的步骤序号（按方案+步骤索引分组）
    expandedStepKey: ''
  },

  onLoad() {
    this.loadProblems();
  },

  // 加载问题列表
  loadProblems() {
    // 直接使用 localProblems（已包含3个代表性问题，4层嵌套结构）
    const problems = localProblems.map(p => {
      return {
        id: p.id,
        title: p.title,
        category: p.category,
        keyword: p.keyword,
        solutionCount: (p.solutions || []).length,
        totalSteps: this.countSteps(p.solutions),
        // 展开时才需要完整 solutions 数据
        solutions: (p.solutions || []).map(s => {
          return {
            id: s.id,
            name: s.name,
            suitable: s.suitable || [],
            difficulty: s.difficulty || 1,
            difficultyText: this.formatDifficulty(s.difficulty),
            duration: s.duration || '',
            effect: s.effect || '',
            heat: s.heat || 0,
            likes: s.likes || 0,
            likesText: this.formatLikes(s.likes),
            steps: (s.steps || []).map(st => {
              return {
                stepNum: st.stepNum,
                description: st.description,
                products: st.products || []
              };
            }),
            warnings: s.warnings || []
          };
        })
      };
    });
    this.setData({ problems: problems });
  },

  // 统计总步骤数
  countSteps(solutions) {
    if (!solutions) return 0;
    let count = 0;
    solutions.forEach(s => {
      count += (s.steps || []).length;
    });
    return count;
  },

  // 格式化难度
  formatDifficulty(d) {
    const map = { 1: '入门', 2: '简单', 3: '中等', 4: '进阶', 5: '高级' };
    return map[d] || '中等';
  },

  // 格式化点赞数
  formatLikes(num) {
    if (num >= 10000) {
      return (num / 10000).toFixed(1) + 'w';
    }
    return String(num);
  },

  // 展开/收起问题
  onToggleProblem(e) {
    const id = e.currentTarget.dataset.id;
    if (this.data.expandedProblemId === id) {
      this.setData({
        expandedProblemId: '',
        expandedSolutionMap: {},
        expandedStepKey: ''
      });
    } else {
      this.setData({
        expandedProblemId: id,
        expandedSolutionMap: {},
        expandedStepKey: ''
      });
    }
  },

  // 展开/收起方案
  onToggleSolution(e) {
    const { problemId, solutionId } = e.currentTarget.dataset;
    const key = problemId + '_' + solutionId;
    const map = Object.assign({}, this.data.expandedSolutionMap);
    if (map[key]) {
      delete map[key];
    } else {
      map[key] = true;
    }
    this.setData({ expandedSolutionMap: map, expandedStepKey: '' });
  },

  // 展开/收起步骤产品
  onToggleStep(e) {
    const key = e.currentTarget.dataset.key;
    if (this.data.expandedStepKey === key) {
      this.setData({ expandedStepKey: '' });
    } else {
      this.setData({ expandedStepKey: key });
    }
  }
});
