// packageD/pages/companion-chat/companion-chat.js - 美妆闺蜜对话
const { COMPANION_NAME } = require('../../../utils/constants');
const { libraryFeed } = require('../../../data/library');
const { getImageUrl } = require('../../../data/images');
const router = require('../../../utils/router');

// 8 个快捷场景
const SCENES = [
  { key: 'daily', label: '日常妆', icon: '☀️' },
  { key: 'date', label: '约会妆', icon: '💖' },
  { key: 'work', label: '职场妆', icon: '💼' },
  { key: 'party', label: '派对妆', icon: '🎉' },
  { key: 'beginner', label: '新手教程', icon: '🌱' },
  { key: 'product', label: '产品推荐', icon: '🛍️' },
  { key: 'skin', label: '肤质分析', icon: '🔬' },
  { key: 'color', label: '色彩搭配', icon: '🎨' }
];

// 场景关键词映射
const SCENE_KEYWORDS = {
  daily: ['日常', '通勤', '上班', '早八', '清新', '自然'],
  date: ['约会', '相亲', '桃花', '甜美', '蜜桃'],
  work: ['职场', '工作', '干练', '职业', '商务'],
  party: ['派对', '聚会', '夜店', '蹦迪', '闪亮'],
  beginner: ['新手', '零基础', '入门', '小白', '手残'],
  product: ['产品', '推荐', '口红', '粉底', '眼影', '好物'],
  skin: ['肤质', '皮肤', '敏感', '油皮', '干皮', '护肤'],
  color: ['色彩', '搭配', '配色', '颜色', '调色']
};

// 从 libraryFeed.creators 中随机挑选模板作为推荐
function pickTemplates(sceneKey, count) {
  const list = (libraryFeed.creators || []).slice();
  let pool = list;

  // 部分场景对应到 creators.category / tag 做粗筛
  if (sceneKey === 'date') {
    pool = list.filter(item => (item.category + item.tag).indexOf('甜') >= 0 || item.tag === '纯欲');
  } else if (sceneKey === 'work') {
    pool = list.filter(item => (item.category + item.tag).indexOf('通勤') >= 0 || item.tag === '静奢');
  } else if (sceneKey === 'party') {
    pool = list.filter(item => (item.category + item.tag).indexOf('晚宴') >= 0 || item.tag === 'Y2K');
  } else if (sceneKey === 'daily') {
    pool = list.filter(item => item.category === '日常妆');
  }

  if (pool.length === 0) pool = list;

  // 简单洗牌
  const shuffled = pool.slice().sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count).map(item => ({
    id: item.id,
    name: item.title,
    author: item.creatorName,
    image: getImageUrl(item.coverImage)
  }));
}

// 根据 keyword 匹配场景
function matchScene(text) {
  if (!text) return 'default';
  const lower = text.toLowerCase();
  for (const key of Object.keys(SCENE_KEYWORDS)) {
    const kws = SCENE_KEYWORDS[key];
    if (kws.some(k => lower.indexOf(k) >= 0)) return key;
  }
  return 'default';
}

// 生成小美回复内容
function genReply(sceneKey) {
  const replies = {
    daily: '日常妆容要清新自然！推荐清透裸妆，打造伪素颜效果～',
    date: '约会当然要甜甜的！我推荐蜜桃粉腮红+奶茶色唇釉+浅棕眼影的自然妆，温柔又不会太夸张～',
    work: '职场妆容推荐干练气质妆，自然眉形+轻薄底妆，专业感拉满～',
    party: '派对妆容要闪亮夺目！推荐气场女王妆，红唇搭配烟熏眼妆，你就是全场焦点～',
    beginner: '新手宝宝看过来！推荐简单易上手的日常妆容，步骤清晰，轻松学会～',
    product: '好的化妆品能让妆容事半功倍！我帮你推荐几款口碑好物～',
    skin: '护肤是化妆的基础！我帮你分析肤质，推荐适合的护肤方案～',
    color: '色彩搭配是妆容的灵魂！我帮你设计专属的配色方案～',
    default: '哇！这个问题我来帮你分析～告诉我更多你的需求哦～'
  };
  return replies[sceneKey] || replies.default;
}

Page({
  data: {
    welcomeMessage: '',
    messages: [],
    inputText: '',
    isVoiceMode: false,
    currentScene: '',
    scenes: SCENES,
    scrollAnchor: 'msg-0',
    msgIdx: 1
  },

  onLoad() {
    const welcome = '你好呀！我是' + COMPANION_NAME + '，你的私人美妆闺蜜～有任何美妆问题都可以问我哦！可以点击下方场景按钮快速开始～';
    this.setData({ welcomeMessage: welcome });
  },

  onInput(e) {
    this.setData({ inputText: e.detail.value });
  },

  onVoiceToggle() {
    if (this.data.isVoiceMode) {
      // 切回文本输入
      this.setData({ isVoiceMode: false });
      return;
    }
    // 申请录音权限
    wx.authorize({
      scope: 'scope.record',
      success: () => {
        this.setData({ isVoiceMode: true });
      },
      fail: () => {
        wx.showToast({ title: '需要录音权限才能使用语音', icon: 'none' });
      }
    });
  },

  onSceneTap(e) {
    const key = e.currentTarget.dataset.key;
    const scene = SCENES.find(s => s.key === key);
    if (!scene) return;

    this.setData({ currentScene: key });

    // 用场景标签作为用户输入发送
    const userText = '我想看' + scene.label + '的推荐～';
    this.sendUserMessage(userText, key);
  },

  onSend() {
    const text = (this.data.inputText || '').trim();
    if (!text) return;

    this.setData({ inputText: '' });
    this.sendUserMessage(text, matchScene(text));
  },

  // 发送用户消息并触发小美回复
  sendUserMessage(text, sceneKey) {
    const idx = this.data.msgIdx;
    const userMsg = {
      idx: idx,
      role: 'user',
      content: text,
      time: this.now(),
      templates: []
    };

    this.setData({
      messages: this.data.messages.concat([userMsg]),
      msgIdx: idx + 1,
      scrollAnchor: 'msg-' + idx
    });

    // 模拟小美回复延迟
    setTimeout(() => {
      const replyIdx = this.data.msgIdx;
      const reply = {
        idx: replyIdx,
        role: 'xiaomei',
        content: genReply(sceneKey),
        time: this.now(),
        templates: pickTemplates(sceneKey, 2)
      };

      this.setData({
        messages: this.data.messages.concat([reply]),
        msgIdx: replyIdx + 1,
        scrollAnchor: 'msg-' + replyIdx
      });
    }, 600);
  },

  now() {
    const d = new Date();
    const h = String(d.getHours()).padStart(2, '0');
    const m = String(d.getMinutes()).padStart(2, '0');
    return h + ':' + m;
  },

  onTemplateTap(e) {
    const id = e.currentTarget.dataset.id;
    router.openTemplateDetail(id);
  },

  onShareAppMessage() {
    return {
      title: '和小美聊聊美妆吧～',
      path: '/packageD/pages/companion-chat/companion-chat'
    };
  }
});
