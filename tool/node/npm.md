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

## Uninstall
Remove from `./node_modules`:
```Bash
npm uninstall <package>
```

Remove also from `package.json`:
```Bash
npm uninstall -s <package>
```

Remove global:
```Bash
npm uninstall -g <package>
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

## Local vs global
`npm install` installs the package locally, in the `./node_modules` directory.

`npm -g install` installs the package globally. Globally installed packages are normally for executable commands such as `npm`, `vue-cli`, `create-react-app`.

## Semantic versioning



References:

https://nodejs.dev/learn/an-introduction-to-the-npm-package-manager

https://nodejs.dev/learn/where-does-npm-install-the-packages

https://nodejs.dev/learn/npm-global-or-local-packages
