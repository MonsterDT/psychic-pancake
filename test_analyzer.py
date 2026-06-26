#!/usr/bin/env python
import cv2
import numpy as np
from skin_analyzer.models import (
    AcneDetector,
    DarkSpotDetector,
    PoreDetector,
    WrinkleDetector,
    TextureAnalyzer,
    SkinToneAnalyzer,
    FaceDetector,
    SkinAnalysisPipeline
)


def create_test_skin_image():
    image = np.ones((400, 400, 3), dtype=np.uint8) * 180
    image[:, :, 0] = 150
    image[:, :, 1] = 170
    image[:, :, 2] = 200

    mask = np.ones((400, 400), dtype=np.uint8) * 255
    center_x, center_y = 200, 200
    y, x = np.ogrid[:400, :400]
    face_mask = (x - center_x) ** 2 + (y - center_y) ** 2 <= 150 ** 2
    mask[~face_mask] = 0

    for _ in range(10):
        px = center_x + np.random.randint(-80, 80)
        py = center_y + np.random.randint(-80, 80)
        if (px - center_x) ** 2 + (py - center_y) ** 2 < 120 ** 2:
            cv2.circle(image, (px, py), np.random.randint(3, 8), (40, 40, 180), -1)

    for _ in range(15):
        px = center_x + np.random.randint(-80, 80)
        py = center_y + np.random.randint(-80, 80)
        if (px - center_x) ** 2 + (py - center_y) ** 2 < 120 ** 2:
            cv2.circle(image, (px, py), np.random.randint(2, 5), (50, 50, 80), -1)

    for i in range(5):
        y_pos = center_y - 60 + i * 25
        for j in range(20):
            x_pos = center_x - 80 + j * 8
            if (x_pos - center_x) ** 2 + (y_pos - center_y) ** 2 < 120 ** 2:
                cv2.circle(image, (x_pos, y_pos), 1, (80, 80, 80), -1)

    for i in range(3):
        y_pos = center_y - 40 + i * 30
        cv2.line(image, (center_x - 70, y_pos), (center_x + 70, y_pos), (100, 100, 100), 1)

    return image, mask


def test_individual_detectors():
    print("=" * 60)
    print("测试各个皮肤分析模块")
    print("=" * 60)

    image, mask = create_test_skin_image()

    print("\n1. 测试痘痘检测 (AcneDetector)...")
    acne_detector = AcneDetector()
    acne_result = acne_detector.detect(image, mask)
    print(f"   检测到痘痘数量: {acne_result['count']}")
    print(f"   等级: {acne_result['level']}")
    print(f"   总面积: {acne_result['total_area']:.2f} 像素")
    print(f"   占比: {acne_result['ratio']*100:.2f}%")

    print("\n2. 测试色斑检测 (DarkSpotDetector)...")
    dark_spot_detector = DarkSpotDetector()
    dark_spot_result = dark_spot_detector.detect(image, mask)
    print(f"   检测到色斑数量: {dark_spot_result['count']}")
    print(f"   等级: {dark_spot_result['level']}")
    print(f"   总面积: {dark_spot_result['total_area']:.2f} 像素")
    print(f"   占比: {dark_spot_result['ratio']*100:.2f}%")

    print("\n3. 测试毛孔检测 (PoreDetector)...")
    pore_detector = PoreDetector()
    pore_result = pore_detector.detect(image, mask)
    print(f"   检测到毛孔数量: {pore_result['count']}")
    print(f"   等级: {pore_result['level']}")
    print(f"   密度: {pore_result['density']:.2f} 个/万像素")

    print("\n4. 测试皱纹检测 (WrinkleDetector)...")
    wrinkle_detector = WrinkleDetector()
    wrinkle_result = wrinkle_detector.detect(image, mask)
    print(f"   检测到皱纹数量: {wrinkle_result['count']}")
    print(f"   等级: {wrinkle_result['level']}")
    print(f"   总面积: {wrinkle_result['total_area']:.2f} 像素")
    print(f"   占比: {wrinkle_result['ratio']*100:.2f}%")

    print("\n5. 测试肤质分析 (TextureAnalyzer)...")
    texture_analyzer = TextureAnalyzer()
    texture_result = texture_analyzer.analyze(image, mask)
    print(f"   等级: {texture_result['level']}")
    print(f"   对比度: {texture_result['contrast']:.2f}")
    print(f"   同质性: {texture_result['homogeneity']:.2f}")
    print(f"   能量: {texture_result['energy']:.2f}")
    print(f"   相关性: {texture_result['correlation']:.2f}")

    print("\n6. 测试肤色分析 (SkinToneAnalyzer)...")
    skin_tone_analyzer = SkinToneAnalyzer()
    skin_tone_result = skin_tone_analyzer.analyze(image, mask)
    print(f"   等级: {skin_tone_result['level']}")
    print(f"   肤色类型: {skin_tone_result['tone']}")
    print(f"   亮度均值 (L*): {skin_tone_result['l_mean']:.2f}")
    print(f"   不均匀度: {skin_tone_result['unevenness']:.2f}")

    print("\n" + "=" * 60)
    print("✅ 所有模块测试完成！")
    print("=" * 60)

    cv2.imwrite('/workspace/test_skin_image.jpg', image)
    print("\n测试图像已保存为: test_skin_image.jpg")


def test_pipeline_with_real_face():
    print("\n" + "=" * 60)
    print("测试完整分析流程 (使用真实人脸检测)")
    print("=" * 60)

    face_detector = FaceDetector()

    test_image = np.ones((600, 600, 3), dtype=np.uint8) * 200
    test_image[:, :, 0] = 170
    test_image[:, :, 1] = 190
    test_image[:, :, 2] = 220

    face_center_x, face_center_y = 300, 280
    face_radius = 120

    y, x = np.ogrid[:600, :600]
    face_mask = (x - face_center_x) ** 2 + (y - face_center_y) ** 2 <= face_radius ** 2
    for c in range(3):
        test_image[:, :, c][face_mask] = [150, 180, 210][c]

    left_eye_x, left_eye_y = 260, 250
    right_eye_x, right_eye_y = 340, 250
    cv2.ellipse(test_image, (left_eye_x, left_eye_y), (15, 10), 0, 0, 360, (80, 80, 80), -1)
    cv2.ellipse(test_image, (right_eye_x, right_eye_y), (15, 10), 0, 0, 360, (80, 80, 80), -1)

    cv2.ellipse(test_image, (300, 300), (10, 15), 0, 0, 360, (140, 160, 190), -1)

    cv2.ellipse(test_image, (300, 340), (25, 12), 0, 0, 360, (120, 100, 120), -1)

    faces = face_detector.detect_face(test_image)
    print(f"检测到人脸数量: {len(faces)}")

    if len(faces) > 0:
        pipeline = SkinAnalysisPipeline()
        result = pipeline.analyze(test_image)

        if result['success']:
            print("\n✅ 完整流程测试成功！")
            print(f"综合评分: {result['overall_score']}")
            print(f"整体评价: {result['report']['overall_evaluation']}")
            print(f"整体等级: {result['report']['overall_level']}")

            print("\n各项得分:")
            for cat, data in result['report']['category_scores'].items():
                print(f"  {cat}: {data['score']}分 ({data['level']})")

            if result['report']['suggestions']:
                print(f"\n护肤建议数量: {len(result['report']['suggestions'])}")

            cv2.imwrite('/workspace/test_pipeline_result.jpg', result['result_image'])
            print("\n分析结果图已保存为: test_pipeline_result.jpg")
        else:
            print(f"❌ 分析失败: {result['message']}")
    else:
        print("⚠️  未能检测到人脸（Haar级联对合成图像效果有限）")
        print("    建议使用真实人脸照片进行测试")


if __name__ == "__main__":
    test_individual_detectors()
    test_pipeline_with_real_face()
