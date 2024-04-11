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

To target specific styles in css:
```ts
import { inputBaseClasses } from "@mui/material";
```

And then:
```ts
const sx = {
  [`.${inputBaseClasses.root}`]: {
    // styles for root element
  },
  [`.${inputBaseClasses.input}`]: {
    // styles for input element
  },
}
```

## Text and headers
```jsx
<Typography variant="h2" align='center'>Text</Typography>
```
Text that displays as centered h2

## Table
Simple table:
```jsx
<Table>
  <TableBody>
    <TableRow>
      <TableCell>1</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

## Lists
```jsx
<List>
  <ListItem>
    <ListItemButton> // makes it clickable
      <ListItemIcon>/* icon */</ListItemIcon>
      <ListItemText>/* Text */</ListItemText>
    </ListItemButton>
  </ListItem>
</List>
```

## Custom layouts
Simple:
```jsx
<Box>
  // stuff
</Box>
```

With css:
```jsx
const sx = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between'
}

<Box sx={sx}>
  // stuff
</Box>
```

