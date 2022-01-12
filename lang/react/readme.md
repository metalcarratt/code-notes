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

[New component](new-component.md)



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

## Components within components
In the parent:
```
function App() {
  return (
    <TopComponent>
      <ChildComponent />
    </TopComponent>
  );
}
```

In `TopComponent`:
```
function TopComponent(props) {
  return (
    <div>
      {props.children}
    </div>
  );
}
```
