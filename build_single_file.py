import base64, os

html_path = '/workspace/makeuppal-demo-v3.1.0.html'
output_path = '/workspace/makeuppal-demo-v3.1.0-standalone.html'
assets_dir = '/workspace/ui-design/assets'

with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

img_files = ['hero-banner.jpg', 'feature-scan.jpg', 'feature-ai.jpg',
             'feed-card-1.jpg', 'feed-card-2.jpg', 'product-1.jpg',
             'product-2.jpg', 'product-3.jpg', 'product-4.jpg',
             'mirror-camera.jpg']

for img_file in img_files:
    img_path = os.path.join(assets_dir, img_file)
    if os.path.exists(img_path):
        with open(img_path, 'rb') as f:
            img_data = base64.b64encode(f.read()).decode('utf-8')
        data_uri = f'data:image/jpeg;base64,{img_data}'
        old_src = f'ui-design/assets/{img_file}'
        content = content.replace(old_src, data_uri)
        print(f"  OK {img_file}")
    else:
        print(f"  MISSING {img_file}")

with open(output_path, 'w', encoding='utf-8') as f:
    f.write(content)

size = os.path.getsize(output_path) / 1024 / 1024
print(f"\nDone! {output_path} ({size:.1f} MB)")
print(f"Base64 images: {content.count('data:image/jpeg;base64')}")
