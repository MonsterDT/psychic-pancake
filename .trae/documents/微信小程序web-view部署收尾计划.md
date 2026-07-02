# 微信小程序 web-view 部署收尾计划

## 任务背景

用户因原生转换存在兼容性问题，决定改用 **web-view 嵌入** 方案部署 MakeupPal v3.6.0 demo 到微信小程序。前序会话已完成约 90% 实施（Tasks #45-48），唯一阻塞项是 Task #49「启动本地服务器」—— Python 不可用（仅 Windows Store 占位符），Node/Go 均未安装。

本计划聚焦于**收尾剩余工作**：启动服务器、修复小问题、通知用户测试。

## 当前状态分析（Phase 1 探查结果）

### ✅ 已完成（前序会话产出）

**1. 小程序壳工程（12 文件，最小化 web-view 架构）**
- `makeuppal-miniprogram/app.json` —— 仅 1 个页面 `pages/webview/webview`，window 配置玫瑰金主题（#FFF8F0）
- `makeuppal-miniprogram/app.js` —— 最小化 `App({ onLaunch, globalData: { sharePayload: null } })`
- `makeuppal-miniprogram/app.wxss` —— `page { height: 100%; background: #FFF8F0; }`
- `makeuppal-miniprogram/project.config.json` —— `urlCheck: false`（绕过域名白名单校验），`appid: touristappid`，`libVersion: 3.3.4`
- `makeuppal-miniprogram/pages/webview/webview.{wxml,wxss,js,json}` —— web-view 容器页，完整实现：
  - 默认 URL：`http://localhost:8080/makeuppal-demo-v3.6.0.html`
  - `onMessage` 接收 H5 postMessage（分享数据），缓存至 `_sharePayload` 和 `globalData.sharePayload`
  - `onShareAppMessage` / `onShareTimeline` 用缓存的分享数据生成转发卡片
  - `onWebViewError` 弹窗提示用户检查服务器
- `makeuppal-miniprogram/sitemap.json` / `.gitignore` —— 保留

**2. Demo HTML 6 处修改（makeuppal-demo-v3.6.0.html）**
- 行 10：引入 JSSDK `<script src="https://res.wx.qq.com/open/js/jweixin-1.3.2.js"></script>`
- 行 17943-17951：`_mpEnv` 环境检测 + `checkMiniProgramEnv()` 调用 `wx.miniProgram.getEnv()`
- 行 17953-17977：`mpConfirm(message, onOk)` 自定义弹窗（移动/小程序环境用 DOM 弹窗，桌面回退原生 confirm）
- 行 20610：`clearCart()` 的 `confirm` → `mpConfirm`
- 行 20953：`cancelOrder()` 的 `confirm` → `mpConfirm`
- 行 20991：`confirmReceive()` 的 `confirm` → `mpConfirm`
- 行 21113-21129：`doShare(platform)` 增加 postMessage 分支，引导用户点胶囊菜单分享
- Grep 验证：`confirm(['"]` 0 匹配（全部转换完成）

**3. 本地服务器脚本（已存在）**
- `server.ps1` —— PowerShell `System.Net.HttpListener` 实现，监听 `http://localhost:8080/`
- 支持 html/css/js/jpg/png/svg 内容类型
- **问题**：行 14 默认 fallback 是 `/makeuppal-demo-v3.3.0.html`（旧版本），但 webview.js 显式请求 v3.6.0.html，所以不影响功能，仅是 fallback 不一致

### ⚠️ 需修复的小问题

1. **`webview.js` 行 43**：错误提示文案是 `python -m http.server 8080`，但实际用的是 PowerShell 脚本，应改为 `powershell -ExecutionPolicy Bypass -File server.ps1`，避免用户按提示找不到 python
2. **`server.ps1` 行 14**：默认 fallback 改为 v3.6.0.html（保持一致性，虽然不影响主流程）
3. **`README.md`**：仍描述原生转换架构（13 组件 / 38 分包页 / custom-tab-bar），与当前 web-view 壳工程完全不符，需重写

### ❌ 阻塞项

- **本地服务器未启动**：前序会话尝试 `python -m http.server 8080` 失败（exit code 9009，Python 是 Windows Store 占位符）。需用 `server.ps1` + `-ExecutionPolicy Bypass` 启动
- **PowerShell 执行策略限制**：直接运行 `.ps1` 会报 `UnauthorizedAccess`，必须用 `-ExecutionPolicy Bypass` 参数绕过

## 实施计划

### Step 1：修复 webview.js 错误提示文案（小修复）

**文件**：`makeuppal-miniprogram/pages/webview/webview.js`

**修改**：行 43 的 `onWebViewError` 弹窗 content
- 旧：`'页面加载失败，请检查本地服务器是否启动\n(python -m http.server 8080)'`
- 新：`'页面加载失败，请检查本地服务器是否启动\n(powershell -ExecutionPolicy Bypass -File server.ps1)'`

**理由**：避免误导用户找 python，与实际启动方式一致

### Step 2：修复 server.ps1 默认 fallback（小修复）

**文件**：`server.ps1`

**修改**：行 14
- 旧：`if ($path -eq "/") { $path = "/makeuppal-demo-v3.3.0.html" }`
- 新：`if ($path -eq "/") { $path = "/makeuppal-demo-v3.6.0.html" }`

**理由**：保持版本一致性，避免访问根路径时加载旧版 demo

### Step 3：重写 README.md（文档同步）

**文件**：`makeuppal-miniprogram/README.md`

**新内容**：反映 web-view 壳工程架构
- 项目结构：仅 `app.js/json/wxss` + `pages/webview/` 4 文件
- 工作原理：web-view 加载本地 H5 demo
- 开发环境要求：PowerShell（Windows 自带）/ 微信开发者工具
- 启动步骤：`powershell -ExecutionPolicy Bypass -File server.ps1` → 导入项目 → 编译预览
- 注意事项：touristappid 仅在开发者工具可用；正式发布需企业主体 + 配置业务域名

### Step 4：启动本地 HTTP 服务器（后台运行）

**命令**：
```
powershell -ExecutionPolicy Bypass -File "d:\文件\梵妮美学\AI业务\trae大赛\IDE的库\psychic-pancake\server.ps1"
```

**执行方式**：`run_in_background: true`（服务器需持续运行，不能阻塞）

**工作目录**：`d:\文件\梵妮美学\AI业务\trae大赛\IDE的库\psychic-pancake\`（server.ps1 用 `Get-Location` 作为 baseDir，必须在项目根目录运行）

### Step 5：验证服务器可用性

**命令**：用 `Invoke-WebRequest` 测试
```
powershell -Command "try { $r = Invoke-WebRequest -Uri 'http://localhost:8080/makeuppal-demo-v3.6.0.html' -UseBasicParsing -TimeoutSec 5; Write-Host 'Status:' $r.StatusCode; Write-Host 'Length:' $r.Content.Length; Write-Host 'ContentType:' $r.Headers['Content-Type'] } catch { Write-Host 'ERROR:' $_.Exception.Message }"
```

**预期**：
- StatusCode: 200
- Content.Length > 800000（demo HTML 约 879KB）
- Content-Type: text/html; charset=utf-8

### Step 6：通知用户在微信开发者工具中测试

通过最终回复告知用户：
1. 服务器已启动，访问地址：`http://localhost:8080/makeuppal-demo-v3.6.0.html`
2. 打开微信开发者工具，导入项目目录 `makeuppal-miniprogram/`
3. AppID 选「测试号」（touristappid 已配置）
4. 编译预览，按测试清单验证

**测试清单**（用户手动执行）：

| 测试项 | 验证方法 | 预期结果 |
|--------|----------|----------|
| web-view 加载 | 编译后查看页面 | demo 首页正常显示，无白屏 |
| SPA 导航 | 点击底部 5 个 tab | 页面切换正常，无刷新 |
| 颜库卡片滑动 | 颜库页右滑/左滑 | 卡片滑动 + 喜欢收藏 + Toast 反馈 |
| 美妆闺蜜 AI | 点击焕新 tab 或浮动按钮 | 弹窗打开，可输入对话 |
| 商品详情 | 市集页点击商品 | 跳转详情页，图片加载 |
| 分享功能 | 点击 H5 内分享按钮 | Toast 提示「请点击右上角···」 |
| 原生分享 | 点右上角胶囊 → 转发 | 弹出转发面板，标题正确 |
| localStorage | 登录后刷新 | 登录状态保持 |
| confirm 弹窗 | 触发清空购物车/取消订单 | 自定义弹窗显示，非原生 |
| 图片加载 | 浏览各页面 | trae-api-cn 图片正常显示 |

## 假设与决策

1. **使用 PowerShell HttpListener**：Python/Node/Go 均不可用，PowerShell 是 Windows 自带的唯一可用方案。`server.ps1` 已存在且功能完整，无需另写
2. **`-ExecutionPolicy Bypass` 绕过限制**：系统默认执行策略禁止运行 .ps1，必须用此参数。仅在当前进程生效，不修改系统策略
3. **后台运行服务器**：用 `run_in_background: true`，避免阻塞会话。服务器持续运行直到会话结束或手动停止
4. **保留 touristappid**：开发者工具中测试号可用 web-view（正式发布需企业主体 + 业务域名配置，但当前仅做开发演示）
5. **不修改 demo HTML 的其他部分**：6 处修改已验证完整，无需进一步改动
6. **README.md 重写为 web-view 架构**：原内容描述原生转换，与现状完全不符，会误导用户

## 风险与限制

| 风险 | 影响 | 缓解措施 |
|------|------|----------|
| touristappid 在开发者工具中 web-view 受限 | web-view 不显示 | 已知限制，开发者工具一般可用；真机需企业 appid |
| HttpListener 需要 admin 权限 | 启动失败 | localhost:8080 通常不需要 admin，netsh acl 默认允许 |
| 图片域名 trae-api-cn.mchost.guru 被拦截 | 图片不显示 | `urlCheck: false` 已绕过开发者工具校验 |
| postMessage 非实时 | 分享数据延迟 | 已在 onShareAppMessage 中读 `_sharePayload`，用户点胶囊时数据已就绪 |
| 服务器后台进程被回收 | web-view 加载失败 | 用户可重新执行 Step 4 命令重启 |

## 验证步骤

### 自动验证（AI 执行）
1. Step 1-3 修改后，Grep 确认 webview.js 文案已更新、server.ps1 fallback 已更新、README.md 内容已重写
2. Step 4 服务器启动后，检查后台任务状态为 running
3. Step 5 Invoke-WebRequest 返回 200 + Content.Length > 800000

### 手动验证（用户在微信开发者工具执行）
- 按上述测试清单 10 项逐一验证
- 重点关注：web-view 是否白屏、SPA 导航是否正常、分享流程是否通畅

## 执行顺序

1. **Step 1** → 修复 webview.js 错误提示文案
2. **Step 2** → 修复 server.ps1 默认 fallback
3. **Step 3** → 重写 README.md
4. **Step 4** → 后台启动 server.ps1
5. **Step 5** → 验证服务器响应
6. **Step 6** → 通知用户测试（最终回复）

## 后续可选（不在本计划范围）

- Git 提交 web-view 壳工程改动（用户可手动触发）
- 真机预览（需注册企业小程序 + 配置业务域名）
- 性能优化（web-view 加载速度、图片懒加载等）
