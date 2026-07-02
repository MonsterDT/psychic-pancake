# 妆伴 MakeupPal - 鸿蒙应用

美妆闺蜜AI应用，你的专属美妆顾问。

## 项目概述

本项目是基于HarmonyOS的美妆闺蜜AI应用，包含以下核心功能：

- 🌸 **小美聊天**：与AI美妆闺蜜小美进行自然语言对话
- 🎤 **语音唤醒**：说出"小美小美"唤醒语音交互系统
- ⚙️ **专属设置**：自定义小美的性格特征、专业领域、记忆功能和交互风格

## 技术栈

- **语言**：ArkTS (TypeScript 超集)
- **框架**：ArkUI (鸿蒙UI框架)
- **构建工具**：Hvigor
- **SDK版本**：API 11+

## 项目结构

```
harmonyos/
├── app.json5                 # 应用配置
├── hvigorfile.ts             # Hvigor构建配置
├── package.json              # 依赖配置
└── entry/
    ├── module.json5          # 模块配置
    └── src/main/
        ├── resources/        # 资源文件
        │   └── base/
        │       ├── element/  # 颜色、尺寸、字符串
        │       └── profile/  # 页面配置
        └── ets/              # TypeScript源代码
            ├── MainAbility/  # 主Ability
            ├── services/     # 服务层
            └── pages/        # 页面组件
```

## 开发环境配置

### 步骤1：安装DevEco Studio

下载并安装HarmonyOS开发工具：
https://developer.huawei.com/consumer/cn/deveco-studio/

### 步骤2：配置SDK

1. 打开DevEco Studio
2. 进入 `Settings > Appearance & Behavior > System Settings > HarmonyOS SDK`
3. 安装API 11及以上版本的SDK

### 步骤3：导入项目

1. 打开DevEco Studio
2. 选择 `Open > 选择harmonyos目录`
3. 等待项目同步完成

## 核心功能

### 1. AI聊天功能

- 支持文本输入和语音输入
- 根据用户输入生成个性化回复
- 响应不同美妆话题（彩妆、护肤等）

### 2. 语音唤醒功能

- 唤醒词："小美小美"
- 基于鸿蒙SpeechRecognizer API
- 实时语音识别和命令解析

### 3. 设置功能

| 设置项 | 选项 |
|--------|------|
| AI性格特征 | 温柔贴心、专业严谨、活泼开朗 |
| 专业领域 | 全部、彩妆、护肤、发型、美甲 |
| 记忆功能 | 开启/关闭 |
| 交互风格 | 简洁明了、详细丰富、幽默风趣 |

## 权限说明

应用需要以下权限：

- `ohos.permission.RECORD_AUDIO` - 语音识别
- `ohos.permission.INTERNET` - 网络请求
- `ohos.permission.ACCESS_NETWORK_STATE` - 网络状态

## 构建与运行

### 使用构建脚本（推荐）

**Windows 命令行：**
```bash
build.bat
```

**PowerShell：**
```bash
.\build.ps1
```

构建脚本会自动完成以下步骤：
1. 检查 Node.js 环境
2. 检查 Hvigor 构建工具
3. 安装项目依赖
4. 执行 HAP 构建

### npm 脚本命令

| 命令 | 说明 |
|------|------|
| `npm run build:hap` | 构建 HAP 包（默认 debug） |
| `npm run build:debug` | 构建 debug 版本 HAP |
| `npm run build:release` | 构建 release 版本 HAP |
| `npm run build:app` | 构建 APP 包 |
| `npm run build:all` | 同时构建 HAP 和 APP |
| `npm run clean` | 清理构建产物 |
| `npm run start` | 运行应用到设备 |
| `npm run install` | 安装 HAP 到设备 |

### 构建产物

构建成功后，HAP 文件位于：
```
entry/build/outputs/hap/debug/
```

## 设备适配

- ✅ 手机 (phone)
- ✅ 平板 (tablet)

## 开发说明

### 创建新页面

1. 在 `entry/src/main/resources/base/profile/main_pages.json` 添加页面路径
2. 在 `entry/src/main/ets/pages/` 创建新页面组件

### 添加资源

1. 字符串资源：`entry/src/main/resources/base/element/string.json`
2. 颜色资源：`entry/src/main/resources/base/element/color.json`
3. 尺寸资源：`entry/src/main/resources/base/element/dimen.json`

## 代码规范

- 使用 `@Entry` 和 `@Component` 装饰器定义组件
- 使用 `@State` 管理组件状态
- 使用 `$r('app.resource.name')` 引用资源
- 遵循HarmonyOS官方代码风格指南

## 许可证

MIT License
