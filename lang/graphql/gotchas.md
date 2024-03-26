# Gotchas

## The type of X must be Input Type but got: Y
When defining a GraphQL schema, you can't use a type for an input. So, if you created a type like so:
```
type Item {
  name: String
}
```

Which you use in a query, like so:
```
type Query {
  item: Item
}
```

You cannot use that as an input:
```
type Query {
  get(item: Item): Item
}
```

Instead you need to create an `input` and use that instead (even if it means duplication):
```
input ItemInput {
  name: String
}

type Query {
  get(item: ItemInput): Item
}
```
