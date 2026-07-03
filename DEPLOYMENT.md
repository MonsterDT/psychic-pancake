# MakeupPal V3.6.5 项目启动与部署指南

## 📋 项目概述

- **项目类型**: 静态单页应用 (SPA)
- **核心文件**: `makeuppal-demo-v3.6.5.html` (约 879KB)
- **展示平台**: `showcase.html` (产品展示页)
- **技术栈**: HTML5 + CSS3 + 原生 JavaScript
- **无需构建**: 所有代码已打包在单个 HTML 文件中

---

## 🔧 本地开发服务器启动指南

### 方式一：PowerShell HTTP 服务器（推荐）

#### 前置条件

- 操作系统：Windows 10/11
- PowerShell 版本：5.1 或更高

#### 启动步骤

```powershell
# 1. 进入项目目录
cd "d:\文件\梵妮美学\AI业务\trae大赛\IDE的库\psychic-pancake"

# 2. 启动服务器（自动加载 V3.6.5）
powershell -ExecutionPolicy Bypass -File server.ps1
```

#### 服务器输出

```
Server started at http://localhost:8081/
```

#### 访问地址

| 页面 | URL |
|------|-----|
| 主应用 | http://localhost:8081/makeuppal-demo-v3.6.5.html |
| 展示平台 | http://localhost:8081/showcase.html |
| 首页（默认） | http://localhost:8081/ |

### 方式二：Node.js http-server

#### 前置条件

```powershell
# 安装 Node.js
winget install OpenJS.NodeJS.LTS

# 安装 http-server
npm install -g http-server
```

#### 启动步骤

```powershell
# 进入项目目录
cd "d:\文件\梵妮美学\AI业务\trae大赛\IDE的库\psychic-pancake"

# 启动服务器（端口 8080）
http-server -p 8080 -c-1
```

### 方式三：Python HTTP 服务器

#### 前置条件

```powershell
# 检查 Python 安装
python --version
```

#### 启动步骤

```powershell
# Python 3
python -m http.server 8080

# Python 2
python -m SimpleHTTPServer 8080
```

---

## 🌐 Netlify 部署指南

### 方案一：手动部署（快速上手）

#### 步骤 1：注册账号

访问 [https://app.netlify.com/signup](https://app.netlify.com/signup) 使用 GitHub/GitLab/Email 注册

#### 步骤 2：创建站点

1. 登录后点击 **"Add new site"** → **"Deploy manually"**
2. 点击 **"Deploy"** 进入上传界面

#### 步骤 3：准备上传文件

将以下文件压缩为 ZIP 包：

```
makeuppal-demo-v3.6.5.html
showcase.html
netlify.toml
_shared/
  js/
    echarts.min.js
  fonts/
    GeistMono-Regular.ttf
    InstrumentSans-Bold.ttf
    InstrumentSans-Regular.ttf
assets/
  charts.js
```

#### 步骤 4：上传部署

1. 拖放 ZIP 文件到上传区域
2. 等待部署完成（约 1-2 分钟）
3. 获取默认域名（如 `xxxxxx.netlify.app`）

### 方案二：GitHub + Netlify 自动部署（推荐）

#### 步骤 1：安装 Git

```powershell
winget install Git.Git
```

#### 步骤 2：配置 Git

```powershell
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

#### 步骤 3：初始化仓库

```powershell
cd "d:\文件\梵妮美学\AI业务\trae大赛\IDE的库\psychic-pancake"
git init
```

#### 步骤 4：创建 .gitignore

创建 `.gitignore` 文件，排除不必要的文件：

```
node_modules/
*.log
.uploads/
demo-dist/
*.pyc
__pycache__/
*.zip
```

#### 步骤 5：提交代码

```powershell
git add .
git commit -m "chore: deploy MakeupPal V3.6.5"
```

#### 步骤 6：推送到 GitHub

```powershell
# 创建远程仓库
git remote add origin https://github.com/your-username/makeuppal.git
git branch -M main
git push -u origin main
```

#### 步骤 7：连接 Netlify

1. 登录 [Netlify](https://app.netlify.com)
2. 点击 **"Add new site"** → **"Import an existing project"**
3. 选择 GitHub 并授权
4. 选择你的 `makeuppal` 仓库
5. 配置构建：
   - Build command: 留空
   - Publish directory: `.`
6. 点击 **"Deploy site"**

#### 步骤 8：自动部署

每次推送到 `main` 分支，Netlify 会自动触发部署。

### 方案三：Netlify CLI 部署

#### 步骤 1：安装 Node.js

```powershell
winget install OpenJS.NodeJS.LTS
```

#### 步骤 2：安装 Netlify CLI

```powershell
npm install -g netlify-cli
```

#### 步骤 3：登录 Netlify

```powershell
netlify login
```

#### 步骤 4：初始化项目

```powershell
cd "d:\文件\梵妮美学\AI业务\trae大赛\IDE的库\psychic-pancake"
netlify init
```

按照提示选择：
- Create & configure a new site
- 输入站点名称（可选）

#### 步骤 5：预览部署

```powershell
netlify deploy
```

#### 步骤 6：生产部署

```powershell
netlify deploy --prod
```

---

## ⚙️ Netlify 配置说明

### netlify.toml 完整配置

```toml
[build]
  publish = "."
  command = ""

[[redirects]]
  from = "/*"
  to = "/makeuppal-demo-v3.6.5.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

### 配置说明

| 配置项 | 说明 |
|--------|------|
| `publish` | 发布目录，设为当前目录 `.` |
| `command` | 构建命令，静态文件无需构建，留空 |
| `redirects` | SPA 路由重定向，所有请求指向主应用 |
| `headers` | 安全头配置，增强网站安全性 |

---

## ✅ 验证方法

### 本地预览验证

#### 启动验证

```powershell
# 检查服务器是否启动
curl http://localhost:8081/ -UseBasicParsing | Select-Object -ExpandProperty StatusCode
# 预期输出：200
```

#### 功能验证清单

| 测试项 | 操作 | 预期结果 |
|--------|------|----------|
| 首页加载 | 访问 http://localhost:8081/ | V3.6.5 版本正常显示 |
| 版本号 | 查看页面标题或控制台 | 显示 "V3.6.5" |
| 底部导航 | 点击 5 个 tab | 页面切换正常 |
| 登录功能 | 点击我的 → 登录 | 登录成功，状态持久化 |
| 引导流程 | 首次访问 | 5 步引导正常显示 |
| 颜库浏览 | 点击颜库 | 卡片滑动正常 |
| 相机模块 | 点击焕新 → 拍照 | 摄像头调用正常 |
| AI 聊天 | 点击美妆闺蜜 AI | 聊天窗口正常打开 |
| 成分扫描 | 点击成分扫描 | 扫描界面正常显示 |
| 市集浏览 | 点击市集 | 商品列表正常显示 |

#### 浏览器控制台验证

打开浏览器开发者工具（F12）→ Console：

```javascript
// 检查版本
console.log('MakeupPal V3.6.5 loaded') // 应看到此日志

// 检查 localStorage
localStorage.getItem('isLoggedIn') // 登录后返回 "true"
localStorage.getItem('onboardingCompleted') // 完成引导后返回 "true"
```

### 线上部署验证

#### 基础验证

| 测试项 | 操作 | 预期结果 |
|--------|------|----------|
| HTTPS | 查看地址栏 | 显示安全锁图标 |
| 域名访问 | 访问 `xxxxxx.netlify.app` | 首页正常加载 |
| 资源加载 | 查看 Network 面板 | 所有资源 200 OK |
| 响应时间 | 查看 Performance | 首屏加载 < 3s |

#### 功能验证

使用手机和桌面浏览器分别测试：

1. **移动端验证**:
   - 访问网站
   - 测试底部导航
   - 测试卡片滑动
   - 测试相机功能

2. **桌面端验证**:
   - 访问网站
   - 测试响应式布局
   - 测试所有功能模块

#### 跨域验证

检查控制台是否有 CORS 错误：

```javascript
// 打开控制台，无红色错误信息
// 图片加载正常（使用 trae-api-cn.mchost.guru）
```

---

## 🐛 常见问题与解决方案

### 本地开发问题

#### Q1: 服务器启动失败，提示端口占用

```powershell
# 查找占用进程
netstat -ano | findstr :8080

# 终止进程（将 <PID> 替换为实际进程ID）
taskkill /F /PID <PID>
```

#### Q2: 页面无法加载，显示空白

- 检查服务器是否在项目根目录启动
- 确认文件路径正确
- 清除浏览器缓存（Ctrl+Shift+Delete）
- 检查控制台错误信息

#### Q3: 图片不显示

- 检查网络连接
- 确认 `trae-api-cn.mchost.guru` 可访问
- 检查控制台是否有 CORS 错误

#### Q4: 相机功能无法使用

- 使用 HTTPS 或 localhost 访问
- 允许浏览器摄像头权限
- 检查是否在 iframe 中（部分浏览器限制）

#### Q5: localStorage 数据丢失

- 浏览器隐私模式会清除 localStorage
- 检查浏览器是否设置为"退出时清除数据"

### Netlify 部署问题

#### Q1: 部署后显示 404

- 检查 `netlify.toml` 重定向规则
- 确认 `publish` 目录配置正确
- 检查文件是否正确上传

#### Q2: 页面样式错乱

- 清除浏览器缓存
- 检查 CSS 引用路径
- 确认所有资源文件已上传

#### Q3: 图片加载缓慢

- Netlify CDN 首次加载需要缓存
- 后续访问会自动加速
- 考虑使用图片优化服务

#### Q4: 自定义域名无法访问

- 确认 DNS 记录已生效（可能需要 24-48 小时）
- 检查域名是否已在 Netlify 验证
- 确认 HTTPS 证书已生成

#### Q5: 构建失败

- 确认 Build command 留空
- 检查 Publish directory 配置
- 查看构建日志获取详细错误信息

### 微信小程序问题

#### Q1: web-view 白屏

- 确认服务器已启动
- 检查 URL 是否正确
- 确认域名已添加到业务域名白名单
- 使用企业小程序账号（个人账号有限制）

#### Q2: 小程序审核不通过

- 确保所有功能正常
- 添加隐私政策页面
- 完善小程序信息
- 确保不使用测试号发布

---

## 📱 移动端访问

### 本地开发

确保手机和电脑在同一局域网：

1. 查找电脑 IP 地址：
   ```powershell
   ipconfig | findstr IPv4
   ```

2. 手机浏览器访问：
   ```
   http://<电脑IP>:8080/makeuppal-demo-v3.6.5.html
   ```

### 线上部署

直接在手机浏览器访问 Netlify 域名：

```
https://xxxxxx.netlify.app
```

---

## 📊 性能优化建议

### 资源优化

- 图片使用 WebP 格式（当前使用 API 生成）
- 启用 Gzip 压缩（Netlify 自动支持）
- 利用浏览器缓存（已在 headers 配置）

### 代码优化

- 懒加载非关键资源
- 优化 JavaScript 执行效率
- 减少 DOM 操作

### CDN 加速

Netlify 自动提供全球 CDN 加速，无需额外配置。

---

## 📞 技术支持

| 资源 | 链接 |
|------|------|
| Netlify 文档 | [https://docs.netlify.com](https://docs.netlify.com) |
| 微信小程序文档 | [https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html](https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html) |
| 项目源码 | [https://github.com/monsterDT/makeuppal](https://github.com/monsterDT/makeuppal) |
