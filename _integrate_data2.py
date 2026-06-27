#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
补充注入剩余模块的数据访问函数
"""

import re

def read_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()

def write_file(path, content):
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

def main():
    html_path = '/workspace/makeuppal-demo-v3.2.0.html'
    html = read_file(html_path)
    
    count = 0
    
    # 1. 在 Market (Mall) 后注入商品渲染函数
    market_marker = '  // ===== Market (Mall) ====='
    market_funcs = '''
  // ===== 基于 MakeupPalData 的商品渲染 =====
  function getMarketProductsV2(subCat, subSub) {
    const all = MakeupPalData.products;
    let list = [...all];
    if (subCat && subCat !== 'all' && subCat !== '全部') {
      const catMap = {
        daren: ['日常', '通勤', '达人', '约会'],
        ziying: ['底妆', '护肤', 'YSL', 'Dior', 'Chanel'],
        hot: ['持妆', '经典', '热卖', '好评'],
        gufeng: ['国风', '花西子', '养肤'],
        yinfa: ['抗老', '修护', '保湿', '敏感'],
        star: ['显白', '正红', '气场', '明星']
      };
      const kws = catMap[subCat] || [subCat];
      list = all.filter(p => 
        kws.some(kw => 
          p.category.includes(kw) || 
          p.name.includes(kw) ||
          (p.tags && p.tags.some(t => t.includes(kw))) ||
          p.brand.includes(kw)
        )
      );
    }
    if (list.length < 6) list = all.slice(0, 12);
    return list.slice(0, 12);
  }

  function getProductByIdV2(id) {
    return MakeupPalData.products.find(p => p.id === id) || MakeupPalData.products[0];
  }

  function getBrandPartners() {
    return MakeupPalData.brandPartners || [];
  }
'''
    
    if market_marker in html and 'getMarketProductsV2' not in html:
        # 找到 market_marker 那行，在它后面插入
        lines = html.split('\n')
        insert_idx = -1
        for i, line in enumerate(lines):
            if market_marker in line:
                insert_idx = i + 1
                break
        if insert_idx > 0:
            lines.insert(insert_idx, market_funcs)
            html = '\n'.join(lines)
            print('✅ [1/4] 市集商品渲染函数已注入')
            count += 1
    else:
        print('ℹ️  [1/4] 市集函数已存在或marker未找到，跳过')
    
    # 2. 补充首页数据函数（在 Library 附近找个 Home 相关位置）
    # 我们在 EventListeners 之前注入全局数据函数
    ev_marker = '  // ===== Event Listeners ====='
    global_funcs = '''
  // ===== 全局数据访问 (基于 MakeupPalData) =====
  function getHotRankingData() {
    return MakeupPalData.hotRanking || [];
  }
  function getBannerData() {
    return MakeupPalData.banners || [];
  }
  function getDailyTasksData() {
    return MakeupPalData.dailyTasks || [];
  }
  function getAchievementsData() {
    return MakeupPalData.achievements || [];
  }
  function getLevelsData() {
    return MakeupPalData.levels || [];
  }
  function getSkinProfileData() {
    return MakeupPalData.skinProfile || {};
  }
  function getOnboardingStepsData() {
    return MakeupPalData.onboardingSteps || [];
  }
  function getIngredientScanData() {
    return MakeupPalData.ingredientScanResults || [];
  }
  function getLocalProblemsData() {
    return MakeupPalData.localProblems || [];
  }
'''
    
    if ev_marker in html and 'getHotRankingData' not in html:
        lines = html.split('\n')
        insert_idx = -1
        for i, line in enumerate(lines):
            if ev_marker in line:
                insert_idx = i
                break
        if insert_idx > 0:
            lines.insert(insert_idx, global_funcs)
            html = '\n'.join(lines)
            print('✅ [2/4] 全局数据访问函数已注入')
            count += 1
    else:
        print('ℹ️  [2/4] 全局函数已存在或marker未找到，跳过')
    
    # 保存
    write_file(html_path, html)
    print(f'\n🎉 补充注入完成！成功注入 {count} 个模块')
    print(f'   文件大小: {len(html)/1024:.1f} KB')

if __name__ == '__main__':
    main()
