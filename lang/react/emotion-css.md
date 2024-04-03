# Emotion
Site: https://emotion.sh/docs/introduction

Emotion is a CSS-in-JS lib.

Installation in React:
```sh
npm install --save @emotion/react
```

Put at top of files using emotion:
```ts
/** @jsxImportSource @emotion/react */
```

Object-css:
```ts
import { css } from '@emotion/react';

const myStyles = css({
    backgroundColor: '#aaa'
});

function MyComp() {
  return (<div css={myStyles}></div>)
}
```
