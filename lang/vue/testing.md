# Vitest
Uses same api as jest

Install:
```sh
npm install -D vitest
```

Add `vite.config.js` to root directory:
```ts
/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from 'path'
// https://vitejs.dev/config/

export default defineConfig({
    plugins: [vue()],
    test: {
        // ...
    },
    resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
        },
    }
});
```

Add to `package.json`:
```json
"scripts": {
    "test": "vitest"
}
```

And run:
```sh
npm run test
```

May also need to install:
```sh
npm install "@vitejs/plugin-vue"
```

## Test files
Finds and runs tests of the format `xyz.test.js` or `xyz.test.ts`.

Example test:
```ts
import {expect, test} from 'vitest';

test('Recruit', () => {
    const result = true;
    expect(result).toBe(true);
});
```
