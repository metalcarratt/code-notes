# React Apollo Client
Install:
```sh
npm install @apollo/client graphql
```

Create server (in any .ts file):
```ts
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const apolloClient = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
});
```

Call:
```ts
import { gql } from "@apollo/client";

const result = await apolloClient.query({
  query: gql`
    query LogInUser {
      user(name: "${username}", password: "${password}")
    }
  `,
});
const success = result.data.user;
```

## Using the Provider
Wrap your application in the `ApolloProvider`:
```jsx
<ApolloProvider client={apolloClient}>
    // application
</ApolloProvider>
```
(Where `apolloClient` above is the client created earlier)

Then you can use the `useQuery` and `useMutation` hooks.

### useQuery
https://www.apollographql.com/docs/react/data/queries
Simple use-case:
```ts
const { loading, error, data } = useQuery(GQL);
data.<result-name>
```

With variables:
```ts
const { data } = useQuery(GQL, {
    variables: {
        // vars
    }
});
```

### useMutation
https://www.apollographql.com/docs/react/data/mutations
First call `useMutation` to get back a 'do mutation' function:
```ts
const [doMutate] = useMutation(GQL);
```

Then call it with variables:
```ts
doMutate({
    variables: {
        // vars
    }
});
```
