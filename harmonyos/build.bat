@echo off
chcp 65001 >nul
echo ============================================
echo     妆伴 MakeupPal - 鸿蒙应用构建脚本
echo ============================================
echo.

set "PROJECT_DIR=%~dp0"
set "BUILD_SUCCESS=0"

echo [1/4] 检查 Node.js 环境...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: 未检测到 Node.js，请先安装 Node.js (推荐 18+)
    echo 下载地址: https://nodejs.org/
    pause
    exit /b 1
)
for /f "tokens=1,2" %%a in ('node --version') do set "NODE_VERSION=%%a"
echo OK: Node.js %NODE_VERSION%

echo.
echo [2/4] 检查 Hvigor 构建工具...
where hvigorw >nul 2>&1
if %errorlevel% neq 0 (
    echo WARNING: 未检测到 hvigorw，尝试使用 npm 全局安装
    call npm install -g @ohos/hvigor @ohos/hvigor-ohos-plugin
    if %errorlevel% neq 0 (
        echo ERROR: Hvigor 安装失败，请手动安装 DevEco Studio
        echo 下载地址: https://developer.huawei.com/consumer/cn/deveco-studio/
        pause
        exit /b 1
    )
)
echo OK: Hvigor 构建工具已就绪

echo.
echo [3/4] 安装项目依赖...
cd /d "%PROJECT_DIR%"
if not exist "node_modules" (
    echo 正在安装依赖...
    call npm install
    if %errorlevel% neq 0 (
        echo ERROR: 依赖安装失败
        pause
        exit /b 1
    )
)
echo OK: 依赖已就绪

echo.
echo [4/4] 开始构建 HAP 包...
call hvigorw assembleHap
if %errorlevel% neq 0 (
    echo ERROR: HAP 构建失败
    pause
    exit /b 1
)

echo.
echo ============================================
echo         构建成功！
echo ============================================
echo.

set "HAP_DIR=%PROJECT_DIR%entry\build\outputs\hap\debug"
if exist "%HAP_DIR%" (
    echo 构建产物目录: %HAP_DIR%
    echo.
    dir "%HAP_DIR%" /b
) else (
    echo 正在查找构建产物...
    for /r "%PROJECT_DIR%" %%f in (*.hap) do (
        echo 找到 HAP 文件: %%f
        set "BUILD_SUCCESS=1"
    )
)

echo.
echo 构建完成！可以在 DevEco Studio 中运行或部署到设备。
echo.
pause
