# Default hooks

## useState
for simple local state.

```ts
const [data, setData] = useState('');
setData('abc');
console.log(data);
```

## useEffect
Call something asynchronously, or upon initialisation.

```ts
useEffect(() => {
  // do something
}, []);
```

For array dependency:
- `[]` means run only on init
- `[someVar]` means run on init and every time `someVar` updates
- `` means run on every re-render

If you want to run something when a component unmounts:
```ts
useEffect(() => {
  // run onmount code here

  return {
    // run unmount code here
  }
}, []);
```

## useContext
Semi-global state. See {TBD}

## useLayoutEffect
Same as `useEffect` but makes sure it runs *before* the next DOM render.

## useReducer
Similar to `useState`, but better for updating chains of state or complex objects.

```ts
const reducer = (state, action) => {
  switch (action) {
    case 1:
      return `1`;
    case 2:
      return `2`;
    default:
      return `x`;
  }
}
const [state, dispatch] = useReducer(reducer, '0');

dispatch(1);
console.log(state); // '1'
dispatch(2);
console.log(state); // '2'
```

To imitate `setState`:
```ts
const reducer = (state, newState) => newState;
const [state, setState] = useReducer(reducer, 'a');
setState('b');
console.log(state); // 'b'

## useCallback and useMemo
If you make something memoised, by doing:
```ts
memo(({heading}) => {
  return <h1>{heading}</h1>
});
```

Then it won't be re-rendered when the parent component is re-rendered unless the fields it depends on are updated. However if the fields it depends on are functions or other
things it may still get rendered. So wrap the thing that could cause it to re-render in `useCallback` or `useMemo` to prevent that.

## useRef
Couldn't quite understand this one

## useTransition
Makes updates to whatever is wrapped in `useTransition` de-prioritised, so other events will update first.

## useDeferredValue
Use it to slow down updates

## useId
generates a random id.

## useImperativeHandle and useRef
Use this to make state/actions from a child component accessible to a parent component.

In the child:
```ts
useImperativeHandle(myRef, () => {
  return {
    myState,
    myAction: () => {}
  }
});
```

The ref above could be passed in as a prop, or you can use `forwardRef` as mentioned below.

In the parent, or whatever is using it, create the ref:
```ts
type MyRef = {
  myState: string,
  myAction: () => void
} | undefined
const myRef: MyRef = useRef();
```

And reference it as `myRef.current?.myState` or `myRef.current?.myAction()`.

### using forwardRef
If you create your component using `forwardRef` you get access to `ref`:
```ts
const MyComponent = forwardRef((props, ref) => {
  // use ref
  return <></>'
});
```

Then when using the component you can pass in the ref.
```ts
<MyComponent ref={ref} />
```

But, as mentioned above, you can just pass it as a prop as well.
