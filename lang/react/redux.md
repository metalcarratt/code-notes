# Redux
## Install
Npm:
```
npm install @reduxjs/toolkit
npm install react-redux
```

## Concepts
A **store** had multiple **slices**. Each **slice** is a bit of state we want to share between components.

A **reducer** is a method for changing state.

The **Provider** makes the store available to all components within a component tree.

## Code

A minimal slice:
```JavaScript
import { createSlice } from '@reduxjs/toolkit';

const <nnnSlice> = createSlice({
    name: '<nnn>',
    initialState: {
        // data
    },
    reducers: {
        <actionName>(state) {
            state.<data> // manipulate here
        }
    }
});

export const { <actionName> } = <nnnSlice>.actions;
export default <nnnSlice>.reducer;
```

A minimal store:
```JavaScript
import { configureStore } from '@reduxjs/toolkit';
import <nnnReducer> from '../<slice>.js';

export const store = configureStore({
    reducer: {
        <nnn>: <nnnReducer>
    }
})
```

Wrap a part of the component tree, for example in `index.js`:
```JavaScript
import { Provider } from 'react-redux';
import { store } from './app/store.js';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
```

Use the state in a component:
```JavaScript
import { useSelector } from 'react-redux';

function <CompName>() {

    const data = useSelector((state) => state.<data>);

    return (
        <div>
            {data}
        </div>
    );
}
```

Update state in a component:
```
```JavaScript
import { useDispatch } from 'react-redux';
import { <actionName> } from './app/store.js';

function <CompName>() {

    const dispatch = useDispatch();
    
    function handleChange(event) {
      dispatch(<actionName>(event.target.value));
    }

    return (
        <div>
            <textarea value={data} onChange={handleChange} />
        </div>
    );
}
```
```
