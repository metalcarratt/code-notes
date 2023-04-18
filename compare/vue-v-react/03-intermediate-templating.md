# Intermediate Templating

## Model binding
Vue:
```vue
<template>
    <h1>This is {{ name }}</h1>
    <label>New Name</label>
    <input type="text" @input="change" :value="name" />
</template>

<script setup>
import { ref } from 'vue';

const name = ref('Compare-Vue');

const change = (event) => name.value = event.target.value;
</script>
```

Or, using `v-model`:
```vue
<template>
    <h1>This is {{ name }}</h1>
    <label>New Name</label>
    <input type="text" v-model="name" />
</template>

<script setup>
import { ref } from 'vue';

const name = ref('Compare-Vue');
</script>
```

React:
```tsx
import { useState } from 'react';

function App() {
    const [name, setName] = useState('Compare-React');

    function changeName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    return (
        <div>
            <h1>This is {name}</h1>
            <label>New Name</label>
            <input value={name} onChange={changeName} />
        </div>
    );
}

export default App;
```
