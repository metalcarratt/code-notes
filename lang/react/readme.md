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
## Topics
[New component](new-component.md)

[Props](props.md)


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
