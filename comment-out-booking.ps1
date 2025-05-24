# List of file paths to comment out (adjust paths as needed)
$filesToComment = @(
    "C:\Users\laure\OneDrive\Documents\Channelytics.ai\scale-clone\src\app\profit-performance-call\BookingCalendar.tsx",
    "C:\Users\laure\OneDrive\Documents\Channelytics.ai\scale-clone\src\app\api\availability\route.ts",
    "C:\Users\laure\OneDrive\Documents\Channelytics.ai\scale-clone\src\app\api\book-call\route.ts"
)

foreach ($filePath in $filesToComment) {
    if (Test-Path $filePath) {
        Write-Host "Commenting out file: $filePath"

        # Read all lines
        $lines = Get-Content $filePath

        # Prepend // to non-empty lines that are not already commented
        $commentedLines = $lines | ForEach-Object {
            if ($_ -match '^\s*//') {
                $_  # Already commented, leave as is
            }
            elseif ($_ -match '^\s*$') {
                $_  # Empty line, leave as is
            }
            else {
                "// $_"
            }
        }

        # Save back to file
        Set-Content -Path $filePath -Value $commentedLines -Encoding UTF8
    }
    else {
        Write-Warning "File not found: $filePath"
    }
}
