# UI 排版统一优化说明

## 版本信息
- 文件：makeuppal-demo-v3.3.0.html
- 修改时间：2026-06-28

---

## 一、新增 CSS 类

### 1. `.page-title` - 页面标题统一样式
```css
.page-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  margin: 0;
  flex: 1;
  text-align: center;
}
```
用途：替代各页面头部 `<h2>` 标签的内联样式，保持标题视觉一致性。

### 2. `.page-content` - 页面内容容器
```css
.page-content {
  padding: var(--spacing-4);
}
```
用途：统一各页面主内容区域的内边距。

### 3. `.page-section` - 页面区块间隔
```css
.page-section {
  margin-bottom: var(--spacing-5);
}
.page-section:last-child { margin-bottom: 0; }
```
用途：页面内各区块间的统一间隔。

### 4. `.section-title-sm` - 小尺寸区块标题
```css
.section-title-sm {
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
}
```
用途：用于子区块标题（如"品牌官方"、"数据看板"等），替代内联样式。

---

## 二、修改页面头部结构

### 涉及页面（共 14 个）

| 页面 ID | 页面名称 | 修改内容 |
|---------|----------|----------|
| page-creator | 创作者中心 | `<h2>` 改为 `<h2 class="page-title">` |
| page-upload | 上传作品 | 头部结构重构，标题移入 `header-left` |
| page-data | 数据中心 | 头部结构重构，标题移入 `header-left` |
| page-earnings | 收益中心 | 头部结构重构，标题移入 `header-left` |
| page-academy | 创作学院 | 头部结构重构，标题移入 `header-left` |
| page-brand | 品牌合作中心 | `<h2>` 改为 `<h2 class="page-title">` |
| page-scan | 成分合规检测 | `<h2>` 改为 `<h2 class="page-title">` |
| page-my-templates | 我的模板 | `<h2>` 改为 `<h2 class="page-title">` |
| page-my-reports | 我的报告 | `<h2>` 改为 `<h2 class="page-title">`，内容区改用 `.page-content` |
| page-toolbox | 工具箱 | `<h2>` 改为 `<h2 class="page-title">`，内容区改用 `.page-content` |
| page-style-pref | 风格偏好 | `<h2>` 改为 `<h2 class="page-title">`，内容区改用 `.page-content` |
| page-report-detail | 报告详情 | `<h2>` 改为 `<h2 class="page-title">` |
| page-store-map | 门店地图 | `<h2>` 已使用 `.page-title`（无需修改） |
| page-favorites | 我的收藏 | 头部从 `favorites-header` 改为标准 `app-header` 结构 |

### 标准头部结构模板
```html
<header class="app-header">
  <div class="header-left">
    <button class="icon-btn" onclick="返回操作">
      <svg>...</svg>
    </button>
    <h2 class="page-title">页面标题</h2>
  </div>
  <div class="header-right">
    <!-- 右侧按钮（可选） -->
  </div>
</header>
<div class="page-content">
  <!-- 页面内容 -->
</div>
```

---

## 三、内联样式清理

### 批量替换记录

| 原内联样式 | 替换为 CSS 类 | 替换数量 |
|------------|---------------|----------|
| `style="font-size: var(--font-size-lg); font-weight: var(--font-weight-bold);"` | `class="page-title"` | 7 处 |
| `style="padding: var(--spacing-4);"`（页面级容器） | `class="page-content"` | 4 处 |
| `style="font-size: var(--font-size-md);"`（section-title） | `class="section-title-sm"` | 6 处 |

---

## 四、安全区域适配优化

修改 `.app-header` 的 padding，增加顶部安全区域支持：
```css
/* 修改前 */
padding: 10px var(--spacing-4);

/* 修改后 */
padding: calc(10px + var(--safe-top)) var(--spacing-4) 10px;
```

---

## 五、页面结构一致性

### 统一后的页面层级结构
```
.page
├── .app-header（固定头部）
│   ├── .header-left
│   │   ├── .icon-btn（返回按钮）
│   │   └── .page-title
│   └── .header-right
├── .page-content（内容区）
│   ├── .page-section（可选）
│   │   ├── .section-header
│   │   │   ├── .section-title 或 .section-title-sm
│   │   │   └── .section-more
│   │   └── 内容区块
│   └── ...
└── 底部间距容器
```

---

## 六、设计规范要点

1. **页面标题**：统一使用 `.page-title`，字体大小 lg、粗体、居中
2. **内容内边距**：统一 16px（`var(--spacing-4)`）
3. **区块标题**：主区块用 `.section-title`（lg），子区块用 `.section-title-sm`（md）
4. **头部安全区**：自动适配 iOS/鸿蒙等设备的安全区域

---

## 七、后续维护建议

1. 新增页面时，参照标准头部结构模板
2. 避免在 HTML 中直接使用内联样式定义字体大小、颜色等基础样式
3. 使用 CSS 变量（`var(--*)`）而非固定值，确保主题可扩展
4. 区块标题优先使用 `.section-title` 或 `.section-title-sm` 类