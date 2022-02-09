# OSX Console commands

List processes and grep by port:
```
sudo lsof -i -P | grep LISTEN | grep 7001
```

Or, ipv4 only:
```
sudo lsof -nP -i4TCP:7001 | grep LISTEN 
```

Kill service using port:
```
npx kill-port 8080
```
