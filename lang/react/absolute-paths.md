# Import with absolute paths

Add a `config.js` in the root and enter:
```Json
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "exclude": ["node_modules", "build"],
  "include": ["src"]
}
```

Reference: https://dev.to/emanuelone/how-to-use-absolute-path-in-reactjs-503i
