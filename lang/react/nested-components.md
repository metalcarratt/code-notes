# Components within components
In the parent:
```JavaScript
function App() {
  return (
    <TopComponent>
      <ChildComponent />
    </TopComponent>
  );
}
```

In `TopComponent`:
```JavaScript
function TopComponent(props) {
  return (
    <div>
      {props.children}
    </div>
  );
}
```
