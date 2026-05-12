$ErrorActionPreference = 'Stop'
$OutputEncoding = [System.Text.Encoding]::UTF8
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$remindDir = Join-Path $env:CLAUDE_PROJECT_DIR '.remind'
if (-not (Test-Path $remindDir)) { exit 0 }

$files = @(Get-ChildItem $remindDir -Filter '*.md' -File |
           Where-Object { $_.Name -ne 'README.md' })
if ($files.Count -eq 0) { exit 0 }

$blocks = foreach ($f in $files) {
    "===== .remind/$($f.Name) =====`n" + (Get-Content -Raw -Encoding UTF8 $f.FullName)
}
$content = $blocks -join "`n`n"

$preamble = @'
[REMIND SYSTEM ACTIVE] Pending phase-transition reminders loaded from this project's .remind/ folder. When you detect a major work-phase transition during this session (e.g., scenario -> image work, image -> problem composition, Stage1 -> Stage2, unit transition), check the trigger conditions in the items below and surface any pending matching items to the user. See feedback memory `feedback-remind-phase-transition` for the exact protocol.

'@

$payload = @{
    hookSpecificOutput = @{
        hookEventName     = 'SessionStart'
        additionalContext = $preamble + $content
    }
}

$payload | ConvertTo-Json -Depth 6 -Compress
