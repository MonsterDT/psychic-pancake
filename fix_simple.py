#!/usr/bin/env python3
"""
简化版修复脚本
1. 修复瀑布流第5张图片类型（landscape → portrait）
2. 从 makeuppal-demo-data.json 读取模板数据
3. 生成市集商品产品图并替换
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

input_path = '/workspace/makeuppal-demo-v3.3.0.html'
with open(input_path, 'r', encoding='utf-8') as f:
    html = f.read()

print(f"原始文件: {len(html)/1024:.0f} KB")

# ========== 1. 修复瀑布流第5张图片类型 ==========
print("\n[1/3] 修复瀑布流头图类型...")

# 找到 landscape_16_9 的那个瀑布流卡片
pattern = r'image_size=landscape_16_9"[^>]*alt="夏日元气妆"'
match = re.search(pattern, html)
if match:
    new_prompt = '甜美元气少女妆容，粉嫩腮红，果汁唇釉，清透底妆，亚洲女性面部特写，正面略微侧脸，聚焦脸部妆容效果，高清人像摄影，专业美妆广告质感，柔和自然光线，精致面部细节，完美肤质，干净纯色背景'
    new_url_part = f'prompt={urllib.parse.quote(new_prompt)}&image_size=portrait_4_3'
    
    # 找到完整的 src 属性并替换
    old_src_pattern = r'src="[^"]*landscape_16_9[^"]*alt="夏日元气妆"'
    old_src_match = re.search(old_src_pattern, html)
    if old_src_match:
        old_src = old_src_match.group(0)
        new_src = f'src="{API_BASE}?{new_url_part}" alt="夏日元气妆"'
        html = html.replace(old_src, new_src)
        print("  瀑布流第5张已改为 portrait_4_3 面部妆容特写")

# ========== 2. 从 JSON 文件读取模板数据并构建 templateItems ==========
print("\n[2/3] 添加 templateItems 数据结构...")

# 直接从 makeuppal-demo-data.json 读取
with open('/workspace/makeuppal-demo-data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

creators = data['libraryFeed']['creators'][:6]
print(f"  从 JSON 读取 {len(creators)} 个模板数据")

# 构建 templateItems
template_items_lines = ["const templateItems = {"]
for i, item in enumerate(creators):
    tid = f't{i+1}'
    title = item.get('title', '妆容模板').replace("'", "\\'")
    img = item.get('coverImage', '')
    badge = 'L2 精选' if i < 3 else '免费'
    price = str(item.get('likes', 5000) // 100) + ' GP'
    creator = item.get('creatorName', '美妆师').replace("'", "\\'")
    
    template_items_lines.append(f"  '{tid}': {{")
    template_items_lines.append(f"    title: '{title}',")
    template_items_lines.append(f"    img: '{img}',")
    template_items_lines.append(f"    badge: '{badge}',")
    template_items_lines.append(f"    price: '{price}',")
    template_items_lines.append(f"    creator: '{creator}'")
    template_items_lines.append(f"  }},")

template_items_lines.append("};")
template_items_js = '\n'.join(template_items_lines)

# 在 MakeupPalData 定义后面添加
# 找到 MakeupPalData }; 的位置
m = re.search(r'const MakeupPalData = \{[\s\S]*?\n  \};', html)
if m:
    html = html.replace(m.group(0), m.group(0) + '\n\n' + template_items_js)
    print("  templateItems 已添加")

# ========== 3. 修改瀑布流卡片 onclick ==========
print("\n[3/3] 修改卡片 onclick 并生成市集商品图...")

# 修改瀑布流卡片 onclick
for i in range(1, 7):
    old_click = f'onclick="openTemplateDetail()"'
    new_click = f'onclick="openTemplateDetail(\'t{i}\')"'
    # 只替换前6个
    count = html.count(old_click)
    if count > 0:
        html = html.replace(old_click, new_click, 1)

print("  瀑布流卡片 onclick 已修改")

# 修改 openTemplateDetail 函数
old_func = '''  function openTemplateDetail() {
    document.getElementById('template-detail-modal').classList.add('show');
  }'''

new_func = '''  function openTemplateDetail(tid) {
    if (!tid) tid = 't1';
    const t = templateItems[tid];
    if (!t) {
      document.getElementById('template-detail-modal').classList.add('show');
      return;
    }
    
    const modal = document.getElementById('template-detail-modal');
    const hero = modal.querySelector('.template-detail-hero');
    if (hero && t.img) {
      hero.style.backgroundImage = 'url(' + t.img + ')';
      hero.style.backgroundSize = 'cover';
      hero.style.backgroundPosition = 'center';
    }
    
    const title = modal.querySelector('.template-detail-title');
    if (title) title.textContent = t.title;
    
    const price = modal.querySelector('.pdf-price span');
    if (price) price.textContent = t.price.replace(' GP', '');
    
    const creator = modal.querySelector('.template-creator-name');
    if (creator) creator.textContent = t.creator;
    
    const badge = modal.querySelector('.template-badge-corner');
    if (badge) badge.textContent = t.badge;
    
    modal.classList.add('show');
  }'''

html = html.replace(old_func, new_func)
print("  openTemplateDetail 函数已更新")

# ========== 4. 生成市集商品图 ==========
print("\n[4/4] 生成市集商品图（品牌产品实物）...")

product_prompts = {
    '口红': '高端口红唇膏产品，精致管身设计，金色包装，产品摄影，白色背景',
    '粉底': '粉底液产品，玻璃瓶装，滴管设计，产品摄影，米色背景',
    '眼影': '眼影盘产品，多色眼影，精致包装，产品摄影，白色背景',
    '腮红': '腮红粉饼，粉盒包装，产品摄影，柔和光线',
    '香水': '香水瓶，精致玻璃瓶，产品摄影，渐变背景',
    '护肤': '护肤精华液，玻璃瓶装，产品摄影，干净背景',
}

product_urls = {}
for ptype, prompt in product_prompts.items():
    print(f"  生成 {ptype}...")
    url = generate_image(prompt, 'square')
    if url:
        product_urls[ptype] = url
    time.sleep(0.5)

print(f"  生成了 {len(product_urls)} 种产品图")

# 更新 MakeupPalData.products 中的 image
products = data.get('products', [])
updated_products = 0
for p in products:
    name = p.get('name', '')
    ptype = '口红'
    for k in product_urls.keys():
        if k in name:
            ptype = k
            break
    if ptype in product_urls:
        p['image'] = product_urls[ptype]
        updated_products += 1

print(f"  更新了 {updated_products} 个资料库商品图")

# 更新 HTML 中的 MakeupPalData.products
# 使用简单的字符串替换来更新 products 数组
products_json = json.dumps(products, ensure_ascii=False, indent=4)
# 找到 products 数组的位置
products_pattern = r'"products": \[[\s\S]*?\n    \]'
products_match = re.search(products_pattern, html)
if products_match:
    old_products_str = products_match.group(0)
    new_products_str = '"products": ' + products_json
    html = html.replace(old_products_str, new_products_str)
    print("  MakeupPalData.products 已更新")

# ========== 保存 ==========
with open(input_path, 'w', encoding='utf-8') as f:
    f.write(html)

shutil.copy(input_path, '/workspace/demo-dist/index.html')

print(f"\n{'='*60}")
print(f"✅ 完成！")
print(f"  文件大小: {len(html)/1024:.0f} KB")
print(f"{'='*60}")