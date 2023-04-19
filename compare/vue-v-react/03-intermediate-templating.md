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

Or, using `v-model` directive:
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

## Mouse clicks
Vue:
```vue
<template>
    <h1>This is Compare-Vue</h1>
    <p>Clicked: {{ clicked }}</p>
    <button @click="click">Click Me</button>
</template>

<script setup>
import { ref } from 'vue';

const clicked = ref(0);

const click = () => clicked.value++;
</script>
```

React:
```tsx
import { useState } from 'react';

function App() {
    const [clicked, setClicked] = useState(0);

    function click() {
        setClicked(clicked + 1);
    }
    return (
        <div>
            <h1>This is Compare React</h1>
            <p>Clicked: {clicked}</p>
            <button onClick={click}>Click Me</button>
        </div>
    );
}

export default App;
```
