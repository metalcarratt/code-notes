# State

Steps to add state:

## 1. Convert component from function to class:
```JavaScript
function MyComponent() {
  return (
    <div>Hello</div>
  );
}
```

To:

```JavaScript
class MyComponent extends React.Component {
  render() {
    return (
      <div>Hello</div>
    );
  }
}
```

## 2. Add a constructor and initialise state
Add a constructor that initialises props and state:
```JavaScript
class MyComponent extends React.Component {
  constructor(props) {
    super(props); // important
    this.state = {
      myState: 123
    }
  }
  ... // render
}
```

## 3. Use the state in the component
```JavaScript
class MyComponent extends React.Component {
  ... // constructor
  render() {
    return (
      <div>{this.state.myState}</div>
    );
  }
}
```

## 4. Update the state using setState
```JavaScript
class MyComponent extends React.Component {
  ... // constructor
  update() {
    this.setState({
      myState: 345
    });
  } // ?
  ... // render
}
```

## Note: state update should not depend on previous state
If you need to depend on previous state, use a function instead:
```JavaScript
this.setState((state, props) => ({
  myState: state.myState + 1
}));
```

Reference: https://reactjs.org/docs/state-and-lifecycle.html
