# Custom hooks

A hook must be named be prefixed with `use`, such as `useHookName`. It should be a function that returns something.

Inside a hook you can put other hooks. It mostly doesn't make sense to create a hook unless you use hooks within.

Example:
```ts
type Info = {
  name?: string,
  age?: number
}

function useData(initName: string, initAge: number) {
  const [info, setInfo] = useState<Info>({
    name: initName,
    age: initAge
  });

  const updateName = (name: string) => setInfo({...info, name});

  const updateAge = (age: number) => setInfo({...info, age});

  return {
    info,
    updateName,
    updateAge
  }
}
```

To use it:
```ts
const {info, updateName, updateAge} = useData('Bob', 24);

updateName('Max');

console.log(info.name);
```
