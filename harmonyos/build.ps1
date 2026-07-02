Write-Host "============================================" -ForegroundColor Cyan
Write-Host "    妆伴 MakeupPal - 鸿蒙应用构建脚本" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

$projectDir = Get-Location
$buildSuccess = $false

Write-Host "[1/4] 检查 Node.js 环境..." -ForegroundColor Yellow
try {
    $nodeVersion = (node --version) -replace "v", ""
    Write-Host "OK: Node.js v$nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "ERROR: 未检测到 Node.js，请先安装 Node.js (推荐 18+)" -ForegroundColor Red
    Write-Host "下载地址: https://nodejs.org/" -ForegroundColor Gray
    Read-Host "按 Enter 键退出"
    exit 1
}

Write-Host ""
Write-Host "[2/4] 检查 Hvigor 构建工具..." -ForegroundColor Yellow
try {
    Get-Command hvigorw -ErrorAction Stop | Out-Null
    Write-Host "OK: Hvigor 构建工具已就绪" -ForegroundColor Green
} catch {
    Write-Host "WARNING: 未检测到 hvigorw，尝试使用 npm 全局安装" -ForegroundColor Yellow
    npm install -g @ohos/hvigor @ohos/hvigor-ohos-plugin
    if ($LASTEXITCODE -ne 0) {
        Write-Host "ERROR: Hvigor 安装失败，请手动安装 DevEco Studio" -ForegroundColor Red
        Write-Host "下载地址: https://developer.huawei.com/consumer/cn/deveco-studio/" -ForegroundColor Gray
        Read-Host "按 Enter 键退出"
        exit 1
    }
    Write-Host "OK: Hvigor 安装成功" -ForegroundColor Green
}

Write-Host ""
Write-Host "[3/4] 安装项目依赖..." -ForegroundColor Yellow
if (-not (Test-Path "node_modules")) {
    Write-Host "正在安装依赖..." -ForegroundColor Gray
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "ERROR: 依赖安装失败" -ForegroundColor Red
        Read-Host "按 Enter 键退出"
        exit 1
    }
}
Write-Host "OK: 依赖已就绪" -ForegroundColor Green

Write-Host ""
Write-Host "[4/4] 开始构建 HAP 包..." -ForegroundColor Yellow
hvigorw assembleHap
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: HAP 构建失败" -ForegroundColor Red
    Read-Host "按 Enter 键退出"
    exit 1
}

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "         构建成功！" -ForegroundColor Green
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

$hapDir = Join-Path $projectDir "entry\build\outputs\hap\debug"
if (Test-Path $hapDir) {
    Write-Host "构建产物目录: $hapDir" -ForegroundColor Gray
    Write-Host ""
    Get-ChildItem $hapDir | Select-Object Name
    $buildSuccess = $true
} else {
    Write-Host "正在查找构建产物..." -ForegroundColor Yellow
    $hapFiles = Get-ChildItem -Path $projectDir -Recurse -Filter "*.hap" -ErrorAction SilentlyContinue
    if ($hapFiles) {
        foreach ($file in $hapFiles) {
            Write-Host "找到 HAP 文件: $($file.FullName)" -ForegroundColor Green
            $buildSuccess = $true
        }
    } else {
        Write-Host "未找到 HAP 文件，请检查构建日志" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "构建完成！可以在 DevEco Studio 中运行或部署到设备。" -ForegroundColor Cyan
Read-Host "按 Enter 键退出"
