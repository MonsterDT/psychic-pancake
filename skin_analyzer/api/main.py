import cv2
import numpy as np
from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, JSONResponse
import base64
import io
from PIL import Image
import os

from skin_analyzer.models import SkinAnalysisPipeline

app = FastAPI(title="AI Skin Analyzer API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

pipeline = SkinAnalysisPipeline()

STATIC_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "static"))
app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")


def read_image_file(file) -> np.ndarray:
    image = Image.open(io.BytesIO(file))
    image = image.convert('RGB')
    image_np = np.array(image)
    image_bgr = cv2.cvtColor(image_np, cv2.COLOR_RGB2BGR)
    return image_bgr


def encode_image_to_base64(image_bgr: np.ndarray) -> str:
    _, buffer = cv2.imencode('.jpg', image_bgr)
    img_base64 = base64.b64encode(buffer).decode('utf-8')
    return img_base64


@app.get("/")
async def root():
    return FileResponse(os.path.join(STATIC_DIR, "index.html"))


@app.post("/api/analyze")
async def analyze_skin(file: UploadFile = File(...)):
    try:
        contents = await file.read()
        image = read_image_file(contents)

        result = pipeline.analyze(image)

        if not result['success']:
            raise HTTPException(status_code=400, detail=result['message'])

        result_image_base64 = encode_image_to_base64(result['result_image'])

        response = {
            'success': True,
            'overall_score': result['overall_score'],
            'face_bbox': result['face_bbox'],
            'acne': {
                'count': result['acne']['count'],
                'level': result['acne']['level'],
                'total_area': result['acne']['total_area'],
                'ratio': result['acne']['ratio'],
                'spots': result['acne']['spots'][:20]
            },
            'dark_spots': {
                'count': result['dark_spots']['count'],
                'level': result['dark_spots']['level'],
                'total_area': result['dark_spots']['total_area'],
                'ratio': result['dark_spots']['ratio'],
                'spots': result['dark_spots']['spots'][:20]
            },
            'pores': {
                'count': result['pores']['count'],
                'level': result['pores']['level'],
                'density': result['pores']['density'],
                'pores': result['pores']['pores'][:50]
            },
            'wrinkles': {
                'count': result['wrinkles']['count'],
                'level': result['wrinkles']['level'],
                'total_area': result['wrinkles']['total_area'],
                'ratio': result['wrinkles']['ratio'],
                'wrinkles': result['wrinkles']['wrinkles'][:20]
            },
            'texture': {
                'level': result['texture']['level'],
                'contrast': result['texture']['contrast'],
                'homogeneity': result['texture']['homogeneity'],
                'energy': result['texture']['energy'],
                'correlation': result['texture']['correlation']
            },
            'skin_tone': {
                'level': result['skin_tone']['level'],
                'tone': result['skin_tone']['tone'],
                'l_mean': result['skin_tone']['l_mean'],
                'unevenness': result['skin_tone']['unevenness']
            },
            'report': result['report'],
            'result_image': f"data:image/jpeg;base64,{result_image_base64}"
        }

        return JSONResponse(content=response)

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/api/health")
async def health_check():
    return {"status": "healthy", "message": "Skin Analyzer API is running"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
