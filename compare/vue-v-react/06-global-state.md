# Global state
## Vue:

`list.ts`:
```ts
import { Ref, ref } from 'vue';

const list: Ref<string[]> = ref([
    'one',
    'two'
]);

export const myList = {
    add: (item: string) => list.value.push(item),
    list: () => list.value
}
```

`MyList.vue`:
```vue
<template>
    <ul>
        <li v-for="item in myList.list()" :key="item">{{ item }}</li>
    </ul>
</template>

<script setup>
import { myList } from '../code/list';
</script>
```

`AddButton.vue`:
```vue
<template>
    <input type="text" v-model="item" />
    <button @click="addItem">Add</button>
</template>

<script setup>
import { ref } from 'vue';
import { myList } from '../code/list';

const item = ref('');

const addItem = () => {
    myList.add(item.value);
    item.value = '';
}
</script>
```

`App.vue`:
```vue
<template>
    <h1>This is Compare-Vue</h1>
    <MyList />
    <AddButton />
</template>

<script setup>
import MyList from './components/MyList.vue';
import AddButton from './components/AddButton.vue';
</script>
```

## React:
`useMyList.tsx`:
```tsx
import { useState } from "react";

type MyListReturnType = [
    string[],
    (item: string) => void
] 

export const useMyList = (): MyListReturnType => {
    const [myList, setMyList] = useState([
        'one',
        'two'
    ]);

    const list = myList;

    const add = (item: string) => setMyList([...myList, item]);

    return [list, add];
}
```

`MyList.tsx`:
```tsx
function MyList(props: {list: string[]}) {
    return (
        <ul>
            {props.list.map(item => <li>{item}</li>)}
        </ul>
    )
}

export default MyList;
```

`AddButton.tsx`:
```tsx
import { useState } from "react";

function AddButton(props: {add: (item: string) => void}) {
    const [item, setItem] = useState('');
    
    const changeItem = (event: React.ChangeEvent<HTMLInputElement>) => 
        setItem(event.target.value);

    const addItem = () => {
        props.add(item);
        setItem('');
    }

    return (
        <div>
            <input type="text" value={item} onChange={changeItem} />
            <button onClick={addItem}>Add</button>
        </div>
    )
}

export default AddButton;
```

`App.tsx`:
```tsx
import { useMyList } from "./useMyList";
import MyList from './MyList';
import AddButton from './AddButton';

function App() {
    const [list, add] = useMyList();

    return (
        <div>
            <h1>This is Compare-React</h1>
            <MyList list={list} />
            <AddButton add={add}/>
        </div>
    );
}

export default App;
```

## Comparison
Biggest difference I can see is that React *requires* the state belong to a parent component and be passed down to children components via props. React doesn't allow me to use `useState` globally outside the React hook (in `useMyList`). What this means is if I don't put the hook on the parent component and try to use it directly from the children, each one gets its own version of the state. This is good for contextuallised state but makes it impossible to have global state without passing it down through props.
