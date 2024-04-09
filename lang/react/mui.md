# Material UI

To install:
```sh
npm install @mui/material @emotion/react @emotion/styled
npm install @fontsource/roboto
```

## TextField
```jsx
<TextField
  sx={}
  value={value}
  onChange={event => setValue(event.target.value)}
/>
```
Where `sx` is an object, very similar to emotion.js.

use `value` and `onChange` to handle state.

```jsx
<TextField
  fullWidth
  multiline
  rows={4}
/>
```
`fullWidth` makes it fullwidth. `multiline` turns it into a textarea. `rows` specify how many rows are visible.
