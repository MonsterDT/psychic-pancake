# 妆伴 MakeupPal 微信小程序

基于 MakeupPal v3.6.0 HTML demo 完整原生转换的微信小程序版本。

## 项目结构

```
makeuppal-miniprogram/
├── app.js / app.json / app.wxss     # 全局入口与配置
├── assets/                           # 静态资源（图标、图片）
├── components/                       # 13个公共组件
├── utils/                            # 9个工具模块
├── data/                             # 11个数据模块
├── styles/                           # 共享样式
├── pages/                            # 主包5个tab页
├── packageA/                         # 分包：交易链路（8页）
├── packageB/                         # 分包：颜库详情（9页）
├── packageC/                         # 分包：创作者（10页）
├── packageD/                         # 分包：特殊流程（11页）
└── custom-tab-bar/                   # 自定义tabBar
```

## 功能模块

- **首页**：面部档案卡片、金刚位入口、轮播Banner、热门推荐
- **颜库**：Tinder卡片滑动（movable-view）+ 瀑布流模式切换
- **焕新**：虚拟试妆（camera组件）
- **市集**：商品浏览与购买
- **我的**：用户中心、焕新值管理、创作者中心
- **美妆闺蜜AI**：8场景智能妆容推荐

## 开发环境

1. 下载微信开发者工具
2. 导入项目，选择 `makeuppal-miniprogram` 目录
3. AppID 选择测试号或填入自己的AppID

## 技术栈

- 微信小程序原生开发（WXML + WXSS + JS）
- 主包+分包架构（主包<2MB，分包<1.5MB）
- CSS变量系统（70个设计变量）
- localStorage → wx.storage 适配
