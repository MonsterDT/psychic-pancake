import cv2
import numpy as np
from .face_detector import FaceDetector
from .skin_analyzer import (
    AcneDetector,
    DarkSpotDetector,
    PoreDetector,
    WrinkleDetector,
    TextureAnalyzer,
    SkinToneAnalyzer
)


class SkinAnalysisPipeline:
    def __init__(self):
        self.face_detector = FaceDetector()
        self.acne_detector = AcneDetector()
        self.dark_spot_detector = DarkSpotDetector()
        self.pore_detector = PoreDetector()
        self.wrinkle_detector = WrinkleDetector()
        self.texture_analyzer = TextureAnalyzer()
        self.skin_tone_analyzer = SkinToneAnalyzer()

    def analyze(self, image):
        skin_region, mask, face_bbox = self.face_detector.extract_skin_region(image)

        if skin_region is None:
            return {
                'success': False,
                'message': 'No face detected in the image'
            }

        acne_result = self.acne_detector.detect(skin_region, mask)
        dark_spot_result = self.dark_spot_detector.detect(skin_region, mask)
        pore_result = self.pore_detector.detect(skin_region, mask)
        wrinkle_result = self.wrinkle_detector.detect(skin_region, mask)
        texture_result = self.texture_analyzer.analyze(skin_region, mask)
        skin_tone_result = self.skin_tone_analyzer.analyze(skin_region, mask)

        overall_score = self._calculate_overall_score(
            acne_result,
            dark_spot_result,
            pore_result,
            wrinkle_result,
            texture_result,
            skin_tone_result
        )

        result_image = self._draw_results(
            image,
            acne_result,
            dark_spot_result,
            pore_result,
            wrinkle_result,
            face_bbox
        )

        report = self._generate_report(
            acne_result,
            dark_spot_result,
            pore_result,
            wrinkle_result,
            texture_result,
            skin_tone_result,
            overall_score
        )

        return {
            'success': True,
            'overall_score': overall_score,
            'face_detected': True,
            'face_bbox': {
                'x': face_bbox[0],
                'y': face_bbox[1],
                'width': face_bbox[2] - face_bbox[0],
                'height': face_bbox[3] - face_bbox[1]
            },
            'acne': acne_result,
            'dark_spots': dark_spot_result,
            'pores': pore_result,
            'wrinkles': wrinkle_result,
            'texture': texture_result,
            'skin_tone': skin_tone_result,
            'report': report,
            'result_image': result_image
        }

    def _calculate_overall_score(self, acne, dark_spots, pores, wrinkles, texture, skin_tone):
        level_scores = {
            'excellent': 95,
            'good': 80,
            'fair': 60,
            'poor': 40
        }

        weights = {
            'acne': 0.25,
            'dark_spots': 0.20,
            'pores': 0.15,
            'wrinkles': 0.20,
            'texture': 0.10,
            'skin_tone': 0.10
        }

        scores = {
            'acne': level_scores[acne['level']],
            'dark_spots': level_scores[dark_spots['level']],
            'pores': level_scores[pores['level']],
            'wrinkles': level_scores[wrinkles['level']],
            'texture': level_scores[texture['level']],
            'skin_tone': level_scores[skin_tone['level']]
        }

        overall = sum(scores[k] * weights[k] for k in weights)

        return round(overall, 1)

    def _generate_report(self, acne, dark_spots, pores, wrinkles, texture, skin_tone, overall_score):
        level_descriptions = {
            'excellent': '优秀',
            'good': '良好',
            'fair': '一般',
            'poor': '较差'
        }

        suggestions = []

        if acne['level'] in ['fair', 'poor']:
            suggestions.append({
                'category': '痘痘护理',
                'tips': [
                    '使用温和的洁面产品，避免过度清洁',
                    '选择含有水杨酸或过氧化苯甲酰的护肤品',
                    '避免用手挤压痘痘，以免感染和留疤',
                    '保持饮食清淡，减少辛辣油腻食物摄入'
                ]
            })

        if dark_spots['level'] in ['fair', 'poor']:
            suggestions.append({
                'category': '色斑护理',
                'tips': [
                    '每天做好防晒，使用SPF30+的防晒霜',
                    '使用含有维生素C、烟酰胺的美白产品',
                    '可以考虑使用含有果酸或水杨酸的去角质产品',
                    '避免长时间暴露在阳光下'
                ]
            })

        if pores['level'] in ['fair', 'poor']:
            suggestions.append({
                'category': '毛孔护理',
                'tips': [
                    '定期清洁毛孔，使用泥膜吸附油脂',
                    '使用含有水杨酸的产品帮助疏通毛孔',
                    '注意控油保湿，维持水油平衡',
                    '避免使用过于油腻的护肤品'
                ]
            })

        if wrinkles['level'] in ['fair', 'poor']:
            suggestions.append({
                'category': '抗皱护理',
                'tips': [
                    '使用含有视黄醇的抗老产品',
                    '做好防晒，紫外线是皱纹的主要成因',
                    '使用保湿产品，保持皮肤水润',
                    '可以考虑使用含有胜肽的抗老产品'
                ]
            })

        if texture['level'] in ['fair', 'poor']:
            suggestions.append({
                'category': '肤质改善',
                'tips': [
                    '定期去角质，促进皮肤新陈代谢',
                    '使用含有果酸或水杨酸的产品',
                    '做好保湿，使用含有玻尿酸的产品',
                    '保证充足睡眠，促进皮肤修复'
                ]
            })

        if skin_tone['level'] in ['fair', 'poor']:
            suggestions.append({
                'category': '肤色均匀',
                'tips': [
                    '做好防晒，防止肤色不均加重',
                    '使用含有维生素C的美白产品',
                    '可以考虑使用烟酰胺产品改善肤色',
                    '保持规律作息，促进血液循环'
                ]
            })

        if overall_score >= 85:
            overall_evaluation = '您的皮肤状态非常好，请继续保持良好的护肤习惯！'
        elif overall_score >= 70:
            overall_evaluation = '您的皮肤状态良好，针对问题部位适当护理会更好。'
        elif overall_score >= 50:
            overall_evaluation = '您的皮肤状态一般，建议针对性地进行护理改善。'
        else:
            overall_evaluation = '您的皮肤状态需要重点关注，建议咨询专业皮肤科医生。'

        return {
            'overall_evaluation': overall_evaluation,
            'overall_level': self._score_to_level(overall_score),
            'category_scores': {
                'acne': {
                    'score': self._level_to_score(acne['level']),
                    'level': level_descriptions[acne['level']],
                    'count': acne['count']
                },
                'dark_spots': {
                    'score': self._level_to_score(dark_spots['level']),
                    'level': level_descriptions[dark_spots['level']],
                    'count': dark_spots['count']
                },
                'pores': {
                    'score': self._level_to_score(pores['level']),
                    'level': level_descriptions[pores['level']],
                    'count': pores['count']
                },
                'wrinkles': {
                    'score': self._level_to_score(wrinkles['level']),
                    'level': level_descriptions[wrinkles['level']],
                    'count': wrinkles['count']
                },
                'texture': {
                    'score': self._level_to_score(texture['level']),
                    'level': level_descriptions[texture['level']]
                },
                'skin_tone': {
                    'score': self._level_to_score(skin_tone['level']),
                    'level': level_descriptions[skin_tone['level']],
                    'tone': skin_tone['tone']
                }
            },
            'suggestions': suggestions
        }

    def _level_to_score(self, level):
        scores = {
            'excellent': 95,
            'good': 80,
            'fair': 60,
            'poor': 40
        }
        return scores[level]

    def _score_to_level(self, score):
        if score >= 85:
            return '优秀'
        elif score >= 70:
            return '良好'
        elif score >= 50:
            return '一般'
        else:
            return '较差'

    def _draw_results(self, image, acne, dark_spots, pores, wrinkles, face_bbox):
        result = image.copy()

        x1, y1, x2, y2 = face_bbox
        cv2.rectangle(result, (x1, y1), (x2, y2), (0, 255, 0), 2)

        for spot in acne['spots']:
            x, y = spot['x'], spot['y']
            r = max(spot['width'], spot['height']) // 2 + 2
            if spot['severity'] == 'severe':
                color = (0, 0, 255)
            elif spot['severity'] == 'moderate':
                color = (0, 165, 255)
            else:
                color = (255, 255, 0)
            cv2.circle(result, (x, y), r, color, 2)

        for spot in dark_spots['spots']:
            x, y = spot['x'], spot['y']
            r = max(spot['width'], spot['height']) // 2 + 2
            if spot['severity'] == 'severe':
                color = (128, 0, 128)
            elif spot['severity'] == 'moderate':
                color = (139, 69, 19)
            else:
                color = (160, 82, 45)
            cv2.circle(result, (x, y), r, color, 2)

        for pore in pores['pores'][:50]:
            x, y = pore['x'], pore['y']
            r = pore['radius'] + 1
            cv2.circle(result, (x, y), r, (128, 128, 128), 1)

        for wrinkle in wrinkles['wrinkles']:
            x, y = wrinkle['x'], wrinkle['y']
            if wrinkle['severity'] == 'deep':
                color = (0, 0, 139)
            elif wrinkle['severity'] == 'moderate':
                color = (0, 0, 255)
            else:
                color = (255, 0, 0)
            cv2.rectangle(
                result,
                (x - wrinkle['width'] // 2, y - wrinkle['height'] // 2),
                (x + wrinkle['width'] // 2, y + wrinkle['height'] // 2),
                color,
                1
            )

        return result
