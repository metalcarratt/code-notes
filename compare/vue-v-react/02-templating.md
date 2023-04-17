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

## Looping
Vue:
```vue
<template>
    <h1>This is {{ name }}</h1>
    <ul>
        <li v-for="(item, index) in items" :key="index">
            {{ item }}
        </li>
    </ul>
</template>

<script setup>
const name = 'Compare-Vue';
const items = ['One', 'Two', 'Three'];
</script>
```

React:
```tsx
function App() {
    const name = 'Compare-React'
    const items = ['One', 'Two', 'Three'];
    return (
        <div>
            <h1>This is {name}</h1>
            <ul>
                {items.map(item => <li>{item}</li>)}
            </ul>
        </div>
    );
}

export default App;
```

## Conditional Rendering
Vue:
```vue
<template>
    <h1>This is {{ name }}</h1>
    <ul>
        <li v-for="(item, index) in items" :key="index">
            <b v-if="item.bold">{{ item.text }}</b>
            <template v-else>{{ item.text }}</template>
        </li>
    </ul>
</template>

<script setup>
const name = 'Compare-Vue';
const items = [
    {
        text: 'One',
        bold: false
    },
    {
        text: 'Two',
        bold: true
    },
    {
        text: 'Three',
        bold: false
    }
];
</script>
```

React:
```tsx
function App() {
    const name = 'Compare-React'
    const items = [
        {
            text: 'One',
            bold: false
        },
        {
            text: 'Two',
            bold: true
        },
        {
            text: 'Three',
            bold: false
        }
    ];
    return (
        <div>
            <h1>This is {name}</h1>
            <ul>
                {items.map(item => 
                    <li>
                        {item.bold ? <b>{item.text}</b> : item.text}
                    </li>
                )}
            </ul>
        </div>
    );
}

export default App;
```
