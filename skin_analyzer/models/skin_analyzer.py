import cv2
import numpy as np
from skimage import feature, measure


class AcneDetector:
    def __init__(self):
        self.min_area = 10
        self.max_area = 500

    def detect(self, skin_image, mask):
        hsv = cv2.cvtColor(skin_image, cv2.COLOR_BGR2HSV)

        lower_red1 = np.array([0, 50, 50])
        upper_red1 = np.array([10, 255, 255])
        lower_red2 = np.array([170, 50, 50])
        upper_red2 = np.array([180, 255, 255])

        mask1 = cv2.inRange(hsv, lower_red1, upper_red1)
        mask2 = cv2.inRange(hsv, lower_red2, upper_red2)
        red_mask = cv2.bitwise_or(mask1, mask2)

        red_mask = cv2.bitwise_and(red_mask, mask)

        lab = cv2.cvtColor(skin_image, cv2.COLOR_BGR2LAB)
        l_channel, a_channel, b_channel = cv2.split(lab)

        a_normalized = cv2.normalize(a_channel, None, 0, 255, cv2.NORM_MINMAX)
        _, a_thresh = cv2.threshold(a_normalized, 140, 255, cv2.THRESH_BINARY)
        a_thresh = cv2.bitwise_and(a_thresh, mask)

        combined = cv2.bitwise_or(red_mask, a_thresh)

        kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (3, 3))
        combined = cv2.morphologyEx(combined, cv2.MORPH_OPEN, kernel, iterations=1)
        combined = cv2.morphologyEx(combined, cv2.MORPH_CLOSE, kernel, iterations=2)

        contours, _ = cv2.findContours(combined, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

        acne_spots = []
        for contour in contours:
            area = cv2.contourArea(contour)
            if self.min_area < area < self.max_area:
                x, y, w, h = cv2.boundingRect(contour)
                circularity = 4 * np.pi * area / (cv2.arcLength(contour, True) ** 2)
                if circularity > 0.3:
                    acne_spots.append({
                        'x': int(x + w / 2),
                        'y': int(y + h / 2),
                        'width': int(w),
                        'height': int(h),
                        'area': float(area),
                        'severity': self._calculate_severity(area)
                    })

        total_skin_area = np.sum(mask > 0)
        acne_area = sum(spot['area'] for spot in acne_spots)
        acne_ratio = acne_area / total_skin_area if total_skin_area > 0 else 0

        return {
            'count': len(acne_spots),
            'spots': acne_spots,
            'total_area': float(acne_area),
            'ratio': float(acne_ratio),
            'level': self._get_level(acne_ratio)
        }

    def _calculate_severity(self, area):
        if area < 50:
            return 'mild'
        elif area < 150:
            return 'moderate'
        else:
            return 'severe'

    def _get_level(self, ratio):
        if ratio < 0.005:
            return 'excellent'
        elif ratio < 0.02:
            return 'good'
        elif ratio < 0.05:
            return 'fair'
        else:
            return 'poor'


class DarkSpotDetector:
    def __init__(self):
        self.min_area = 5
        self.max_area = 300

    def detect(self, skin_image, mask):
        lab = cv2.cvtColor(skin_image, cv2.COLOR_BGR2LAB)
        l_channel = lab[:, :, 0]

        l_masked = cv2.bitwise_and(l_channel, mask)

        clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8, 8))
        l_enhanced = clahe.apply(l_masked)

        _, dark_thresh = cv2.threshold(l_enhanced, 80, 255, cv2.THRESH_BINARY_INV)
        dark_thresh = cv2.bitwise_and(dark_thresh, mask)

        ycrcb = cv2.cvtColor(skin_image, cv2.COLOR_BGR2YCrCb)
        cr_channel = ycrcb[:, :, 1]
        cb_channel = ycrcb[:, :, 2]

        melanin_mask = cv2.inRange(ycrcb, np.array([0, 133, 77]), np.array([255, 173, 127]))
        melanin_mask = cv2.bitwise_and(melanin_mask, mask)

        combined = cv2.bitwise_and(dark_thresh, melanin_mask)

        kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (2, 2))
        combined = cv2.morphologyEx(combined, cv2.MORPH_OPEN, kernel, iterations=1)
        combined = cv2.morphologyEx(combined, cv2.MORPH_CLOSE, kernel, iterations=1)

        contours, _ = cv2.findContours(combined, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

        dark_spots = []
        for contour in contours:
            area = cv2.contourArea(contour)
            if self.min_area < area < self.max_area:
                x, y, w, h = cv2.boundingRect(contour)
                dark_spots.append({
                    'x': int(x + w / 2),
                    'y': int(y + h / 2),
                    'width': int(w),
                    'height': int(h),
                    'area': float(area),
                    'severity': self._calculate_severity(area)
                })

        total_skin_area = np.sum(mask > 0)
        dark_area = sum(spot['area'] for spot in dark_spots)
        dark_ratio = dark_area / total_skin_area if total_skin_area > 0 else 0

        return {
            'count': len(dark_spots),
            'spots': dark_spots,
            'total_area': float(dark_area),
            'ratio': float(dark_ratio),
            'level': self._get_level(dark_ratio)
        }

    def _calculate_severity(self, area):
        if area < 30:
            return 'mild'
        elif area < 100:
            return 'moderate'
        else:
            return 'severe'

    def _get_level(self, ratio):
        if ratio < 0.003:
            return 'excellent'
        elif ratio < 0.015:
            return 'good'
        elif ratio < 0.04:
            return 'fair'
        else:
            return 'poor'


class PoreDetector:
    def __init__(self):
        self.min_radius = 2
        self.max_radius = 10

    def detect(self, skin_image, mask):
        gray = cv2.cvtColor(skin_image, cv2.COLOR_BGR2GRAY)
        gray = cv2.bitwise_and(gray, mask)

        clahe = cv2.createCLAHE(clipLimit=3.0, tileGridSize=(8, 8))
        enhanced = clahe.apply(gray)

        blurred = cv2.GaussianBlur(enhanced, (5, 5), 0)

        circles = cv2.HoughCircles(
            blurred,
            cv2.HOUGH_GRADIENT,
            dp=1,
            minDist=8,
            param1=50,
            param2=20,
            minRadius=self.min_radius,
            maxRadius=self.max_radius
        )

        pores = []
        if circles is not None:
            circles = np.round(circles[0, :]).astype("int")
            for (x, y, r) in circles:
                if mask[y, x] > 0:
                    pores.append({
                        'x': int(x),
                        'y': int(y),
                        'radius': int(r),
                        'area': float(np.pi * r * r)
                    })

        total_skin_area = np.sum(mask > 0)
        pore_area = sum(pore['area'] for pore in pores)
        pore_density = len(pores) / (total_skin_area / 10000) if total_skin_area > 0 else 0

        return {
            'count': len(pores),
            'pores': pores,
            'total_area': float(pore_area),
            'density': float(pore_density),
            'level': self._get_level(pore_density)
        }

    def _get_level(self, density):
        if density < 20:
            return 'excellent'
        elif density < 50:
            return 'good'
        elif density < 100:
            return 'fair'
        else:
            return 'poor'


class WrinkleDetector:
    def __init__(self):
        self.min_length = 20

    def detect(self, skin_image, mask):
        gray = cv2.cvtColor(skin_image, cv2.COLOR_BGR2GRAY)
        gray = cv2.bitwise_and(gray, mask)

        kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (15, 15))
        blackhat = cv2.morphologyEx(gray, cv2.MORPH_BLACKHAT, kernel)

        _, binary = cv2.threshold(blackhat, 20, 255, cv2.THRESH_BINARY)
        binary = cv2.bitwise_and(binary, mask)

        kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (1, 3))
        binary = cv2.morphologyEx(binary, cv2.MORPH_OPEN, kernel, iterations=1)

        skeleton = self._skeletonize(binary)

        num_labels, labels, stats, centroids = cv2.connectedComponentsWithStats(skeleton, connectivity=8)

        wrinkles = []
        for i in range(1, num_labels):
            area = stats[i, cv2.CC_STAT_AREA]
            if area > self.min_length:
                x = stats[i, cv2.CC_STAT_LEFT]
                y = stats[i, cv2.CC_STAT_TOP]
                w = stats[i, cv2.CC_STAT_WIDTH]
                h = stats[i, cv2.CC_STAT_HEIGHT]
                length = max(w, h)
                wrinkles.append({
                    'x': int(x + w / 2),
                    'y': int(y + h / 2),
                    'width': int(w),
                    'height': int(h),
                    'length': float(length),
                    'area': float(area),
                    'severity': self._calculate_severity(length, area)
                })

        total_skin_area = np.sum(mask > 0)
        wrinkle_area = sum(w['area'] for w in wrinkles)
        wrinkle_ratio = wrinkle_area / total_skin_area if total_skin_area > 0 else 0

        return {
            'count': len(wrinkles),
            'wrinkles': wrinkles,
            'total_area': float(wrinkle_area),
            'ratio': float(wrinkle_ratio),
            'level': self._get_level(wrinkle_ratio)
        }

    def _skeletonize(self, image):
        size = np.size(image)
        skel = np.zeros(image.shape, np.uint8)

        ret, img = cv2.threshold(image, 127, 255, 0)
        element = cv2.getStructuringElement(cv2.MORPH_CROSS, (3, 3))
        done = False

        while not done:
            eroded = cv2.erode(img, element)
            temp = cv2.dilate(eroded, element)
            temp = cv2.subtract(img, temp)
            skel = cv2.bitwise_or(skel, temp)
            img = eroded.copy()

            zeros = size - cv2.countNonZero(img)
            if zeros == size:
                done = True

        return skel

    def _calculate_severity(self, length, area):
        if length < 40:
            return 'fine'
        elif length < 80:
            return 'moderate'
        else:
            return 'deep'

    def _get_level(self, ratio):
        if ratio < 0.002:
            return 'excellent'
        elif ratio < 0.01:
            return 'good'
        elif ratio < 0.03:
            return 'fair'
        else:
            return 'poor'


class TextureAnalyzer:
    def analyze(self, skin_image, mask):
        gray = cv2.cvtColor(skin_image, cv2.COLOR_BGR2GRAY)
        gray = cv2.bitwise_and(gray, mask)

        glcm = feature.graycomatrix(
            gray,
            distances=[1],
            angles=[0, np.pi / 4, np.pi / 2, 3 * np.pi / 4],
            levels=256,
            symmetric=True,
            normed=True
        )

        contrast = feature.graycoprops(glcm, 'contrast')[0, 0]
        homogeneity = feature.graycoprops(glcm, 'homogeneity')[0, 0]
        energy = feature.graycoprops(glcm, 'energy')[0, 0]
        correlation = feature.graycoprops(glcm, 'correlation')[0, 0]

        lbp = feature.local_binary_pattern(gray, P=8, R=1, method='uniform')
        lbp_mean = np.mean(lbp[mask > 0])
        lbp_std = np.std(lbp[mask > 0])

        return {
            'contrast': float(contrast),
            'homogeneity': float(homogeneity),
            'energy': float(energy),
            'correlation': float(correlation),
            'lbp_mean': float(lbp_mean),
            'lbp_std': float(lbp_std),
            'level': self._get_level(homogeneity, contrast)
        }

    def _get_level(self, homogeneity, contrast):
        score = homogeneity * 100 - contrast
        if score > 80:
            return 'excellent'
        elif score > 60:
            return 'good'
        elif score > 40:
            return 'fair'
        else:
            return 'poor'


class SkinToneAnalyzer:
    def analyze(self, skin_image, mask):
        lab = cv2.cvtColor(skin_image, cv2.COLOR_BGR2LAB)
        l_channel = lab[:, :, 0]
        a_channel = lab[:, :, 1]
        b_channel = lab[:, :, 2]

        l_mean = np.mean(l_channel[mask > 0])
        a_mean = np.mean(a_channel[mask > 0])
        b_mean = np.mean(b_channel[mask > 0])

        l_std = np.std(l_channel[mask > 0])
        a_std = np.std(a_channel[mask > 0])
        b_std = np.std(b_channel[mask > 0])

        unevenness = (l_std + a_std + b_std) / 3

        return {
            'l_mean': float(l_mean),
            'a_mean': float(a_mean),
            'b_mean': float(b_mean),
            'unevenness': float(unevenness),
            'tone': self._get_tone(l_mean),
            'level': self._get_level(unevenness)
        }

    def _get_tone(self, l_mean):
        if l_mean > 200:
            return 'fair'
        elif l_mean > 170:
            return 'light'
        elif l_mean > 140:
            return 'medium'
        elif l_mean > 110:
            return 'tan'
        else:
            return 'dark'

    def _get_level(self, unevenness):
        if unevenness < 10:
            return 'excellent'
        elif unevenness < 20:
            return 'good'
        elif unevenness < 35:
            return 'fair'
        else:
            return 'poor'
