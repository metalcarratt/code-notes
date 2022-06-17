# Bash

## Delete files that match a pattern
```
find . -name "*pattern" -delete
```

Reference: https://askubuntu.com/questions/43709/how-do-i-remove-all-files-that-match-a-pattern


## Network logging
1. Install tcpdump:
```
yum install tcpdump
```
2. List all network interfaces:
```
tcpdump -D
```
3. Listen for network traffic:
```
tcpdump -i any -A
```


## Find class in jars
```
for i in *.jar; do jar -tvf "$i" | grep -Hsi com/sun/xml/bind/v2/runtime/reflect/Accessor && echo "$i"; done
```

## Use SED to insert a line in a file
```
sed -i 's/find/replace/' filename
```
Where:
- `-i` means to save changes
- `find` is text to find in the file
- `replace` is test to replace it with
- `filename` is the name of the file to modify

## Use SED to extract from a file
https://unix.stackexchange.com/questions/312059/how-to-extract-a-portion-of-text-from-a-file-between-matched-conditions
