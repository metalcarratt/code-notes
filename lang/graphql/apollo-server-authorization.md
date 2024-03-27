# Server Authorization

## Using token from the Authorization header
Update the server as follows:
```ts
app.use(
  '/graphql',
  cors(),
  express.json(),
  expressMiddleware(server, {
    context: async ({ req }) => ({
      token: req?.headers?.authorization?.split(' ')[1] ?? '' // extract token from authorization header and put into context
    })
  })
);
```

In the resolver, get the token from the third argument passed in:
```ts
const resolvers = {
  Query: {
    list: (_, __, { token }) => { // get token from context
      const userId = SessionUsers.getUserId(token); // translate token to userId
      return list.filter(item => item.owner === userId); // filter results based on userId
    }
  }
}
```

## Use variables for subscriptions
In schema pass token as a variable:
```
type Subscription {
    lists(token: ID!): [List]
}
```

Then in the `resolve`, filter based on variable:
```ts
Subscription: {
  list: {
    subscribe: () => pubSub.asyncIterator([PUBSUB_CHECKLISTS_MODIFIED]),
    resolve: (payload, {token}) => {
      const userId = SessionUsers.getUserId(token);
      return payload.filter(item => item.owner === userId);
    }
  }
}
```
