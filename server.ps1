$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:8081/")
$listener.Start()
Write-Host "Server started at http://localhost:8081/" -ForegroundColor Green

$baseDir = Get-Location

while ($listener.IsListening) {
    $context = $listener.GetContext()
    $request = $context.Request
    $response = $context.Response
    
    $path = $request.Url.LocalPath
    if ($path -eq "/") { $path = "/makeuppal-demo-v3.6.5.html" }
    
    $filePath = Join-Path $baseDir $path.TrimStart("/")
    
    if (Test-Path $filePath) {
        $content = [System.IO.File]::ReadAllBytes($filePath)
        $response.ContentLength64 = $content.Length
        
        $ext = [System.IO.Path]::GetExtension($filePath)
        switch ($ext) {
            ".html" { $response.ContentType = "text/html; charset=utf-8" }
            ".css" { $response.ContentType = "text/css" }
            ".js" { $response.ContentType = "application/javascript" }
            ".jpg" { $response.ContentType = "image/jpeg" }
            ".png" { $response.ContentType = "image/png" }
            ".svg" { $response.ContentType = "image/svg+xml" }
            default { $response.ContentType = "application/octet-stream" }
        }
        
        $response.Headers.Add("Cache-Control", "no-cache, no-store, must-revalidate")
        $response.Headers.Add("Pragma", "no-cache")
        $response.Headers.Add("Expires", "0")
        
        $response.OutputStream.Write($content, 0, $content.Length)
    } else {
        $response.StatusCode = 404
        $msg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
        $response.ContentLength64 = $msg.Length
        $response.OutputStream.Write($msg, 0, $msg.Length)
    }
    
    $response.OutputStream.Close()
    $response.Close()
}
