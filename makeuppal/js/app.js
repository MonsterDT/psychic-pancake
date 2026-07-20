const MakeupPal = {
  currentPage: 'home',
  
  pages: {
    home: 'index.html',
    library: 'pages/library.html',
    guide: 'pages/guide.html',
    detail: 'pages/detail.html',
    chat: 'pages/chat.html',
    discover: 'pages/discover.html',
    profile: 'pages/profile.html'
  },

  data: {
    makeupList: [
      {
        id: 1,
        title: '韩式白开水妆',
        tags: ['新手友好', '淡颜系'],
        rating: 4.8,
        favorites: '1.2k',
        imageGradient: 'linear-gradient(135deg, #FFD1DC 0%, #E8A0B8 100%)',
        aspectRatio: '3/4',
        category: 'daily'
      },
      {
        id: 2,
        title: '日系元气桃花妆',
        tags: ['约会', '桃花眼'],
        rating: 4.9,
        favorites: '2.3k',
        imageGradient: 'linear-gradient(135deg, #F0C850 0%, #D4A03C 100%)',
        aspectRatio: '3/5',
        category: 'date'
      },
      {
        id: 3,
        title: '复古港风红唇妆',
        tags: ['复古', '气场'],
        rating: 4.7,
        favorites: '3.1k',
        imageGradient: 'linear-gradient(135deg, #E88585 0%, #C45C5C 100%)',
        aspectRatio: '3/4',
        category: 'party'
      },
      {
        id: 4,
        title: '清冷感新中式妆',
        tags: ['国风', '高级感'],
        rating: 4.9,
        favorites: '1.8k',
        imageGradient: 'linear-gradient(135deg, #B89AC8 0%, #8B6FB0 100%)',
        aspectRatio: '4/5',
        category: 'guofeng'
      },
      {
        id: 5,
        title: '通勤气质裸妆',
        tags: ['通勤', '伪素颜'],
        rating: 4.6,
        favorites: '4.5k',
        imageGradient: 'linear-gradient(135deg, #D4B896 0%, #C4956A 100%)',
        aspectRatio: '3/4',
        category: 'commute'
      },
      {
        id: 6,
        title: '派对闪亮烟熏妆',
        tags: ['派对', '欧美风'],
        rating: 4.8,
        favorites: '2.7k',
        imageGradient: 'linear-gradient(135deg, #6B6560 0%, #2D2A26 100%)',
        aspectRatio: '3/5',
        category: 'party'
      }
    ],

    guideSteps: [
      { id: 1, title: '底妆打底', duration: '5分钟', desc: '用妆前乳均匀涂抹全脸，打造光滑底妆基础。' },
      { id: 2, title: '粉底上妆', duration: '3分钟', desc: '取适量粉底液点涂于面部，用湿美妆蛋轻轻拍开。' },
      { id: 3, title: '眼妆晕染', duration: '4分钟', desc: '用晕染刷蘸取浅棕色眼影，从眼尾三分之一处开始，向眼头方向轻轻晕染。注意保持层次感的渐变过渡。' },
      { id: 4, title: '眼线勾勒', duration: '3分钟', desc: '沿着睫毛根部细细描绘眼线，眼尾微微上扬。' },
      { id: 5, title: '腮红修容', duration: '2分钟', desc: '在苹果肌处轻扫腮红，营造自然好气色。' },
      { id: 6, title: '唇妆点睛', duration: '2分钟', desc: '先用唇线笔勾勒唇形，再填充口红。' },
      { id: 7, title: '定妆收尾', duration: '1分钟', desc: '用散粉轻轻按压全脸，让妆容更持久。' }
    ],

    chatMessages: [
      {
        type: 'ai',
        content: '嗨~ 我是你的AI闺蜜小美✨ 今天想画什么风格的妆呀？我可以帮你推荐适合的妆容哦~'
      },
      {
        type: 'ai',
        content: '根据你的肤色和脸型，我觉得你可以试试这些妆容：',
        recommendations: [
          { title: '韩式白开水妆', gradient: 'linear-gradient(135deg, #FFD1DC 0%, #E8A0B8 100%)' },
          { title: '日系桃花妆', gradient: 'linear-gradient(135deg, #F0C850 0%, #D4A03C 100%)' },
          { title: '清冷感中式', gradient: 'linear-gradient(135deg, #B89AC8 0%, #8B6FB0 100%)' }
        ]
      }
    ],

    categories: [
      { id: 'featured', name: '达人精选', active: true },
      { id: 'partial', name: '局部拆解', active: false },
      { id: 'guofeng', name: '国风专区', active: false },
      { id: 'commute', name: '通勤妆', active: false },
      { id: 'date', name: '约会妆', active: false },
      { id: 'party', name: '派对妆', active: false },
      { id: 'daily', name: '日常', active: false }
    ]
  },

  init() {
    this.initTabBar();
    this.initNavigation();
    this.initAnimations();
  },

  initTabBar() {
    const tabItems = document.querySelectorAll('.tabbar-item');
    tabItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const target = item.getAttribute('data-page');
        if (target && this.pages[target]) {
          this.navigateTo(target);
        }
      });
    });
  },

  initNavigation() {
    document.querySelectorAll('[data-navigate]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const target = el.getAttribute('data-navigate');
        if (target && this.pages[target]) {
          this.navigateTo(target);
        }
      });
    });

    document.querySelectorAll('[data-back]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        this.goBack();
      });
    });
  },

  navigateTo(page) {
    const path = this.pages[page];
    if (path) {
      document.body.style.opacity = '0';
      document.body.style.transition = 'opacity 0.2s ease';
      setTimeout(() => {
        window.location.href = path;
      }, 200);
    }
  },

  goBack() {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      this.navigateTo('home');
    }
  },

  initAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.animation = 'slideUp 0.5s ease forwards';
          }, index * 50);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-item').forEach(el => {
      el.style.opacity = '0';
      observer.observe(el);
    });
  },

  setActiveTab(tabName) {
    document.querySelectorAll('.tabbar-item').forEach(item => {
      const page = item.getAttribute('data-page');
      if (page === tabName) {
        item.classList.remove('inactive');
        item.classList.add('active');
      } else {
        item.classList.remove('active');
        item.classList.add('inactive');
      }
    });
  },

  toggleFavorite(button) {
    const svg = button.querySelector('svg');
    const isFavorited = button.getAttribute('data-favorited') === 'true';
    
    if (isFavorited) {
      button.setAttribute('data-favorited', 'false');
      svg.setAttribute('fill', 'none');
      svg.setAttribute('stroke', 'var(--color-text-muted)');
    } else {
      button.setAttribute('data-favorited', 'true');
      svg.setAttribute('fill', 'var(--color-danger)');
      svg.setAttribute('stroke', 'var(--color-danger)');
      
      button.style.transform = 'scale(1.2)';
      setTimeout(() => {
        button.style.transform = 'scale(1)';
      }, 200);
    }
  },

  sendMessage(inputEl) {
    const message = inputEl.value.trim();
    if (!message) return;

    const chatContainer = document.querySelector('.chat-container');
    if (!chatContainer) return;

    const userMsg = document.createElement('div');
    userMsg.className = 'chat-row user';
    userMsg.innerHTML = `
      <div class="avatar">你</div>
      <div class="bubble user">${message}</div>
    `;
    chatContainer.appendChild(userMsg);

    inputEl.value = '';
    chatContainer.scrollTop = chatContainer.scrollHeight;

    setTimeout(() => {
      const typingEl = document.createElement('div');
      typingEl.className = 'chat-row';
      typingEl.innerHTML = `
        <div class="avatar">美</div>
        <div class="typing-indicator">
          <span class="typing-dot"></span>
          <span class="typing-dot"></span>
          <span class="typing-dot"></span>
        </div>
      `;
      chatContainer.appendChild(typingEl);
      chatContainer.scrollTop = chatContainer.scrollHeight;

      setTimeout(() => {
        typingEl.remove();
        
        const responses = [
          '这个妆容超适合你哦~ 要不要我带你一步步画呀？',
          '好眼光！这款是今年的热门款呢，我来帮你详细拆解一下~',
          '没问题！我们先从底妆开始，慢慢来~',
          '收到~ 你皮肤底子这么好，画这个肯定超美哒！💄'
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        
        const aiMsg = document.createElement('div');
        aiMsg.className = 'chat-row';
        aiMsg.innerHTML = `
          <div class="avatar">美</div>
          <div class="bubble ai">${randomResponse}</div>
        `;
        chatContainer.appendChild(aiMsg);
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }, 1500);
    }, 500);
  },

  switchCategory(categoryId) {
    const tabs = document.querySelectorAll('.tag-tab');
    tabs.forEach(tab => {
      if (tab.getAttribute('data-category') === categoryId) {
        tab.classList.remove('tag-tab--inactive');
        tab.classList.add('tag-tab--active');
      } else {
        tab.classList.remove('tag-tab--active');
        tab.classList.add('tag-tab--inactive');
      }
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  MakeupPal.init();
});
