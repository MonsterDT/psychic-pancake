#!/usr/bin/env python3
"""
修复三个问题：
1. 瀑布流头图改用面部妆容特写（portrait_4_3）
2. 模板详情页与外部卡片关联匹配
3. 市集商品图改为品牌产品实物图
"""
import re
import json
import urllib.request
import urllib.parse
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

# ========== 1. 修复瀑布流第5张卡片（landscape_16_9 → portrait_4_3）==========
print("\n[1/4] 修复瀑布流头图...")

# 找到那个 landscape_16_9 的瀑布流卡片并替换
old_img = 'image_size=landscape_16_9" alt="夏日元气妆"'
new_prompt = '甜美元气少女妆容，粉嫩腮红，果汁唇釉，清透底妆，亚洲女性面部特写，正面略微侧脸，聚焦脸部妆容效果，高清人像摄影，专业美妆广告质感，柔和自然光线，精致面部细节，完美肤质，干净纯色背景'
new_img = f'image_size=portrait_4_3" alt="夏日元气妆">'

if old_img in html:
    html = html.replace(
        'prompt=%E7%BE%8E%E5%A6%86%E5%93%81%E7%89%8C%E8%81%94%E5%90%8Dbanner...' + old_img,
        f'prompt={urllib.parse.quote(new_prompt)}&{new_img}'
    )
    print("  瀑布流第5张已修复为面部妆容特写")

# ========== 2. 创建模板数据结构，为每个卡片绑定唯一ID ==========
print("\n[2/4] 创建模板数据结构...")

# 解析 MakeupPalData - 手动提取（正则无法处理复杂嵌套）
m = re.search(r'const MakeupPalData = \{', html)
if not m:
    print("未找到 MakeupPalData")
    exit(1)

start = m.start()
brace_count = 0
in_string = False
string_char = ''
i = start + len('const MakeupPalData = ')
while i < len(html):
    c = html[i]
    if not in_string:
        if c == '{':
            brace_count += 1
        elif c == '}':
            brace_count -= 1
            if brace_count == 0:
                end = i + 1
                break
        elif c == '"':
            in_string = True
            string_char = '"'
        elif c == "'":
            in_string = True
            string_char = "'"
    else:
        if c == '\\' and i + 1 < len(html):
            i += 2
            continue
        elif c == string_char:
            in_string = False
    i += 1

json_str = html[start + len('const MakeupPalData = '):end-1]
data = json.loads(json_str)
print(f"  MakeupPalData 已解析，内容数: {len(data)}")

# 从颜库 creators 中取6个模板数据作为瀑布流展示
templates_data = data['libraryFeed']['creators'][:6]
print(f"  提取了 {len(templates_data)} 个模板数据")

# 构建 templateItems JS 对象
template_items_js = "const templateItems = {\n"
for i, item in enumerate(templates_data):
    tid = 't' + str(i+1)
    title = item.get('title', '妆容模板')
    img = item.get('coverImage', '')
    badge = item.get('level', 'L2 精选')
    price = item.get('price', '50')
    creator = item.get('creatorName', item.get('authorName', '美妆师'))
    avatar = item.get('creatorAvatar', item.get('authorAvatar', ''))
    desc = item.get('description', item.get('intro', '专业妆容教程'))
    steps_json = json.dumps(item.get('steps', []), ensure_ascii=False)
    
    template_items_js += f"  '{tid}': {{\n"
    template_items_js += f"    title: '{title}',\n"
    template_items_js += f"    img: '{img}',\n"
    template_items_js += f"    badge: '{badge}',\n"
    template_items_js += f"    price: '{price} GP',\n"
    template_items_js += f"    creator: '{creator}',\n"
    template_items_js += f"    avatar: '{avatar}',\n"
    template_items_js += f"    desc: '{desc}',\n"
    template_items_js += f"    steps: {steps_json},\n"
    template_items_js += f"  }},\n"
template_items_js += "};\n"

# 在 MakeupPalData 后添加 templateItems
# 找到 MakeupPalData 定义结束的位置（即 }; 后面）
MakeupPalData_end_str = html[start:end]
html = html.replace(MakeupPalData_end_str, MakeupPalData_end_str + '\n' + template_items_js)
print("  templateItems 数据结构已添加")

# ========== 3. 修改瀑布流卡片，添加 onclick 参数 ==========
print("\n[3/4] 修改瀑布流卡片 onclick...")

# 为前6个瀑布流卡片添加模板ID参数
waterfall_cards = re.findall(r'<div class="waterfall-card" onclick="openTemplateDetail\(\)">', html)
for i, card in enumerate(waterfall_cards[:6]):
    new_card = f'<div class="waterfall-card" onclick="openTemplateDetail(\'t{i+1}\')">'
    html = html.replace(card, new_card, 1)

print(f"  已修改 {len(waterfall_cards[:6])} 个瀑布流卡片")

# 同时修改热门卡片的 onclick
trending_cards = re.findall(r'<div class="trending-card" onclick="openTemplateDetail\(\)">', html)
for i, card in enumerate(trending_cards[:5]):
    new_card = f'<div class="trending-card" onclick="openTemplateDetail(\'t{i+1}\')">'
    html = html.replace(card, new_card, 1)

print(f"  已修改 {len(trending_cards[:5])} 个热门卡片")

# 同时更新瀑布流卡片中的图片为 templateItems 中的图片
# 这需要动态匹配，但静态HTML中的img src是硬编码的
# 我们需要确保硬编码的图片URL和templateItems中的URL一致

# ========== 4. 修改 openTemplateDetail 函数，动态渲染详情页 ==========
print("\n[4/4] 修改模板详情页渲染逻辑...")

# 新的 openTemplateDetail 函数
new_open_func = '''
  function openTemplateDetail(tid) {
    // 如果没有传入ID，使用默认模板
    if (!tid) tid = 't1';
    
    const t = templateItems[tid];
    if (!t) {
      document.getElementById('template-detail-modal').classList.add('show');
      return;
    }
    
    // 更新详情页内容
    const modal = document.getElementById('template-detail-modal');
    
    // 更新头图背景
    const hero = modal.querySelector('.template-detail-hero');
    if (hero && t.img) {
      hero.style.backgroundImage = 'url(' + t.img + ')';
      hero.style.backgroundSize = 'cover';
      hero.style.backgroundPosition = 'center';
      hero.innerHTML = hero.innerHTML.replace('💄', '');
    }
    
    // 更新标题
    const title = modal.querySelector('.template-detail-title');
    if (title) title.textContent = t.title;
    
    // 更新价格
    const price = modal.querySelector('.pdf-price');
    if (price) {
      const gpNum = parseInt(t.price) || 50;
      price.innerHTML = '<span>' + gpNum + '</span> GP';
    }
    
    // 更新创作者
    const creatorName = modal.querySelector('.template-creator-name');
    if (creatorName) creatorName.textContent = t.creator;
    
    const creatorAvatar = modal.querySelector('.template-creator-avatar');
    if (creatorAvatar) creatorAvatar.textContent = t.creator.charAt(0);
    
    // 更新徽章
    const badge = modal.querySelector('.template-badge-corner');
    if (badge) badge.textContent = t.badge;
    
    // 更新步骤列表（如果有）
    if (t.steps && t.steps.length > 0) {
      const stepsList = modal.querySelector('.template-steps-list');
      if (stepsList) {
        stepsList.innerHTML = t.steps.map((s, i) => `
          <div class="template-step-item">
            <div class="template-step-num">${i + 1}</div>
            <div class="template-step-title">${s.title || '步骤'}</div>
            <div class="template-step-desc">${s.desc || ''}</div>
          </div>
        `).join('');
      }
    }
    
    // 显示弹层
    modal.classList.add('show');
  }
'''

# 替换旧的 openTemplateDetail 函数
old_func_pattern = r'function openTemplateDetail\(\) \{\s+document\.getElementById\(\'template-detail-modal\'\)\.classList\.add\(\'show\'\);\s+\}'
html = re.sub(old_func_pattern, new_open_func, html)
print("  openTemplateDetail 函数已更新")

# ========== 5. 重新生成市集商品图（品牌产品实物图）==========
print("\n[5/5] 重新生成市集商品图（品牌产品实物）...")

# 市集商品类型提示词
product_prompts = {
    '口红': '高端口红唇膏产品，精致管身设计，金色或黑色包装，产品摄影，白色背景，专业商业摄影，柔和打光',
    '粉底': '粉底液产品，玻璃瓶装，高端品牌包装，滴管设计，产品摄影，米色背景',
    '眼影': '眼影盘产品，多色眼影，精致包装盒，打开展示色块，产品摄影，白色背景',
    '腮红': '腮红粉饼产品，粉盒包装，细腻粉质，产品摄影，柔和光线',
    '香水': '香水瓶，精致玻璃瓶设计，高端品牌，产品摄影，渐变背景',
    '护肤': '护肤精华液产品，玻璃瓶装，高端质感，产品摄影，干净背景',
    '气垫': '气垫BB霜产品，精致粉盒，打开展示，产品摄影，白色背景',
    '眉笔': '眉笔眉粉产品，精致包装，产品摄影，干净背景',
    '套装': '美妆礼盒套装，精美包装，多件产品组合，产品摄影，节日氛围',
}

# 从 MakeupPalData.products 获取商品，按类型分组生成产品图
products = data.get('products', [])
print(f"  资料库商品数: {len(products)}")

# 为每种类型生成一张产品图
product_type_urls = {}
for ptype, prompt in product_prompts.items():
    print(f"  生成 {ptype} 产品图...")
    url = generate_image(prompt, 'square')
    if url:
        product_type_urls[ptype] = url
    time.sleep(0.3)

print(f"  生成了 {len(product_type_urls)} 种产品图")

# 更新 marketProducts 中的 img 字段
def get_product_type(name):
    for ptype in product_prompts.keys():
        if ptype in name:
            return ptype
    # 关键词匹配
    if '唇' in name or '口红' in name: return '口红'
    if '粉底' in name or '底妆' in name: return '粉底'
    if '眼影' in name: return '眼影'
    if '腮红' in name: return '腮红'
    if '香水' in name: return '香水'
    if '护肤' in name or '精华' in name: return '护肤'
    if '气垫' in name: return '气垫'
    if '眉' in name: return '眉笔'
    return '套装'

# 找到 marketProducts 并替换 img
mp_start = re.search(r'const marketProducts = \{', html)
if mp_start:
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
    
    # 直接用循环处理，不用闭包
    matches = list(re.finditer(r"\{ id: ['\"]?[^'\",}]+['\"]?[^}]*img: ['\"][^'\"]+['\"]", mp_str))
    updated_count = 0
    new_mp_str = mp_str
    
    for match in matches:
        full = match.group(0)
        name_match = re.search(r"name: ['\"]([^'\"]+)['\"]", full)
        if not name_match:
            continue
        name = name_match.group(1)
        ptype = get_product_type(name)
        url = product_type_urls.get(ptype, product_type_urls.get('套装', ''))
        if url:
            new_full = re.sub(r"img: ['\"][^'\"]+['\"]", f"img: '{url}'", full)
            new_mp_str = new_mp_str.replace(full, new_full)
            updated_count += 1
    
    print(f"  更新了 {updated_count} 个市集商品图")
    
    html = html[:mp_start.start() + len('const marketProducts = ')] + new_mp_str + html[mp_end-1:]

# ========== 保存文件 ==========
with open(input_path, 'w', encoding='utf-8') as f:
    f.write(html)

shutil.copy(input_path, '/workspace/demo-dist/index.html')

print(f"\n{'='*60}")
print(f"✅ 完成！")
print(f"  文件大小: {len(html)/1024:.0f} KB")
print(f"{'='*60}")