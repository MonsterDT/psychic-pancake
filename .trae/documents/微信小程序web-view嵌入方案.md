# 微信小程序 web-view 嵌入方案

## Context（背景与动机）

之前已完成 MakeupPal v3.6.0 demo 的微信小程序原生转换（43 页 + 自定义 tabBar），但用户反馈"按照微信标准开发的功能展示页面存在兼容性问题"。经评估，决定**放弃原生转换方案，改用 web-view 组件加载现有 HTML demo**，以确保功能完整性和开发效率。

**用户决策（已确认）**：
1. **URL 提供方式**：本地开发服务器（`python -m http.server 8080`，web-view 加载 `http://localhost:8080/makeuppal-demo-v3.6.0.html`）
2. **原生代码处理**：完全重置工程，删除所有原生页面/组件/数据/工具，只创建最小 web-view 壳工程

## 当前状态分析

### demo HTML 特性（已验证）
- 文件：`makeuppal-demo-v3.6.0.html`（22801 行，纯单文件，无外部 CDN 依赖）
- SPA 架构：`switchTab(tab)` 切换 `.page` 元素 display（行 17942）
- 底部 tab-bar：5 个 tab（首页/颜库/焕新/市集/我的），SVG 图标（行 14133-14170）
- viewport 已配置 `viewport-fit=cover`，CSS 变量在 `:root` 定义（行 11-80）
- 图片域名：`https://trae-api-cn.mchost.guru`（245 处）
- localStorage 26 处（登录态、购物车、收藏等）
- 无 fetch/XHR/geolocation/getUserMedia/Speech 等受限 API

### 关键微信官方限制（Plan agent 调研发现）
1. **个人主体小程序不支持 web-view**——`touristappid`（游客模式）仅在开发者工具内可用，真机预览/上线需企业主体
2. **业务域名必须 HTTPS + ICP 备案**——开发期 `urlCheck: false` 可绕过，仅限开发者工具
3. **`navigationStyle: custom` 对竖屏 web-view 无效**——顶部原生导航栏强制保留（含返回箭头/标题/胶囊按钮）
4. **`postMessage` 非实时**——只在后退/组件销毁/分享时触发 `bindmessage`，无法实时通信
5. **web-view 自动铺满页面**，自动同步 H5 `<title>` 到原生导航栏标题

## 实施方案

### 第一步：工程重置（删除原生代码）

**删除目录**（`makeuppal-miniprogram/` 下）：
- `components/`（13 个组件）
- `custom-tab-bar/`
- `data/`（12 个数据模块）
- `pages/home/`、`pages/library/`、`pages/mirror/`、`pages/mall/`、`pages/profile/`
- `packageA/`、`packageB/`、`packageC/`、`packageD/`（38 个分包页）
- `styles/`
- `utils/`（9 个工具模块）

**保留文件**：
- `project.config.json`（简化：`appid: touristappid`、`urlCheck: false`）
- `sitemap.json`
- `.gitignore`

**重写文件**：
- `app.json`（最小化）
- `app.js`（最小化）
- `app.wxss`（最小化）

**新增文件**：
- `pages/webview/webview.{wxml,wxss,js,json}`

最终目录结构：
```
makeuppal-miniprogram/
├── .gitignore
├── app.js
├── app.json
├── app.wxss
├── project.config.json
├── sitemap.json
└── pages/
    └── webview/
        ├── webview.js
        ├── webview.json
        ├── webview.wxml
        └── webview.wxss
```

### 第二步：创建 web-view 容器页面

**`pages/webview/webview.json`**：
```json
{
  "navigationBarTitleText": "妆伴 MakeupPal",
  "navigationBarBackgroundColor": "#FFF8F0",
  "navigationBarTextStyle": "black",
  "usingComponents": {}
}
```
> 不配置 `navigationStyle: custom`——对竖屏 web-view 无效，保留原生导航栏更稳妥。

**`pages/webview/webview.wxml`**：
```html
<web-view
  src="{{url}}"
  bindmessage="onMessage"
  bindload="onWebViewLoad"
  binderror="onWebViewError">
</web-view>
```

**`pages/webview/webview.js`** 核心逻辑：
- `data.url`：默认 `http://localhost:8080/makeuppal-demo-v3.6.0.html`
- `onLoad(options)`：支持外部传 url 参数
- `onMessage(e)`：接收 H5 postMessage 数据（非实时，后退/销毁/分享时触发），缓存分享数据到 `_sharePayload`
- `onWebViewError(e)`：加载失败时 showModal 提示检查本地服务器
- `onShareAppMessage()`：读取 `_sharePayload` 返回分享卡片配置
- `onShareTimeline()`：朋友圈分享配置

**`pages/webview/webview.wxss`**：
```css
page { height: 100%; background: #FFF8F0; }
```

### 第三步：简化 app 配置

**`app.json`**：
```json
{
  "pages": ["pages/webview/webview"],
  "window": {
    "navigationBarTitleText": "妆伴 MakeupPal",
    "navigationBarBackgroundColor": "#FFF8F0",
    "navigationBarTextStyle": "black",
    "backgroundColor": "#FFF8F0",
    "backgroundTextStyle": "dark"
  },
  "sitemapLocation": "sitemap.json",
  "style": "v2"
}
```
> 移除：subpackages、preloadRule、tabBar（demo 自带底部 tab）、permission、requiredPrivateInfos、lazyCodeLoading

**`app.js`**：
```javascript
App({
  onLaunch() { console.log('[MakeupPal] web-view shell launched'); },
  globalData: { sharePayload: null }
});
```

### 第四步：改造 demo HTML

**4.1 引入微信 JSSDK**（行 9 `<title>` 之后）：
```html
<script src="https://res.wx.qq.com/open/js/jweixin-1.3.2.js"></script>
```

**4.2 新增环境探测函数**（`<script>` 内，`switchTab` 之前）：
```javascript
var _mpEnv = false;
function checkMiniProgramEnv() {
  if (typeof wx === 'undefined' || !wx.miniProgram) return;
  wx.miniProgram.getEnv(function(res) { _mpEnv = !!res.miniprogram; });
}
checkMiniProgramEnv();
```

**4.3 改造 `doShare(platform)` 函数**（行 21076-21143）：
- 小程序环境：所有分享按钮统一改为 `wx.miniProgram.postMessage({data: {type:'share', platform, title, desc}})` + toast 提示"请点击右上角···菜单完成分享"
- 浏览器环境：保留原有 `window.open` / `navigator.share` 逻辑
- 关键限制：postMessage 非实时，用户须点胶囊菜单"转发"才会触发 `onShareAppMessage`

**4.4 改造 `confirm()` 3 处**（行 20573、20916、20954）：
- 新增 `mpConfirm(message, onOk)` 工具函数：小程序环境用自定义 modal（overlay + 确定取消按钮），浏览器环境用原生 `confirm()`
- 行 20573：`clearCart()` 中的 `if (confirm('确定要清空购物车吗？'))` → `mpConfirm('确定要清空购物车吗？', function() { ... })`
- 行 20916：取消订单的 confirm → mpConfirm
- 行 20954：确认收货的 confirm → mpConfirm

**4.5 不改造的部分**：
- `localStorage` 26 处：web-view 内可用，无需改造
- `copyToClipboard`（行 21145）：已有 `execCommand('copy')` 回退，暂不改造
- CSS `:root` 变量、`100vh`、`env(safe-area-inset-*)`：web-view 内核兼容良好
- 底部 tab-bar：demo 自带，与小程序原生 tabBar 互不冲突（app.json 不配置 tabBar）

### 第五步：启动本地服务器

在项目根目录执行：
```bash
python -m http.server 8080
```
访问 URL：`http://localhost:8080/makeuppal-demo-v3.6.0.html`

> **限制**：localhost 仅开发者工具可用，手机扫码预览不可用。真机需企业主体 + HTTPS 域名。

## 关键文件清单

| 文件 | 操作 | 说明 |
|------|------|------|
| `makeuppal-miniprogram/app.json` | 重写 | 最小化，只保留 web-view 页 |
| `makeuppal-miniprogram/app.js` | 重写 | 最小化 |
| `makeuppal-miniprogram/app.wxss` | 重写 | 最小化 |
| `makeuppal-miniprogram/project.config.json` | 简化 | 保留 urlCheck:false |
| `makeuppal-miniprogram/pages/webview/webview.{wxml,wxss,js,json}` | 新建 | web-view 容器页 |
| `makeuppal-miniprogram/components/` 等 9 个目录 | 删除 | 原生转换残留 |
| `makeuppal-demo-v3.6.0.html` | 改造 | 行 9 加 JSSDK；行 21076 改造 doShare；行 20573/20916/20954 改造 confirm |

## 验证步骤

### 准备阶段
1. 启动本地服务器：`python -m http.server 8080`
2. 浏览器访问 `http://localhost:8080/makeuppal-demo-v3.6.0.html` 确认加载正常

### 开发者工具验证
1. 导入 `makeuppal-miniprogram/` 目录
2. 详情 → 本地设置：确认勾选"不校验合法域名、web-view、TLS、HTTPS 证书"（urlCheck: false）
3. 编译运行，验证：
   - web-view 加载 demo，控制台输出 `[webview] loaded`
   - 原生导航栏标题同步为"妆伴 MakeupPal V3.6.0"
   - SPA tab 切换正常（5 个底部 tab）
   - localStorage 持久化（刷新后登录态/购物车/收藏仍存在）
   - 图片正常加载（trae-api-cn.mchost.guru 域名）
   - 分享按钮：点击 → toast"请点击右上角···" → 点胶囊转发 → 分享卡片正确
   - confirm 弹窗：清空购物车/取消订单/确认收货 → 自定义 modal 显示正常

### 常见问题
| 现象 | 原因 | 解决 |
|------|------|------|
| 白屏 | 服务器未启动 | 启动 `python -m http.server 8080` |
| 无法打开页面 | urlCheck 未关 | 详情→本地设置勾选不校验 |
| 图片不显示 | 域名校验 | 确认 urlCheck: false |
| 分享无反应 | JSSDK 未加载 | 确认 jweixin-1.3.2.js 已引入 |
| 真机白屏 | touristappid 限制 | 真机需企业 appid + 业务域名 |

## 风险与限制

1. **个人主体限制**：`touristappid` 仅开发者工具可用，上线需企业主体小程序 + 业务域名配置（demo 域名 + 图片域名 trae-api-cn.mchost.guru）
2. **真机预览不可用**：localhost 在手机不可访问，真机演示需部署到 HTTPS 服务器
3. **分享 UX 折损**：postMessage 非实时，分享流程为"H5 按钮提示→用户点胶囊→转发"，无法点 H5 按钮直接弹出微信分享面板
4. **localStorage 隔离**：web-view 的 localStorage 与小程序 wx.storage 完全隔离，无法跨层读取

## 执行顺序

1. 删除 9 个原生目录（components/custom-tab-bar/data/pages下5页/packageA-D/styles/utils）
2. 重写 app.json / app.js / app.wxss
3. 简化 project.config.json
4. 新建 pages/webview/webview 4 文件
5. 改造 demo HTML（JSSDK + doShare + confirm）
6. 启动本地服务器
7. 通知用户在开发者工具中导入并测试
