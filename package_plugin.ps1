# 設定擴充功能檔案的來源目錄
$SourcePath = "."

# 設定輸出 zip 檔案的名稱
$ZipFileName = "plugin.zip"

# 移除現有的 zip 檔案 (如果存在)
if (Test-Path $ZipFileName) {
  Remove-Item $ZipFileName
}

# 使用 Compress-Archive Cmdlet 建立 zip 檔案，排除 .git 目錄和 .gitignore 檔案
Compress-Archive -Path @(Get-ChildItem -Path $SourcePath | Where-Object {$_.Name -notlike ".git*" -and $_.Name -notlike ".gitignore"}) -DestinationPath $ZipFileName -Force
