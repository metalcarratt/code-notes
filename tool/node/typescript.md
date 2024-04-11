# Typescript

Install TypeScript:
```Bash
npm i -D typescript
npm i -D nodemon
```

`tsconfig.json` file:
```json
{
    "compilerOptions": {
      "module": "commonjs",
      "esModuleInterop": true,
      "target": "es6",
      "moduleResolution": "node",
      "sourceMap": true,
      "outDir": "dist"
    },
    "lib": ["es2015"],
    "include": ["src/**/*"],
    "exclude": ["node_modules"]
}
```

In package.json:
```json
"scripts": {
    "serve": "set NODE_ENV=development && nodemon src/app.ts"
},
```
This creates a `example.js` that can be run by node.
