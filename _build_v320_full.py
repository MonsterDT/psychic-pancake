#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
妆伴 MakeupPal V3.2.0 完整构建脚本
基于 B 组 PRD v2.9.1 的交互逻辑，全面优化 A 组版本
"""

import re

INPUT_FILE = '/workspace/makeuppal-demo-v3.2.0.html'
OUTPUT_FILE = '/workspace/makeuppal-demo-v3.2.0.html'

with open(INPUT_FILE, 'r', encoding='utf-8') as f:
    html = f.read()

print("=" * 60)
print("妆伴 MakeupPal V3.2.0 完整构建")
print("=" * 60)

# ==========================================================================
# 1. 新增 CSS 样式
# ==========================================================================
print("\n[1/8] 注入新增 CSS 样式...")

new_css = """
/* ============ Face Profile Card ============ */
.face-profile-card {
  margin: var(--spacing-4);
  padding: var(--spacing-4);
  background: var(--color-bg-card);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  cursor: pointer;
  transition: transform var(--duration-fast) var(--ease);
}
.face-profile-card:active { transform: scale(0.98); }
.face-profile-avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-primary-light), var(--color-primary));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  flex-shrink: 0;
}
.face-profile-info { flex: 1; min-width: 0; }
.face-profile-title {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
  margin-bottom: 2px;
}
.face-profile-desc {
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
  margin-bottom: 6px;
}
.face-profile-tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}
.face-profile-tag {
  font-size: 10px;
  padding: 2px 8px;
  border-radius: var(--radius-full);
  background: var(--color-bg-alt);
  color: var(--color-primary-dark);
  font-weight: var(--font-weight-medium);
}
.face-profile-tag.score {
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  color: #fff;
}

/* ============ King Kong Area (5-grid) ============ */
.kingkong-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: var(--spacing-2);
  padding: 0 var(--spacing-4);
  margin-bottom: var(--spacing-5);
}
.kingkong-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: transform var(--duration-fast) var(--ease);
}
.kingkong-item:active { transform: scale(0.95); }
.kingkong-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  background: var(--color-bg-card);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  box-shadow: var(--shadow-xs);
  position: relative;
}
.kingkong-icon.new::after {
  content: 'NEW';
  position: absolute;
  top: -4px;
  right: -4px;
  font-size: 9px;
  padding: 1px 5px;
  border-radius: var(--radius-full);
  background: var(--color-danger);
  color: #fff;
  font-weight: var(--font-weight-bold);
}
.kingkong-label {
  font-size: 11px;
  color: var(--color-text-secondary);
  text-align: center;
}

/* ============ Trending List ============ */
.trending-section {
  margin: var(--spacing-5) var(--spacing-4) var(--spacing-3);
}
.trending-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-3);
}
.trending-title {
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
  display: flex;
  align-items: center;
  gap: 6px;
}
.trending-more {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  cursor: pointer;
}
.trending-scroll {
  display: flex;
  gap: var(--spacing-3);
  overflow-x: auto;
  padding-bottom: 4px;
  margin: 0 calc(var(--spacing-4) * -1);
  padding-left: var(--spacing-4);
  padding-right: var(--spacing-4);
  -webkit-overflow-scrolling: touch;
}
.trending-card {
  flex-shrink: 0;
  width: 140px;
  background: var(--color-bg-card);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  transition: transform var(--duration-fast) var(--ease);
}
.trending-card:active { transform: scale(0.97); }
.trending-card-img {
  width: 100%;
  height: 140px;
  background: var(--color-bg-alt);
  position: relative;
  overflow: hidden;
}
.trending-card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.trending-rank {
  position: absolute;
  top: 8px;
  left: 8px;
  width: 22px;
  height: 22px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: var(--font-weight-bold);
  color: #fff;
  background: var(--color-text-muted);
}
.trending-rank.rank-1 { background: linear-gradient(135deg, #FFD700, #FFA500); }
.trending-rank.rank-2 { background: linear-gradient(135deg, #C0C0C0, #A0A0A0); }
.trending-rank.rank-3 { background: linear-gradient(135deg, #CD7F32, #B87333); }
.trending-card-info { padding: 8px 10px; }
.trending-card-name {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 4px;
}
.trending-card-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 10px;
}
.trending-card-author {
  color: var(--color-text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 70px;
}
.trending-card-price {
  color: var(--color-primary);
  font-weight: var(--font-weight-semibold);
}

/* ============ Waterfall Feed ============ */
.waterfall-section {
  margin: var(--spacing-5) var(--spacing-4) var(--spacing-3);
}
.waterfall-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-3);
}
.waterfall-title {
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
}
.waterfall-grid {
  columns: 2;
  column-gap: var(--spacing-3);
  padding: 0 var(--spacing-4);
}
.waterfall-card {
  break-inside: avoid;
  margin-bottom: var(--spacing-3);
  background: var(--color-bg-card);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  transition: transform var(--duration-fast) var(--ease);
}
.waterfall-card:active { transform: scale(0.97); }
.waterfall-card-img {
  width: 100%;
  background: var(--color-bg-alt);
  position: relative;
}
.waterfall-card-img img {
  width: 100%;
  display: block;
}
.waterfall-badge {
  position: absolute;
  top: 8px;
  left: 8px;
  font-size: 10px;
  padding: 2px 8px;
  border-radius: var(--radius-full);
  font-weight: var(--font-weight-semibold);
}
.waterfall-badge.free { background: rgba(107, 158, 107, 0.9); color: #fff; }
.waterfall-badge.l2 { background: rgba(196, 149, 106, 0.9); color: #fff; }
.waterfall-badge.l3 { background: rgba(166, 123, 82, 0.9); color: #fff; }
.waterfall-badge.gufeng { background: rgba(200, 80, 80, 0.9); color: #fff; }
.waterfall-card-info { padding: 10px; }
.waterfall-card-title {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text);
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 8px;
}
.waterfall-card-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.waterfall-card-creator {
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
}
.waterfall-creator-avatar {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-primary-light), var(--color-primary));
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  color: #fff;
}
.waterfall-creator-name {
  font-size: 10px;
  color: var(--color-text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.waterfall-card-price {
  font-size: 11px;
  color: var(--color-primary);
  font-weight: var(--font-weight-semibold);
  flex-shrink: 0;
}

/* ============ Library Page ============ */
.library-header {
  padding: var(--spacing-4);
  padding-top: calc(var(--spacing-4) + var(--safe-top));
  background: var(--color-bg-card);
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid var(--color-border-light);
}
.library-search-row {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  margin-bottom: var(--spacing-3);
}
.library-search-box {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--color-bg-alt);
  border-radius: var(--radius-full);
  padding: 8px 14px;
}
.library-search-box svg {
  width: 16px;
  height: 16px;
  color: var(--color-text-muted);
  flex-shrink: 0;
}
.library-search-box input {
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  font-size: var(--font-size-sm);
  color: var(--color-text);
}
.library-search-box input::placeholder { color: var(--color-text-muted); }
.library-publish-btn {
  flex-shrink: 0;
  padding: 8px 14px;
  border-radius: var(--radius-full);
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  color: #fff;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  border: none;
  cursor: pointer;
}
.library-publish-btn:active { opacity: 0.9; }
.library-cat-tabs {
  display: flex;
  gap: var(--spacing-4);
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 2px;
}
.library-cat-tab {
  flex-shrink: 0;
  font-size: var(--font-size-base);
  color: var(--color-text-muted);
  padding: 6px 0;
  cursor: pointer;
  position: relative;
  font-weight: var(--font-weight-medium);
  white-space: nowrap;
}
.library-cat-tab.active {
  color: var(--color-text);
  font-weight: var(--font-weight-semibold);
}
.library-cat-tab.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 3px;
  border-radius: 2px;
  background: var(--color-primary);
}
.library-sub-tabs {
  display: flex;
  gap: var(--spacing-2);
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  padding: var(--spacing-3) var(--spacing-4);
  background: var(--color-bg);
  border-bottom: 1px solid var(--color-border-light);
}
.library-sub-tab {
  flex-shrink: 0;
  font-size: var(--font-size-xs);
  padding: 5px 12px;
  border-radius: var(--radius-full);
  background: var(--color-bg-card);
  color: var(--color-text-secondary);
  cursor: pointer;
  border: 1px solid var(--color-border-light);
}
.library-sub-tab.active {
  background: var(--color-primary);
  color: #fff;
  border-color: var(--color-primary);
}

/* ============ Mirror Page V2 ============ */
.mirror-hero-v2 {
  background: var(--color-hero-bg);
  color: var(--color-hero-text);
  min-height: 420px;
  position: relative;
  display: flex;
  flex-direction: column;
}
.mirror-mode-switch-v2 {
  display: flex;
  gap: 4px;
  background: rgba(255,255,255,0.1);
  border-radius: var(--radius-full);
  padding: 4px;
  align-self: center;
  margin-top: calc(var(--spacing-5) + var(--safe-top));
}
.mirror-mode-btn-v2 {
  padding: 6px 18px;
  font-size: var(--font-size-sm);
  color: rgba(255,255,255,0.6);
  cursor: pointer;
  border-radius: var(--radius-full);
  transition: all var(--duration-fast) var(--ease);
  font-weight: var(--font-weight-medium);
}
.mirror-mode-btn-v2.active {
  background: rgba(255,255,255,0.2);
  color: #fff;
}
.mirror-settings-btn {
  position: absolute;
  top: calc(var(--spacing-4) + var(--safe-top));
  right: var(--spacing-4);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255,255,255,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
}
.mirror-face-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-5);
}
.mirror-face-ring-v2 {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  border: 2px solid rgba(196, 149, 106, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: var(--spacing-5);
  animation: breathe 3s ease-in-out infinite;
}
@keyframes breathe {
  0%, 100% { box-shadow: 0 0 0 0 rgba(196, 149, 106, 0.2); }
  50% { box-shadow: 0 0 0 15px rgba(196, 149, 106, 0); }
}
.mirror-face-ring-v2::before {
  content: '';
  position: absolute;
  inset: 8px;
  border-radius: 50%;
  border: 1px solid rgba(196, 149, 106, 0.4);
}
.mirror-face-inner {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(255,255,255,0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255,255,255,0.5);
}
.mirror-title-v2 {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: #fff;
  margin-bottom: 6px;
  text-align: center;
}
.mirror-subtitle-v2 {
  font-size: var(--font-size-sm);
  color: rgba(255,255,255,0.6);
  text-align: center;
  margin-bottom: var(--spacing-4);
}
.mirror-progress-dots {
  display: flex;
  gap: 6px;
}
.mirror-progress-dots span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255,255,255,0.2);
}
.mirror-progress-dots span.active {
  background: var(--color-primary);
  width: 18px;
  border-radius: 3px;
}
.mirror-bottom-bar {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: var(--spacing-4) var(--spacing-5);
  padding-bottom: calc(var(--spacing-4) + var(--safe-bottom));
  background: rgba(0,0,0,0.3);
}
.mirror-bottom-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: rgba(255,255,255,0.7);
  font-size: 10px;
  cursor: pointer;
  padding: 8px;
}
.mirror-bottom-btn:active { opacity: 0.7; }
.mirror-shutter-btn {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
}
.mirror-shutter-btn:active { transform: scale(0.95); }
.mirror-shutter-btn::before {
  content: '';
  position: absolute;
  inset: 4px;
  border-radius: 50%;
  border: 3px solid var(--color-primary);
}
.mirror-shutter-inner {
  width: 28px;
  height: 28px;
  border-radius: var(--radius-sm);
  background: var(--color-primary);
}

/* ============ Chat Mode V2 ============ */
.chat-container {
  flex: 1;
  overflow-y: auto;
  padding: var(--spacing-4);
  background: var(--color-bg);
}
.chat-msg {
  display: flex;
  gap: 8px;
  margin-bottom: var(--spacing-3);
  max-width: 85%;
}
.chat-msg.ai { align-self: flex-start; }
.chat-msg.user { align-self: flex-end; margin-left: auto; flex-direction: row-reverse; }
.chat-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: var(--font-weight-semibold);
}
.chat-msg.ai .chat-avatar {
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  color: #fff;
}
.chat-msg.user .chat-avatar {
  background: var(--color-bg-alt);
  color: var(--color-text-secondary);
}
.chat-bubble {
  padding: 10px 14px;
  border-radius: var(--radius-lg);
  font-size: var(--font-size-sm);
  line-height: 1.5;
}
.chat-msg.ai .chat-bubble {
  background: var(--color-bg-card);
  color: var(--color-text);
  border-bottom-left-radius: 4px;
  box-shadow: var(--shadow-xs);
}
.chat-msg.user .chat-bubble {
  background: var(--color-primary);
  color: #fff;
  border-bottom-right-radius: 4px;
}
.chat-quick-actions {
  display: flex;
  gap: var(--spacing-2);
  padding: var(--spacing-3) var(--spacing-4);
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  background: var(--color-bg);
  border-bottom: 1px solid var(--color-border-light);
}
.chat-quick-chip {
  flex-shrink: 0;
  padding: 6px 14px;
  font-size: var(--font-size-xs);
  border-radius: var(--radius-full);
  background: var(--color-bg-card);
  color: var(--color-text-secondary);
  border: 1px solid var(--color-border-light);
  cursor: pointer;
  white-space: nowrap;
}
.chat-quick-chip:active { background: var(--color-bg-alt); }
.chat-input-bar {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-3) var(--spacing-4);
  padding-bottom: calc(var(--spacing-3) + var(--safe-bottom));
  background: var(--color-bg-card);
  border-top: 1px solid var(--color-border-light);
}
.chat-input {
  flex: 1;
  background: var(--color-bg-alt);
  border: none;
  border-radius: var(--radius-full);
  padding: 10px 16px;
  font-size: var(--font-size-sm);
  color: var(--color-text);
  outline: none;
}
.chat-input::placeholder { color: var(--color-text-muted); }
.chat-send-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
  border: none;
  flex-shrink: 0;
}
.chat-send-btn:active { opacity: 0.9; }
.chat-template-card {
  margin-top: 8px;
  padding: 10px;
  background: var(--color-bg-alt);
  border-radius: var(--radius-md);
  display: flex;
  gap: 10px;
  cursor: pointer;
}
.chat-template-img {
  width: 50px;
  height: 50px;
  border-radius: var(--radius-sm);
  background: var(--color-border-light);
  flex-shrink: 0;
  overflow: hidden;
}
.chat-template-img img { width: 100%; height: 100%; object-fit: cover; }
.chat-template-info { flex: 1; min-width: 0; }
.chat-template-name {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
  margin-bottom: 2px;
}
.chat-template-desc {
  font-size: 10px;
  color: var(--color-text-muted);
  margin-bottom: 4px;
}
.chat-template-price {
  font-size: 11px;
  color: var(--color-primary);
  font-weight: var(--font-weight-semibold);
}

/* ============ Full Screen Modal (General) ============ */
.fs-modal-overlay {
  position: fixed;
  inset: 0;
  background: var(--color-bg);
  z-index: var(--z-modal);
  display: none;
  flex-direction: column;
}
.fs-modal-overlay.show { display: flex; }
.fs-modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-4);
  padding-top: calc(var(--spacing-4) + var(--safe-top));
  background: var(--color-bg-card);
  border-bottom: 1px solid var(--color-border-light);
}
.fs-modal-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
}
.fs-modal-close {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--color-bg-alt);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--color-text-secondary);
}
.fs-modal-body {
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

/* ============ GP Center Modal ============ */
.gp-center-hero {
  background: linear-gradient(135deg, var(--color-primary-dark), var(--color-primary));
  color: #fff;
  padding: var(--spacing-5) var(--spacing-5);
  padding-top: calc(var(--spacing-5) + var(--safe-top));
}
.gp-balance-label {
  font-size: var(--font-size-sm);
  opacity: 0.8;
  margin-bottom: 4px;
}
.gp-balance-num {
  font-size: 36px;
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-3);
}
.gp-level-row {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  margin-bottom: var(--spacing-2);
}
.gp-level-tag {
  padding: 2px 10px;
  border-radius: var(--radius-full);
  background: rgba(255,255,255,0.2);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
}
.gp-level-text {
  font-size: var(--font-size-xs);
  opacity: 0.8;
}
.gp-level-bar {
  height: 6px;
  border-radius: 3px;
  background: rgba(255,255,255,0.2);
  overflow: hidden;
}
.gp-level-fill {
  height: 100%;
  width: 65%;
  background: #fff;
  border-radius: 3px;
}
.gp-task-section {
  padding: var(--spacing-4);
}
.gp-task-title {
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
  margin-bottom: var(--spacing-3);
}
.gp-task-item {
  display: flex;
  align-items: center;
  padding: var(--spacing-3);
  background: var(--color-bg-card);
  border-radius: var(--radius-md);
  margin-bottom: var(--spacing-2);
  box-shadow: var(--shadow-xs);
}
.gp-task-icon {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-sm);
  background: var(--color-bg-alt);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-right: var(--spacing-3);
  flex-shrink: 0;
}
.gp-task-info { flex: 1; min-width: 0; }
.gp-task-name {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text);
  margin-bottom: 2px;
}
.gp-task-progress {
  font-size: 11px;
  color: var(--color-text-muted);
}
.gp-task-reward {
  font-size: 12px;
  color: var(--color-primary);
  font-weight: var(--font-weight-semibold);
  margin-right: var(--spacing-2);
}
.gp-task-btn {
  padding: 5px 12px;
  border-radius: var(--radius-full);
  background: var(--color-primary);
  color: #fff;
  font-size: 11px;
  border: none;
  cursor: pointer;
  flex-shrink: 0;
  font-weight: var(--font-weight-medium);
}
.gp-task-btn.done {
  background: var(--color-bg-alt);
  color: var(--color-text-muted);
}
.gp-task-btn.go {
  background: var(--color-bg-alt);
  color: var(--color-primary);
}

/* ============ Template Detail Modal ============ */
.template-detail-hero {
  height: 300px;
  background: linear-gradient(135deg, #E8D5C4, #C4956A);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
}
.template-detail-back {
  position: absolute;
  top: calc(var(--spacing-4) + var(--safe-top));
  left: var(--spacing-4);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
}
.template-detail-actions {
  position: absolute;
  top: calc(var(--spacing-4) + var(--safe-top));
  right: var(--spacing-4);
  display: flex;
  gap: 8px;
}
.template-detail-action-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
}
.template-badge-corner {
  position: absolute;
  top: calc(var(--spacing-4) + var(--safe-top) + 50px);
  left: var(--spacing-4);
  padding: 4px 12px;
  border-radius: var(--radius-full);
  background: rgba(255,255,255,0.9);
  font-size: 11px;
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary-dark);
}
.template-detail-body {
  padding: var(--spacing-5) var(--spacing-4);
}
.template-detail-title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  margin-bottom: var(--spacing-3);
  line-height: 1.3;
}
.template-creator-row {
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-4);
}
.template-creator-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-primary-light), var(--color-primary));
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: var(--font-weight-semibold);
  margin-right: var(--spacing-2);
}
.template-creator-name {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text);
}
.template-creator-verified {
  font-size: 10px;
  color: var(--color-primary);
  margin-left: 4px;
}
.template-stats-row {
  display: flex;
  justify-content: space-around;
  padding: var(--spacing-4) 0;
  border-top: 1px solid var(--color-border-light);
  border-bottom: 1px solid var(--color-border-light);
  margin-bottom: var(--spacing-4);
}
.template-stat {
  text-align: center;
}
.template-stat-num {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
}
.template-stat-label {
  font-size: 11px;
  color: var(--color-text-muted);
  margin-top: 2px;
}
.template-desc {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: var(--spacing-4);
}
.template-tag-section {
  margin-bottom: var(--spacing-4);
}
.template-tag-title {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
  margin-bottom: var(--spacing-2);
}
.template-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.template-tag {
  padding: 4px 12px;
  border-radius: var(--radius-full);
  background: var(--color-bg-alt);
  font-size: 11px;
  color: var(--color-text-secondary);
}
.template-detail-footer {
  position: sticky;
  bottom: 0;
  display: flex;
  align-items: center;
  padding: var(--spacing-3) var(--spacing-4);
  padding-bottom: calc(var(--spacing-3) + var(--safe-bottom));
  background: var(--color-bg-card);
  border-top: 1px solid var(--color-border-light);
  gap: var(--spacing-3);
}
.template-footer-price { flex: 1; }
.template-footer-price-label {
  font-size: 11px;
  color: var(--color-text-muted);
}
.template-footer-price-num {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
}
.template-unlock-btn {
  padding: 12px 32px;
  border-radius: var(--radius-full);
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  color: #fff;
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  border: none;
  cursor: pointer;
}
.template-unlock-btn:active { opacity: 0.9; }

/* ============ Bottom Sheet Modal ============ */
.bs-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  z-index: var(--z-modal);
  display: none;
  align-items: flex-end;
}
.bs-modal-overlay.show { display: flex; }
.bs-modal {
  width: 100%;
  max-height: 70vh;
  background: var(--color-bg);
  border-radius: var(--radius-xl) var(--radius-xl) 0 0;
  display: flex;
  flex-direction: column;
  animation: slideUp 0.3s var(--ease);
}
@keyframes slideUp {
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
}
.bs-modal-handle {
  width: 36px;
  height: 4px;
  border-radius: 2px;
  background: var(--color-border);
  margin: 10px auto 0;
  flex-shrink: 0;
}
.bs-modal-header {
  padding: var(--spacing-3) var(--spacing-4);
  text-align: center;
  border-bottom: 1px solid var(--color-border-light);
  flex-shrink: 0;
}
.bs-modal-title {
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
}
.bs-modal-body {
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: var(--spacing-3) 0;
}

/* ============ Trending List in Bottom Sheet ============ */
.trending-list-item {
  display: flex;
  align-items: center;
  padding: var(--spacing-3) var(--spacing-4);
  cursor: pointer;
  transition: background var(--duration-fast);
}
.trending-list-item:active { background: var(--color-bg-alt); }
.trending-list-rank {
  width: 24px;
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-bold);
  text-align: center;
  margin-right: var(--spacing-3);
}
.trending-list-rank.rank-1 { color: #FFD700; }
.trending-list-rank.rank-2 { color: #C0C0C0; }
.trending-list-rank.rank-3 { color: #CD7F32; }
.trending-list-rank.normal { color: var(--color-text-muted); }
.trending-list-img {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-sm);
  background: var(--color-bg-alt);
  margin-right: var(--spacing-3);
  overflow: hidden;
  flex-shrink: 0;
}
.trending-list-img img { width: 100%; height: 100%; object-fit: cover; }
.trending-list-info { flex: 1; min-width: 0; }
.trending-list-name {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 2px;
}
.trending-list-author {
  font-size: 11px;
  color: var(--color-text-muted);
}
.trending-list-price {
  font-size: 12px;
  color: var(--color-primary);
  font-weight: var(--font-weight-semibold);
  margin-left: var(--spacing-2);
}

/* ============ Recharge Modal ============ */
.recharge-options {
  padding: var(--spacing-4);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
}
.recharge-option {
  display: flex;
  align-items: center;
  padding: var(--spacing-4);
  background: var(--color-bg-card);
  border-radius: var(--radius-lg);
  border: 2px solid var(--color-border-light);
  cursor: pointer;
  position: relative;
  transition: all var(--duration-fast);
}
.recharge-option.selected {
  border-color: var(--color-primary);
  background: rgba(196, 149, 106, 0.05);
}
.recharge-option.recommended::before {
  content: '推荐';
  position: absolute;
  top: 0;
  right: 12px;
  font-size: 10px;
  padding: 2px 8px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  color: #fff;
  border-radius: 0 0 var(--radius-sm) var(--radius-sm);
  font-weight: var(--font-weight-medium);
}
.recharge-amount { flex: 1; }
.recharge-gp {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  margin-bottom: 2px;
}
.recharge-bonus {
  font-size: 11px;
  color: var(--color-primary);
}
.recharge-price {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
}
.recharge-btn {
  margin: var(--spacing-4);
  margin-top: 0;
  padding: 14px;
  border-radius: var(--radius-full);
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  color: #fff;
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  text-align: center;
  cursor: pointer;
  border: none;
}
.recharge-btn:active { opacity: 0.9; }

/* ============ Ingredient Scan Modal ============ */
.scan-modal-hero {
  background: var(--color-hero-bg);
  padding: var(--spacing-5) var(--spacing-4);
  padding-top: calc(var(--spacing-5) + var(--safe-top));
  color: #fff;
}
.scan-camera-area {
  height: 280px;
  background: rgba(255,255,255,0.05);
  border-radius: var(--radius-lg);
  margin: var(--spacing-4);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.scan-frame {
  width: 200px;
  height: 200px;
  border: 2px solid rgba(196, 149, 106, 0.5);
  border-radius: var(--radius-md);
  position: relative;
}
.scan-frame::before,
.scan-frame::after,
.scan-frame > span::before,
.scan-frame > span::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  border-color: var(--color-primary);
  border-style: solid;
}
.scan-frame::before { top: -2px; left: -2px; border-width: 3px 0 0 3px; border-radius: 4px 0 0 0; }
.scan-frame::after { top: -2px; right: -2px; border-width: 3px 3px 0 0; border-radius: 0 4px 0 0; }
.scan-frame > span::before { bottom: -2px; left: -2px; border-width: 0 0 3px 3px; border-radius: 0 0 0 4px; }
.scan-frame > span::after { bottom: -2px; right: -2px; border-width: 0 3px 3px 0; border-radius: 0 0 4px 0; }
.scan-line {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--color-primary), transparent);
  animation: scanLine 2s linear infinite;
}
@keyframes scanLine {
  0% { top: 0; }
  100% { top: 100%; }
}
.scan-mode-tabs {
  display: flex;
  justify-content: center;
  gap: var(--spacing-5);
  margin-bottom: var(--spacing-4);
}
.scan-mode-tab {
  font-size: var(--font-size-sm);
  color: rgba(255,255,255,0.5);
  cursor: pointer;
  padding: 6px 0;
  position: relative;
}
.scan-mode-tab.active {
  color: #fff;
  font-weight: var(--font-weight-medium);
}
.scan-mode-tab.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 2px;
  background: var(--color-primary);
  border-radius: 1px;
}
.scan-start-btn {
  display: block;
  width: calc(100% - var(--spacing-8));
  margin: 0 auto;
  padding: 14px;
  border-radius: var(--radius-full);
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  color: #fff;
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  text-align: center;
  cursor: pointer;
  border: none;
}
.scan-start-btn:active { opacity: 0.9; }
.scan-tip {
  text-align: center;
  font-size: 11px;
  color: rgba(255,255,255,0.4);
  margin-top: var(--spacing-3);
  margin-bottom: var(--spacing-4);
}

/* ============ Profile Page Additions ============ */
.profile-face-card {
  margin: var(--spacing-4);
  padding: var(--spacing-4);
  background: var(--color-bg-card);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  cursor: pointer;
}
.profile-gp-card {
  margin: 0 var(--spacing-4) var(--spacing-4);
  padding: var(--spacing-4);
  background: linear-gradient(135deg, var(--color-primary-dark), var(--color-primary));
  border-radius: var(--radius-lg);
  color: #fff;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.profile-gp-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  background: rgba(255,255,255,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-right: var(--spacing-3);
}
.profile-gp-info { flex: 1; }
.profile-gp-title {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  margin-bottom: 2px;
}
.profile-gp-subtitle {
  font-size: 11px;
  opacity: 0.7;
}
.profile-gp-balance {
  text-align: right;
}
.profile-gp-num {
  font-size: 24px;
  font-weight: var(--font-weight-bold);
}
.profile-gp-go {
  font-size: 11px;
  opacity: 0.8;
}
.profile-grid-5 {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: var(--spacing-3);
  padding: var(--spacing-4);
  background: var(--color-bg-card);
  margin: 0 var(--spacing-4) var(--spacing-3);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
}
.profile-grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-3);
  padding: var(--spacing-4);
  background: var(--color-bg-card);
  margin: 0 var(--spacing-4) var(--spacing-4);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
}
.profile-grid-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  cursor: pointer;
}
.profile-grid-item:active { opacity: 0.7; }
.profile-grid-icon {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  background: var(--color-bg-alt);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}
.profile-grid-label {
  font-size: 11px;
  color: var(--color-text-secondary);
  text-align: center;
}
"""

# Insert CSS before the closing </style> tag
css_insert_point = html.find('/* Utility */')
if css_insert_point != -1:
    html = html[:css_insert_point] + new_css + '\n' + html[css_insert_point:]
    print("  ✓ 新增 CSS 样式已注入")
else:
    print("  ⚠ CSS 注入点未找到")

# ==========================================================================
# 2. 重写首页
# ==========================================================================
print("\n[2/8] 重写首页结构...")

home_start = html.find('  <!-- ===== Home Page ===== -->')
home_end = html.find('  <!-- ===== Discover Page ===== -->')

if home_start == -1:
    home_start = html.find('  <!-- ===== Home Page ===== -->')
    home_end = html.find('  <div class="page" id="page-discover">')

new_home_html = '''  <!-- ===== Home Page ===== -->
  <div class="page active" id="page-home">
    <header class="app-header">
      <div class="header-left">
        <div class="avatar-ring" style="width:42px;height:42px;">
          <div class="avatar">美</div>
        </div>
        <div>
          <div style="font-size: var(--font-size-base); font-weight: var(--font-weight-semibold); color: var(--color-text);">小美</div>
          <div style="font-size: 10px; color: var(--color-text-muted);">金妆 Lv.3</div>
        </div>
        <div class="gp-badge" style="margin-left: 4px; cursor: pointer;" onclick="openGpCenter()">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L14.09 8.26L20.18 8.64L15.54 12.74L17.12 19.02L12 15.77L6.88 19.02L8.46 12.74L3.82 8.64L9.91 8.26L12 2Z"/></svg>
          <span id="gp-balance">328</span>
        </div>
      </div>
      <div class="header-right">
        <button class="icon-btn" onclick="showToast('消息中心')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 01-3.46 0"/>
          </svg>
          <span class="notif-dot"></span>
        </button>
      </div>
    </header>

    <!-- Face Profile Card -->
    <div class="face-profile-card" onclick="showToast('面部档案详情')">
      <div class="face-profile-avatar">👤</div>
      <div class="face-profile-info">
        <div class="face-profile-title">我的面部档案</div>
        <div class="face-profile-desc">鹅蛋脸 · 混合性肤质 · 暖色调</div>
        <div class="face-profile-tags">
          <span class="face-profile-tag score">骨相 86</span>
          <span class="face-profile-tag">T区油</span>
          <span class="face-profile-tag">敏感肌</span>
        </div>
      </div>
    </div>

    <!-- King Kong Area (5-grid) -->
    <div class="kingkong-grid">
      <div class="kingkong-item" onclick="switchTab('mirror')">
        <div class="kingkong-icon">🪞</div>
        <span class="kingkong-label">镜面模式</span>
      </div>
      <div class="kingkong-item" onclick="switchTab('library'); showToast('美妆问答')">
        <div class="kingkong-icon">🔍</div>
        <span class="kingkong-label">局部搜索</span>
      </div>
      <div class="kingkong-item" onclick="switchTab('mall')">
        <div class="kingkong-icon">🛍️</div>
        <span class="kingkong-label">商城</span>
      </div>
      <div class="kingkong-item" onclick="openIngredientScan()">
        <div class="kingkong-icon new">🔬</div>
        <span class="kingkong-label">成分扫描</span>
      </div>
      <div class="kingkong-item" onclick="showToast('创作者中心')">
        <div class="kingkong-icon">✨</div>
        <span class="kingkong-label">创作者</span>
      </div>
    </div>

    <!-- Hero Banner -->
    <div class="hero-banner">
      <img src="ui-design/assets/hero-banner.jpg" alt="AI焕新妆造">
      <div class="hero-gradient"></div>
      <div class="hero-content">
        <h1>AI 焕新妆造</h1>
        <p>发现最适合你的专属妆容</p>
      </div>
      <div class="hero-dots">
        <span class="active"></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <!-- Weekly Trending -->
    <div class="trending-section">
      <div class="trending-header">
        <div class="trending-title">🔥 本周热度榜</div>
        <div class="trending-more" onclick="openTrendingModal()">更多 →</div>
      </div>
      <div class="trending-scroll">
        <div class="trending-card" onclick="openTemplateDetail()">
          <div class="trending-card-img">
            <img src="ui-design/assets/feed-card-1.jpg" alt="晚宴精致妆容">
            <div class="trending-rank rank-1">1</div>
          </div>
          <div class="trending-card-info">
            <div class="trending-card-name">晚宴精致妆容</div>
            <div class="trending-card-meta">
              <span class="trending-card-author">Luna</span>
              <span class="trending-card-price">50 GP</span>
            </div>
          </div>
        </div>
        <div class="trending-card" onclick="openTemplateDetail()">
          <div class="trending-card-img">
            <img src="ui-design/assets/feed-card-2.jpg" alt="日常清新裸妆">
            <div class="trending-rank rank-2">2</div>
          </div>
          <div class="trending-card-info">
            <div class="trending-card-name">日常清新裸妆</div>
            <div class="trending-card-meta">
              <span class="trending-card-author">小妆日记</span>
              <span class="trending-card-price">30 GP</span>
            </div>
          </div>
        </div>
        <div class="trending-card" onclick="openTemplateDetail()">
          <div class="trending-card-img">
            <img src="ui-design/assets/product-1.jpg" alt="国风古韵妆">
            <div class="trending-rank rank-3">3</div>
          </div>
          <div class="trending-card-info">
            <div class="trending-card-name">国风古韵妆</div>
            <div class="trending-card-meta">
              <span class="trending-card-author">花西子</span>
              <span class="trending-card-price">80 GP</span>
            </div>
          </div>
        </div>
        <div class="trending-card" onclick="openTemplateDetail()">
          <div class="trending-card-img">
            <img src="ui-design/assets/product-2.jpg" alt="通勤大地色">
            <div class="trending-rank">4</div>
          </div>
          <div class="trending-card-info">
            <div class="trending-card-name">通勤大地色</div>
            <div class="trending-card-meta">
              <span class="trending-card-author">职场美妆</span>
              <span class="trending-card-price">25 GP</span>
            </div>
          </div>
        </div>
        <div class="trending-card" onclick="openTemplateDetail()">
          <div class="trending-card-img">
            <img src="ui-design/assets/product-3.jpg" alt="蜜桃少女妆">
            <div class="trending-rank">5</div>
          </div>
          <div class="trending-card-info">
            <div class="trending-card-name">蜜桃少女妆</div>
            <div class="trending-card-meta">
              <span class="trending-card-author">夏日限定</span>
              <span class="trending-card-price">35 GP</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Waterfall Feed -->
    <div class="waterfall-section">
      <div class="waterfall-header">
        <div class="waterfall-title">✨ 大家都在看</div>
      </div>
    </div>
    <div class="waterfall-grid">
      <div class="waterfall-card" onclick="openTemplateDetail()">
        <div class="waterfall-card-img" style="height: 180px;">
          <img src="ui-design/assets/feed-card-1.jpg" alt="晚宴精致妆容">
          <span class="waterfall-badge l2">L2 精选</span>
        </div>
        <div class="waterfall-card-info">
          <div class="waterfall-card-title">晚宴精致妆容｜高级感富家千金妆教程</div>
          <div class="waterfall-card-bottom">
            <div class="waterfall-card-creator">
              <div class="waterfall-creator-avatar">L</div>
              <span class="waterfall-creator-name">美妆师Luna</span>
            </div>
            <span class="waterfall-card-price">50 GP</span>
          </div>
        </div>
      </div>
      <div class="waterfall-card" onclick="openTemplateDetail()">
        <div class="waterfall-card-img" style="height: 220px;">
          <img src="ui-design/assets/feed-card-2.jpg" alt="日常清新裸妆">
          <span class="waterfall-badge free">免费</span>
        </div>
        <div class="waterfall-card-info">
          <div class="waterfall-card-title">日常清新裸妆｜伪素颜神器 5分钟搞定</div>
          <div class="waterfall-card-bottom">
            <div class="waterfall-card-creator">
              <div class="waterfall-creator-avatar" style="background: linear-gradient(135deg, #E8C9A8, #D4B896);">妆</div>
              <span class="waterfall-creator-name">小妆日记</span>
            </div>
            <span class="waterfall-card-price">免费</span>
          </div>
        </div>
      </div>
      <div class="waterfall-card" onclick="openTemplateDetail()">
        <div class="waterfall-card-img" style="height: 200px;">
          <img src="ui-design/assets/product-1.jpg" alt="国风唐妆">
          <span class="waterfall-badge gufeng">国风</span>
        </div>
        <div class="waterfall-card-info">
          <div class="waterfall-card-title">大唐盛世妆｜非遗文化创意妆容分享</div>
          <div class="waterfall-card-bottom">
            <div class="waterfall-card-creator">
              <div class="waterfall-creator-avatar" style="background: linear-gradient(135deg, #C45C5C, #A64545);">唐</div>
              <span class="waterfall-creator-name">花西子</span>
            </div>
            <span class="waterfall-card-price">80 GP</span>
          </div>
        </div>
      </div>
      <div class="waterfall-card" onclick="openTemplateDetail()">
        <div class="waterfall-card-img" style="height: 160px;">
          <img src="ui-design/assets/product-4.jpg" alt="通勤大地色">
          <span class="waterfall-badge l3">L3 大师</span>
        </div>
        <div class="waterfall-card-info">
          <div class="waterfall-card-title">通勤大地色眼妆｜新手也能画好的入门教程</div>
          <div class="waterfall-card-bottom">
            <div class="waterfall-card-creator">
              <div class="waterfall-creator-avatar" style="background: linear-gradient(135deg, #6B5435, #8B6F47);">职</div>
              <span class="waterfall-creator-name">职场美妆</span>
            </div>
            <span class="waterfall-card-price">60 GP</span>
          </div>
        </div>
      </div>
      <div class="waterfall-card" onclick="openTemplateDetail()">
        <div class="waterfall-card-img" style="height: 210px;">
          <img src="ui-design/assets/hero-banner.jpg" alt="夏日元气妆">
          <span class="waterfall-badge l2">L2 精选</span>
        </div>
        <div class="waterfall-card-info">
          <div class="waterfall-card-title">夏日元气果汁妆｜清透感满满少女感</div>
          <div class="waterfall-card-bottom">
            <div class="waterfall-card-creator">
              <div class="waterfall-creator-avatar" style="background: linear-gradient(135deg, #FFB347, #FFCC33);">夏</div>
              <span class="waterfall-creator-name">夏日限定</span>
            </div>
            <span class="waterfall-card-price">45 GP</span>
          </div>
        </div>
      </div>
      <div class="waterfall-card" onclick="openTemplateDetail()">
        <div class="waterfall-card-img" style="height: 190px;">
          <img src="ui-design/assets/product-2.jpg" alt="复古港风妆">
          <span class="waterfall-badge free">免费</span>
        </div>
        <div class="waterfall-card-info">
          <div class="waterfall-card-title">复古港风妆容｜80年代氛围感大红唇</div>
          <div class="waterfall-card-bottom">
            <div class="waterfall-card-creator">
              <div class="waterfall-creator-avatar" style="background: linear-gradient(135deg, #B85454, #D46A6A);">港</div>
              <span class="waterfall-creator-name">复古美学</span>
            </div>
            <span class="waterfall-card-price">免费</span>
          </div>
        </div>
      </div>
    </div>

    <div style="height: 40px;"></div>
  </div>
'''

if home_start != -1 and home_end != -1:
    html = html[:home_start] + new_home_html + '\n' + html[home_end:]
    print("  ✓ 首页已重写")
else:
    print(f"  ⚠ 首页边界未找到 start={home_start} end={home_end}")

# ==========================================================================
# 3. 发现页升级为颜库页
# ==========================================================================
print("\n[3/8] 发现页升级为颜库页...")

lib_start = html.find('  <div class="page" id="page-discover">')
lib_end = html.find('  <!-- ===== Scan Page ===== -->')

new_library_html = '''  <!-- ===== Library Page (颜库) ===== -->
  <div class="page" id="page-library">
    <div class="library-header">
      <div class="library-search-row">
        <div class="library-search-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input type="text" placeholder="搜索妆容、成分、美妆问题..." id="librarySearch">
        </div>
        <button class="library-publish-btn" onclick="showToast('发布作品')">发布</button>
      </div>
      <div class="library-cat-tabs" id="libraryCatTabs">
        <span class="library-cat-tab active" onclick="switchLibraryCat(this, 'daren')">达人精选</span>
        <span class="library-cat-tab" onclick="switchLibraryCat(this, 'jubu')">局部拆解</span>
        <span class="library-cat-tab" onclick="switchLibraryCat(this, 'qa')">美妆问答</span>
        <span class="library-cat-tab" onclick="switchLibraryCat(this, 'gufeng')">国风专区</span>
        <span class="library-cat-tab" onclick="switchLibraryCat(this, 'yinfa')">银发专区</span>
        <span class="library-cat-tab" onclick="switchLibraryCat(this, 'dapai')">大牌精选</span>
        <span class="library-cat-tab" onclick="switchLibraryCat(this, 'star')">明星同款</span>
      </div>
    </div>

    <div class="library-sub-tabs" id="librarySubTabs">
      <span class="library-sub-tab active" onclick="switchLibrarySub(this)">全部</span>
      <span class="library-sub-tab" onclick="switchLibrarySub(this)">日常</span>
      <span class="library-sub-tab" onclick="switchLibrarySub(this)">约会</span>
      <span class="library-sub-tab" onclick="switchLibrarySub(this)">职场</span>
      <span class="library-sub-tab" onclick="switchLibrarySub(this)">派对</span>
      <span class="library-sub-tab" onclick="switchLibrarySub(this)">复古</span>
    </div>

    <div class="waterfall-grid" style="margin-top: var(--spacing-3);">
      <div class="waterfall-card" onclick="openTemplateDetail()">
        <div class="waterfall-card-img" style="height: 180px;">
          <img src="ui-design/assets/feed-card-1.jpg" alt="晚宴精致妆容">
          <span class="waterfall-badge l2">L2 精选</span>
        </div>
        <div class="waterfall-card-info">
          <div class="waterfall-card-title">晚宴精致妆容｜高级感富家千金妆教程</div>
          <div class="waterfall-card-bottom">
            <div class="waterfall-card-creator">
              <div class="waterfall-creator-avatar">L</div>
              <span class="waterfall-creator-name">美妆师Luna</span>
            </div>
            <span class="waterfall-card-price">50 GP</span>
          </div>
        </div>
      </div>
      <div class="waterfall-card" onclick="openTemplateDetail()">
        <div class="waterfall-card-img" style="height: 220px;">
          <img src="ui-design/assets/feed-card-2.jpg" alt="日常清新裸妆">
          <span class="waterfall-badge free">免费</span>
        </div>
        <div class="waterfall-card-info">
          <div class="waterfall-card-title">日常清新裸妆｜伪素颜神器 5分钟搞定</div>
          <div class="waterfall-card-bottom">
            <div class="waterfall-card-creator">
              <div class="waterfall-creator-avatar" style="background: linear-gradient(135deg, #E8C9A8, #D4B896);">妆</div>
              <span class="waterfall-creator-name">小妆日记</span>
            </div>
            <span class="waterfall-card-price">免费</span>
          </div>
        </div>
      </div>
      <div class="waterfall-card" onclick="openTemplateDetail()">
        <div class="waterfall-card-img" style="height: 200px;">
          <img src="ui-design/assets/product-1.jpg" alt="国风唐妆">
          <span class="waterfall-badge gufeng">国风</span>
        </div>
        <div class="waterfall-card-info">
          <div class="waterfall-card-title">大唐盛世妆｜非遗文化创意妆容分享</div>
          <div class="waterfall-card-bottom">
            <div class="waterfall-card-creator">
              <div class="waterfall-creator-avatar" style="background: linear-gradient(135deg, #C45C5C, #A64545);">唐</div>
              <span class="waterfall-creator-name">花西子</span>
            </div>
            <span class="waterfall-card-price">80 GP</span>
          </div>
        </div>
      </div>
      <div class="waterfall-card" onclick="openTemplateDetail()">
        <div class="waterfall-card-img" style="height: 160px;">
          <img src="ui-design/assets/product-4.jpg" alt="通勤大地色">
          <span class="waterfall-badge l3">L3 大师</span>
        </div>
        <div class="waterfall-card-info">
          <div class="waterfall-card-title">通勤大地色眼妆｜新手也能画好的入门教程</div>
          <div class="waterfall-card-bottom">
            <div class="waterfall-card-creator">
              <div class="waterfall-creator-avatar" style="background: linear-gradient(135deg, #6B5435, #8B6F47);">职</div>
              <span class="waterfall-creator-name">职场美妆</span>
            </div>
            <span class="waterfall-card-price">60 GP</span>
          </div>
        </div>
      </div>
      <div class="waterfall-card" onclick="openTemplateDetail()">
        <div class="waterfall-card-img" style="height: 210px;">
          <img src="ui-design/assets/hero-banner.jpg" alt="夏日元气妆">
          <span class="waterfall-badge l2">L2 精选</span>
        </div>
        <div class="waterfall-card-info">
          <div class="waterfall-card-title">夏日元气果汁妆｜清透感满满少女感</div>
          <div class="waterfall-card-bottom">
            <div class="waterfall-card-creator">
              <div class="waterfall-creator-avatar" style="background: linear-gradient(135deg, #FFB347, #FFCC33);">夏</div>
              <span class="waterfall-creator-name">夏日限定</span>
            </div>
            <span class="waterfall-card-price">45 GP</span>
          </div>
        </div>
      </div>
      <div class="waterfall-card" onclick="openTemplateDetail()">
        <div class="waterfall-card-img" style="height: 190px;">
          <img src="ui-design/assets/product-2.jpg" alt="复古港风妆">
          <span class="waterfall-badge free">免费</span>
        </div>
        <div class="waterfall-card-info">
          <div class="waterfall-card-title">复古港风妆容｜80年代氛围感大红唇</div>
          <div class="waterfall-card-bottom">
            <div class="waterfall-card-creator">
              <div class="waterfall-creator-avatar" style="background: linear-gradient(135deg, #B85454, #D46A6A);">港</div>
              <span class="waterfall-creator-name">复古美学</span>
            </div>
            <span class="waterfall-card-price">免费</span>
          </div>
        </div>
      </div>
    </div>

    <div style="height: 40px;"></div>
  </div>
'''

if lib_start != -1 and lib_end != -1:
    html = html[:lib_start] + new_library_html + '\n' + html[lib_end:]
    print("  ✓ 颜库页已替换")
else:
    print(f"  ⚠ 颜库页边界未找到 start={lib_start} end={lib_end}")

# ==========================================================================
# 4. 焕新页优化
# ==========================================================================
print("\n[4/8] 焕新页优化...")

mirror_start = html.find('  <div class="page" id="page-mirror">')
mirror_end = html.find('  <!-- ===== Profile Page ===== -->')

new_mirror_html = '''  <!-- ===== Mirror Page (焕新) ===== -->
  <div class="page" id="page-mirror">
    <div class="mirror-hero-v2">
      <!-- Settings Button -->
      <div class="mirror-settings-btn" onclick="showToast('设置')">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.1a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.1a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.1a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.1a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
      </div>

      <!-- Mode Switch -->
      <div class="mirror-mode-switch-v2">
        <span class="mirror-mode-btn-v2 active" data-mode="mirror" onclick="switchMirrorMode('mirror')">Mirror</span>
        <span class="mirror-mode-btn-v2" data-mode="chat" onclick="switchMirrorMode('chat')">Chat</span>
      </div>

      <!-- Mirror View -->
      <div id="mirror-view" class="mirror-face-area">
        <div class="mirror-face-ring-v2">
          <div class="mirror-face-inner">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </div>
        </div>
        <div class="mirror-title-v2">AI 虚拟试妆</div>
        <div class="mirror-subtitle-v2">选择妆容模板，一键上脸体验</div>
        <div class="mirror-progress-dots">
          <span class="active"></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <!-- Chat View -->
      <div id="chat-view" style="display: none; flex-direction: column; position: absolute; inset: 0; top: 80px; background: var(--color-bg);">
        <div class="chat-quick-actions">
          <span class="chat-quick-chip" onclick="sendQuickMsg('适合通勤的妆容')">适合通勤的妆容</span>
          <span class="chat-quick-chip" onclick="sendQuickMsg('油皮定妆技巧')">油皮定妆技巧</span>
          <span class="chat-quick-chip" onclick="sendQuickMsg('流行唇色推荐')">流行唇色</span>
        </div>
        <div class="chat-container" id="chatContainer">
          <div class="chat-msg ai">
            <div class="chat-avatar">AI</div>
            <div class="chat-bubble">你好！我是你的 AI 美妆顾问 🌸<br>有什么我可以帮你的吗？</div>
          </div>
        </div>
        <div class="chat-input-bar">
          <input type="text" class="chat-input" placeholder="问 AI 任何美妆问题..." id="chatInput">
          <button class="chat-send-btn" onclick="sendChatMessage()">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Bottom Toolbar (Mirror Mode) -->
      <div class="mirror-bottom-bar" id="mirrorBottomBar">
        <div class="mirror-bottom-btn" onclick="showToast('滤镜')">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
          <span>滤镜</span>
        </div>
        <div class="mirror-bottom-btn" onclick="showToast('拍照')">
          <div class="mirror-shutter-btn">
            <div class="mirror-shutter-inner"></div>
          </div>
        </div>
        <div class="mirror-bottom-btn" onclick="showToast('补光灯')">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
          <span>补光</span>
        </div>
      </div>
    </div>

    <!-- Makeup Effect Preview List -->
    <div class="tutorial-list">
      <div class="section-header">
        <div class="section-title" style="font-size: var(--font-size-md);">妆容效果预览</div>
        <span class="badge badge-primary badge-pill">5 / 10 步</span>
      </div>

      <div class="tutorial-item done">
        <div class="step-num">✓</div>
        <div class="tutorial-text">
          <h4>打底妆</h4>
          <p>均匀涂抹粉底液，打造无瑕底妆</p>
        </div>
      </div>

      <div class="tutorial-item done">
        <div class="step-num">✓</div>
        <div class="tutorial-text">
          <h4>定妆</h4>
          <p>散粉轻按定妆，持久持妆</p>
        </div>
      </div>

      <div class="tutorial-item done">
        <div class="step-num">✓</div>
        <div class="tutorial-text">
          <h4>画眉</h4>
          <p>顺着眉形填充，自然过渡</p>
          <div class="physics-tag">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
            </svg>
            物理量已采集
          </div>
        </div>
      </div>

      <div class="tutorial-item active">
        <div class="step-num">4</div>
        <div class="tutorial-text">
          <h4 style="color: var(--color-primary);">画眼影 <span class="badge badge-primary badge-pill" style="margin-left:6px;">进行中</span></h4>
          <p>浅色系打底，深色系晕染眼尾</p>
        </div>
      </div>

      <div class="tutorial-item">
        <div class="step-num">5</div>
        <div class="tutorial-text">
          <h4>画眼线</h4>
          <p>沿着睫毛根部描绘，眼尾微微上扬</p>
        </div>
      </div>

      <div class="tutorial-item">
        <div class="step-num">6</div>
        <div class="tutorial-text">
          <h4>涂睫毛膏</h4>
          <p>Z字型刷法，根根分明</p>
        </div>
      </div>
    </div>

    <div style="height: 40px;"></div>
  </div>
'''

if mirror_start != -1 and mirror_end != -1:
    html = html[:mirror_start] + new_mirror_html + '\n' + html[mirror_end:]
    print("  ✓ 焕新页已优化")
else:
    print(f"  ⚠ 焕新页边界未找到 start={mirror_start} end={mirror_end}")

# ==========================================================================
# 5. 优化我的页
# ==========================================================================
print("\n[5/8] 优化我的页...")

profile_start = html.find('  <div class="page" id="page-profile">')
profile_end = html.find('  <!-- ===== Brand Page ===== -->')
if profile_end == -1:
    profile_end = html.find('  <div class="page" id="page-brand">')

new_profile_html = '''  <!-- ===== Profile Page (我的) ===== -->
  <div class="page" id="page-profile">
    <div class="profile-banner">
      <div class="profile-top">
        <div class="avatar avatar-lg">美</div>
        <div class="profile-name">
          <h2>小美</h2>
          <div class="level-tag">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L14.09 8.26L20.18 8.64L15.54 12.74L17.12 19.02L12 15.77L6.88 19.02L8.46 12.74L3.82 8.64L9.91 8.26L12 2Z"/></svg>
            金妆 Lv.3
          </div>
        </div>
        <button class="btn btn-sm" style="background: rgba(255,255,255,0.2); color: #fff; border: 1px solid rgba(255,255,255,0.3);" onclick="showToast('编辑资料')">编辑</button>
      </div>
      <div class="profile-stats">
        <div class="stat"><div class="stat-num">328</div><div class="stat-label">焕新值</div></div>
        <div class="stat"><div class="stat-num">28</div><div class="stat-label">收藏</div></div>
        <div class="stat"><div class="stat-num">12</div><div class="stat-label">关注</div></div>
        <div class="stat"><div class="stat-num">156</div><div class="stat-label">粉丝</div></div>
      </div>
    </div>

    <!-- Face Profile Card -->
    <div class="profile-face-card" onclick="showToast('面部档案详情')">
      <div class="face-profile-avatar" style="width: 48px; height: 48px; font-size: 20px;">👤</div>
      <div class="face-profile-info">
        <div class="face-profile-title">小美 · 鹅蛋脸</div>
        <div class="face-profile-desc">混合性肤质 · 暖色调</div>
        <div class="face-profile-tags">
          <span class="face-profile-tag score">骨相 86</span>
          <span class="face-profile-tag">双眼皮</span>
          <span class="face-profile-tag">高鼻梁</span>
        </div>
      </div>
    </div>

    <!-- GP Big Card -->
    <div class="profile-gp-card" onclick="openGpCenter()">
      <div class="profile-gp-icon">⭐</div>
      <div class="profile-gp-info">
        <div class="profile-gp-title">焕新值 GP</div>
        <div class="profile-gp-subtitle">每日任务 · 成就奖励 · 兑换商城</div>
      </div>
      <div class="profile-gp-balance">
        <div class="profile-gp-num" id="profile-gp-num">328</div>
        <div class="profile-gp-go">去查看 →</div>
      </div>
    </div>

    <!-- Function Grid 1 (5 items) -->
    <div class="profile-grid-5">
      <div class="profile-grid-item" onclick="showToast('风格偏好')">
        <div class="profile-grid-icon">🎨</div>
        <span class="profile-grid-label">风格偏好</span>
      </div>
      <div class="profile-grid-item" onclick="showToast('我的模板')">
        <div class="profile-grid-icon">💄</div>
        <span class="profile-grid-label">我的模板</span>
      </div>
      <div class="profile-grid-item" onclick="showToast('工具箱')">
        <div class="profile-grid-icon">🧰</div>
        <span class="profile-grid-label">工具箱</span>
      </div>
      <div class="profile-grid-item" onclick="showToast('国风专区')">
        <div class="profile-grid-icon">🏮</div>
        <span class="profile-grid-label">国风</span>
      </div>
      <div class="profile-grid-item" onclick="showToast('银发专区')">
        <div class="profile-grid-icon">👩‍🦳</div>
        <span class="profile-grid-label">银发</span>
      </div>
    </div>

    <!-- Function Grid 2 (3 items) -->
    <div class="profile-grid-3">
      <div class="profile-grid-item" onclick="openIngredientScan()">
        <div class="profile-grid-icon">🔬</div>
        <span class="profile-grid-label">成分扫描</span>
      </div>
      <div class="profile-grid-item" onclick="showToast('门店地图')">
        <div class="profile-grid-icon">📍</div>
        <span class="profile-grid-label">门店地图</span>
      </div>
      <div class="profile-grid-item" onclick="switchTab('brand')">
        <div class="profile-grid-icon">🤝</div>
        <span class="profile-grid-label">品牌合作</span>
      </div>
    </div>

    <div style="height: 40px;"></div>
  </div>
'''

if profile_start != -1 and profile_end != -1:
    html = html[:profile_start] + new_profile_html + '\n' + html[profile_end:]
    print("  ✓ 我的页已优化")
else:
    print(f"  ⚠ 我的页边界未找到 start={profile_start} end={profile_end}")

# ==========================================================================
# 6. 添加弹窗体系 HTML
# ==========================================================================
print("\n[6/8] 添加弹窗体系...")

# Find position before toast or before closing app-shell div
modal_insert_point = html.find('  <!-- ===== Toast ===== -->')

modals_html = '''  <!-- ===== Ingredient Scan Modal (Full Screen) ===== -->
  <div class="fs-modal-overlay" id="ingredient-scan-modal">
    <div class="scan-modal-hero" style="flex-shrink: 0;">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--spacing-4);">
        <div style="font-size: var(--font-size-lg); font-weight: var(--font-weight-semibold);">成分安全扫描</div>
        <div class="fs-modal-close" style="background: rgba(255,255,255,0.1); color: #fff;" onclick="closeIngredientScan()">✕</div>
      </div>
      <div class="scan-mode-tabs">
        <span class="scan-mode-tab active">拍照</span>
        <span class="scan-mode-tab">相册</span>
        <span class="scan-mode-tab">手动输入</span>
      </div>
    </div>
    <div style="flex: 1; background: var(--color-hero-bg);">
      <div class="scan-camera-area" id="scanCamera">
        <div class="scan-frame"><span></span></div>
        <div class="scan-line"></div>
      </div>
      <button class="scan-start-btn" onclick="startIngredientScan()">📸 开始扫描</button>
      <div class="scan-tip">支持 10000+ 成分数据库 · 中欧美三方法规对照</div>
    </div>
  </div>

  <!-- ===== GP Center Modal (Full Screen) ===== -->
  <div class="fs-modal-overlay" id="gp-center-modal">
    <div class="gp-center-hero">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--spacing-3);">
        <div style="font-size: var(--font-size-lg); font-weight: var(--font-weight-semibold);">焕新值中心</div>
        <div class="fs-modal-close" style="background: rgba(255,255,255,0.2); color: #fff;" onclick="closeGpCenter()">✕</div>
      </div>
      <div class="gp-balance-label">当前焕新值</div>
      <div class="gp-balance-num" id="gp-center-balance">328 GP</div>
      <div class="gp-level-row">
        <span class="gp-level-tag">金妆 Lv.3</span>
        <span class="gp-level-text">距下一级 172 GP</span>
      </div>
      <div class="gp-level-bar">
        <div class="gp-level-fill" style="width: 65%;"></div>
      </div>
    </div>
    <div class="fs-modal-body">
      <div class="gp-task-section">
        <div class="gp-task-title">📅 每日任务</div>
        <div class="gp-task-item">
          <div class="gp-task-icon">📅</div>
          <div class="gp-task-info">
            <div class="gp-task-name">每日签到</div>
            <div class="gp-task-progress">已完成</div>
          </div>
          <span class="gp-task-reward">+10</span>
          <button class="gp-task-btn" onclick="claimTask(this, 10)">领取</button>
        </div>
        <div class="gp-task-item">
          <div class="gp-task-icon">👀</div>
          <div class="gp-task-info">
            <div class="gp-task-name">浏览 3 个妆容模板</div>
            <div class="gp-task-progress">2/3</div>
          </div>
          <span class="gp-task-reward">+15</span>
          <button class="gp-task-btn go" onclick="switchTab('library'); closeGpCenter(); showToast('去浏览妆容')">去完成</button>
        </div>
        <div class="gp-task-item">
          <div class="gp-task-icon">🔬</div>
          <div class="gp-task-info">
            <div class="gp-task-name">成分扫描 1 次</div>
            <div class="gp-task-progress">0/1</div>
          </div>
          <span class="gp-task-reward">+20</span>
          <button class="gp-task-btn go" onclick="openIngredientScan(); closeGpCenter();">去完成</button>
        </div>
        <div class="gp-task-item">
          <div class="gp-task-icon">⭐</div>
          <div class="gp-task-info">
            <div class="gp-task-name">收藏 1 个妆容</div>
            <div class="gp-task-progress">已完成</div>
          </div>
          <span class="gp-task-reward">+10</span>
          <button class="gp-task-btn" onclick="claimTask(this, 10)">领取</button>
        </div>
      </div>
      <div class="gp-task-section" style="padding-top: 0;">
        <div class="gp-task-title">🏆 成就奖励</div>
        <div class="gp-task-item">
          <div class="gp-task-icon">🎯</div>
          <div class="gp-task-info">
            <div class="gp-task-name">首次完成面部扫描</div>
            <div class="gp-task-progress">已达成</div>
          </div>
          <span class="gp-task-reward">+50</span>
          <button class="gp-task-btn" onclick="claimTask(this, 50)">领取</button>
        </div>
        <div class="gp-task-item">
          <div class="gp-task-icon">💳</div>
          <div class="gp-task-info">
            <div class="gp-task-name">首次购买妆容模板</div>
            <div class="gp-task-progress">未完成</div>
          </div>
          <span class="gp-task-reward">+30</span>
          <button class="gp-task-btn done">未完成</button>
        </div>
      </div>
      <div style="padding: 0 var(--spacing-4) var(--spacing-5);">
        <button class="recharge-btn" style="width: 100%; margin: 0;" onclick="closeGpCenter(); openRechargeModal()">🛍️ 去兑换商城</button>
      </div>
    </div>
  </div>

  <!-- ===== Template Detail Modal (Full Screen) ===== -->
  <div class="fs-modal-overlay" id="template-detail-modal">
    <div class="template-detail-hero">
      💄
      <div class="template-detail-back" onclick="closeTemplateDetail()">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
      </div>
      <div class="template-detail-actions">
        <div class="template-detail-action-btn" onclick="showToast('已收藏')">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </div>
        <div class="template-detail-action-btn" onclick="showToast('分享')">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="18" cy="5" r="3"/>
            <circle cx="6" cy="12" r="3"/>
            <circle cx="18" cy="19" r="3"/>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
          </svg>
        </div>
      </div>
      <span class="template-badge-corner">L2 精选</span>
    </div>
    <div class="fs-modal-body" style="background: var(--color-bg); padding-bottom: 0;">
      <div class="template-detail-body">
        <div class="template-detail-title">晚宴精致妆容｜高级感富家千金妆</div>
        <div class="template-creator-row">
          <div class="template-creator-avatar">L</div>
          <div>
            <span class="template-creator-name">美妆师 Luna</span>
            <span class="template-creator-verified">✓ 官方认证</span>
          </div>
        </div>
        <div class="template-stats-row">
          <div class="template-stat">
            <div class="template-stat-num">4.9</div>
            <div class="template-stat-label">评分</div>
          </div>
          <div class="template-stat">
            <div class="template-stat-num">2.3w</div>
            <div class="template-stat-label">使用次数</div>
          </div>
          <div class="template-stat">
            <div class="template-stat-num">10</div>
            <div class="template-stat-label">教程步骤</div>
          </div>
          <div class="template-stat">
            <div class="template-stat-num">15min</div>
            <div class="template-stat-label">时长</div>
          </div>
        </div>
        <div class="template-desc">
          这款晚宴妆容以精致的眼妆和饱满的唇色为重点，打造高级感满满的富家千金气质。适合晚宴派对、婚礼、商务宴会等正式场合，让你成为全场焦点。
        </div>
        <div class="template-tag-section">
          <div class="template-tag-title">适合场景</div>
          <div class="template-tags">
            <span class="template-tag">晚宴派对</span>
            <span class="template-tag">婚礼</span>
            <span class="template-tag">商务宴会</span>
            <span class="template-tag">拍照上镜</span>
          </div>
        </div>
        <div class="template-tag-section">
          <div class="template-tag-title">适合脸型</div>
          <div class="template-tags">
            <span class="template-tag">鹅蛋脸</span>
            <span class="template-tag">瓜子脸</span>
            <span class="template-tag">圆脸</span>
            <span class="template-tag">长脸</span>
          </div>
        </div>
      </div>
    </div>
    <div class="template-detail-footer">
      <div class="template-footer-price">
        <div class="template-footer-price-label">模板价格</div>
        <div class="template-footer-price-num">50 GP</div>
      </div>
      <button class="template-unlock-btn" onclick="unlockTemplate()">立即解锁</button>
    </div>
  </div>

  <!-- ===== Trending Modal (Bottom Sheet) ===== -->
  <div class="bs-modal-overlay" id="trending-modal" onclick="closeTrendingModal(event)">
    <div class="bs-modal" onclick="event.stopPropagation()">
      <div class="bs-modal-handle"></div>
      <div class="bs-modal-header">
        <div class="bs-modal-title">🔥 今日热度榜</div>
      </div>
      <div class="bs-modal-body">
        <div class="trending-list-item" onclick="openTemplateDetail(); closeTrendingModal();">
          <div class="trending-list-rank rank-1">1</div>
          <div class="trending-list-img"><img src="ui-design/assets/feed-card-1.jpg" alt="晚宴精致妆容"></div>
          <div class="trending-list-info">
            <div class="trending-list-name">晚宴精致妆容</div>
            <div class="trending-list-author">美妆师 Luna · 2.3w 热度</div>
          </div>
          <span class="trending-list-price">50 GP</span>
        </div>
        <div class="trending-list-item" onclick="openTemplateDetail(); closeTrendingModal();">
          <div class="trending-list-rank rank-2">2</div>
          <div class="trending-list-img"><img src="ui-design/assets/feed-card-2.jpg" alt="日常清新裸妆"></div>
          <div class="trending-list-info">
            <div class="trending-list-name">日常清新裸妆</div>
            <div class="trending-list-author">小妆日记 · 1.8w 热度</div>
          </div>
          <span class="trending-list-price">30 GP</span>
        </div>
        <div class="trending-list-item" onclick="openTemplateDetail(); closeTrendingModal();">
          <div class="trending-list-rank rank-3">3</div>
          <div class="trending-list-img"><img src="ui-design/assets/product-1.jpg" alt="国风古韵妆"></div>
          <div class="trending-list-info">
            <div class="trending-list-name">国风古韵妆</div>
            <div class="trending-list-author">花西子 · 1.5w 热度</div>
          </div>
          <span class="trending-list-price">80 GP</span>
        </div>
        <div class="trending-list-item" onclick="openTemplateDetail(); closeTrendingModal();">
          <div class="trending-list-rank normal">4</div>
          <div class="trending-list-img"><img src="ui-design/assets/product-2.jpg" alt="通勤大地色"></div>
          <div class="trending-list-info">
            <div class="trending-list-name">通勤大地色眼妆</div>
            <div class="trending-list-author">职场美妆 · 1.2w 热度</div>
          </div>
          <span class="trending-list-price">25 GP</span>
        </div>
        <div class="trending-list-item" onclick="openTemplateDetail(); closeTrendingModal();">
          <div class="trending-list-rank normal">5</div>
          <div class="trending-list-img"><img src="ui-design/assets/product-3.jpg" alt="蜜桃少女妆"></div>
          <div class="trending-list-info">
            <div class="trending-list-name">蜜桃少女妆</div>
            <div class="trending-list-author">夏日限定 · 9.8k 热度</div>
          </div>
          <span class="trending-list-price">35 GP</span>
        </div>
        <div class="trending-list-item" onclick="openTemplateDetail(); closeTrendingModal();">
          <div class="trending-list-rank normal">6</div>
          <div class="trending-list-img"><img src="ui-design/assets/product-4.jpg" alt="复古港风妆"></div>
          <div class="trending-list-info">
            <div class="trending-list-name">复古港风妆容</div>
            <div class="trending-list-author">复古美学 · 8.5k 热度</div>
          </div>
          <span class="trending-list-price">40 GP</span>
        </div>
        <div class="trending-list-item" onclick="openTemplateDetail(); closeTrendingModal();">
          <div class="trending-list-rank normal">7</div>
          <div class="trending-list-img"><img src="ui-design/assets/hero-banner.jpg" alt="夏日元气妆"></div>
          <div class="trending-list-info">
            <div class="trending-list-name">夏日元气果汁妆</div>
            <div class="trending-list-author">夏日限定 · 7.2k 热度</div>
          </div>
          <span class="trending-list-price">45 GP</span>
        </div>
        <div class="trending-list-item" onclick="openTemplateDetail(); closeTrendingModal();">
          <div class="trending-list-rank normal">8</div>
          <div class="trending-list-img"><img src="ui-design/assets/feature-ai.jpg" alt="日系清透妆"></div>
          <div class="trending-list-info">
            <div class="trending-list-name">日系清透裸妆</div>
            <div class="trending-list-author">樱花少女 · 6.1k 热度</div>
          </div>
          <span class="trending-list-price">30 GP</span>
        </div>
        <div class="trending-list-item" onclick="openTemplateDetail(); closeTrendingModal();">
          <div class="trending-list-rank normal">9</div>
          <div class="trending-list-img"><img src="ui-design/assets/feature-scan.jpg" alt="欧美烟熏妆"></div>
          <div class="trending-list-info">
            <div class="trending-list-name">欧美烟熏妆</div>
            <div class="trending-list-author">Queen · 5.3k 热度</div>
          </div>
          <span class="trending-list-price">55 GP</span>
        </div>
        <div class="trending-list-item" onclick="openTemplateDetail(); closeTrendingModal();">
          <div class="trending-list-rank normal">10</div>
          <div class="trending-list-img"><img src="ui-design/assets/mirror-camera.jpg" alt="韩系女团妆"></div>
          <div class="trending-list-info">
            <div class="trending-list-name">韩系女团妆</div>
            <div class="trending-list-author">K-Pop · 4.8k 热度</div>
          </div>
          <span class="trending-list-price">42 GP</span>
        </div>
      </div>
    </div>
  </div>

  <!-- ===== Recharge Modal (Bottom Sheet) ===== -->
  <div class="bs-modal-overlay" id="recharge-modal" onclick="closeRechargeModal(event)">
    <div class="bs-modal" onclick="event.stopPropagation()">
      <div class="bs-modal-handle"></div>
      <div class="bs-modal-header">
        <div class="bs-modal-title">充值焕新值</div>
      </div>
      <div class="recharge-options">
        <div class="recharge-option" onclick="selectRecharge(this, 60)">
          <div class="recharge-amount">
            <div class="recharge-gp">60 GP</div>
            <div class="recharge-bonus">无赠送</div>
          </div>
          <div class="recharge-price">¥6.9</div>
        </div>
        <div class="recharge-option recommended selected" onclick="selectRecharge(this, 360)">
          <div class="recharge-amount">
            <div class="recharge-gp">360 GP</div>
            <div class="recharge-bonus">送 60 GP</div>
          </div>
          <div class="recharge-price">¥39</div>
        </div>
        <div class="recharge-option" onclick="selectRecharge(this, 1200)">
          <div class="recharge-amount">
            <div class="recharge-gp">1200 GP</div>
            <div class="recharge-bonus">送 300 GP</div>
          </div>
          <div class="recharge-price">¥99</div>
        </div>
      </div>
      <button class="recharge-btn" onclick="doRecharge()">立即充值</button>
    </div>
  </div>

'''

if modal_insert_point != -1:
    html = html[:modal_insert_point] + modals_html + '\n' + html[modal_insert_point:]
    print("  ✓ 弹窗体系已添加")
else:
    print("  ⚠ 弹窗插入点未找到")

# ==========================================================================
# 7. 更新 JavaScript 交互逻辑
# ==========================================================================
print("\n[7/8] 更新 JavaScript 交互逻辑...")

script_start = html.find('<script>')
script_end = html.find('</script>')

new_js = '''<script>
  let currentTab = 'home';
  let gpBalance = 328;
  let onboardingStep = 0;
  let selectedSkinType = '';
  let selectedStyles = [];
  let selectedRecharge = 360;

  function updateGpDisplay() {
    document.getElementById('gp-balance').textContent = gpBalance;
    const profileGp = document.getElementById('profile-gp-num');
    if (profileGp) profileGp.textContent = gpBalance;
    const gpCenter = document.getElementById('gp-center-balance');
    if (gpCenter) gpCenter.textContent = gpBalance + ' GP';
  }

  function switchTab(tab) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const page = document.getElementById('page-' + tab);
    if (page) page.classList.add('active');

    document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
    const btn = document.querySelector('.tab-btn[data-tab="' + tab + '"]');
    if (btn) btn.classList.add('active');

    currentTab = tab;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => { toast.classList.remove('show'); }, 2000);
  }

  function claimTask(btn, amount) {
    if (btn.disabled) return;
    gpBalance += amount;
    updateGpDisplay();
    btn.disabled = true;
    btn.textContent = '已领取';
    btn.classList.remove('gp-task-btn');
    btn.classList.add('gp-task-btn', 'done');
    showToast('+' + amount + ' GP 已领取');
  }

  // ===== Mirror Mode =====
  function switchMirrorMode(mode) {
    document.querySelectorAll('.mirror-mode-btn-v2').forEach(b => b.classList.remove('active'));
    const activeBtn = document.querySelector('.mirror-mode-btn-v2[data-mode="' + mode + '"]');
    if (activeBtn) activeBtn.classList.add('active');

    const mirrorView = document.getElementById('mirror-view');
    const chatView = document.getElementById('chat-view');
    const bottomBar = document.getElementById('mirrorBottomBar');

    if (mode === 'chat') {
      if (mirrorView) mirrorView.style.display = 'none';
      if (chatView) chatView.style.display = 'flex';
      if (bottomBar) bottomBar.style.display = 'none';
    } else {
      if (mirrorView) mirrorView.style.display = 'flex';
      if (chatView) chatView.style.display = 'none';
      if (bottomBar) bottomBar.style.display = 'flex';
    }
  }

  // ===== Chat =====
  function sendChatMessage() {
    const input = document.getElementById('chatInput');
    if (!input || !input.value.trim()) {
      showToast('请输入内容');
      return;
    }
    const msg = input.value.trim();
    input.value = '';
    addChatMsg(msg, 'user');
    showToast('AI 正在思考...');
    setTimeout(() => {
      const reply = '为你推荐「蜜桃少女妆」🍑 清透底妆 + 粉调腮红 + 玻璃唇，温柔又有气色！';
      addChatMsgWithTemplate(reply);
    }, 1000);
  }

  function sendQuickMsg(msg) {
    addChatMsg(msg, 'user');
    showToast('AI 正在思考...');
    setTimeout(() => {
      const reply = '根据你的需求，为你推荐以下妆容方案：';
      addChatMsgWithTemplate(reply);
    }, 1000);
  }

  function addChatMsg(text, type) {
    const container = document.getElementById('chatContainer');
    if (!container) return;
    const msgDiv = document.createElement('div');
    msgDiv.className = 'chat-msg ' + type;
    msgDiv.innerHTML = `
      <div class="chat-avatar">${type === 'ai' ? 'AI' : '我'}</div>
      <div class="chat-bubble">${text}</div>
    `;
    container.appendChild(msgDiv);
    container.scrollTop = container.scrollHeight;
  }

  function addChatMsgWithTemplate(text) {
    const container = document.getElementById('chatContainer');
    if (!container) return;
    const msgDiv = document.createElement('div');
    msgDiv.className = 'chat-msg ai';
    msgDiv.innerHTML = `
      <div class="chat-avatar">AI</div>
      <div class="chat-bubble">
        ${text}
        <div class="chat-template-card" onclick="openTemplateDetail()">
          <div class="chat-template-img"><img src="ui-design/assets/product-3.jpg" alt="蜜桃少女妆"></div>
          <div class="chat-template-info">
            <div class="chat-template-name">蜜桃少女妆</div>
            <div class="chat-template-desc">L2 精选 · 10步教程</div>
            <div class="chat-template-price">35 GP → 立即试妆</div>
          </div>
        </div>
      </div>
    `;
    container.appendChild(msgDiv);
    container.scrollTop = container.scrollHeight;
  }

  // ===== Library =====
  function switchLibraryCat(el, cat) {
    document.querySelectorAll('.library-cat-tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    showToast('切换分类：' + el.textContent);
  }

  function switchLibrarySub(el) {
    document.querySelectorAll('.library-sub-tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
  }

  // ===== Modals =====
  function openIngredientScan() {
    document.getElementById('ingredient-scan-modal').classList.add('show');
  }
  function closeIngredientScan() {
    document.getElementById('ingredient-scan-modal').classList.remove('show');
  }

  let ingredientScanAnimating = false;
  function startIngredientScan() {
    if (ingredientScanAnimating) return;
    ingredientScanAnimating = true;
    showToast('正在识别成分...');
    setTimeout(() => {
      ingredientScanAnimating = false;
      closeIngredientScan();
      showScanResult();
      gpBalance += 30;
      updateGpDisplay();
      showToast('扫描完成 +30 GP');
    }, 2000);
  }

  function openGpCenter() {
    document.getElementById('gp-center-modal').classList.add('show');
  }
  function closeGpCenter() {
    document.getElementById('gp-center-modal').classList.remove('show');
  }

  function openTemplateDetail() {
    document.getElementById('template-detail-modal').classList.add('show');
  }
  function closeTemplateDetail() {
    document.getElementById('template-detail-modal').classList.remove('show');
  }

  function unlockTemplate() {
    if (gpBalance < 50) {
      showToast('GP 不足，快去充值吧');
      closeTemplateDetail();
      openRechargeModal();
      return;
    }
    gpBalance -= 50;
    updateGpDisplay();
    showToast('解锁成功！正在跳转试妆...');
    setTimeout(() => {
      closeTemplateDetail();
      switchTab('mirror');
    }, 1000);
  }

  function openTrendingModal() {
    document.getElementById('trending-modal').classList.add('show');
  }
  function closeTrendingModal(e) {
    if (e && e.target !== e.currentTarget) return;
    document.getElementById('trending-modal').classList.remove('show');
  }

  function openRechargeModal() {
    document.getElementById('recharge-modal').classList.add('show');
  }
  function closeRechargeModal(e) {
    if (e && e.target !== e.currentTarget) return;
    document.getElementById('recharge-modal').classList.remove('show');
  }

  function selectRecharge(el, amount) {
    selectedRecharge = amount;
    document.querySelectorAll('.recharge-option').forEach(o => o.classList.remove('selected'));
    el.classList.add('selected');
  }

  function doRecharge() {
    gpBalance += selectedRecharge;
    updateGpDisplay();
    closeRechargeModal();
    showToast('充值成功！+' + selectedRecharge + ' GP');
  }

  // ===== Scan Result Modal (existing) =====
  let scanAnimating = false;
  function startScan() {
    if (scanAnimating) return;
    scanAnimating = true;
    const camera = document.getElementById('scanCamera');
    if (camera) camera.classList.add('scanning');
    showToast('正在识别成分...');

    setTimeout(() => {
      if (camera) camera.classList.remove('scanning');
      scanAnimating = false;
      showScanResult();
    }, 1800);
  }

  function showScanResult() {
    document.getElementById('scan-modal').classList.add('show');
  }

  function closeScanModal(e) {
    if (e && e.target !== e.currentTarget) return;
    document.getElementById('scan-modal').classList.remove('show');
  }

  // ===== Onboarding =====
  function showOnboarding() {
    const ob = document.getElementById('onboarding-overlay');
    if (ob) ob.classList.add('show');
    onboardingStep = 0;
    updateOnboardingStep();
  }

  function nextOnboarding() {
    if (onboardingStep < 4) {
      onboardingStep++;
      updateOnboardingStep();
    } else {
      finishOnboarding();
    }
  }

  function prevOnboarding() {
    if (onboardingStep > 0) {
      onboardingStep--;
      updateOnboardingStep();
    }
  }

  function skipOnboarding() {
    finishOnboarding();
  }

  function updateOnboardingStep() {
    document.querySelectorAll('.onboarding-step').forEach((s, i) => {
      s.classList.toggle('active', i === onboardingStep);
    });
    document.querySelectorAll('.onboarding-dots span').forEach((d, i) => {
      d.classList.toggle('active', i === onboardingStep);
    });
  }

  function selectSkinType(type) {
    selectedSkinType = type;
    document.querySelectorAll('.skin-type-card').forEach(c => c.classList.remove('selected'));
    event.currentTarget.classList.add('selected');
    setTimeout(nextOnboarding, 300);
  }

  function toggleStyle(style) {
    const idx = selectedStyles.indexOf(style);
    if (idx > -1) {
      selectedStyles.splice(idx, 1);
      event.currentTarget.classList.remove('selected');
    } else {
      selectedStyles.push(style);
      event.currentTarget.classList.add('selected');
    }
  }

  function finishOnboarding() {
    gpBalance += 100;
    updateGpDisplay();
    const ob = document.getElementById('onboarding-overlay');
    if (ob) ob.classList.remove('show');
    showToast('欢迎加入妆伴！+100 GP');
  }

  // ===== Event Listeners =====
  document.querySelectorAll('.mall-tab').forEach(tab => {
    tab.addEventListener('click', function() {
      document.querySelectorAll('.mall-tab').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
    });
  });

  document.querySelectorAll('.hero-dots span').forEach((dot, i, dots) => {
    dot.addEventListener('click', () => {
      dots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
    });
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && e.target.id === 'chatInput') {
      sendChatMessage();
    }
    if (e.key === 'Enter' && e.target.id === 'librarySearch') {
      showToast('搜索：' + e.target.value);
    }
  });

  // Auto-show onboarding on first load
  window.addEventListener('load', function() {
    setTimeout(showOnboarding, 500);
  });
</script>'''

if script_start != -1 and script_end != -1:
    html = html[:script_start] + new_js + html[script_end + len('</script>'):]
    print("  ✓ JavaScript 已更新")
else:
    print("  ⚠ JS 插入点未找到")

# ==========================================================================
# 8. 添加 Onboarding HTML
# ==========================================================================
print("\n[8/8] 添加 Onboarding 引导流程...")

onboarding_html = '''  <!-- ===== Onboarding Overlay ===== -->
  <div class="onboarding-overlay" id="onboarding-overlay">
    <div class="onboarding-step active" data-step="0">
      <div class="onboarding-icon">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.3L12 16.8 5.8 21.2l2.4-7.3L2 9.4h7.6z"/>
        </svg>
      </div>
      <h2>欢迎来到妆伴</h2>
      <p>你的专属 AI 美妆顾问，让每一次上妆都恰到好处</p>
    </div>

    <div class="onboarding-step" data-step="1">
      <div class="onboarding-icon" style="background: linear-gradient(135deg, #FFE4C4, #FFDAB9);">
        <span style="font-size: 40px;">🧴</span>
      </div>
      <h2>你的肤质是？</h2>
      <p>选择你的肤质，获取更精准的妆容推荐</p>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; width: 100%; max-width: 300px; margin-top: 20px;">
        <div class="skin-type-card" onclick="selectSkinType('dry')" style="padding: 20px; background: var(--color-bg-card); border-radius: 12px; cursor: pointer; border: 2px solid transparent; text-align: center;">
          <div style="font-size: 32px; margin-bottom: 8px;">🌵</div>
          <div style="font-weight: 600; margin-bottom: 4px;">干性</div>
          <div style="font-size: 11px; color: var(--color-text-muted);">容易干燥起皮</div>
        </div>
        <div class="skin-type-card" onclick="selectSkinType('oily')" style="padding: 20px; background: var(--color-bg-card); border-radius: 12px; cursor: pointer; border: 2px solid transparent; text-align: center;">
          <div style="font-size: 32px; margin-bottom: 8px;">💧</div>
          <div style="font-weight: 600; margin-bottom: 4px;">油性</div>
          <div style="font-size: 11px; color: var(--color-text-muted);">T区容易出油</div>
        </div>
        <div class="skin-type-card" onclick="selectSkinType('combo')" style="padding: 20px; background: var(--color-bg-card); border-radius: 12px; cursor: pointer; border: 2px solid transparent; text-align: center;">
          <div style="font-size: 32px; margin-bottom: 8px;">⚖️</div>
          <div style="font-weight: 600; margin-bottom: 4px;">混合性</div>
          <div style="font-size: 11px; color: var(--color-text-muted);">T油两颊干</div>
        </div>
        <div class="skin-type-card" onclick="selectSkinType('sensitive')" style="padding: 20px; background: var(--color-bg-card); border-radius: 12px; cursor: pointer; border: 2px solid transparent; text-align: center;">
          <div style="font-size: 32px; margin-bottom: 8px;">🌸</div>
          <div style="font-weight: 600; margin-bottom: 4px;">敏感性</div>
          <div style="font-size: 11px; color: var(--color-text-muted);">容易泛红过敏</div>
        </div>
      </div>
    </div>

    <div class="onboarding-step" data-step="2">
      <div class="onboarding-icon" style="background: linear-gradient(135deg, #E8D5C4, #C4956A);">
        <span style="font-size: 40px;">📸</span>
      </div>
      <h2>扫描你的面部</h2>
      <p>AI 智能分析骨相特征，找到最适合你的妆容风格</p>
      <button class="onboarding-btn" onclick="startFaceScan()" style="margin-top: 20px;">
        📸 开始扫脸分析
      </button>
    </div>

    <div class="onboarding-step" data-step="3">
      <div class="onboarding-icon" style="background: linear-gradient(135deg, #FFB6C1, #FF69B4);">
        <span style="font-size: 40px;">🎨</span>
      </div>
      <h2>你喜欢什么风格？</h2>
      <p>选择你喜欢的风格，获取个性化推荐</p>
      <div style="width: 100%; max-width: 320px; margin-top: 20px; display: flex; flex-direction: column; gap: 10px;">
        <div class="style-option" onclick="toggleStyle('daily')" style="display: flex; align-items: center; padding: 14px 16px; background: var(--color-bg-card); border-radius: 12px; cursor: pointer; border: 2px solid transparent;">
          <span style="font-size: 24px; margin-right: 12px;">🌿</span>
          <div style="flex: 1;">
            <div style="font-weight: 600;">日常清新</div>
            <div style="font-size: 11px; color: var(--color-text-muted);">清透自然，适合日常通勤</div>
          </div>
          <div class="style-check" style="width: 22px; height: 22px; border-radius: 50%; border: 2px solid var(--color-border); display: flex; align-items: center; justify-content: center;">✓</div>
        </div>
        <div class="style-option" onclick="toggleStyle('dinner')" style="display: flex; align-items: center; padding: 14px 16px; background: var(--color-bg-card); border-radius: 12px; cursor: pointer; border: 2px solid transparent;">
          <span style="font-size: 24px; margin-right: 12px;">💎</span>
          <div style="flex: 1;">
            <div style="font-weight: 600;">精致晚宴</div>
            <div style="font-size: 11px; color: var(--color-text-muted);">高级感满满，适合正式场合</div>
          </div>
          <div class="style-check" style="width: 22px; height: 22px; border-radius: 50%; border: 2px solid var(--color-border); display: flex; align-items: center; justify-content: center;">✓</div>
        </div>
        <div class="style-option" onclick="toggleStyle('gufeng')" style="display: flex; align-items: center; padding: 14px 16px; background: var(--color-bg-card); border-radius: 12px; cursor: pointer; border: 2px solid transparent;">
          <span style="font-size: 24px; margin-right: 12px;">🏮</span>
          <div style="flex: 1;">
            <div style="font-weight: 600;">国风古韵</div>
            <div style="font-size: 11px; color: var(--color-text-muted);">传统美学，非遗文化创意</div>
          </div>
          <div class="style-check" style="width: 22px; height: 22px; border-radius: 50%; border: 2px solid var(--color-border); display: flex; align-items: center; justify-content: center;">✓</div>
        </div>
        <div class="style-option" onclick="toggleStyle('yinfa')" style="display: flex; align-items: center; padding: 14px 16px; background: var(--color-bg-card); border-radius: 12px; cursor: pointer; border: 2px solid transparent;">
          <span style="font-size: 24px; margin-right: 12px;">👩‍🦳</span>
          <div style="flex: 1;">
            <div style="font-weight: 600;">优雅银发</div>
            <div style="font-size: 11px; color: var(--color-text-muted);">智慧助老，优雅气质</div>
          </div>
          <div class="style-check" style="width: 22px; height: 22px; border-radius: 50%; border: 2px solid var(--color-border); display: flex; align-items: center; justify-content: center;">✓</div>
        </div>
      </div>
      <button class="onboarding-btn" onclick="nextOnboarding()" style="margin-top: 20px;">下一步</button>
    </div>

    <div class="onboarding-step" data-step="4">
      <div class="onboarding-icon" style="background: linear-gradient(135deg, #FFD700, #FFA500);">
        <span style="font-size: 40px;">🎁</span>
      </div>
      <h2>新人专享福利</h2>
      <p>完成注册，领取新人大礼包</p>
      <div style="margin-top: 20px; padding: 20px; background: var(--color-bg-card); border-radius: 16px; width: 100%; max-width: 300px;">
        <div style="text-align: center; margin-bottom: 16px;">
          <div style="font-size: 36px; font-weight: 700; color: var(--color-primary);">+100 GP</div>
          <div style="font-size: 12px; color: var(--color-text-muted);">新人专属焕新值</div>
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px; font-size: 12px; color: var(--color-text-secondary);">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: var(--color-success);">✓</span>
            5+ 免费妆容模板
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: var(--color-success);">✓</span>
            3 次成分扫描机会
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: var(--color-success);">✓</span>
            7 天会员体验
          </div>
        </div>
      </div>
      <button class="onboarding-btn" onclick="finishOnboarding()" style="margin-top: 20px;">
        开启妆伴之旅
      </button>
    </div>

    <button class="onboarding-skip" onclick="skipOnboarding()" id="onboarding-skip-btn">跳过</button>

    <div class="onboarding-dots">
      <span class="active"></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
'''

# Insert onboarding before tab-bar or after app-shell start
onboarding_insert = html.find('  <!-- ===== Tab Bar ===== -->')
if onboarding_insert != -1:
    html = html[:onboarding_insert] + onboarding_html + '\n' + html[onboarding_insert:]
    print("  ✓ Onboarding 已添加")
else:
    print("  ⚠ Onboarding 插入点未找到")

# ==========================================================================
# Save
# ==========================================================================
with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
    f.write(html)

print("\n" + "=" * 60)
print(f"✓ 构建完成！文件已保存到: {OUTPUT_FILE}")
print("=" * 60)
print(f"文件大小: {len(html):,} 字节")
