# Calling Rest
Both below examples require installing `axios` first:

```sh
npm install axios
```

## Vue
```vue
<template>
    <h1>This is Compare-Vue</h1>
    <img :src="img" />
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const img = ref('');

onMounted(async () => {
    const ditto = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
    img.value = ditto.data.sprites.front_default;
})

</script>
```

## React
```tsx
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
    const [img, setImg] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const ditto = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
            setImg(ditto.data.sprites.front_default);
        }
        fetchData();
    })
    return (
        <div>
            <h1>This is Compare-React</h1>
            <img src={img} />
        </div>
    );
}

export default App;
```
