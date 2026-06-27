#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
MakeupPal Demo 全量数据整合脚本
将 MakeupPalData 12个模块全部整合到 demo HTML 中
"""

import re
import json

def read_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()

def write_file(path, content):
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

def main():
    html_path = '/workspace/makeuppal-demo-v3.2.0.html'
    data_path = '/workspace/makeuppal-demo-data.js'
    
    html = read_file(html_path)
    data_js = read_file(data_path)
    
    original_size = len(html)
    print(f'原始文件大小: {original_size/1024:.1f} KB')
    
    # ============================================================
    # 1. 注入完整的 MakeupPalData 数据
    # ============================================================
    script_pattern = r'(<script>\s*\n)'
    match = re.search(script_pattern, html)
    if match:
        insert_pos = match.end()
        inject = '\n  // ============================================================\n'
        inject += '  // MakeupPal Demo Data (V3.0 完整版 - 12大模块)\n'
        inject += '  // ============================================================\n'
        inject += data_js + '\n\n'
        html = html[:insert_pos] + inject + html[insert_pos:]
        print('✅ [1/6] 完整资料库数据已注入')
    else:
        print('❌ 未找到 <script> 标签')
        return False
    
    # ============================================================
    # 2. 更新颜库子分类 + 注入瀑布流渲染函数
    # ============================================================
    old_lib_sub = '''  const librarySubCats = {
    daren: ['全部', '日常妆', '约会妆', '职场妆', '派对妆', '复古妆'],
    jubu: ['全部', '眼妆', '眉妆', '唇妆', '底妆', '腮红'],
    qa: ['全部', '底妆技巧', '眼妆教程', '护肤知识', '产品测评', '工具使用'],
    gufeng: ['全部', '唐妆', '宋妆', '明妆', '汉妆', '戏曲妆'],
    yinfa: ['全部', '减龄妆', '日常淡妆', '婚礼妆', '聚会妆', '护肤'],
    dapai: ['全部', 'YSL', 'Dior', 'Chanel', 'Armani', '雅诗兰黛'],
    star: ['全部', '日常同款', '红毯同款', '杂志同款', '舞台同款', '古装同款']
  };'''
    
    new_lib_sub = '''  const librarySubCats = {
    daren: ['全部', '日常妆', '约会妆', '职场妆', '派对妆', '复古妆'],
    jubu: ['全部', '眼妆', '眉妆', '唇妆', '底妆', '腮红'],
    qa: ['全部', '底妆', '眼妆', '护肤', '产品测评', '新手'],
    gufeng: ['全部', '唐妆', '宋妆', '明妆', '汉妆', '敦煌'],
    yinfa: ['全部', '日常', '聚会', '职场', '婚礼', '家宴'],
    dapai: ['全部', 'YSL', 'Dior', 'Chanel', 'Lancôme', 'MAC'],
    star: ['全部', '甜美妆', '轻熟妆', '韩系妆', '裸妆', '清冷妆']
  };'''
    
    if old_lib_sub in html:
        html = html.replace(old_lib_sub, new_lib_sub)
        print('✅ [2/6] 颜库子分类已更新')
    else:
        print('⚠️  未找到旧颜库子分类，跳过')
    
    # 注入颜库渲染函数
    lib_marker = '  // ===== Library ====='
    render_lib = '''
  // ===== 颜库瀑布流数据 (基于 MakeupPalData) =====
  function getLibraryItems(cat, sub) {
    const feed = MakeupPalData.libraryFeed;
    let items = [];
    switch(cat) {
      case 'daren': items = feed.creators; break;
      case 'jubu': items = feed.tutorials; break;
      case 'qa': items = feed.qa; break;
      case 'gufeng': items = feed.guofeng; break;
      case 'yinfa': items = feed.silver; break;
      case 'dapai': items = feed.brands; break;
      case 'star': items = feed.celebrities; break;
      default: items = feed.creators;
    }
    if (sub && sub !== '全部') {
      const kw = sub.replace('妆','').replace('同款','').replace('系','');
      const filtered = items.filter(it => {
        const fields = [it.tag, it.category, it.scene, it.dynasty, it.brandName, it.celebrityName];
        return fields.some(f => f && f.includes(kw));
      });
      if (filtered.length > 0) items = filtered;
    }
    return items;
  }

  function renderLibraryWaterfall(cat, sub) {
    const items = getLibraryItems(cat, sub);
    const grid = document.getElementById('libraryWaterfall');
    if (!grid) return;
    grid.innerHTML = items.slice(0, 12).map(item => getLibCard(item, cat)).join('');
  }

  function getLibCard(item, cat) {
    const cover = item.coverImage || item.cover || '';
    const title = item.title || '';
    const likes = item.likes || 0;
    const tag = item.tag || '';
    const isBrand = cat === 'dapai';
    const isStar = cat === 'star';
    const isQA = cat === 'qa';
    const creator = item.creatorName || item.authorName || item.brandName || item.celebrityName || '';
    
    let badge = '';
    if (isBrand && item.isOfficial) badge = '<div class="lib-badge-official">官方</div>';
    if (isStar && item.similarity) badge = '<div class="lib-badge-similar">相似度' + item.similarity + '%</div>';
    
    const bottomRight = isQA 
      ? '<span class="lib-meta">'+ (item.answerCount || 0) + '答</span>'
      : '<span class="lib-meta">♡ ' + fmtNum(likes) + '</span>';
    
    const sub = item.dynasty ? item.dynasty + '风' : 
                item.scene ? item.scene + '妆' :
                item.category || '';
    
    return `
      <div class="lib-card" onclick="openTemplateDetail('${item.id}')">
        <div class="lib-card-img">
          <img src="${cover}" alt="${title}" onerror="this.style.background='#f5f0ea';this.src=''">
          ${badge}
          <div class="lib-tag">${tag}</div>
        </div>
        <div class="lib-card-body">
          <div class="lib-card-title">${title}</div>
          <div class="lib-card-foot">
            <span class="lib-creator">${creator || sub}</span>
            ${bottomRight}
          </div>
        </div>
      </div>
    `;
  }

  function fmtNum(n) {
    if (!n) return '0';
    if (n >= 10000) return (n / 10000).toFixed(1) + 'w';
    if (n >= 1000) return (n / 1000).toFixed(1) + 'k';
    return n.toString();
  }
'''
    
    if lib_marker in html:
        html = html.replace(lib_marker, lib_marker + render_lib)
        print('✅ [2/6] 颜库瀑布流渲染函数已注入')
    else:
        print('⚠️  未找到 Library marker')
    
    # ============================================================
    # 3. 更新市集商品 + 品牌合作方
    # ============================================================
    market_marker = '  // ===== Market ====='
    market_code = '''
  // ===== 市集商品 (基于 MakeupPalData) =====
  function getMarketProducts(subCat, subSub) {
    const all = MakeupPalData.products;
    let list = [...all];
    if (subCat && subCat !== 'all' && subCat !== '全部') {
      const map = {
        daren: ['日常', '通勤', '约会'], ziying: ['底妆', '护肤', '套装'],
        remen: ['持妆', '经典', '热榜'], gufeng: ['国风', '养肤', '花西子'],
        yinfa: ['抗老', '修护', '保湿'], mingxing: ['显白', '正红', '气场']
      };
      const kws = map[subCat] || [subCat];
      list = all.filter(p => 
        kws.some(kw => 
          p.category.includes(kw) || 
          p.name.includes(kw) ||
          (p.tags && p.tags.some(t => t.includes(kw)))
        )
      );
    }
    if (list.length < 6) list = all.slice(0, 12);
    return list.slice(0, 12);
  }

  function renderMarketGrid(subCat, subSub) {
    const list = getMarketProducts(subCat, subSub);
    const grid = document.getElementById('marketProductGrid');
    if (!grid) return;
    grid.innerHTML = list.map(p => getProductCard(p)).join('');
  }

  function getProductCard(p) {
    return `
      <div class="product-card" onclick="openProductDetail('${p.id}')">
        <div class="product-img">
          <img src="${p.image}" alt="${p.name}" onerror="this.style.background='#f5f0ea';this.src=''">
          <span class="product-tag">${(p.tags && p.tags[0]) || p.category}</span>
        </div>
        <div class="product-body">
          <div class="product-brand">${p.brand}</div>
          <div class="product-name">${p.name}</div>
          <div class="product-foot">
            <div class="product-price">¥${p.price}<s>¥${p.originalPrice}</s></div>
            <div class="product-rating">${p.rating || '4.5'}分</div>
          </div>
        </div>
      </div>
    `;
  }

  // ===== 商品详情 (基于 MakeupPalData) =====
  function getProductById(id) {
    return MakeupPalData.products.find(p => p.id === id) || MakeupPalData.products[0];
  }
'''
    
    if market_marker in html:
        html = html.replace(market_marker, market_marker + market_code)
        print('✅ [3/6] 市集商品数据与渲染已注入')
    else:
        print('⚠️  未找到 Market marker')
    
    # ============================================================
    # 4. 更新首页热度榜 + Banner
    # ============================================================
    home_marker = '  // ===== Home Page ====='
    home_code = '''
  // ===== 首页热度榜 (基于 MakeupPalData) =====
  function getHotRanking() {
    return MakeupPalData.hotRanking || [];
  }

  function getBanners() {
    return MakeupPalData.banners || [];
  }
'''
    
    if home_marker in html:
        html = html.replace(home_marker, home_marker + home_code)
        print('✅ [4/6] 首页热度榜&Banner数据已注入')
    else:
        print('⚠️  未找到 Home marker')
    
    # ============================================================
    # 5. 更新任务/成就/等级体系
    # ============================================================
    gp_marker = '  // ===== GP Center ====='
    gp_code = '''
  // ===== 任务/成就/等级 (基于 MakeupPalData) =====
  function getDailyTasks() {
    return MakeupPalData.dailyTasks || [];
  }

  function getAchievements() {
    return MakeupPalData.achievements || [];
  }

  function getLevels() {
    return MakeupPalData.levels || [];
  }
'''
    
    if gp_marker in html:
        html = html.replace(gp_marker, gp_marker + gp_code)
        print('✅ [5/6] 任务/成就/等级数据已注入')
    else:
        print('⚠️  未找到 GP marker')
    
    # ============================================================
    # 6. 更新肤质档案 + Onboarding + 成分扫描
    # ============================================================
    profile_marker = '  // ===== Profile ====='
    profile_code = '''
  // ===== 肤质/脸型/肤色数据 (基于 MakeupPalData) =====
  function getSkinProfile() {
    return MakeupPalData.skinProfile || {};
  }

  function getOnboardingSteps() {
    return MakeupPalData.onboardingSteps || [];
  }

  function getIngredientScanResults() {
    return MakeupPalData.ingredientScanResults || [];
  }
'''
    
    if profile_marker in html:
        html = html.replace(profile_marker, profile_marker + profile_code)
        print('✅ [6/6] 肤质/Onboarding/成分扫描数据已注入')
    else:
        print('⚠️  未找到 Profile marker')
    
    # 保存
    write_file(html_path, html)
    new_size = len(html)
    
    print(f'\n🎉 全量整合完成！')
    print(f'   原始大小: {original_size/1024:.1f} KB → 整合后: {new_size/1024:.1f} KB')
    print(f'   增量: {(new_size-original_size)/1024:.1f} KB')
    print(f'   输出文件: {html_path}')
    return True

if __name__ == '__main__':
    main()
