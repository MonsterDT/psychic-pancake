#!/usr/bin/env python3
"""
重新生成面部妆造肖像照（聚焦脸部，高清特写）
用于：颜库封面 + 市集商品头图
"""
import json
import urllib.request
import urllib.parse
import re
import time
import random
import shutil

API_BASE = 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image'

def generate_image(prompt, size='portrait_4_3', retries=3):
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

# 20种妆容风格的面部特写
FACE_STYLES = [
    ('日常通勤', '日常通勤妆容，清透裸妆感，伪素颜，大地色眼影，自然唇色，干净底妆'),
    ('甜美约会', '甜美约会妆容，蜜桃粉腮红，粉棕色眼影，镜面唇釉，少女感'),
    ('精致晚宴', '精致晚宴妆容，深邃烟熏眼妆，正红色口红，修容立体，高级感'),
    ('复古港风', '复古港风妆容，浓眉红唇，大地色眼影，港风复古感，90年代'),
    ('国风唐妆', '国风唐妆，酒红色眼影，樱桃唇，花钿，古典东方美，华丽富贵'),
    ('国风宋妆', '国风宋妆，素雅淡妆，远山眉，淡粉色唇，清雅温婉，宋代美学'),
    ('韩系女团', '韩系女团妆容，闪亮眼影盘，卧蚕明显，水光肌，咬唇妆，元气'),
    ('日系透明', '日系透明感妆容，伪素颜，淡粉色腮红，自然眉，清透底妆'),
    ('泰式浓颜', '泰式浓颜妆容，野生浓眉，立体修容，大地色眼妆，裸色唇'),
    ('轻欧美烟熏', '轻欧美烟熏妆容，深邃眼窝，截断式眼妆，修容明显，气场'),
    ('纯欲风', '纯欲风妆容，清透底妆，无辜感下垂眼，嫩粉色唇，氛围感'),
    ('新中式清冷', '新中式清冷妆容，哑光质地，眉眼细长，淡色唇，东方韵味'),
    ('美拉德秋冬', '美拉德色系妆容，棕红色系，焦糖色眼影，土棕唇，秋冬氛围感'),
    ('多巴胺甜酷', '多巴胺妆容，鲜艳彩色眼影，亮片，粉橘色腮红，甜酷辣妹'),
    ('Y2K辣妹', 'Y2K千禧辣妹妆容，金属亮片，低腰眉，裸色唇，复古未来感'),
    ('芭蕾少女', '芭蕾少女妆容，粉色系，亮片眼影，玻璃唇，粉嫩仙气，温柔梦幻'),
    ('静奢老钱', '静奢老钱妆容，哑光质感，中性色调，精致低调，高级质感'),
    ('银发减龄', '减龄优雅妆容，自然柔和，淡粉色系，提升气色，成熟气质'),
    ('明星红毯', '明星红毯妆容，精致无瑕底妆，闪亮眼妆，正红或裸色唇，聚光灯'),
    ('白开水淡妆', '白开水淡妆，极致清透，伪素颜，自然毛流感，干净气质'),
]

def match_style(title, tag='', category=''):
    """智能匹配妆容风格"""
    text = f"{title} {tag} {category}"
    
    style_map = {
        '国风唐妆': ['唐妆', '唐制', '唐代', '大唐', '花钿', '敦煌'],
        '国风宋妆': ['宋妆', '宋制', '宋代', '素雅', '远山眉'],
        '复古港风': ['港风', '复古', '90年代', '90s', '红唇港'],
        '日常通勤': ['日常', '通勤', '大地', '裸妆', '伪素颜', '早八', '白开水', '法式慵懒'],
        '甜美约会': ['甜美', '约会', '少女', '蜜桃', '樱花', '粉嫩', '芭蕾', '纯欲'],
        '精致晚宴': ['晚宴', '千金', '派对', '精致', '浓颜', '御姐', '红毯', 'C位'],
        '韩系女团': ['韩系', '韩妆', '女高', '学院', '水光', '女团'],
        '日系透明': ['日系', '日杂', '透明', '森系', '日系元'],
        '泰式浓颜': ['泰式', '泰兰德', '浓颜', '异域'],
        '轻欧美烟熏': ['欧美', '烟熏', '轻欧美', '混血'],
        '纯欲风': ['纯欲', '钓系', '无辜'],
        '新中式清冷': ['新中式', '清冷', '东方韵味', '国风现代'],
        '美拉德秋冬': ['美拉德', '秋冬', '棕调', '焦糖', '大地'],
        '多巴胺甜酷': ['多巴胺', '元气', '彩色', '甜酷', 'Y2K'],
        'Y2K辣妹': ['Y2K', '千禧', '辣妹', '赛博'],
        '芭蕾少女': ['芭蕾', '天鹅', '仙气', '梦幻', '在逃公主'],
        '静奢老钱': ['静奢', '老钱', '极简', '高级感', '轻奢', '知识分子'],
        '银发减龄': ['银发', '减龄', '妈妈', '成熟', '优雅', '中年', '抗老', '熟龄'],
        '明星红毯': ['明星', '红毯', '杂志', '同款', '仿妆'],
        '白开水淡妆': ['白开水', '淡妆', '清透', '伪素颜', '奶油肌'],
    }
    
    for style, keywords in style_map.items():
        for kw in keywords:
            if kw in text:
                return style
    
    # 根据分类兜底
    if 'guofeng' in category or '国风' in category:
        return '国风唐妆'
    if 'yinfa' in category or '银发' in category:
        return '银发减龄'
    if 'star' in category or '明星' in category:
        return '明星红毯'
    if 'dapai' in category or '大牌' in category:
        return '精致晚宴'
    
    return '日常通勤'

def build_face_prompt(style_desc):
    """构建面部特写肖像提示词"""
    base = (
        f"亚洲女性面部特写肖像照，{style_desc}，"
        f"正面略微侧脸，聚焦脸部妆容效果，高清人像摄影，"
        f"专业美妆广告质感，柔和自然光线，精致的面部细节，"
        f"完美肤质，睫毛根根分明，唇纹清晰，皮肤质感真实，"
        f"干净纯色背景，浅色调背景，突出妆容展示"
    )
    return base

def main():
    print("=" * 60)
    print("重新生成面部妆造肖像照")
    print("=" * 60)
    
    random.seed(42)
    
    input_path = '/workspace/makeuppal-demo-v3.3.0.html'
    with open(input_path, 'r', encoding='utf-8') as f:
        html = f.read()
    
    print(f"\n输入文件: {len(html)/1024:.0f} KB")
    
    # 解析 MakeupPalData
    m = re.search(r'const MakeupPalData = (\{[\s\S]*?\n\});', html)
    if not m:
        print("未找到 MakeupPalData")
        return
    data = json.loads(m.group(1))
    
    # 1. 生成面部肖像图库（每种风格 3 张，轮换使用）
    print("\n[1/3] 生成面部肖像图库（20种风格 × 3张 = 60张）...")
    style_images = {}
    
    for idx, (style_name, style_desc) in enumerate(FACE_STYLES):
        style_images[style_name] = []
        for i in range(3):
            prompt = build_face_prompt(style_desc) + f"，变体{i+1}"
            print(f"  [{idx*3+i+1}/60] {style_name} ({i+1}/3)")
            url = generate_image(prompt, 'portrait_4_3')
            if url:
                style_images[style_name].append(url)
            time.sleep(0.3)
    
    total_generated = sum(len(v) for v in style_images.values())
    print(f"  生成了 {total_generated} 张面部肖像")
    
    # 2. 更新颜库内容的封面图
    print("\n[2/3] 更新颜库封面图...")
    lf = data['libraryFeed']
    style_counters = {}
    updated = 0
    
    for cat_name, items in lf.items():
        if not isinstance(items, list):
            continue
        for item in items:
            if 'coverImage' not in item:
                continue
            style = match_style(
                item.get('title', ''),
                item.get('tag', ''),
                cat_name
            )
            if style not in style_counters:
                style_counters[style] = 0
            
            urls = style_images.get(style, style_images.get('日常通勤', []))
            if urls:
                idx = style_counters[style] % len(urls)
                item['coverImage'] = urls[idx]
                style_counters[style] += 1
                updated += 1
    
    print(f"  更新了 {updated} 张颜库封面")
    
    # 3. 更新 marketProducts 中的商品图
    print("\n[3/3] 更新市集商品图...")
    
    # 找到 marketProducts 的位置
    mp_start = re.search(r'const marketProducts = \{', html)
    if not mp_start:
        print("未找到 marketProducts")
        return
    
    # 找到结束位置
    brace_count = 0
    i = mp_start.start() + len('const marketProducts = ')
    while i < len(html):
        c = html[i]
        if c == '{':
            brace_count += 1
        elif c == '}':
            brace_count -= 1
            if brace_count == 0:
                mp_end = i + 1
                break
        i += 1
    
    mp_str = html[mp_start.start() + len('const marketProducts = '):mp_end-1]
    
    # 逐个商品替换 img
    mp_updated = 0
    
    def replace_product_img(match_obj):
        nonlocal mp_updated
        full = match_obj.group(0)
        name_match = re.search(r"name: ['\"]([^'\"]+)['\"]", full)
        if not name_match:
            return full
        name = name_match.group(1)
        style = match_style(name)
        urls = style_images.get(style, style_images.get('日常通勤', []))
        if not urls:
            return full
        url = random.choice(urls)
        mp_updated += 1
        return re.sub(r"img: ['\"][^'\"]+['\"]", f"img: '{url}'", full)
    
    new_mp_str = re.sub(
        r"\{ id: ['\"]?[^'\",}]+['\"]?[^}]*img: ['\"][^'\"]+['\"]",
        replace_product_img,
        mp_str
    )
    
    print(f"  更新了 {mp_updated} 个市集商品图")
    
    # 重新组装 HTML
    new_mp_block = 'const marketProducts = ' + new_mp_str + '};'
    new_html = html[:mp_start.start()] + new_mp_block + html[mp_end:]
    
    # 更新 MakeupPalData
    new_data_js = 'const MakeupPalData = ' + json.dumps(data, ensure_ascii=False, indent=2) + ';'
    new_html = new_html[:m.start()] + new_data_js + new_html[m.end():]
    
    # 保存
    with open(input_path, 'w', encoding='utf-8') as f:
        f.write(new_html)
    
    shutil.copy(input_path, '/workspace/demo-dist/index.html')
    
    print(f"\n{'='*60}")
    print(f"✅ 完成！")
    print(f"  生成面部肖像: {total_generated} 张")
    print(f"  颜库封面更新: {updated} 张")
    print(f"  市集商品更新: {mp_updated} 个")
    print(f"  文件大小: {len(new_html)/1024:.0f} KB")
    print(f"{'='*60}")

if __name__ == '__main__':
    main()
