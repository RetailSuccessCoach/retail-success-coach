# Set your project directory
$projectPath = "C:\Users\laure\OneDrive\Documents\Channelytics.ai\scale-clone"

# 1. Update next.config.js with a redirect
$nextConfigPath = Join-Path $projectPath "next.config.js"
$redirectBlock = @"
  async redirects() {
    return [
      {
        source: '/second-opinion-channel-audit',
        destination: '/second-opinion-audit',
        permanent: true,
      },
    ];
  },
"@

# Add redirect block if not present
if (-not (Get-Content $nextConfigPath | Select-String "source: '/second-opinion-channel-audit'")) {
  (Get-Content $nextConfigPath) -replace "module\.exports\s*=\s*\{", "module.exports = {\n$redirectBlock" |
    Set-Content $nextConfigPath
  Write-Host "✅ Redirect added to next.config.js"
} else {
  Write-Host "⚠️ Redirect already present in next.config.js"
}

# 2. Comment out nav links
$layoutFiles = Get-ChildItem -Path $projectPath -Recurse -Include *.tsx | Where-Object { $_.FullName -match "MainNav|Header|layout" }

$targets = @("case-studies", "insights", "contact")
foreach ($file in $layoutFiles) {
  $content = Get-Content $file.FullName
  $updated = $false

  foreach ($target in $targets) {
    $pattern = ".*\/$target.*"
    if ($content -match $pattern) {
      $content = $content -replace "(\s*<Link[^>]+\/$target[^>]+>)", "`n{/*$1*/}"
      $updated = $true
    }
  }

  if ($updated) {
    $content | Set-Content $file.FullName
    Write-Host "✅ Commented out links in: $($file.Name)"
  }
}

Write-Host "`nAll done. Don't forget to redeploy your site."
