# 妆伴 MakeupPal 微信小程序（web-view 壳工程）

基于 **web-view 组件**加载 MakeupPal v3.6.0 HTML demo 的微信小程序壳工程。由于原生转换存在兼容性问题，改为用 web-view 嵌入现有 H5 demo，保留完整交互体验。

## 项目结构

```
makeuppal-miniprogram/
├── app.js                  # 全局入口（globalData.sharePayload 缓存分享数据）
├── app.json                # 仅 1 个页面 pages/webview/webview
├── app.wxss                # 全局样式（玫瑰金背景 #FFF8F0）
├── project.config.json     # urlCheck:false 绕过域名校验，appid:touristappid
├── sitemap.json            # 收录配置
├── .gitignore
└── pages/
    └── webview/
        ├── webview.wxml    # <web-view> 容器
        ├── webview.js      # URL 加载 + postMessage 接收 + 分享处理
        ├── webview.wxss
        └── webview.json
```

## 工作原理

1. 小程序启动后进入 `pages/webview/webview` 页面
2. `<web-view src="{{url}}">` 加载本地 H5 demo（默认 `http://localhost:8080/makeuppal-demo-v3.6.0.html`）
3. H5 通过 JSSDK（jweixin-1.3.2.js）调用 `wx.miniProgram.postMessage` 向小程序发送分享数据
4. 小程序 `bindmessage` 接收数据并缓存，在用户点击右上角胶囊「转发」时使用
5. H5 内部为 SPA 架构，5 个 tab 切换不刷新页面，保留全部原 demo 交互

## 开发环境要求

- **PowerShell**（Windows 自带，用于启动本地 HTTP 服务器）
- **微信开发者工具**（最新稳定版）
- 不需要 Python / Node.js / 任何额外运行时

## 启动步骤

### 1. 启动本地 HTTP 服务器

在**项目根目录**（`psychic-pancake/`）执行：

```powershell
powershell -ExecutionPolicy Bypass -File server.ps1
```

看到 `Server started at http://localhost:8080/` 即启动成功。服务器会持续运行，按 `Ctrl+C` 停止。

> 说明：`-ExecutionPolicy Bypass` 仅对当前进程生效，不修改系统执行策略。

### 2. 导入微信开发者工具

1. 打开微信开发者工具
2. 点击「导入项目」
3. 项目目录选择：`makeuppal-miniprogram/`
4. AppID 选择「测试号」（已配置 touristappid）
5. 点击「导入」

### 3. 编译预览

点击工具栏「编译」按钮，web-view 会自动加载 `http://localhost:8080/makeuppal-demo-v3.6.0.html`。

## H5 与小程序的通信

| 方向 | 方式 | 说明 |
|------|------|------|
| H5 → 小程序 | `wx.miniProgram.postMessage(data)` | **非实时**，仅在 H5 后退/组件销毁/分享时触发 `bindmessage` |
| H5 → 小程序 | `wx.miniProgram.navigateBack()` | 实时，用于 H5 内返回按钮 |
| 小程序 → H5 | 无直接 API | 通过 URL 参数传递（`onLoad` 解析 `options.url`） |

### 分享流程

1. 用户在 H5 内点击分享按钮 → `wx.miniProgram.postMessage({ data: { type: 'share', ... } })`
2. H5 显示 Toast：「请点击右上角"···"菜单完成分享」
3. 用户点击右上角胶囊 → 「转发」
4. 小程序 `onShareAppMessage` 读取缓存的 `_sharePayload` 生成转发卡片

## 环境适配（已在 demo HTML 中实现）

- **JSSDK 引入**：`<script src="https://res.wx.qq.com/open/js/jweixin-1.3.2.js"></script>`
- **环境检测**：`wx.miniProgram.getEnv()` 判断是否在小程序内
- **自定义弹窗**：`mpConfirm()` 替代原生 `confirm()`（移动/小程序环境用 DOM 弹窗，桌面回退原生）
- **localStorage**：web-view 内 localStorage 正常工作（与 `wx.storage` 隔离）

## 限制与注意事项

| 限制 | 说明 |
|------|------|
| touristappid | 仅在开发者工具可用，真机预览/发布需企业主体小程序 |
| 业务域名 | 正式发布需在 mp.weixin.qq.com 配置 H5 业务域名（开发者工具用 `urlCheck:false` 绕过） |
| 个人小程序 | 不支持 web-view 组件，需企业/个体工商户主体 |
| 导航栏 | 竖屏 web-view 下 `navigationStyle: custom` 无效，原生导航栏强制显示 |
| postMessage | 非实时，仅在后退/销毁/分享时触发 |

## 技术栈

- 微信小程序原生（WXML + WXSS + JS）
- web-view 组件加载外部 H5
- WeChat JSSDK 1.3.2
- PowerShell HttpListener（本地开发服务器）

## 故障排查

| 问题 | 解决方案 |
|------|----------|
| web-view 白屏 | 检查 server.ps1 是否在运行；浏览器访问 `http://localhost:8080/makeuppal-demo-v3.6.0.html` 验证 |
| 图片不显示 | 确认 `project.config.json` 的 `urlCheck: false`；检查 trae-api-cn 域名网络 |
| 分享无标题 | 先在 H5 内点分享按钮触发 postMessage，再点胶囊转发 |
| 服务器启动失败 | 确认在项目根目录运行；检查 8080 端口是否被占用 |
