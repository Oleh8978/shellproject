
$procid=get-process runapp |select -expand id
Get-Service -DisplayName "runappr" | Stop-Service -Verbose