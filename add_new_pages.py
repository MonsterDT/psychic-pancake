#!/usr/bin/env python3
"""
添加上传作品页面 + 收益中心页面
"""
import re
import shutil

input_path = '/workspace/makeuppal-demo-v3.3.0.html'

with open(input_path, 'r', encoding='utf-8') as f:
    html = f.read()

print(f"原始文件: {len(html)/1024:.0f} KB")

# ========== 1. 添加 CSS 样式 ==========
print("\n[1/4] 添加CSS样式...")

css_to_add = r"""
/* ============ Upload Work Page ============ */
.upload-work-hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  padding: var(--spacing-5) var(--spacing-5);
  padding-top: calc(var(--spacing-5) + var(--safe-top));
}
.upload-work-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-4);
}
.upload-work-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
}
.upload-work-body {
  padding: var(--spacing-4);
  padding-bottom: 100px;
}
.upload-section {
  margin-bottom: var(--spacing-5);
}
.upload-section-title {
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
  margin-bottom: var(--spacing-3);
  display: flex;
  align-items: center;
  gap: 8px;
}
.upload-section-title::before {
  content: '';
  width: 3px;
  height: 16px;
  background: var(--color-primary);
  border-radius: 2px;
}

/* 封面上传区 */
.cover-upload-area {
  width: 100%;
  aspect-ratio: 4/3;
  border: 2px dashed var(--color-border);
  border-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--color-bg-card);
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
  overflow: hidden;
}
.cover-upload-area:hover {
  border-color: var(--color-primary);
  background: var(--color-primary-lightest);
}
.cover-upload-icon {
  font-size: 40px;
  margin-bottom: var(--spacing-2);
}
.cover-upload-text {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
}
.cover-upload-sub {
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
  margin-top: 4px;
}
.cover-preview {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.cover-remove-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 28px;
  height: 28px;
  background: rgba(0,0,0,0.6);
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  cursor: pointer;
}

/* 步骤上传区 */
.steps-upload-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
}
.step-upload-item {
  display: flex;
  gap: var(--spacing-3);
  padding: var(--spacing-3);
  background: var(--color-bg-card);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-xs);
}
.step-upload-num {
  width: 28px;
  height: 28px;
  background: var(--color-primary);
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  flex-shrink: 0;
}
.step-upload-img {
  width: 80px;
  height: 80px;
  border-radius: var(--radius-md);
  background: var(--color-bg-alt);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  cursor: pointer;
  border: 1px dashed var(--color-border);
}
.step-upload-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.step-upload-img-icon {
  font-size: 24px;
  color: var(--color-text-muted);
}
.step-upload-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}
.step-upload-input {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: 8px 12px;
  font-size: var(--font-size-sm);
  background: var(--color-bg);
  color: var(--color-text);
  outline: none;
  transition: border-color 0.2s;
  font-family: inherit;
  resize: vertical;
  min-height: 36px;
}
.step-upload-input:focus {
  border-color: var(--color-primary);
}
.step-upload-actions {
  display: flex;
  gap: var(--spacing-2);
}
.step-upload-btn {
  padding: 6px 12px;
  font-size: var(--font-size-xs);
  border-radius: var(--radius-sm);
  border: none;
  cursor: pointer;
  background: var(--color-bg-alt);
  color: var(--color-text-secondary);
}
.step-upload-btn.danger {
  color: #ef4444;
  background: #fef2f2;
}
.add-step-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: var(--spacing-3);
  border: 1px dashed var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-bg-card);
  color: var(--color-primary);
  font-size: var(--font-size-sm);
  cursor: pointer;
  width: 100%;
}

/* 视频上传 */
.video-upload-area {
  width: 100%;
  padding: var(--spacing-4);
  border: 2px dashed var(--color-border);
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--color-bg-card);
  cursor: pointer;
  transition: all 0.2s;
}
.video-upload-area:hover {
  border-color: var(--color-primary);
  background: var(--color-primary-lightest);
}
.video-upload-icon {
  font-size: 32px;
  margin-bottom: var(--spacing-2);
}
.video-upload-text {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
}
.video-upload-hint {
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
  margin-top: 4px;
}

/* 商品挂链 */
.product-link-section {
  background: var(--color-bg-card);
  border-radius: var(--radius-md);
  padding: var(--spacing-3);
  box-shadow: var(--shadow-xs);
}
.product-link-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-3);
}
.product-link-title {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text);
}
.product-link-add {
  font-size: var(--font-size-sm);
  color: var(--color-primary);
  cursor: pointer;
}
.linked-product-item {
  display: flex;
  gap: var(--spacing-3);
  padding: var(--spacing-2);
  background: var(--color-bg);
  border-radius: var(--radius-sm);
  margin-bottom: var(--spacing-2);
}
.linked-product-img {
  width: 50px;
  height: 50px;
  border-radius: var(--radius-sm);
  object-fit: cover;
  flex-shrink: 0;
}
.linked-product-info {
  flex: 1;
  min-width: 0;
}
.linked-product-name {
  font-size: var(--font-size-sm);
  color: var(--color-text);
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.linked-product-commission {
  font-size: var(--font-size-xs);
  color: #f59e0b;
}
.linked-product-remove {
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: 18px;
  padding: 4px;
}

/* 标签选择 */
.tag-select-area {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-2);
}
.tag-chip {
  padding: 6px 14px;
  border-radius: var(--radius-full);
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all 0.2s;
}
.tag-chip.active {
  background: var(--color-primary-lightest);
  border-color: var(--color-primary);
  color: var(--color-primary);
}

/* 定价区 */
.price-setting-area {
  background: var(--color-bg-card);
  border-radius: var(--radius-md);
  padding: var(--spacing-4);
  box-shadow: var(--shadow-xs);
}
.price-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-3);
}
.price-label {
  font-size: var(--font-size-sm);
  color: var(--color-text);
}
.price-input-wrap {
  display: flex;
  align-items: center;
  gap: 4px;
}
.price-input {
  width: 80px;
  padding: 8px 12px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-semibold);
  text-align: center;
  background: var(--color-bg);
  color: var(--color-text);
  outline: none;
}
.price-unit {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
}
.price-hint {
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
  margin-top: var(--spacing-2);
}
.price-estimate {
  padding: var(--spacing-3);
  background: var(--color-primary-lightest);
  border-radius: var(--radius-sm);
  margin-top: var(--spacing-3);
}
.price-estimate-title {
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
  margin-bottom: 4px;
}
.price-estimate-value {
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
}

/* 底部发布按钮 */
.upload-work-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: var(--spacing-3) var(--spacing-4);
  padding-bottom: calc(var(--spacing-3) + var(--safe-bottom));
  background: var(--color-bg-card);
  border-top: 1px solid var(--color-border);
  display: flex;
  gap: var(--spacing-3);
  z-index: 100;
}
.publish-btn {
  flex: 1;
  padding: var(--spacing-3);
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  color: #fff;
  border: none;
  border-radius: var(--radius-md);
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-semibold);
  cursor: pointer;
}
.draft-btn {
  padding: var(--spacing-3) var(--spacing-4);
  background: var(--color-bg-alt);
  color: var(--color-text-secondary);
  border: none;
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
  cursor: pointer;
}

/* 商品选择弹层 */
.product-picker-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.5);
  z-index: 2000;
  display: none;
  align-items: flex-end;
}
.product-picker-overlay.show {
  display: flex;
}
.product-picker-sheet {
  width: 100%;
  max-height: 80vh;
  background: var(--color-bg);
  border-radius: 16px 16px 0 0;
  display: flex;
  flex-direction: column;
  animation: slideUp 0.3s ease;
}
@keyframes slideUp {
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
}
.product-picker-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-4);
  border-bottom: 1px solid var(--color-border);
}
.product-picker-title {
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-semibold);
}
.product-picker-close {
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: 20px;
}
.product-picker-body {
  flex: 1;
  overflow-y: auto;
  padding: var(--spacing-3);
}
.product-picker-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-2);
}
.product-picker-item {
  background: var(--color-bg-card);
  border-radius: var(--radius-md);
  padding: var(--spacing-2);
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.2s;
}
.product-picker-item.selected {
  border-color: var(--color-primary);
}
.product-picker-item img {
  width: 100%;
  aspect-ratio: 1;
  border-radius: var(--radius-sm);
  object-fit: cover;
  margin-bottom: var(--spacing-2);
}
.product-picker-item-name {
  font-size: var(--font-size-xs);
  color: var(--color-text);
  margin-bottom: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.product-picker-item-commission {
  font-size: 10px;
  color: #f59e0b;
}
.product-picker-footer {
  padding: var(--spacing-3) var(--spacing-4);
  padding-bottom: calc(var(--spacing-3) + var(--safe-bottom));
  border-top: 1px solid var(--color-border);
}
.product-picker-confirm {
  width: 100%;
  padding: var(--spacing-3);
  background: var(--color-primary);
  color: #fff;
  border: none;
  border-radius: var(--radius-md);
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-semibold);
  cursor: pointer;
}

/* ============ Earnings Center Page ============ */
.earnings-hero {
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
  color: #fff;
  padding: var(--spacing-5) var(--spacing-5);
  padding-top: calc(var(--spacing-5) + var(--safe-top));
}
.earnings-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-4);
}
.earnings-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
}
.earnings-back {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255,255,255,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.earnings-total-label {
  font-size: var(--font-size-sm);
  opacity: 0.9;
  margin-bottom: 4px;
}
.earnings-total-amount {
  font-size: 36px;
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-2);
  display: flex;
  align-items: baseline;
  gap: 4px;
}
.earnings-total-amount .currency {
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-medium);
}
.earnings-total-amount .yuan {
  font-size: var(--font-size-lg);
}
.earnings-gp-equiv {
  font-size: var(--font-size-xs);
  opacity: 0.85;
  margin-bottom: var(--spacing-4);
}
.earnings-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-2);
  background: rgba(255,255,255,0.15);
  border-radius: var(--radius-md);
  padding: var(--spacing-3);
  backdrop-filter: blur(10px);
}
.earnings-stat-item {
  text-align: center;
}
.earnings-stat-value {
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-bold);
  margin-bottom: 2px;
}
.earnings-stat-label {
  font-size: 10px;
  opacity: 0.9;
}
.earnings-tabs {
  display: flex;
  gap: var(--spacing-4);
  padding: var(--spacing-3) var(--spacing-4);
  background: var(--color-bg-card);
  border-bottom: 1px solid var(--color-border);
}
.earnings-tab {
  padding: var(--spacing-2) 0;
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  cursor: pointer;
  position: relative;
  font-weight: var(--font-weight-medium);
}
.earnings-tab.active {
  color: var(--color-primary);
}
.earnings-tab.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--color-primary);
  border-radius: 1px;
}
.earnings-body {
  padding: var(--spacing-3);
  padding-bottom: 100px;
}

/* 收益明细卡片 */
.earnings-card {
  background: var(--color-bg-card);
  border-radius: var(--radius-md);
  padding: var(--spacing-4);
  margin-bottom: var(--spacing-3);
  box-shadow: var(--shadow-xs);
}
.earnings-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-3);
}
.earnings-card-title {
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
}
.earnings-card-more {
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
  cursor: pointer;
}
.earnings-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  padding: var(--spacing-3) 0;
  border-bottom: 1px solid var(--color-border-light);
}
.earnings-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}
.earnings-item:first-child {
  padding-top: 0;
}
.earnings-item-icon {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  background: var(--color-primary-lightest);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
}
.earnings-item-info {
  flex: 1;
  min-width: 0;
}
.earnings-item-name {
  font-size: var(--font-size-sm);
  color: var(--color-text);
  margin-bottom: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.earnings-item-desc {
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
}
.earnings-item-amount {
  text-align: right;
  flex-shrink: 0;
}
.earnings-item-gp {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
}
.earnings-item-yuan {
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
  margin-top: 2px;
}

/* 提现区域 */
.withdraw-section {
  background: var(--color-bg-card);
  border-radius: var(--radius-md);
  padding: var(--spacing-4);
  margin-bottom: var(--spacing-3);
  box-shadow: var(--shadow-xs);
}
.withdraw-title {
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--spacing-3);
}
.withdraw-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-4);
}
.withdraw-available {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
}
.withdraw-amount {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
}
.withdraw-amount .yuan {
  font-size: var(--font-size-md);
}
.withdraw-btn {
  width: 100%;
  padding: var(--spacing-3);
  background: linear-gradient(135deg, #11998e, #38ef7d);
  color: #fff;
  border: none;
  border-radius: var(--radius-md);
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-semibold);
  cursor: pointer;
}
.withdraw-rules {
  margin-top: var(--spacing-3);
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
  line-height: 1.6;
}

/* 图表区域 */
.chart-section {
  background: var(--color-bg-card);
  border-radius: var(--radius-md);
  padding: var(--spacing-4);
  margin-bottom: var(--spacing-3);
  box-shadow: var(--shadow-xs);
}
.chart-title {
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--spacing-3);
}
.chart-bars {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 120px;
  padding: var(--spacing-2) 0;
}
.chart-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  flex: 1;
}
.chart-bar-fill {
  width: 20px;
  background: linear-gradient(180deg, var(--color-primary), var(--color-primary-light));
  border-radius: 10px 10px 4px 4px;
  min-height: 8px;
}
.chart-bar-label {
  font-size: 10px;
  color: var(--color-text-muted);
}

/* 空状态 */
.earnings-empty {
  text-align: center;
  padding: var(--spacing-8) var(--spacing-4);
  color: var(--color-text-muted);
}
.earnings-empty-icon {
  font-size: 48px;
  margin-bottom: var(--spacing-3);
  opacity: 0.5;
}
.earnings-empty-text {
  font-size: var(--font-size-sm);
}
"""

# 在 GP Center 样式前插入新样式
insert_before_css = '/* ============ GP Center Modal ============ */'
if insert_before_css in html:
    html = html.replace(insert_before_css, css_to_add + '\n' + insert_before_css)
    print("  CSS样式已添加")
else:
    print("  警告: 未找到CSS插入位置")

# ========== 2. 添加 HTML 结构 ==========
print("\n[2/4] 添加HTML结构...")

# 找模板详情弹层的位置，在它之前插入两个新弹层
template_detail_marker = '  <!-- ===== Template Detail Modal (Full Screen) ===== -->'

upload_work_html = '''  <!-- ===== Upload Work Modal (Full Screen) ===== -->
  <div class="fs-modal-overlay" id="upload-work-modal">
    <div class="upload-work-hero">
      <div class="upload-work-header">
        <div class="fs-modal-close" style="background: rgba(255,255,255,0.2); color: #fff;" onclick="closeUploadWork()">✕</div>
        <div class="upload-work-title">发布妆容模板</div>
        <div style="width: 36px;"></div>
      </div>
    </div>
    <div class="fs-modal-body" style="background: var(--color-bg);">
      <div class="upload-work-body">
        <!-- 封面图 -->
        <div class="upload-section">
          <div class="upload-section-title">效果头图</div>
          <div class="cover-upload-area" id="coverUploadArea" onclick="uploadCoverImage()">
            <div class="cover-upload-icon">📷</div>
            <div class="cover-upload-text">上传妆造完成效果头图</div>
            <div class="cover-upload-sub">建议尺寸 1080×810，展示最佳妆容效果</div>
          </div>
        </div>

        <!-- 标题描述 -->
        <div class="upload-section">
          <div class="upload-section-title">基本信息</div>
          <input type="text" class="step-upload-input" placeholder="输入妆容标题，如：日常通勤大地色妆容" style="margin-bottom: var(--spacing-3); width: 100%; box-sizing: border-box;">
          <textarea class="step-upload-input" placeholder="介绍你的妆容特点、适用场景等" style="width: 100%; min-height: 80px; box-sizing: border-box;"></textarea>
        </div>

        <!-- 步骤拆解 -->
        <div class="upload-section">
          <div class="upload-section-title">
            步骤拆解
            <span style="font-size: var(--font-size-xs); color: var(--color-text-muted); font-weight: normal;">（至少3步）</span>
          </div>
          <div class="steps-upload-list" id="stepsUploadList">
            <div class="step-upload-item">
              <div class="step-upload-num">1</div>
              <div class="step-upload-img" onclick="uploadStepImage(this)">
                <span class="step-upload-img-icon">➕</span>
              </div>
              <div class="step-upload-content">
                <input type="text" class="step-upload-input" placeholder="步骤标题，如：底妆打底">
                <textarea class="step-upload-input" placeholder="详细描述这一步的化妆技巧..." style="min-height: 50px;"></textarea>
              </div>
            </div>
            <div class="step-upload-item">
              <div class="step-upload-num">2</div>
              <div class="step-upload-img" onclick="uploadStepImage(this)">
                <span class="step-upload-img-icon">➕</span>
              </div>
              <div class="step-upload-content">
                <input type="text" class="step-upload-input" placeholder="步骤标题，如：眼部轮廓">
                <textarea class="step-upload-input" placeholder="详细描述这一步的化妆技巧..." style="min-height: 50px;"></textarea>
              </div>
            </div>
            <div class="step-upload-item">
              <div class="step-upload-num">3</div>
              <div class="step-upload-img" onclick="uploadStepImage(this)">
                <span class="step-upload-img-icon">➕</span>
              </div>
              <div class="step-upload-content">
                <input type="text" class="step-upload-input" placeholder="步骤标题，如：唇妆收尾">
                <textarea class="step-upload-input" placeholder="详细描述这一步的化妆技巧..." style="min-height: 50px;"></textarea>
              </div>
            </div>
          </div>
          <button class="add-step-btn" onclick="addUploadStep()" style="margin-top: var(--spacing-3);">➕ 添加步骤</button>
        </div>

        <!-- 过程视频 -->
        <div class="upload-section">
          <div class="upload-section-title">
            过程视频
            <span style="font-size: var(--font-size-xs); color: var(--color-text-muted); font-weight: normal;">（选填，加分项）</span>
          </div>
          <div class="video-upload-area" onclick="uploadVideo()">
            <div class="video-upload-icon">🎬</div>
            <div class="video-upload-text">上传化妆过程视频</div>
            <div class="video-upload-hint">支持 MP4 格式，时长 15s-5min，提升曝光率</div>
          </div>
        </div>

        <!-- 商品挂链 -->
        <div class="upload-section">
          <div class="upload-section-title">
            联盟商品挂链
            <span style="font-size: var(--font-size-xs); color: var(--color-text-muted); font-weight: normal;">（选填，赚分佣）</span>
          </div>
          <div class="product-link-section">
            <div class="product-link-header">
              <span class="product-link-title">已挂链商品</span>
              <span class="product-link-add" onclick="openProductPicker()">➕ 添加</span>
            </div>
            <div id="linkedProductsList">
              <div style="text-align: center; padding: var(--spacing-4); color: var(--color-text-muted); font-size: var(--font-size-sm);">
                暂无挂链商品，添加后用户购买可赚佣金
              </div>
            </div>
          </div>
        </div>

        <!-- 类目标签 -->
        <div class="upload-section">
          <div class="upload-section-title">选择分类标签</div>
          <div class="tag-select-area" id="uploadTagSelect">
            <div class="tag-chip active" onclick="toggleTag(this)">日常妆</div>
            <div class="tag-chip" onclick="toggleTag(this)">约会妆</div>
            <div class="tag-chip" onclick="toggleTag(this)">职场妆</div>
            <div class="tag-chip" onclick="toggleTag(this)">派对妆</div>
            <div class="tag-chip" onclick="toggleTag(this)">国风</div>
            <div class="tag-chip" onclick="toggleTag(this)">韩系</div>
            <div class="tag-chip" onclick="toggleTag(this)">日系</div>
            <div class="tag-chip" onclick="toggleTag(this)">泰式</div>
            <div class="tag-chip" onclick="toggleTag(this)">纯欲风</div>
            <div class="tag-chip" onclick="toggleTag(this)">甜酷</div>
            <div class="tag-chip" onclick="toggleTag(this)">轻欧美</div>
            <div class="tag-chip" onclick="toggleTag(this)">复古</div>
          </div>
        </div>

        <!-- GP定价 -->
        <div class="upload-section">
          <div class="upload-section-title">GP 定价</div>
          <div class="price-setting-area">
            <div class="price-row">
              <span class="price-label">解锁价格</span>
              <div class="price-input-wrap">
                <input type="number" class="price-input" value="50" min="10" max="999" id="gpPriceInput" onchange="updatePriceEstimate()">
                <span class="price-unit">GP</span>
              </div>
            </div>
            <div class="price-hint">💡 建议定价 30-80 GP，平台抽成 30%</div>
            <div class="price-estimate">
              <div class="price-estimate-title">预计每份收益（扣除平台费后）</div>
              <div class="price-estimate-value" id="priceEstimate">35 GP ≈ ¥1.75</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部发布按钮 -->
    <div class="upload-work-footer">
      <button class="draft-btn" onclick="saveDraft()">存草稿</button>
      <button class="publish-btn" onclick="publishWork()">立即发布</button>
    </div>
  </div>

  <!-- ===== Product Picker Sheet ===== -->
  <div class="product-picker-overlay" id="product-picker-overlay">
    <div class="product-picker-sheet">
      <div class="product-picker-header">
        <span class="product-picker-title">选择挂链商品</span>
        <span class="product-picker-close" onclick="closeProductPicker()">✕</span>
      </div>
      <div class="product-picker-body">
        <div class="product-picker-grid" id="productPickerGrid">
          <!-- 动态填充 -->
        </div>
      </div>
      <div class="product-picker-footer">
        <button class="product-picker-confirm" onclick="confirmProductPicker()">确认添加（<span id="selectedProductCount">0</span>）</button>
      </div>
    </div>
  </div>
'''

earnings_html = '''  <!-- ===== Earnings Center Modal (Full Screen) ===== -->
  <div class="fs-modal-overlay" id="earnings-center-modal">
    <div class="earnings-hero">
      <div class="earnings-header">
        <div class="earnings-back" onclick="closeEarningsCenter()">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </div>
        <div class="earnings-title">收益中心</div>
        <div style="width: 36px;"></div>
      </div>
      <div class="earnings-total-label">累计收益（人民币）</div>
      <div class="earnings-total-amount">
        <span class="yuan">¥</span><span id="earningsTotal">2,486.50</span>
      </div>
      <div class="earnings-gp-equiv">≈ 49,730 GP （兑换比例 1 GP ≈ ¥0.05）</div>
      <div class="earnings-stats">
        <div class="earnings-stat-item">
          <div class="earnings-stat-value">¥892.30</div>
          <div class="earnings-stat-label">本月收益</div>
        </div>
        <div class="earnings-stat-item">
          <div class="earnings-stat-value">128</div>
          <div class="earnings-stat-label">总销量</div>
        </div>
        <div class="earnings-stat-item">
          <div class="earnings-stat-value">4.9</div>
          <div class="earnings-stat-label">评分</div>
        </div>
      </div>
    </div>
    <div class="fs-modal-body" style="background: var(--color-bg);">
      <!-- Tab切换 -->
      <div class="earnings-tabs">
        <div class="earnings-tab active" onclick="switchEarningsTab(this, 'template')">模板收入</div>
        <div class="earnings-tab" onclick="switchEarningsTab(this, 'commission')">商品分佣</div>
      </div>

      <div class="earnings-body">
        <!-- 收益图表 -->
        <div class="chart-section">
          <div class="chart-title">近7日收益趋势</div>
          <div class="chart-bars">
            <div class="chart-bar">
              <div class="chart-bar-fill" style="height: 45%;"></div>
              <span class="chart-bar-label">周一</span>
            </div>
            <div class="chart-bar">
              <div class="chart-bar-fill" style="height: 62%;"></div>
              <span class="chart-bar-label">周二</span>
            </div>
            <div class="chart-bar">
              <div class="chart-bar-fill" style="height: 38%;"></div>
              <span class="chart-bar-label">周三</span>
            </div>
            <div class="chart-bar">
              <div class="chart-bar-fill" style="height: 75%;"></div>
              <span class="chart-bar-label">周四</span>
            </div>
            <div class="chart-bar">
              <div class="chart-bar-fill" style="height: 90%;"></div>
              <span class="chart-bar-label">周五</span>
            </div>
            <div class="chart-bar">
              <div class="chart-bar-fill" style="height: 100%;"></div>
              <span class="chart-bar-label">周六</span>
            </div>
            <div class="chart-bar">
              <div class="chart-bar-fill" style="height: 70%;"></div>
              <span class="chart-bar-label">周日</span>
            </div>
          </div>
        </div>

        <!-- 可提现 -->
        <div class="withdraw-section">
          <div class="withdraw-title">可提现余额</div>
          <div class="withdraw-info">
            <span class="withdraw-available">可提现金额</span>
            <div class="withdraw-amount"><span class="yuan">¥</span>1,256.80</div>
          </div>
          <button class="withdraw-btn" onclick="withdrawEarnings()">申请提现</button>
          <div class="withdraw-rules">
            💡 提现规则：最低提现 ¥50，每周三审核，T+3 到账<br>
            💡 GP 兑换人民币：1 GP = ¥0.05
          </div>
        </div>

        <!-- 模板收入明细 -->
        <div id="templateEarnings">
          <div class="earnings-card">
            <div class="earnings-card-header">
              <span class="earnings-card-title">热销模板 TOP</span>
              <span class="earnings-card-more">查看全部 ›</span>
            </div>
            <div class="earnings-item">
              <div class="earnings-item-icon">💄</div>
              <div class="earnings-item-info">
                <div class="earnings-item-name">晚宴精致妆容｜高级感富家千金妆</div>
                <div class="earnings-item-desc">已售 86 份 · 70GP/份</div>
              </div>
              <div class="earnings-item-amount">
                <div class="earnings-item-gp">+4,214 GP</div>
                <div class="earnings-item-yuan">≈ ¥210.70</div>
              </div>
            </div>
            <div class="earnings-item">
              <div class="earnings-item-icon">✨</div>
              <div class="earnings-item-info">
                <div class="earnings-item-name">日常通勤大地色系妆容</div>
                <div class="earnings-item-desc">已售 42 份 · 50GP/份</div>
              </div>
              <div class="earnings-item-amount">
                <div class="earnings-item-gp">+1,470 GP</div>
                <div class="earnings-item-yuan">≈ ¥73.50</div>
              </div>
            </div>
          </div>

          <div class="earnings-card">
            <div class="earnings-card-header">
              <span class="earnings-card-title">近期收益明细</span>
              <span class="earnings-card-more">全部明细 ›</span>
            </div>
            <div class="earnings-item">
              <div class="earnings-item-icon">📥</div>
              <div class="earnings-item-info">
                <div class="earnings-item-name">模板销售 - 晚宴精致妆容</div>
                <div class="earnings-item-desc">2024-01-15 18:32</div>
              </div>
              <div class="earnings-item-amount">
                <div class="earnings-item-gp">+49 GP</div>
                <div class="earnings-item-yuan">≈ ¥2.45</div>
              </div>
            </div>
            <div class="earnings-item">
              <div class="earnings-item-icon">📥</div>
              <div class="earnings-item-info">
                <div class="earnings-item-name">模板销售 - 日常通勤妆容</div>
                <div class="earnings-item-desc">2024-01-15 14:20</div>
              </div>
              <div class="earnings-item-amount">
                <div class="earnings-item-gp">+35 GP</div>
                <div class="earnings-item-yuan">≈ ¥1.75</div>
              </div>
            </div>
            <div class="earnings-item">
              <div class="earnings-item-icon">📥</div>
              <div class="earnings-item-info">
                <div class="earnings-item-name">模板销售 - 甜酷辣妹Y2K妆</div>
                <div class="earnings-item-desc">2024-01-15 11:05</div>
              </div>
              <div class="earnings-item-amount">
                <div class="earnings-item-gp">+42 GP</div>
                <div class="earnings-item-yuan">≈ ¥2.10</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 商品分佣明细（默认隐藏） -->
        <div id="commissionEarnings" style="display: none;">
          <div class="earnings-card">
            <div class="earnings-card-header">
              <span class="earnings-card-title">高分佣商品</span>
              <span class="earnings-card-more">查看全部 ›</span>
            </div>
            <div class="earnings-item">
              <div class="earnings-item-icon">💋</div>
              <div class="earnings-item-info">
                <div class="earnings-item-name">兰蔻菁纯丝绒雾面唇膏</div>
                <div class="earnings-item-desc">分佣比例 15% · 已推广 23 笔</div>
              </div>
              <div class="earnings-item-amount">
                <div class="earnings-item-gp">+3,450 GP</div>
                <div class="earnings-item-yuan">≈ ¥172.50</div>
              </div>
            </div>
            <div class="earnings-item">
              <div class="earnings-item-icon">🎨</div>
              <div class="earnings-item-info">
                <div class="earnings-item-name">NARS 六色眼影盘</div>
                <div class="earnings-item-desc">分佣比例 12% · 已推广 18 笔</div>
              </div>
              <div class="earnings-item-amount">
                <div class="earnings-item-gp">+2,160 GP</div>
                <div class="earnings-item-yuan">≈ ¥108.00</div>
              </div>
            </div>
          </div>

          <div class="earnings-card">
            <div class="earnings-card-header">
              <span class="earnings-card-title">分佣明细</span>
              <span class="earnings-card-more">全部明细 ›</span>
            </div>
            <div class="earnings-item">
              <div class="earnings-item-icon">💸</div>
              <div class="earnings-item-info">
                <div class="earnings-item-name">商品分佣 - 兰蔻口红</div>
                <div class="earnings-item-desc">2024-01-15 19:45 · 用户购买</div>
              </div>
              <div class="earnings-item-amount">
                <div class="earnings-item-gp">+150 GP</div>
                <div class="earnings-item-yuan">≈ ¥7.50</div>
              </div>
            </div>
            <div class="earnings-item">
              <div class="earnings-item-icon">💸</div>
              <div class="earnings-item-info">
                <div class="earnings-item-name">商品分佣 - NARS眼影</div>
                <div class="earnings-item-desc">2024-01-15 16:22 · 用户购买</div>
              </div>
              <div class="earnings-item-amount">
                <div class="earnings-item-gp">+120 GP</div>
                <div class="earnings-item-yuan">≈ ¥6.00</div>
              </div>
            </div>
            <div class="earnings-item">
              <div class="earnings-item-icon">💸</div>
              <div class="earnings-item-info">
                <div class="earnings-item-name">商品分佣 - 雅诗兰黛粉底</div>
                <div class="earnings-item-desc">2024-01-14 20:18 · 用户购买</div>
              </div>
              <div class="earnings-item-amount">
                <div class="earnings-item-gp">+200 GP</div>
                <div class="earnings-item-yuan">≈ ¥10.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

'''

full_html_to_add = upload_work_html + earnings_html

if template_detail_marker in html:
    html = html.replace(template_detail_marker, full_html_to_add + template_detail_marker)
    print("  HTML结构已添加")
else:
    print("  警告: 未找到HTML插入位置")

# ========== 3. 添加 JS 函数 ==========
print("\n[3/4] 添加JS函数...")

js_to_add = r"""
  // ===== Upload Work Functions =====
  function openUploadWork() {
    document.getElementById('upload-work-modal').classList.add('show');
    renderProductPickerGrid();
  }
  function closeUploadWork() {
    document.getElementById('upload-work-modal').classList.remove('show');
  }
  function uploadCoverImage() {
    showToast('请选择妆造效果头图');
    // 模拟上传成功
    setTimeout(() => {
      const area = document.getElementById('coverUploadArea');
      if (area) {
        area.innerHTML = '<img src="' + mockCoverImage + '" class="cover-preview" alt="封面预览"><div class="cover-remove-btn" onclick="event.stopPropagation(); removeCover()">✕</div>';
      }
    }, 500);
  }
  function removeCover() {
    const area = document.getElementById('coverUploadArea');
    if (area) {
      area.innerHTML = '<div class="cover-upload-icon">📷</div><div class="cover-upload-text">上传妆造完成效果头图</div><div class="cover-upload-sub">建议尺寸 1080×810，展示最佳妆容效果</div>';
    }
  }
  function uploadStepImage(el) {
    showToast('请选择步骤图片');
    setTimeout(() => {
      el.innerHTML = '<img src="' + mockStepImage + '" alt="步骤图">';
    }, 500);
  }
  function addUploadStep() {
    const list = document.getElementById('stepsUploadList');
    if (!list) return;
    const count = list.children.length + 1;
    const stepDiv = document.createElement('div');
    stepDiv.className = 'step-upload-item';
    stepDiv.innerHTML = `
      <div class="step-upload-num">${count}</div>
      <div class="step-upload-img" onclick="uploadStepImage(this)">
        <span class="step-upload-img-icon">➕</span>
      </div>
      <div class="step-upload-content">
        <input type="text" class="step-upload-input" placeholder="步骤标题">
        <textarea class="step-upload-input" placeholder="详细描述这一步的化妆技巧..." style="min-height: 50px;"></textarea>
      </div>
    `;
    list.appendChild(stepDiv);
  }
  function uploadVideo() {
    showToast('请选择化妆过程视频');
  }
  function toggleTag(el) {
    el.classList.toggle('active');
  }
  function updatePriceEstimate() {
    const input = document.getElementById('gpPriceInput');
    const estimate = document.getElementById('priceEstimate');
    if (input && estimate) {
      const gp = parseInt(input.value) || 0;
      const profit = Math.round(gp * 0.7);
      const yuan = (profit * 0.05).toFixed(2);
      estimate.textContent = profit + ' GP ≈ ¥' + yuan;
    }
  }
  function saveDraft() {
    showToast('已保存到草稿箱');
  }
  function publishWork() {
    showToast('🎉 发布成功！等待审核中...');
    setTimeout(closeUploadWork, 1500);
  }

  // ===== Product Picker Functions =====
  let selectedProducts = [];
  let linkedProducts = [];

  function openProductPicker() {
    selectedProducts = [...linkedProducts];
    renderProductPickerGrid();
    updateSelectedCount();
    document.getElementById('product-picker-overlay').classList.add('show');
  }
  function closeProductPicker() {
    document.getElementById('product-picker-overlay').classList.remove('show');
  }
  function renderProductPickerGrid() {
    const grid = document.getElementById('productPickerGrid');
    if (!grid || !window.MakeupPalData) return;
    const products = MakeupPalData.products.slice(0, 12);
    grid.innerHTML = products.map((p, i) => {
      const isSelected = selectedProducts.some(sp => sp.id === p.id);
      return `
        <div class="product-picker-item ${isSelected ? 'selected' : ''}" onclick="toggleProductPicker('${p.id}', this)">
          <img src="${p.image || ''}" alt="${p.name}">
          <div class="product-picker-item-name">${p.name}</div>
          <div class="product-picker-item-commission">分佣 ${p.commission || '10'}%</div>
        </div>
      `;
    }).join('');
  }
  function toggleProductPicker(id, el) {
    el.classList.toggle('selected');
    const product = MakeupPalData.products.find(p => p.id === id);
    if (el.classList.contains('selected')) {
      if (!selectedProducts.some(sp => sp.id === id)) {
        selectedProducts.push(product);
      }
    } else {
      selectedProducts = selectedProducts.filter(sp => sp.id !== id);
    }
    updateSelectedCount();
  }
  function updateSelectedCount() {
    const el = document.getElementById('selectedProductCount');
    if (el) el.textContent = selectedProducts.length;
  }
  function confirmProductPicker() {
    linkedProducts = [...selectedProducts];
    renderLinkedProducts();
    closeProductPicker();
    showToast(`已添加 ${linkedProducts.length} 个挂链商品`);
  }
  function renderLinkedProducts() {
    const list = document.getElementById('linkedProductsList');
    if (!list) return;
    if (linkedProducts.length === 0) {
      list.innerHTML = '<div style="text-align: center; padding: var(--spacing-4); color: var(--color-text-muted); font-size: var(--font-size-sm);">暂无挂链商品，添加后用户购买可赚佣金</div>';
      return;
    }
    list.innerHTML = linkedProducts.map((p, i) => `
      <div class="linked-product-item">
        <img src="${p.image || ''}" alt="${p.name}" class="linked-product-img">
        <div class="linked-product-info">
          <div class="linked-product-name">${p.name}</div>
          <div class="linked-product-commission">分佣比例 ${p.commission || '10'}%</div>
        </div>
        <span class="linked-product-remove" onclick="removeLinkedProduct(${i})">✕</span>
      </div>
    `).join('');
  }
  function removeLinkedProduct(index) {
    linkedProducts.splice(index, 1);
    renderLinkedProducts();
  }

  // ===== Earnings Center Functions =====
  function openEarningsCenter() {
    document.getElementById('earnings-center-modal').classList.add('show');
  }
  function closeEarningsCenter() {
    document.getElementById('earnings-center-modal').classList.remove('show');
  }
  function switchEarningsTab(el, tab) {
    document.querySelectorAll('.earnings-tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    const templateEl = document.getElementById('templateEarnings');
    const commissionEl = document.getElementById('commissionEarnings');
    if (tab === 'template') {
      if (templateEl) templateEl.style.display = 'block';
      if (commissionEl) commissionEl.style.display = 'none';
    } else {
      if (templateEl) templateEl.style.display = 'none';
      if (commissionEl) commissionEl.style.display = 'block';
    }
  }
  function withdrawEarnings() {
    showToast('提现申请已提交，预计T+3到账');
  }
"""

# 在 GP Center 的 JS 函数后面添加
js_insert_marker = "function closeGpCenter() {"
if js_insert_marker in html:
    # 在 closeGpCenter 函数前插入新函数
    html = html.replace(js_insert_marker, js_to_add + js_insert_marker)
    print("  JS函数已添加")
else:
    print("  警告: 未找到JS插入位置")

# ========== 4. 修改入口按钮 ==========
print("\n[4/4] 修改入口按钮...")

# 修改"上传作品"按钮
html = html.replace(
    '''<div class="creator-action" onclick="showToast('上传作品')">
          <div class="ca-icon">📤</div><div class="ca-name">上传作品</div>
        </div>''',
    '''<div class="creator-action" onclick="openUploadWork()">
          <div class="ca-icon">📤</div><div class="ca-name">上传作品</div>
        </div>'''
)

# 修改"收益中心"按钮
html = html.replace(
    '''<div class="creator-action" onclick="showToast('收益中心')">
          <div class="ca-icon">💰</div><div class="ca-name">收益中心</div>
        </div>''',
    '''<div class="creator-action" onclick="openEarningsCenter()">
          <div class="ca-icon">💰</div><div class="ca-name">收益中心</div>
        </div>'''
)

print("  入口按钮已修改")

# 添加 mock 图片变量（用于模拟上传）
mock_js = """
  // Mock images for upload simulation
  const mockCoverImage = MakeupPalData.libraryFeed.creators[0].coverImage;
  const mockStepImage = MakeupPalData.libraryFeed.creators[1].coverImage;
"""

# 在 window.addEventListener('load' 前添加 mock 变量
load_marker = "window.addEventListener('load', function() {"
if load_marker in html:
    html = html.replace(load_marker, mock_js + '\n' + load_marker)
    print("  Mock变量已添加")

# 保存文件
with open(input_path, 'w', encoding='utf-8') as f:
    f.write(html)

shutil.copy(input_path, '/workspace/demo-dist/index.html')

print(f"\n{'='*60}")
print(f"✅ 完成！")
print(f"  文件大小: {len(html)/1024:.0f} KB")
print(f"  新增页面: 上传作品 + 收益中心")
print(f"{'='*60}")
