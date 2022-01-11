# Node package manager

## Install
Install package and add as normal dependency:
```Bash
npm install <package>
```

Add as dev dependency:
```Bash
npm install --save-dev <package>
```

## Update
Update all:
```Bash
npm update
```

Update package:
```Bash
npm update <package>
```

## Run tasks
Define a bash script in `package.json`:
```Json
{
  "scripts": {
    "start": "node lib/server.js"
  }
}
```

Run it:
```Bash
npm run start
```
