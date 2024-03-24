# Vue Apollo Client

## Create client
```ts
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core';

const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql',
})

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
    link: httpLink,
    cache
});
```

## Make query
```ts
import gql from 'graphql-tag';

const query = gql(`
    query TestQuery {
        test
    }
`);

const queryTest = async () => {
    const result = await apolloClient.query({
        query
    });
        
    return result.data.test;
};

## Make mutation
```ts
const mutation = gql(`
    mutation UpdateTest($test: String!) {
        updateTest(test: $test) {
            test
        }
    }
`);

const updateTest = async (test: string) => {
    const result = await apolloClient.mutate({
        mutation,
        variables: {
            test
        }
    });

    return result.data.updateTest;
}
```
