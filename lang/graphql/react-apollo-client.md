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
