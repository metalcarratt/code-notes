# Templating

## Basic Site
Vue:
```vue
<template>
  This is an empty application
</template>
```
(`App.vue`)

React:
```tsx
function App() {
  return (
    <p>This is an empty application</p>
  );
}

export default App;
```
(`App.tsx`)

## Text Interpolation
Vue:
```vue
<template>
    <h1>This is {{ name }}</h1>
</template>

<script setup>
const name = 'Compare-Vue';
</script>
```

React:
```tsx
function App() {
  const name = 'Compare-React'
  return (
    <h1>This is {name}</h1>
  );
}

export default App;
```
