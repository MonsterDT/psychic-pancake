(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var accent2 = style.getPropertyValue('--accent2').trim();
  var pink = style.getPropertyValue('--pink').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var ok = style.getPropertyValue('--ok').trim();
  var warn = style.getPropertyValue('--warn').trim();

  // --- Gantt Chart: V3.1 Implementation Timeline ---
  var tasks = [
    { name: '美妆闺蜜 AI 伴侣', start: 0, duration: 2, color: pink },
    { name: '妆容成长日记', start: 0, duration: 2, color: accent2 },
    { name: 'AI 定制妆容', start: 0.5, duration: 2, color: accent },
    { name: '场景情感推荐', start: 2, duration: 2, color: accent2 },
    { name: 'AI 正向鼓励系统', start: 2.5, duration: 2, color: pink },
    { name: '步骤语音引导', start: 3, duration: 1.5, color: accent },
    { name: '创作者人格化标签', start: 4, duration: 2, color: ink },
    { name: 'GP 钱包完善', start: 4.5, duration: 2, color: warn },
    { name: '肌肤安全感报告', start: 6, duration: 1.5, color: ok },
    { name: '敏感肌保护伞', start: 6.5, duration: 1.5, color: ok },
    { name: '测试与体验优化', start: 7, duration: 1, color: muted }
  ];

  var ganttData = [];
  var maxEnd = 8;
  for (var i = 0; i < tasks.length; i++) {
    ganttData.push({
      name: tasks[i].name,
      itemStyle: { color: tasks[i].color, borderRadius: [4, 4, 4, 4] },
      value: [tasks[i].start, tasks[i].start + tasks[i].duration]
    });
  }

  var weekLabels = [];
  for (var w = 0; w < 8; w++) {
    weekLabels.push('第' + (w + 1) + '周');
  }

  var phases = [
    { name: 'L0核心', start: 0, end: 2, color: pink },
    { name: '情感交互', start: 2, end: 4, color: accent2 },
    { name: '社区经济', start: 4, end: 6, color: ink },
    { name: '安全优化', start: 6, end: 8, color: ok }
  ];

  var phaseData = [];
  for (var p = 0; p < phases.length; p++) {
    phaseData.push({
      name: phases[p].name,
      itemStyle: { color: phases[p].color + '33', borderColor: phases[p].color, borderWidth: 1, borderRadius: [3, 3, 3, 3] },
      value: [phases[p].start, phases[p].end]
    });
  }

  var chartGantt = echarts.init(document.getElementById('chart-gantt'), null, { renderer: 'svg' });
  chartGantt.setOption({
    animation: false,
    tooltip: {
      trigger: 'item',
      formatter: function(params) {
        if (params.seriesName === '实施阶段') {
          return '<strong>' + params.name + '</strong><br/>周期：第' + (params.value[0] + 1) + '周 - 第' + params.value[1] + '周';
        }
        return '<strong>' + params.name + '</strong><br/>开始：第' + (params.value[0] + 1) + '周<br/>结束：第' + Math.floor(params.value[1]) + '周<br/>工期：' + (params.value[1] - params.value[0]) + '周';
      },
      appendToBody: true
    },
    grid: { left: '22%', right: '6%', top: '8%', bottom: '8%', containLabel: false },
    xAxis: {
      type: 'value',
      min: 0,
      max: 8,
      interval: 1,
      axisLabel: {
        color: ink,
        fontSize: 11,
        formatter: function(v) { return weekLabels[v] || ''; }
      },
      axisLine: { lineStyle: { color: rule } },
      splitLine: { lineStyle: { color: rule, type: 'dashed' } }
    },
    yAxis: {
      type: 'category',
      data: tasks.map(function(t) { return t.name; }),
      axisLabel: { color: ink, fontSize: 11 },
      axisLine: { lineStyle: { color: rule } },
      axisTick: { show: false },
      splitLine: { show: false }
    },
    series: [
      {
        name: '实施阶段',
        type: 'custom',
        renderItem: function(params, api) {
          var start = api.coord([api.value(0)[0], api.value(0)[1] + 0.35]);
          var end = api.coord([api.value(0)[1], api.value(0)[1] + 0.35]);
          var rectShape = echarts.graphic.clipRectByRect({
            x: start[0],
            y: start[1] - 2,
            width: end[0] - start[0],
            height: 4
          }, { x: params.coordSys.x, y: params.coordSys.y, width: params.coordSys.width, height: params.coordSys.height });
          return rectShape && {
            type: 'rect',
            transition: ['shape'],
            shape: rectShape,
            style: api.style()
          };
        },
        data: phaseData,
        encode: { x: [0, 1], y: 0 },
        z: 1
      },
      {
        name: '任务工期',
        type: 'custom',
        renderItem: function(params, api) {
          var categoryIndex = api.value(0)[2];
          var start = api.coord([api.value(0)[0], categoryIndex]);
          var end = api.coord([api.value(0)[1], categoryIndex]);
          var barHeight = 20;
          var rectShape = echarts.graphic.clipRectByRect({
            x: start[0],
            y: start[1] - barHeight / 2,
            width: end[0] - start[0],
            height: barHeight
          }, { x: params.coordSys.x, y: params.coordSys.y, width: params.coordSys.width, height: params.coordSys.height });
          return rectShape && {
            type: 'rect',
            transition: ['shape'],
            shape: rectShape,
            style: api.style()
          };
        },
        data: ganttData.map(function(d, idx) {
          return {
            name: d.name,
            itemStyle: d.itemStyle,
            value: [d.value[0], d.value[1], idx]
          };
        }),
        encode: { x: [0, 1], y: 2 },
        z: 2
      }
    ]
  });

  window.addEventListener('resize', function() { chartGantt.resize(); });

})();
