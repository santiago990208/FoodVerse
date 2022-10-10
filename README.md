# FoodVerse

## Connection with ssh in Windows PowerShell to OCI instance 
```
$path = "<key path>"
icacls.exe $path /reset
icacls.exe $path /GRANT:R "$($env:USERNAME):(R)"
icacls.exe $path /inheritance:r
ssh -i $path opc@<public ip instance>
```
