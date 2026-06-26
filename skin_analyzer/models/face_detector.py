import cv2
import numpy as np
import os


class FaceDetector:
    def __init__(self):
        self.face_cascade = cv2.CascadeClassifier(
            cv2.data.haarcascades + 'haarcascade_frontalface_default.xml'
        )
        self.eye_cascade = cv2.CascadeClassifier(
            cv2.data.haarcascades + 'haarcascade_eye.xml'
        )
        self.mouth_cascade = cv2.CascadeClassifier(
            cv2.data.haarcascades + 'haarcascade_smile.xml'
        )

    def detect_face(self, image):
        gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
        faces = self.face_cascade.detectMultiScale(
            gray,
            scaleFactor=1.1,
            minNeighbors=5,
            minSize=(30, 30)
        )
        return faces

    def get_face_bbox(self, image):
        faces = self.detect_face(image)
        if len(faces) == 0:
            return None

        x, y, w, h = max(faces, key=lambda f: f[2] * f[3])
        return (x, y, x + w, y + h)

    def get_skin_mask(self, image, face_bbox=None):
        h, w = image.shape[:2]

        if face_bbox is None:
            face_bbox = self.get_face_bbox(image)
            if face_bbox is None:
                return np.ones((h, w), dtype=np.uint8) * 255

        x1, y1, x2, y2 = face_bbox
        face_img = image[y1:y2, x1:x2]

        ycrcb = cv2.cvtColor(face_img, cv2.COLOR_BGR2YCrCb)

        lower = np.array([0, 133, 77], dtype=np.uint8)
        upper = np.array([255, 173, 127], dtype=np.uint8)

        skin_mask_face = cv2.inRange(ycrcb, lower, upper)

        hsv = cv2.cvtColor(face_img, cv2.COLOR_BGR2HSV)
        lower_hsv = np.array([0, 40, 40], dtype=np.uint8)
        upper_hsv = np.array([25, 255, 255], dtype=np.uint8)
        skin_mask_hsv = cv2.inRange(hsv, lower_hsv, upper_hsv)

        combined_face = cv2.bitwise_and(skin_mask_face, skin_mask_hsv)

        kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5))
        combined_face = cv2.morphologyEx(combined_face, cv2.MORPH_CLOSE, kernel, iterations=2)
        combined_face = cv2.morphologyEx(combined_face, cv2.MORPH_OPEN, kernel, iterations=1)

        gray_face = cv2.cvtColor(face_img, cv2.COLOR_BGR2GRAY)
        eyes = self.eye_cascade.detectMultiScale(gray_face, 1.1, 4)
        for (ex, ey, ew, eh) in eyes[:2]:
            cv2.rectangle(combined_face, (ex, ey), (ex + ew, ey + eh), 0, -1)

        mouths = self.mouth_cascade.detectMultiScale(gray_face, 1.5, 10)
        for (mx, my, mw, mh) in mouths[:1]:
            if my > (y2 - y1) * 0.5:
                cv2.rectangle(combined_face, (mx, my), (mx + mw, my + mh), 0, -1)

        full_mask = np.zeros((h, w), dtype=np.uint8)
        full_mask[y1:y2, x1:x2] = combined_face

        return full_mask

    def extract_skin_region(self, image):
        face_bbox = self.get_face_bbox(image)
        if face_bbox is None:
            return None, None, None

        mask = self.get_skin_mask(image, face_bbox)
        skin_region = cv2.bitwise_and(image, image, mask=mask)

        return skin_region, mask, face_bbox
