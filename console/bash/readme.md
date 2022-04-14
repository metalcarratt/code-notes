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
