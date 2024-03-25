# Vue apollo client with subscriptions

Install:
```sh
npm install @apollo/client, graphql-ws
```

# update link on client
```ts
import { ApolloClient, createHttpLink, InMemoryCache, split } from '@apollo/client/core';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { getMainDefinition } from '@apollo/client/utilities';

const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql',
});

const wsLink = new GraphQLWsLink(createClient({
    url: 'ws://localhost:4000/subscriptions'
}));

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind == 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink
)

const apolloClient = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache()
});
```

# query
```ts
const subscribeTests = gql(`
    subscription Test {
        test
    }
`)
```

# function
```ts
const observeTest = async (testStore: Ref<String>) => {
    const observer = apolloClient.subscribe({
        query: subscribeTests
    })

    observer.subscribe(
        async result => {
            testStore.value = result.data.test;
        },
        err => { console.log(`err: ${JSON.stringify(err)}`) }
    );
}
```
