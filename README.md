# 妆伴 MakeupPal V3.6.5

智能美妆助手 - trae 大赛参赛作品

## 📋 项目概述

- **项目类型**: 静态单页应用 (SPA)
- **核心文件**: `makeuppal-demo-v3.6.5.html`
- **展示平台**: `showcase.html`
- **技术栈**: HTML5 + CSS3 + 原生 JavaScript
- **无需构建**: 所有代码已打包在单个 HTML 文件中

## 🔧 快速启动

### 方式一：PowerShell HTTP 服务器（推荐）

```powershell
cd "d:\文件\梵妮美学\AI业务\trae大赛\IDE的库\psychic-pancake"
powershell -ExecutionPolicy Bypass -File server.ps1
```

访问地址：
- 主应用: http://localhost:8081/makeuppal-demo-v3.6.5.html
- 展示平台: http://localhost:8081/showcase.html
- 首页: http://localhost:8081/

### 方式二：Node.js http-server

```powershell
npm install -g http-server
http-server -p 8081 -c-1
```

### 方式三：Python HTTP 服务器

```powershell
python -m http.server 8081
```

## 🗂️ 项目结构

```
psychic-pancake/
├── makeuppal-demo-v3.6.5.html    # 主应用（V3.6.5）
├── showcase.html                 # 产品展示平台
├── server.ps1                    # PowerShell HTTP 服务器
├── netlify.toml                  # Netlify 部署配置
├── DEPLOYMENT.md                 # 详细部署指南
├── _shared/                      # 共享资源
│   ├── js/echarts.min.js         # 图表库
│   └── fonts/                    # 字体文件
├── assets/                       # 静态资源
├── makeuppal-miniprogram/        # 微信小程序壳工程
└── harmonyos/                    # HarmonyOS 应用
```

## 🌐 部署

详细部署指南请参考 [DEPLOYMENT.md](DEPLOYMENT.md)

### Netlify 一键部署

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/monsterDT/makeuppal)

## 📱 功能模块

1. **首页** - 美妆资讯与推荐
2. **颜库** - 妆容卡片浏览（Tinder模式）
3. **焕新** - 虚拟试妆与面部数据采集
4. **市集** - 美妆商品商城
5. **我的** - 用户个人中心
6. **美妆闺蜜AI** - AI 美妆顾问聊天
7. **成分扫描** - 化妆品成分分析

## 🐛 常见问题

请参考 [DEPLOYMENT.md](DEPLOYMENT.md) 中的"常见问题与解决方案"章节

## 📞 技术支持

- Netlify 文档: https://docs.netlify.com
- 微信小程序文档: https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html
