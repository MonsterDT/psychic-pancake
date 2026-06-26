import cv2
import numpy as np
import requests
import base64

image = np.ones((500, 500, 3), dtype=np.uint8) * 200
image[:, :, 0] = 170
image[:, :, 1] = 190
image[:, :, 2] = 220

face_center_x, face_center_y = 250, 230
face_radius = 100

y, x = np.ogrid[:500, :500]
face_mask = (x - face_center_x) ** 2 + (y - face_center_y) ** 2 <= face_radius ** 2
for c in range(3):
    image[:, :, c][face_mask] = [150, 180, 210][c]

left_eye_x, left_eye_y = 220, 200
right_eye_x, right_eye_y = 280, 200
cv2.ellipse(image, (left_eye_x, left_eye_y), (12, 8), 0, 0, 360, (80, 80, 80), -1)
cv2.ellipse(image, (right_eye_x, right_eye_y), (12, 8), 0, 0, 360, (80, 80, 80), -1)

cv2.ellipse(image, (250, 250), (8, 12), 0, 0, 360, (140, 160, 190), -1)

cv2.ellipse(image, (250, 280), (20, 10), 0, 0, 360, (120, 100, 120), -1)

_, img_encoded = cv2.imencode('.jpg', image)
img_bytes = img_encoded.tobytes()

print("正在测试 /api/analyze 接口...")
try:
    response = requests.post(
        'http://localhost:8000/api/analyze',
        files={'file': ('test.jpg', img_bytes, 'image/jpeg')}
    )
    print(f"状态码: {response.status_code}")
    if response.status_code == 200:
        data = response.json()
        print(f"✅ 分析成功！")
        print(f"综合评分: {data.get('overall_score')}")
        print(f"检测到痘痘: {data.get('acne', {}).get('count', 0)} 个")
        print(f"检测到色斑: {data.get('dark_spots', {}).get('count', 0)} 个")
        print(f"检测到毛孔: {data.get('pores', {}).get('count', 0)} 个")
        print(f"检测到皱纹: {data.get('wrinkles', {}).get('count', 0)} 条")
    else:
        print(f"❌ 错误: {response.text}")
except Exception as e:
    print(f"❌ 请求失败: {e}")
