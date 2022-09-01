# Node

New project:
```bash
mkdir projectName
cd projectName
npm init
```

## Add Typescript
```bash
npm install --save-dev typescript
```

Add `tsconfig.json`, example:
```json
{
    "compilerOptions": {
      "module": "commonjs",
      "esModuleInterop": true,
      "target": "es6",
      "moduleResolution": "node",
      "sourceMap": true,
      "outDir": "dist",
      "lib": ["es2017", "es6", "dom"]
    },
    "lib": ["es2017"]
}
```

Create `src/app.ts`

Build:
```
npx tsc
```

Run:
```
node dist/app.js
```

Together:
```
npx tsc && node dist/app.js
```

Add `dist/` to `.gitignore`.
