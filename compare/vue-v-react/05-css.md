# CSS
## Component scoped CSS
Vue:
```vue
<template>
    <h1>This is Compare-Vue</h1>
</template>

<style scoped>
h1 {
    color: blue;
}
</style>
```

React:

`App.tsx`:
```tsx
import './App.css';

function App() {
    return (
        <h1>This is Compare-React</h1>
    );
}

export default App;
```

`App.css`:
```css
h1 {
    color: blue;
}
```
