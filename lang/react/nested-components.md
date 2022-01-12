# Components within components
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
