# React

## Create new React app

Create:
```bash
npx create-react-app <app-name>
```

Run:
```bash
cd <app-name>
npm start
```

## New component

Create it:
```JavaScript
function ComponentName() {
    return (
        <span>abc</span>
    );
}

export default ComponentName;
```

Use it:
```JavaScript
import ComponentName from './ComponentName.jsx';

function App() {
    return (
        <ComponentName />
    );
}

export default App;
```

## Props
Props:
```JavaScript
function ComponentName(props) {
    return (
        <span>{props.title}</span>
    );
}

export default ComponentName;
```

Pass in props:
```JavaScript
import ComponentName from './ComponentName.jsx';

function App() {
    return (
        <ComponentName title="abc" list={ ['abc'] }/>
    );
}

export default App;
```

## CSS

Just import in the component:
```JavaScript
import './style.css';
```
