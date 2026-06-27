# 妆伴 MakeupPal - 产品需求文档 (PRD)

**版本**: v1.0.0 (基于 demo v3.2.0)  
**更新时间**: 2026-06-27  
**状态**: 初始版本 - 指导后续开发

---

## 一、项目概述

### 1.1 产品定位

妆伴（MakeupPal）是一款面向女性用户的美妆助手应用，提供虚拟试妆、产品推荐、肤质分析、妆容教程等核心功能。通过 AR 技术和个性化推荐，帮助用户找到最适合的美妆产品和解锁各种妆容风格。

### 1.2 目标用户

- 18-35 岁女性用户
- 对美妆有兴趣，希望提升化妆技巧
- 关注护肤和个人形象管理
- 喜欢尝试新妆容和新产品

### 1.3 核心价值主张

- **智能试妆**: AR 虚拟试妆，无需实际涂抹即可预览效果
- **个性化推荐**: 基于肤质分析和用户偏好精准推荐产品
- **妆容教程**: 详细的妆容步骤指导，适合新手学习
- **一站式购物**: 从试妆到购买的无缝体验

---

## 二、技术架构

### 2.1 技术栈

| 层级 | 技术选型 | 说明 |
|------|----------|------|
| 前端框架 | 原生 HTML/CSS/JS | 无框架依赖，单文件部署 |
| 样式预处理器 | CSS Variables + 原生 CSS | 利用 CSS 变量实现主题系统 |
| 动画方案 | CSS Transitions + Keyframes | 硬件加速，流畅动效 |
| 字体 | Google Fonts | Noto Serif SC + Noto Sans SC |
| 图标 | 内联 SVG | 体积小，支持任意颜色 |
| 部署 | 静态文件托管 | 可直接打开 HTML 文件 |

### 2.2 文件结构

```
/workspace/
├── index.html          # 主页面（所有代码内联）
├── css/
│   └── style.css       # 样式文件
├── js/
│   └── app.js          # JavaScript 交互逻辑
└── assets/             # 静态资源目录（预留）
```

### 2.3 设计系统

#### 颜色系统

| 变量名 | 色值 | 用途 |
|--------|------|------|
| `--primary` | #FF6B9D | 主色调（粉色） |
| `--primary-light` | #FF8FB1 | 浅粉色 |
| `--primary-dark` | #E85A8A | 深粉色 |
| `--secondary` | #9D4EDD | 紫色（次要强调） |
| `--accent` | #FFB3C6 | 粉紫色 |
| `--background` | #FFF5F7 | 背景色 |
| `--surface` | #FFFFFF | 卡片/弹窗背景 |
| `--text-primary` | #2D2D2D | 主要文字 |
| `--text-secondary` | #666666 | 次要文字 |
| `--text-tertiary` | #999999 | 辅助文字 |
| `--border` | #F0E6E9 | 边框色 |
| `--success` | #4ECDC4 | 成功状态 |
| `--warning` | #FFD93D | 警告状态 |
| `--error` | #FF6B6B | 错误状态 |

#### 圆角系统

| 变量名 | 值 | 用途 |
|--------|-----|------|
| `--radius-sm` | 8px | 小按钮/标签 |
| `--radius-md` | 12px | 中等卡片 |
| `--radius-lg` | 16px | 大卡片 |
| `--radius-xl` | 24px | 弹窗/Banner |

#### 阴影系统

| 变量名 | 值 | 用途 |
|--------|-----|------|
| `--shadow-sm` | 0 2px 8px rgba(255,107,157,0.08) | 轻微阴影 |
| `--shadow-md` | 0 4px 16px rgba(255,107,157,0.12) | 中等阴影 |
| `--shadow-lg` | 0 8px 32px rgba(255,107,157,0.16) | 明显阴影 |

#### 字体系统

| 用途 | 字体 | 字重 |
|------|------|------|
| 标题/品牌 | Noto Serif SC | 600-700 |
| 正文 | Noto Sans SC | 300-500 |
| 价格/数字 | Noto Serif SC | 700 |

---

## 三、页面结构

### 3.1 页面架构

应用采用单页面多标签架构（ SPA + Tab Navigation），包含以下页面：

| 页面 ID | 页面名称 | 路由 | 功能描述 |
|---------|----------|------|----------|
| page-home | 首页 | / | 商品展示、Banner、快捷入口 |
| page-category | 分类页 | /category | 商品分类浏览 |
| page-cart | 购物车 | /cart | 购物车管理 |
| page-profile | 我的 | /profile | 用户中心、订单、收藏 |

### 3.2 首页（page-home）

**结构分析**：

```
page-home
├── .app-header (状态栏 + 头部)
│   ├── .avatar (用户头像 SVG)
│   ├── .greeting (问候语)
│   └── .header-btn (通知入口，带 badge)
├── .search-bar (搜索栏)
├── .banner-section
│   └── .banner (促销 Banner)
│       ├── .banner-content
│       └── .banner-image (口红动画)
├── .quick-actions (快捷入口 2x2 网格)
│   └── .action-item (AR试妆/全部分类/肤质分析/我的)
├── .section (热门推荐)
│   ├── .product-scroll (横向滚动)
│   │   └── .product-card x3
│   └── .section-header
└── .section (今日妆容灵感)
    ├── .inspiration-grid (瀑布流)
    │   └── .inspiration-card x3
    └── .section-header
```

**关键元素**：

| 元素 | 选择器 | 状态 |
|------|--------|------|
| 问候语 | `.greeting-text` | 静态 |
| 通知徽章 | `.badge` | 静态 (显示3) |
| 搜索栏 | `.search-bar` | 可点击 |
| Banner | `.banner` | 静态展示 |
| 商品卡片 | `.product-card` | 可点击，带反馈 |
| 妆容卡片 | `.inspiration-card` | 可点击，带反馈 |

### 3.3 分类页（page-category）

**结构分析**：

```
page-category
├── .app-header
│   ├── .page-title
│   └── .header-btn (搜索)
├── .category-container (flex 布局)
│   ├── .category-sidebar (90px 固定宽度)
│   │   └── .category-tab x9 (9个分类)
│   └── .category-content
│       ├── .category-banner
│       └── .sub-category-grid (3列)
│           └── .sub-category-item x6
└── .bottom-safe
```

**分类数据**：

| 一级分类 | 二级分类 |
|----------|----------|
| 口红唇釉 | 哑光口红、镜面唇釉、丝绒唇泥、水光唇蜜、唇线笔、润唇膏 |
| 粉底隔离 | （待扩展）|
| 眼影眼线 | （待扩展）|
| 睫毛膏 | （待扩展）|
| 腮红修容 | （待扩展）|
| 定妆散粉 | （待扩展）|
| 护肤套装 | （待扩展）|
| 香水香氛 | （待扩展）|
| 美妆工具 | （待扩展）|

### 3.4 购物车页（page-cart）

**当前状态**：仅包含空状态占位

```
page-cart
├── .app-header
│   ├── .page-title
│   └── .header-btn (编辑)
└── .cart-empty (空状态)
    ├── .cart-empty-icon
    ├── .cart-empty-text
    ├── .cart-empty-sub
    └── .cart-empty-btn (去逛逛)
```

**待开发功能**：
- 购物车列表展示
- 商品数量编辑
- 商品删除
- 价格计算
- 结算入口

### 3.5 我的页面（page-profile）

**结构分析**：

```
page-profile
├── .app-header
│   ├── .profile-user
│   │   ├── .profile-avatar
│   │   └── .profile-info
│   └── .header-btn (设置)
├── .profile-stats (用户数据)
│   └── .stat-item x4 (收藏/订单/积分/优惠券)
├── .profile-menu
│   ├── .menu-group x2
│   │   └── .menu-item x6
│   └── 菜单项:
│       ├── 我的订单
│       ├── 我的收藏
│       ├── 试妆记录
│       ├── 肤质档案
│       ├── 优惠券
│       └── 地址管理
└── .bottom-safe
```

---

## 四、组件清单

### 4.1 导航组件

#### Bottom Navigation（.bottom-nav）

| 状态 | 样式 |
|------|------|
| 默认 | 灰色图标 + 文字 |
| 激活 | 粉色图标 + 文字 |
| 按压 | scale(0.95) |

| Tab 名称 | 图标 | 功能 |
|----------|------|------|
| 首页 | house | 跳转首页 |
| 分类 | grid | 跳转分类页 |
| 试妆 | face (悬浮) | 打开 AR 试妆弹窗 |
| 购物车 | cart | 跳转购物车 |
| 我的 | user | 跳转我的页面 |

**特殊样式**：试妆按钮使用 `transform: translateY(-16px)` 悬浮效果

#### Category Sidebar（.category-sidebar）

| 状态 | 样式 |
|------|------|
| 默认 | 灰色文字 |
| 激活 | 粉色文字 + 白色背景 + 左侧粉色指示条 |

### 4.2 卡片组件

#### Product Card（.product-card）

| 属性 | 值 |
|------|-----|
| 尺寸 | 140px x (140px + info) |
| 圆角 | 16px |
| 阴影 | shadow-sm |
| 按压反馈 | scale(0.97) |

| 子元素 | 描述 |
|--------|------|
| .product-image | 产品图（CSS渐变模拟） |
| .product-tag | 标签（热销/新品/特惠） |
| .product-info | 产品信息 |
| .product-name | 商品名称 |
| .product-brand | 品牌 |
| .product-price | 价格 |

#### Inspiration Card（.inspiration-card）

| 属性 | 值 |
|------|-----|
| 布局 | 2列网格 |
| 大卡片 | grid-row: span 2 |
| 圆角 | 16px |
| 按压反馈 | scale(0.97) |

| 子元素 | 描述 |
|--------|------|
| .inspiration-image | 妆容图（CSS渐变） |
| .inspiration-overlay | 半透明遮罩 |
| .inspiration-tag | 标签（日常通勤/约会/派对） |
| .inspiration-title | 妆容名称 |

### 4.3 按钮组件

#### Primary Button（.btn-buy）

| 状态 | 样式 |
|------|------|
| 默认 | 粉色渐变背景 + 白色文字 + 阴影 |
| 按压 | scale(0.97) |

#### Secondary Button（.btn-cart）

| 状态 | 样式 |
|------|------|
| 默认 | 浅粉色背景 + 粉色文字 |
| 按压 | scale(0.97) |

#### Quick Action Icon（.action-icon）

| 类型 | 渐变背景 |
|------|----------|
| AR试妆 | #FF8FB1 → #FF6B9D (粉色) |
| 全部分类 | #C77DFF → #9D4EDD (紫色) |
| 肤质分析 | #FFB347 → #FF8C42 (橙色) |
| 我的 | #6BCB77 → #4ECDC4 (绿色) |

---

## 五、弹窗动效系统

### 5.1 弹窗类型总览

| 弹窗 ID | 类型 | 动画方向 | max-width | 用途 |
|---------|------|----------|-----------|------|
| modal-product | 底部滑出 | translateY(100%) → 0 | 100% | 商品详情 |
| modal-tryon | 居中弹出 | scale(0.9) → scale(1) | 360px | AR试妆 |
| modal-search | 底部滑出 | translateY(100%) → 0 | 100% | 搜索 |
| modal-notification | 底部滑出 | translateY(100%) → 0 | 100% | 消息通知 |
| modal-analysis | 底部滑出 | translateY(100%) → 0 | 100% | 肤质分析 |
| modal-look | 居中弹出 | scale(0.9) → scale(1) | 360px | 妆容详情 |

### 5.2 弹窗基础样式（已验证符合宽度要求）

```css
/* 底部弹窗 - 已验证宽度 */
.modal-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
}

/* 居中弹窗 - 已验证宽度 */
.modal-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% - 40px);
    max-width: 360px;
    box-sizing: border-box;
}
```

### 5.3 弹窗动效时序

**底部滑出弹窗**：
- Duration: 350ms
- Easing: cubic-bezier(0.32, 0.72, 0, 1)
- 背景遮罩: opacity 0 → 0.5 (300ms)

**居中弹出弹窗**：
- Duration: 300ms
- Easing: cubic-bezier(0.32, 0.72, 0, 1)
- 动画: scale(0.9) + opacity(0) → scale(1) + opacity(1)

### 5.4 各弹窗详细内容

#### 商品详情弹窗（modal-product）

| 区域 | 内容 |
|------|------|
| Header | 商品图 + 名称 + 价格 + 关闭按钮 |
| 颜色选择 | 6个颜色选项 (3列网格) |
| 产品详情 | 标签 + 描述文字 |
| Actions | 收藏 + 加入购物车 + 立即购买 |

#### AR试妆弹窗（modal-tryon）

| 区域 | 内容 |
|------|------|
| Header | 标题 + 关闭按钮 |
| 人脸模型 | CSS绘制的简笔画人脸 |
| 彩妆标签 | 口红/眼影/腮红/粉底 切换 |
| 颜色选择 | 8个颜色圆形按钮 |
| Actions | 拍照 + 购买同款 |

**试妆交互**：
- 点击颜色 → 人脸嘴唇颜色变化
- 切换标签 → 切换试妆部位（预留）

#### 搜索弹窗（modal-search）

| 区域 | 内容 |
|------|------|
| 搜索栏 | 搜索图标 + 输入框 + 取消按钮 |
| 热门搜索 | 8个标签（部分高亮） |
| 搜索历史 | 3条历史记录 + 清除按钮 |

#### 消息通知弹窗（modal-notification）

| 区域 | 内容 |
|------|------|
| Header | 标题 + 全部已读按钮 |
| 通知列表 | 4条通知（部分带未读红点） |

#### 肤质分析弹窗（modal-analysis）

| 区域 | 内容 |
|------|------|
| Header | 标题 + 关闭按钮 |
| 肤质卡片 | 肤质类型 + 图标 |
| 雷达图 | 4项指标（水润度/弹性/细腻度/抗痘） |
| 护肤建议 | 3条建议列表 |
| Action | 重新检测按钮 |

**雷达图实现**：使用 CSS conic-gradient 实现环形进度条

#### 妆容详情弹窗（modal-look）

| 区域 | 内容 |
|------|------|
| 关闭按钮 | 毛玻璃背景定位右上角 |
| 妆容图 | 200px 高渐变背景 |
| 妆容信息 | 标签 + 标题 + 描述 |
| 步骤列表 | 5个化妆步骤 |
| Actions | 一键试妆 + 收藏妆容 |

---

## 六、移动端适配方案

### 6.1 目标机型：华为 Pura 80

| 参数 | 值 |
|------|-----|
| 屏幕尺寸 | ~6.7 英寸 |
| 分辨率 | 1224 x 2700 px (约) |
| CSS 宽度 | 412 px (标准) |
| CSS 高度 | 915 px (标准) |
| 像素密度 | ~450 DPI |

### 6.2 基准设计规范

**容器**：
```css
.app-container {
    width: 100%;
    max-width: 412px;      /* 基准宽度 */
    height: 100vh;
    max-height: 915px;     /* 基准高度 */
}
```

**安全区域适配**：
```css
--safe-top: env(safe-area-inset-top, 0px);
--safe-bottom: env(safe-area-inset-bottom, 0px);
```

### 6.3 响应式断点

| 断点 | 屏幕宽度 | 适配策略 |
|------|----------|----------|
| 标准 | 381px - 412px | 基准布局（Pura 80） |
| 中屏 | 341px - 380px | 缩小标题、商品卡片尺寸 |
| 小屏 | ≤340px | 紧凑布局，减少 padding |
| 大屏 | ≥413px | 添加手机边框效果 |

### 6.4 关键尺寸对照表

| 元素 | 412px (基准) | 380px | 340px |
|------|--------------|-------|-------|
| Header padding | 20px | 20px | 16px |
| Banner 标题 | 22px | 20px | 18px |
| Section 标题 | 18px | 16px | 16px |
| Product Card 宽 | 140px | 130px | 130px |
| Product Image 高 | 140px | 130px | 130px |
| Action Icon | 52px | 48px | 48px |
| 圆角 | 16-24px | 16-24px | 16-24px |

### 6.5 竖屏适配（高度）

| 屏幕高度 | 适配策略 |
|----------|----------|
| < 700px | 内容压缩，减小间距 |
| 700px - 850px | 基准布局 |
| > 850px | 底部导航增高，内容区增加 padding |

### 6.6 iOS 异形屏适配

已实现的适配：
- 状态栏高度：`calc(44px + var(--safe-top))`
- 底部安全区：`.bottom-safe { height: var(--safe-bottom); }`
- 底部导航：`padding-bottom: var(--safe-bottom)`

### 6.7 触控优化

| 优化项 | 实现 |
|--------|------|
| 点击区域最小 | 44px x 44px（iOS HIG） |
| 按压反馈 | `transform: scale(0.95-0.98)` |
| 禁用双击缩放 | `maximum-scale=1.0, user-scalable=no` |
| 消除点击高亮 | `-webkit-tap-highlight-color: transparent` |
| 滚动优化 | `-webkit-overflow-scrolling: touch` |

---

## 七、待开发功能清单

### 7.1 高优先级

| 功能 | 页面 | 描述 |
|------|------|------|
| 商品列表页 | 新页面 | 分类商品列表 |
| 商品详情页 | 新页面 | 完整商品信息 |
| 购物车功能 | page-cart | 加入购物车、数量编辑、删除 |
| 结算流程 | 新页面 | 订单确认、地址选择、支付 |
| 登录注册 | 新页面 | 用户认证 |

### 7.2 中优先级

| 功能 | 页面 | 描述 |
|------|------|------|
| AR 试妆增强 | modal-tryon | 接入真实 AR SDK |
| 搜索功能 | modal-search | 接入搜索 API |
| 订单列表 | page-profile | 订单历史 |
| 收藏功能 | page-profile | 收藏管理 |
| 肤质分析 | modal-analysis | 接入肤质检测 |

### 7.3 低优先级

| 功能 | 页面 | 描述 |
|------|------|------|
| 消息推送 | - | 订单通知、优惠活动 |
| 优惠券领取 | - | 优惠券中心 |
| 积分系统 | - | 积分商城 |
| 分享功能 | - | 妆容分享 |

---

## 八、数据模型（预留）

### 8.1 商品数据

```javascript
{
    id: "string",
    name: "string",
    brand: "string",
    category: "string",
    subCategory: "string",
    price: number,
    originalPrice: number,
    colors: [{
        id: "string",
        name: "string",
        hex: "string"
    }],
    tags: ["string"],
    images: ["string"],
    description: "string"
}
```

### 8.2 用户数据

```javascript
{
    id: "string",
    nickname: "string",
    avatar: "string",
    vipLevel: number,
    skinType: "string",
    favoriteCategories: ["string"],
    skinScores: {
        hydration: number,
        elasticity: number,
        smoothness: number,
        acneResistance: number
    }
}
```

### 8.3 妆容数据

```javascript
{
    id: "string",
    name: "string",
    tag: "string",           // 日常通勤/约会/派对
    difficulty: "string",    // 简单/中等/困难
    duration: number,        // 分钟数
    steps: [{
        step: number,
        title: "string",
        description: "string",
        productIds: ["string"]
    }],
    image: "string",
    isHot: boolean
}
```

---

## 九、接口预留（API Contract）

### 9.1 商品接口

| 接口 | 方法 | 路径 | 描述 |
|------|------|------|------|
| 获取商品列表 | GET | /api/products | 分页获取商品 |
| 获取商品详情 | GET | /api/products/:id | 单个商品信息 |
| 获取分类 | GET | /api/categories | 获取分类树 |
| 搜索商品 | GET | /api/products/search | 关键词搜索 |

### 9.2 用户接口

| 接口 | 方法 | 路径 | 描述 |
|------|------|------|------|
| 用户登录 | POST | /api/auth/login | 登录 |
| 获取用户信息 | GET | /api/user/profile | 用户详情 |
| 更新肤质 | PUT | /api/user/skin | 更新肤质信息 |

### 9.3 订单接口

| 接口 | 方法 | 路径 | 描述 |
|------|------|------|------|
| 加入购物车 | POST | /api/cart | 添加商品 |
| 获取购物车 | GET | /api/cart | 购物车列表 |
| 创建订单 | POST | /api/orders | 结算下单 |

---

## 十、技术债务与优化建议

### 10.1 当前实现的问题

| 问题 | 严重程度 | 建议 |
|------|----------|------|
| 所有代码在 index.html | 低 | 拆分组件，按需加载 |
| 商品图片使用 CSS 模拟 | 中 | 替换为真实图片 CDN |
| 无数据持久化 | 高 | 接入后端 API |
| 无状态管理 | 高 | 引入状态管理方案 |
| 缺少错误处理 | 高 | 完善异常场景处理 |

### 10.2 性能优化建议

| 优化项 | 当前 | 建议 |
|--------|------|------|
| CSS | 单文件 | 提取关键 CSS，延迟加载 |
| 图标 | 内联 SVG | 使用 Icon Font 或 SVG Sprite |
| 图片 | 无 | 接入 CDN，WebP 格式 |
| 代码分割 | 无 | 路由级代码分割 |

### 10.3 可访问性改进

| 问题 | 建议 |
|------|------|
| 缺少 ARIA 标签 | 添加语义化 role 和 aria-* |
| 颜色对比度 | 检查并优化文字可读性 |
| 键盘导航 | 添加 Tab 键导航支持 |
| 屏幕阅读器 | 添加 alt 文字和描述 |

---

## 十一、测试用例

### 11.1 弹窗宽度测试

**测试场景**：

1. 在 412px 宽度设备上打开所有弹窗
2. 验证弹窗不超出屏幕边界
3. 验证内容无水平滚动

**预期结果**：

| 弹窗 | 宽度验证 |
|------|----------|
| modal-product | 100% - 0 = 412px |
| modal-tryon | min(100% - 40px, 360px) = 360px |
| modal-search | 100% - 0 = 412px |
| modal-notification | 100% - 0 = 412px |
| modal-analysis | 100% - 0 = 412px |
| modal-look | min(100% - 40px, 360px) = 360px |

### 11.2 移动端适配测试

**测试设备**：

| 设备 | 宽度 | 预期 |
|------|------|------|
| iPhone SE | 320px | 小屏布局 |
| iPhone 14 | 390px | 中屏布局 |
| 华为 Pura 80 | 412px | 基准布局 |
| iPhone 14 Pro Max | 430px | 大屏布局 + 边框 |

**测试项**：

- [ ] 状态栏正确显示
- [ ] 内容无溢出
- [ ] 底部导航正确适配
- [ ] 弹窗宽度正确

---

## 附录

### A. 术语表

| 术语 | 定义 |
|------|------|
| AR试妆 | Augmented Reality Virtual Try-on，通过摄像头实时预览上妆效果 |
| 肤质分析 | 基于问卷或检测评估用户皮肤类型和状态 |
| SKU | Stock Keeping Unit，库存量单位，此处指商品规格 |
| SPA | Single Page Application，单页面应用 |

### B. 参考资料

- [Google Material Design 3](https://m3.material.io/)
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [华为鸿蒙设计规范](https://developer.huawei.com/consumer/cn/design/)

---

**文档版本历史**：

| 版本 | 日期 | 修改内容 |
|------|------|----------|
| 1.0.0 | 2026-06-27 | 初始版本，基于 demo v3.2.0 |
