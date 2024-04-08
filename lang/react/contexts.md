# Contexts
Define your data model:
```ts
type Data = {
  first: string,
  second: boolean
}
```

Create a context with dummy init state:
```ts
const MyContext = createContext<Data>({
  first: '',
  second: false
});
```

Create a provider:
```ts
const MyProvider = ({children}: PropsWithChildren) => {
  const [data, setData] = useState({
    first: 'abc',
    second: true
  });

const value = {
  data, setData
};

return <MyContext.Provider value={value}>{children}</MyContext.Provider>
```

Optionally provide hooks to simplify data access:
```ts
function useFirst() {
  const context = useContext(MyContext);
  const getFirst = context.data.first;
  const setFirst = (newState: string) => context.setData({...context.data, first: newState});
  return {
    getFirst, setFirst
  }
}
```

Then use it:
```ts
<MyContextProvider>
  // ...
</MyContextProvider>
```
