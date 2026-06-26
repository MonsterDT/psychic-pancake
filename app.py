#!/usr/bin/env python
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from skin_analyzer.api.main import app
import uvicorn

if __name__ == "__main__":
    uvicorn.run(
        "skin_analyzer.api.main:app",
        host="0.0.0.0",
        port=8000,
        reload=True
    )
