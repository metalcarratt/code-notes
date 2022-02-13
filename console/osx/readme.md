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

# Aliases
List aliases
```
alias
```

Edit alias file:
```
vi ~/.zshrc
```

Create normal alias (command):
```
alias <a>="<b>"
```
Where the alias is <a> and the command is "b"
  
Global alias (anything):
```
alias -g <a>="<b>"
```
  
