#!/usr/bin/env python3
"""
批量生成AI图片并更新Demo HTML文件
优化策略：按风格/分类生成图片，同类复用，减少API调用次数
"""
import json
import urllib.request
import urllib.parse
import re
import time
import sys
import os
import hashlib

API_BASE = 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image'

def generate_image(prompt, size='portrait_4_3', retries=3):
    """调用AI生成图片，返回图片URL"""
    url = f"{API_BASE}?prompt={urllib.parse.quote(prompt)}&image_size={size}"
    for attempt in range(retries):
        try:
            req = urllib.request.Request(url, method='GET')
            with urllib.request.urlopen(req, timeout=60) as resp:
                if resp.status == 200:
                    return url
        except Exception as e:
            print(f"    尝试 {attempt+1}/{retries} 失败: {e}")
            if attempt < retries - 1:
                time.sleep(2)
    return None

# ========== 妆容风格分类（用于复用图片）==========
MAKEUP_STYLES = [
    ('日常通勤', '日常通勤妆容，清新自然，伪素颜，职场气质，亚洲女性模特'),
    ('甜美约会', '甜美约会妆容，粉嫩腮红，温柔气质，少女感，亚洲女性模特'),
    ('精致晚宴', '精致晚宴妆容，高级感，优雅大气，富家千金风，亚洲女性模特'),
    ('复古港风', '复古港风妆容，大红唇，浓眉，90年代感，亚洲女性模特'),
    ('国风古典', '中国风古典妆容，典雅东方气质，汉服唐装，亚洲女性模特'),
    ('韩系清透', '韩系清透妆容，水光肌，咬唇妆，自然精致，亚洲女性模特'),
    ('日系元气', '日系元气妆容，粉嫩腮红，透明感，年轻女孩，亚洲女性模特'),
    ('泰式浓颜', '泰式浓颜妆容，立体轮廓，浓眉，异域风情，亚洲女性模特'),
    ('轻欧美风', '轻欧美妆容，深邃眼窝，立体修容，时尚感，亚洲女性模特'),
    ('纯欲风', '纯欲风妆容，清透底妆，氛围感，温柔气质，亚洲女性模特'),
    ('新中式', '新中式清冷妆容，东方韵味，雅致高级，亚洲女性模特'),
    ('美拉德', '美拉德色系妆容，棕色调，秋冬氛围感，亚洲女性模特'),
    ('多巴胺', '多巴胺色彩妆容，鲜艳配色，元气活力，年轻女孩'),
    ('Y2K辣妹', 'Y2K千禧辣妹妆容，复古未来感，个性张扬，年轻女孩'),
    ('芭蕾少女', '芭蕾少女妆容，粉嫩仙气，温柔梦幻，年轻女孩'),
    ('静奢老钱', '老钱静奢妆容，低调高级，质感妆容，成熟气质'),
    ('银发减龄', '减龄气质妆容，适合成熟女性，优雅端庄，亚洲女性'),
    ('明星红毯', '明星红毯妆容，精致华丽，聚光灯下，高级质感'),
]

# ========== 商品类型分类 ==========
PRODUCT_TYPES = [
    ('粉底液', '高端粉底液产品，玻璃瓶装，高级质感包装，产品摄影，白色背景'),
    ('气垫', '气垫BB霜产品，粉盒包装，精致外观，产品摄影，白色背景'),
    ('口红', '口红唇釉产品，精致管身设计，膏体质感，产品摄影，米色背景'),
    ('眼影盘', '眼影盘产品，多色眼影，精致包装，产品摄影，白色背景'),
    ('腮红', '腮红产品，粉盒包装，细腻粉质，产品摄影，柔和光线'),
    ('眉笔', '眉笔眉粉产品，精致包装，产品摄影，干净背景'),
    ('睫毛膏眼线', '睫毛膏眼线笔产品，管装设计，产品摄影，白色背景'),
    ('高光修容', '高光修容产品，粉饼包装，细腻闪粉，产品摄影'),
    ('护肤套装', '护肤精华面霜产品，玻璃瓶装，高级感，产品摄影'),
    ('礼盒套装', '美妆礼盒套装，精美包装，多件产品，产品摄影'),
    ('香水', '香水瓶，精致玻璃瓶，高级质感，产品摄影，柔和光线'),
    ('卸妆洁面', '卸妆洁面产品，瓶装或按压式，干净清新，产品摄影'),
]

# ========== Banner主题 ==========
BANNER_THEMES = [
    ('新春限定', '美妆APP新春banner，红色金色配色，节日喜庆，中国传统元素，现代设计'),
    ('大牌联名', '美妆品牌联名banner，奢华高级，时尚潮流，现代简约设计'),
    ('新手专区', '美妆新手入门banner，清新友好，轻松氛围，插画风格'),
    ('银发焕新', '银发焕新banner，成熟优雅，减龄气质，温柔色调'),
    ('成分安全', '成分安全banner，科学护肤，实验室风格，纯净感，蓝绿色调'),
    ('每日签到', '每日签到banner，积分奖励，活泼可爱，卡通插画风格'),
]

def get_style_for_item(item, category=''):
    """根据item内容匹配妆容风格"""
    title = item.get('title', item.get('name', ''))
    tag = item.get('tag', '')
    scene = item.get('scene', '')
    dynasty = item.get('dynasty', '')
    
    text = f"{title} {tag} {scene} {dynasty} {category}"
    
    # 关键词匹配
    style_keywords = {
        '国风古典': ['国风', '唐妆', '宋妆', '明妆', '汉妆', '敦煌', '古装', '古风', '花西子', '新中式'],
        '复古港风': ['港风', '复古', '90年代', '红唇', '港味'],
        '日常通勤': ['日常', '通勤', '裸妆', '自然', '清透', '伪素颜', '早八', '白开水', '淡颜'],
        '甜美约会': ['甜美', '约会', '少女', '蜜桃', '粉嫩', '芭蕾', '纯欲'],
        '精致晚宴': ['晚宴', '千金', '派对', '精致', '高级', '浓颜', '御姐'],
        '韩系清透': ['韩系', '韩妆', '女高', '学院', '清透', '水光'],
        '日系元气': ['日系', '日杂', '透明', '元气', '森系'],
        '泰式浓颜': ['泰式', '泰兰德', '浓颜', '异域'],
        '轻欧美风': ['欧美', '烟熏', '轻欧美', '混血'],
        '美拉德': ['美拉德', '秋冬', '棕调', '大地'],
        '多巴胺': ['多巴胺', '元气', '彩色', 'Y2K', '千禧'],
        'Y2K辣妹': ['Y2K', '千禧', '辣妹', '赛博'],
        '芭蕾少女': ['芭蕾', '天鹅', '仙气', '梦幻'],
        '静奢老钱': ['静奢', '老钱', '极简', '高级感', '轻奢'],
        '银发减龄': ['银发', '减龄', '妈妈', '成熟', '优雅', '中年', '抗老'],
        '明星红毯': ['明星', '红毯', '杂志', '舞台', 'C位', '同款'],
    }
    
    for style, keywords in style_keywords.items():
        for kw in keywords:
            if kw in text:
                return style
    
    # 根据分类兜底
    if 'guofeng' in category or '国风' in category or dynasty:
        return '国风古典'
    if 'yinfa' in category or '银发' in category:
        return '银发减龄'
    if 'star' in category or '明星' in category:
        return '明星红毯'
    if 'dapai' in category or '大牌' in category:
        return '精致晚宴'
    
    return '日常通勤'

def get_product_type(product):
    """根据商品名判断类型"""
    name = product.get('name', '')
    category = product.get('category', '')
    text = name + ' ' + category
    
    type_keywords = {
        '粉底液': ['粉底', '底妆', 'BB', 'CC'],
        '气垫': ['气垫', '粉霜'],
        '口红': ['口红', '唇釉', '唇膏', '唇泥', '唇彩'],
        '眼影盘': ['眼影', '眼盘'],
        '腮红': ['腮红', '胭脂'],
        '眉笔': ['眉笔', '眉粉', '眉膏'],
        '睫毛膏眼线': ['眼线', '睫毛膏', '睫毛'],
        '高光修容': ['高光', '修容', '阴影'],
        '护肤套装': ['护肤', '精华', '面霜', '水乳', '眼霜'],
        '礼盒套装': ['套装', '礼盒', '套盒', '组合'],
        '香水': ['香水', '香氛'],
        '卸妆洁面': ['卸妆', '洁面', '洗面奶', '清洁'],
    }
    
    for ptype, keywords in type_keywords.items():
        for kw in keywords:
            if kw in text:
                return ptype
    
    return '粉底液'

def get_banner_theme(banner):
    """获取banner主题"""
    title = banner.get('title', '') + banner.get('subtitle', '')
    
    theme_keywords = {
        '新春限定': ['新春', '春节', '新年', '限定'],
        '大牌联名': ['联名', '大牌', '合作'],
        '新手专区': ['新手', '入门', '教程'],
        '银发焕新': ['银发', '焕新', '妈妈', '减龄'],
        '成分安全': ['成分', '安全', '扫描', '检测'],
        '每日签到': ['签到', '任务', '积分'],
    }
    
    for theme, keywords in theme_keywords.items():
        for kw in keywords:
            if kw in title:
                return theme
    
    return '大牌联名'

def main():
    print("=" * 60)
    print("AI图片批量生成 & Demo更新脚本 v2 (智能复用)")
    print("=" * 60)
    
    style_images = {}  # 风格 -> 图片URL列表（轮换使用）
    product_images = {}  # 商品类型 -> 图片URL列表
    banner_images = {}  # banner主题 -> 图片URL
    other_images = {}  # 其他图片缓存
    
    # 1. 读取资料库数据
    print("\n[1/7] 读取资料库数据...")
    with open('/workspace/makeuppal-demo-data.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    print(f"  商品: {len(data['products'])} 个")
    print(f"  Banner: {len(data['banners'])} 个")
    print(f"  引导页: {len(data['onboardingSteps'])} 个")
    print(f"  品牌: {len(data['brandPartners'])} 个")
    lf = data['libraryFeed']
    total_lib = sum(len(v) for v in lf.values() if isinstance(v, list))
    print(f"  颜库内容: {total_lib} 条")
    
    # 2. 读取源HTML
    print("\n[2/7] 读取源HTML文件...")
    with open('/workspace/makeuppal-demo-v3.2.0.html', 'r', encoding='utf-8') as f:
        html = f.read()
    print(f"  文件大小: {len(html)/1024:.0f} KB")
    
    # 3. 生成妆容风格图片（每种风格生成2张，轮换）
    print("\n[3/7] 生成妆容风格封面图（按风格分类复用）...")
    num_per_style = 2  # 每种风格生成2张
    style_list = MAKEUP_STYLES
    
    for style_idx, (style_name, prompt_base) in enumerate(style_list):
        style_images[style_name] = []
        for i in range(num_per_style):
            full_prompt = f"{prompt_base}，高清人像摄影，专业美妆广告质感，柔和光线，精致面部细节，完美肤质"
            print(f"  [{style_idx+1}/{len(style_list)}] {style_name} ({i+1}/{num_per_style})")
            url = generate_image(full_prompt, 'portrait_4_3')
            if url:
                style_images[style_name].append(url)
            time.sleep(0.5)
    
    # 生成额外的头像图
    print("\n  生成头像图片...")
    avatar_prompt = '年轻美丽的亚洲女性头像，精致妆容，柔和光线，人像摄影，高清，圆形构图'
    avatar_urls = []
    for i in range(4):
        url = generate_image(avatar_prompt + f'，变体{i+1}', 'square')
        if url:
            avatar_urls.append(url)
        time.sleep(0.5)
    print(f"    生成 {len(avatar_urls)} 张头像")
    
    # 4. 生成商品图片（按类型分类）
    print("\n[4/7] 生成商品图片（按类型复用）...")
    for ptype_idx, (ptype, prompt) in enumerate(PRODUCT_TYPES):
        product_images[ptype] = []
        # 每种类型生成3张不同角度/颜色的
        for i in range(3):
            full_prompt = f"{prompt}，变体{i+1}，专业商业摄影，高级质感，柔和打光"
            print(f"  [{ptype_idx+1}/{len(PRODUCT_TYPES)}] {ptype} ({i+1}/3)")
            url = generate_image(full_prompt, 'square')
            if url:
                product_images[ptype].append(url)
            time.sleep(0.5)
    
    # 5. 生成Banner、引导页、品牌Logo
    print("\n[5/7] 生成Banner、引导页、品牌Logo...")
    
    # Banners
    for theme, prompt in BANNER_THEMES:
        print(f"  Banner: {theme}")
        url = generate_image(prompt, 'landscape_16_9')
        if url:
            banner_images[theme] = url
        time.sleep(0.5)
    
    # 引导页
    onboarding_images = {}
    onboarding_prompts = [
        ('step1', '美妆APP欢迎界面插画风格banner，女孩开心使用手机，化妆品图标，温暖明亮色调'),
        ('step2', '肤质检测概念banner，皮肤特写，科学感，干净清新，蓝绿色调'),
        ('step3', 'AI扫描技术概念banner，面部轮廓线和数据点，科技感，未来风格，紫色调'),
        ('step4', '多种妆容风格展示banner，不同风格的化妆效果，多彩配色，时尚感'),
        ('step5', '美妆新手礼包banner，礼品盒和化妆品，庆祝氛围，温馨金色调'),
    ]
    for step_key, prompt in onboarding_prompts:
        print(f"  引导页: {step_key}")
        url = generate_image(prompt, 'portrait_4_3')
        if url:
            onboarding_images[step_key] = url
        time.sleep(0.5)
    
    # 品牌Logo
    brand_logo_url = generate_image(
        '高端美妆品牌logo集合，简约奢华设计，多个品牌标识，黑白色调，矢量风格，干净背景',
        'square'
    )
    print(f"  品牌Logo: 已生成" if brand_logo_url else "  品牌Logo: 失败")
    
    # 6. 更新资料库数据中的图片引用
    print("\n[6/7] 更新资料库数据中的图片引用...")
    
    # 更新颜库内容
    lf = data['libraryFeed']
    style_counters = {}  # 记录每种风格用了多少张，用于轮换
    
    for cat_name, items in lf.items():
        if not isinstance(items, list):
            continue
        for idx, item in enumerate(items):
            if 'coverImage' in item:
                style = get_style_for_item(item, cat_name)
                if style not in style_counters:
                    style_counters[style] = 0
                urls = style_images.get(style, style_images.get('日常通勤', []))
                if urls:
                    url_idx = style_counters[style] % len(urls)
                    item['coverImage'] = urls[url_idx]
                    style_counters[style] += 1
            
            # 更新头像
            if 'creatorAvatar' in item and avatar_urls:
                item['creatorAvatar'] = avatar_urls[idx % len(avatar_urls)]
            if 'authorAvatar' in item and avatar_urls:
                item['authorAvatar'] = avatar_urls[idx % len(avatar_urls)]
            if 'celebrityPhoto' in item and style_images:
                star_urls = style_images.get('明星红毯', [])
                if star_urls:
                    item['celebrityPhoto'] = star_urls[idx % len(star_urls)]
            if 'brandLogo' in item and brand_logo_url:
                item['brandLogo'] = brand_logo_url
    
    print(f"  颜库封面图已更新 ({sum(style_counters.values())} 条)")
    
    # 更新商品图片
    prod_counters = {}
    for idx, p in enumerate(data['products']):
        ptype = get_product_type(p)
        if ptype not in prod_counters:
            prod_counters[ptype] = 0
        urls = product_images.get(ptype, product_images.get('粉底液', []))
        if urls:
            url_idx = prod_counters[ptype] % len(urls)
            p['image'] = urls[url_idx]
            prod_counters[ptype] += 1
    
    print(f"  商品图已更新 ({sum(prod_counters.values())} 个)")
    
    # 更新Banner
    for idx, b in enumerate(data['banners']):
        theme = get_banner_theme(b)
        url = banner_images.get(theme)
        if url:
            b['image'] = url
    
    print(f"  Banner已更新 ({len(data['banners'])} 个)")
    
    # 更新引导页
    for idx, s in enumerate(data['onboardingSteps']):
        step_key = f'step{idx+1}'
        if step_key in onboarding_images:
            s['image'] = onboarding_images[step_key]
    
    print(f"  引导页已更新 ({len(data['onboardingSteps'])} 个)")
    
    # 更新品牌Logo
    if brand_logo_url:
        for b in data['brandPartners']:
            b['logo'] = brand_logo_url
        print(f"  品牌Logo已更新 ({len(data['brandPartners'])} 个)")
    
    # 7. 更新HTML文件
    print("\n[7/7] 更新HTML文件...")
    
    # 替换 MakeupPalData
    pattern = r'const MakeupPalData = \{[\s\S]*?\n  \};'
    match = re.search(pattern, html)
    if match:
        new_data_js = 'const MakeupPalData = ' + json.dumps(data, ensure_ascii=False, indent=2) + ';'
        html = html[:match.start()] + new_data_js + html[match.end():]
        print("  MakeupPalData 已更新")
    else:
        print("  警告: 未找到 MakeupPalData 定义")
    
    # 替换硬编码的静态图片
    static_replace_map = {
        'hero-banner.jpg': banner_images.get('大牌联名', ''),
        'feed-card-1.jpg': style_images.get('精致晚宴', [''])[0] if style_images.get('精致晚宴') else '',
        'feed-card-2.jpg': style_images.get('日常通勤', [''])[0] if style_images.get('日常通勤') else '',
        'product-1.jpg': style_images.get('国风古典', [''])[0] if style_images.get('国风古典') else '',
        'product-2.jpg': style_images.get('日常通勤', [''])[0] if style_images.get('日常通勤') else '',
        'product-3.jpg': style_images.get('甜美约会', [''])[0] if style_images.get('甜美约会') else '',
        'product-4.jpg': style_images.get('复古港风', [''])[0] if style_images.get('复古港风') else '',
        'look-1.jpg': style_images.get('精致晚宴', [''])[0] if style_images.get('精致晚宴') else '',
        'look-2.jpg': style_images.get('日常通勤', [''])[0] if style_images.get('日常通勤') else '',
        'look-3.jpg': style_images.get('甜美约会', [''])[0] if style_images.get('甜美约会') else '',
        'look-4.jpg': style_images.get('韩系清透', [''])[0] if style_images.get('韩系清透') else '',
        'feature-ai.jpg': style_images.get('日系元气', [''])[0] if style_images.get('日系元气') else '',
        'feature-scan.jpg': style_images.get('轻欧美风', [''])[0] if style_images.get('轻欧美风') else '',
        'mirror-camera.jpg': style_images.get('韩系清透', [''])[0] if style_images.get('韩系清透') else '',
    }
    
    replaced = 0
    for old_file, new_url in static_replace_map.items():
        if new_url:
            old_path = f'ui-design/assets/{old_file}'
            count = html.count(old_path)
            if count > 0:
                html = html.replace(old_path, new_url)
                replaced += count
                print(f"  替换 {old_file}: {count} 处")
    
    print(f"  硬编码图片共替换 {replaced} 处")
    
    # 保存新文件
    output_path = '/workspace/makeuppal-demo-v3.3.0.html'
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(html)
    
    # 同时更新 demo-dist
    import shutil
    demo_dist_path = '/workspace/demo-dist/index.html'
    shutil.copy(output_path, demo_dist_path)
    
    total_generated = sum(len(v) for v in style_images.values()) + \
                      sum(len(v) for v in product_images.values()) + \
                      len(banner_images) + len(onboarding_images) + 2  # logo + avatars
    
    print(f"\n{'='*60}")
    print(f"✅ 完成！")
    print(f"  生成图片总数: ~{total_generated} 张")
    print(f"  妆容风格: {len(style_images)} 种 × 2 = {sum(len(v) for v in style_images.values())} 张")
    print(f"  商品类型: {len(product_images)} 种 × 3 = {sum(len(v) for v in product_images.values())} 张")
    print(f"  Banner: {len(banner_images)} 张")
    print(f"  引导页: {len(onboarding_images)} 张")
    print(f"  输出文件: {output_path}")
    print(f"  部署文件: {demo_dist_path}")
    print(f"  文件大小: {len(html)/1024/1024:.1f} MB")
    print(f"{'='*60}")

if __name__ == '__main__':
    main()
