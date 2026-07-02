"""
Build MakeupPal V3.2.0 
Complete rebuild referencing B-team PRD interaction logic
"""
import os

# ============================================================
# NEW CSS ADDITIONS
# ============================================================
new_css = """
/* ============ V3.2.0 New Styles ============ */

/* Onboarding */
.onboarding-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: linear-gradient(180deg, #FFF8F0 0%, #FFE8D6 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 24px;
}
.onboarding-step {
  display: none;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 320px;
  animation: fadeInUp 0.4s ease;
}
.onboarding-step.active { display: flex; }
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.onboarding-icon {
  width: 120px; height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #C4956A, #E8C9A8);
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 32px;
  position: relative;
  color: #fff;
  font-size: 48px;
}
.onboarding-icon::before {
  content: '';
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  border: 2px dashed rgba(196, 149, 106, 0.4);
  animation: spin 20s linear infinite;
}
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.onboarding-step h2 {
  font-size: 24px;
  font-weight: 700;
  color: #2D2A26;
  margin-bottom: 12px;
}
.onboarding-step p {
  font-size: 14px;
  color: #6B635B;
  line-height: 1.6;
  margin-bottom: 32px;
}
.skin-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  width: 100%;
  margin-bottom: 32px;
}
.skin-card {
  padding: 20px 12px;
  background: #fff;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 2px solid transparent;
  text-align: center;
}
.skin-card.selected {
  border-color: #C4956A;
  background: rgba(196, 149, 106, 0.08);
}
.skin-card .emoji { font-size: 32px; margin-bottom: 8px; }
.skin-card h4 {
  font-size: 15px;
  font-weight: 700;
  color: #2D2A26;
  margin-bottom: 4px;
}
.skin-card p {
  font-size: 11px;
  color: #9B938B;
  margin: 0;
}
.style-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 32px;
}
.style-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  background: #fff;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 2px solid transparent;
}
.style-item.selected {
  border-color: #C4956A;
  background: rgba(196, 149, 106, 0.08);
}
.style-item .emoji { font-size: 24px; }
.style-item-info { flex: 1; text-align: left; }
.style-item-info h4 {
  font-size: 15px;
  font-weight: 700;
  color: #2D2A26;
  margin-bottom: 2px;
}
.style-item-info p {
  font-size: 11px;
  color: #9B938B;
  margin: 0;
}
.style-check {
  width: 22px; height: 22px;
  border-radius: 50%;
  border: 2px solid #E8D8C8;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
}
.style-item.selected .style-check {
  background: #C4956A;
  border-color: #C4956A;
}
.onboarding-btn {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #C4956A, #E8C9A8);
  color: #fff;
  border: none;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(196, 149, 106, 0.3);
}
.onboarding-btn:active { transform: scale(0.98); }
.onboarding-btn:disabled { opacity: 0.5; cursor: not-allowed; }
.onboarding-skip {
  margin-top: 16px;
  font-size: 13px;
  color: #9B938B;
  cursor: pointer;
}
.onboarding-dots {
  display: flex;
  gap: 8px;
  margin-top: 24px;
}
.onboarding-dots span {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: #E8D8C8;
  transition: all 0.2s ease;
}
.onboarding-dots span.active {
  width: 24px;
  border-radius: 4px;
  background: #C4956A;
}
.reward-card {
  background: linear-gradient(135deg, #FFF 0%, #FFF8F0 100%);
  border-radius: 16px;
  padding: 24px;
  width: 100%;
  margin-bottom: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  border: 1px solid #F5EDE4;
}
.reward-gp {
  font-size: 48px;
  font-weight: 700;
  color: #C4956A;
  text-align: center;
  margin-bottom: 8px;
}
.reward-gp span { font-size: 20px; }
.reward-title {
  text-align: center;
  font-size: 17px;
  font-weight: 700;
  color: #2D2A26;
  margin-bottom: 16px;
}
.reward-benefits {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.reward-benefit {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #6B635B;
}
.reward-benefit .check { color: #4CAF50; }

/* Top User Bar */
.top-user-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: calc(44px + 12px) 16px 12px;
  background: transparent;
}
.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
}
.user-avatar-ring {
  width: 40px; height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #C4956A, #E8C9A8);
  display: flex; align-items: center; justify-content: center;
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  flex-shrink: 0;
}
.user-detail { display: flex; flex-direction: column; }
.user-name-row {
  display: flex;
  align-items: center;
  gap: 6px;
}
.user-name {
  font-size: 15px;
  font-weight: 700;
  color: #2D2A26;
}
.level-badge {
  padding: 2px 8px;
  background: linear-gradient(135deg, #FFD700, #FFA500);
  color: #fff;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 700;
}
.gp-badge {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 3px 10px;
  background: linear-gradient(135deg, #C4956A, #E8C9A8);
  color: #fff;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 2px;
}
.msg-btn {
  width: 36px; height: 36px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6B635B;
  cursor: pointer;
  position: relative;
  box-shadow: 0 1px 3px rgba(0,0,0,0.06);
}
.msg-dot {
  position: absolute;
  top: 8px; right: 10px;
  width: 8px; height: 8px;
  background: #E74C3C;
  border-radius: 50%;
  border: 2px solid #fff;
}

/* Face Profile Card */
.face-profile-card {
  margin: 0 16px 16px;
  padding: 16px;
  background: #fff;
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}
.face-profile-card:active { transform: scale(0.99); }
.face-avatar {
  width: 56px; height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, #F5EDE4, #E8D8C8);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: #C4956A;
}
.face-info { flex: 1; min-width: 0; }
.face-info h4 {
  font-size: 15px;
  font-weight: 700;
  color: #2D2A26;
  margin-bottom: 4px;
}
.face-desc {
  font-size: 13px;
  color: #6B635B;
  margin-bottom: 6px;
}
.face-tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}
.face-tag {
  padding: 2px 8px;
  background: #FFF1E6;
  color: #9B938B;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 500;
}
.face-tag.score {
  background: rgba(196, 149, 106, 0.12);
  color: #8B6F47;
}
.face-tag.warn {
  background: rgba(255, 152, 0, 0.12);
  color: #FF9800;
}

/* King Kong Grid */
.kingkong-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  padding: 0 16px 16px;
}
.kingkong-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
}
.kingkong-item:active { transform: scale(0.95); }
.kingkong-icon {
  width: 48px; height: 48px;
  border-radius: 12px;
  background: linear-gradient(135deg, #FFF8F0, #FFE8D6);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 22px;
}
.kingkong-icon.new::after {
  content: 'NEW';
  position: absolute;
  top: -4px; right: -4px;
  padding: 1px 5px;
  background: #E74C3C;
  color: #fff;
  border-radius: 999px;
  font-size: 8px;
  font-weight: 700;
}
.kingkong-label {
  font-size: 11px;
  color: #6B635B;
  font-weight: 500;
}

/* Trending Section */
.trending-section {
  padding: 0 16px 16px;
}
.trending-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}
.trending-title {
  font-size: 17px;
  font-weight: 700;
  color: #2D2A26;
}
.trending-more {
  font-size: 13px;
  color: #9B938B;
  cursor: pointer;
}
.trending-scroll {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 4px;
}
.trending-scroll::-webkit-scrollbar { display: none; }
.trending-item {
  flex-shrink: 0;
  width: 140px;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;
}
.trending-item:active { transform: scale(0.97); }
.trending-rank {
  position: absolute;
  top: 8px; left: 8px;
  z-index: 2;
  width: 22px; height: 22px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
}
.trending-rank.top1 { background: linear-gradient(135deg, #FFD700, #FFA500); }
.trending-rank.top2 { background: linear-gradient(135deg, #C0C0C0, #A0A0A0); }
.trending-rank.top3 { background: linear-gradient(135deg, #CD7F32, #B87333); }
.trending-rank.normal { background: rgba(26, 24, 22, 0.6); }
.trending-cover {
  width: 140px;
  aspect-ratio: 3/4;
  border-radius: 12px;
  background: #FFF1E6;
  overflow: hidden;
  margin-bottom: 8px;
}
.trending-cover img { width: 100%; height: 100%; object-fit: cover; }
.trending-name {
  font-size: 12px;
  font-weight: 600;
  color: #2D2A26;
  margin-bottom: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.trending-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.trending-creator {
  font-size: 10px;
  color: #9B938B;
}
.trending-price {
  font-size: 10px;
  color: #C4956A;
  font-weight: 700;
}

/* Center Tab */
.tab-btn.center-tab {
  position: relative;
  top: -12px;
}
.tab-btn.center-tab svg {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, #C4956A, #E8C9A8);
  color: #fff;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 0 4px 16px rgba(196, 149, 106, 0.4);
  position: relative;
  z-index: 2;
}
.tab-btn.center-tab::before {
  content: '';
  position: absolute;
  top: -4px;
  left: 50%;
  transform: translateX(-50%);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 2px solid rgba(196, 149, 106, 0.3);
  animation: pulse-glow 2s ease-in-out infinite;
}
@keyframes pulse-glow {
  0%, 100% { opacity: 0.5; transform: translateX(-50%) scale(1); }
  50% { opacity: 0.8; transform: translateX(-50%) scale(1.05); }
}
.tab-btn.center-tab span {
  color: #C4956A;
  font-weight: 700;
}

/* Full Screen Modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: #FFF8F0;
  z-index: 1000;
  display: none;
  flex-direction: column;
  animation: slideUp 0.3s ease;
}
.modal-overlay.show { display: flex; }
.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: calc(44px + 12px) 16px 12px;
  background: #FFF8F0;
  border-bottom: 1px solid #F5EDE4;
  position: sticky;
  top: 0;
  z-index: 10;
}
.modal-title {
  font-size: 17px;
  font-weight: 700;
  color: #2D2A26;
}
.modal-close {
  width: 32px; height: 32px;
  border-radius: 50%;
  background: #FFF1E6;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #6B635B;
}
.modal-content {
  flex: 1;
  overflow-y: auto;
  padding-bottom: 120px;
}
.modal-footer {
  position: fixed;
  bottom: 0;
  left: 0; right: 0;
  padding: 16px;
  padding-bottom: calc(16px + 34px);
  background: #FFF8F0;
  border-top: 1px solid #F5EDE4;
  max-width: 430px;
  margin: 0 auto;
}

/* Scan Camera */
.scan-camera-area {
  margin: 16px;
  aspect-ratio: 4/3;
  background: #FFF1E6;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.scan-frame {
  width: 70%;
  aspect-ratio: 3/4;
  border: 2px solid #C4956A;
  border-radius: 12px;
  position: relative;
}
.scan-frame::before,
.scan-frame::after {
  content: '';
  position: absolute;
  width: 20px; height: 20px;
  border: 3px solid #C4956A;
}
.scan-frame::before { top: -2px; left: -2px; border-right: none; border-bottom: none; border-radius: 4px 0 0 0; }
.scan-frame::after { bottom: -2px; right: -2px; border-left: none; border-top: none; border-radius: 0 0 4px 0; }
.scan-line {
  position: absolute;
  left: 10%;
  right: 10%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #C4956A, transparent);
  animation: scan-move 2s ease-in-out infinite;
}
@keyframes scan-move {
  0%, 100% { top: 10%; }
  50% { top: 90%; }
}
.scan-tabs {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 16px;
}
.scan-tab {
  padding: 6px 16px;
  font-size: 13px;
  color: #9B938B;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease;
}
.scan-tab.active {
  color: #C4956A;
  border-bottom-color: #C4956A;
  font-weight: 600;
}
.scan-main-btn {
  display: block;
  width: calc(100% - 32px);
  margin: 0 16px 16px;
  padding: 14px;
  background: linear-gradient(135deg, #C4956A, #E8C9A8);
  color: #fff;
  border: none;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(196, 149, 106, 0.3);
}
.scan-main-btn:active { transform: scale(0.98); }
.scan-note {
  text-align: center;
  font-size: 11px;
  color: #9B938B;
  padding: 0 16px;
}

/* Scan Result */
.scan-result-risk {
  margin: 16px;
  padding: 16px;
  border-radius: 16px;
  text-align: center;
  color: #fff;
}
.scan-result-risk.safe { background: linear-gradient(135deg, #4CAF50, #66BB6A); }
.scan-result-risk.warning { background: linear-gradient(135deg, #FF9800, #FFB74D); }
.scan-result-risk.danger { background: linear-gradient(135deg, #E74C3C, #EF5350); }
.risk-level {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 4px;
}
.risk-desc { font-size: 13px; opacity: 0.9; }

.sensitive-score {
  margin: 16px;
  padding: 16px;
  background: #fff;
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}
.score-ring {
  width: 80px; height: 80px;
  border-radius: 50%;
  background: conic-gradient(#4CAF50 0deg, #F5EDE4 0deg);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-shrink: 0;
}
.score-ring::before {
  content: '';
  position: absolute;
  inset: 6px;
  border-radius: 50%;
  background: #fff;
}
.score-value {
  position: relative;
  z-index: 2;
  font-size: 20px;
  font-weight: 700;
  color: #2D2A26;
}
.score-info { flex: 1; }
.score-info h4 {
  font-size: 15px;
  font-weight: 700;
  color: #2D2A26;
  margin-bottom: 4px;
}
.score-info p {
  font-size: 13px;
  color: #6B635B;
  margin: 0;
}

.ingredient-section {
  margin: 0 16px 16px;
}
.ingredient-section h4 {
  font-size: 15px;
  font-weight: 700;
  color: #2D2A26;
  margin-bottom: 8px;
}
.ingredient-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.ingredient-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  background: #fff;
  border-radius: 12px;
}
.ingredient-dot {
  width: 10px; height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}
.ingredient-dot.safe { background: #4CAF50; }
.ingredient-dot.warning { background: #FF9800; }
.ingredient-dot.danger { background: #E74C3C; }
.ingredient-name {
  flex: 1;
  font-size: 13px;
  color: #2D2A26;
  font-weight: 500;
}
.ingredient-desc {
  font-size: 11px;
  color: #9B938B;
}

.compliance-tags {
  display: flex;
  gap: 8px;
  margin: 0 16px 16px;
}
.compliance-tag {
  padding: 4px 10px;
  background: #fff;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 600;
  color: #6B635B;
}

/* GP Center */
.gp-header {
  background: linear-gradient(135deg, #C4956A, #E8C9A8);
  padding: calc(44px + 20px) 16px 40px;
  color: #fff;
  position: relative;
  overflow: hidden;
}
.gp-header::before {
  content: '';
  position: absolute;
  top: -50%; right: -20%;
  width: 200px; height: 200px;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
  border-radius: 50%;
}
.gp-balance {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 4px;
}
.gp-balance span { font-size: 18px; font-weight: 500; }
.gp-level-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}
.gp-level-name {
  font-size: 15px;
  font-weight: 600;
}
.gp-progress {
  flex: 1;
  height: 6px;
  background: rgba(255,255,255,0.3);
  border-radius: 3px;
  overflow: hidden;
}
.gp-progress-fill {
  height: 100%;
  width: 65%;
  background: #fff;
  border-radius: 3px;
}
.gp-next {
  font-size: 11px;
  opacity: 0.8;
}
.gp-tabs {
  display: flex;
  margin: 0 16px;
  gap: 16px;
  border-bottom: 1px solid #F5EDE4;
  margin-top: -20px;
  position: relative;
  z-index: 2;
  background: #FFF8F0;
}
.gp-tab {
  padding: 12px 0;
  font-size: 13px;
  color: #9B938B;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
  transition: all 0.2s ease;
  font-weight: 500;
}
.gp-tab.active {
  color: #C4956A;
  border-bottom-color: #C4956A;
  font-weight: 700;
}
.task-section {
  padding: 16px;
}
.task-section-title {
  font-size: 15px;
  font-weight: 700;
  color: #2D2A26;
  margin-bottom: 12px;
}
.task-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: #fff;
  border-radius: 12px;
  margin-bottom: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
}
.task-icon {
  width: 40px; height: 40px;
  border-radius: 8px;
  background: linear-gradient(135deg, #FFF8F0, #FFE8D6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
}
.task-info { flex: 1; min-width: 0; }
.task-name {
  font-size: 13px;
  font-weight: 600;
  color: #2D2A26;
  margin-bottom: 2px;
}
.task-progress {
  font-size: 11px;
  color: #9B938B;
}
.task-reward {
  font-size: 12px;
  color: #C4956A;
  font-weight: 700;
  margin-right: 8px;
}
.task-btn {
  padding: 5px 12px;
  background: linear-gradient(135deg, #C4956A, #E8C9A8);
  color: #fff;
  border: none;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  flex-shrink: 0;
}
.task-btn.claimed {
  background: #F5EDE4;
  color: #9B938B;
}
.task-btn.go {
  background: #FFF1E6;
  color: #C4956A;
}

/* Template Detail */
.template-hero {
  width: 100%;
  aspect-ratio: 1;
  background: linear-gradient(135deg, #FFE8D6, #FFF8F0);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
}
.template-hero img { width: 100%; height: 100%; object-fit: cover; }
.template-level-badge {
  position: absolute;
  top: calc(44px + 16px);
  left: 16px;
  padding: 4px 12px;
  background: rgba(196, 149, 106, 0.9);
  color: #fff;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
}
.template-actions {
  position: absolute;
  top: calc(44px + 12px);
  right: 16px;
  display: flex;
  gap: 8px;
}
.template-action-btn {
  width: 36px; height: 36px;
  border-radius: 50%;
  background: rgba(255,255,255,0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #6B635B;
}
.template-detail-body {
  padding: 16px;
}
.template-title {
  font-size: 22px;
  font-weight: 700;
  color: #2D2A26;
  margin-bottom: 12px;
}
.template-creator {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
}
.creator-avatar {
  width: 36px; height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #C4956A, #E8C9A8);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
}
.creator-info { flex: 1; }
.creator-name {
  font-size: 13px;
  font-weight: 600;
  color: #2D2A26;
}
.creator-verified {
  font-size: 10px;
  color: #C4956A;
  font-weight: 500;
}
.follow-btn {
  padding: 5px 14px;
  border: 1.5px solid #C4956A;
  color: #C4956A;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  background: transparent;
}
.template-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #F5EDE4;
}
.stat-item { text-align: center; }
.stat-value {
  font-size: 17px;
  font-weight: 700;
  color: #2D2A26;
}
.stat-label {
  font-size: 10px;
  color: #9B938B;
  margin-top: 2px;
}
.template-desc {
  font-size: 13px;
  color: #6B635B;
  line-height: 1.6;
  margin-bottom: 16px;
}
.tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
}
.tag-row-title {
  font-size: 13px;
  font-weight: 600;
  color: #2D2A26;
  margin-bottom: 8px;
  width: 100%;
}
.buy-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.buy-price {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.buy-price-label {
  font-size: 11px;
  color: #9B938B;
}
.buy-price-value {
  font-size: 22px;
  font-weight: 700;
  color: #C4956A;
}
.buy-btn {
  padding: 14px 32px;
  background: linear-gradient(135deg, #C4956A, #E8C9A8);
  color: #fff;
  border: none;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(196, 149, 106, 0.3);
}
.buy-btn:active { transform: scale(0.98); }

/* Bottom Popup */
.bottom-popup {
  position: fixed;
  inset: 0;
  background: rgba(26, 24, 22, 0.5);
  z-index: 1000;
  display: none;
  align-items: flex-end;
  justify-content: center;
  backdrop-filter: blur(4px);
}
.bottom-popup.show { display: flex; }
.bottom-popup-content {
  width: 100%;
  max-width: 430px;
  background: #FFF8F0;
  border-radius: 24px 24px 0 0;
  max-height: 70vh;
  overflow-y: auto;
  animation: slideUp 0.3s ease;
  padding-bottom: 34px;
}
.bottom-popup-handle {
  width: 40px;
  height: 4px;
  background: #E8D8C8;
  border-radius: 2px;
  margin: 10px auto;
}
.bottom-popup-title {
  font-size: 17px;
  font-weight: 700;
  color: #2D2A26;
  padding: 0 16px 12px;
  text-align: center;
}
.trending-full-list {
  padding: 0 16px;
}
.trending-full-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid #F5EDE4;
  cursor: pointer;
}
.trending-full-item:last-child { border-bottom: none; }
.trending-full-rank {
  width: 28px;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
}
.trending-full-rank.top1 { color: #FFD700; }
.trending-full-rank.top2 { color: #C0C0C0; }
.trending-full-rank.top3 { color: #CD7F32; }
.trending-full-rank.normal { color: #9B938B; }
.trending-full-cover {
  width: 50px; height: 60px;
  border-radius: 8px;
  background: #FFF1E6;
  overflow: hidden;
  flex-shrink: 0;
}
.trending-full-cover img { width: 100%; height: 100%; object-fit: cover; }
.trending-full-info { flex: 1; min-width: 0; }
.trending-full-name {
  font-size: 13px;
  font-weight: 600;
  color: #2D2A26;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.trending-full-meta {
  font-size: 11px;
  color: #9B938B;
}
.trending-full-price {
  font-size: 13px;
  color: #C4956A;
  font-weight: 700;
}

/* Recharge */
.recharge-options {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.recharge-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background: #fff;
  border-radius: 12px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.2s ease;
  position: relative;
}
.recharge-option.selected {
  border-color: #C4956A;
  background: rgba(196, 149, 106, 0.05);
}
.recharge-option.recommended {
  border-color: #C4956A;
}
.recharge-option.recommended::before {
  content: '推荐';
  position: absolute;
  top: 0; right: 12px;
  padding: 2px 8px;
  background: linear-gradient(135deg, #C4956A, #E8C9A8);
  color: #fff;
  border-radius: 0 0 6px 6px;
  font-size: 10px;
  font-weight: 700;
}
.recharge-gp {
  font-size: 17px;
  font-weight: 700;
  color: #2D2A26;
}
.recharge-gp span { font-size: 11px; color: #9B938B; font-weight: normal; }
.recharge-price {
  font-size: 15px;
  font-weight: 700;
  color: #C4956A;
}
.recharge-btn {
  margin: 0 16px 40px;
  width: calc(100% - 32px);
  padding: 14px;
  background: linear-gradient(135deg, #C4956A, #E8C9A8);
  color: #fff;
  border: none;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(196, 149, 106, 0.3);
}
.recharge-btn:active { transform: scale(0.98); }

/* Library Page */
.lib-top-bar {
  position: sticky;
  top: 0;
  z-index: 50;
  background: #FFF8F0;
}
.lib-search-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: calc(44px + 10px) 16px 8px;
}
.lib-publish-btn {
  padding: 8px 16px;
  background: linear-gradient(135deg, #C4956A, #E8C9A8);
  color: #fff;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 4px;
}
.lib-cat-primary {
  display: flex;
  gap: 0;
  padding: 0 16px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border-bottom: 1px solid #F5EDE4;
}
.lib-cat-primary::-webkit-scrollbar { display: none; }
.lib-cat-item {
  padding: 12px 14px;
  font-size: 13px;
  color: #9B938B;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
  white-space: nowrap;
  transition: all 0.2s ease;
  font-weight: 500;
}
.lib-cat-item.active {
  color: #C4956A;
  border-bottom-color: #C4956A;
  font-weight: 700;
}
.lib-cat-secondary {
  display: flex;
  gap: 8px;
  padding: 8px 16px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  background: #FFF1E6;
}
.lib-cat-secondary::-webkit-scrollbar { display: none; }
.lib-sub-tag {
  padding: 5px 14px;
  background: #fff;
  border-radius: 999px;
  font-size: 11px;
  color: #6B635B;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;
}
.lib-sub-tag.active {
  background: #C4956A;
  color: #fff;
}
.lib-waterfall {
  padding: 12px 16px;
  columns: 2;
  column-gap: 12px;
}
.lib-card {
  break-inside: avoid;
  margin-bottom: 12px;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}
.lib-card:active { transform: scale(0.98); }
.lib-card-img {
  width: 100%;
  background: #FFF1E6;
  position: relative;
}
.lib-card-img img { width: 100%; display: block; }
.lib-card-badge {
  position: absolute;
  top: 8px; left: 8px;
  padding: 2px 8px;
  background: rgba(196, 149, 106, 0.9);
  color: #fff;
  border-radius: 999px;
  font-size: 9px;
  font-weight: 700;
}
.lib-card-badge.free { background: rgba(76, 175, 80, 0.9); }
.lib-card-info { padding: 10px; }
.lib-card-title {
  font-size: 12px;
  font-weight: 600;
  color: #2D2A26;
  margin-bottom: 6px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.4;
}
.lib-card-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.lib-card-author {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 10px;
  color: #9B938B;
}
.lib-card-likes {
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 10px;
  color: #9B938B;
}

/* Solution Cards (for scan/search) */
.scan-result-solution { padding: 16px; }
.solution-problem-title {
  font-size: 22px;
  font-weight: 700;
  color: #2D2A26;
  margin-bottom: 4px;
}
.solution-problem-sub {
  font-size: 13px;
  color: #6B635B;
  margin-bottom: 16px;
}
.solution-card {
  background: #fff;
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  position: relative;
}
.solution-card.best {
  border: 2px solid #C4956A;
}
.solution-card.risk {
  border: 2px solid #E74C3C;
}
.solution-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}
.solution-card-title {
  font-size: 15px;
  font-weight: 700;
  color: #2D2A26;
  display: flex;
  align-items: center;
  gap: 8px;
}
.best-badge {
  padding: 3px 10px;
  background: linear-gradient(135deg, #C4956A, #E8C9A8);
  color: #fff;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 700;
}
.risk-badge {
  padding: 3px 10px;
  background: #E74C3C;
  color: #fff;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 700;
}
.solution-metrics {
  display: flex;
  gap: 16px;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid #F5EDE4;
}
.solution-metric {
  text-align: center;
}
.solution-metric-value {
  font-size: 15px;
  font-weight: 700;
  color: #2D2A26;
}
.solution-metric-value.high { color: #4CAF50; }
.solution-metric-value.risk { color: #E74C3C; }
.solution-metric-label {
  font-size: 10px;
  color: #9B938B;
}
.solution-desc {
  font-size: 13px;
  color: #6B635B;
  line-height: 1.5;
  margin-bottom: 12px;
}
.solution-tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 12px;
}
.solution-tag {
  padding: 3px 10px;
  background: #FFF1E6;
  color: #6B635B;
  border-radius: 999px;
  font-size: 10px;
}
.solution-btn {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}
.solution-detail-btn {
  padding: 6px 16px;
  background: #FFF1E6;
  color: #6B635B;
  border: none;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
}
.solution-detail-btn.primary {
  background: linear-gradient(135deg, #C4956A, #E8C9A8);
  color: #fff;
}
.solution-detail-btn.danger {
  background: #E74C3C;
  color: #fff;
}

/* Mirror Bottom Actions */
.mirror-bottom-actions {
  position: absolute;
  bottom: 20px;
  left: 0; right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  z-index: 5;
}
.mirror-action-btn {
  width: 44px; height: 44px;
  border-radius: 50%;
  background: rgba(255, 248, 240, 0.2);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFF8F0;
  cursor: pointer;
  transition: all 0.2s ease;
}
.mirror-action-btn:active { transform: scale(0.92); }
.mirror-shutter-btn {
  width: 64px; height: 64px;
  border-radius: 50%;
  background: #fff;
  border: 4px solid rgba(255,255,255,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
  position: relative;
}
.mirror-shutter-btn::before {
  content: '';
  position: absolute;
  inset: 6px;
  border-radius: 50%;
  background: linear-gradient(135deg, #C4956A, #E8C9A8);
}
.mirror-shutter-btn:active { transform: scale(0.95); }
"""

# ============================================================
# NEW HTML - ONBOARDING
# ============================================================
onboarding_html = """
  <!-- ===== Onboarding Overlay ===== -->
  <div class="onboarding-overlay" id="onboarding">
    <!-- Step 1: Welcome -->
    <div class="onboarding-step active" id="onboard-step-1">
      <div class="onboarding-icon">💄</div>
      <h2>欢迎来到妆伴</h2>
      <p>你的专属 AI 美妆顾问，让每一次上妆都恰到好处</p>
      <button class="onboarding-btn" onclick="nextOnboarding()">下一步</button>
      <span class="onboarding-skip" onclick="completeOnboarding()">跳过</span>
      <div class="onboarding-dots">
        <span class="active"></span><span></span><span></span><span></span><span></span>
      </div>
    </div>
    <!-- Step 2: Skin Type -->
    <div class="onboarding-step" id="onboard-step-2">
      <h2 style="margin-bottom:32px;">你的肤质是？</h2>
      <div class="skin-grid">
        <div class="skin-card" onclick="selectSkin(this,'dry')">
          <div class="emoji">🌵</div>
          <h4>干性肌肤</h4>
          <p>容易干燥起皮</p>
        </div>
        <div class="skin-card" onclick="selectSkin(this,'oily')">
          <div class="emoji">💧</div>
          <h4>油性肌肤</h4>
          <p>T区容易出油</p>
        </div>
        <div class="skin-card" onclick="selectSkin(this,'combo')">
          <div class="emoji">⚖️</div>
          <h4>混合肌肤</h4>
          <p>T油U干</p>
        </div>
        <div class="skin-card" onclick="selectSkin(this,'sensitive')">
          <div class="emoji">🌸</div>
          <h4>敏感肌肤</h4>
          <p>容易泛红过敏</p>
        </div>
      </div>
      <button class="onboarding-btn" id="skin-next-btn" disabled onclick="nextOnboarding()">下一步</button>
      <span class="onboarding-skip" onclick="completeOnboarding()">跳过</span>
      <div class="onboarding-dots">
        <span></span><span class="active"></span><span></span><span></span><span></span>
      </div>
    </div>
    <!-- Step 3: Face Scan -->
    <div class="onboarding-step" id="onboard-step-3">
      <div class="onboarding-icon">📸</div>
      <h2>扫描你的面部</h2>
      <p>AI 智能分析骨相特征，找到最适合你的妆容风格</p>
      <button class="onboarding-btn" onclick="simulateFaceScan()">开始扫脸分析</button>
      <span class="onboarding-skip" onclick="completeOnboarding()">跳过</span>
      <div class="onboarding-dots">
        <span></span><span></span><span class="active"></span><span></span><span></span>
      </div>
    </div>
    <!-- Step 4: Style Preference -->
    <div class="onboarding-step" id="onboard-step-4">
      <h2 style="margin-bottom:32px;">你喜欢什么风格？</h2>
      <div class="style-list">
        <div class="style-item" onclick="toggleStyle(this)">
          <span class="emoji">🌸</span>
          <div class="style-item-info">
            <h4>日常清新</h4>
            <p>自然裸妆，适合日常通勤</p>
          </div>
          <div class="style-check">✓</div>
        </div>
        <div class="style-item" onclick="toggleStyle(this)">
          <span class="emoji">💎</span>
          <div class="style-item-info">
            <h4>精致晚宴</h4>
            <p>浓妆惊艳，适合重要场合</p>
          </div>
          <div class="style-check">✓</div>
        </div>
        <div class="style-item" onclick="toggleStyle(this)">
          <span class="emoji">🏮</span>
          <div class="style-item-info">
            <h4>国风古韵</h4>
            <p>东方美学，古典韵味</p>
          </div>
          <div class="style-check">✓</div>
        </div>
        <div class="style-item" onclick="toggleStyle(this)">
          <span class="emoji">👑</span>
          <div class="style-item-info">
            <h4>优雅银发</h4>
            <p>成熟优雅，适合妈妈辈</p>
          </div>
          <div class="style-check">✓</div>
        </div>
      </div>
      <button class="onboarding-btn" onclick="nextOnboarding()">下一步</button>
      <span class="onboarding-skip" onclick="completeOnboarding()">跳过</span>
      <div class="onboarding-dots">
        <span></span><span></span><span></span><span class="active"></span><span></span>
      </div>
    </div>
    <!-- Step 5: Reward -->
    <div class="onboarding-step" id="onboard-step-5">
      <div class="reward-card">
        <div class="reward-gp">+100 <span>GP</span></div>
        <div class="reward-title">新人专享福利</div>
        <div class="reward-benefits">
          <div class="reward-benefit"><span class="check">✓</span> 5+ 免费妆容模板</div>
          <div class="reward-benefit"><span class="check">✓</span> 3 次成分扫描</div>
          <div class="reward-benefit"><span class="check">✓</span> 7 天会员体验</div>
        </div>
      </div>
      <button class="onboarding-btn" onclick="completeOnboarding()">开启妆伴之旅</button>
      <div class="onboarding-dots">
        <span></span><span></span><span></span><span></span><span class="active"></span>
      </div>
    </div>
  </div>
"""

# ============================================================
# NEW HTML - HOME PAGE
# ============================================================
home_html = """
  <!-- ===== Home Page ===== -->
  <div class="page active" id="page-home">
    <div class="top-user-bar">
      <div class="user-info">
        <div class="user-avatar-ring">美</div>
        <div class="user-detail">
          <div class="user-name-row">
            <span class="user-name">小美</span>
            <span class="level-badge">金妆 Lv.3</span>
          </div>
          <div class="gp-badge" onclick="openGpCenter()">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L14.09 8.26L20.18 8.64L15.54 12.74L17.12 19.02L12 15.77L6.88 19.02L8.46 12.74L3.82 8.64L9.91 8.26L12 2Z"/></svg>
            <span id="gp-badge-home">328</span>
          </div>
        </div>
      </div>
      <div class="msg-btn" onclick="showToast('消息中心')">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
          <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/>
          <path d="M13.73 21a2 2 0 01-3.46 0"/>
        </svg>
        <span class="msg-dot"></span>
      </div>
    </div>

    <div class="face-profile-card" onclick="showToast('面部档案详情')">
      <div class="face-avatar">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      </div>
      <div class="face-info">
        <h4>我的面部档案</h4>
        <div class="face-desc">鹅蛋脸 · 混合性肤质 · 暖色调</div>
        <div class="face-tags">
          <span class="face-tag score">骨相 86</span>
          <span class="face-tag warn">T区油</span>
          <span class="face-tag warn">敏感肌</span>
        </div>
      </div>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#999" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <polyline points="9 18 15 12 9 6"/>
      </svg>
    </div>

    <div class="kingkong-grid">
      <div class="kingkong-item" onclick="switchTab('mirror')">
        <div class="kingkong-icon">🪞</div>
        <span class="kingkong-label">镜面模式</span>
      </div>
      <div class="kingkong-item" onclick="switchTab('library')">
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

    <div class="hero-banner" onclick="switchTab('mirror')" style="margin: 0 16px 16px;">
      <img src="ui-design/assets/hero-banner.jpg" alt="AI焕新妆造">
      <div class="hero-overlay">
        <h2>AI 焕新妆造</h2>
        <p>发现最适合你的专属妆容</p>
      </div>
      <div class="hero-dots">
        <span class="active"></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div class="trending-section">
      <div class="trending-header">
        <span class="trending-title">🔥 本周热度榜</span>
        <span class="trending-more" onclick="openTrendingModal()">更多 →</span>
      </div>
      <div class="trending-scroll">
        <div class="trending-item" onclick="openTemplateDetail()">
          <div class="trending-rank top1">1</div>
          <div class="trending-cover"><img src="ui-design/assets/feed-card-1.jpg" alt="清透氧气妆"></div>
          <div class="trending-name">清透氧气裸妆</div>
          <div class="trending-meta">
            <span class="trending-creator">美妆师Lily</span>
            <span class="trending-price">50 GP</span>
          </div>
        </div>
        <div class="trending-item" onclick="openTemplateDetail()">
          <div class="trending-rank top2">2</div>
          <div class="trending-cover"><img src="ui-design/assets/feed-card-2.jpg" alt="复古港风妆"></div>
          <div class="trending-name">复古港风妆容</div>
          <div class="trending-meta">
            <span class="trending-creator">复古美学</span>
            <span class="trending-price">30 GP</span>
          </div>
        </div>
        <div class="trending-item" onclick="openTemplateDetail()">
          <div class="trending-rank top3">3</div>
          <div class="trending-cover"><img src="ui-design/assets/product-3.jpg" alt="通勤大地色"></div>
          <div class="trending-name">通勤大地色</div>
          <div class="trending-meta">
            <span class="trending-creator">职场美妆</span>
            <span class="trending-price">免费</span>
          </div>
        </div>
        <div class="trending-item" onclick="openTemplateDetail()">
          <div class="trending-rank normal">4</div>
          <div class="trending-cover"><img src="ui-design/assets/product-1.jpg" alt="丝绒红唇妆"></div>
          <div class="trending-name">丝绒红唇妆</div>
          <div class="trending-meta">
            <span class="trending-creator">大牌同款</span>
            <span class="trending-price">80 GP</span>
          </div>
        </div>
        <div class="trending-item" onclick="openTemplateDetail()">
          <div class="trending-rank normal">5</div>
          <div class="trending-cover"><img src="ui-design/assets/hero-banner.jpg" alt="夏日元气妆"></div>
          <div class="trending-name">夏日元气果汁妆</div>
          <div class="trending-meta">
            <span class="trending-creator">夏日限定</span>
            <span class="trending-price">60 GP</span>
          </div>
        </div>
      </div>
    </div>

    <div class="ai-recommend-card">
      <div class="ai-recommend-header">
        <span class="ai-recommend-badge">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2a10 10 0 1 0 10 10"/>
            <path d="M12 6v6l4 2"/>
          </svg>
          AI 每日推荐
        </span>
        <h3>根据你的肤质推荐</h3>
      </div>
      <div class="ai-recommend-products">
        <div class="ai-rec-prod" onclick="openTemplateDetail()">
          <div class="ai-rec-prod-img"><img src="ui-design/assets/product-2.jpg" alt="粉底液"></div>
          <div class="ai-rec-prod-name">持妆粉底液</div>
          <div class="ai-rec-match">匹配度 96%</div>
          <div class="ai-rec-prod-price">¥298</div>
        </div>
        <div class="ai-rec-prod" onclick="openTemplateDetail()">
          <div class="ai-rec-prod-img"><img src="ui-design/assets/product-1.jpg" alt="口红"></div>
          <div class="ai-rec-prod-name">丝绒哑光唇釉</div>
          <div class="ai-rec-match">匹配度 92%</div>
          <div class="ai-rec-prod-price">¥168</div>
        </div>
        <div class="ai-rec-prod" onclick="openTemplateDetail()">
          <div class="ai-rec-prod-img"><img src="ui-design/assets/product-4.jpg" alt="精华"></div>
          <div class="ai-rec-prod-name">烟酰胺精华</div>
          <div class="ai-rec-match">匹配度 89%</div>
          <div class="ai-rec-prod-price">¥358</div>
        </div>
        <div class="ai-rec-prod" onclick="openTemplateDetail()">
          <div class="ai-rec-prod-img"><img src="ui-design/assets/product-3.jpg" alt="眼影"></div>
          <div class="ai-rec-prod-name">大地色眼影盘</div>
          <div class="ai-rec-match">匹配度 85%</div>
          <div class="ai-rec-prod-price">¥228</div>
        </div>
      </div>
    </div>

    <div class="section-sm" style="padding: 0 16px 80px;">
      <div class="section-header">
        <div class="section-title">大家都在看</div>
        <span class="section-more" onclick="switchTab('library')">更多 →</span>
      </div>
      <div class="feed-list">
        <div class="feed-item" onclick="openTemplateDetail()">
          <div class="feed-cover"><img src="ui-design/assets/feed-card-1.jpg" alt="清透氧气妆"></div>
          <div class="feed-info">
            <div>
              <div class="feed-title">清透氧气裸妆，约会必备伪素颜</div>
              <div class="feed-creator">
                <span class="badge badge-success badge-pill">免费</span>
                <span class="feed-creator-name">· 美妆师Lily</span>
              </div>
            </div>
            <div class="feed-bottom">
              <span class="feed-stats">👁 2.3w</span>
              <span class="feed-stats">❤ 1.2k</span>
            </div>
          </div>
        </div>
        <div class="feed-item" onclick="openTemplateDetail()">
          <div class="feed-cover"><img src="ui-design/assets/feed-card-2.jpg" alt="复古港风妆"></div>
          <div class="feed-info">
            <div>
              <div class="feed-title">复古港风妆容，一秒回到 90 年代</div>
              <div class="feed-creator">
                <span class="badge badge-primary badge-pill">L2 精选</span>
                <span class="feed-creator-name">· 复古美学</span>
              </div>
            </div>
            <div class="feed-bottom">
              <span class="feed-stats">👁 1.8w</span>
              <span class="feed-stats">❤ 986</span>
            </div>
          </div>
        </div>
        <div class="feed-item" onclick="openTemplateDetail()">
          <div class="feed-cover"><img src="ui-design/assets/feature-ai.jpg" alt="国风妆"></div>
          <div class="feed-info">
            <div>
              <div class="feed-title">国风唐妆，尽显东方韵味</div>
              <div class="feed-creator">
                <span class="badge badge-accent badge-pill">国风</span>
                <span class="feed-creator-name">· 国风堂</span>
              </div>
            </div>
            <div class="feed-bottom">
              <span class="feed-stats">👁 5.6w</span>
              <span class="feed-stats">❤ 3.2k</span>
            </div>
          </div>
        </div>
        <div class="feed-item" onclick="openTemplateDetail()">
          <div class="feed-cover"><img src="ui-design/assets/mirror-camera.jpg" alt="银妆"></div>
          <div class="feed-info">
            <div>
              <div class="feed-title">优雅银发妆，妈妈也能很美</div>
              <div class="feed-creator">
                <span class="badge badge-warning badge-pill">银发</span>
                <span class="feed-creator-name">· 优雅妈妈</span>
              </div>
            </div>
            <div class="feed-bottom">
              <span class="feed-stats">👁 3.1w</span>
              <span class="feed-stats">❤ 2.1k</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
"""

# ============================================================
# NEW HTML - LIBRARY PAGE
# ============================================================
library_html = """
  <!-- ===== Library Page ===== -->
  <div class="page" id="page-library">
    <div class="lib-top-bar">
      <div class="lib-search-row">
        <div class="search-input-wrapper" style="flex:1;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input type="text" placeholder="搜索妆容、成分、美妆问题...">
        </div>
        <div class="lib-publish-btn" onclick="showToast('发布作品')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          发布
        </div>
      </div>
      <div class="lib-cat-primary">
        <span class="lib-cat-item active" onclick="switchLibCat(this)">达人精选</span>
        <span class="lib-cat-item" onclick="switchLibCat(this)">局部拆解</span>
        <span class="lib-cat-item" onclick="switchLibCat(this)">美妆问答</span>
        <span class="lib-cat-item" onclick="switchLibCat(this)">国风专区</span>
        <span class="lib-cat-item" onclick="switchLibCat(this)">银发专区</span>
        <span class="lib-cat-item" onclick="switchLibCat(this)">大牌精选</span>
        <span class="lib-cat-item" onclick="switchLibCat(this)">明星同款</span>
      </div>
      <div class="lib-cat-secondary">
        <span class="lib-sub-tag active">全部</span>
        <span class="lib-sub-tag">日常</span>
        <span class="lib-sub-tag">约会</span>
        <span class="lib-sub-tag">职场</span>
        <span class="lib-sub-tag">派对</span>
        <span class="lib-sub-tag">度假</span>
        <span class="lib-sub-tag">运动</span>
      </div>
    </div>

    <div class="lib-waterfall">
      <div class="lib-card" onclick="openTemplateDetail()">
        <div class="lib-card-img">
          <img src="ui-design/assets/feed-card-1.jpg" alt="清透氧气裸妆">
          <span class="lib-card-badge free">免费</span>
        </div>
        <div class="lib-card-info">
          <div class="lib-card-title">清透氧气裸妆教程，新手也能学会的伪素颜</div>
          <div class="lib-card-bottom">
            <span class="lib-card-author">L·美妆师Lily</span>
            <span class="lib-card-likes">❤ 2.3k</span>
          </div>
        </div>
      </div>
      <div class="lib-card" onclick="openTemplateDetail()">
        <div class="lib-card-img" style="height:200px;">
          <img src="ui-design/assets/feed-card-2.jpg" alt="复古港风">
          <span class="lib-card-badge">L2</span>
        </div>
        <div class="lib-card-info">
          <div class="lib-card-title">复古港风妆容</div>
          <div class="lib-card-bottom">
            <span class="lib-card-author">复·复古美学</span>
            <span class="lib-card-likes">❤ 1.8k</span>
          </div>
        </div>
      </div>
      <div class="lib-card" onclick="openTemplateDetail()">
        <div class="lib-card-img" style="height:180px;">
          <img src="ui-design/assets/product-1.jpg" alt="丝绒红唇">
          <span class="lib-card-badge">L3</span>
        </div>
        <div class="lib-card-info">
          <div class="lib-card-title">丝绒红唇妆，高级感满分</div>
          <div class="lib-card-bottom">
            <span class="lib-card-author">大·大牌同款</span>
            <span class="lib-card-likes">❤ 3.5k</span>
          </div>
        </div>
      </div>
      <div class="lib-card" onclick="openTemplateDetail()">
        <div class="lib-card-img">
          <img src="ui-design/assets/feature-ai.jpg" alt="国风唐妆">
          <span class="lib-card-badge">国风</span>
        </div>
        <div class="lib-card-info">
          <div class="lib-card-title">国风唐妆教程，古典韵味</div>
          <div class="lib-card-bottom">
            <span class="lib-card-author">国·国风堂</span>
            <span class="lib-card-likes">❤ 5.6k</span>
          </div>
        </div>
      </div>
      <div class="lib-card" onclick="openTemplateDetail()">
        <div class="lib-card-img" style="height:220px;">
          <img src="ui-design/assets/mirror-camera.jpg" alt="银发妆">
          <span class="lib-card-badge">银发</span>
        </div>
        <div class="lib-card-info">
          <div class="lib-card-title">优雅银发妆，妈妈辈也适合的淡雅妆容</div>
          <div class="lib-card-bottom">
            <span class="lib-card-author">优·优雅妈妈</span>
            <span class="lib-card-likes">❤ 2.1k</span>
          </div>
        </div>
      </div>
      <div class="lib-card" onclick="openTemplateDetail()">
        <div class="lib-card-img" style="height:190px;">
          <img src="ui-design/assets/product-3.jpg" alt="大地色眼影">
          <span class="lib-card-badge free">免费</span>
        </div>
        <div class="lib-card-info">
          <div class="lib-card-title">通勤大地色眼妆</div>
          <div class="lib-card-bottom">
            <span class="lib-card-author">职·职场美妆</span>
            <span class="lib-card-likes">❤ 1.5k</span>
          </div>
        </div>
      </div>
      <div class="lib-card" onclick="openTemplateDetail()">
        <div class="lib-card-img">
          <img src="ui-design/assets/hero-banner.jpg" alt="夏日元气">
          <span class="lib-card-badge">L2</span>
        </div>
        <div class="lib-card-info">
          <div class="lib-card-title">夏日元气果汁妆，清透感满分</div>
          <div class="lib-card-bottom">
            <span class="lib-card-author">夏·夏日限定</span>
            <span class="lib-card-likes">❤ 3.1k</span>
          </div>
        </div>
      </div>
      <div class="lib-card" onclick="openTemplateDetail()">
        <div class="lib-card-img" style="height:210px;">
          <img src="ui-design/assets/product-2.jpg" alt="底妆">
          <span class="lib-card-badge free">免费</span>
        </div>
        <div class="lib-card-info">
          <div class="lib-card-title">无瑕底妆教程，持久不脱妆</div>
          <div class="lib-card-bottom">
            <span class="lib-card-author">底·底妆专家</span>
            <span class="lib-card-likes">❤ 4.2k</span>
          </div>
        </div>
      </div>
    </div>
  </div>
"""

# ============================================================
# NEW HTML - MODALS
# ============================================================
modals_html = """
  <!-- ===== Ingredient Scan Modal ===== -->
  <div class="modal-overlay" id="ingredient-scan-modal">
    <div class="modal-header">
      <div class="modal-title">成分安全扫描</div>
      <div class="modal-close" onclick="closeIngredientScan()">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </div>
    </div>
    <div class="modal-content">
      <div class="scan-camera-area">
        <div class="scan-frame">
          <div class="scan-line"></div>
        </div>
      </div>
      <div class="scan-tabs">
        <span class="scan-tab active">拍照</span>
        <span class="scan-tab">相册</span>
        <span class="scan-tab">手动输入</span>
      </div>
      <button class="scan-main-btn" onclick="showScanResult()">📸 开始扫描</button>
      <div class="scan-note">支持 10000+ 成分数据库 · 中欧美三方法规对照</div>
    </div>
  </div>

  <!-- ===== GP Center Modal ===== -->
  <div class="modal-overlay" id="gp-center-modal">
    <div class="gp-header">
      <div class="modal-header" style="padding:0; background:transparent; border:none; position:relative; z-index:2;">
        <div class="modal-title" style="color:#fff;">焕新值中心</div>
        <div class="modal-close" style="background:rgba(255,255,255,0.2); color:#fff;" onclick="closeGpCenter()">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </div>
      </div>
      <div class="gp-balance" style="position:relative; z-index:2;">328 <span>GP</span></div>
      <div class="gp-level-row">
        <span class="gp-level-name">金妆 Lv.3</span>
        <div class="gp-progress"><div class="gp-progress-fill"></div></div>
        <span class="gp-next">距下一等级 172GP</span>
      </div>
    </div>
    <div class="gp-tabs">
      <span class="gp-tab active" onclick="switchGpTab(this)">每日任务</span>
      <span class="gp-tab" onclick="switchGpTab(this)">成就奖励</span>
      <span class="gp-tab" onclick="openRecharge()">充值</span>
    </div>
    <div class="task-section">
      <div class="task-section-title">每日任务</div>
      <div class="task-item">
        <div class="task-icon">📅</div>
        <div class="task-info">
          <div class="task-name">每日签到</div>
          <div class="task-progress">已完成</div>
        </div>
        <span class="task-reward">+10 GP</span>
        <button class="task-btn" onclick="claimTask(this, 10)">领取</button>
      </div>
      <div class="task-item">
        <div class="task-icon">👁️</div>
        <div class="task-info">
          <div class="task-name">浏览 3 个妆容模板</div>
          <div class="task-progress">2/3</div>
        </div>
        <span class="task-reward">+15 GP</span>
        <button class="task-btn go" onclick="switchTab('library'); closeGpCenter();">去完成</button>
      </div>
      <div class="task-item">
        <div class="task-icon">🔬</div>
        <div class="task-info">
          <div class="task-name">成分扫描 1 次</div>
          <div class="task-progress">0/1</div>
        </div>
        <span class="task-reward">+20 GP</span>
        <button class="task-btn go" onclick="closeGpCenter(); openIngredientScan();">去完成</button>
      </div>
      <div class="task-item">
        <div class="task-icon">❤️</div>
        <div class="task-info">
          <div class="task-name">收藏 1 个妆容</div>
          <div class="task-progress">已完成</div>
        </div>
        <span class="task-reward">+10 GP</span>
        <button class="task-btn" onclick="claimTask(this, 10)">领取</button>
      </div>
    </div>
    <div class="task-section">
      <div class="task-section-title">成就奖励</div>
      <div class="task-item">
        <div class="task-icon">🏆</div>
        <div class="task-info">
          <div class="task-name">首次完成面部扫描</div>
          <div class="task-progress">已完成</div>
        </div>
        <span class="task-reward">+50 GP</span>
        <button class="task-btn" onclick="claimTask(this, 50)">领取</button>
      </div>
      <div class="task-item">
        <div class="task-icon">🛍️</div>
        <div class="task-info">
          <div class="task-name">首次购买妆容模板</div>
          <div class="task-progress">未完成</div>
        </div>
        <span class="task-reward">+30 GP</span>
        <button class="task-btn go" onclick="switchTab('mall'); closeGpCenter();">去完成</button>
      </div>
    </div>
    <div style="padding:0 16px 24px;">
      <button class="scan-main-btn" style="width:100%; margin:0;" onclick="showToast('前往兑换商城')">🛍️ 去兑换商城</button>
    </div>
  </div>

  <!-- ===== Template Detail Modal ===== -->
  <div class="modal-overlay" id="template-detail-modal">
    <div class="modal-content" style="padding-bottom:0;">
      <div class="template-hero">
        <img src="ui-design/assets/feed-card-1.jpg" alt="妆容封面" style="display:none;" id="tpl-hero-img">
        <span style="font-size:80px;" id="tpl-hero-emoji">💋</span>
        <span class="template-level-badge" id="tpl-level-badge">L2 精选</span>
        <div class="template-actions">
          <div class="template-action-btn" onclick="showToast('已收藏')">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </div>
          <div class="template-action-btn" onclick="showToast('分享')">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
          </div>
          <div class="template-action-btn" onclick="closeTemplateDetail()" style="background:rgba(255,255,255,0.9);">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </div>
        </div>
      </div>
      <div class="template-detail-body">
        <div class="template-title">清透氧气裸妆</div>
        <div class="template-creator">
          <div class="creator-avatar">L</div>
          <div class="creator-info">
            <div class="creator-name">美妆师Lily</div>
            <div class="creator-verified">✓ 官方认证</div>
          </div>
          <button class="follow-btn">关注</button>
        </div>
        <div class="template-stats">
          <div class="stat-item"><div class="stat-value">4.9</div><div class="stat-label">评分</div></div>
          <div class="stat-item"><div class="stat-value">2.3w</div><div class="stat-label">使用次数</div></div>
          <div class="stat-item"><div class="stat-value">10</div><div class="stat-label">教程步骤</div></div>
          <div class="stat-item"><div class="stat-value">15分</div><div class="stat-label">时长</div></div>
        </div>
        <div class="template-desc">
          清透自然的裸妆教程，适合日常通勤和约会。打造伪素颜效果，让你的皮肤看起来天生就好。包含底妆、眼妆、唇妆全步骤详解。
        </div>
        <div class="tag-row">
          <div class="tag-row-title">适合场景</div>
          <span class="badge badge-primary badge-pill">日常通勤</span>
          <span class="badge badge-primary badge-pill">约会</span>
          <span class="badge badge-primary badge-pill">学生党</span>
          <span class="badge badge-primary badge-pill">伪素颜</span>
        </div>
        <div class="tag-row">
          <div class="tag-row-title">适合脸型</div>
          <span class="badge badge-success badge-pill">鹅蛋脸</span>
          <span class="badge badge-success badge-pill">瓜子脸</span>
          <span class="badge badge-success badge-pill">圆脸</span>
          <span class="badge badge-success badge-pill">长脸</span>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <div class="buy-bar">
        <div class="buy-price">
          <span class="buy-price-label">模板价格</span>
          <span class="buy-price-value">50 GP</span>
        </div>
        <button class="buy-btn" onclick="unlockTemplate()">立即解锁</button>
      </div>
    </div>
  </div>

  <!-- ===== Trending Bottom Popup ===== -->
  <div class="bottom-popup" id="trending-popup" onclick="closeTrendingModal(event)">
    <div class="bottom-popup-content" onclick="event.stopPropagation()">
      <div class="bottom-popup-handle"></div>
      <div class="bottom-popup-title">🔥 今日热度榜</div>
      <div class="trending-full-list">
        <div class="trending-full-item" onclick="openTemplateDetail(); closeTrendingModal2();">
          <div class="trending-full-rank top1">1</div>
          <div class="trending-full-cover"><img src="ui-design/assets/feed-card-1.jpg" alt="清透氧气妆"></div>
          <div class="trending-full-info">
            <div class="trending-full-name">清透氧气裸妆</div>
            <div class="trending-full-meta">美妆师Lily · 2.3w 使用</div>
          </div>
          <div class="trending-full-price">50 GP</div>
        </div>
        <div class="trending-full-item" onclick="openTemplateDetail(); closeTrendingModal2();">
          <div class="trending-full-rank top2">2</div>
          <div class="trending-full-cover"><img src="ui-design/assets/feed-card-2.jpg" alt="复古港风妆"></div>
          <div class="trending-full-info">
            <div class="trending-full-name">复古港风妆容</div>
            <div class="trending-full-meta">复古美学 · 1.8w 使用</div>
          </div>
          <div class="trending-full-price">30 GP</div>
        </div>
        <div class="trending-full-item" onclick="openTemplateDetail(); closeTrendingModal2();">
          <div class="trending-full-rank top3">3</div>
          <div class="trending-full-cover"><img src="ui-design/assets/product-3.jpg" alt="通勤大地色"></div>
          <div class="trending-full-info">
            <div class="trending-full-name">通勤大地色</div>
            <div class="trending-full-meta">职场美妆 · 1.5w 使用</div>
          </div>
          <div class="trending-full-price">免费</div>
        </div>
        <div class="trending-full-item" onclick="openTemplateDetail(); closeTrendingModal2();">
          <div class="trending-full-rank normal">4</div>
          <div class="trending-full-cover"><img src="ui-design/assets/product-1.jpg" alt="丝绒红唇妆"></div>
          <div class="trending-full-info">
            <div class="trending-full-name">丝绒红唇妆</div>
            <div class="trending-full-meta">大牌同款 · 1.2w 使用</div>
          </div>
          <div class="trending-full-price">80 GP</div>
        </div>
        <div class="trending-full-item" onclick="openTemplateDetail(); closeTrendingModal2();">
          <div class="trending-full-rank normal">5</div>
          <div class="trending-full-cover"><img src="ui-design/assets/hero-banner.jpg" alt="夏日元气妆"></div>
          <div class="trending-full-info">
            <div class="trending-full-name">夏日元气果汁妆</div>
            <div class="trending-full-meta">夏日限定 · 9.8k 使用</div>
          </div>
          <div class="trending-full-price">60 GP</div>
        </div>
        <div class="trending-full-item" onclick="openTemplateDetail(); closeTrendingModal2();">
          <div class="trending-full-rank normal">6</div>
          <div class="trending-full-cover"><img src="ui-design/assets/feature-ai.jpg" alt="国风唐妆"></div>
          <div class="trending-full-info">
            <div class="trending-full-name">国风唐妆</div>
            <div class="trending-full-meta">国风堂 · 8.5k 使用</div>
          </div>
          <div class="trending-full-price">100 GP</div>
        </div>
        <div class="trending-full-item" onclick="openTemplateDetail(); closeTrendingModal2();">
          <div class="trending-full-rank normal">7</div>
          <div class="trending-full-cover"><img src="ui-design/assets/mirror-camera.jpg" alt="银发妆"></div>
          <div class="trending-full-info">
            <div class="trending-full-name">优雅银发妆</div>
            <div class="trending-full-meta">优雅妈妈 · 7.2k 使用</div>
          </div>
          <div class="trending-full-price">40 GP</div>
        </div>
      </div>
    </div>
  </div>

  <!-- ===== Recharge Bottom Popup ===== -->
  <div class="bottom-popup" id="recharge-popup" onclick="closeRecharge(event)">
    <div class="bottom-popup-content" onclick="event.stopPropagation()">
      <div class="bottom-popup-handle"></div>
      <div class="bottom-popup-title">充值焕新值</div>
      <div class="recharge-options">
        <div class="recharge-option" onclick="selectRecharge(this)">
          <div class="recharge-gp">60 <span>GP</span></div>
          <div class="recharge-price">¥6.9</div>
        </div>
        <div class="recharge-option recommended selected" onclick="selectRecharge(this)">
          <div class="recharge-gp">360 <span>GP</span></div>
          <div class="recharge-price">¥39</div>
        </div>
        <div class="recharge-option" onclick="selectRecharge(this)">
          <div class="recharge-gp">1200 <span>GP</span></div>
          <div class="recharge-price">¥99</div>
        </div>
      </div>
      <button class="recharge-btn" onclick="doRecharge()">立即充值</button>
    </div>
  </div>
"""

# ============================================================
# NEW TAB BAR HTML
# ============================================================
tabbar_html = """
  <!-- ===== Tab Bar ===== -->
  <nav class="tab-bar">
    <a class="tab-btn active" data-tab="home" onclick="switchTab('home')">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <path d="M3 12.5L12 4l9 8.5"/>
        <path d="M5 11v9a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1v-9"/>
      </svg>
      <span>首页</span>
    </a>
    <a class="tab-btn" data-tab="library" onclick="switchTab('library')">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
      </svg>
      <span>颜库</span>
    </a>
    <a class="tab-btn center-tab" data-tab="mirror" onclick="switchTab('mirror')">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <path d="M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.3L12 16.8 5.8 21.2l2.4-7.3L2 9.4h7.6z"/>
      </svg>
      <span>焕新</span>
    </a>
    <a class="tab-btn" data-tab="mall" onclick="switchTab('mall')">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <path d="M6 2L3 6v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
      <span>商城</span>
    </a>
    <a class="tab-btn" data-tab="profile" onclick="switchTab('profile')">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <circle cx="12" cy="8" r="4"/>
        <path d="M20 21a8 8 0 10-16 0"/>
      </svg>
      <span>我的</span>
    </a>
  </nav>
"""

# ============================================================
# NEW JAVASCRIPT
# ============================================================
new_js = """
  // Onboarding
  let onboardStep = 1;
  const totalSteps = 5;
  let selectedSkin = null;
  let gpBalance = 328;

  function nextOnboarding() {
    if (onboardStep < totalSteps) {
      document.getElementById('onboard-step-' + onboardStep).classList.remove('active');
      onboardStep++;
      document.getElementById('onboard-step-' + onboardStep).classList.add('active');
    }
  }

  function selectSkin(el, type) {
    document.querySelectorAll('.skin-card').forEach(c => c.classList.remove('selected'));
    el.classList.add('selected');
    selectedSkin = type;
    document.getElementById('skin-next-btn').disabled = false;
  }

  function toggleStyle(el) {
    el.classList.toggle('selected');
  }

  function simulateFaceScan() {
    showToast('AI 正在分析你的面部特征...');
    setTimeout(() => { nextOnboarding(); }, 1500);
  }

  function completeOnboarding() {
    gpBalance += 100;
    updateGpDisplay();
    document.getElementById('onboarding').style.display = 'none';
    showToast('欢迎加入妆伴！+100 GP');
  }

  function updateGpDisplay() {
    const badge = document.getElementById('gp-badge-home');
    if (badge) badge.textContent = gpBalance;
  }

  // Modals
  function openIngredientScan() {
    document.getElementById('ingredient-scan-modal').classList.add('show');
  }
  function closeIngredientScan() {
    document.getElementById('ingredient-scan-modal').classList.remove('show');
  }
  function showScanResult() {
    showToast('正在识别成分...');
    setTimeout(() => {
      showToast('扫描完成！安全评分 65 分');
      closeIngredientScan();
    }, 2000);
  }

  function openGpCenter() {
    document.getElementById('gp-center-modal').classList.add('show');
  }
  function closeGpCenter() {
    document.getElementById('gp-center-modal').classList.remove('show');
  }
  function switchGpTab(el) {
    document.querySelectorAll('.gp-tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
  }
  function claimTask(btn, amount) {
    if (btn.classList.contains('claimed')) return;
    btn.classList.add('claimed');
    btn.textContent = '已领取';
    gpBalance += amount;
    updateGpDisplay();
    showToast('+ ' + amount + ' GP');
  }

  function openTemplateDetail() {
    document.getElementById('template-detail-modal').classList.add('show');
  }
  function closeTemplateDetail() {
    document.getElementById('template-detail-modal').classList.remove('show');
  }
  function unlockTemplate() {
    if (gpBalance < 50) {
      closeTemplateDetail();
      openRecharge();
      return;
    }
    gpBalance -= 50;
    updateGpDisplay();
    showToast('解锁成功！正在前往试妆...');
    setTimeout(() => {
      closeTemplateDetail();
      switchTab('mirror');
    }, 1000);
  }

  function openTrendingModal() {
    document.getElementById('trending-popup').classList.add('show');
  }
  function closeTrendingModal(e) {
    if (e.target === document.getElementById('trending-popup')) {
      document.getElementById('trending-popup').classList.remove('show');
    }
  }
  function closeTrendingModal2() {
    document.getElementById('trending-popup').classList.remove('show');
  }

  function openRecharge() {
    closeGpCenter();
    document.getElementById('recharge-popup').classList.add('show');
  }
  function closeRecharge(e) {
    if (e.target === document.getElementById('recharge-popup')) {
      document.getElementById('recharge-popup').classList.remove('show');
    }
  }
  function selectRecharge(el) {
    document.querySelectorAll('.recharge-option').forEach(o => o.classList.remove('selected'));
    el.classList.add('selected');
  }
  function doRecharge() {
    gpBalance += 360;
    updateGpDisplay();
    document.getElementById('recharge-popup').classList.remove('show');
    showToast('充值成功！+360 GP');
  }

  function switchLibCat(el) {
    document.querySelectorAll('.lib-cat-item').forEach(i => i.classList.remove('active'));
    el.classList.add('active');
    showToast('切换分类：' + el.textContent);
  }

  // Mirror page updates
  function updateMirrorTitle() {
    // Title already updated in HTML
  }
"""


# ============================================================
# MAIN BUILD SCRIPT
# ============================================================
print("Loading v3.1.0 base...")
with open('/workspace/makeuppal-demo-v3.1.0.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Update title
html = html.replace('妆伴 MakeupPal V3.1.0', '妆伴 MakeupPal V3.2.0')
print("✓ Title updated")

# 2. Add new CSS before Tab Bar styles
tab_css_marker = '/* ============ Tab Bar ============ */'
html = html.replace(tab_css_marker, new_css + '\n' + tab_css_marker)
print("✓ New CSS added")

# 3. Replace Home Page + Discover Page with Home + Library
# Find home page start and discover page end
home_start = html.find('  <!-- ===== Home Page ===== -->')
discover_end = html.find('  <!-- ===== Scan Page ===== -->')

if home_start != -1 and discover_end != -1:
    new_home_lib = home_html + '\n' + library_html
    html = html[:home_start] + new_home_lib + '\n' + html[discover_end:]
    print("✓ Home + Library pages replaced")
else:
    print("✗ Could not find home/discover markers")
    print(f"  home_start={home_start}, discover_end={discover_end}")

# 4. Replace Tab Bar
old_tabbar_start = html.find('  <!-- ===== Tab Bar ===== -->')
old_tabbar_end = html.find('  <!-- ===== Toast ===== -->')

if old_tabbar_start != -1 and old_tabbar_end != -1:
    html = html[:old_tabbar_start] + tabbar_html + '\n\n' + html[old_tabbar_end:]
    print("✓ Tab Bar replaced")
else:
    print("✗ Could not find tabbar markers")

# 5. Add Onboarding at the very beginning of body (after <body>)
body_match = html.find('<body>')
if body_match != -1:
    insert_pos = body_match + len('<body>')
    html = html[:insert_pos] + '\n' + onboarding_html + '\n' + html[insert_pos:]
    print("✓ Onboarding added")
else:
    print("✗ Could not find <body>")

# 6. Add modals before Tab Bar
tabbar_html_start = html.find('  <!-- ===== Tab Bar ===== -->')
if tabbar_html_start != -1:
    html = html[:tabbar_html_start] + modals_html + '\n\n' + html[tabbar_html_start:]
    print("✓ Modals added")
else:
    print("✗ Could not find tabbar for modal insertion")

# 7. Add new JS at end of script
script_end = html.rfind('</script>')
if script_end != -1:
    html = html[:script_end] + new_js + '\n' + html[script_end:]
    print("✓ New JS added")
else:
    print("✗ Could not find </script>")

# 8. Update scan page title and content (make it a search/solution page)
# Update page-scan to have problem-solution style
scan_page_start = html.find('id="page-scan"')
if scan_page_start != -1:
    # Just update the scan page to be more solution-oriented
    # We'll keep existing but add a note
    print("  (Scan page kept as-is for now)")

# Save
output_path = '/workspace/makeuppal-demo-v3.2.0.html'
with open(output_path, 'w', encoding='utf-8') as f:
    f.write(html)

size_kb = os.path.getsize(output_path) / 1024
print(f"\n✅ Done! Output: {output_path}")
print(f"   File size: {size_kb:.0f} KB")
print(f"   Total lines: {html.count(chr(10))}")
