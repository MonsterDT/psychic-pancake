#!/usr/bin/env python3
"""
补充生成教程步骤图 - 优化版：只生成基础图，多变体复用
"""
import json
import urllib.request
import urllib.parse
import re
import time
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

STEP_CATEGORIES = {
    'wochan': ('卧蚕', '眼妆'),
    'yanxian': ('眼线', '眼妆'),
    'danyan': ('单眼皮', '眼妆'),
    'dizhuang': ('底妆', '底妆'),
    'meimao': ('眉毛', '眉妆'),
    'saihong': ('腮红', '腮红'),
    'xiurong': ('修容', '修容'),
    'chun': ('唇妆', '唇妆'),
}

STEP_DESCRIPTIONS = {
    '眼妆': [
        '第一步：眼部打底，用浅色眼影铺满整个眼窝',
        '第二步：加深眼尾，用中间色眼影晕染眼尾三角区',
        '第三步：画眼线，沿睫毛根部描绘精致眼线',
        '第四步：提亮卧蚕和眼中，用亮片色点亮',
    ],
    '底妆': [
        '第一步：妆前保湿，涂抹妆前乳使皮肤水润',
        '第二步：上粉底液，用美妆蛋均匀拍开',
        '第三步：局部遮瑕，遮盖黑眼圈和痘印瑕疵',
        '第四步：散粉定妆，打造持久无瑕底妆',
    ],
    '眉妆': [
        '第一步：梳理眉毛，用眉刷梳顺毛流',
        '第二步：勾勒眉形，用眉笔描绘眉毛下缘线',
        '第三步：填充颜色，从眉尾向眉头渐变填充',
        '第四步：晕染定型，用眉刷晕染自然，眉膏定型',
    ],
    '腮红': [
        '第一步：定位腮红，微笑找到苹果肌最高点',
        '第二步：蘸取腮红，用腮红刷轻轻蘸取并抖掉余粉',
        '第三步：轻扫上色，从苹果肌向太阳穴方向斜扫',
        '第四步：晕染过渡，边缘晕染自然，打造好气色',
    ],
    '修容': [
        '第一步：找到位置，在颧骨下方、下颌线、鼻梁两侧定位',
        '第二步：打阴影，用修容刷在轮廓线轻轻扫上阴影色',
        '第三步：提亮高光，在鼻梁、额头、苹果肌、下巴点上高光',
        '第四步：融合过渡，用干净刷子晕染边缘，自然立体',
    ],
    '唇妆': [
        '第一步：唇部打底，涂抹润唇膏滋润双唇',
        '第二步：勾勒唇线，用唇线笔描绘理想唇形轮廓',
        '第三步：填充颜色，均匀涂抹口红或唇釉',
        '第四步：精致修整，用棉签修整边缘，打造完美唇形',
    ],
}

def main():
    print("=" * 60)
    print("补充生成教程步骤图 (优化版)")
    print("=" * 60)
    
    input_path = '/workspace/makeuppal-demo-v3.3.0.html'
    with open(input_path, 'r', encoding='utf-8') as f:
        html = f.read()
    
    print(f"\n输入文件: {input_path}")
    
    # 生成基础步骤图：8个部位 × 4步 = 32张
    print("\n[1/2] 生成基础步骤图（8部位 × 4步 = 32张）...")
    base_images = {}  # (category, step) -> url
    
    for cat_idx, (cat_key, (cat_name, group)) in enumerate(STEP_CATEGORIES.items()):
        descs = STEP_DESCRIPTIONS.get(group, STEP_DESCRIPTIONS['底妆'])
        for step in range(1, 5):
            step_idx = step - 1
            desc = descs[step_idx] if step_idx < len(descs) else f'步骤{step}'
            prompt = f"美妆教程步骤图，{cat_name}{desc}，亚洲女性脸部局部特写，专业化妆教学风格，高清摄影，柔和自然光线，干净背景"
            
            current = cat_idx * 4 + step
            total = len(STEP_CATEGORIES) * 4
            print(f"  [{current}/{total}] {cat_name} 步骤{step}")
            
            url = generate_image(prompt, 'portrait_4_3')
            if url:
                base_images[(cat_key, step)] = url
            time.sleep(0.3)
    
    print(f"\n生成了 {len(base_images)} 张基础步骤图")
    
    # 现在替换所有128个步骤图引用
    print("\n[2/2] 替换所有步骤图引用...")
    
    # 提取所有需要替换的步骤图文件名
    all_step_imgs = set()
    for m in re.finditer(r'assets/images/steps/([a-zA-Z0-9_\-]+\.jpg)', html):
        all_step_imgs.add(m.group(1))
    
    print(f"  需要替换的步骤图文件: {len(all_step_imgs)} 个")
    
    replaced_count = 0
    for img_file in all_step_imgs:
        # 解析文件名：如 chun2_03.jpg -> (部位=chun, 变体=2, 步骤=3)
        m = re.match(r'([a-z]+)(\d*)_(\d+)\.jpg', img_file)
        if not m:
            continue
        
        cat_key = m.group(1)
        variant = m.group(2) or '1'
        step = int(m.group(3))
        
        # 找到对应的基础图
        if (cat_key, step) in base_images:
            old_path = f'assets/images/steps/{img_file}'
            new_url = base_images[(cat_key, step)]
            count = html.count(old_path)
            if count > 0:
                html = html.replace(old_path, new_url)
                replaced_count += count
    
    print(f"  替换了 {replaced_count} 处引用")
    
    # 检查剩余
    remaining = re.findall(r'assets/images/steps/[a-zA-Z0-9_\-]+\.jpg', html)
    if remaining:
        print(f"  剩余未替换: {len(set(remaining))} 种")
        for r in sorted(set(remaining))[:5]:
            print(f"    {r}")
    
    # 保存
    with open(input_path, 'w', encoding='utf-8') as f:
        f.write(html)
    
    shutil.copy(input_path, '/workspace/demo-dist/index.html')
    
    print(f"\n✅ 完成！")
    print(f"  基础图生成: {len(base_images)} 张")
    print(f"  总替换数: {replaced_count} 处")
    print(f"  输出文件: {input_path}")
    print(f"  文件大小: {len(html)/1024:.0f} KB")

if __name__ == '__main__':
    main()
