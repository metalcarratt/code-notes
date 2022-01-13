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

const <sliceName>Slice = createSlice({
    name: '<name>',
    initialState: {
        // data
    },
    reducers: {
        <actionName>(state) {
            state.<data> // manipulate here
        }
    }
});

export const { <actionName> } = <sliceName>Slice.actions;
export default <sliceName>Slice.reducer;
```

A minimal store:
```JavaScript
import { configureStore } from '@reduxjs/toolkit';
import <sliceName>Reducer from '../<slice>.js';

export const store = configureStore({
    reducer: {
        <sliceName>: <sliceName>Reducer
    }
})
```

Wrap a part of the component tree, for example in `index.js`:
```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

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
import React from 'react';
import { useSelector } from 'react-redux';

function <CompName>() {

    const data = useSelector((state) => state.<data>);

    return (
        <div>
            {data}
        </div>
    );
}

export default <CompName>;
```
